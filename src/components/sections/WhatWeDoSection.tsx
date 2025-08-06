import { GlassButton } from "../ui/GlassComponents";

export const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="sr-heading text-6xl font-black text-white mb-6">
            What We Do
          </h2>
          <p className="sr-content text-xl text-gray-300 max-w-3xl mx-auto">
            We organize events, workshops, and initiatives that bring together
            the Filipino AI and automation community to learn, build, and
            innovate together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Events */}
          <div className="sr-card bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-700/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Events</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Monthly gatherings where AI professionals and enthusiasts share knowledge, from technical deep-dives to casual networking.
            </p>
          </div>

          {/* Trainings */}
          <div className="sr-card bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-700/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Trainings</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Hands-on workshops and training programs from beginner to advanced levels, building real-world AI capabilities.
            </p>
          </div>

          {/* AI Services */}
          <div className="sr-card bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-700/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">AI Services</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Expert AI consulting and implementation services from our community practitioners for custom solutions and automation workflows.
            </p>
          </div>

          {/* Community Projects */}
          <div className="sr-card bg-gradient-to-br from-orange-900/50 to-red-900/50 p-8 rounded-xl border border-orange-700/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Community Projects
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Collaborative open-source projects and hackathons building AI tools and automation frameworks for the community.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="sr-content text-center mt-16">
          <p className="text-lg text-gray-300 mb-8 text-balance">
            Whether you're new to AI or an experienced builder, you're welcome
            to join this community!
          </p>
          <div className="sr-cta flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="#connect" variant="primary" size="lg">
              Join Our Community
            </GlassButton>
            <GlassButton href="/events" variant="secondary" size="lg">
              View Upcoming Events
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
};
