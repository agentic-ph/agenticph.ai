# Hono Development Patterns for Code Mode

## Route Handler Best Practices

### Type-Safe Route Handlers

```typescript
// Always define bindings interface
type Bindings = {
  DATABASE_URL: string;
  API_KEY: string;
  KV_STORE: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

// Use proper parameter extraction and validation
app.get("/api/users/:id", async (c) => {
  const id = c.req.param("id");

  // Validate parameters
  if (!id || isNaN(Number(id))) {
    return c.json({ error: "Invalid user ID" }, 400);
  }

  // Access environment variables with type safety
  const dbUrl = c.env.DATABASE_URL;

  try {
    const user = await getUserById(Number(id), dbUrl);
    return c.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return c.json({ error: "User not found" }, 404);
  }
});
```

### Middleware Implementation

```typescript
// Custom middleware for authentication
const authMiddleware = async (c: Context, next: Next) => {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const user = await verifyToken(token, c.env.JWT_SECRET);
    c.set("user", user);
    await next();
  } catch (error) {
    return c.json({ error: "Invalid token" }, 401);
  }
};

// Apply middleware to protected routes
app.use("/api/protected/*", authMiddleware);
```

## JSX Component Development

### Server-Side Components

```typescript
// Create reusable JSX components for server rendering
const Layout = ({ children, title }: { children: any; title: string }) => (
  <html>
    <head>
      <title>{title}</title>
      <ViteClient />
      <Link href="/src/style.css" rel="stylesheet" />
    </head>
    <body className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">{children}</main>
    </body>
  </html>
);

// Use components in route handlers
app.get("/dashboard", (c) => {
  return c.render(
    <Layout title="Dashboard">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard content */}
      </div>
    </Layout>
  );
});
```

### Component Organization

- Create components in `src/components/` directory
- Use PascalCase for component files: `UserCard.tsx`
- Export components as named exports for better tree-shaking
- Keep components focused and reusable

## API Development Patterns

### RESTful API Structure

```typescript
// Group related routes
const usersAPI = new Hono<{ Bindings: Bindings }>();

usersAPI.get("/", async (c) => {
  // GET /api/users - List users
  const users = await getAllUsers(c.env.DATABASE_URL);
  return c.json(users);
});

usersAPI.post("/", async (c) => {
  // POST /api/users - Create user
  const userData = await c.req.json();
  const newUser = await createUser(userData, c.env.DATABASE_URL);
  return c.json(newUser, 201);
});

usersAPI.get("/:id", async (c) => {
  // GET /api/users/:id - Get specific user
  const id = c.req.param("id");
  const user = await getUserById(Number(id), c.env.DATABASE_URL);
  return c.json(user);
});

// Mount the API routes
app.route("/api/users", usersAPI);
```

### Request Validation

```typescript
// Use Zod or similar for request validation
import { z } from "zod";

const CreateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().min(18).max(120),
});

app.post("/api/users", async (c) => {
  try {
    const body = await c.req.json();
    const validatedData = CreateUserSchema.parse(body);

    const user = await createUser(validatedData, c.env.DATABASE_URL);
    return c.json(user, 201);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return c.json({ error: "Validation failed", details: error.errors }, 400);
    }
    throw error;
  }
});
```

## Error Handling Patterns

### Global Error Handler

```typescript
app.onError(async (err, c) => {
  console.error("Application error:", {
    error: err.message,
    stack: err.stack,
    url: c.req.url,
    method: c.req.method,
    timestamp: new Date().toISOString(),
  });

  // Don't expose internal errors in production
  if (c.env.ENVIRONMENT === "production") {
    return c.json({ error: "Internal Server Error" }, 500);
  }

  return c.json(
    {
      error: err.message,
      stack: err.stack,
    },
    500
  );
});
```

### Custom Error Classes

```typescript
class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotFoundError extends Error {
  constructor(resource: string) {
    super(`${resource} not found`);
    this.name = "NotFoundError";
  }
}

// Use in route handlers
app.get("/api/users/:id", async (c) => {
  const id = c.req.param("id");

  if (!id || isNaN(Number(id))) {
    throw new ValidationError("Invalid user ID", "id");
  }

  const user = await getUserById(Number(id), c.env.DATABASE_URL);
  if (!user) {
    throw new NotFoundError("User");
  }

  return c.json(user);
});
```

## Testing Patterns

### Unit Testing Routes

```typescript
import { describe, it, expect } from "vitest";
import app from "../src/index";

describe("User API", () => {
  it("should return user by ID", async () => {
    const res = await app.request(
      "/api/users/1",
      {},
      {
        DATABASE_URL: "mock://database",
        API_KEY: "test-key",
      }
    );

    expect(res.status).toBe(200);
    const user = await res.json();
    expect(user).toHaveProperty("id", 1);
  });

  it("should return 400 for invalid ID", async () => {
    const res = await app.request("/api/users/invalid");
    expect(res.status).toBe(400);
  });
});
```

## Performance Optimization

### Efficient Data Fetching

```typescript
// Use Promise.all for parallel operations
app.get("/api/dashboard", async (c) => {
  const [users, posts, analytics] = await Promise.all([
    getUserCount(c.env.DATABASE_URL),
    getRecentPosts(c.env.DATABASE_URL),
    getAnalytics(c.env.ANALYTICS_API),
  ]);

  return c.json({ users, posts, analytics });
});
```

### Caching Strategies

```typescript
// Use Cloudflare KV for caching
app.get("/api/expensive-operation", async (c) => {
  const cacheKey = "expensive-operation-result";

  // Try to get from cache first
  const cached = await c.env.KV_STORE.get(cacheKey);
  if (cached) {
    return c.json(JSON.parse(cached));
  }

  // Perform expensive operation
  const result = await performExpensiveOperation();

  // Cache for 1 hour
  await c.env.KV_STORE.put(cacheKey, JSON.stringify(result), {
    expirationTtl: 3600,
  });

  return c.json(result);
});
```
