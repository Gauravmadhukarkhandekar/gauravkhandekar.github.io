import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HomeSpace - Property Rental Platform',
      description: 'Created a Django-based web platform with advanced property search, roommate finder, and interactive maps, supporting 500+ property listings. Implemented property posting, filtered search, and user engagement features.',
      image: '/api/placeholder/400/300',
      technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'Maps API'],
      github: 'https://github.com/Gauravmadhukarkhandekar/homespace',
      live: null,
      category: 'web',
      featured: true,
      date: 'March 2024'
    },
    {
      id: 2,
      title: 'The Navigator - Video Directions App',
      description: 'Developed a React + Java application providing videographic directions for unfamiliar environments, improving user wayfinding efficiency by 40%. Applied machine perception and multimodal data integration.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Java', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/Gauravmadhukarkhandekar/navigator',
      live: null,
      category: 'web',
      featured: true,
      date: 'May 2022'
    },
    {
      id: 3,
      title: 'Detection of Offensive Text Content',
      description: 'Designed and trained 5 deep learning models for multilingual (English/Hindi) offensive content detection. Achieved 92% classification accuracy using BERT and BiLSTM for NLP.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'BERT', 'BiLSTM', 'NLP', 'TensorFlow', 'Deep Learning'],
      github: 'https://github.com/Gauravmadhukarkhandekar/offensive-text-detection',
      live: null,
      category: 'ai',
      featured: true,
      date: 'March 2022'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/Gauravmadhukarkhandekar/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'web',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Gauravmadhukarkhandekar/taskmanager',
      live: 'https://taskmanager-demo.com',
      category: 'web',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations and dark mode.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/Gauravmadhukarkhandekar/portfolio',
      live: 'https://gauravkhandekar.github.io',
      category: 'web',
      featured: false
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>


        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-purple-600/80 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                {project.date && (
                  <p className="text-primary-400 text-sm mb-2 font-medium">
                    {project.date}
                  </p>
                )}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-900/30 text-primary-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Gauravmadhukarkhandekar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 border-2 border-primary-400 text-primary-400 rounded-full font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300"
          >
            <FaGithub className="mr-2" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
