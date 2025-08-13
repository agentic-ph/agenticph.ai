import { Layout } from "../layout/Layout";
import { GlassButton } from "../ui/GlassComponents";
import { SOCIAL_LINKS } from "../../utils/constants";

// Define types for projects
interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  stars: number;
  forks: number;
  language: string;
  lastUpdated: string;
  tags: string[];
  category: string;
}

export const ProjectsPage = () => {
  // TODO: Replace with real data from API/CMS
  const featuredProjects: Project[] = [
    {
      id: 1,
      name: "psgc-mcp",
      description:
        "Model Context Protocol (MCP) server for Philippine Standard Geographic Code (PSGC) data. Provides structured access to Philippine administrative divisions.",
      githubUrl: "https://github.com/agentic-ph/psgc-mcp",
      stars: 45,
      forks: 12,
      language: "TypeScript",
      lastUpdated: "2024-01-15",
      tags: ["MCP", "Philippines", "Geographic Data", "TypeScript"],
      category: "Data & APIs",
    },
    {
      id: 2,
      name: "icon-mcp",
      description:
        "MCP server for icon management and generation. Streamlines icon workflows for developers and designers working with various icon libraries.",
      githubUrl: "https://github.com/agentic-ph/icon-mcp",
      stars: 32,
      forks: 8,
      language: "JavaScript",
      lastUpdated: "2024-01-10",
      tags: ["MCP", "Icons", "Design Tools", "JavaScript"],
      category: "Developer Tools",
    },
    {
      id: 3,
      name: "node-vm-mcp",
      description:
        "MCP server providing secure Node.js VM sandbox execution capabilities. Execute JavaScript code in isolated environments with full VM controls.",
      githubUrl: "https://github.com/agentic-ph/node-vm-mcp",
      stars: 28,
      forks: 6,
      language: "TypeScript",
      lastUpdated: "2024-08-05",
      tags: ["MCP", "Node.js", "VM", "Sandbox", "TypeScript"],
      category: "Developer Tools",
    },
    {
      id: 4,
      name: "devfinder-mcp",
      description:
        "MCP server for discovering and connecting with developers based on skills, interests, and project compatibility. Helps build better development teams.",
      githubUrl: "https://github.com/agentic-ph/devfinder-mcp",
      stars: 0,
      forks: 0,
      language: "TypeScript",
      lastUpdated: "2024-08-13",
      tags: ["MCP", "Developer Discovery", "Team Building", "TypeScript"],
      category: "Developer Tools",
    },
  ];

  const communityProjects: Project[] = [
    // {
    //   id: 3,
    //   name: "ai-prompt-library",
    //   description:
    //     "Curated collection of AI prompts for various use cases. Community-driven repository of effective prompts for different AI models.",
    //   githubUrl: "https://github.com/agentic-ph/ai-prompt-library",
    //   stars: 128,
    //   forks: 34,
    //   language: "Markdown",
    //   lastUpdated: "2024-01-20",
    //   tags: ["AI", "Prompts", "Community", "Documentation"],
    //   category: "AI & ML",
    // },
    // {
    //   id: 4,
    //   name: "automation-scripts",
    //   description:
    //     "Collection of automation scripts and workflows for common development tasks. Boost your productivity with these battle-tested scripts.",
    //   githubUrl: "https://github.com/agentic-ph/automation-scripts",
    //   stars: 67,
    //   forks: 19,
    //   language: "Python",
    //   lastUpdated: "2024-01-18",
    //   tags: ["Automation", "Scripts", "Productivity", "Python"],
    //   category: "Automation",
    // },
  ];

  const categories = [
    "All",
    "MCP",
    "AI & ML",
    "Developer Tools",
    "Data & APIs",
    "Automation",
  ];

  const allProjects = [...featuredProjects, ...communityProjects];

  return (
    <Layout
      title="Projects - AgenticPH"
      description="Explore open-source projects by the AgenticPH community. Contribute to AI, automation, and developer tools."
    >
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 pt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="sr-hero text-4xl sm:text-5xl font-bold mb-6">
              Community Projects
            </h1>
            <p className="sr-content text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Discover and contribute to open-source projects built by the
              AgenticPH community. From AI tools to automation scripts, we're
              building the future together.
            </p>
            <div className="sr-cta flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton
                href="https://github.com/agentic-ph"
                variant="secondary"
                size="lg"
                external
              >
                View on GitHub
              </GlassButton>
              <GlassButton
                href="#submit-project"
                variant="primary"
                size="lg"
              >
                Propose a Project
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-heading text-5xl font-black text-white mb-8">
              Featured Projects
            </h2>

            {featuredProjects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="sr-card bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-purple-600/30"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-white">
                              {project.name}
                            </h3>
                            <span className="ml-3 px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                              Featured
                            </span>
                          </div>
                          <p className="text-gray-300 mb-4">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                            {project.language}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {project.stars}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {project.forks}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">
                          Updated{" "}
                          {new Date(project.lastUpdated).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">
                          {project.category}
                        </span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="sr-content text-center py-16 mb-16">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-white mb-2">
                  No featured projects yet
                </h3>
                <p className="text-gray-300 mb-4">
                  We're working on exciting projects that will be featured here
                  soon!
                </p>
                <a
                  href="https://github.com/agentic-ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Visit GitHub
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Community Projects */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="sr-heading text-5xl font-black text-white mb-8">
              Community Projects
            </h2>

            {communityProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityProjects.map((project) => (
                  <div
                    key={project.id}
                    className="sr-card bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">
                          {project.name}
                        </h3>
                        <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            {project.language}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {project.stars}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {project.forks}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="sr-content text-center py-12">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  No community projects yet
                </h3>
                <p className="text-gray-300 mb-4">
                  Be the first to contribute a project to our community!
                </p>
                <a
                  href="#submit-project"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Propose a Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Submit Project Section */}
        <section id="submit-project" className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="sr-heading text-5xl font-black mb-6">
                Submit Your Project
              </h2>
              <p className="sr-content text-xl text-purple-100 max-w-3xl mx-auto">
                Have an awesome project you'd like to share with the AgenticPH
                community? Submit it here and we'll consider featuring it in our
                project showcase.
              </p>
            </div>

            <form id="project-submission-form" className="max-w-lg mx-auto">
              <input
                type="hidden"
                name="access_key"
                value="19e3831f-343f-403c-afd9-4860e18b22e9"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />
              
              <div className="mb-6">
                <label htmlFor="project-title" className="block text-purple-100 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  id="project-title"
                  name="Project Title"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="My Awesome Project"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="project-description" className="block text-purple-100 mb-2">
                  Project Description
                </label>
                <textarea
                  id="project-description"
                  name="Project Description"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  placeholder="Describe your project, what it does, and why it's useful..."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="github-repo" className="block text-purple-100 mb-2">
                  GitHub Repository URL
                </label>
                <input
                  type="url"
                  id="github-repo"
                  name="GitHub Repository"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="https://github.com/yourusername/yourproject"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="project-category" className="block text-purple-100 mb-2">
                  Project Category
                </label>
                <select
                  id="project-category"
                  name="Project Category"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                >
                  <option value="" className="bg-gray-900">Select a category</option>
                  <option value="MCP" className="bg-gray-900">MCP</option>
                  <option value="AI & ML" className="bg-gray-900">AI & ML</option>
                  <option value="Developer Tools" className="bg-gray-900">Developer Tools</option>
                  <option value="Data & APIs" className="bg-gray-900">Data & APIs</option>
                  <option value="Automation" className="bg-gray-900">Automation</option>
                  <option value="Other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-email" className="block text-purple-100 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="Contact Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="text-center">
                <GlassButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Submit Project
                </GlassButton>
              </div>

              <div id="project-submission-result" className="mt-4 text-center text-sm"></div>
            </form>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="sr-heading text-5xl font-black mb-4">
              Ready to Contribute?
            </h2>
            <p className="sr-content text-xl text-purple-100 mb-8">
              Join our community and help build the future of AI and automation
              tools. Whether you're a beginner or expert, there's a place for
              you.
            </p>
            <div className="sr-cta flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton
                href="https://github.com/agentic-ph"
                variant="secondary"
                size="lg"
                external
              >
                Browse All Projects
              </GlassButton>
              <GlassButton
                href="#submit-project"
                variant="primary"
                size="lg"
              >
                Propose a Project
              </GlassButton>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('project-submission-form');
            const result = document.getElementById('project-submission-result');

            if (!form || !result) return;

            form.addEventListener('submit', function(e) {
              e.preventDefault();
              const formData = new FormData(form);
              const object = Object.fromEntries(formData);
              const json = JSON.stringify(object);
              result.innerHTML = "Please wait...";
              result.className = "mt-4 text-center text-sm text-purple-200";

              fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: json
              })
              .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                  result.innerHTML = "Project submitted successfully! We'll review it soon.";
                  result.className = "mt-4 text-center text-sm text-green-400";
                } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.className = "mt-4 text-center text-sm text-red-400";
                }
              })
              .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
                result.className = "mt-4 text-center text-sm text-red-400";
              })
              .then(function() {
                form.reset();
                setTimeout(() => {
                  result.style.display = "none";
                }, 5000);
              });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              });
            });
          });
        `,
        }}
      />
