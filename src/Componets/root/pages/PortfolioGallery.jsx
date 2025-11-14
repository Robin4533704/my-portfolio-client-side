import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptop, FaPalette, FaMobile, FaCode, FaDatabase, FaSearch, 
  FaExternalLinkAlt, FaGithub, FaFilter, FaArrowLeft, FaArrowRight,
  FaStar
} from "react-icons/fa";
import { 
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress,
  SiFirebase, SiNextdotjs, SiTypescript
} from "react-icons/si";

// -------------------- Data --------------------
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "express"],
    image: "/e-commers.png",
    description: "A complete e-commerce solution with product management, cart, and payment integration.",
    demo: "https://clinquant-mermaid-1d023e.netlify.app",
    github: "https://github.com/Robin4533704/baby-shop-clientsite.git",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "frontend",
    skills: ["react", "javascript", "tailwind"],
    image: "/Screenshot 2025-11-14 231349.png",
    description: "Modern portfolio with smooth animations and responsive design.",
    demo: "https://imaginative-kheer-943bb1.netlify.app",
    github: "https://github.com/Robin4533704/my-portfolio-client-side.git",
    featured: false
  },
  {
    id: 3,
    title: "Parcel Delivery System",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "firebase"],
    image: "/parcel delivery.png",
    description: "Logistics platform with real-time tracking and management system.",
    demo: "https://shimmering-melomakarona-fc4175.netlify.app",
    github: "https://github.com/Robin4533704/local-market-clientside",
    featured: true
  },
  {
    id: 4,
    title: "Virtual Book Store",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "express"],
    image: "/book shops.png",
    description: "Online bookstore with categorization and user management.",
    demo: "https://golden-rugelach-d5b2de.netlify.app",
    github: "https://github.com/Robin4533704/virture-book-clinet",
    featured: false
  },
  {
    id: 5,
    title: "Hobby Sharing Platform",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "tailwind"],
    image: "/hobby hove.png",
    description: "Social platform for sharing hobbies and community interaction.",
    demo: "https://subtle-entremet-54ed19.netlify.app",
    github: "https://github.com/Robin4533704/hobbyhove-clinet-side",
    featured: true
  },
  {
    id: 6,
    title: "Blog Platform",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "express"],
    image: "/web blog2.png",
    description: "Responsive blog with CRUD operations and user authentication.",
    demo: "https://vermillion-fudge-7cfb72.netlify.app",
    github: "https://github.com/Robin4533704/WebBLog-clientsite.git",
    featured: false
  },
  // {
  //   id: 7,
  //   title: "Task Management App",
  //   category: "frontend",
  //   skills: ["react", "javascript", "tailwind"],
  //   image: "/Screenshot 2025-10-17 125859.png",
  //   description: "Productive task management application with drag & drop.",
  //   demo: "#",
  //   github: "#",
  //   featured: false
  // },
  // {
  //   id: 8,
  //   title: "Weather Dashboard",
  //   category: "frontend",
  //   skills: ["react", "javascript"],
  //   image: "/book shop.png",
  //   description: "Real-time weather information with beautiful UI.",
  //   demo: "#",
  //   github: "#",
  //   featured: false
  // }
];

const categories = [
  { id: "all", name: "All Projects", icon: FaLaptop, count: projects.length, color: "from-blue-500 to-cyan-500" },
  { id: "frontend", name: "Frontend", icon: FaCode, count: projects.filter(p => p.category==="frontend").length, color: "from-green-500 to-emerald-500" },
  { id: "fullstack", name: "Full Stack", icon: FaDatabase, count: projects.filter(p => p.category==="fullstack").length, color: "from-purple-500 to-pink-500" },
  { id: "mobile", name: "Mobile Apps", icon: FaMobile, count: 0, color: "from-orange-500 to-red-500", disabled: true },
  { id: "design", name: "UI/UX Design", icon: FaPalette, count: 0, color: "from-yellow-500 to-amber-500", disabled: true }
];

