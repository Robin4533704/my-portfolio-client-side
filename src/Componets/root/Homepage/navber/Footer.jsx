import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Robin4533704", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hossain-robin-408a21339", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:robinhossen8428@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Brand / Socials */}
          <motion.div variants={fadeIn} className="text-center md:text-left bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-white mb-3">Robin Hossen</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full Stack Developer passionate about creating digital experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn} className="text-center md:text-left bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-sm py-1"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn} className="text-center md:text-left bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:robinhossen8428@gmail.com" className="hover:text-blue-400 transition-colors">
                  robinhossen8428@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <FaPhone className="text-blue-400" />
                <a href="tel:+8801969453361" className="hover:text-blue-400 transition-colors">
                  +880 1969-453361
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {year} Robin Hossen. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              <span>using React & Tailwind</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
