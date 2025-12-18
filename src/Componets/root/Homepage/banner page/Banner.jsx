import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si";
import BannerImage from "../../../../assets/image/imagerobin-removebg-preview.png";
import BackgroundImage from "../../../../assets/image/v915-red-blue.png";

const Banner = () => {
  const particlesInit = async (main) => await loadFull(main);

  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // রেজুমের সাথে মিল রেখে টেক্সট আপডেট
  const texts = [
    "Full Stack Web Developer",
    "MERN Stack Specialist",
    "Next.js & TypeScript Expert",
    "Database Management (SQL/NoSQL)",
    "UI/UX Focus Developer",
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
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Robin_Hossen_Resume.pdf"; // public ফোল্ডারে এই নামে ফাইলটি রাখুন
    link.download = "Robin_Hossen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // রেজুমের লিঙ্ক অনুযায়ী আপডেট করা হয়েছে
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/robin-hossen", color: "hover:text-gray-400", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hossainrobin", color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:robinhossen8428@gmail.com", color: "hover:text-red-400", label: "Email" },
  ];

  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaCode /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  return (
    <section
      id="home"
      className="pt-20 lg:pt-24 relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, 
          rgba(15, 23, 42, 0.95) 0%, 
          rgba(30, 58, 138, 0.9) 45%, 
          rgba(88, 28, 135, 0.85) 100%), 
          url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ["#60a5fa", "#a855f7", "#ffffff"] },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] max-w-7xl w-full py-10 lg:py-0">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex flex-col items-start space-y-6 text-white"
        >
          <motion.div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Ready for Full-Stack Roles
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Robin Hossen
            </span>
          </h1>

          <div className="h-16 flex items-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Seasoned <span className="text-blue-400 font-semibold">MERN Stack Developer</span> specializing in 
            <span className="text-purple-400 font-semibold"> Next.js, TypeScript,</span> and 
            <span className="text-pink-400 font-semibold"> PostgreSQL</span>. I build scalable, secure, and user-centric web solutions with clean architecture.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm"
              >
                <span className="text-blue-400">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all"
            >
              Hire Me 🚀
            </motion.button>
            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
            >
              <FaDownload size={14} /> Resume
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-3 bg-white/5 rounded-xl border border-white/10 text-2xl transition-colors ${social.color}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/5 flex justify-center mb-10 lg:mb-0 relative"
        >
          <div className="relative group">
            {/* Animated Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative p-2 bg-slate-900 rounded-full border-2 border-white/10">
              <img
                src={BannerImage}
                alt="Robin Hossen"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
              />
            </div>

            {/* Floating Info */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-10 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hidden sm:block"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 bottom-10 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hidden sm:block"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;