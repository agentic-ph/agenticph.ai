/**
 * ScrollReveal utility for SSR-safe initialization
 * Handles client-side only initialization to avoid SSR issues
 */

// ScrollReveal configuration options
export const scrollRevealConfig = {
  // Default reveal settings
  distance: "60px",
  duration: 800,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false,
  mobile: true,
  desktop: true,
  opacity: 0,
  scale: 0.9,
  viewFactor: 0.2,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

// Animation variants for different types of content
export const animationVariants = {
  // Fade in from bottom (default)
  fadeInUp: {
    ...scrollRevealConfig,
    origin: "bottom",
    distance: "60px",
  },

  // Fade in from top
  fadeInDown: {
    ...scrollRevealConfig,
    origin: "top",
    distance: "60px",
  },

  // Fade in from left
  fadeInLeft: {
    ...scrollRevealConfig,
    origin: "left",
    distance: "60px",
  },

  // Fade in from right
  fadeInRight: {
    ...scrollRevealConfig,
    origin: "right",
    distance: "60px",
  },

  // Scale up animation
  scaleUp: {
    ...scrollRevealConfig,
    distance: "0px",
    scale: 0.8,
    duration: 600,
  },

  // Staggered animation for multiple elements
  stagger: {
    ...scrollRevealConfig,
    interval: 150,
  },

  // Hero section animation
  hero: {
    ...scrollRevealConfig,
    origin: "bottom",
    distance: "100px",
    duration: 1000,
    delay: 200,
  },

  // Card animations
  card: {
    ...scrollRevealConfig,
    origin: "bottom",
    distance: "40px",
    duration: 600,
    scale: 0.95,
  },

  // Fast animation for small elements
  fast: {
    ...scrollRevealConfig,
    duration: 400,
    distance: "30px",
  },
};

/**
 * Initialize ScrollReveal with SSR safety
 * Only runs on client-side after DOM is ready
 */
export const initializeScrollReveal = (): void => {
  // Check if we're in a browser environment
  if (import.meta.env.SSR) {
    return;
  }

  // Additional safety check for browser globals
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  // Check if ScrollReveal is available
  if (!(window as any).ScrollReveal) {
    console.warn("ScrollReveal is not loaded");
    return;
  }

  const sr = (window as any).ScrollReveal();

  // Hero sections
  sr.reveal(".sr-hero", animationVariants.hero);

  // Section headings
  sr.reveal(".sr-heading", {
    ...animationVariants.fadeInUp,
    duration: 800,
    delay: 100,
  });

  // Section content
  sr.reveal(".sr-content", animationVariants.fadeInUp);

  // Cards and features
  sr.reveal(".sr-card", {
    ...animationVariants.card,
    interval: 100,
  });

  // Buttons and CTAs
  sr.reveal(".sr-cta", {
    ...animationVariants.scaleUp,
    delay: 300,
  });

  // Left side content
  sr.reveal(".sr-left", animationVariants.fadeInLeft);

  // Right side content
  sr.reveal(".sr-right", animationVariants.fadeInRight);

  // Staggered items (like lists, grids)
  sr.reveal(".sr-stagger", {
    ...animationVariants.stagger,
    interval: 150,
  });

  // Fast animations for small elements
  sr.reveal(".sr-fast", animationVariants.fast);

  // Custom animations for specific sections
  sr.reveal(".sr-about-mission", {
    ...animationVariants.fadeInLeft,
    delay: 200,
  });

  sr.reveal(".sr-about-features", {
    ...animationVariants.fadeInRight,
    delay: 400,
  });

  sr.reveal(".sr-project-card", {
    ...animationVariants.card,
    interval: 200,
  });

  sr.reveal(".sr-event-card", {
    ...animationVariants.card,
    interval: 150,
  });
};

/**
 * Utility function to add scroll reveal classes to elements
 */
export const addScrollRevealClass = (
  element: string,
  variant: keyof typeof animationVariants = "fadeInUp"
): string => {
  return `${element} sr-${variant.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
};

// Client-side initialization function
export const setupScrollReveal = (): void => {
  if (import.meta.env.SSR) return;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeScrollReveal);
  } else {
    initializeScrollReveal();
  }
};
