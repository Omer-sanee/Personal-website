import React from "react";
import { FaCode, FaMobileAlt, FaBug, FaDatabase, FaCloud, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-5xl text-blue-500" />,
      title: "Web Development",
      description: "I build modern, fast, and responsive websites using React, Next.js, and TailwindCSS."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-green-500" />,
      title: "Mobile App Development",
      description: "I create cross-platform mobile apps with React Native and Expo."
    },
    {
      icon: <FaBug className="text-5xl text-red-500" />,
      title: "Bug Fixing & Debugging",
      description: "I solve errors, fix bugs, and improve performance for your apps and websites."
    },
    {
      icon: <FaDatabase className="text-5xl text-yellow-500" />,
      title: "Database Design",
      description: "I design and manage databases using MySQL, MongoDB, and Firebase."
    },
    {
      icon: <FaCloud className="text-5xl text-purple-500" />,
      title: "Cloud & API Integration",
      description: "I integrate cloud services (AWS, Firebase) and build secure REST APIs."
    },
    {
      icon: <FaPaintBrush className="text-5xl text-pink-500" />,
      title: "UI/UX Design",
      description: "I design clean, user-friendly interfaces with modern tools and best practices."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-600">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
