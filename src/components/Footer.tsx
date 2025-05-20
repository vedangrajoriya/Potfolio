import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Vedang Rajoriya
              </span>
            </h2>
            <p className="text-gray-400 mt-1">Python Developer & Machine Learning Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/vedangrajoriya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vedang-rajoriya-27a447246/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-dark-600 my-6" />
        
        
      </div>
    </footer>
  );
};

export default Footer;