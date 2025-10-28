import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navber from '../Homepage/navber/Navber';
import Footer from '../Homepage/navber/Footer';
import LoadingSpinner from './LoadingSpinner';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const location = useLocation();

  // Update window height on resize
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => window.scrollTo(0, 0), [location]);

  // Generate snowflakes
  const snowflakes = [...Array(60)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 8,
    size: Math.random() * 4 + 2,
    xDrift: Math.random() * 80 - 40,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-900">
      {/* Loading Spinner */}
      {isLoading && <LoadingSpinner />}

      {/* Snowfall Effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {snowflakes.map(flake => (
          <motion.div
            key={flake.id}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: flake.size,
              height: flake.size,
              left: `${flake.x}%`,
              top: -30,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, windowHeight + 50],
              x: [0, flake.xDrift],
              rotate: [0, flake.rotate],
              opacity: [0, 0.8, 0.2, 0],
            }}
            transition={{
              duration: flake.duration,
              repeat: Infinity,
              delay: flake.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50">
        <Navber />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>

      {/* Utility Components */}
      <ScrollToTop />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
