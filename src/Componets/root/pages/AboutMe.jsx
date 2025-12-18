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
  FaExternalLinkAlt,
  FaGraduationCap
} from "react-icons/fa";
import ProfileImage from "../../../assets/image/bg-3.png";

const AboutMe = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/Untitled (1).pdf"; 
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
            Building performant, secure, and scalable web solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left: Profile Image & Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex flex-col items-center lg:items-start"
          >
            <div className="relative group">
              <motion.img
                src={ProfileImage}
                alt="Robin Hossen"
                className="rounded-3xl shadow-2xl w-full max-w-sm border-8 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2">
                <FaRocket className="text-sm" /> Available
              </div>
            </div>

            <div className="w-full max-w-sm mt-8 space-y-4">
              {[
                { icon: FaMapMarkerAlt, title: "Location", value: "Cumilla, Chattogram, Bangladesh", color: "text-blue-600", bg: "bg-blue-100" },
                { icon: FaEnvelope, title: "Email", value: "robinhossen8428@gmail.com", color: "text-red-600", bg: "bg-red-100", href: "mailto:robinhossen8428@gmail.com" },
                { icon: FaPhone, title: "Phone", value: "+8801969453361", color: "text-green-600", bg: "bg-green-100", href: "tel:+8801969453361" },
                { icon: FaGraduationCap, title: "Education", value: "M.A. in Arts (Cumilla Victory Govt College)", color: "text-purple-600", bg: "bg-purple-100" }
              ].map((info, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${info.bg} rounded-lg ${info.color}`}><info.icon /></div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{info.title}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-medium hover:text-blue-600 transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <button onClick={handleDownloadResume} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all">
                <FaDownload /> Download Resume
              </button>
            </div>
          </motion.div>

          {/* Right: Summary & Skills */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaLightbulb className="text-yellow-500" /> Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I am a passionate <span className="font-bold text-blue-600">Full Stack Web Developer</span> specializing in the <span className="font-bold text-purple-600">MERN Stack</span>. 
                My expertise includes advanced technologies like <span className="font-semibold">Next.js</span> for optimized server-rendered applications and <span className="font-semibold">TypeScript</span> for scalable codebases. 
                I excel in building high-performance web applications with clean architecture and efficient data management using <span className="font-semibold">PostgreSQL</span> and <span className="font-semibold">MongoDB</span>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaRocket className="text-blue-500" /> Core Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Frontend Focus", desc: "Responsive UIs with React, Next.js, and Tailwind CSS focusing on UI/UX." },
                  { title: "Backend Mastery", desc: "Secure RESTful APIs using Node.js, Express, and JWT Authentication." },
                  { title: "Database Management", desc: "Expertise in PostgreSQL (NeonDB) and NoSQL (MongoDB/Mongoose)." },
                  { title: "Optimization", desc: "Server-side rendering (SSR), SEO optimization, and end-to-end deployment." }
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">{skill.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/robin-hossen" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-black transition-all">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/robinhossen4533" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;