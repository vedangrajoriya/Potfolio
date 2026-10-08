import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, Phone, Check, Copy, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vedangrajoriya@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
    <section id="contact" ref={ref} className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-400/10 text-primary-300 border border-primary-400/20 mb-3">
              <Sparkles size={14} className="text-primary-400" />
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
              Open to discussions regarding cutting-edge Agentic AI engineering, machine learning pipelines, research, and technical leadership.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Details Card */}
            <motion.div
              variants={itemVariants}
              className="bg-dark-700/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/5 shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center sm:text-left">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 text-center sm:text-left">
                Feel free to reach out directly via email, phone, or LinkedIn. I will respond as soon as possible.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between gap-3.5 p-4 rounded-xl bg-dark-600/50 border border-white/5">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <Mail className="text-primary-400 shrink-0" size={22} />
                    <div className="overflow-hidden">
                      <div className="text-xs text-gray-400 font-medium">Email</div>
                      <a
                        href="mailto:vedangrajoriya@gmail.com"
                        className="text-white hover:text-primary-300 text-sm sm:text-base font-semibold truncate block transition-colors"
                      >
                        vedangrajoriya@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-700 hover:bg-dark-500 text-gray-400 hover:text-white transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-dark-600/50 border border-white/5">
                  <Phone className="text-primary-400 shrink-0" size={22} />
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Phone</div>
                    <a
                      href="tel:+919111088134"
                      className="text-white hover:text-primary-300 text-sm sm:text-base font-semibold transition-colors"
                    >
                      +91 9111088134
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-dark-600/50 border border-white/5">
                  <MapPin className="text-primary-400 shrink-0" size={22} />
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Location</div>
                    <p className="text-white text-sm sm:text-base font-semibold">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-dark-600/60">
                <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4 text-center sm:text-left">
                  Connect on Socials
                </div>
                <div className="flex gap-4 justify-center sm:justify-start">
                  <a
                    href="https://github.com/vedangrajoriya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-600 hover:bg-primary-500 text-gray-300 hover:text-white text-sm font-semibold transition-all duration-200 border border-white/5 shadow-sm"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vedang-rajoriya-27a447246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-600 hover:bg-secondary-500 text-gray-300 hover:text-white text-sm font-semibold transition-all duration-200 border border-white/5 shadow-sm"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;