// Application constants
export const APP_CONFIG = {
  name: "AgenticPH",
  description:
    "Next-gen community of Filipino developers, AI builders, prompt engineers, context hackers, automation geeks, and creative technologists exploring the frontier of agentic software and intelligent systems.",
  url: "https://agentic.ph",
  version: "1.0.0",
  author: "AgenticPH Community",
};

// Social media links
export const SOCIAL_LINKS = {
  discord: "https://discord.gg/k5nybcMHvy",
  github: "https://github.com/agentic-ph",
  facebook: "https://www.facebook.com/groups/agenticph",
  twitter: "https://twitter.com/agentic_ph",
  email: "hello@agentic.ph",
};

// Featured projects from GitHub
export const FEATURED_PROJECTS = [
  "https://github.com/agentic-ph/psgc-mcp",
  "https://github.com/agentic-ph/icon-mcp",
];

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "Community", href: SOCIAL_LINKS.discord, external: true },
];

// Performance optimization settings
export const PERFORMANCE_CONFIG = {
  cacheMaxAge: 3600, // 1 hour
  imageLazyLoading: true,
  prefetchLinks: true,
  compressionEnabled: true,
};

// SEO meta tags
const defaultTitle = "AgenticPH - Next-gen Filipino Developer Community";

export const SEO_CONFIG = {
  defaultTitle,
  titleTemplate: "%s | AgenticPH",
  defaultDescription: APP_CONFIG.description,
  keywords: [
    "AgenticPH",
    "Filipino developers",
    "AI builders",
    "prompt engineers",
    "automation",
    "agentic software",
    "intelligent systems",
    "Philippines",
    "community",
    "machine learning",
    "artificial intelligence",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_CONFIG.url,
    siteName: APP_CONFIG.name,
    title: defaultTitle,
    description: APP_CONFIG.description,
  },
  twitter: {
    handle: "@agentic_ph",
    site: "@agentic_ph",
    cardType: "summary_large_image",
  },
};
