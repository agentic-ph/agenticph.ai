# Cloudflare Workers Development Guidelines

## Environment Configuration

### Bindings and Types

- Always run `npm run cf-typegen` to generate TypeScript types for bindings
- Use the generated `CloudflareBindings` interface in Hono app initialization:
  ```typescript
  const app = new Hono<{ Bindings: CloudflareBindings }>();
  ```
- Access environment variables via `c.env` in route handlers
- Type all bindings for better development experience

### Local Development

- Use `.dev.vars` file for local environment variables
- Never commit sensitive data to version control
- Set production secrets using Wrangler CLI or Cloudflare dashboard
- Test locally with `npm run dev` before deploying

## Deployment Best Practices

### Build Process

- Always build before deploying: `npm run build`
- Use `npm run deploy` for production deployments
- Verify deployment in Cloudflare dashboard
- Monitor logs for errors after deployment

### Performance Optimization

- Leverage edge computing benefits by keeping handlers lightweight
- Use Cloudflare's built-in caching when appropriate
- Minimize cold start times by avoiding heavy imports
- Consider using Cloudflare KV for persistent data storage

## Security Considerations

### Environment Variables

- Store sensitive data as Cloudflare Worker Secrets
- Use environment-specific configurations
- Validate all input data in route handlers
- Implement proper CORS policies when needed

### Error Handling

```typescript
app.onError(async (err, c) => {
  console.error("Application error:", err);

  // Don't expose internal errors in production
  if (c.env.ENVIRONMENT === "production") {
    return c.json({ error: "Internal Server Error" }, 500);
  }

  return c.json({ error: err.message }, 500);
});
```

## Worker-Specific Features

### ExecutionContext

- Use `c.executionCtx.waitUntil()` for background tasks
- Leverage `c.executionCtx.passThroughOnException()` when needed
- Handle async operations properly to avoid timeouts

### Module Worker Pattern (Recommended)

```typescript
const app = new Hono();

// Define routes
app.get("/", (c) => c.text("Hello World"));

// Export as default for Module Worker
export default app;

// For additional event handlers
export default {
  fetch: app.fetch,
  scheduled: async (event, env, ctx) => {
    // Handle scheduled events
  },
};
```

## Testing Guidelines

### Local Testing

- Use Vite's dev server for rapid development
- Test with actual Cloudflare Workers runtime using Wrangler
- Mock environment variables for unit tests

### Integration Testing

- Test deployment to staging environment
- Verify all bindings work correctly
- Test edge cases and error scenarios
- Monitor performance metrics

## Monitoring and Debugging

### Logging

- Use `console.log()` for development debugging
- Implement structured logging for production
- Monitor Cloudflare Workers analytics dashboard
- Set up alerts for error rates and performance issues

### Performance Monitoring

- Track cold start times
- Monitor memory usage
- Watch for timeout errors
- Optimize based on real-world usage patterns
