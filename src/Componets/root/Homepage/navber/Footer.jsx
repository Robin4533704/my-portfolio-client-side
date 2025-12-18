import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
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
    { icon: FaGithub, href: "https://github.com/robinhossen", label: "GitHub", color: "hover:text-white hover:bg-gray-800" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hossainrobin", label: "LinkedIn", color: "hover:text-white hover:bg-blue-600" },
    { icon: FaEnvelope, href: "mailto:robinhossen8428@gmail.com", label: "Email", color: "hover:text-white hover:bg-red-500" },
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Brand Section */}
          <motion.div variants={fadeIn} className="lg:col-span-2 space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                ROBIN<span className="text-blue-500">.</span>HOSSEN
              </h2>
              <div className="h-1 w-full bg-blue-600 rounded-full mt-1"></div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              A dedicated Full Stack Developer building scalable MERN applications and 
              delivering exceptional digital experiences with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900 border border-gray-800 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">Navigation</h3>
            <ul className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-blue-500 transition-all cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-700 group-hover:bg-blue-500 rounded-full transition-all"></span>
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:robinhossen8428@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">robinhossen8428@gmail.com</span>
              </a>
              <a href="tel:+8801969453361" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-green-500/50 transition-all">
                  <FaPhone className="text-green-500" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">+880 1969-453361</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {year} <span className="text-gray-300 font-medium">Robin Hossen</span>. Built with Precision.
            </p>
            
            <div className="flex items-center gap-2 bg-gray-900/50 px-5 py-2 rounded-full border border-gray-800 text-sm">
              <span className="text-gray-500">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span className="text-gray-500 text-xs font-mono">React & Tailwind</span>
            </div>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-500 hover:text-white text-sm flex items-center gap-2 transition-colors uppercase tracking-widest font-bold"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;