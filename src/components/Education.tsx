import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Eye, 
  X, 
  CheckCircle, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  id?: string;
  category?: 'ai' | 'cloud' | 'network' | 'devops' | 'leadership';
  verifyUrl?: string;
  imageUrl?: string;
  badges?: { name: string; url: string }[];
  highlight?: boolean;
}

const Education: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const certifications: Certification[] = [
    // Datagami & Project Certs
    {
      title: 'Agentic AI (80-Hour Structured Project)',
      issuer: 'Datagami (nasscom & IBM Gold Partner)',
      year: '2026',
      id: 'EDU-2026-Y3PD2',
      category: 'ai',
      verifyUrl: 'https://lms.edudron.com/verify/EDU-2026-Y3PD2',
      imageUrl: '/certificates/agentic-ai-datagami.png',
      highlight: true
    },
    {
      title: 'Generative AI (80-Hour Structured Project)',
      issuer: 'Datagami (nasscom & IBM Gold Partner)',
      year: '2026',
      id: 'EDU-2026-X4WVF',
      category: 'ai',
      verifyUrl: 'https://lms.edudron.com/verify/EDU-2026-X4WVF',
      imageUrl: '/certificates/gen-ai-datagami.png',
      highlight: true
    },
    {
      title: 'DevOps Foundation (80-Hour Structured Project)',
      issuer: 'Datagami (nasscom & IBM Gold Partner)',
      year: '2026',
      id: 'EDU-2026-8HBSF',
      category: 'devops',
      verifyUrl: 'https://lms.edudron.com/verify/EDU-2026-8HBSF',
      imageUrl: '/certificates/devops-datagami.png',
      highlight: true
    },
    // McKinsey Credly
    {
      title: 'McKinsey.org Forward Program',
      issuer: 'McKinsey.org',
      year: '2025',
      category: 'leadership',
      verifyUrl: 'https://www.credly.com/badges/985ac83f-7a00-4ab1-83ce-e8dfc3312e32',
      highlight: true
    },
    // IBM & IBM SkillsBuild Credly
    {
      title: 'Deep Learning Essentials',
      issuer: 'IBM',
      year: '2025',
      category: 'ai',
      verifyUrl: 'https://www.credly.com/badges/38473296-a53f-471a-87eb-4bb3689e118c',
      highlight: true
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      year: '2025',
      category: 'ai',
      verifyUrl: 'https://www.credly.com/badges/3014137e-e529-4463-bdff-48c1503c2742',
      highlight: true
    },
    {
      title: 'IBM Z Day 2025 - AI & Data',
      issuer: 'IBM',
      year: '2025',
      category: 'ai',
      verifyUrl: 'https://www.credly.com/badges/3ac845f9-d9d8-4eaf-a041-f9209089b79e'
    },
    {
      title: 'IBM Z Day 2025 - IBM Z Skills',
      issuer: 'IBM',
      year: '2025',
      category: 'cloud',
      verifyUrl: 'https://www.credly.com/badges/7508f93f-159b-46b1-89da-d115fe4c18e8'
    },
    {
      title: 'IBM Z Day 2025 - Modernization',
      issuer: 'IBM',
      year: '2025',
      category: 'devops',
      verifyUrl: 'https://www.credly.com/badges/2123db93-b66f-49f2-a6ad-c8e52c4600cd'
    },
    {
      title: 'IBM Z Day 2025 - Security',
      issuer: 'IBM',
      year: '2025',
      category: 'network',
      verifyUrl: 'https://www.credly.com/badges/58ffa626-8061-4731-9bb2-90fca5401f9e'
    },
    // Cisco Credly
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      year: '2025',
      category: 'network',
      verifyUrl: 'https://www.credly.com/badges/bfa00b50-c86a-4e54-9ceb-5fdc0ec2eafb',
      highlight: true
    },
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      year: '2025',
      category: 'network',
      verifyUrl: 'https://www.credly.com/badges/e9598e8e-492a-4cff-a207-4b7ac7e6b0ce'
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco',
      year: '2025',
      category: 'ai',
      verifyUrl: 'https://www.credly.com/badges/ae76e9bb-24f1-4a1c-af28-769fef94aff9'
    },
    {
      title: 'Python Essentials 1 & 2',
      issuer: 'Cisco',
      year: '2025',
      category: 'devops',
      badges: [
        { name: 'Part 1', url: 'https://www.credly.com/badges/715672e2-b3a2-44db-8c41-93364fdb14d8' },
        { name: 'Part 2', url: 'https://www.credly.com/badges/0446301e-b744-4034-86e5-36b3ec651266' }
      ]
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2025',
      category: 'network',
      verifyUrl: 'https://www.credly.com/badges/8ce96705-78f6-4b62-82ad-d3d72ead1995'
    },
    // AWS Credly
    {
      title: 'AWS Cloud Clubs Generative AI Camper',
      issuer: 'Amazon Web Services (AWS Community)',
      year: '2024',
      category: 'cloud',
      verifyUrl: 'https://www.credly.com/badges/2248e4b3-61bd-4dca-8d34-ef3ef30860bb',
      highlight: true
    },
    // Oracle & Others
    {
      title: 'Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      year: '2025',
      category: 'cloud',
      verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0CC1AFADE06FAA221E71A01304C5D875B46A57F6E74DD207151F379F3655F821',
      highlight: true
    },
    {
      title: 'AI Foundation Associate',
      issuer: 'Oracle',
      year: '2025',
      category: 'ai',
      verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=48911BADF496A31CE43C9429ACEA9D4354D794CB0DE4BBB4ACA81314C4CB08E0'
    },
    {
      title: 'AWS Solutions Architecture Job Simulation',
      issuer: 'Forage',
      year: '2025',
      category: 'cloud',
      verifyUrl: 'https://drive.google.com/file/d/1Ng4eLGpenMNTMxF391ulzsBdXcgKtHwj/view?usp=drive_link'
    }
  ];

  const filteredCerts =
    filterCategory === 'all'
      ? certifications
      : certifications.filter((c) => c.category === filterCategory);

  return (
    <section id="education" ref={ref} className="py-24 bg-dark-700/90 relative">
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
              Credentials & Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Education &{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Rigorous academic foundation in Computer Science backed by industry-recognized certifications across AI, Cloud, Networking, and Cybersecurity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Education Profile Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 bg-dark-600/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-dark-500/60">
                <div className="p-3 rounded-xl bg-primary-400/10 border border-primary-400/20 text-primary-400">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-primary-400 tracking-wider">
                    Academic Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Medi-Caps University
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Program:</span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    B.Tech in Computer Science
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Location:</span>
                  <span className="text-gray-300 text-sm">Indore, Madhya Pradesh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Expected Graduation:</span>
                  <span className="text-primary-300 font-semibold text-sm">May 2026</span>
                </div>
              </div>

              {/* Coursework & Competencies */}
              <div className="pt-4 border-t border-dark-500/60">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3 flex items-center gap-2">
                  <BookOpen size={14} className="text-primary-400" />
                  Key Academic Coursework
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
                  {[
                    'Machine Learning & Deep Learning',
                    'Data Structures & Algorithms',
                    'Database Management Systems',
                    'Computer Networks (TCP/IP)',
                    'Cybersecurity & Network Defense',
                    'Operating Systems & Architecture',
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-dark-700/60 border border-white/5 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0"></span>
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors & Milestones */}
              <div className="pt-4 border-t border-dark-500/60">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3 flex items-center gap-2">
                  <Award size={14} className="text-secondary-400" />
                  Key Achievements & Leadership
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Completed 15+ industry certifications in AI/ML, Cloud, and Networking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Selected & completed McKinsey Forward Learning Program.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Led multidisciplinary engineering teams for capstone projects.</span>
                  </li>
                </ul>
              </div>

              {/* Credly Profile External Link Box */}
              <div className="pt-4 border-t border-dark-500/60">
                <a
                  href="https://www.credly.com/users/vedang-rajoriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-400/30 hover:border-primary-400/60 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Award size={18} className="text-primary-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors">
                        Credly Verified Profile
                      </div>
                      <div className="text-xs text-gray-400">
                        View 14 verified badges & digital transcripts
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-primary-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Certifications & Badges List */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 bg-dark-600/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-dark-500/60 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Award className="text-primary-400" size={24} />
                    Professional Certifications & Badges
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Verified credentials from McKinsey, IBM, Cisco, Oracle, AWS, Datagami & Microsoft.
                  </p>
                </div>

                {/* Filter pills */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'All', val: 'all' },
                    { label: 'AI/ML', val: 'ai' },
                    { label: 'Cloud', val: 'cloud' },
                    { label: 'Network', val: 'network' },
                    { label: 'DevOps', val: 'devops' },
                  ].map((tab) => (
                    <button
                      key={tab.val}
                      onClick={() => setFilterCategory(tab.val)}
                      className={`px-2.5 py-1 text-xs rounded-full transition-all ${
                        filterCategory === tab.val
                          ? 'bg-primary-500 text-white font-medium shadow-sm'
                          : 'bg-dark-700 text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable / Gridded Certifications */}
              <div className="space-y-3.5 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredCerts.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-200 border ${
                      cert.highlight
                        ? 'bg-dark-700/80 border-primary-400/30 hover:border-primary-400/60'
                        : 'bg-dark-700/40 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm sm:text-base font-semibold text-white">
                            {cert.title}
                          </h4>
                          {cert.id && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-dark-600 text-gray-400 border border-white/5 font-mono">
                              ID: {cert.id}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                          <span className="text-primary-300 font-medium">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 shrink-0 mt-2 sm:mt-0">
                        {cert.imageUrl && (
                          <button
                            onClick={() => setSelectedImage({ url: cert.imageUrl!, title: cert.title })}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-primary-400/10 text-primary-300 hover:bg-primary-400/20 border border-primary-400/20 transition-colors"
                          >
                            <Eye size={13} />
                            <span>Preview</span>
                          </button>
                        )}

                        {cert.badges ? (
                          <div className="flex items-center gap-1.5">
                            {cert.badges.map((b, bIdx) => (
                              <a
                                key={bIdx}
                                href={b.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-dark-600 hover:bg-dark-500 text-gray-300 hover:text-white border border-white/10 transition-colors"
                              >
                                <span>{b.name}</span>
                                <ExternalLink size={11} />
                              </a>
                            ))}
                          </div>
                        ) : cert.verifyUrl ? (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 text-white shadow-sm transition-opacity"
                          >
                            <span>Verify</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-dark-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 bg-dark-700 border-b border-dark-600">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate pr-4">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 bg-dark-900 flex justify-center items-center max-h-[75vh] overflow-auto">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;