// IndustryServed.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaBook, FaHeartbeat, FaPlane } from "react-icons/fa";

const industries = [
  { name: "E-commerce", icon: <FaShoppingCart className="text-white text-4xl" /> },
  { name: "Education", icon: <FaBook className="text-white text-4xl" /> },
  { name: "Healthcare", icon: <FaHeartbeat className="text-white text-4xl" /> },
  { name: "Travel & Tourism", icon: <FaPlane className="text-white text-4xl" /> },
];

const colors = [
  "bg-gradient-to-tr from-blue-400 to-blue-600",
  "bg-gradient-to-tr from-green-400 to-green-600",
  "bg-gradient-to-tr from-red-400 to-red-600",
  "bg-gradient-to-tr from-yellow-400 to-yellow-600"
];

const IndustryServed = () => {
  return (
    <section id="industries" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          Industries Served
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 120 }}
              className={`flex flex-col items-center justify-center rounded-2xl p-8 ${colors[index]} shadow-2xl text-center cursor-pointer`}
            >
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-white font-bold text-xl sm:text-2xl">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;
