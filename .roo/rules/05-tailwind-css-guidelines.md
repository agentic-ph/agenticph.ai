# Tailwind CSS v4 Guidelines

## Configuration and Setup

### Vite Integration

- Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin in `vite.config.ts`
- Import Tailwind in `src/style.css` with `@import "tailwindcss"`
- No separate `tailwind.config.js` file needed for v4
- Configuration is handled through CSS and the Vite plugin

### CSS Structure

```css
/* src/style.css */
@import "tailwindcss";

/* Custom CSS can be added after the import */
@layer base {
  /* Base styles */
}

@layer components {
  /* Component styles */
}

@layer utilities {
  /* Custom utilities */
}
```

## Development Best Practices

### Class Organization

- Use Tailwind utility classes for consistent styling
- Group related classes logically: layout, spacing, colors, typography
- Use responsive prefixes consistently: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Leverage state variants: `hover:`, `focus:`, `active:`, `disabled:`

### Component Patterns

```tsx
// Good: Organized and readable
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
  <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
    Get Started
  </button>
</div>
```

### Responsive Design

- Mobile-first approach: base styles for mobile, then add larger breakpoints
- Use consistent breakpoint strategy across components
- Test responsive behavior in development
- Consider touch targets for mobile devices

## Performance Optimization

### JIT Compilation

- Tailwind CSS v4 uses Just-In-Time compilation by default
- Only generates CSS for classes actually used in your code
- Faster build times and smaller CSS bundles
- No need to purge unused styles manually

### Class Extraction

- For frequently used patterns, consider extracting to component classes
- Use `@apply` directive sparingly and only for true component patterns
- Prefer composition over extraction for maintainability

```css
/* Use sparingly */
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors;
  }
}
```

## Color and Design System

### Color Consistency

- Use Tailwind's default color palette for consistency
- Define custom colors in CSS custom properties if needed
- Maintain contrast ratios for accessibility
- Use semantic color names in components

### Typography

- Use Tailwind's typography scale consistently
- Set up proper font loading for custom fonts
- Consider line height and letter spacing
- Use appropriate font weights for hierarchy

## Accessibility Considerations

### Focus States

- Always include focus styles for interactive elements
- Use `focus:outline-none` only when providing alternative focus indicators
- Ensure sufficient color contrast for focus states
- Test keyboard navigation thoroughly

### Screen Reader Support

- Use semantic HTML elements with Tailwind classes
- Don't rely solely on color to convey information
- Ensure proper heading hierarchy
- Include appropriate ARIA attributes when needed

## Integration with JSX

### Conditional Classes

```tsx
// Use clsx or similar for conditional classes
import clsx from "clsx";

function Button({ variant, disabled, children }) {
  return (
    <button
      className={clsx("px-4 py-2 rounded-md font-medium transition-colors", {
        "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
        "bg-gray-200 text-gray-900 hover:bg-gray-300": variant === "secondary",
        "opacity-50 cursor-not-allowed": disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### Component Variants

- Create consistent component APIs with variant props
- Use TypeScript for variant type safety
- Document component variants clearly
- Consider using a component library pattern

## Development Workflow

### Hot Reloading

- Tailwind classes update instantly with Vite's HMR
- No need to restart dev server for class changes
- CSS changes are injected without page refresh
- Monitor browser dev tools for CSS generation

### Debugging

- Use browser dev tools to inspect generated CSS
- Check for unused or conflicting classes
- Verify responsive behavior across breakpoints
- Use Tailwind CSS IntelliSense extension for VS Code
