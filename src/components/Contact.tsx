import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 bg-dark-600"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out for collaboration opportunities, project inquiries, or just to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-primary-400 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:vedangrajoriya@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                    vedangrajoriya@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary-400 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+919111088134" className="text-gray-300 hover:text-primary-400 transition-colors">
                    +91 9111088134
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary-400 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">Indore, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/vedangrajoriya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-400/20 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vedang-rajoriya-27a447246/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-400/20 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;