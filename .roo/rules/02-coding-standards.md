# Coding Standards and Best Practices

## TypeScript Guidelines

### Type Safety

- Always use strict TypeScript mode (already configured in `tsconfig.json`)
- Define explicit types for Cloudflare Workers bindings using generics: `new Hono<{ Bindings: YourBindings }>()`
- Use `CloudflareBindings` interface when available from `wrangler types` command
- Prefer interfaces over type aliases for object shapes
- Always specify return types for public functions and API handlers

### JSX and React Patterns

- Use Hono's JSX renderer with `jsxImportSource: "hono/jsx"`
- Prefer functional components over class components
- Use TypeScript for all JSX files (`.tsx` extension)
- Import JSX types when needed: `import type { FC } from 'hono/jsx'`

### Import Organization

```typescript
// 1. External libraries
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

// 2. Internal modules
import { renderer } from "./renderer";
import type { AppBindings } from "./types";

// 3. Relative imports
import "./style.css";
```

## Hono Framework Patterns

### Application Structure

- Use Module Worker syntax (recommended): `export default app`
- Define bindings interface for type safety
- Use middleware for cross-cutting concerns
- Organize routes logically with clear separation

### Route Handlers

```typescript
// Preferred pattern
app.get("/api/users/:id", async (c) => {
  const id = c.req.param("id");
  const user = await getUserById(id);
  return c.json(user);
});

// Use proper error handling
app.onError(async (err, c) => {
  console.error(err);
  return c.json({ error: "Internal Server Error" }, 500);
});
```

### Environment Variables

- Access via `c.env` in handlers
- Use `.dev.vars` for local development
- Set as Cloudflare Worker Secrets in production
- Always type environment variables in bindings interface

## File Naming Conventions

- Use kebab-case for directories: `api-routes/`, `user-components/`
- Use PascalCase for React components: `UserProfile.tsx`
- Use camelCase for utilities and helpers: `apiClient.ts`
- Use lowercase for configuration files: `vite.config.ts`, `wrangler.jsonc`

## Code Organization

- Keep components small and focused (< 100 lines)
- Extract reusable logic into custom hooks or utilities
- Use barrel exports (`index.ts`) for clean imports
- Separate business logic from presentation logic
