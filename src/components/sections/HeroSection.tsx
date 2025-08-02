import { SOCIAL_LINKS } from "../../utils/constants";
import { GlassButton } from "../ui/GlassComponents";

export const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      ></div>

      {/* Background Image Overlay for Better Blending */}
      <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>

      {/* Additional Darkening Layer */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Ultra Gradient Mesh Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Purple Gradient from Top with Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 via-purple-900/10 to-transparent blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent"></div>

      {/* Additional Blur Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/15 blur-2xl"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-purple-400/25 blur-xl"></div>

      {/* Final Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="sr-hero hero-headline mb-6">
            <span className="block">Welcome to</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent py-2">
              AgenticPH
            </span>
          </h1>

          {/* Subheadline */}
          <p className="sr-content text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed text-balance">
            Where Filipino tech minds build the future with AI
          </p>

          {/* Call to Action Buttons */}
          <div className="sr-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlassButton
              href={SOCIAL_LINKS.discord}
              external={true}
              variant="primary"
              size="lg"
              className="transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Our Community
            </GlassButton>
            <GlassButton
              href="/projects"
              variant="secondary"
              size="lg"
              className="transform hover:scale-105 border-2"
            >
              Explore Projects
            </GlassButton>
          </div>
        </div>
      </div>

      {/* Scroll More Icon */}
      <div
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector(
            ".about-section, .what-we-do-section, section:not(.hero-section)"
          );
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors group">
          <span className="text-sm font-medium mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
            <div className="scroll-dot w-1 h-3 bg-white/50 rounded-full mt-2 group-hover:bg-white/70 transition-colors"></div>
          </div>
          <svg
            className="w-6 h-6 mt-2 transform group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
