import React from "react";
import { motion } from "framer-motion";

// Example project data
const projects = [
  {
    name: "Portfolio Website",
    image: "/e-commerc.png",
    description: "My personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
    demo: "https://your-portfolio-demo.netlify.app",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    name: "Local Market-Parcel Delivery Platform",
    image: "/e-commerc.png",
    description:
      "A modern parcel delivery and logistics web app built with React, Node.js, Express, MongoDB, and Firebase Authentication. Features include real-time parcel tracking, rider assignment, payment integration, and admin dashboard for managing deliveries.",
    demo: "https://superb-bublanina-e76917.netlify.app",
    github: "https://github.com/Robin4533704/local-market-clientside",
  },
  {
    name: "Virtual Book Shop",
    image: "/book shop.png",
    description:
      "A full-featured online book marketplace where users can browse, add, and manage books. Developed using React, Firebase Auth, Express, and MongoDB. Includes features like book categorization, wishlist, user dashboard, and responsive design.",
    demo: "https://golden-rugelach-d5b2de.netlify.app",
    github: "https://github.com/Robin4533704/virture-book-clinet",
  },
  {
    name: "HobbyHove – Hobby Sharing Platform",
    image: "/hobbyhobe.png",
    description:
      "HobbyHove is a creative social platform where users can share, explore, and connect through their hobbies and passions. Built with React, Tailwind CSS, Node.js, Express, and MongoDB. It includes user profiles, hobby categories, post sharing, and community interaction features.",
    demo: "https://subtle-entremet-54ed19.netlify.app",
    github: "https://github.com/Robin4533704/hobbyhove-clinet-side",
  },
  {
    name: "E-commerce Platform",
    image: "/e-commerc.png",
    description: "Full stack e-commerce app using React, Node.js, Express, MongoDB, and Stripe payments.",
    demo: "https://superb-bublanina-e76917.netlify.app",
    github: "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-Robin4533704",
  },
  {
    name: "Blog Website",
    image: "/projects/blog.png",
    description: "Responsive blog platform with CRUD functionality and authentication system.",
    demo: "https://blog-demo.netlify.app",
    github: "https://github.com/yourusername/blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center mt-auto gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 py-2 text-white font-medium rounded-full text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline px-4 py-2 font-medium rounded-full text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
