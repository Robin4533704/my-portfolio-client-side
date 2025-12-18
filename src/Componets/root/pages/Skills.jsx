import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaFigma,
  FaMobile,
  FaDatabase,
  FaServer
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiMongodb, 
  SiTailwindcss, 
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiAxios
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 90, category: "frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 85, category: "frontend", color: "from-gray-700 to-black" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 88, category: "frontend", color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 80, category: "frontend", color: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 92, category: "frontend", color: "from-teal-400 to-cyan-500" },
  { name: "HTML5/CSS3", icon: <FaHtml5 className="text-orange-500" />, level: 95, category: "frontend", color: "from-orange-500 to-red-500" },
  { name: "Axios", icon: <SiAxios className="text-purple-500" />, level: 85, category: "frontend", color: "from-purple-500 to-indigo-600" },

  // Backend & DB
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 82, category: "backend", color: "from-green-500 to-green-700" },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-gray-300" />, level: 85, category: "backend", color: "from-gray-600 to-gray-800" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 80, category: "backend", color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, level: 75, category: "backend", color: "from-blue-500 to-blue-700" },
  { name: "NeonDB", icon: <FaDatabase className="text-emerald-400" />, level: 75, category: "backend", color: "from-emerald-400 to-green-600" },
  { name: "JWT Auth", icon: <FaServer className="text-red-400" />, level: 88, category: "backend", color: "from-red-400 to-red-600" },

  // Tools
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" />, level: 85, category: "tools", color: "from-orange-600 to-red-700" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 80, category: "tools", color: "from-yellow-500 to-orange-600" },
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 82, category: "tools", color: "from-orange-500 to-red-500" },
  { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: 70, category: "tools", color: "from-purple-500 to-pink-500" },
  { name: "Vercel/Netlify", icon: <SiVercel className="text-black dark:text-white" />, level: 85, category: "tools", color: "from-gray-800 to-black" }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & DevOps" }
  ];

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getProficiencyText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Learning";
  };

  return (
    <section id="skills" className="w-full bg-slate-50 dark:bg-gray-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Proficiency
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit focused on building scalable MERN stack applications and modern web solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none" 
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-500 dark:text-gray-400">
                  {getProficiencyText(skill.level)}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">{skill.name}</h3>
              
              <div className="relative h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-gray-400">Skill Level</span>
                <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Counter */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
            <h4 className="text-3xl font-bold text-blue-600">MERN</h4>
            <p className="text-sm text-gray-500">Specialization</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
            <h4 className="text-3xl font-bold text-purple-600">SQL</h4>
            <p className="text-sm text-gray-500">PostgreSQL/Neon</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
            <h4 className="text-3xl font-bold text-green-600">Next.js</h4>
            <p className="text-sm text-gray-500">Fullstack Framework</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
            <h4 className="text-3xl font-bold text-orange-600">JWT</h4>
            <p className="text-sm text-gray-500">Secure Auth</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;