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
      icon: FaBriefcase,
      title: 'Software Developer',
      company: "Sam's Tavern - Seattle, Washington, United States · Remote",
      period: 'Dec 2025 - Jan 2026 · 2 mos',
      description: [
        'Designed and developed a secure, staff-only inventory management system for a restaurant bar to track liquor bottle movement from storage to bar, replacing daily inventory counts with movement-based tracking and shift-level accountability.',
        'Built a full-stack system using React, Node.js, and AWS with AWS Cognito authentication implementing role-based access control for bartender, manager, and admin roles.',
        'Designed complete bottle lifecycle tracking and shift-based checkout/return workflows using Amazon DynamoDB for scalable, low-latency storage of inventory and movement data.',
        'Implemented server-side pagination for large datasets including bottle movements, audit logs, and reports, enabling efficient data retrieval and management.',
        'Added QR code–based bottle identification and scan-ready workflows to streamline inventory tracking operations.',
        'Developed movement-based consumption prediction logic to identify most-used and least-used bottles, forecast depletion timelines, and suggest which bottles to restock and in what quantities.',
        'Built reporting and analytics foundations to support restocking decisions and reduce inventory loss through data-driven insights.',
        'Deployed backend services on AWS Lambda for serverless, auto-scaling execution and delivered the frontend globally using Amazon CloudFront for low-latency and highly available content delivery.',
        'Achieved significant impact: reduced overstocking and stockouts, improved purchasing decisions, and increased operational visibility and accountability.'
      ],
      technologies: ['AWS Lambda', 'Algorithms', 'React', 'Node.js', 'AWS Cognito', 'Amazon DynamoDB', 'CloudFront', 'QR Codes', 'Serverless', 'Pagination', 'Analytics', 'Role-Based Access Control', 'Inventory Management'],
      color: 'from-cyan-500 to-blue-600'
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
      title: 'Project Lead – Visual Path Navigation',
      company: 'International Journal of Scientific & Engineering Research (IJSER)',
      period: 'Jan 2022 - May 2022',
      description: [
        'Led the development of a visual path navigation platform that guides users through unfamiliar environments using videographic directions.',
        'Applied machine perception and multimodal data integration techniques to enhance human-environment interaction, aligning with HLS research priorities.',
        'Integrated video-based navigation workflows that improved wayfinding efficiency and reduced confusion for first-time visitors in new locations.'
      ],
      technologies: ['Computer Vision', 'Machine Perception', 'Multimodal Data', 'React', 'Video Processing'],
      color: 'from-amber-500 to-pink-500'
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
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A timeline of my professional experience, education, and achievements
          </p>
        </motion.div>

        <div className="relative">

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
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
                    className={`glass-effect rounded-xl p-4 sm:p-6 border-l-4 ${getTypeColor(exp.type)} ${getTypeBg(exp.type)} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-lg mr-4`}>
                        <exp.icon className="text-white text-xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white break-words">{exp.title}</h3>
                        <p className="text-primary-400 font-semibold text-sm sm:text-base break-words">{exp.company}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{exp.period}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      {Array.isArray(exp.description) ? (
                        <ul className="space-y-2">
                          {exp.description.map((point, index) => (
                            <li key={index} className="text-sm sm:text-base text-gray-300 leading-relaxed flex items-start">
                              <span className="text-primary-400 mr-2 mt-1 flex-shrink-0">•</span>
                              <span className="break-words">{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-white/10 text-white text-xs sm:text-sm rounded-full break-words"
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

      </div>
    </section>
  );
};

export default Experience;
