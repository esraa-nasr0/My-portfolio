"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const CONTACTS = [
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/esraa-el-bordeny-aa4355293",
      href: "https://www.linkedin.com/in/esraa-el-bordeny-aa4355293/",
      icon: <FaLinkedin className="h-5 w-5 text-white sm:h-6 sm:w-6" />,
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/esraa-nasr0",
      href: "https://github.com/esraa-nasr0",
      icon: <FaGithub className="h-5 w-5 text-gray-200 sm:h-6 sm:w-6" />,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+20 1150995796",
      href: "tel:+201150995796",
      icon: <FaPhoneAlt className="h-5 w-5 text-white sm:h-6 sm:w-6" />,
    },
    {
      id: "email",
      label: "Email",
      value: "esraaelbordeny@gmail.com",
      href: "mailto:esraaelbordeny@gmail.com",
      icon: <FaEnvelope className="h-5 w-5 text-white sm:h-6 sm:w-6" />,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="section-title">
            Get in <span className="text-fuchsia-300">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Feel free to reach out to me via any of the following platforms:
          </p>
        </div>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-4 sm:max-w-2xl sm:grid-cols-2 sm:gap-5 lg:max-w-3xl lg:gap-6">
          {CONTACTS.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-shadow duration-300 hover:border-fuchsia-400/20 hover:shadow-lg hover:shadow-fuchsia-500/10 sm:gap-4 sm:p-5"
            >
              <div className="shrink-0 rounded-full bg-gray-800/70 p-2.5 sm:p-3">
                {contact.icon}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-semibold text-fuchsia-300 sm:text-base">
                  {contact.label}
                </p>
                <p className="truncate text-xs font-medium text-gray-400 sm:text-sm">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
