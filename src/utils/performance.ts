// Performance optimization utilities for Cloudflare Workers

// Cache control headers for different content types
export const CACHE_HEADERS = {
  static: {
    "Cache-Control": "public, max-age=31536000, immutable", // 1 year for static assets
    "CDN-Cache-Control": "public, max-age=31536000",
  },
  html: {
    "Cache-Control": "public, max-age=3600, s-maxage=86400", // 1 hour browser, 1 day CDN
    "CDN-Cache-Control": "public, max-age=86400",
  },
  api: {
    "Cache-Control": "public, max-age=300, s-maxage=3600", // 5 min browser, 1 hour CDN
    "CDN-Cache-Control": "public, max-age=3600",
  },
};

// Security headers
export const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.github.com https://discord.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
  ].join("; "),
};

// Performance monitoring
export const PERFORMANCE_METRICS = {
  // Track Core Web Vitals
  trackWebVitals: true,

  // Resource hints for critical resources
  preloadResources: [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    { href: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: true },
  ],

  // Critical CSS inlining threshold
  criticalCSSThreshold: 14000, // 14KB

  // Image optimization settings
  imageOptimization: {
    formats: ["webp", "avif"],
    quality: 85,
    lazyLoading: true,
  },
};

// Edge computing optimizations
export const EDGE_CONFIG = {
  // Cloudflare Workers KV for caching
  useKVCache: true,
  kvCacheTTL: 3600, // 1 hour

  // Edge-side includes for dynamic content
  useESI: false,

  // Geographic routing
  geoRouting: {
    enabled: false, // Can be enabled for multi-region deployments
    regions: ["APAC", "NA", "EU"],
  },

  // Request coalescing for API calls
  requestCoalescing: true,

  // Background tasks
  backgroundTasks: {
    enabled: true,
    maxDuration: 30000, // 30 seconds
  },
};

// Compression settings
export const COMPRESSION_CONFIG = {
  // Brotli compression for text content
  brotli: {
    enabled: true,
    quality: 6, // Balance between compression ratio and speed
    threshold: 1024, // Only compress files larger than 1KB
  },

  // Gzip fallback
  gzip: {
    enabled: true,
    level: 6,
    threshold: 1024,
  },

  // Content types to compress
  compressibleTypes: [
    "text/html",
    "text/css",
    "text/javascript",
    "application/javascript",
    "application/json",
    "text/xml",
    "application/xml",
    "image/svg+xml",
  ],
};

// Bundle optimization
export const BUNDLE_CONFIG = {
  // Code splitting strategy
  codeSplitting: {
    vendor: true, // Separate vendor chunks
    async: true, // Async route chunks
    minSize: 20000, // Minimum chunk size (20KB)
    maxSize: 244000, // Maximum chunk size (244KB)
  },

  // Tree shaking
  treeShaking: {
    enabled: true,
    sideEffects: false,
  },

  // Minification
  minification: {
    removeComments: true,
    removeWhitespace: true,
    mangleNames: true,
    removeDeadCode: true,
  },
};

// Monitoring and analytics
export const MONITORING_CONFIG = {
  // Error tracking
  errorTracking: {
    enabled: true,
    sampleRate: 1.0, // Track 100% of errors in production
  },

  // Performance monitoring
  performanceMonitoring: {
    enabled: true,
    sampleRate: 0.1, // Track 10% of requests for performance
  },

  // Real User Monitoring (RUM)
  rum: {
    enabled: true,
    trackInteractions: true,
    trackLongTasks: true,
    trackLayoutShifts: true,
  },
};

// Helper function to check if content should be compressed
export function shouldCompress(
  contentType: string,
  contentLength: number
): boolean {
  return (
    contentLength >= COMPRESSION_CONFIG.brotli.threshold &&
    COMPRESSION_CONFIG.compressibleTypes.some((type) =>
      contentType.includes(type)
    )
  );
}
