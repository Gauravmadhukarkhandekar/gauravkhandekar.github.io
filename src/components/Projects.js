import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HomeSpace - Property Rental Platform',
      description: 'Created a Django-based web platform with advanced property search, roommate finder, and interactive maps, supporting 500+ property listings. Implemented property posting, filtered search, and user engagement features.',
      image: `${process.env.PUBLIC_URL}/homespace.jpg.webp`,
      technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'Maps API'],
      live: null,
      category: 'web',
      featured: true,
    },
    {
      id: 2,
      title: 'The Navigator - Video Directions App',
      description: 'Developed a React + Java application providing videographic directions for unfamiliar environments, improving user wayfinding efficiency by 40%. Applied machine perception and multimodal data integration.',
      image: `${process.env.PUBLIC_URL}/Navigator.jpg.webp`,
      technologies: ['React', 'Java', 'Machine Learning', 'Computer Vision'],
      live: null,
      category: 'web',
      featured: true,
    },
    {
      id: 3,
      title: 'Detection of Offensive Text Content',
      description: 'Designed and trained 5 deep learning models for multilingual (English/Hindi) offensive content detection. Achieved 92% classification accuracy using BERT and BiLSTM for NLP.',
      image: `${process.env.PUBLIC_URL}/offencivetext.jpg.jpg`,
      technologies: ['Python', 'BERT', 'BiLSTM', 'NLP', 'TensorFlow', 'Deep Learning'],
      live: null,
      category: 'ai',
      featured: true,
    },
    {
      id: 4,
      title: 'Detection of Heart Disease',
      description: 'Developed a machine learning model to predict the likelihood of heart disease using patient health data (age, cholesterol, blood pressure, etc.). Implemented algorithms such as Logistic Regression and Random Forest on the UCI Heart Disease dataset, achieving high accuracy. Visualized feature importance and evaluation metrics, and deployed a simple web app for user interaction.',
      image: `${process.env.PUBLIC_URL}/Detection of Heart Disease.jpg.jpg`,
      technologies: ['Python', 'Machine Learning', 'Logistic Regression', 'Random Forest', 'UCI Dataset', 'Web App'],
      live: null,
      category: 'ai',
      featured: false
    },
    {
      id: 5,
      title: 'Project Hub',
      description: 'A collaborative platform built with Java, AngularJS, and MongoDB to help teams discover and manage projects efficiently. Features dashboards, search filters, GitHub integration, and personalized recommendations—boosting engagement and streamlining team workflows.',
      image: `${process.env.PUBLIC_URL}/projecthub.jpg.png`,
      technologies: ['Java', 'AngularJS', 'MongoDB', 'GitHub API', 'REST APIs'],
      live: null,
      category: 'web',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations and dark mode.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A showcase of my recent work and side projects
          </p>
        </motion.div>


        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                {project.image && project.image !== '/api/placeholder/400/300' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-primary-500/80 to-purple-600/80 flex items-center justify-center ${
                    project.image && project.image !== '/api/placeholder/400/300' ? 'hidden' : 'flex'
                  }`}
                >
                  <div className="text-6xl font-bold text-white opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors break-words">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-primary-900/30 text-primary-400 text-xs rounded-full break-words"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                {project.live && (
                  <div className="flex">
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
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button removed (GitHub link) */}
      </div>
    </section>
  );
};

export default Projects;
