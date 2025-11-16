import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodePlayground from './components/CodePlayground';
import Resume from './components/Resume';
import FloatingShapes from './components/FloatingShapes';
import Starfield from './components/Starfield';
import './index.css';

function App() {
  return (
    <div className="min-h-screen dark-gradient-bg relative overflow-x-hidden">
      <Starfield />
      <FloatingShapes />
      <Navigation />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <CodePlayground />
        <Resume />
      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-black py-6 sm:py-8"
      >
        <div className="text-center px-4">
          <p className="text-gray-300 text-xs sm:text-sm mb-2">
            Designed and Developed by <span className="text-primary-400 font-semibold">Gaurav Khandekar</span>
          </p>
          <p className="text-gray-400 text-xs mb-4">
            Copyright © 2025
          </p>
          
          {/* Social Links (GitHub removed as requested) */}
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/gaurav-khandekar-943743169/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/gauravkhandekar_/?igsh=bm1zNjVpYThvOW5h&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="mailto:gauravkhandekar007@gmail.com"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
