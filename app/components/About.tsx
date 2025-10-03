"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section 
      id="about" 
      className="relative px-6 lg:px-12 py-16 min-h-screen flex items-center justify-center text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 max-w-6xl mx-auto">

          {/* النص مع انيميشن */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6 max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-fuchsia-300">Me 🌸</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I'm a passionate <span className="text-fuchsia-300 font-semibold">Frontend Developer</span> with 
            experience in building modern and responsive web applications using 
            <span className="text-fuchsia-300 font-semibold"> React.js</span> and 
            <span className="text-fuchsia-300 font-semibold"> Next.js</span>.  
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400">
            I enjoy transforming ideas into interactive user-friendly interfaces 
            while focusing on <span className="text-fuchsia-300 font-medium">clean code</span>, 
            <span className="text-fuchsia-300 font-medium"> performance</span>, and 
            <span className="text-fuchsia-300 font-medium"> seamless user experience</span>.
          </p>
        </motion.div>
        
        {/* الصورة مع انيميشن - تم تصغيرها */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <Image 
            src="/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5480.jpg" 
            alt="About" 
            width={400} 
            height={320}
            className="rounded-2xl shadow-xl shadow-fuchsia-500/40 ring-4 ring-fuchsia-300/20 hover:scale-105 transition-transform duration-500 w-80 md:w-96"
          />
        </motion.div>

      
      </div>
    </section>
  )
}

export default About