"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { navLinks } from "../data";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 200; // نزود شوية عشان التغيير يبقى بدري
      let current = "home";

      navLinks.forEach((link) => {
        // نشيل الـ "/" أو "#" عشان نجيب الـ id
        const id = link.href.replace("/", "").replace("#", "") || "home";
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const handleScroll = (href: string) => {
    const id = href.replace("/", "").replace("#", "") || "home";
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false);
  };

  return (
    <nav className="w-full fixed top-4 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
      {/* Desktop Menu */}
      <ul className="hidden w-[30%] h-12 md:flex items-center justify-center gap-7 lg:gap-8 rounded-full px-12 py-3 bg-[#1f1f1f] shadow-sm">
        {navLinks.map((link) => {
          const id = link.href.replace("/", "").replace("#", "") || "home";
          const isActive = activeSection === id;

          return (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "text-fuchsia-300 font-bold"
                    : "text-gray-300 hover:text-fuchsia-300"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="fixed top-4 right-4 z-50 flex items-center px-3 py-2 border cursor-pointer border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
          {navbarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/70 backdrop-blur-md z-40">
          <ul className="flex gap-6 flex-col text-center text-xl">
            {navLinks.map((link) => {
              const id = link.href.replace("/", "").replace("#", "") || "home";
              const isActive = activeSection === id;

              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "text-fuchsia-300 font-bold"
                        : "text-white hover:text-fuchsia-200"
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
