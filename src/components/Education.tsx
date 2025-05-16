import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const certifications = [
    {
      title: "Deep Learning Essentials – IBM",
      year: "2025",
      link: "https://www.credly.com/badges/38473296-a53f-471a-87eb-4bb3689e118c/linked_in_profile"
    },
    {
      title: "Introduction to Cybersecurity – Cisco",
      year: "2025",
      link: "https://www.credly.com/badges/8ce96705-78f6-4b62-82ad-d3d72ead1995/linked_in_profile"
    },
    {
      title: "Python Essentials 1 – Cisco",
      year: "2025",
      link: "https://www.credly.com/badges/715672e2-b3a2-44db-8c41-93364fdb14d8/linked_in_profile"
    },
    {
      title: "Python Essentials 2 – Cisco",
      year: "2025",
      link: "https://www.credly.com/badges/0446301e-b744-4034-86e5-36b3ec651266/linked_in_profile"
    },
    {
      title: "AWS Generative AI Camper – Amazon Web Services",
      year: "2024",
      link: "https://www.credly.com/badges/2248e4b3-61bd-4dca-8d34-ef3ef30860bb/linked_in_profile"
    },
    {
      title: "AWS Solutions Architecture Job Simulation – Forage",
      year: "2025",
      link: "https://drive.google.com/file/d/1Ng4eLGpenMNTMxF391ulzsBdXcgKtHwj/view?usp=drive_link"
    }
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-primary-400/10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div variants={itemVariants} className="bg-dark-600/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Medi-Caps University, Indore</h3>
            <div className="space-y-3 text-gray-300">
              <p className="text-lg">B.Tech in Computer Science</p>
              <p>Expected Graduation: May 2026</p>
              <p>Current CGPA: 7.8</p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                  Data Structures
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                  Database Systems
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                  Algorithms
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                  Cybersecurity
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-dark-600/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Professional Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-dark-700/50 rounded-lg hover:bg-dark-600/50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 hover:text-primary-400 transition-colors">{cert.title}</p>
                    <span className="text-sm text-primary-400">{cert.year}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;