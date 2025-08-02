import { jsxRenderer } from "hono/jsx-renderer";
import { Link, ViteClient } from "vite-ssr-components/hono";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="AgenticPH - Next-gen community of Filipino developers, AI builders, prompt engineers, context hackers, automation geeks, and creative technologists exploring the frontier of agentic software and intelligent systems."
        />
        <meta
          name="keywords"
          content="AgenticPH, Filipino developers, AI builders, prompt engineers, automation, agentic software, intelligent systems, Philippines, community"
        />
        <meta name="author" content="AgenticPH" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AgenticPH - Next-gen Filipino Developer Community"
        />
        <meta
          property="og:description"
          content="Join AgenticPH, a community of Filipino developers, AI builders, prompt engineers, and creative technologists exploring agentic software and intelligent systems."
        />
        <meta property="og:site_name" content="AgenticPH" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="AgenticPH - Next-gen Filipino Developer Community"
        />
        <meta
          property="twitter:description"
          content="Join AgenticPH, a community of Filipino developers, AI builders, prompt engineers, and creative technologists exploring agentic software and intelligent systems."
        />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <title>AgenticPH - Next-gen Filipino Developer Community</title>

        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
});
