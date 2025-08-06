import { jsxRenderer } from "hono/jsx-renderer";
import { Link, ViteClient } from "vite-ssr-components/hono";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        <title>AgenticPH - Philippines' Premier AI & Developer Community</title>
        
        <meta
          name="description"
          content="Join Philippines' leading AI developer community. Connect with Filipino AI builders, prompt engineers, and creative technologists exploring agentic software, machine learning, and intelligent systems. Build the future together."
        />
        <meta
          name="keywords"
          content="AgenticPH, Filipino AI developers, Philippines AI community, prompt engineering Philippines, machine learning developers Manila, AI builders Philippines, agentic software development, intelligent systems Philippines, Filipino tech community, AI startups Philippines, prompt engineers Manila, automation developers Philippines, context hackers, creative technologists, AI meetups Philippines, developer community Manila, artificial intelligence Philippines, LLM developers, Filipino AI engineers, tech innovation Philippines"
        />
        <meta name="author" content="AgenticPH" />
        <meta name="publisher" content="AgenticPH" />
        <meta name="copyright" content="© 2025 AgenticPH. All rights reserved." />
        <meta name="language" content="EN" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="PH" />
        <meta name="geo.placename" content="Philippines" />
        <meta name="target" content="all" />
        <meta name="audience" content="developers, AI builders, engineers, technologists" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://agenticph.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AgenticPH - Philippines' Premier AI & Developer Community"
        />
        <meta
          property="og:description"
          content="Join Philippines' leading AI developer community. Connect with Filipino AI builders, prompt engineers, and creative technologists exploring agentic software, machine learning, and intelligent systems."
        />
        <meta property="og:site_name" content="AgenticPH" />
        <meta property="og:image" content="/cover.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://agenticph.com" />
        <meta property="og:locale" content="en_PH" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@agenticph" />
        <meta property="twitter:creator" content="@agenticph" />
        <meta
          property="twitter:title"
          content="AgenticPH - Philippines' Premier AI & Developer Community"
        />
        <meta
          property="twitter:description"
          content="Join Philippines' leading AI developer community. Connect with Filipino AI builders, prompt engineers, and creative technologists exploring agentic software, machine learning, and intelligent systems."
        />
        <meta property="twitter:image" content="/cover.jpg" />
        <meta property="twitter:image:alt" content="AgenticPH - Philippines' AI Developer Community" />
        <meta property="twitter:url" content="https://agenticph.com" />

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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <title>AgenticPH - Next-gen Filipino Developer Community</title>

        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />

        {/* ScrollReveal.js */}
        <script src="https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js"></script>
      </head>
      <body className="font-body antialiased">
        {children}

        {/* Initialize ScrollReveal after page load */}
        <script type="module">
          {`
            // Initialize ScrollReveal when DOM is ready
            function initScrollReveal() {
              if (typeof window === 'undefined' || !window.ScrollReveal) return;
              
              const sr = window.ScrollReveal();
              
              // Hero sections
              sr.reveal('.sr-hero', {
                distance: '100px',
                duration: 1000,
                easing: 'ease-in-out',
                origin: 'bottom',
                delay: 200,
                opacity: 0,
                scale: 0.9
              });
              
              // Section headings
              sr.reveal('.sr-heading', {
                distance: '60px',
                duration: 800,
                easing: 'ease-in-out',
                origin: 'bottom',
                delay: 100,
                opacity: 0
              });
              
              // Section content
              sr.reveal('.sr-content', {
                distance: '60px',
                duration: 800,
                easing: 'ease-in-out',
                origin: 'bottom',
                opacity: 0,
                scale: 0.9
              });
              
              // Cards and features
              sr.reveal('.sr-card', {
                distance: '40px',
                duration: 600,
                easing: 'ease-in-out',
                origin: 'bottom',
                opacity: 0,
                scale: 0.95,
                interval: 100
              });
              
              // Buttons and CTAs
              sr.reveal('.sr-cta', {
                distance: '0px',
                duration: 600,
                easing: 'ease-in-out',
                scale: 0.8,
                delay: 300,
                opacity: 0
              });
              
              // Left side content
              sr.reveal('.sr-left', {
                distance: '60px',
                duration: 800,
                easing: 'ease-in-out',
                origin: 'left',
                opacity: 0
              });
              
              // Right side content
              sr.reveal('.sr-right', {
                distance: '60px',
                duration: 800,
                easing: 'ease-in-out',
                origin: 'right',
                opacity: 0
              });
              
              // Staggered items
              sr.reveal('.sr-stagger', {
                distance: '60px',
                duration: 800,
                easing: 'ease-in-out',
                origin: 'bottom',
                opacity: 0,
                interval: 150
              });
              
              // Fast animations
              sr.reveal('.sr-fast', {
                distance: '30px',
                duration: 400,
                easing: 'ease-in-out',
                origin: 'bottom',
                opacity: 0
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initScrollReveal);
            } else {
              initScrollReveal();
            }
          `}
        </script>
      </body>
    </html>
  );
});
