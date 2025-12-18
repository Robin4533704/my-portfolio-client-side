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
    description: "Complete e-commerce solution with product management, cart, and payment integration.",
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
    demo: "https://warm-gumption-ab7e7e.netlify.app",
    github: "https://github.com/Robin4533704/my-portfolio-client-side.git",
    featured: false
  },
  {
    id: 3,
    title: "Parcel Delivery System",
    category: "fullstack",
    skills: ["react", "node", "mongodb", "firebase"],
    image: "/parcel delivery.png",
    description: "Logistics platform with real-time tracking and management.",
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
];

const categories = [
  { id: "all", name: "All Projects", icon: FaLaptop, color: "from-blue-500 to-cyan-500" },
  { id: "frontend", name: "Frontend", icon: FaCode, color: "from-green-500 to-emerald-500" },
  { id: "fullstack", name: "Full Stack", icon: FaDatabase, color: "from-purple-500 to-pink-500" },
  { id: "mobile", name: "Mobile Apps", icon: FaMobile, color: "from-orange-500 to-red-500", disabled: true },
  { id: "design", name: "UI/UX Design", icon: FaPalette, color: "from-yellow-500 to-amber-500", disabled: true },
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
  const projectsPerPage = 6;

  const toggleSkill = (id) => setActiveSkills(prev =>
    prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
  );

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveSkills([]);
    setSearchTerm("");
    setSortBy("featured");
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSkills = activeSkills.every(skill => project.skills.includes(skill)) || activeSkills.length === 0;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSkills && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a,b) => 
    sortBy === "featured" ? b.featured - a.featured : a.title.localeCompare(b.title)
  );

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = sortedProjects.slice(startIndex, startIndex + projectsPerPage);

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 0));

  useEffect(() => setCurrentPage(0), [activeCategory, activeSkills, searchTerm, sortBy]);

  const getSkillIcon = (id) => skills.find(s => s.id === id)?.icon || FaCode;

  return (
    <section id="projects" className="w-full py-12 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Creative Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects featuring Full Stack and Frontend excellence.
          </p>
        </motion.div>

        {/* Filters Panel */}
        <div className="mb-12 space-y-8 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by title or tech..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl border-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-200"
              />
            </div>

            {/* Sort & Clear */}
            <div className="flex flex-wrap items-center gap-4 justify-end">
              <select 
                value={sortBy} 
                onChange={e => setSortBy(e.target.value)} 
                className="px-4 py-2.5 bg-gray-50 dark:bg-gray-900 rounded-xl border-none text-sm font-medium"
              >
                <option value="featured">Most Popular</option>
                <option value="name">A-Z Name</option>
              </select>
              <button onClick={clearFilters} className="text-sm text-blue-600 font-semibold hover:underline">Clear Filters</button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <button
                key={c.id}
                disabled={c.disabled}
                onClick={() => setActiveCategory(c.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === c.id 
                  ? `bg-gradient-to-r ${c.color} text-white shadow-lg` 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
                } ${c.disabled ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <c.icon className="w-4 h-4" /> {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                {/* Responsive Image Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={p.demo} target="_blank" rel="noreferrer" className="p-4 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform"><FaExternalLinkAlt /></a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="p-4 bg-gray-900 text-white rounded-full hover:scale-110 transition-transform"><FaGithub /></a>
                  </div>
                  {p.featured && (
                    <div className="absolute top-4 right-4 bg-amber-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <FaStar /> Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md ${p.category === 'fullstack' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'}`}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    {p.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((skillId) => {
                      const skill = skills.find(s => s.id === skillId);
                      const Icon = skill?.icon || FaCode;
                      return (
                        <div key={skillId} className={`flex items-center gap-1.5 text-[11px] font-bold ${skill?.color} bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700`}>
                          <Icon /> {skill?.name}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold dark:text-white">No matches found</h3>
            <p className="text-gray-500">Try changing your search keywords or filters.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button onClick={prevPage} disabled={currentPage === 0} className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md disabled:opacity-30">
              <FaArrowLeft />
            </button>
            <span className="font-bold text-gray-700 dark:text-gray-300">Page {currentPage + 1} of {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md disabled:opacity-30">
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;