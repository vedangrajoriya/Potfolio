import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'ITGeeks',
    period: 'July 2026 – Present',
    location: 'Indore, India',
    isCurrent: true,
    summary:
      'Spearheading the engineering and deployment of enterprise-grade Agentic AI systems, autonomous multi-agent workflows, and high-performance Generative AI pipelines.',
    highlights: [
      'Architecting and deploying production-ready Agentic AI systems and LLM orchestration workflows with dynamic reasoning and tool execution.',
      'Engineering context-aware Retrieval-Augmented Generation (RAG) and Graph RAG pipelines with intelligent retrieval, reranking, and semantic caching.',
      'Designing and optimizing high-throughput, low-latency REST APIs using FastAPI/Flask integrated with scalable cloud infrastructures.',
      'Collaborating with cross-functional teams to integrate generative intelligence, automating complex business processes and decision systems.'
    ],
    skills: ['Agentic AI', 'Generative AI', 'Graph RAG', 'FastAPI', 'LLM Orchestration', 'Python', 'Cloud Architecture']
  },
  {
    role: 'AI & ML Engineer',
    company: 'Incrivelsoft Private Limited',
    period: 'Nov 2025 – June 2026',
    location: 'Indore, India',
    isCurrent: false,
    summary:
      'Engineered and optimized 10+ production AI agent automations and enterprise RAG pipelines, achieving measurable accuracy and reliability improvements.',
    highlights: [
      'Engineered 10+ production-grade AI agent automations across diverse business use cases, designing specialized workflows for task-specific reasoning, decision-making, and execution.',
      'Applied prompt engineering and model/retrieval optimization, improving prediction consistency by 20–30% and reducing irrelevant outputs by ~25%.',
      'Built production-grade RAG pipelines for individual agents with retrieval, reranking, query optimization, and Graph RAG for context-aware and multi-hop reasoning.',
      'Implemented robust data pipelines and model validation protocols to ensure enterprise reliability and reproducible ML outputs.'
    ],
    skills: ['LangChain', 'Graph RAG', 'Prompt Engineering', 'PyTorch', 'Vector Search', 'Model Optimization', 'Python']
  }
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" ref={ref} className="py-24 bg-dark-700 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-400/10 text-primary-300 border border-primary-400/20 mb-3">
              <Sparkles size={14} className="text-primary-400" />
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Work{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Demonstrated track record of delivering production-ready AI agent systems, advanced RAG architectures, and scalable intelligent solutions.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-dark-600/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl hover:border-primary-400/30 transition-all duration-300 group"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-dark-500/60 mb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-primary-400 font-semibold text-lg">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 bg-dark-700/80 px-3 py-1 rounded-full border border-white/5">
                      <Calendar size={14} className="text-primary-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm">
                      <MapPin size={13} className="text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Key Contributions & Impact:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-gray-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 size={18} className="text-primary-400 mr-2.5 mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-dark-500/40">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-dark-700/70 text-gray-300 border border-white/5 group-hover:border-primary-400/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
