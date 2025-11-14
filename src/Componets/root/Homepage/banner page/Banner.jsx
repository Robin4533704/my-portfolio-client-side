import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaCode } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import BannerImage from "../../../../assets/image/imagerobin-removebg-preview.png";
import BackgroundImage from "../../../../assets/image/v915-red-blue.png";

const Banner = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full Stack Developer',
    'MERN Stack Specialist', 
    'React Developer',
    'Problem Solver',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const current = texts[currentText];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, texts]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const resumeUrl = "/Black and Gray Simple Graphic Designer Resume (1).pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Robin_Hossen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/robin-hossen", color: "hover:text-gray-400", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hossain-robin-408a21339", color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:robin@example.com", color: "hover:text-red-400", label: "Email" },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Next.js", icon: "▲" },
  ];

  return (
    <section
      id="home"
      className="pt-20 lg:pt-24 relative w-full min-h-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, 
          rgba(30, 58, 138, 0.92) 0%,
          rgba(79, 70, 229, 0.88) 45%,
          rgba(219, 39, 119, 0.85) 100%), 
          url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 }
            },
            color: {
              value: ["#ffffff", "#60a5fa", "#a855f7", "#ec4899", "#f59e0b"]
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: { min: 0.1, max: 0.6 },
              animation: {
                enable: true,
                speed: 1.5,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 4 },
            },
            move: {
              enable: true,
              speed: { min: 0.3, max: 1.2 },
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            wobble: {
              enable: true,
              distance: 5,
              speed: 0.5
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen max-w-7xl w-full py-16 lg:py-0">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/2 flex flex-col mt-8 lg:mt-0 items-start justify-center space-y-6 sm:space-y-8 text-white px-2 sm:px-4"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-2"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span className="text-green-300 font-medium text-sm">Available for new opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Robin Hossen
            </span>
          </motion.h1>

          {/* Animated Typing Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-20 sm:h-24 flex items-center"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-white"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl"
          >
            I craft <span className="text-amber-300 font-semibold">scalable web applications</span> and 
            <span className="text-blue-300 font-semibold"> digital experiences</span> using modern technologies. 
            Passionate about clean code, user-centric design, and cutting-edge development practices.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default group"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-base">{tech.icon}</span>
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <span>Get In Touch</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-lg"
              >
                🚀
              </motion.span>
            </motion.button>

            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              <FaDownload className="text-sm" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4 mt-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white ${social.color} transition-all duration-300 hover:bg-white/20`}
                aria-label={social.label}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-3 gap-6 mt-8 text-gray-300"
          >
            {[
              { number: "18+", label: "Projects" },
              { number: "1+", label: "Years Exp" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="text-2xl font-bold text-white mb-1"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 px-4 sm:px-8"
        >
          <div className="relative">
            {/* Main Image Container */}
            <motion.div
              className="relative z-10"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
            >
              <div className="relative">
                {/* Professional Image with Gradient Border */}
                <div className="relative p-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full shadow-2xl">
                  {/* Inner Border */}
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    {/* Main Image */}
                    <motion.img
                      src={BannerImage}
                      alt="Robin Hossen - Full Stack Developer"
                      className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-2xl border-4 border-white/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                  
                  {/* Animated Border Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-75"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ zIndex: -1 }}
                  />
                </div>
                
                {/* Floating Tech Badges */}
                <motion.div
                  className="absolute -top-4 -left-4 px-4 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  ⚛️ React
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 px-4 py-2 bg-purple-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  🟢 Node.js
                </motion.div>

                {/* Additional Floating Elements */}
                <motion.div
                  className="absolute top-8 -right-6 px-3 py-2 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20 shadow-lg"
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  TypeScript
                </motion.div>

                <motion.div
                  className="absolute bottom-12 -left-6 px-3 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20 shadow-lg"
                  animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                >
                  MongoDB
                </motion.div>
              </div>
            </motion.div>

            {/* Animated Background Orbs */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-28 h-28 bg-purple-400/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Rotating Tech Icons Around Image */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[SiNextdotjs, SiTypescript, SiTailwindcss, FaCode].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${index * 90}deg) translate(160px) rotate(-${index * 90}deg)`
                  }}
                >
                  <motion.div
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon className="text-white text-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm font-medium group-hover:text-white transition-colors">Explore More</span>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-white transition-colors"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;