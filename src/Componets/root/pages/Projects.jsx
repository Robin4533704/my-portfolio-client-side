import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowLeft,
  FaArrowRight,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaServer,
  FaPaintBrush,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaTools,
  FaCode,
  FaPalette
} from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiFirebase,
  SiStripe,
  SiJavascript,
  SiFigma,
  SiAdobexd
} from "react-icons/si";

// Project case studies data
const caseStudies = [
  {
    id: 1,
    title: "Parcel Delivery Platform",
    category: "Full Stack Web Application",
    excerpt: "A comprehensive logistics platform for modern parcel delivery services",
    challenge: "Traditional parcel delivery systems lack real-time tracking, transparent pricing, and efficient rider management, leading to poor customer experience and operational inefficiencies.",
    role: "Full Stack Developer & UI/UX Designer",
    process: [
      "User Research & Requirement Analysis",
      "Wireframing & Prototyping",
      "Database Design & Architecture",
      "Frontend & Backend Development",
      "Testing & Deployment",
      "Performance Optimization"
    ],
    solution: "Developed a full-stack web application with real-time tracking, automated rider assignment, secure payment integration, and comprehensive admin dashboard for complete logistics management.",
    keyFeatures: [
      "Real-time Parcel Tracking",
      "Automated Rider Matching",
      "Secure Payment Processing",
      "Admin Management Dashboard",
      "User Authentication & Authorization",
      "Multi-role User System"
    ],
    technologies: {
      frontend: [
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
      ],
      backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" }
      ],
      tools: [
        { name: "Firebase Auth", icon: SiFirebase, color: "text-yellow-500" },
        { name: "Stripe", icon: SiStripe, color: "text-purple-500" },
        { name: "Figma", icon: SiFigma, color: "text-pink-500" }
      ]
    },
    images: [
      "/e-commerc.png",
      "/e-commerc.png", 
      "/e-commerc.png",
      "/e-commerc.png"
    ],
    demoLink: "https://superb-bublanina-e76917.netlify.app",
    githubLink: "https://github.com/Robin4533704/local-market-clientside",
    duration: "3 months",
    teamSize: "Solo Project",
    status: "Live"
  },
  {
    id: 2,
    title: "Virtual Book Store",
    category: "E-commerce Platform",
    excerpt: "A modern online bookstore with comprehensive book management system",
    challenge: "Book enthusiasts struggle to find a platform that offers seamless book discovery, secure transactions, and personalized reading recommendations in one place.",
    role: "Full Stack Developer",
    process: [
      "Market Research & Competitor Analysis",
      "UI/UX Design & User Flow",
      "Database Schema Design",
      "REST API Development",
      "Frontend Implementation",
      "Deployment & CI/CD"
    ],
    solution: "Created a feature-rich online bookstore with advanced search, wishlist functionality, user reviews, and secure payment gateway integration for book lovers.",
    keyFeatures: [
      "Advanced Book Search & Filtering",
      "User Wishlist & Reading Lists",
      "Book Reviews & Ratings",
      "Secure Payment Integration",
      "Admin Book Management",
      "Responsive Mobile Design"
    ],
    technologies: {
      frontend: [
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
      ],
      backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" }
      ],
      tools: [
        { name: "Firebase Auth", icon: SiFirebase, color: "text-yellow-500" },
        { name: "Figma", icon: SiFigma, color: "text-pink-500" }
      ]
    },
    images: [
      "/book shop.png",
      "/book shop.png",
      "/book shop.png",
      "/book shop.png"
    ],
    demoLink: "https://golden-rugelach-d5b2de.netlify.app",
    githubLink: "https://github.com/Robin4533704/virture-book-clinet",
    duration: "2.5 months",
    teamSize: "Solo Project",
    status: "Live"
  },
  {
    id: 3,
    title: "Hobby Sharing Platform",
    category: "Social Community Application",
    excerpt: "A creative social platform for sharing hobbies and connecting enthusiasts",
    challenge: "People with niche hobbies often struggle to find like-minded communities and platforms to share their passions and learn from others.",
    role: "Full Stack Developer & Project Architect",
    process: [
      "User Persona Development",
      "Feature Prioritization",
      "System Architecture Design",
      "Agile Development Sprints",
      "User Testing & Feedback",
      "Production Deployment"
    ],
    solution: "Built a social platform that enables users to share their hobbies, join communities, interact with other enthusiasts, and discover new passions through an intuitive interface.",
    keyFeatures: [
      "Hobby-based Community Groups",
      "Post Sharing & Interaction",
      "User Profile Customization",
      "Real-time Notifications",
      "Content Moderation System",
      "Multi-media Support"
    ],
    technologies: {
      frontend: [
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
      ],
      backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" }
      ],
      tools: [
        { name: "Firebase Auth", icon: SiFirebase, color: "text-yellow-500" },
        { name: "Adobe XD", icon: SiAdobexd, color: "text-purple-500" },
        { name: "UI Design", icon: FaPalette, color: "text-blue-500" }
      ]
    },
    images: [
      "/hobbyhobe.png",
      "/hobbyhobe.png",
      "/hobbyhobe.png",
      "/hobbyhobe.png"
    ],
    demoLink: "https://subtle-entremet-54ed19.netlify.app",
    githubLink: "https://github.com/Robin4533704/hobbyhove-clinet-side",
    duration: "3 months",
    teamSize: "Solo Project",
    status: "Live"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="case-studies" className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 lg:py-28">
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
            Project Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Deep dive into my development process, challenges faced, and solutions implemented
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">View Case Study</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.excerpt}
                </p>
                
                {/* Quick Stats */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaUsers className="w-4 h-4" />
                    {project.teamSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRocket className="w-4 h-4" />
                    {project.duration}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.slice(0, 3).map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className={`px-2 py-1 bg-gray-100 rounded-lg text-xs flex items-center gap-1 ${tech.color}`}
                      >
                        <TechIcon className="w-3 h-3" />
                        {tech.name}
                      </div>
                    );
                  })}
                  {project.technologies.frontend.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-500">
                      +{project.technologies.frontend.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    {/* Image Navigation */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors"
                    >
                      <FaArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors"
                    >
                      <FaArrowRight className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors"
                  >
                    <FaArrowLeft className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Project Header */}
                  <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                          {selectedProject.title}
                        </h2>
                        <p className="text-xl text-blue-600 font-semibold">
                          {selectedProject.category}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <motion.a
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          Source Code
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <FaUsers className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">Team Size</div>
                        <div className="text-gray-600">{selectedProject.teamSize}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <FaRocket className="w-6 h-6 text-green-500 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">Duration</div>
                        <div className="text-gray-600">{selectedProject.duration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <FaLightbulb className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">My Role</div>
                        <div className="text-gray-600">{selectedProject.role}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <FaCode className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">Status</div>
                        <div className={`font-semibold ${
                          selectedProject.status === 'Live' 
                            ? 'text-green-600' 
                            : 'text-yellow-600'
                        }`}>
                          {selectedProject.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Challenge */}
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-red-50 rounded-2xl p-6 border border-red-200"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaLightbulb className="text-red-500" />
                          The Challenge
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedProject.challenge}
                        </p>
                      </motion.div>

                      {/* Solution */}
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-green-50 rounded-2xl p-6 border border-green-200"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaRocket className="text-green-500" />
                          The Solution
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </motion.div>

                      {/* Key Features */}
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-blue-50 rounded-2xl p-6 border border-blue-200"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaTools className="text-blue-500" />
                          Key Features
                        </h3>
                        <div className="grid gap-3">
                          {selectedProject.keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Development Process */}
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-purple-50 rounded-2xl p-6 border border-purple-200"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaPaintBrush className="text-purple-500" />
                          Development Process
                        </h3>
                        <div className="space-y-3">
                          {selectedProject.process.map((step, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                                {index + 1}
                              </div>
                              <span className="text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technologies Used */}
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaCode className="text-gray-600" />
                          Technologies & Tools
                        </h3>
                        
                        {/* Frontend */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaDesktop className="text-blue-500" />
                            Frontend
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.technologies.frontend.map((tech, index) => {
                              const TechIcon = tech.icon;
                              return (
                                <div
                                  key={index}
                                  className={`flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border ${tech.color}`}
                                >
                                  <TechIcon className="w-4 h-4" />
                                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Backend */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaServer className="text-green-500" />
                            Backend
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.technologies.backend.map((tech, index) => {
                              const TechIcon = tech.icon;
                              return (
                                <div
                                  key={index}
                                  className={`flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border ${tech.color}`}
                                >
                                  <TechIcon className="w-4 h-4" />
                                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Tools */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaTools className="text-yellow-500" />
                            Tools & Services
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.technologies.tools.map((tech, index) => {
                              const TechIcon = tech.icon;
                              return (
                                <div
                                  key={index}
                                  className={`flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border ${tech.color}`}
                                >
                                  <TechIcon className="w-4 h-4" />
                                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;