import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  BrainCircuit, 
  Server, 
  ShieldCheck, 
  Wrench, 
  Users, 
  Code2, 
  Sparkles,
  Check
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; tag?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'agentic-genai',
    name: 'Agentic & Generative AI',
    icon: <Bot className="text-primary-400" size={24} />,
    description: 'Specialized in autonomous multi-agent orchestration, RAG architectures, and LLM applications.',
    skills: [
      { name: 'LangChain & Graph Agentic AI', tag: 'Specialist' },
      { name: 'Generative AI & LLMs', tag: 'Core' },
      { name: 'Multi-Agent Workflows', tag: 'Advanced' },
      { name: 'RAG & Graph RAG', tag: 'Core' },
      { name: 'Prompt Engineering', tag: 'Advanced' },
      { name: 'Context Optimization & Reranking', tag: 'Advanced' },
      { name: 'Genkit AI Flow Management' },
      { name: 'Semantic Search & Vector Embeddings' },
    ],
  },
  {
    id: 'ml-frameworks',
    name: 'Machine Learning & DL',
    icon: <BrainCircuit className="text-secondary-400" size={24} />,
    description: 'Expertise in deep learning architectures, time-series forecasting, and classification models.',
    skills: [
      { name: 'PyTorch', tag: 'Core' },
      { name: 'TensorFlow & Keras', tag: 'Core' },
      { name: 'scikit-learn', tag: 'Advanced' },
      { name: 'XGBoost', tag: 'Advanced' },
      { name: 'Transformer Models', tag: 'Advanced' },
      { name: 'LSTM & Deep RNNs' },
      { name: 'Feature Engineering & PCA' },
      { name: 'CI/CD Concepts for ML / MLOps' },
    ],
  },
  {
    id: 'backend',
    name: 'Python & Backend Systems',
    icon: <Server className="text-primary-300" size={24} />,
    description: 'Building secure, scalable, and high-performance server architectures and APIs.',
    skills: [
      { name: 'Python (Expert)', tag: 'Core' },
      { name: 'FastAPI', tag: 'Core' },
      { name: 'Flask', tag: 'Advanced' },
      { name: 'REST APIs & Webhooks', tag: 'Core' },
      { name: 'Secure API Design', tag: 'Advanced' },
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Functional Programming' },
      { name: 'C++ & Algorithms' },
      { name: 'SQL & Database Architecture' },
    ],
  },
  {
    id: 'networking-security',
    name: 'Networking & Security',
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    description: 'Robust foundation in network protocols, intrusion detection, and cybersecurity standards.',
    skills: [
      { name: 'Network Intrusion Detection (IDS)', tag: 'Specialist' },
      { name: 'TCP/IP & Routing Protocols', tag: 'CCNA' },
      { name: 'DNS, DHCP & Subnetting', tag: 'CCNA' },
      { name: 'VLANs & Enterprise Switching' },
      { name: 'Network Traffic Analysis (CICIDS2017)' },
      { name: 'Cybersecurity Fundamentals' },
      { name: 'Row Level Security & Auth' },
    ],
  },
  {
    id: 'devops-tools',
    name: 'Developer Tools & DevOps',
    icon: <Wrench className="text-amber-400" size={24} />,
    description: 'Modern development lifecycle toolchain for CI/CD, containerization, and monitoring.',
    skills: [
      { name: 'Docker', tag: 'Core' },
      { name: 'Git & GitHub', tag: 'Core' },
      { name: 'Jenkins CI/CD' },
      { name: 'Postman & API Testing' },
      { name: 'PowerBI & Data Analytics' },
      { name: 'VS Code & Jupyter Notebook' },
      { name: 'Data Structures & Algorithms (DSA)' },
    ],
  },
  {
    id: 'methodologies',
    name: 'Methodologies & Soft Skills',
    icon: <Users className="text-purple-400" size={24} />,
    description: 'Structured leadership, agile workflows, and collaborative problem-solving.',
    skills: [
      { name: 'Agile & Scrum Methodologies' },
      { name: 'Software Development Life Cycle (SDLC)' },
      { name: 'Complex Problem Solving' },
      { name: 'Technical Documentation & Arch' },
      { name: 'Team Collaboration & Leadership' },
      { name: 'Digital Capabilities & Strategy (McKinsey)' },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
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

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" ref={ref} className="py-24 bg-dark-600/80 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary-400/10 text-secondary-300 border border-secondary-400/20 mb-3">
              <Sparkles size={14} className="text-secondary-400" />
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Skills &{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              A comprehensive toolkit developed through production engineering, advanced research projects, and global industry certifications.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-dark-700/80 text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                All Skills
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20'
                      : 'bg-dark-700/80 text-gray-400 hover:text-white hover:bg-dark-700'
                  }`}
                >
                  <span className="scale-75">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-dark-700/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-primary-400/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-primary-500/5"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-dark-600/80 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-600/70 text-gray-200 text-xs font-medium border border-white/5 hover:border-primary-400/40 hover:bg-dark-600 transition-colors"
                      >
                        <Check size={12} className="text-primary-400" />
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-primary-400/20 text-primary-300 font-semibold uppercase tracking-wider">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
