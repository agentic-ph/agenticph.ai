# Vite Development Workflow

## Development Server Configuration

### Hot Module Replacement (HMR)

- Vite provides instant HMR for TypeScript and JSX files
- Changes to components are reflected immediately without full page reload
- CSS changes are applied instantly via style injection
- Use `npm run dev` to start the development server

### SSR Development

- The project uses `vite-ssr-components` for server-side rendering
- Components are rendered on the server and hydrated on the client
- Use the `ViteClient` component in renderer for proper HMR integration
- Test SSR behavior locally before deploying to Cloudflare Workers

## Build Process

### Production Builds

- Always run `npm run build` before deployment
- Vite optimizes bundles for production with tree-shaking
- Static assets are processed and optimized automatically
- TypeScript is compiled and type-checked during build

### Build Optimization

- Leverage Vite's built-in optimizations for modern browsers
- Use dynamic imports for code splitting when needed
- Optimize bundle size by avoiding unnecessary dependencies
- Monitor bundle analysis for performance improvements

## Asset Management

### Static Assets

- Place static files in the `public/` directory
- Reference assets using absolute paths from root
- Vite automatically processes and optimizes images
- Use appropriate file formats (WebP, AVIF) for better performance

### CSS and Styling

- Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin
- Import Tailwind in `src/style.css` with `@import "tailwindcss"`
- Use Tailwind utility classes for consistent styling
- Leverage Tailwind's JIT compilation for optimal CSS output

## Plugin Configuration

### Essential Plugins

- `@cloudflare/vite-plugin` - Cloudflare Workers integration
- `vite-ssr-components/plugin` - SSR component support
- `@tailwindcss/vite` - Tailwind CSS v4 integration

### Plugin Best Practices

- Keep plugin configuration minimal and focused
- Use official plugins when available
- Test plugin compatibility with Cloudflare Workers
- Monitor build performance impact of plugins

## Environment Variables

### Development Variables

- Use `.dev.vars` for local development secrets
- Access variables via `import.meta.env` in client code
- Use `c.env` for server-side environment access
- Never commit sensitive environment files

### Build-time Variables

- Define public variables with `VITE_` prefix
- Use `import.meta.env.MODE` for environment detection
- Leverage `import.meta.env.SSR` for SSR-specific logic
- Configure different environments (dev, staging, prod)

## Performance Optimization

### Development Performance

- Use Vite's fast dependency pre-bundling
- Leverage native ES modules in development
- Minimize heavy computations in development
- Use lazy loading for non-critical components

### Build Performance

- Enable parallel processing for faster builds
- Use appropriate chunk splitting strategies
- Optimize dependency bundling
- Monitor build times and optimize bottlenecks

## Debugging and Development Tools

### Browser DevTools

- Use React DevTools for component debugging
- Leverage browser network tab for asset analysis
- Monitor performance with browser profiling tools
- Use console for development debugging

### Vite DevTools

- Access Vite's built-in error overlay
- Use source maps for accurate debugging
- Leverage Vite's dependency graph visualization
- Monitor HMR updates and performance
