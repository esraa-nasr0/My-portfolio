"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Hero() {
  return (
<div
  id="home"
  className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6"
>      
      {/* صورة البروفايل مع انيميشن */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[220px] h-[220px] rounded-full overflow-hidden shadow-lg shadow-fuchsia-400/40 ring-4 ring-fuchsia-200/30 hover:scale-105 transition-transform duration-300 -translate-y-6"
      >
        <Image 
          src="/58780169.jpg" 
          alt="profile" 
          fill 
          className="object-cover"
        />
      </motion.div>

      {/* Hi I'm */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex items-end gap-2 text-xl md:text-2xl mt-4"
      >
        <span className="text-gray-300">Hi, I'm</span>
        <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-400 bg-clip-text text-transparent font-bold hover:scale-105 transition-transform duration-300">
          Esraa Nasr
        </span>
      </motion.h2>

      {/* العنوان الرئيسي */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold mt-4"
      >
        <span className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg hover:tracking-wide transition-all duration-300">
          Frontend Developer
        </span>
      </motion.h1>

      {/* الانيميشن للتايبنج */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            'React.js Developer', 2000,
            'Next.js Developer', 2000,
          ]}
          speed={50}
          className="text-fuchsia-300 font-medium text-lg sm:text-2xl mt-2 min-h-[40px]"
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>

      {/* الباراجراف */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="text-gray-400 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed "
      >
        I'm a frontend developer passionate about building modern, responsive, 
        and user-friendly web applications with clean UI and smooth experiences.
      </motion.p>

      {/* الأزرار */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
      >
        <Link 
          href="#projects" 
          className="min-w-[150px] h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Projects
        </Link>

        <Link 
          href="#contact" 
          className="min-w-[150px] h-12 flex items-center justify-center rounded-full border border-fuchsia-400 text-fuchsia-300 font-medium hover:bg-fuchsia-500/10 hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero
