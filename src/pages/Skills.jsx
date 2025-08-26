import React from "react";

// Full list of skills grouped by category with CDN URLs
const skills = {
  Core: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ],
  Styling: [
    { name: "Tailwind CSS", icon: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ],
  "Backend & Databases": [
    { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ],
  "Mobile / Cross-Platform": [
    { name: "React Native", icon: "https://reactnative.dev/img/header_logo.svg" },
    { name: "Expo", icon: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
};

// Famous programmers / innovators
const programmers = [
  { name: "Linus Torvalds", img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Linus_Torvalds.jpeg" },
  { name: "Dennis Ritchie", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg" },
  { name: "Guido van Rossum", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Guido-portrait-2014-drc.jpg" },
  { name: "Brendan Eich", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" },
  { name: "Tim Berners-Lee", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Tim_Berners-Lee_April_2009.jpg" },
  { name: "James Gosling", img: "https://upload.wikimedia.org/wikipedia/commons/8/85/James_Gosling_2008.jpg" },
];

export default function Skills() {
  return (
    <section className="skills-section py-16 bg-gray-50 dark:bg-gray-900">
      <div className="skills-container max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          My Skills
        </h2>

        {/* Loop through categories */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programmers Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Tech Legends Who Inspire Me
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {programmers.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-indigo-500"
                />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
