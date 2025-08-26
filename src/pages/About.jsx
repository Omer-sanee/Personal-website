import React from "react";

export default function About() {
  return (
    <section className="about-section bg-gray-50 py-16 px-6 md:px-20">
      <div className="about-container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="about-image flex-shrink-0">
          <img
            src="/src/assets/profile.jpg"
            alt="Spider"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover border-4 border-purple-500 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* About Text */}
        <div className="about-text text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hey! I'm <span className="font-semibold text-purple-600">Umar dev</span>, 
            a passionate web developer who loves creating 
            <span className="italic"> clean, functional, and beautiful web experiences</span>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I specialize in React, JavaScript, CSS, and modern web technologies.  
            My goal is to turn ideas into interactive digital realities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Outside of coding, I enjoy exploring UI/UX trends, design patterns, 
            and discovering new ways to enhance user experiences.
          </p>

          {/* Skills Section */}
          <div className="skills mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
            <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["React", "JavaScript", "TypeScript", "CSS/Tailwind", "Firebase", "Node.js"].map(
                (skill) => (
                  <li
                    key={skill}
                    className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition"
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 