import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.location.hash = '#projects';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="min-h-screen relative bg-dark-700 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.h2 variants={item} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              Vedang Rajoriya
            </motion.h2>
            <motion.h1 variants={item} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-6">
              Python Developer & Machine Learning Engineer
            </motion.h1>
            <motion.p variants={item} className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
              Experienced Python developer with a focus on machine learning, cybersecurity. Skilled in designing secure systems, building ML models, 
              and developing dynamic web applications for innovative tech projects.
              <><br /></> Career Goal: To enhance expertise in machine learning and cybersecurity, working on complex projects that contribute to innovative technological advancements.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                className="bg-gradient-to-r from-primary-400 to-secondary-400 text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg"
                onClick={scrollToNext}
              >
                View Projects
              </button>
              <a 
                href="mailto:contact@example.com" 
                className="border border-gray-400 text-white font-medium py-2 px-6 rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/1UbZ_6FWEp68nXdzxefmGFyMMg_K6_Art/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-400 text-white font-medium py-2 px-6 rounded-full hover:bg-primary-300 transition-colors shadow-lg"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-400/30 shadow-xl shadow-primary-400/20">
              <img 
                src="vedang.jpg" 
                alt="Vedang Rajoriya" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce"
        >
          <button 
            onClick={scrollToNext}
            className="text-white opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;