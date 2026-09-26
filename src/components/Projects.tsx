import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Cpu, Server, BarChart3, Bot, Shield, BrainCircuit, Briefcase, Code2, Layers, Sparkles, Users } from 'lucide-react';

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 60,
        damping: 10,
        delay: 0.1,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "AI Hospitality Multimodal & Multi-Agent AI System",
      link: "https://github.com/vedangrajoriya/Final-Project",
      description: "Architected an autonomous hospitality and travel platform powered by 5+ specialized AI agents and Generative AI workflows to automate end-to-end trip planning, hotel recommendations, and personalized travel assistance.",
      steps: [
        {
          icon: <Bot size={20} className="text-primary-400" />,
          title: "Multi-Agent Architecture",
          description: "Engineered 5+ collaborative AI agents managing itinerary synthesis, accommodation matching, route mapping, and budget estimation."
        },
        {
          icon: <Cpu size={20} className="text-primary-400" />,
          title: "Multimodal Processing",
          description: "Processed dynamic multimodal inputs (destination, duration, budget, travel style) into instant, tailored schedules."
        },
        {
          icon: <Server size={20} className="text-primary-400" />,
          title: "Conversational Assistant",
          description: "Integrated conversational travel assistant handling live adjustments and recommendation reranking."
        }
      ]
    },
    {
      id: 2,
      title: "AI-Powered Career Advisor & Interview Prep",
      link: "https://ed-guide.netlify.app/",
      description: "Architected a comprehensive AI-driven career readiness platform built with the MERN stack providing personalized career roadmaps, skill evaluation, job matching, and realistic mock interview coaching.",
      features: [
        {
          title: "Career Guidance Chatbot",
          description: "Interactive AI chatbot giving tailored advice on industry roles, skills gap analysis, and structured milestones."
        },
        {
          title: "AI Mock Interview Simulator",
          description: "Conducts realistic technical/behavioral interviews with real-time semantic evaluation and feedback."
        },
        {
          title: "Job & Internship Listings",
          description: "Integrated skill analysis and curated internship/job opportunities based on candidate progress."
        }
      ]
    },
    {
      id: 3,
      title: "Intrusion Detection System (IDS) with Machine Learning",
      link: "https://github.com/vedangrajoriya/Intrusion-detection-system-using-machine-learning..",
      description: "Developed an intelligent network intrusion detection system analyzing real-time network traffic patterns to classify, detect, and isolate cyber threats using the CICIDS2017 benchmark dataset.",
      steps: [
        {
          icon: <Shield size={20} className="text-primary-400" />,
          title: "Data Processing & Feature Engineering",
          description: "Pre-processed and analyzed 125,000+ network traffic instances with mutual information scoring and PCA dimensionality reduction."
        },
        {
          icon: <BrainCircuit size={20} className="text-primary-400" />,
          title: "Model Training & Tuning",
          description: "Trained scikit-learn and XGBoost classifiers with extensive hyperparameter tuning achieving 94% detection accuracy."
        },
        {
          icon: <BarChart3 size={20} className="text-primary-400" />,
          title: "Result",
          description: "Achieved 94% accuracy with 35% reduction in false positives, enabling reliable real-time cyber threat detection."
        }
      ]
    },
    {
      id: 4,
      title: "Talent AI – AI-Powered HR Automation Platform",
      link: "https://github.com/vedangrajoriya/Talent-AI",
      description: "Built an innovative AI-powered application using Next.js and Firebase Studio, designed to streamline and automate key HR processes. Leverages Genkit for sophisticated AI flow management for resume screening and job description generation.",
      features: [
        {
          title: "Automate Resume Screening",
          description: "Intelligently analyze and filter candidate resumes based on predefined criteria, significantly reducing manual effort and improving hiring efficiency."
        },
        {
          title: "Generate Job Descriptions",
          description: "Create compelling and accurate job descriptions by leveraging AI to understand role requirements and industry best practices."
        },
        {
          title: "Modern, Responsive UI",
          description: "Crafted with React, styled with Tailwind CSS and Shadcn UI, ensuring a seamless and intuitive user experience."
        }
      ]
    },
    {
      id: 5,
      title: "Cryptocurrency Price Prediction Project",
      link: "https://crypto-pred.netlify.app/",
      description: "A deep learning financial forecasting application utilizing LSTM recurrent neural networks to model volatile cryptocurrency market trends with live API streaming.",
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