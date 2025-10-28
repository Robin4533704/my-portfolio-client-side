import React from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaDownload,
  FaHeart,
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

  // Handle resume download
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/resume-robin-hossen.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Robin_Hossen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 lg:py-28">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
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
            {/* Profile Image Container */}
            <div className="relative group">
              <motion.img
                src={ProfileImage}
                alt="Robin Hossen - Full Stack Developer"
                className="rounded-3xl shadow-2xl w-full max-w-sm border-8 border-white hover:scale-105 transition-transform duration-500 group-hover:shadow-3xl"
                whileHover={{ scale: 1.02 }}
              />
              {/* Floating Badge */}
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
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-600 text-sm">Comilla, Chattogram, Bangladesh</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaEnvelope className="text-green-600 w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                </div>
                <a 
                  href="mailto:robinhossen8428@gmail.com"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  robinhossen8428@gmail.com
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FaPhone className="text-purple-600 w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                </div>
                <a 
                  href="tel:+8801866610742"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  +880 1866-610742
                </a>
              </motion.div>

              {/* Resume Download Button */}
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
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaLightbulb className="text-yellow-500" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hello! I'm <span className="font-semibold text-blue-600">Robin Hossen</span>, a passionate 
                  <span className="font-semibold text-purple-600"> Full Stack Web Developer </span> 
                  with over 2 years of experience in crafting digital solutions that make a difference.
                </p>
                <p>
                  My journey began with curiosity about how websites work, which evolved into a deep passion 
                  for creating interactive, user-friendly applications. I specialize in the 
                  <span className="font-semibold text-green-600"> MERN stack </span> 
                  and love tackling complex problems with elegant solutions.
                </p>
                <p>
                  What drives me is the belief that <span className="italic">great code should not only work flawlessly 
                  but also tell a story</span>. I'm constantly learning and adapting to new technologies, 
                  ensuring that I deliver cutting-edge solutions to my clients.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating experiences that users love. 
                  Every project is an opportunity to learn, grow, and push the boundaries of what's possible 
                  in web development.
                </p>
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaRocket className="text-green-500" />
                What I Do
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Frontend Development</h4>
                      <p className="text-gray-600 text-sm">
                        Creating responsive, interactive user interfaces with React, JavaScript, and modern CSS frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Backend Development</h4>
                      <p className="text-gray-600 text-sm">
                        Building robust server-side applications with Node.js, Express, and database management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Full Stack Solutions</h4>
                      <p className="text-gray-600 text-sm">
                        End-to-end web application development from concept to deployment and maintenance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Problem Solving</h4>
                      <p className="text-gray-600 text-sm">
                        Analyzing complex requirements and delivering efficient, scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Interests & Philosophy */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaHeart className="text-red-500" />
                Interests & Philosophy
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">My Interests</h4>
                  <div className="space-y-3">
                    {personalInterests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        {interest}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Development Philosophy</h4>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      Write clean, maintainable code that tells a story
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      Focus on user experience and performance
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-purple-500 mt-1">•</span>
                      Continuous learning and adaptation to new technologies
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      Collaboration and knowledge sharing with the community
                    </p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
              >
                <p className="text-gray-700 italic text-center">
                  "Code is poetry, and every project is a story waiting to be told. I believe in creating 
                  digital experiences that not only function flawlessly but also inspire and delight users."
                </p>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-6 border border-blue-200/50">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Let's create something amazing together!
                </h4>
                <p className="text-gray-600 text-sm mb-4">
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
                    href="https://github.com/robinhossen"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/robinhossen"
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