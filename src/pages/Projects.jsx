import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "👨‍💻💥 Spider Screenshot (VS Code Extension)",
      description:
        "One-click code screenshots, auto-save on file save, full code history, backup & restore support, and custom save folders.",
      link: "https://marketplace.visualstudio.com/items?itemName=SpiderDev.spider-screenshot",
    },
    {
      title: "💌 Amora (Romantic Chat App)",
      description:
        "A PWA with TikTok-style onboarding, Firebase authentication, OTP verification, and WhatsApp-style chat.",
      link: "https://omer-sanee.github.io/Amora/",
    },
    {
      title: "🚀 More projects coming soon!",
      description: "Stay tuned for new tools, apps, and creative builds.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        🌟 My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
          >
            <div>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-500 text-white px-5 py-2 rounded-lg text-center hover:bg-indigo-600 transition"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
