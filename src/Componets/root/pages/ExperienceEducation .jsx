import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";

const ExperienceEducation = () => {
  // 💼 Professional Experience Data
  const experienceData = [
    {
      id: 1,
      position: "Full Stack Developer (MERN Stack)",
      company: "Solution Point",
      duration: "July 2024 – Present",
      location: "Remote, Bangladesh",
      description: "Leading frontend development and architecting scalable MERN applications with a focus on performance and security.",
      achievements: [
        "Built 5+ production-ready web applications with 95% Lighthouse score",
        "Implemented secure JWT-based multi-role authentication",
        "Optimized database queries, reducing API response time by 40%"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      icon: <FaLaptopCode />,
      color: "from-blue-500 to-cyan-500",
      status: "current"
    },
    {
      id: 2,
      position: "Backend Developer Specialist",
      company: "Programming Hero",
      duration: "August 2024 – Present",
      location: "Dhaka, Bangladesh (Hybrid)",
      description: "Specialized focus on server-side logic, database management, and real-time communication systems.",
      achievements: [
        "Architected real-time notification system using Socket.io",
        "Designed complex MongoDB aggregation pipelines for analytics",
        "Integrated third-party payment gateways and cloud services"
      ],
      technologies: ["Node.js", "MongoDB", "Mongoose", "Socket.io", "Docker"],
      icon: <FaServer />,
      color: "from-purple-500 to-pink-500",
      status: "current"
    }
  ];

  // 🎓 Education Data
  const educationData = [
    {
      id: 1,
      degree: "Master of Arts (M.A.)",
      institution: "Cumilla Victory Government College",
      duration: "2021 - 2022",
      location: "Cumilla, Bangladesh",
      icon: <FaUniversity />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      degree: "Bachelor of Arts (B.A.)",
      institution: "Nawab Faizunnesa Government College",
      duration: "2017 - 2021",
      location: "Cumilla, Bangladesh",
      icon: <FaUniversity />,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="resume" className="w-full py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Experience & <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background in the world of technology.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Experience */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <FaBriefcase className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full border-4 border-gray-50 dark:border-gray-900 bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-xl z-10 shadow-xl`}>
                    {exp.icon}
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {exp.position}
                        </h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="text-[10px] font-bold px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Education */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl">
                <FaGraduationCap className="text-2xl text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Education History</h3>
            </div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {edu.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                      {edu.duration}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                      <FaMapMarkerAlt className="text-xs" />
                      {edu.location}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Training / Certifications Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-10 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
              >
                <FaAward className="absolute -right-4 -bottom-4 text-9xl text-white/10 rotate-12" />
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FaAward className="text-yellow-400" /> Certifications
                </h4>
                <div className="space-y-4 relative z-10">
                  <div className="pb-3 border-b border-white/10">
                    <p className="font-bold">MERN Stack Development</p>
                    <p className="text-sm text-blue-100">Programming Hero • 2024</p>
                  </div>
                  <div>
                    <p className="font-bold">Advanced Backend Specialization</p>
                    <p className="text-sm text-blue-100">Industrial Level Project Training • 2024</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;