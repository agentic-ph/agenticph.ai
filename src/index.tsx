import { Hono } from "hono";
import { renderer } from "./renderer";
import { HomePage } from "./components/pages/HomePage";
import { EventsPage } from "./components/pages/EventsPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { GlassButton } from "./components/ui/GlassComponents";

const app = new Hono();

app.use(renderer);

// Home page
app.get("/", (c) => {
  return c.render(<HomePage />);
});

// Events page
app.get("/events", (c) => {
  return c.render(<EventsPage />);
});

// Projects page
app.get("/projects", (c) => {
  return c.render(<ProjectsPage />);
});

// Health check endpoint
app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 404 handler
app.notFound((c) => {
  return c.render(
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <GlassButton href="/" variant="primary" size="lg">
          Go Home
        </GlassButton>
      </div>
    </div>
  );
});

export default app;
