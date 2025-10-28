import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogArticles = [
  {
    id: 1,
    title: "How I Built My Portfolio with React and Tailwind CSS",
    date: "October 15, 2025",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
    excerpt:
      "In this article, I’ll share my journey building a personal portfolio using React and Tailwind, with tips to make your design stand out.",
    author: "Robin Hossen",
  },
  {
    id: 2,
    title: "Mastering Component Reusability in React",
    date: "October 20, 2025",
    category: "Frontend Tips",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    excerpt:
      "Learn how to design reusable React components that reduce code duplication and improve scalability.",
    author: "Robin Hossen",
  },
  {
    id: 3,
    title: "The Importance of Clean Code and Best Practices",
    date: "October 25, 2025",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    excerpt:
      "Writing clean code isn’t just about style—it’s about maintainability, performance, and professionalism. Here’s how to start.",
    author: "Robin Hossen",
  },
];

const BlogArticles = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📝 My Blog Articles
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-500">{article.category}</span>
                <Link
                  to={`/blog/${article.id}`}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticles;
