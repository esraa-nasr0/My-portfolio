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
      icon: <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/esraa-nasr0",
      href: "https://github.com/esraa-nasr0",
      icon: <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 dark:text-gray-200" />,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+20 1150995796",
      href: "tel:+201150995796",
      icon: <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    },
    {
      id: "email",
      label: "Email",
      value: "esraaelbordeny@gmail.com",
      href: "mailto:esraaelbordeny@gmail.com",
      icon: <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    },
  ];

  return (
    <section
  id="contact"
  className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
      Get in <span className="text-fuchsia-300">Touch</span>
    </h2>
    <p className="text-sm sm:text-base text-gray-400">
      Feel free to reach out to me via any of the following platforms:
    </p>
  </div>

  {/* هنا ضفت px-4 عشان تبعد الكروت عن الشمال واليمين */}
  <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 max-w-3xl w-full px-4">
    {CONTACTS.map((contact) => (
      <motion.a
        key={contact.id}
        href={contact.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-5 sm:gap-7 p-4 sm:p-6 shadow-md rounded-xl bg-transparent hover:shadow-xl transition-shadow duration-300 w-full"
      >
        <div className="p-3 rounded-full">{contact.icon}</div>
        <div className="text-left">
          <p className="text-lg sm:text-xl font-semibold text-fuchsia-300">
            {contact.label}
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-400 break-all">
            {contact.value}
          </p>
        </div>
      </motion.a>
    ))}
  </div>
</section>

  );
}