const skills = [
  { id: "react", name: "React", icon: SiReact, color: "text-blue-400" },
  { id: "javascript", name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { id: "node", name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { id: "mongodb", name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { id: "express", name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { id: "firebase", name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { id: "nextjs", name: "Next.js", icon: SiNextdotjs, color: "text-gray-700" },
  { id: "typescript", name: "TypeScript", icon: SiTypescript, color: "text-blue-600" }
];

// -------------------- Component --------------------
const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSkills, setActiveSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage] = useState(6);

  const toggleSkill = (skillId) => {
    setActiveSkills(prev =>
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveSkills([]);
    setSearchTerm("");
    setSortBy("featured");
    setCurrentPage(0);
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSkills = activeSkills.length === 0 || activeSkills.every(skill => project.skills.includes(skill));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSkills && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a,b) => {
    if(sortBy==="featured") return b.featured - a.featured;
    if(sortBy==="name") return a.title.localeCompare(b.title);
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = sortedProjects.slice(startIndex, startIndex + projectsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, activeSkills, searchTerm, sortBy]);

  const getSkillIcon = (skillId) => skills.find(s => s.id===skillId)?.icon || FaCode;

  return (
    <section id="projects" className="w-full bg-gradient-to-br from-slate-50 to-blue-50/30 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore my work across different technologies and categories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Search & Filters */}
        <div className="mb-12 space-y-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="relative max-w-2xl mx-auto"
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
            />
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaFilter className="text-blue-500"/> Filter by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(c => {
                const Icon = c.icon;
                return (
                  <motion.button 
                    key={c.id} 
                    onClick={() => !c.disabled && setActiveCategory(c.id)}
                    whileHover={{ scale: c.disabled ? 1 : 1.05 }} 
                    whileTap={{ scale: c.disabled ? 1 : 0.95 }} 
                    disabled={c.disabled}
                    className={`relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 min-w-[140px] ${
                      activeCategory === c.id 
                        ? `bg-gradient-to-r ${c.color} text-white shadow-lg` 
                        : c.disabled 
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                          : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
                    }`}
                  >
                    <Icon className="w-5 h-5"/>
                    <span>{c.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === c.id ? "bg-white/20" : c.disabled ? "bg-gray-200" : "bg-gray-100"
                    }`}>
                      {c.count}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaCode className="text-green-500"/> Filter by Technology
              </h3>
              <div className="flex items-center gap-4">
                <select 
                  value={sortBy} 
                  onChange={e => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white rounded-xl shadow-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Alphabetical</option>
                </select>
                {(activeCategory !== "all" || activeSkills.length > 0 || searchTerm) && (
                  <button 
                    onClick={clearFilters} 
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map(s => (
                <motion.button 
                  key={s.id} 
                  onClick={() => toggleSkill(s.id)} 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 border ${
                    activeSkills.includes(s.id) 
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg" 
                      : "bg-white text-gray-700 border-gray-200 shadow-md hover:shadow-lg"
                  }`}
                >
                  <s.icon className={`w-5 h-5 ${activeSkills.includes(s.id) ? "text-white" : s.color}`}/> 
                  {s.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeCategory}-${activeSkills.join(",")}-${searchTerm}-${sortBy}-${currentPage}`}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
          >
            {currentProjects.map((p, idx) => (
              <motion.div 
                key={p.id} 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {p.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FaStar className="w-3 h-3" /> Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.1 }} 
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5"/>
                    </motion.a>
                    <motion.a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.1 }} 
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub className="w-5 h-5"/>
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.skills.map((skillId, idx) => {
                      const SkillIcon = getSkillIcon(skillId);
                      const skill = skills.find(s => s.id === skillId);
                      return (
                        <motion.span 
                          key={idx} 
                          initial={{ scale: 0 }} 
                          whileInView={{ scale: 1 }} 
                          viewport={{ once: true }} 
                          transition={{ delay: idx * 0.1 }}
                          className={`px-3 py-1 bg-gray-100 rounded-full text-xs font-medium flex items-center gap-1 ${skill?.color || 'text-gray-600'}`}
                        >
                          <SkillIcon className="w-3 h-3"/> 
                          {skill?.name || skillId}
                        </motion.span>
                      )
                    })}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      p.category === 'frontend' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {p.category === 'frontend' ? 'Frontend' : 'Full Stack'}
                    </span>
                    <div className="flex gap-2">
                      <motion.a 
                        href={p.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.05 }} 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                      >
                        Demo <FaExternalLinkAlt className="w-3 h-3"/>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Found */}
        {sortedProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-10 h-10 text-gray-400"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
            <button 
              onClick={clearFilters} 
              className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Pagination Controls */}
        {sortedProjects.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8"
          >
            <div className="text-gray-600 text-sm">
              Showing {startIndex + 1}-{Math.min(startIndex + projectsPerPage, sortedProjects.length)} of {sortedProjects.length} projects
            </div>

            <div className="flex items-center gap-4">
              {/* Previous Button */}
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                whileHover={{ scale: currentPage === 0 ? 1 : 1.05 }}
                whileTap={{ scale: currentPage === 0 ? 1 : 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
                }`}
              >
                <FaArrowLeft className="w-4 h-4" />
                Previous
              </motion.button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goToPage(i)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === i
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.05 }}
                whileTap={{ scale: currentPage === totalPages - 1 ? 1 : 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === totalPages - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
                }`}
              >
                Next
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;