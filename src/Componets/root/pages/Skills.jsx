import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90 },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" />, level: 80 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 80 },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" />, level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          Key Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                  className="h-2 bg-primary rounded-full"
                />
              </div>
              <span className="text-sm text-gray-600">{skill.level}% Proficiency</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
