import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Software Engineer Intern',
      company: 'BOW - Redmond, WA',
      period: 'Jun 2025 - Present',
      description: [
        'Architected and deployed a cloud-native distributed system leveraging AWS Amplify, ECS, Lambda (serverless), S3 buckets, DynamoDB, SQS, and caching strategies, ensuring 99.9% uptime and scalability for 50,000+ active users.',
        'Configured Application Load Balancer (ALB) with Lambda and API Gateway, integrated with CloudFormation (stack policies, Lambda stack deletion handling), CloudTrail, and CloudWatch for automated infrastructure provisioning, governance, monitoring, and compliance, enabling automatic horizontal scaling, low-latency performance, fault-tolerance, and reducing response times by 30% under peak traffic.',
        'Designed and deployed distributed content management workflows for admin/member portals, event scheduling, and newsletter integration, utilizing asynchronous messaging queues and in-memory caching to guarantee reliable, low-downtime delivery during high-traffic events.',
        'Developed secure RESTful APIs with Node.js Express.js in backend and led frontend architecture using React.js, Tailwind CSS, and Framer Motion, integrating Stripe payments and Google Sign-In authentication, while reducing page load times by 30% and improving mobile user satisfaction by 25% for the Beats of Washington platform.',
        'Implemented multi-layered security with Google OAuth, AWS Cognito JWT verification, and Role-Based Access Control (RBAC) for Admin/Member roles, ensuring secure authentication, authorized access, and protection against vulnerabilities.'
      ],
      technologies: ['AWS Amplify', 'ECS', 'Lambda', 'DynamoDB', 'SQS', 'CloudFormation', 'React.js', 'Node.js', 'Stripe', 'Google OAuth'],
      color: 'from-primary-500 to-blue-600'
    },
    {
      type: 'work',
      icon: FaCode,
      title: 'Full-Stack Developer',
      company: 'Elite Softwares - Pune, India',
      period: 'Nov 2022 - Feb 2024',
      description: [
        'Built and optimized responsive full-stack applications with React.js and Node.js, boosting UI performance by 25% and improving user engagement.',
        'Designed and integrated RESTful APIs with third-party services (including Stripe and Razorpay), enabling secure online transactions and reducing API failure rates by 20%.',
        'Implemented security best practices such as input validation, authentication/authorization controls, and HTTPS/TLS enforcement, strengthening application resilience against common vulnerabilities.',
        'Conducted unit testing, debugging, and peer code reviews, improving release quality and increasing team delivery velocity by 15%.'
      ],
      technologies: ['React.js', 'Node.js', 'RESTful APIs', 'Stripe', 'Razorpay', 'HTTPS/TLS', 'Unit Testing'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'MS Computer Science',
      company: 'Seattle University',
      period: '2024 - 2026',
      description: 'Pursuing Computer Science degree with focus on software engineering, algorithms, data structures, and system design.',
      technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
      color: 'from-green-500 to-teal-600'
    },
    {
      type: 'achievement',
      icon: FaTrophy,
      title: 'AWS Cloud Architecture',
      company: 'BOW Platform',
      period: '2025',
      description: 'Successfully architected and deployed distributed content management workflows with 99.9% uptime, reducing response times by 30% under peak traffic.',
      technologies: ['AWS', 'Microservices', 'Load Balancing', 'Caching', 'Monitoring'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'work': return 'border-primary-500';
      case 'education': return 'border-green-500';
      case 'achievement': return 'border-yellow-500';
      default: return 'border-gray-500';
    }
  };

  const getTypeBg = (type) => {
    switch (type) {
      case 'work': return 'bg-primary-900/20';
      case 'education': return 'bg-green-900/20';
      case 'achievement': return 'bg-yellow-900/20';
      default: return 'bg-gray-900/20';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional experience, education, and achievements
          </p>
        </motion.div>

        <div className="relative">

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center"
              >

                {/* Content card */}
                <div className="w-full max-w-4xl mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass-effect rounded-xl p-6 border-l-4 ${getTypeColor(exp.type)} ${getTypeBg(exp.type)} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-lg mr-4`}>
                        <exp.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-primary-400 font-semibold">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      {Array.isArray(exp.description) ? (
                        <ul className="space-y-2">
                          {exp.description.map((point, index) => (
                            <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                              <span className="text-primary-400 mr-2 mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
