"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="section min-h-[100svh] justify-center !pt-28 sm:!pt-32"
    >
      <div className="section-inner flex flex-col items-center gap-3 text-center sm:gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-36 w-36 overflow-hidden rounded-full shadow-lg shadow-fuchsia-400/40 ring-4 ring-fuchsia-200/30 transition-transform duration-300 hover:scale-105 sm:h-48 sm:w-48 md:h-56 md:w-56"
        >
          <Image
            src="/58780169.jpg"
            alt="Esraa Nasr"
            fill
            priority
            sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
            className="object-cover"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-end justify-center gap-2 text-lg sm:text-xl md:text-2xl"
        >
          <span className="text-gray-300">Hi, I&apos;m</span>
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-400 bg-clip-text font-bold text-transparent transition-transform duration-300 hover:scale-105">
            Esraa Nasr
          </span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem]"
        >
          <span className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 hover:tracking-wide">
            Frontend Developer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="min-h-[2rem] sm:min-h-[2.5rem]"
        >
          <TypeAnimation
            sequence={[
              "React.js Developer",
              2000,
              "Next.js Developer",
              2000,
            ]}
            speed={50}
            className="text-base font-medium text-fuchsia-300 sm:text-xl md:text-2xl"
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:max-w-2xl sm:text-base md:text-lg"
        >
          I&apos;m a frontend developer passionate about building modern,
          responsive, and user-friendly web applications with clean UI and
          smooth experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-2 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-4 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="#projects"
            className="flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 px-8 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-12 sm:min-w-[150px] sm:text-base"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="flex h-11 items-center justify-center rounded-full border border-fuchsia-400 px-8 text-sm font-medium text-fuchsia-300 transition-all duration-300 hover:scale-105 hover:bg-fuchsia-500/10 sm:h-12 sm:min-w-[150px] sm:text-base"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
