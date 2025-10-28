import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptop, 
  FaPalette, 
  FaMobile, 
  FaCode, 
  FaDatabase, 
  FaSearch,
  FaExternalLinkAlt,
  FaGithub,
  FaFilter
} from "react-icons/fa";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";

// Project data with categories and skills
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "express"],
    image: "/e-commerc.png",
    description: "A complete e-commerce solution with product management, cart, and payment integration.",
    demo: "https://superb-bublanina-e76917.netlify.app",
    github: "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-Robin4533704",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "frontend",
    skills: ["react", "javascript", "tailwind"],
    image: "/Screenshot 2025-10-17 125859.png",
    description: "Modern portfolio with smooth animations and responsive design.",
    demo: "https://stupendous-sable-470425.netlify.app",
    github: "https://github.com/Robin4533704/my-portfolio-client-side.git",
    featured: false
  },
  {
    id: 3,
    title: "Parcel Delivery System",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "firebase"],
    image: "/e-commerc.png",
    description: "Logistics platform with real-time tracking and management system.",
    demo: "https://superb-bublanina-e76917.netlify.app",
    github: "https://github.com/Robin4533704/local-market-clientside",
    featured: true
  },
  {
    id: 4,
    title: "Virtual Book Store",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "express"],
    image: "/book shop.png",
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
    image: "/hobbyhobe.png",
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
    image: "/blogs.png",
    description: "Responsive blog with CRUD operations and user authentication.",
    demo: "https://vermillion-fudge-7cfb72.netlify.app",
    github: "https://github.com/Robin4533704/WebBLog-clientsite.git",
    featured: false
  },
  {
    id: 7,
    title: "Task Management App",
    category: "frontend",
    skills: ["react", "javascript", "tailwind"],
    image: "/Screenshot 2025-10-17 125859.png",
    description: "Productive task management application with drag & drop.",
    demo: "#",
    github: "#",
    featured: false
  },
  {
    id: 8,
    title: "Weather Dashboard",
    category: "frontend",
    skills: ["react", "javascript"],
    image: "/book shop.png",
    description: "Real-time weather information with beautiful UI.",
    demo: "#",
    github: "#",
    featured: false
  }
];

// Categories data
const categories = [
  {
    id: "all",
    name: "All Projects",
    icon: FaLaptop,
    count: projects.length,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: FaCode,
    count: projects.filter(p => p.category === "frontend").length,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "fullstack",
    name: "Full Stack",
    icon: FaDatabase,
    count: projects.filter(p => p.category === "fullstack").length,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    icon: FaMobile,
    count: 0,
    color: "from-orange-500 to-red-500",
    disabled: true
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: FaPalette,
    count: 0,
    color: "from-yellow-500 to-amber-500",
    disabled: true
  }
];

// Skills data
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

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSkills, setActiveSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Filter projects based on category, skills, and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSkills = activeSkills.length === 0 || 
      activeSkills.every(skill => project.skills.includes(skill));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSkills && matchesSearch;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "featured") {
      return b.featured - a.featured;
    }
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Toggle skill filter
  const toggleSkill = (skillId) => {
    setActiveSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory("all");
    setActiveSkills([]);
    setSearchTerm("");
    setSortBy("featured");
  };

  // Get skill icon by id
  const getSkillIcon = (skillId) => {
    return skills.find(skill => skill.id === skillId)?.icon || FaCode;
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50/30 py-20 lg:py-28">
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
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore my work across different technologies and categories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters Section */}
        <div className="mb-12 space-y-8">
          
          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto"
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaFilter className="text-blue-500" />
              Filter by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => !category.disabled && setActiveCategory(category.id)}
                    whileHover={{ scale: category.disabled ? 1 : 1.05 }}
                    whileTap={{ scale: category.disabled ? 1 : 0.95 }}
                    disabled={category.disabled}
                    className={`relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 min-w-[140px] ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : category.disabled
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id 
                        ? "bg-white/20" 
                        : category.disabled
                        ? "bg-gray-200"
                        : "bg-gray-100"
                    }`}>
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Filter */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaCode className="text-green-500" />
                Filter by Technology
              </h3>
              
              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
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
              {skills.map((skill) => (
                <motion.button
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 border ${
                    activeSkills.includes(skill.id)
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                      : "bg-white text-gray-700 border-gray-200 shadow-md hover:shadow-lg"
                  }`}
                >
                  <skill.icon className={`w-5 h-5 ${activeSkills.includes(skill.id) ? "text-white" : skill.color}`} />
                  {skill.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Filters Display */}
          {(activeCategory !== "all" || activeSkills.length > 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap items-center gap-2 text-sm"
            >
              <span className="text-gray-600">Active filters:</span>
              {activeCategory !== "all" && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
                  {categories.find(c => c.id === activeCategory)?.name}
                  <button onClick={() => setActiveCategory("all")}>×</button>
                </span>
              )}
              {activeSkills.map(skillId => {
                const skill = skills.find(s => s.id === skillId);
                return (
                  <span key={skillId} className="px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                    <skill.icon className="w-3 h-3" />
                    {skill.name}
                    <button onClick={() => toggleSkill(skillId)}>×</button>
                  </span>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeSkills.join(",")}-${searchTerm}-${sortBy}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skillId, skillIndex) => {
                      const skill = skills.find(s => s.id === skillId);
                      const SkillIcon = getSkillIcon(skillId);
                      return (
                        <motion.span
                          key={skillIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className={`px-3 py-1 bg-gray-100 rounded-full text-xs font-medium flex items-center gap-1 ${skill?.color || 'text-gray-600'}`}
                        >
                          <SkillIcon className="w-3 h-3" />
                          {skill?.name || skillId}
                        </motion.span>
                      );
                    })}
                  </div>

                  {/* Category Badge */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'frontend' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {project.category === 'frontend' ? 'Frontend' : 'Full Stack'}
                    </span>
                    
                    <div className="flex gap-2">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                      >
                        Demo
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-10 h-10 text-gray-400" />
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

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500"
        >
          Showing {sortedProjects.length} of {projects.length} projects
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;