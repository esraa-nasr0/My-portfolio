"use client"
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

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
    description: "A gaming website with a sleek design and interactive features.",
    image: "/gaming.png",
    demo: "https://gaming-boi-eli4-amxajup02-esraa-nasrs-projects.vercel.app/",
  },
]

function Projects() {
  return (
    <section 
      id="projects" 
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6"
    > 
      <div className="text-center mb-12 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          My <span className="text-fuchsia-300">Projects</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Here are some of the projects I've worked on recently. Click on any project to view a live demo.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-xs sm:max-w-sm"
            >
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-black shadow-md hover:shadow-fuchsia-400/40 transition duration-500 mx-auto">
                  
                  {/* Project Image */}
                  <div className="relative h-56 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <span className="min-w-[150px] h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                        View Demo
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects