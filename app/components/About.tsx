"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="max-w-xl space-y-4 text-center sm:space-y-5 md:text-left"
          >
            <h2 className="section-title">
              About <span className="text-fuchsia-300">Me</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              I&apos;m a passionate{" "}
              <span className="font-semibold text-fuchsia-300">
                Frontend Developer
              </span>{" "}
              with experience in building modern and responsive web applications
              using{" "}
              <span className="font-semibold text-fuchsia-300">React.js</span>{" "}
              and{" "}
              <span className="font-semibold text-fuchsia-300">Next.js</span>.
            </p>
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              I enjoy transforming ideas into interactive user-friendly
              interfaces while focusing on{" "}
              <span className="font-medium text-fuchsia-300">clean code</span>,{" "}
              <span className="font-medium text-fuchsia-300">performance</span>,
              and{" "}
              <span className="font-medium text-fuchsia-300">
                seamless user experience
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-xs shrink-0 sm:max-w-sm md:max-w-md"
          >
            <Image
              src="/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5480.jpg"
              alt="About"
              width={400}
              height={320}
              className="h-auto w-full rounded-2xl shadow-xl shadow-fuchsia-500/30 ring-4 ring-fuchsia-300/20 transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
