import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Certs', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-800/90 backdrop-blur-md py-3 shadow-xl border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-white font-bold text-xl sm:text-2xl hover:opacity-90 transition-opacity flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center text-white font-black text-sm shadow-md">
              VR
            </span>
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Vedang Rajoriya
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center space-x-3.5 pl-3 border-l border-dark-500">
              <a
                href="https://github.com/vedangrajoriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vedang-rajoriya-27a447246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:vedangrajoriya@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email Vedang"
              >
                <Mail size={18} />
              </a>

              <a
                href="/Vedang_Rajoriya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Vedang_Rajoriya_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-400/20 text-primary-300 border border-primary-400/30 hover:bg-primary-400/30 transition-colors shadow-sm"
              >
                <FileDown size={14} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg bg-dark-600/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-800/98 backdrop-blur-xl border-b border-dark-600 py-5 px-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-base font-medium py-1.5 border-b border-dark-700"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center space-x-4">
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
                  href="mailto:vedangrajoriya@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>

              <a
                href="/Vedang_Rajoriya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Vedang_Rajoriya_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-400/20 text-primary-300 border border-primary-400/30"
              >
                <FileDown size={14} />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;