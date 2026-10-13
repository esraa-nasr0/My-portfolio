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
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, desc: "Typed JS" },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, desc: "UI library" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, desc: "React framework" },
  { name: "jQuery", icon: <SiJquery className="text-blue-400" />, desc: "JS library" },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, desc: "Version control" },
  { name: "Github", icon: <FaGithub className="text-gray-200" />, desc: "Code hosting" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="mb-10 text-center sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            My <span className="text-fuchsia-300">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-subtitle mx-auto"
          >
            Here are some of the technologies and tools I work with:
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex h-36 flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-center transition-shadow duration-300 hover:border-fuchsia-400/20 hover:shadow-md hover:shadow-fuchsia-500/10 sm:h-40 sm:p-4 md:h-44"
            >
              <div className="mb-2 text-3xl sm:mb-3 sm:text-4xl md:text-5xl">
                {skill.icon}
              </div>
              <h3 className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-pink-300 bg-clip-text text-xs font-semibold text-transparent sm:text-sm md:text-base">
                {skill.name}
              </h3>
              <p className="mt-1 text-[10px] font-medium text-gray-400 sm:mt-1.5 sm:text-xs">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
