import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-600/60 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center text-white font-black text-xs shadow-md">
                VR
              </span>
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Vedang Rajoriya
              </span>
            </h2>
            <p className="text-gray-400 text-sm mt-1.5">
              AI Engineer & Machine Learning Specialist • Agentic AI • RAG Architectures
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vedangrajoriya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-400/30 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedang-rajoriya-27a447246/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary-500/20 hover:border-secondary-400/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:vedangrajoriya@gmail.com"
              className="w-10 h-10 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-400/30 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center text-primary-400 hover:text-white hover:bg-dark-600 transition-all"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <hr className="border-dark-700/60 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Vedang Rajoriya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;