import React from "react";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
     { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
   { name: "Industries", to: "industries" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="fixed top-0 left-0 right-0 z-50 bg-base-100/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between h-16">
        
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/just_logo-removebg-preview.png"
            alt="Robin Hossen Logo"
            className="rounded-full w-8 h-8 lg:w-10 lg:h-10 shadow-sm"
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.span
            className="text-2xl lg:text-3xl font-bold text-primary tracking-wide"
            whileHover={{ scale: 1.1 }}
          >
            Robin
          </motion.span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-6 font-medium">
            {links.map((link) => (
              <motion.li key={link.to} whileHover={{ scale: 1.1 }}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust for fixed navbar height
                  className="cursor-pointer px-3 py-2 hover:text-primary transition"
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hire Me Button */}
        <div>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn btn-primary text-white font-semibold rounded-full px-5 shadow-md hover:shadow-lg hover:bg-primary-focus cursor-pointer"
          >
            Hire Me 🚀
          </ScrollLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
