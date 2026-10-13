"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 200;
      let current = "home";

      navLinks.forEach((link) => {
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
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  const handleScroll = (href: string) => {
    const id = href.replace("/", "").replace("#", "") || "home";
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-center px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      {/* Desktop Menu */}
      <ul className="hidden h-12 items-center justify-center gap-6 rounded-full bg-[#1f1f1f]/90 px-8 py-3 shadow-lg shadow-black/30 backdrop-blur-md md:flex lg:gap-8 lg:px-10">
        {navLinks.map((link) => {
          const id = link.href.replace("/", "").replace("#", "") || "home";
          const isActive = activeSection === id;

          return (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className={`cursor-pointer text-sm transition-colors duration-200 lg:text-base ${
                  isActive
                    ? "font-bold text-fuchsia-300"
                    : "text-gray-300 hover:text-fuchsia-300"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  {link.name}
                </motion.span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label={navbarOpen ? "Close menu" : "Open menu"}
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="absolute top-4 right-4 z-50 flex items-center rounded-lg border border-slate-500/60 bg-[#1f1f1f]/90 p-2 text-slate-200 backdrop-blur-md hover:border-white hover:text-white md:hidden"
      >
        {navbarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 text-center text-xl">
              {navLinks.map((link) => {
                const id =
                  link.href.replace("/", "").replace("#", "") || "home";
                const isActive = activeSection === id;

                return (
                  <li key={link.name}>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className={`cursor-pointer transition-colors duration-200 ${
                        isActive
                          ? "font-bold text-fuchsia-300"
                          : "text-white hover:text-fuchsia-200"
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
