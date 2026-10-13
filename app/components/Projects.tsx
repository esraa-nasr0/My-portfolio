"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Farm Management System",
    description: "A modern agency website built with React",
    image: "/farm.png",
    demo: "https://online-farm.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Fully responsive online store with cart functionality.",
    image: "/e-commerce.png",
    demo: "https://e-commerce-esraa-nasrs-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Gaming Boi",
    description:
      "A gaming website with a sleek design and interactive features.",
    image: "/gaming.png",
    demo: "https://gaming-boi-eli4-amxajup02-esraa-nasrs-projects.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <h2 className="section-title">
            My <span className="text-fuchsia-300">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Here are some of the projects I&apos;ve worked on recently. Click on
            any project to view a live demo.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="group relative mx-auto h-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-black shadow-md transition duration-500 hover:shadow-fuchsia-400/40 md:max-w-none">
                  <div className="relative h-48 w-full sm:h-52 md:h-56">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span className="flex h-11 min-w-[140px] items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 px-6 text-sm font-medium text-white shadow-md sm:h-12 sm:min-w-[150px] sm:text-base">
                        View Demo
                      </span>
                    </div>
                  </div>

                  <div className="p-5 text-center sm:p-6">
                    <h3 className="mb-2 text-base font-semibold text-fuchsia-300 sm:mb-3 sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
