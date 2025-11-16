import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [particles, setParticles] = useState([]);
  const [buttonMousePos, setButtonMousePos] = useState({ x: 0, y: 0 });
  const [isButtonHovering, setIsButtonHovering] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'Backend Developer', 
    'Software Engineer',
    'CS Student'
  ];

  // Typewriter effect - separate from other effects
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  // Initialize typewriter on mount
  useEffect(() => {
    if (displayText === '') {
      setDisplayText('F');
    }
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  // Mouse tracking for 3D effect
  const handleMouseMove = (e) => {
    if (isHovering) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      setMousePosition({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Button effects functions
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const createParticleBurst = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      life: 1,
      decay: 0.02,
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
  };

  const handleButtonMouseMove = (e) => {
    if (isButtonHovering) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setButtonMousePos({
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      });
    }
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovering(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovering(false);
    setButtonMousePos({ x: 0, y: 0 });
  };

  // Update particles - optimized to reduce re-renders
  useEffect(() => {
    if (particles.length === 0) return;
    
    const updateParticles = () => {
      setParticles(prev => {
        const updated = prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - particle.decay,
        })).filter(particle => particle.life > 0);
        
        return updated.length > 0 ? updated : [];
      });
    };

    const interval = setInterval(updateParticles, 16);
    return () => clearInterval(interval);
  }, [particles.length]);

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gaurav-khandekar-943743169/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/gauravkhandekar_/?igsh=bm1zNjVpYThvOW5h&utm_source=qr#', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:gauravkhandekar007@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Gaurav
            </span>
            <motion.span
              animate={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="inline-block ml-2 text-3xl md:text-4xl lg:text-5xl"
            >
              👋🏻
            </motion.span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 min-h-[2.5rem] flex items-center"
          >
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {displayText || 'F'}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl"
          >
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about turning ideas into reality through code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            <motion.button
              onClick={(e) => {
                createRipple(e);
                createParticleBurst(e);
                scrollToExperience();
              }}
              onMouseMove={handleButtonMouseMove}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              animate={{
                x: isButtonHovering ? buttonMousePos.x * 0.1 : 0,
                y: isButtonHovering ? buttonMousePos.y * 0.1 : 0,
                scale: isButtonHovering ? 1.05 : 1,
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 overflow-hidden"
            >
              {/* Ripple effects */}
              {ripples.map(ripple => (
                <motion.span
                  key={ripple.id}
                  className="absolute bg-white/30 rounded-full pointer-events-none"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size,
                  }}
                />
              ))}
              View My Work
            </motion.button>
            
            <motion.button
              onClick={(e) => {
                createRipple(e);
                createParticleBurst(e);
                scrollToContact();
              }}
              onMouseMove={handleButtonMouseMove}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              animate={{
                x: isButtonHovering ? buttonMousePos.x * 0.1 : 0,
                y: isButtonHovering ? buttonMousePos.y * 0.1 : 0,
                scale: isButtonHovering ? 1.05 : 1,
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative px-8 py-3 border-2 border-primary-400 text-primary-400 rounded-full font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300 overflow-hidden"
            >
              {/* Ripple effects */}
              {ripples.map(ripple => (
                <motion.span
                  key={ripple.id}
                  className="absolute bg-primary-400/30 rounded-full pointer-events-none"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size,
                  }}
                />
              ))}
              Get In Touch
            </motion.button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center lg:justify-start space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right side - Profile image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div 
            className="relative group"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* Scanning line effect */}
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-xl overflow-hidden z-3"
              style={{ zIndex: 3 }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-lg shadow-cyan-400/50"></div>
          </motion.div>

            {/* Particle effects container */}
            <div className="absolute inset-0 rounded-xl overflow-hidden z-1" style={{ zIndex: 1 }}>
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  animate={{
                    x: isHovering ? mousePosition.x * (0.02 + i * 0.01) : [0, Math.random() * 320, 0],
                    y: isHovering ? mousePosition.y * (0.02 + i * 0.01) : [0, Math.random() * 380, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: isHovering ? 0.1 : Math.random() * 3 + 2,
                    repeat: isHovering ? 0 : Infinity,
                    delay: isHovering ? 0 : Math.random() * 2,
                    ease: "easeOut"
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%'
                  }}
                />
              ))}
            </div>


            {/* Main image container with 3D tilt effect */}
            <motion.div
              animate={{
                rotateY: isHovering ? mousePosition.x * 0.1 : 0,
                rotateX: isHovering ? -mousePosition.y * 0.1 : 0,
                scale: isHovering ? 1.05 : 1,
                x: isHovering ? mousePosition.x * 0.05 : 0,
                y: isHovering ? mousePosition.y * 0.05 : 0,
              }}
              transition={{ 
                duration: 0.1,
                ease: "easeOut"
              }}
              className="relative w-80 h-96 rounded-xl overflow-hidden flex items-center justify-center"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="w-80 h-96 rounded-xl overflow-hidden relative">
              <img 
                src={`${process.env.PUBLIC_URL}/gaurav-photo.jpg.jpeg`} 
                alt="Gaurav Khandekar" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-dark-800 text-center px-4" style={{display: 'none'}}>
                Gaurav Khandekar
              </div>
                
            </div>
            </motion.div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                zIndex: -1
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Particle burst effects */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed w-2 h-2 bg-primary-400 rounded-full pointer-events-none z-50"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            x: particle.x,
            y: particle.y,
            scale: particle.life,
            opacity: particle.life 
          }}
          style={{
            left: 0,
            top: 0,
          }}
        />
      ))}
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
