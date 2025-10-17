// Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Tech Solutions Ltd.",
    period: "Jan 2024 - Jun 2024",
    description: "Worked on building web applications with React, Node.js, Express, and MongoDB. Learned team collaboration and version control using Git.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jul 2024 - Present",
    description: "Built responsive websites and portfolio projects for clients using React, Tailwind CSS, and Netlify/Vercel deployments.",
  },
  {
    role: "Client Project: E-commerce App",
    company: "Online Store Client",
    period: "Sep 2024 - Dec 2024",
    description: "Developed a full-stack e-commerce platform with Node.js, Express, MongoDB, React, and Stripe payment integration.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          Experience / Timeline
        </h2>

        <div className="relative border-l-2 border-primary ml-4 lg:ml-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6 lg:ml-8 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-5 lg:-left-6 top-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></span>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <span className="text-sm text-gray-500">{exp.company}</span>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
                <div className="text-sm text-gray-400 mt-2 lg:mt-0">{exp.period}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
