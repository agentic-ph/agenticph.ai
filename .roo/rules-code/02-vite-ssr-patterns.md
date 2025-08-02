# Vite SSR Patterns for Code Mode

## Server-Side Rendering Setup

### JSX Renderer Configuration

```typescript
// src/renderer.tsx - Proper SSR renderer setup
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, ViteClient } from "vite-ssr-components/hono";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
});
```

### Component Hydration Patterns

```typescript
// Client-side hydration for interactive components
const InteractiveButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  // Use useEffect for client-side only logic
  useEffect(() => {
    // Client-side initialization
    console.log("Component hydrated on client");
  }, []);

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

// Server-side safe component
const StaticCard = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);
```

## Environment-Specific Code

### SSR vs Client Detection

```typescript
// Use import.meta.env.SSR for environment detection
const ClientOnlyComponent = () => {
  if (import.meta.env.SSR) {
    // Return placeholder or null for SSR
    return <div className="animate-pulse bg-gray-200 h-8 w-32 rounded" />;
  }

  // Client-side only logic
  return (
    <div>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

// Conditional imports based on environment
const loadClientModule = async () => {
  if (!import.meta.env.SSR) {
    const { clientOnlyFunction } = await import("./client-only-module");
    return clientOnlyFunction();
  }
  return null;
};
```

### Data Fetching Patterns

```typescript
// Server-side data fetching in route handlers
app.get("/users/:id", async (c) => {
  const id = c.req.param("id");

  // Fetch data on server
  const user = await getUserById(id, c.env.DATABASE_URL);
  const posts = await getUserPosts(id, c.env.DATABASE_URL);

  return c.render(<UserProfile user={user} posts={posts} />);
});

// Component that receives server-fetched data
const UserProfile = ({ user, posts }: { user: User; posts: Post[] }) => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
    </div>

    <div className="grid gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </div>
);
```

## Asset Handling

### Static Asset References

```typescript
// Proper asset handling in SSR context
const ImageComponent = ({ src, alt }: { src: string; alt: string }) => {
  // Use absolute paths for assets in SSR
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className="w-full h-auto rounded-lg"
      loading="lazy"
    />
  );
};

// CSS imports in components
const StyledComponent = () => {
  // CSS is handled by Vite and injected via renderer
  return (
    <div className="custom-component">
      <style jsx>{`
        .custom-component {
          /* Component-specific styles if needed */
        }
      `}</style>
      <p>Styled content</p>
    </div>
  );
};
```

### Dynamic Imports for Code Splitting

```typescript
// Lazy load components for better performance
const LazyModal = lazy(() => import("./Modal"));

const PageWithModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyModal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </div>
  );
};
```

## Performance Optimization

### Streaming and Progressive Enhancement

```typescript
// Stream responses for better perceived performance
app.get("/dashboard", async (c) => {
  // Start with basic layout
  const stream = new ReadableStream({
    start(controller) {
      // Send initial HTML
      controller.enqueue(
        new TextEncoder().encode(`
        <div id="dashboard">
          <header>Dashboard</header>
          <div id="content">Loading...</div>
        </div>
      `)
      );
    },
  });

  // Enhance with data as it becomes available
  return c.body(stream, {
    headers: { "Content-Type": "text/html" },
  });
});
```

### Efficient State Management

```typescript
// Use context for shared state in SSR
const AppContext = createContext<AppState | null>(null);

const AppProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: AppState;
}) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Use in route handler
app.get("/app", async (c) => {
  const initialState = await getInitialAppState(c.env);

  return c.render(
    <AppProvider initialState={initialState}>
      <App />
    </AppProvider>
  );
});
```

## Error Boundaries and Fallbacks

### SSR Error Handling

```typescript
// Error boundary for SSR
class SSRErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("SSR Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Usage in components
const SafeComponent = ({ children }: { children: React.ReactNode }) => (
  <SSRErrorBoundary
    fallback={<div className="text-red-600">Something went wrong</div>}
  >
    {children}
  </SSRErrorBoundary>
);
```

## Testing SSR Components

### Component Testing

```typescript
// Test SSR components
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { UserProfile } from "../components/UserProfile";

describe("UserProfile SSR", () => {
  it("renders user data correctly", () => {
    const mockUser = { id: 1, name: "John Doe", email: "john@example.com" };
    const mockPosts = [{ id: 1, title: "Test Post", content: "Content" }];

    const { getByText } = render(
      <UserProfile user={mockUser} posts={mockPosts} />
    );

    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("john@example.com")).toBeInTheDocument();
    expect(getByText("Test Post")).toBeInTheDocument();
  });
});
```

### Integration Testing

```typescript
// Test full SSR flow
import { describe, it, expect } from "vitest";
import app from "../src/index";

describe("SSR Integration", () => {
  it("renders complete page with data", async () => {
    const res = await app.request(
      "/users/1",
      {},
      {
        DATABASE_URL: "mock://database",
      }
    );

    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("<html");
    expect(html).toContain("John Doe");
    expect(html).toContain("</html>");
  });
});
```
