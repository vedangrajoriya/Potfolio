import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Briefcase,
  Calendar,
  MapPin,
  Bot,
  BrainCircuit,
  Layers,
  Code2,
  Workflow,
  Sparkles
} from 'lucide-react';

interface ExperienceStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent: boolean;
  summary: string;
  steps: ExperienceStep[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'AI Engineer',
    company: 'ITGeeks',
    period: 'July 2026 – Present',
    location: 'Indore, India',
    isCurrent: true,
    summary:
      'Spearheading enterprise AI initiatives by architecting end-to-end intelligent automation pipelines, training and fine-tuning custom AI models, and delivering scalable production web applications and internal enterprise systems.',
    steps: [
      {
        icon: <Bot size={20} className="text-primary-400" />,
        title: 'End-to-End AI Automation',
        description:
          'Architected and deployed multi-agent AI automation workflows for complex, high-latency manual business processes, substantially minimizing human intervention and operational overhead.'
      },
      {
        icon: <BrainCircuit size={20} className="text-primary-400" />,
        title: 'Custom Model Training & Fine-Tuning',
        description:
          'Trained, fine-tuned, and benchmarked domain-specific machine learning and large language models, optimizing inference speed, context retrieval, and decision accuracy across production workloads.'
      },
      {
        icon: <Layers size={20} className="text-primary-400" />,
        title: 'Enterprise CRMs & Internal LMS',
        description:
          'Delivered robust, production-grade enterprise web applications including proprietary AI-augmented CRM systems, company-wide Learning Management Systems (LMS), and internal productivity suites.'
      }
    ],
    skills: [
      'Agentic AI Workflows',
      'AI Automation',
      'Model Training & Fine-Tuning',
      'Enterprise CRMs & LMS',
      'FastAPI',
      'Graph RAG',
      'Python',
      'Cloud Architecture'
    ]
  },
  {
    id: 2,
    role: 'AI & ML Engineer',
    company: 'Incrivelsoft Private Limited',
    period: 'Nov 2025 – June 2026',
    location: 'Indore, India',
    isCurrent: false,
    summary:
      'Engineered and deployed 10+ production-grade autonomous AI agents and enterprise RAG pipelines, significantly improving response accuracy, retrieval precision, and computational efficiency.',
    steps: [
      {
        icon: <Bot size={20} className="text-primary-400" />,
        title: 'Production AI Agents',
        description:
          'Engineered 10+ production-grade AI agent automations across diverse business verticals, implementing task-specific reasoning loops, dynamic tool calling, and multi-step execution.'
      },
      {
        icon: <Workflow size={20} className="text-primary-400" />,
        title: 'Advanced RAG & Graph RAG',
        description:
          'Built enterprise-grade RAG and Graph RAG architectures incorporating hybrid vector retrieval, contextual reranking, and semantic caching for complex multi-hop reasoning.'
      },
      {
        icon: <Code2 size={20} className="text-primary-400" />,
        title: 'Prompt & Model Optimization',
        description:
          'Applied structured prompt engineering and inference optimization protocols, elevating prediction consistency by 20–30% and cutting irrelevant generation by ~25%.'
      }
    ],
    skills: [
      'LangChain',
      'Graph RAG',
      'Agentic Systems',
      'Prompt Engineering',
      'PyTorch',
      'Vector Search',
      'Model Optimization',
      'Python'
    ]
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 60,
        damping: 10,
        delay: 0.1,
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-dark-700 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
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
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Proven track record of engineering production AI systems, autonomous agentic automations, model training, and enterprise web solutions.
          </p>
        </motion.div>

        {/* Experiences List matching Projects layout */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="bg-dark-600/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/5 hover:border-primary-400/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-dark-500/60 mb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-white font-semibold text-lg">
                      <Briefcase size={18} className="text-primary-400" />
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
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {exp.summary}
                </p>

                {/* 3 Step/Feature Cards matching Projects layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {exp.steps.map((step, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className="bg-dark-700/50 rounded-lg p-5 hover:bg-dark-600/50 transition-colors border border-white/5"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-3">
                        {step.icon}
                        <h4 className="text-white font-medium ml-2">{step.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-500/40">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-dark-700/70 text-gray-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
