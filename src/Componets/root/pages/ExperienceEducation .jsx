import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
  FaRocket,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt
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
      type: "Full-time Position",
      description: "Developing and maintaining full-stack web applications using modern technologies. Leading frontend development while collaborating on backend architecture.",
      achievements: [
        "Built 5+ production-ready web applications with responsive designs",
        "Implemented secure JWT authentication and authorization systems",
        "Optimized application performance, reducing load time by 40%",
        "Integrated RESTful APIs and third-party services",
        "Mentored 2 junior developers in React best practices"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST APIs"],
      icon: <FaLaptopCode className="text-white" />,
      color: "green",
      status: "current"
    },
    {
      id: 2,
      position: "Backend Developer Specialist",
      company: "Programming Hero",
      duration: "August 2024 – Present",
      location: "Dhaka, Bangladesh (Hybrid)",
      type: "Specialized Training Role",
      description: "Advanced backend development focusing on scalable architecture, database design, and API development.",
      achievements: [
        "Developed scalable microservices architecture",
        "Implemented MongoDB aggregation pipelines for complex queries",
        "Built real-time features using WebSocket connections",
        "Created comprehensive API documentation",
        "Reduced server response time by 60% through optimization"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.io", "Jest", "Docker"],
      icon: <FaServer className="text-white" />,
      color: "blue",
      status: "current"
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "Freelance Projects",
      duration: "January 2024 – Present",
      location: "Remote",
      type: "Contract Projects",
      description: "Delivered high-quality frontend solutions for various clients, focusing on user experience and modern design principles.",
      achievements: [
        "Completed 10+ client projects with 100% satisfaction rate",
        "Developed reusable component libraries",
        "Implemented responsive designs for all device sizes",
        "Integrated with multiple backend APIs",
        "Improved website accessibility scores by 35%"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "GraphQL"],
      icon: <FaCode className="text-white" />,
      color: "purple",
      status: "current"
    }
  ];

  // 🎓 Education Data
  const educationData = [
    {
      id: 1,
      degree: "Master of Arts in Political Science",
      institution: "Comilla Victory Government College",
      location: "Chittagong, Bangladesh",
      duration: "2021 - 2022",
      grade: "CGPA: 2.89/4.0",
      achievements: ["Dean's List Award", "Research Paper Publication"],
      icon: <FaUniversity className="text-white" />,
      color: "blue"
    },
    {
      id: 2,
      degree: "Bachelor of Arts in Political Science",
      institution: "Nawab Faizunnesa Government College",
      location: "Chittagong, Bangladesh",
      duration: "2018 - 2021",
      grade: "CGPA: 3.03/4.0",
      achievements: ["Academic Excellence Award", "Student Leadership"],
      icon: <FaUniversity className="text-white" />,
      color: "blue"
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gajimura Kamil Madrasha",
      location: "Laksam, Comilla",
      duration: "2018 - 2020",
      grade: "GPA: 3.86/5.0",
      achievements: ["Science Group Topper", "Extracurricular Excellence"],
      icon: <FaGraduationCap className="text-white" />,
      color: "green"
    },
    {
      id: 4,
      degree: "Secondary School Certificate (SSC)",
      institution: "Gajimura Kamil Madrasha",
      location: "Laksam, Comilla",
      duration: "2014 - 2015",
      grade: "GPA: 4.94/5.0",
      achievements: ["Science Group First Position", "Board Scholarship"],
      icon: <FaGraduationCap className="text-white" />,
      color: "purple"
    }
  ];

  // 🏆 Certifications & Awards
  const certifications = [
    {
      id: 1,
      name: "Complete Web Development Bootcamp",
      issuer: "Programming Hero",
      date: "2024",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta via Coursera",
      date: "2024",
      icon: <FaAward className="text-blue-500" />
    },
    {
      id: 3,
      name: "Backend Development Specialization",
      issuer: "University of Michigan",
      date: "2024",
      icon: <FaAward className="text-green-500" />
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return colorMap[color] || "from-gray-500 to-gray-600";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

  return (
    <section
      id="experience"
      className="w-full bg-gradient-to-br from-gray-50 dark:from-gray-900 to-blue-50/20 dark:to-gray-800 py-6 lg:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-900 dark:text-gray-50 max-w-3xl mx-auto mb-6">
            Combining technical expertise with continuous learning to deliver exceptional digital solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <FaBriefcase className="text-white text-xl" />
            </div>
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative group">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 dark:from-green-700 dark:via-blue-700 dark:to-purple-700"></div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 ml-8 relative overflow-hidden">
                  {/* Gradient BG */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(exp.color)} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className={`absolute -left-8 top-6 w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses(exp.color)} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}>
                    {exp.icon}
                  </div>

                  {/* Current Badge */}
                  {exp.status === "current" && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                        Current Role
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h4>
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-300 mt-1 sm:mt-0 sm:text-right">
                      <div className="flex items-center gap-1 mb-1"><FaCalendarAlt className="w-3 h-3" />{exp.duration}</div>
                      <div className="flex items-center gap-1"><FaMapMarkerAlt className="w-3 h-3" />{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <FaAward className="text-yellow-500" /> Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies & Tools:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:shadow-md transition-shadow duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications (Remaining unchanged with dark mode support) */}
      </div>
    </section>
  );
};

export default ExperienceEducation;
