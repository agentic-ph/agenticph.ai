# System Design Patterns for Hono + Vite + Cloudflare Workers

## Architecture Overview

### Edge-First Design Principles

- Design for global distribution across Cloudflare's edge network
- Minimize cold start times by keeping bundles small
- Leverage edge computing for reduced latency
- Design stateless applications that can run anywhere

### Scalability Considerations

```typescript
// Design for horizontal scaling
interface ScalableService {
  // Stateless operations only
  processRequest(input: RequestData): Promise<ResponseData>;

  // Use external storage for state
  getState(key: string): Promise<StateData>;
  setState(key: string, data: StateData): Promise<void>;
}

// Example: User session management
class EdgeSessionManager implements ScalableService {
  constructor(private kv: KVNamespace) {}

  async processRequest(input: SessionRequest): Promise<SessionResponse> {
    const sessionData = await this.getState(input.sessionId);
    // Process without local state
    return this.generateResponse(sessionData, input);
  }

  async getState(sessionId: string): Promise<SessionData> {
    const data = await this.kv.get(`session:${sessionId}`);
    return data ? JSON.parse(data) : null;
  }

  async setState(sessionId: string, data: SessionData): Promise<void> {
    await this.kv.put(`session:${sessionId}`, JSON.stringify(data), {
      expirationTtl: 3600, // 1 hour
    });
  }
}
```

## Service Architecture Patterns

### Microservice Boundaries

```typescript
// Define clear service boundaries
interface UserService {
  getUser(id: string): Promise<User>;
  createUser(data: CreateUserRequest): Promise<User>;
  updateUser(id: string, data: UpdateUserRequest): Promise<User>;
}

interface AuthService {
  authenticate(token: string): Promise<AuthResult>;
  generateToken(userId: string): Promise<string>;
  revokeToken(token: string): Promise<void>;
}

interface NotificationService {
  sendEmail(to: string, template: string, data: any): Promise<void>;
  sendPush(userId: string, message: string): Promise<void>;
}

// Implement services as separate Hono apps
const createUserService = (env: CloudflareBindings): Hono => {
  const app = new Hono<{ Bindings: CloudflareBindings }>();

  app.get("/users/:id", async (c) => {
    const userService = new UserServiceImpl(env.DATABASE_URL);
    const user = await userService.getUser(c.req.param("id"));
    return c.json(user);
  });

  return app;
};
```

### API Gateway Pattern

```typescript
// Central API gateway for routing and middleware
const createAPIGateway = (services: ServiceRegistry) => {
  const gateway = new Hono<{ Bindings: CloudflareBindings }>();

  // Global middleware
  gateway.use("*", cors());
  gateway.use("*", logger());
  gateway.use("/api/*", authMiddleware);

  // Route to services
  gateway.route("/api/users", services.userService);
  gateway.route("/api/auth", services.authService);
  gateway.route("/api/notifications", services.notificationService);

  // Health check aggregation
  gateway.get("/health", async (c) => {
    const healthChecks = await Promise.allSettled([
      services.userService.request("/health"),
      services.authService.request("/health"),
      services.notificationService.request("/health"),
    ]);

    const results = healthChecks.map((check, index) => ({
      service: ["user", "auth", "notification"][index],
      status: check.status === "fulfilled" ? "healthy" : "unhealthy",
      details: check.status === "fulfilled" ? check.value : check.reason,
    }));

    const allHealthy = results.every((r) => r.status === "healthy");
    return c.json({ services: results }, allHealthy ? 200 : 503);
  });

  return gateway;
};
```

## Data Architecture

### Database Design for Edge Computing

```typescript
// Design for eventual consistency
interface EventStore {
  appendEvent(streamId: string, event: DomainEvent): Promise<void>;
  getEvents(streamId: string, fromVersion?: number): Promise<DomainEvent[]>;
}

interface ReadModel {
  updateFromEvent(event: DomainEvent): Promise<void>;
  query(criteria: QueryCriteria): Promise<QueryResult>;
}

// Example: User aggregate with event sourcing
class UserAggregate {
  constructor(
    private id: string,
    private eventStore: EventStore,
    private version: number = 0
  ) {}

  async createUser(userData: CreateUserData): Promise<void> {
    const event: UserCreatedEvent = {
      type: "UserCreated",
      aggregateId: this.id,
      version: this.version + 1,
      timestamp: new Date().toISOString(),
      data: userData,
    };

    await this.eventStore.appendEvent(this.id, event);
    this.version++;
  }

  static async fromHistory(
    id: string,
    eventStore: EventStore
  ): Promise<UserAggregate> {
    const events = await eventStore.getEvents(id);
    const aggregate = new UserAggregate(id, eventStore);

    events.forEach((event) => {
      aggregate.applyEvent(event);
    });

    return aggregate;
  }
}
```

### Caching Strategy

```typescript
// Multi-layer caching strategy
interface CacheStrategy {
  get(key: string): Promise<any>;
  set(key: string, value: any, ttl?: number): Promise<void>;
  invalidate(pattern: string): Promise<void>;
}

class EdgeCacheStrategy implements CacheStrategy {
  constructor(
    private edgeCache: Cache, // Cloudflare Cache API
    private kvStore: KVNamespace, // Cloudflare KV
    private memoryCache: Map<string, any> // In-memory cache
  ) {}

  async get(key: string): Promise<any> {
    // Try memory cache first (fastest)
    if (this.memoryCache.has(key)) {
      return this.memoryCache.get(key);
    }

    // Try edge cache (fast)
    const edgeCached = await this.edgeCache.match(key);
    if (edgeCached) {
      const data = await edgeCached.json();
      this.memoryCache.set(key, data);
      return data;
    }

    // Try KV store (slower but persistent)
    const kvCached = await this.kvStore.get(key);
    if (kvCached) {
      const data = JSON.parse(kvCached);
      this.memoryCache.set(key, data);
      await this.edgeCache.put(key, new Response(JSON.stringify(data)));
      return data;
    }

    return null;
  }

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    // Set in all cache layers
    this.memoryCache.set(key, value);

    const response = new Response(JSON.stringify(value), {
      headers: { "Cache-Control": `max-age=${ttl}` },
    });
    await this.edgeCache.put(key, response);

    await this.kvStore.put(key, JSON.stringify(value), {
      expirationTtl: ttl,
    });
  }
}
```

