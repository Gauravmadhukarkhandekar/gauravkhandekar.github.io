import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaCloud, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: FaCode, name: 'Software Engineering', description: 'Full-stack development, Clean code, Design patterns' },
    { icon: FaDatabase, name: 'Data Structures & Algorithms', description: 'Problem solving, Algorithm optimization, System design' },
    { icon: FaMobile, name: 'Artificial Intelligence', description: 'Machine Learning, AI systems, Data analysis' },
    { icon: FaCloud, name: 'System Architecture', description: 'Scalable systems, Microservices, Cloud solutions' },
    { icon: FaRocket, name: 'Problem Solving', description: 'Analytical thinking, Creative solutions, Debugging' },
    { icon: FaUsers, name: 'Leadership', description: 'Team collaboration, Project management, Mentoring' }
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
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative solutions 
            and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi Everyone! I'm <span className="text-primary-400 font-semibold">Gaurav Khandekar</span> 👋, a <span className="text-purple-400 font-semibold">Software Engineer</span> based in <span className="text-green-400 font-semibold">Seattle, Washington</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a highly productive and efficient individual seeking a secure and professional 
              career in the <span className="text-blue-400 font-semibold">IT industry</span>. My preferred focus is on <span className="text-primary-400 font-semibold">software engineering</span>, <span className="text-yellow-400 font-semibold">DSA</span>, 
              <span className="text-pink-400 font-semibold">Artificial Intelligence</span>, <span className="text-orange-400 font-semibold">System Design</span>, <span className="text-cyan-400 font-semibold">System Architecture</span>, and <span className="text-red-400 font-semibold">problem solving</span>, 
              leveraging my skills and abilities in the field of software and technology to 
              provide the best managerial decisions that will enhance <span className="text-green-400 font-semibold">company productivity</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I work across the stack with tools and technologies like <span className="text-blue-400 font-semibold">React.js</span>, <span className="text-green-400 font-semibold">Next.js</span>, 
              <span className="text-green-500 font-semibold">Node.js</span>, <span className="text-purple-400 font-semibold">ASP.NET Core</span>, <span className="text-green-600 font-semibold">MongoDB</span>, <span className="text-yellow-400 font-semibold">DynamoDB</span>, 
              <span className="text-orange-400 font-semibold">AWS S3</span>, <span className="text-cyan-400 font-semibold">CloudFormation</span>, 
              <span className="text-blue-500 font-semibold">CloudFront</span>, <span className="text-red-400 font-semibold">SQS</span>, and <span className="text-pink-400 font-semibold">Concurrency</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-900/30 text-primary-400 rounded-full text-sm font-medium">
                Software Engineer
              </span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 bg-pink-900/30 text-pink-400 rounded-full text-sm font-medium">
                System Architect
              </span>
            </div>
          </motion.div>

          {/* Right side - Skills grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg mr-4">
                    <skill.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
