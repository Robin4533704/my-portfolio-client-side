import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import BannerImage from "../../../../assets/image/imagerobin-removebg-preview.png";
import BackgroundImage from "../../../../assets/image/v915-red-blue.png"; // তোমার background image

const Banner = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
   <section
  className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex items-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(173, 216, 230, 0.7), rgba(135, 206, 250, 0.7), rgba(70, 130, 180, 0.7)), url(${BackgroundImage})`,
  }}
>
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
  <div className="relative z-10 mx-auto px-4 lg:px-0 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen max-w-7xl w-full">
    {/* Left: Text */}
    <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-4 sm:space-y-6 text-white px-4 sm:px-6 lg:px-0">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
      >
        Robin Hossen
      </motion.h1>

        <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-sky-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose max-w-full sm:max-w-xl"
      >
        <span className="text-4xl text-white font-bold">I'm</span> <span className="font-semibold text-primary">A Full Stack Web Developer </span> 
         specializing in <span className="text-primary font-medium">React, Node.js, Express.js, MongoDB</span>, 
        and modern web technologies including <span className="text-primary font-medium">HTML, CSS, JavaScript (ES6+), Tailwind CSS</span>. 
        I deploy scalable and responsive applications using <span className="text-primary font-medium">Netlify</span> and <span className="text-primary font-medium">Vercel</span>.
      </motion.p>

      <motion.a
        href="/#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="btn btn-primary px-6 py-3 text-white font-semibold rounded-full shadow-md hover:shadow-lg mt-4"
      >
        Hire Me 🚀
      </motion.a>
    </div>

    {/* Right: Floating Hero Image */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="w-full lg:w-1/2 flex justify-center px-4"
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
</section>
  );
};

export default Banner;
