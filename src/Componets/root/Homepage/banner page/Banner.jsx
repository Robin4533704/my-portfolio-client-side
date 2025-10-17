import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles"; // ✅ correct import for Vite + React
import BannerImage from "../../../../assets/image/imagerobin-removebg-preview.png";

const Banner = () => {
  // particles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-indigo-100 to-blue-900 overflow-hidden flex items-center">
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-0 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-6">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary"
          >
            Robin Hossen
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-black sm:text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-loose max-w-xl"
          >
            I'm a <span className="font-semibold text-primary">Full Stack Web Developer</span> 
            specializing in <span className="text-primary font-medium">React, Node.js, Express.js, MongoDB</span>, 
            and modern web technologies including <span className="text-primary font-medium">HTML, CSS, JavaScript (ES6+), Tailwind CSS</span>. 
            I deploy scalable and responsive applications using <span className="text-primary font-medium">Netlify</span> and <span className="text-primary font-medium">Vercel</span>.
          </motion.p>

          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="btn btn-primary px-6 py-3 text-white font-semibold rounded-full shadow-md hover:shadow-lg"
          >
            Hire Me 🚀
          </motion.a>
        </div>

        {/* Right: Floating Hero Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.img
            src={BannerImage}
            alt="Robin Hossen"
            className="w-3/4 sm:w-2/3 lg:w-full rounded-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
       
      </motion.div>
    </section>
  );
};

export default Banner;
