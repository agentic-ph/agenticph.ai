import { SOCIAL_LINKS } from "../../utils/constants";

export const CodeOfConductSection = () => {
  return (
    <section id="code-of-conduct" className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="sr-heading text-3xl font-bold text-gray-900 mb-4">
            Code of Conduct
          </h2>
        </div>

        <div className="sr-content bg-white rounded-lg shadow-sm p-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We value the participation of each member of the AgenticPH community
            and want all members to have an enjoyable and fulfilling experience.
            Accordingly, all members are expected to show respect and courtesy
            to other members at all AgenticPH events, whether officially
            sponsored by AgenticPH or not.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            To make clear what is expected, all delegates/attendees, speakers,
            exhibitors, organizers, and volunteers at any AgenticPH event are
            required to conform to our community standards of respectful and
            inclusive behavior.
          </p>

          <div className="sr-card bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Contact Information
            </h3>
            <p className="text-blue-800 mb-4">
              If you believe that someone is violating the code of conduct, or
              have any other concerns, please contact a member of the AgenticPH
              Code of Conduct workgroup immediately.
            </p>
            <div className="sr-cta flex flex-col sm:flex-row gap-4">
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Contact on Discord
              </a>
              <a
                href="mailto:conduct@agentic.ph"
                className="inline-flex items-center justify-center bg-gray-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
