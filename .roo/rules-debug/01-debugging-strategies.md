# Debugging Strategies for Hono + Vite + Cloudflare Workers

## Development Environment Debugging

### Vite Dev Server Debugging

- Use browser DevTools for client-side debugging
- Leverage Vite's built-in error overlay for build issues
- Check Vite dev server console for SSR errors
- Use `console.log()` statements in development mode

### Cloudflare Workers Local Debugging

```typescript
// Add debug logging in development
app.use("*", async (c, next) => {
  if (c.env.ENVIRONMENT === "development") {
    console.log(`${c.req.method} ${c.req.url}`);
    console.log("Headers:", Object.fromEntries(c.req.headers));
  }
  await next();
});

// Debug environment variables
app.get("/debug/env", (c) => {
  if (c.env.ENVIRONMENT !== "production") {
    return c.json({
      environment: c.env.ENVIRONMENT,
      // Only expose non-sensitive env vars
      hasDatabase: !!c.env.DATABASE_URL,
      hasApiKey: !!c.env.API_KEY,
    });
  }
  return c.json({ error: "Not available in production" }, 403);
});
```

## SSR Debugging Patterns

### Server vs Client Rendering Issues

```typescript
// Debug SSR hydration mismatches
const DebugComponent = ({ data }: { data: any }) => {
  if (import.meta.env.SSR) {
    console.log("SSR render:", data);
  } else {
    console.log("Client hydration:", data);
  }

  return <div data-debug={JSON.stringify(data)}>{/* Component content */}</div>;
};

// Check for hydration errors
if (!import.meta.env.SSR) {
  window.addEventListener("error", (event) => {
    if (event.message.includes("hydration")) {
      console.error("Hydration error detected:", event);
    }
  });
}
```

### Environment Variable Debugging

```typescript
// Debug missing environment variables
const validateEnvironment = (c: Context) => {
  const required = ["DATABASE_URL", "API_KEY"];
  const missing = required.filter((key) => !c.env[key]);

  if (missing.length > 0) {
    console.error("Missing environment variables:", missing);
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
};

app.use("*", async (c, next) => {
  try {
    validateEnvironment(c);
    await next();
  } catch (error) {
    console.error("Environment validation failed:", error);
    return c.json({ error: "Server configuration error" }, 500);
  }
});
```

## Error Tracking and Logging

### Structured Error Logging

```typescript
interface ErrorLog {
  timestamp: string;
  level: "error" | "warn" | "info";
  message: string;
  stack?: string;
  context: {
    url: string;
    method: string;
    userAgent?: string;
    ip?: string;
  };
}

const logError = (error: Error, c: Context): ErrorLog => {
  const log: ErrorLog = {
    timestamp: new Date().toISOString(),
    level: "error",
    message: error.message,
    stack: error.stack,
    context: {
      url: c.req.url,
      method: c.req.method,
      userAgent: c.req.header("User-Agent"),
      ip: c.req.header("CF-Connecting-IP"),
    },
  };

  console.error(JSON.stringify(log));
  return log;
};

app.onError(async (err, c) => {
  const errorLog = logError(err, c);

  // Send to external logging service in production
  if (c.env.ENVIRONMENT === "production" && c.env.ERROR_WEBHOOK) {
    await fetch(c.env.ERROR_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(errorLog),
    });
  }

  return c.json({ error: "Internal Server Error" }, 500);
});
```

## Performance Debugging

### Request Timing

```typescript
// Add request timing middleware
app.use("*", async (c, next) => {
  const start = Date.now();

  await next();

  const duration = Date.now() - start;
  c.res.headers.set("X-Response-Time", `${duration}ms`);

  if (duration > 1000) {
    console.warn(
      `Slow request: ${c.req.method} ${c.req.url} took ${duration}ms`
    );
  }
});
```

### Memory Usage Monitoring

```typescript
// Monitor memory usage (Node.js environments)
const logMemoryUsage = () => {
  if (typeof process !== "undefined" && process.memoryUsage) {
    const usage = process.memoryUsage();
    console.log("Memory usage:", {
      rss: `${Math.round(usage.rss / 1024 / 1024)}MB`,
      heapTotal: `${Math.round(usage.heapTotal / 1024 / 1024)}MB`,
      heapUsed: `${Math.round(usage.heapUsed / 1024 / 1024)}MB`,
    });
  }
};

// Log memory usage periodically in development
if (process.env.NODE_ENV === "development") {
  setInterval(logMemoryUsage, 30000);
}
```

## Database and External Service Debugging

### Database Query Debugging

```typescript
// Debug database queries
const debugQuery = async (query: string, params: any[]) => {
  const start = Date.now();

  try {
    const result = await db.query(query, params);
    const duration = Date.now() - start;

    console.log("DB Query:", {
      query: query.substring(0, 100) + (query.length > 100 ? "..." : ""),
      params,
      duration: `${duration}ms`,
      rowCount: result.length,
    });

    return result;
  } catch (error) {
    console.error("DB Query Error:", {
      query,
      params,
      error: error.message,
    });
    throw error;
  }
};
```

### API Request Debugging

```typescript
// Debug external API calls
const debugFetch = async (url: string, options?: RequestInit) => {
  const start = Date.now();

  console.log("API Request:", {
    url,
    method: options?.method || "GET",
    headers: options?.headers,
  });

  try {
    const response = await fetch(url, options);
    const duration = Date.now() - start;

    console.log("API Response:", {
      url,
      status: response.status,
      duration: `${duration}ms`,
      headers: Object.fromEntries(response.headers),
    });

    return response;
  } catch (error) {
    console.error("API Request Error:", {
      url,
      error: error.message,
    });
    throw error;
  }
};
```

## Testing and Debugging Tools

### Mock Data for Testing

```typescript
// Create mock data generators for testing
const createMockUser = (overrides: Partial<User> = {}): User => ({
  id: Math.floor(Math.random() * 1000),
  name: "Test User",
  email: "test@example.com",
  createdAt: new Date().toISOString(),
  ...overrides,
});

// Debug route for testing with mock data
app.get("/debug/mock-data", (c) => {
  if (c.env.ENVIRONMENT === "development") {
    return c.json({
      user: createMockUser(),
      users: Array.from({ length: 5 }, () => createMockUser()),
      timestamp: new Date().toISOString(),
    });
  }
  return c.json({ error: "Not available in production" }, 403);
});
```

### Health Check Endpoints

```typescript
// Comprehensive health check
app.get("/health", async (c) => {
  const checks = {
    timestamp: new Date().toISOString(),
    environment: c.env.ENVIRONMENT,
    database: false,
    externalApi: false,
  };

  try {
    // Check database connection
    if (c.env.DATABASE_URL) {
      await db.query("SELECT 1");
      checks.database = true;
    }

    // Check external API
    if (c.env.EXTERNAL_API_URL) {
      const response = await fetch(`${c.env.EXTERNAL_API_URL}/health`);
      checks.externalApi = response.ok;
    }

    const allHealthy = Object.values(checks).every((check) =>
      typeof check === "boolean" ? check : true
    );

    return c.json(checks, allHealthy ? 200 : 503);
  } catch (error) {
    console.error("Health check failed:", error);
    return c.json({ ...checks, error: error.message }, 503);
  }
});
```
