import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, Phone, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vedangrajoriya@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's default email client pre-filled
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:vedangrajoriya@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Contact Details Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 bg-dark-700/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Contact Information
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Feel free to reach out directly via email, phone, or LinkedIn. I will respond as soon as possible.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-dark-600/50 border border-white/5">
                    <Mail className="text-primary-400 mt-1 shrink-0" size={20} />
                    <div className="flex-1 overflow-hidden">
                      <div className="text-xs text-gray-400 font-medium">Email</div>
                      <a
                        href="mailto:vedangrajoriya@gmail.com"
                        className="text-white hover:text-primary-300 text-sm font-semibold truncate block transition-colors"
                      >
                        vedangrajoriya@gmail.com
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-dark-700 hover:bg-dark-500 text-gray-400 hover:text-white transition-colors"
                      title="Copy email"
                    >
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-dark-600/50 border border-white/5">
                    <Phone className="text-primary-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Phone</div>
                      <a
                        href="tel:+919111088134"
                        className="text-white hover:text-primary-300 text-sm font-semibold transition-colors"
                      >
                        +91 9111088134
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-dark-600/50 border border-white/5">
                    <MapPin className="text-primary-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Location</div>
                      <p className="text-white text-sm font-semibold">Indore, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-dark-600/60 mt-6">
                <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
                  Connect on Socials
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/vedangrajoriya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-600 hover:bg-primary-500 text-gray-300 hover:text-white text-xs font-semibold transition-all duration-200 border border-white/5 shadow-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vedang-rajoriya-27a447246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-600 hover:bg-secondary-500 text-gray-300 hover:text-white text-xs font-semibold transition-all duration-200 border border-white/5 shadow-sm"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Inquiry Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 bg-dark-700/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-primary-400" size={22} />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Send a Direct Message</h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center bg-dark-600/50 rounded-xl border border-emerald-500/30">
                  <Check size={40} className="text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Message Opened in Client</h4>
                  <p className="text-gray-300 text-sm">
                    Thank you! Your default email client was opened with the drafted message. Feel free to also email directly at vedangrajoriya@gmail.com.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-600/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-600/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Vedang, I came across your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-600/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 transition-all hover:scale-[1.01]"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;