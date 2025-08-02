# Project Overview and Architecture

This is a **Hono + Vite + Cloudflare Workers** project with the following key characteristics:

## Technology Stack

- **Framework**: Hono (ultrafast web framework for edge computing)
- **Build Tool**: Vite (next-generation frontend tooling)
- **Runtime**: Cloudflare Workers (JavaScript edge runtime)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript with JSX support
- **SSR**: Server-side rendering with `vite-ssr-components`

## Project Structure

```
agentic-ph-web/
├── src/
│   ├── index.tsx          # Main Hono app entry point
│   ├── renderer.tsx       # JSX renderer configuration
│   └── style.css          # Tailwind CSS imports
├── public/                # Static assets
├── vite.config.ts         # Vite configuration
├── wrangler.jsonc         # Cloudflare Workers configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Key Features

- Edge-first architecture optimized for Cloudflare Workers
- Server-side rendering with JSX components
- Hot module replacement in development
- TypeScript with strict mode enabled
- Tailwind CSS for styling
- Deployment via Wrangler CLI

## Development Workflow

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run cf-typegen` - Generate Cloudflare Workers types
