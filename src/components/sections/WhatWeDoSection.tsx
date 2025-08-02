export const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We organize events, workshops, and initiatives that bring together
            the Filipino AI and automation community to learn, build, and
            innovate together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Meetups */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Regular Meetups
              </h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Monthly gatherings where professionals and enthusiasts share
              knowledge about AI, automation, prompt engineering, and agentic
              systems. From technical deep-dives to casual discussions over
              coffee.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're building LLM agents, crafting smart prompts, or
              exploring autonomous workflows, our meetups provide a space to
              connect and learn.
            </p>
          </div>

          {/* Mentorship */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
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
              <h3 className="text-2xl font-bold text-gray-900">Mentorship</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Connect with experienced AI practitioners and automation experts
              who provide guidance on career development, technical skills, and
              project implementation. From one-on-one sessions to group
              mentoring.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're starting your AI journey or looking to advance your
              expertise, our mentorship program pairs you with industry
              professionals who share their knowledge and experience.
            </p>
          </div>

          {/* Community Projects */}
          <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl">
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
              <h3 className="text-2xl font-bold text-gray-900">
                Community Projects
              </h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Collaborative open-source projects where members contribute to
              building AI tools, automation frameworks, and innovative solutions
              that benefit the broader community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From hackathons to long-term initiatives, we create opportunities
              for members to work together and make meaningful contributions to
              the AI ecosystem.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8 text-balance">
            Whether you're new to AI or an experienced builder, you're welcome
            to join this community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#connect"
              className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Our Community
            </a>
            <a
              href="/events"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
