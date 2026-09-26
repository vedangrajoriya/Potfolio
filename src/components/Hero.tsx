import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink, Sparkles, Bot, Shield, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="min-h-screen relative bg-dark-700 flex items-center pt-24 pb-16 lg:py-0 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 opacity-90"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left lg:col-span-7"
          >
            {/* Status Pill */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-600/80 border border-primary-400/30 text-xs sm:text-sm text-gray-200 mb-6 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-gray-300">AI Engineer at</span>
              <span className="font-semibold text-primary-300">ITGeeks</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 via-purple-300 to-secondary-400 bg-clip-text text-transparent">
                Vedang Rajoriya
              </span>
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold mb-6">
              AI Engineer & Machine Learning Specialist
            </motion.h2>

            {/* Bio summary */}
            <motion.p variants={item} className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Results-driven AI Engineer specializing in <strong>Agentic AI</strong>, <strong>Generative AI</strong>, 
              <strong> RAG & Graph RAG</strong>, and scalable production backends. Experienced in building intelligent 
              multi-agent automation workflows, fine-tuning retrieval systems, and deploying enterprise-ready AI applications.
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 mb-8">
              <div className="bg-dark-600/60 backdrop-blur-sm p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5">Production AI Agents</div>
              </div>
              <div className="bg-dark-600/60 backdrop-blur-sm p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5">Industry Certs</div>
              </div>
              <div className="bg-dark-600/60 backdrop-blur-sm p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  94%
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5">ML Detection Acc.</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3.5 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-2.5 px-6 rounded-full shadow-lg shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="bg-dark-600/80 hover:bg-dark-600 text-white font-medium py-2.5 px-6 rounded-full border border-white/10 hover:border-primary-400/40 transition-all duration-300"
              >
                Experience
              </button>

              <a
                href="/Vedang_Rajoriya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Vedang_Rajoriya_Resume.pdf"
                className="inline-flex items-center gap-2 bg-primary-400/20 hover:bg-primary-400/30 text-primary-300 font-medium py-2.5 px-6 rounded-full border border-primary-400/40 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

              <a
                href="mailto:vedangrajoriya@gmail.com"
                className="inline-flex items-center gap-2 border border-gray-500/50 text-gray-300 hover:text-white font-medium py-2.5 px-5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Mail size={17} />
                <span>Contact</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Profile Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end lg:col-span-5 relative"
          >
            {/* Glowing ring frame */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-400/40 shadow-2xl bg-dark-800">
                <img
                  src="/vedang.png"
                  alt="Vedang Rajoriya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating badges around photo */}
              <div className="absolute -bottom-2 -left-4 bg-dark-700/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-xl flex items-center gap-2">
                <Bot className="text-primary-400" size={18} />
                <div>
                  <div className="text-xs font-bold text-white">Agentic AI</div>
                  <div className="text-[10px] text-gray-400">Multi-Agent Systems</div>
                </div>
              </div>

              <div className="absolute top-4 -right-4 bg-dark-700/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-xl flex items-center gap-2">
                <Shield className="text-secondary-400" size={18} />
                <div>
                  <div className="text-xs font-bold text-white">Cybersecurity & CCNA</div>
                  <div className="text-[10px] text-gray-400">Network Defense</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16 hidden md:block"
        >
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-400 hover:text-white transition-colors animate-bounce inline-flex flex-col items-center gap-1"
            aria-label="Scroll down to Experience"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;