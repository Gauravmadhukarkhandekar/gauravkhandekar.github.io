import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // Download the actual PDF file from public folder
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Gaurav_Khandekar_Resume (2).pdf`;
    link.download = 'Gaurav_Khandekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section id="resume" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Resume & <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Download my resume or get in touch with me
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Resume Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-6 sm:p-8 text-center w-full max-w-md"
          >
            <div className="mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FaFilePdf className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Download Resume</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 px-2">
                Get a copy of my detailed resume with all my experience, skills, and achievements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewResume}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 w-full sm:w-auto"
              >
                <FaFilePdf className="mr-2 sm:mr-3" />
                View Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-400 text-primary-400 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-400 hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                <FaDownload className="mr-2 sm:mr-3" />
                Download PDF
              </motion.button>
            </div>

          </motion.div>

        </div>

        {/* Let's Connect section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Let's <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            I'm always open to tech chats, collaborations, or just geeking out over code. Feel free to reach out!
          </p>
        </motion.div>

      </div>

      {/* Resume Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gray-50 flex-shrink-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate flex-1 mr-2">Gaurav Khandekar - Resume</h3>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <motion.a
                  href={`${process.env.PUBLIC_URL}/Gaurav_Khandekar_Resume (2).pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt className="text-sm sm:text-base" />
                </motion.a>
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Close"
                >
                  <FaTimes className="text-sm sm:text-base" />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-[60vh] sm:h-[70vh] w-full flex-1 min-h-0">
              <iframe
                src={`${process.env.PUBLIC_URL}/Gaurav_Khandekar_Resume (2).pdf#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title="Gaurav Khandekar Resume"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-3 sm:p-4 border-t bg-gray-50 flex-shrink-0">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base"
              >
                <FaDownload className="mr-2 text-xs sm:text-sm" />
                Download PDF
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Resume;
