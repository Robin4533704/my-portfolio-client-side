import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaServer, FaTools } from "react-icons/fa";
import ProfileImage from "../../../assets/image/bg-3.png";

const AboutMe = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/3 flex justify-center"
        >
          <img
            src={ProfileImage}
            alt="Robin Hossen"
            className="rounded-2xl shadow-2xl w-3/4 lg:w-full border-4 border-primary hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full lg:w-2/3 flex flex-col space-y-8 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">About Me</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed lg:leading-loose">
            Hi! I'm <span className="font-semibold text-primary">Robin Hossen</span>, a passionate
            <span className="text-primary font-medium"> Full Stack Web Developer</span> skilled in building 
            responsive, scalable web applications using <span className="font-semibold text-primary">
            React, Node.js, Express.js, MongoDB</span> and modern tools. I love turning ideas into 
            elegant, functional products and constantly learning new technologies.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Address Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center justify-center gap-2 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-primary w-8 h-8" />
              <h3 className="font-semibold text-gray-800 text-lg">Address</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                Comilla, Chattogram, Bangladesh
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center justify-center gap-2 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <FaEnvelope className="text-primary w-8 h-8" />
              <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                robinhossen8428@gmail.com
              </p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center justify-center gap-2 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <FaPhone className="text-primary w-8 h-8" />
              <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                +880 1866-610742
              </p>
            </motion.div>
          </div>

          {/* Skills Highlights */}
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary/10 border border-primary rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-primary"
            >
              <FaCode className="w-8 h-8" />
              <h3 className="font-semibold text-lg">Frontend</h3>
              <p className="text-center text-sm sm:text-base">React, Tailwind CSS, HTML, CSS, JS</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary/10 border border-primary rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-primary"
            >
              <FaServer className="w-8 h-8" />
              <h3 className="font-semibold text-lg">Backend</h3>
              <p className="text-center text-sm sm:text-base">Node.js, Express.js, MongoDB</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary/10 border border-primary rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-primary"
            >
              <FaTools className="w-8 h-8" />
              <h3 className="font-semibold text-lg">Tools</h3>
              <p className="text-center text-sm sm:text-base">Git, VS Code, Vercel, Netlify</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
