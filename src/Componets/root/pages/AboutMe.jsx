import React from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaDownload,
  FaLightbulb,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt
} from "react-icons/fa";
import ProfileImage from "../../../assets/image/bg-3.png";

const AboutMe = () => {
  const personalInterests = [
    "Open Source Contribution",
    "Tech Blogging",
    "UI/UX Design",
    "Learning New Technologies",
    "Mentoring Juniors",
    "Project Management"
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "/Black and Gray Simple Graphic Designer Resume (1).pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Robin_Hossen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/40 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Passionate Full Stack Developer crafting digital experiences that make a difference
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left: Profile Image & Personal Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full lg:w-2/5 flex flex-col items-center lg:items-start"
          >
            <div className="relative group">
              <motion.img
                src={ProfileImage}
                alt="Robin Hossen - Full Stack Developer"
                className="rounded-3xl shadow-2xl w-full max-w-sm border-8 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-500 group-hover:shadow-3xl"
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2"
              >
                <FaRocket className="text-sm" />
                Available
              </motion.div>
            </div>

            {/* Personal Info Cards */}
            <div className="w-full max-w-sm mt-8 space-y-4">
              {[{
                icon: FaMapMarkerAlt,
                title: "Location",
                value: "Comilla, Chattogram, Bangladesh",
                bg: "bg-blue-100",
                iconColor: "text-blue-600"
              }, {
                icon: FaEnvelope,
                title: "Email",
                value: "robinhossen8428@gmail.com",
                bg: "bg-green-100",
                iconColor: "text-green-600",
                href: "mailto:robinhossen8428@gmail.com"
              }, {
                icon: FaPhone,
                title: "Phone",
                value: "+88019-69453361",
                bg: "bg-purple-100",
                iconColor: "text-purple-600",
                href: "tel:+8801866610742"
              }].map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 ${info.bg} rounded-lg`}>
                      <info.icon className={`${info.iconColor} w-5 h-5`} />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{info.title}</h3>
                  </div>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{info.value}</p>
                  )}
                </motion.div>
              ))}

              {/* Resume Download */}
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group mt-4"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume (PDF)
                <FaExternalLinkAlt className="text-sm" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Detailed Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full lg:w-3/5 flex flex-col space-y-8"
          >
            {/* Professional Story */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                <FaLightbulb className="text-yellow-500" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Robin Hossen</span>, a passionate 
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> Full Stack Web Developer </span> 
                  with over 2 years of experience crafting impactful digital solutions.
                </p>
                <p>
                  I specialize in the <span className="font-semibold text-green-600 dark:text-green-400">MERN stack</span> and love solving complex problems elegantly.
                </p>
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                <FaRocket className="text-green-500" />
                What I Do
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Frontend Development", color: "bg-blue-500", desc: "Creating responsive, interactive user interfaces with React, JavaScript, and modern CSS frameworks." },
                  { title: "Backend Development", color: "bg-green-500", desc: "Building robust server-side applications with Node.js, Express, and database management." },
                  { title: "Full Stack Solutions", color: "bg-purple-500", desc: "End-to-end web application development from concept to deployment." },
                  { title: "Problem Solving", color: "bg-orange-500", desc: "Analyzing complex requirements and delivering scalable solutions." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`${item.color} w-3 h-3 rounded-full mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-gray-700/30 dark:to-purple-800/20 rounded-3xl p-6 border border-blue-200/50 dark:border-gray-700/50">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Let's create something amazing together!
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  I'm always open to discussing new opportunities and creative projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="https://github.com/robin4533704"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 dark:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/hossain-robin-408a21339"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
