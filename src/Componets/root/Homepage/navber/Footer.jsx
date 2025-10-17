import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // ✅ Import scroll

const Footer = () => {
  const year = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* About */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-semibold text-white mb-3">Robin Hossen</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Passionate web developer building beautiful, fast, functional websites with React, Tailwind CSS & Node.js.
          </p>
        </motion.div>

        {/* Quick Links */}
     <motion.div variants={fadeUp}>
  <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
  <div className="grid grid-cols-2 gap-">
    <ul className="">
      <li>
        <ScrollLink to="home" smooth={true} duration={500} className="hover:text-primary transition cursor-pointer">
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={500} className="hover:text-primary transition cursor-pointer">
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-primary transition cursor-pointer">
          Skills
        </ScrollLink>
      </li>
    </ul>
    <ul className="">
      <li>
        <ScrollLink to="industries" smooth={true} duration={500} className="hover:text-primary transition cursor-pointer">
          Industries
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-primary transition cursor-pointer">
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-primary transition cursor-pointer">
          Contact
        </ScrollLink>
      </li>
    </ul>
  </div>
</motion.div>


        {/* Contact Info */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-lg" />
              <a href="mailto:robinhossen8428@gmail.com" className="hover:text-primary transition">
                robinhossen8428@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary text-lg" />
              <a href="tel:+8801969453361" className="hover:text-primary transition">
                +880 1969-453361
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-4 sm:justify-start">
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://github.com/Robin4533704" target="_blank" rel="noreferrer" className="hover:text-white text-xl transition"><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="https://linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="hover:text-white text-xl transition"><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://twitter.com/your-link" target="_blank" rel="noreferrer" className="hover:text-white text-xl transition"><FaTwitter /></motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="https://facebook.com/your-link" target="_blank" rel="noreferrer" className="hover:text-white text-xl transition"><FaFacebook /></motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>© {year} Robin Hossen. All Rights Reserved.</p>
        <p className="mt-1">Built with 💙 React & Tailwind CSS</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
