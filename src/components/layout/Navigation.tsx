import { SOCIAL_LINKS } from "../../utils/constants";

export const Navigation = () => {
  return (
    <nav
      id="main-nav"
      className="nav-transparent fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              AgenticPH
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/events"
                className="text-white/80 hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Events
              </a>
              <a
                href="/projects"
                className="text-white/80 hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-4 py-2 rounded-lg text-sm font-medium text-white border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="text-white hover:text-blue-300 focus:outline-none focus:text-blue-300"
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              <svg
                id="hamburger-icon"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                id="close-icon"
                className="h-6 w-6 hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div id="mobile-menu" className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-feature border-t border-white/10">
          <a
            href="/"
            className="mobile-menu-link text-white hover:text-blue-300 block px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="/events"
            className="mobile-menu-link text-white/80 hover:text-blue-300 block px-3 py-2 text-base font-medium"
          >
            Events
          </a>
          <a
            href="/projects"
            className="mobile-menu-link text-white/80 hover:text-blue-300 block px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-link glass-button block px-3 py-2 rounded-lg text-base font-medium mx-3 mt-2 text-white border border-white/20"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Client-side JavaScript for mobile menu toggle and scroll detection */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const button = document.getElementById('mobile-menu-button');
              const menu = document.getElementById('mobile-menu');
              const hamburgerIcon = document.getElementById('hamburger-icon');
              const closeIcon = document.getElementById('close-icon');
              const menuLinks = document.querySelectorAll('.mobile-menu-link');
              const nav = document.getElementById('main-nav');
              
              if (!button || !menu || !hamburgerIcon || !closeIcon || !nav) return;
              
              let isOpen = false;
              
              // Scroll detection for navigation background
              function handleScroll() {
                const heroSection = document.querySelector('.hero-section, #hero, [data-section="hero"]');
                if (!heroSection) {
                  // If no hero section found, check scroll position
                  if (window.scrollY > 100) {
                    nav.classList.remove('nav-transparent');
                    nav.classList.add('nav-solid');
                  } else {
                    nav.classList.remove('nav-solid');
                    nav.classList.add('nav-transparent');
                  }
                  return;
                }
                
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                const scrollPosition = window.scrollY + nav.offsetHeight;
                
                if (scrollPosition > heroBottom) {
                  nav.classList.remove('nav-transparent');
                  nav.classList.add('nav-solid');
                } else {
                  nav.classList.remove('nav-solid');
                  nav.classList.add('nav-transparent');
                }
              }
              
              // Initial check
              handleScroll();
              
              // Listen for scroll events
              let ticking = false;
              function requestTick() {
                if (!ticking) {
                  requestAnimationFrame(handleScroll);
                  ticking = true;
                  setTimeout(() => { ticking = false; }, 16);
                }
              }
              
              window.addEventListener('scroll', requestTick, { passive: true });
              
              function toggleMenu() {
                isOpen = !isOpen;
                
                if (isOpen) {
                  menu.classList.remove('hidden');
                  hamburgerIcon.classList.add('hidden');
                  closeIcon.classList.remove('hidden');
                  button.setAttribute('aria-expanded', 'true');
                } else {
                  menu.classList.add('hidden');
                  hamburgerIcon.classList.remove('hidden');
                  closeIcon.classList.add('hidden');
                  button.setAttribute('aria-expanded', 'false');
                }
              }
              
              function closeMenu() {
                if (isOpen) {
                  toggleMenu();
                }
              }
              
              button.addEventListener('click', toggleMenu);
              
              // Close menu when clicking on navigation links
              menuLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
              });
              
              // Close menu when clicking outside
              document.addEventListener('click', function(event) {
                if (!button.contains(event.target) && !menu.contains(event.target)) {
                  closeMenu();
                }
              });
            })();
          `,
        }}
      />
    </nav>
  );
};
