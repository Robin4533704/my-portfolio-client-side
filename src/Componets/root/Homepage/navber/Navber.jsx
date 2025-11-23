import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { FaDownload, FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "../banner page/ThemeToggle";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  // Update active section on scroll
  useEffect(() => {
    const handleScrollActive = () => {
      const sections = links.map(link => link.to);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [links]);

 
// Initialize theme from localStorage or system preference
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(initialTheme);
  
  // যদি dark mode হয়, তবে html element এ dark class add করুন
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);

// Handle theme change
const handleThemeChange = (newTheme) => {
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  
  // theme অনুযায়ী dark class toggle করুন
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

 
  const downloadResume = () => {
    const resumeUrl = "/Untitled (1).pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Robin_Hossen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Animated Border Bottom */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: 1.2,
          delay: 0.5,
          ease: "easeOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            aria-label="Scroll to top"
            onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Image Container */}
<div className="relative">
  {/* Logo Badge */}
  <motion.div
    className="absolute -top-6 -left-6 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 z-20"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <span className="text-white font-bold text-lg">RH</span>
  </motion.div>

  {/* Main Image */}
  <motion.img
    src="/logo_final-removebg-preview.png"
    alt="Robin Hossen"
    className="w-14 h-14 rounded-full object-cover shadow-2xl border-4 border-white/30"
  />
</div>

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ zIndex: -1 }}
              />
            </motion.div>
            
            <motion.div className="flex flex-col">
              <motion.span
                className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Robin Hossen
              </motion.span>
              <motion.span
                className="text-xs text-gray-500 dark:text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <ul className="flex items-center space-x-1">
              {links.map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onSetActive={() => setActiveSection(link.to)}
                    className={`relative px-4 py-2 rounded-xl font-semibold cursor-pointer transition-all duration-300 group ${
                      activeSection === link.to
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
                    }`}
                    aria-current={activeSection === link.to ? "page" : undefined}
                  >
                    {link.name}
                    
                    {/* Active Indicator */}
                    {activeSection === link.to && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-500 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>

            {/* Theme Toggle - DaisyUI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-3 ml-4"
            >
              {/* DaisyUI Theme Controller */}
            <ThemeToggle/>

              {/* Download Resume Button */}
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Download resume"
              >
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </motion.button>

              {/* Hire Me Button */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Me 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      🚀
                    </motion.span>
                  </span>
                </motion.div>
              </ScrollLink>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="lg:hidden p-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                {isMenuOpen ? (
                  <IoClose className="text-xl text-blue-500" />
                ) : (
                  <TiThMenu className="text-xl" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden mobile-menu fixed inset-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="h-screen pt-8 pb-20 px-6 overflow-y-auto">
              {/* Navigation Links */}
              <ul className="space-y-4 mb-8">
                {links.map((link, index) => (
                  <motion.li
                    key={link.to}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
                  >
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      spy={true}
                      onSetActive={() => setActiveSection(link.to)}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-semibold transition-all duration-300 border-l-4 ${
                        activeSection === link.to
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 border-blue-500 shadow-lg"
                          : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400 border-transparent hover:border-blue-300"
                      }`}
                      aria-current={activeSection === link.to ? "page" : undefined}
                    >
                      <div className={`w-2 h-2 rounded-full transition-colors ${
                        activeSection === link.to ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`} />
                      {link.name}
                    </ScrollLink>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Action Buttons */}
              <motion.div
                variants={itemVariants}
                transition={{ delay: links.length * 0.1 }}
                className="space-y-4 mb-8"
              >
                {/* DaisyUI Theme Controller - Mobile */}
              <ThemeToggle/>

                {/* Resume Download */}
                <motion.button
                  onClick={() => {
                    downloadResume();
                    setIsMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300"
                  aria-label="Download resume"
                >
                  <FaDownload />
                  Download Resume
                </motion.button>

                {/* Hire Me Button */}
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full"
                >
                  <motion.div
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Hire Me 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </span>
                  </motion.div>
                </ScrollLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;