## Security Architecture

### Zero Trust Security Model

```typescript
// Implement zero trust principles
interface SecurityContext {
  userId?: string;
  roles: string[];
  permissions: string[];
  deviceId?: string;
  ipAddress: string;
  userAgent: string;
}

const createSecurityMiddleware = () => {
  return async (c: Context, next: Next) => {
    const securityContext: SecurityContext = {
      roles: [],
      permissions: [],
      ipAddress: c.req.header("CF-Connecting-IP") || "unknown",
      userAgent: c.req.header("User-Agent") || "unknown",
    };

    // Authenticate user
    const token = c.req.header("Authorization")?.replace("Bearer ", "");
    if (token) {
      try {
        const authResult = await verifyToken(token, c.env.JWT_SECRET);
        securityContext.userId = authResult.userId;
        securityContext.roles = authResult.roles;
        securityContext.permissions = authResult.permissions;
      } catch (error) {
        return c.json({ error: "Invalid token" }, 401);
      }
    }

    // Rate limiting by IP
    const rateLimitKey = `rate_limit:${securityContext.ipAddress}`;
    const currentCount = await c.env.KV_STORE.get(rateLimitKey);
    if (currentCount && parseInt(currentCount) > 100) {
      return c.json({ error: "Rate limit exceeded" }, 429);
    }

    // Store security context
    c.set("security", securityContext);
    await next();
  };
};
```

### Authorization Patterns

```typescript
// Role-based access control
interface Permission {
  resource: string;
  action: string;
  conditions?: Record<string, any>;
}

class AuthorizationService {
  private rolePermissions: Map<string, Permission[]> = new Map();

  constructor() {
    // Define role permissions
    this.rolePermissions.set("admin", [{ resource: "*", action: "*" }]);

    this.rolePermissions.set("user", [
      { resource: "user", action: "read", conditions: { ownResource: true } },
      { resource: "user", action: "update", conditions: { ownResource: true } },
    ]);
  }

  hasPermission(
    roles: string[],
    resource: string,
    action: string,
    context: any = {}
  ): boolean {
    for (const role of roles) {
      const permissions = this.rolePermissions.get(role) || [];

      for (const permission of permissions) {
        if (this.matchesPermission(permission, resource, action, context)) {
          return true;
        }
      }
    }

    return false;
  }

  private matchesPermission(
    permission: Permission,
    resource: string,
    action: string,
    context: any
  ): boolean {
    // Check resource match
    if (permission.resource !== "*" && permission.resource !== resource) {
      return false;
    }

    // Check action match
    if (permission.action !== "*" && permission.action !== action) {
      return false;
    }

    // Check conditions
    if (permission.conditions) {
      for (const [key, value] of Object.entries(permission.conditions)) {
        if (context[key] !== value) {
          return false;
        }
      }
    }

    return true;
  }
}
```

## Monitoring and Observability

### Distributed Tracing

```typescript
// Implement distributed tracing
interface TraceContext {
  traceId: string;
  spanId: string;
  parentSpanId?: string;
  baggage: Record<string, string>;
}

const createTracingMiddleware = () => {
  return async (c: Context, next: Next) => {
    const traceId = c.req.header("X-Trace-ID") || generateTraceId();
    const spanId = generateSpanId();

    const traceContext: TraceContext = {
      traceId,
      spanId,
      parentSpanId: c.req.header("X-Parent-Span-ID"),
      baggage: {},
    };

    // Add trace headers to response
    c.res.headers.set("X-Trace-ID", traceId);
    c.res.headers.set("X-Span-ID", spanId);

    // Store trace context
    c.set("trace", traceContext);

    const start = Date.now();
    await next();
    const duration = Date.now() - start;

    // Log span
    console.log(
      JSON.stringify({
        traceId,
        spanId,
        parentSpanId: traceContext.parentSpanId,
        operation: `${c.req.method} ${c.req.url}`,
        duration,
        status: c.res.status,
        timestamp: new Date().toISOString(),
      })
    );
  };
};
```

### Metrics Collection

```typescript
// Collect application metrics
interface MetricsCollector {
  increment(metric: string, tags?: Record<string, string>): void;
  gauge(metric: string, value: number, tags?: Record<string, string>): void;
  histogram(metric: string, value: number, tags?: Record<string, string>): void;
}

class CloudflareMetricsCollector implements MetricsCollector {
  constructor(private analytics: AnalyticsEngineDataset) {}

  increment(metric: string, tags: Record<string, string> = {}): void {
    this.analytics.writeDataPoint({
      blobs: [metric],
      doubles: [1],
      indexes: [JSON.stringify(tags)],
    });
  }

  gauge(
    metric: string,
    value: number,
    tags: Record<string, string> = {}
  ): void {
    this.analytics.writeDataPoint({
      blobs: [metric],
      doubles: [value],
      indexes: [JSON.stringify(tags)],
    });
  }

  histogram(
    metric: string,
    value: number,
    tags: Record<string, string> = {}
  ): void {
    this.analytics.writeDataPoint({
      blobs: [`${metric}.histogram`],
      doubles: [value],
      indexes: [JSON.stringify(tags)],
    });
  }
}
```
