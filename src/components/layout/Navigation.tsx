import { SOCIAL_LINKS } from "../../utils/constants";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              AgenticPH
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/events"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Events
              </a>
              <a
                href="/projects"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
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
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a
            href="/"
            className="mobile-menu-link text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="/events"
            className="mobile-menu-link text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            Events
          </a>
          <a
            href="/projects"
            className="mobile-menu-link text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-link bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mx-3 mt-2"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Client-side JavaScript for mobile menu toggle */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const button = document.getElementById('mobile-menu-button');
              const menu = document.getElementById('mobile-menu');
              const hamburgerIcon = document.getElementById('hamburger-icon');
              const closeIcon = document.getElementById('close-icon');
              const menuLinks = document.querySelectorAll('.mobile-menu-link');
              
              if (!button || !menu || !hamburgerIcon || !closeIcon) return;
              
              let isOpen = false;
              
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
