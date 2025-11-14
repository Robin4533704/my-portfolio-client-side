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
  FaDatabase
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiMongodb, 
  SiTailwindcss, 
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiAdobexd
} from "react-icons/si";

const skills = [
  { 
    name: "HTML5", 
    icon: <FaHtml5 className="text-orange-500" />, 
    level: 95,
    category: "frontend",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "CSS3", 
    icon: <FaCss3Alt className="text-blue-500" />, 
    level: 90,
    category: "frontend",
    color: "from-blue-500 to-blue-700"
  },
  { 
    name: "JavaScript", 
    icon: <SiJavascript className="text-yellow-400" />, 
    level: 90,
    category: "frontend",
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="text-blue-600" />, 
    level: 75,
    category: "frontend",
    color: "from-blue-600 to-blue-800"
  },
  { 
    name: "React.js", 
    icon: <FaReact className="text-cyan-400" />, 
    level: 88,
    category: "frontend",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs className="text-black" />, 
    level: 80,
    category: "frontend",
    color: "from-gray-800 to-black"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-teal-400" />, 
    level: 85,
    category: "frontend",
    color: "from-teal-400 to-cyan-500"
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="text-green-500" />, 
    level: 82,
    category: "backend",
    color: "from-green-500 to-green-700"
  },
  { 
    name: "Express.js", 
    icon: <SiExpress className="text-gray-600" />, 
    level: 80,
    category: "backend",
    color: "from-gray-600 to-gray-800"
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="text-green-600" />, 
    level: 78,
    category: "backend",
    color: "from-green-600 to-green-800"
  },
  { 
    name: "Firebase", 
    icon: <SiFirebase className="text-yellow-500" />, 
    level: 75,
    category: "backend",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    name: "Git", 
    icon: <FaGitAlt className="text-red-500" />, 
    level: 85,
    category: "tools",
    color: "from-red-500 to-red-700"
  },
  { 
    name: "Figma", 
    icon: <FaFigma className="text-purple-500" />, 
    level: 70,
    category: "tools",
    color: "from-purple-500 to-purple-700"
  },
  { 
    name: "Adobe XD", 
    icon: <SiAdobexd className="text-pink-500" />, 
    level: 65,
    category: "tools",
    color: "from-pink-500 to-purple-500"
  },
  { 
    name: "Responsive Design", 
    icon: <FaMobile className="text-blue-400" />, 
    level: 90,
    category: "frontend",
    color: "from-blue-400 to-indigo-500"
  },
  { 
    name: "RESTful APIs", 
    icon: <FaDatabase className="text-green-400" />, 
    level: 85,
    category: "backend",
    color: "from-green-400 to-green-600"
  }
];

const Skills = () => {
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & Design" }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getProficiencyText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const getProficiencyColor = (level) => {
    if (level >= 90) return "text-green-600";
    if (level >= 80) return "text-blue-600";
    if (level >= 70) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <section id="skills" className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 lg:py-28">
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 group"
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl"
                >
                  {skill.icon}
                </motion.div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getProficiencyColor(skill.level)} bg-opacity-10`}>
                  {getProficiencyText(skill.level)}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Proficiency</span>
                  <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut"
                    }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-inner`}
                  />
                </div>
              </div>

              {/* Level Indicator */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {skills.filter(skill => skill.level >= 80).length}+
            </div>
            <div className="text-blue-100">Advanced Skills</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {skills.length}
            </div>
            <div className="text-green-100">Technologies</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">1+</div>
            <div className="text-orange-100">Years Experience</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm constantly learning and expanding my skill set to deliver the best solutions for your projects.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;