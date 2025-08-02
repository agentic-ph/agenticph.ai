# Workflow Rules for Hono + Vite + Cloudflare Workers Project

This directory contains comprehensive workflow rules for the `agentic-ph-web` project, organized according to Roo Code best practices.

## Rule Structure

### Workspace-Wide Rules (`.roo/rules/`)

These rules apply to all modes within the project:

- **01-project-overview.md** - Technology stack, architecture, and development workflow
- **02-coding-standards.md** - TypeScript, JSX, and general coding best practices
- **03-cloudflare-workers-guidelines.md** - Cloudflare Workers specific development patterns
- **04-vite-development-workflow.md** - Vite configuration, build process, and optimization
- **05-tailwind-css-guidelines.md** - Tailwind CSS v4 usage patterns and best practices

### Mode-Specific Rules

#### Code Mode (`.roo/rules-code/`)

Specialized rules for code development and implementation:

- **01-hono-development-patterns.md** - Route handlers, middleware, API patterns, and testing
- **02-vite-ssr-patterns.md** - Server-side rendering, hydration, and performance optimization

#### Debug Mode (`.roo/rules-debug/`)

Debugging strategies and troubleshooting patterns:

- **01-debugging-strategies.md** - Development debugging, error tracking, performance monitoring

#### Architect Mode (`.roo/rules-architect/`)

System design and architecture patterns:

- **01-system-design-patterns.md** - Edge-first design, microservices, security, and observability

## Technology Stack Overview

This project uses:

- **Hono** - Ultrafast web framework for edge computing
- **Vite** - Next-generation frontend build tool with SSR support
- **Cloudflare Workers** - JavaScript edge runtime
- **TypeScript** - Type-safe JavaScript with JSX support
- **Tailwind CSS v4** - Utility-first CSS framework
- **vite-ssr-components** - Server-side rendering components

## Key Development Patterns

### 1. Type Safety

- Always use TypeScript with strict mode
- Define Cloudflare Workers bindings with proper types
- Generate types with `npm run cf-typegen`

### 2. Edge-First Architecture

- Design stateless applications for global distribution
- Leverage Cloudflare's edge network for performance
- Use KV storage for persistent data

### 3. Server-Side Rendering

- Use Hono's JSX renderer for SSR
- Implement proper hydration patterns
- Handle environment-specific code with `import.meta.env.SSR`

### 4. Performance Optimization

- Minimize bundle sizes for faster cold starts
- Use appropriate caching strategies
- Implement efficient data fetching patterns

## Development Workflow

1. **Development**: `npm run dev` - Start Vite dev server with HMR
2. **Type Generation**: `npm run cf-typegen` - Generate Cloudflare Workers types
3. **Build**: `npm run build` - Create production build
4. **Deploy**: `npm run deploy` - Deploy to Cloudflare Workers

## Best Practices Summary

### Code Organization

- Keep components small and focused (< 100 lines)
- Use clear separation between business logic and presentation
- Implement proper error handling and logging
- Write comprehensive tests for all functionality

### Security

- Implement zero trust security model
- Use proper authentication and authorization
- Validate all input data
- Store secrets as Cloudflare Worker Secrets

### Performance

- Leverage edge computing benefits
- Implement multi-layer caching
- Use efficient data fetching patterns
- Monitor performance metrics

### Debugging

- Use structured logging for production
- Implement health check endpoints
- Add request timing and monitoring
- Create comprehensive error tracking

## Rule Loading Order

According to Roo Code documentation, rules are loaded in this order:

1. **Global Rules** (from `~/.roo/`)
2. **Project Rules** (from `project/.roo/`) - can override global rules
3. **Mode-specific Rules** are loaded before general rules within each level

This ensures that project-specific rules can override global defaults while maintaining consistency across the development team.

## Usage Guidelines

- **All Modes**: Follow the workspace-wide rules for consistent development practices
- **Code Mode**: Additionally follow code-specific patterns for implementation
- **Debug Mode**: Use debugging strategies for troubleshooting and monitoring
- **Architect Mode**: Apply system design patterns for architectural decisions

These rules provide comprehensive guidance for developing, debugging, and architecting applications using the Hono + Vite + Cloudflare Workers stack.
