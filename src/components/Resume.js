import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // Download the actual PDF file from public folder
    const link = document.createElement('a');
    link.href = '/Gaurav_Khandekar_Resume (2).pdf';
    link.download = 'Gaurav_Khandekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resume & <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
            className="glass-effect rounded-2xl p-8 text-center"
          >
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFilePdf className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Download Resume</h3>
              <p className="text-gray-400 mb-8">
                Get a copy of my detailed resume with all my experience, skills, and achievements.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 mb-6"
            >
              <FaDownload className="mr-3" />
              Download PDF
            </motion.button>

            <div className="text-sm text-gray-400">
              <p>Last updated: December 2024</p>
              <p>File size: ~2.5 MB</p>
            </div>
          </motion.div>

        </div>

        {/* Let's Connect section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm always open to tech chats, collaborations, or just geeking out over code. Feel free to reach out!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
