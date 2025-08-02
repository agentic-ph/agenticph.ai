import { SOCIAL_LINKS } from "../../utils/constants";
import { GlassButton } from "../ui/GlassComponents";

export const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Ultra Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Primary Mesh Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 via-transparent to-pink-500/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-600/25 via-transparent to-emerald-500/25"></div>

      {/* Secondary Mesh Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/15 via-blue-500/10 to-teal-500/15"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-rose-500/15 via-purple-500/10 to-blue-500/15"></div>

      {/* Radial Gradient Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 60% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 60%)",
        }}
      ></div>

      {/* Ultra Animated Mesh Elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs with advanced animations */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-blue-500/12 to-purple-500/6 blur-3xl animate-gradient-mesh-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-tl from-cyan-500/12 to-pink-500/6 blur-3xl animate-gradient-mesh-breathe animate-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/10 to-emerald-500/8 blur-3xl animate-gradient-mesh-drift animate-delay-2000"></div>

        {/* Medium floating elements with wave animations */}
        <div className="absolute top-1/6 right-1/4 w-48 h-48 bg-gradient-to-bl from-indigo-500/15 to-rose-500/8 blur-2xl animate-gradient-mesh-wave animate-delay-500"></div>
        <div className="absolute bottom-1/6 left-1/3 w-56 h-56 bg-gradient-to-tr from-teal-500/12 to-purple-500/10 blur-2xl animate-gradient-mesh-pulse animate-delay-1500"></div>

        {/* Small accent elements with rotation */}
        <div className="absolute top-1/3 right-1/6 w-32 h-32 bg-gradient-to-r from-blue-400/18 to-cyan-400/12 blur-xl animate-gradient-mesh-rotate animate-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/5 w-40 h-40 bg-gradient-to-l from-pink-400/15 to-violet-400/10 blur-xl animate-gradient-mesh-float animate-delay-2500"></div>

        {/* Additional ultra mesh elements */}
        <div className="absolute top-1/8 left-1/2 w-72 h-72 bg-gradient-to-br from-emerald-500/8 to-blue-500/6 blur-3xl animate-gradient-mesh-breathe animate-delay-4000"></div>
        <div className="absolute bottom-1/8 right-1/3 w-60 h-60 bg-gradient-to-tl from-orange-500/10 to-purple-500/8 blur-2xl animate-gradient-mesh-drift animate-delay-5000"></div>
        <div className="absolute top-2/3 left-1/8 w-44 h-44 bg-gradient-to-r from-rose-500/12 to-indigo-500/9 blur-xl animate-gradient-mesh-wave animate-delay-1000"></div>
        <div className="absolute top-1/5 right-1/8 w-36 h-36 bg-gradient-to-l from-cyan-500/14 to-pink-500/10 blur-xl animate-gradient-mesh-pulse animate-delay-3500"></div>
      </div>

      {/* Rotating Gradient Mesh Overlay */}
      <div className="absolute inset-0 gradient-mesh-overlay opacity-40"></div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      ></div>

      {/* Final Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

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
