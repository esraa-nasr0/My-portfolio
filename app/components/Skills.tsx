"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiJquery,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, desc: "Markup language" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, desc: "Styling websites" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, desc: "CSS framework" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" />, desc: "Utility CSS" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, desc: "Dynamic scripting" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, desc: "Typed JS" },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, desc: " framework" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, desc: "React framework" },
  { name: "jQuery", icon: <SiJquery className="text-blue-400" />, desc: "JS library" },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, desc: "Version control" },
  { name: "Github", icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, desc: "Code hosting" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 px-2 sm:px-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            My <span className="text-fuchsia-300">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-gray-400 px-2 sm:px-0"
          >
            Here are some of the technologies and tools I work with:
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center px-2 sm:px-0">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center w-full h-40 sm:h-48 bg-transparent"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{skill.icon}</div>

              {/* Name */}
              <h2 className="text-sm sm:text-base font-semibold mb-2 mt-2 sm:mt-4 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                {skill.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 sm:mt-2 font-semibold">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}