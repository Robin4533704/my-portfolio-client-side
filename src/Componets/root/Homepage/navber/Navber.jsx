import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import ThemeToggle from "../banner page/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  // Scroll logic for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle resume download
  const downloadResume = () => {
    const resumeUrl = "/Untitled (1).pdf"; // Ensure this file is in your public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Robin_Hossen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <motion.div 
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-blue-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-600 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo_final-removebg-preview.png" 
                  alt="RH" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white leading-none">
                ROBIN<span className="text-blue-600">.</span>H
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-gray-400">
                Full Stack Dev
              </span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center bg-gray-100/50 dark:bg-gray-800/50 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700">
            <ul className="flex items-center">
              {links.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    onSetActive={() => setActiveSection(link.to)}
                    className={`px-5 py-2 text-sm font-bold rounded-xl cursor-pointer transition-all duration-300 ${
                      activeSection === link.to
                        ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:shadow-xl transition-all"
            >
              <FaDownload size={14} />
              Resume
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isMenuOpen ? <IoClose size={28} /> : <TiThMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <ul className="px-6 py-8 space-y-4">
              {links.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
              <div className="pt-6">
                <button
                  onClick={downloadResume}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg"
                >
                  <FaDownload /> Download CV
                </button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;