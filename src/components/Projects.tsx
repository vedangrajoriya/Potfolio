import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Cpu, Server, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the children's animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Start a bit faded, lower, and smaller
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 60, // Adjust stiffness for a bouncier effect
        damping: 10,   // Control the spring's oscillation
        delay: 0.1,    // Add a small delay for each item
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Cryptocurrency Price Prediction Project",
      link: "https://crypto-pred.netlify.app/",
      description: "A machine learning project that utilizes LSTM models to predict cryptocurrency prices with high accuracy.",
      steps: [
        {
          icon: <Cpu size={20} className="text-primary-400" />,
          title: "Data Preprocessing & Model Tuning",
          description: "Handled volatile cryptocurrency data and fine-tuned LSTM models to improve prediction accuracy."
        },
        {
          icon: <Server size={20} className="text-primary-400" />,
          title: "API Integration & Deployment",
          description: "Integrated backend APIs with frontend React app – deployed on scalable cloud infrastructure."
        },
        {
          icon: <BarChart3 size={20} className="text-primary-400" />,
          title: "Result",
          description: "Delivered real-time predictions addressing data inconsistencies and overfitting challenges."
        }
      ]
    },
    {
      id: 2,
      title: "Modern Voice Recorder Web Application",
      link: "https://audio-processor.netlify.app/",
      description: "A feature-rich voice recording web application with real-time visualization and cloud storage.",
      features: [
        {
          title: "Features",
          description: "Real-time waveform visualization, high-quality recording, playback, and cloud-based storage with synchronization."
        },
        {
          title: "Security",
          description: "Enterprise-grade security using Supabase Auth and database Row Level Security for safe data transmission."
        },
        {
          title: "Users",
          description: "Designed for professionals, students, and content creators needing reliable and easy voice recording solutions."
        }
      ]
    },
    {
      id: 3,
      title: "Educational Website with Skill Analysis & Career Roadmaps",
      link: "https://github.com/vedangrajoriya/Educational-Website",
      description: "A comprehensive educational platform that provides personalized learning paths and job opportunities.",
      features: [
        {
          title: "Interactive Learning",
          description: "AI-powered skill analysis and personalized career roadmaps for skill development."
        },
        {
          title: "Job & Internship Listings",
          description: "Connecting users with real-world opportunities to accelerate professional growth."
        },
        {
          title: "Scalability & UX Optimization",
          description: "Focused on seamless user experiences with scalable platform architecture."
        }
      ],
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Talent AI – AI-Powered HR Automation Platform",
      link: "https://github.com/vedangrajoriya/Talent-AI",
      description: "This project introduces an innovative, AI-powered application developed using Next.js and Firebase Studio, designed to streamline and automate key HR processes. Leveraging the advanced capabilities of Genkit for sophisticated AI flow management, this platform offers intelligent solutions for resume screening and job description generation.",
      features: [
        {
          title: "Automate Resume Screening",
          description: "Intelligently analyze and filter candidate resumes based on predefined criteria, significantly reducing manual effort and improving the efficiency of the initial hiring stages."
        },
        {
          title: "Generate Job Descriptions",
          description: "Create compelling and accurate job descriptions by leveraging AI to understand role requirements and industry best practices, aiding in attracting suitable talent."
        },
        {
          title: "Modern, Responsive UI",
          description: "Crafted with React, styled with Tailwind CSS and Shadcn UI, ensuring a seamless and intuitive user experience."
        }
      ]
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-dark-700"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Projects & Work
          </span>
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-dark-600/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-8">{project.description}</p>

                {project.steps && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.steps.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        className="bg-dark-700/50 rounded-lg p-5 hover:bg-dark-600/50 transition-colors"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center mb-3">
                          {step.icon}
                          <h4 className="text-white font-medium ml-2">{step.title}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {project.features && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="bg-dark-700/50 rounded-lg p-5 hover:bg-dark-600/50 transition-colors"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <span className="mr-1">View Project</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;