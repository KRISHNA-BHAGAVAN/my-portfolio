import React from 'react';
import { useReveal, useCounter } from '../hooks/useAnimations';
import { portfolioData } from '../data/portfolioData';

const STATS = [
  { value: 2, suffix: '+', label: 'Years building' },
  { value: 5, suffix: '+', label: 'Projects shipped' },
  { value: 3, suffix: '', label: 'AI frameworks' },
  { value: 1, suffix: '', label: 'Hackathon final' },
];

const PILLARS = [
  {
    num: '01',
    title: 'Full-Stack Engineering',
    body: 'End-to-end product ownership — React frontends, Node/FastAPI backends, scalable microservices, and battle-tested deployment pipelines.',
  },
  {
    num: '02',
    title: 'Generative AI Systems',
    body: 'LangChain, LangGraph, RAG pipelines, agentic workflows — turning LLM capabilities into production-grade intelligent products.',
  },
  {
    num: '03',
    title: 'Backend Architecture',
    body: 'PostgreSQL, Redis, Docker, Nginx — designing systems that stay fast, reliable, and secure at every scale.',
  },
  {
    num: '04',
    title: 'Automation & Tooling',
    body: 'Eliminating manual work through intelligent document processing, voice agents, and autonomous workflow systems.',
  },
];

function StatCounter({ value, suffix, label, visible }) {
  const count = useCounter(value, visible);
  return (
    <div className="space-y-1">
      <p className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-none text-mist">
        {count}{suffix}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{label}</p>
    </div>
  );
}

const About = () => {
  const { personal } = portfolioData;
  const [headRef, headVisible] = useReveal(0.15);
  const [statsRef, statsVisible] = useReveal(0.2);
  const [pillarsRef, pillarsVisible] = useReveal(0.1);

  return (
    <section id="about" className="relative bg-[var(--void)] overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-glow/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-glow2/[0.03] blur-[100px]" />

      {/* ── Top band ── */}
      <div className="border-b border-[var(--line)] px-5 sm:px-8 py-24 max-w-[1400px] mx-auto">
        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* left */}
          <div>
            <p className={`eyebrow mb-8 rv ${headVisible ? 'rv-in' : ''}`} style={{ transitionDelay: '0s' }}>
              About Me
            </p>
            <h2
              className={`font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5rem)] uppercase text-mist rv ${headVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              Building<br />
              <span className="text-gradient">Impactful</span><br />
              Solutions
            </h2>
          </div>

          {/* right */}
          <div
            className={`space-y-6 rv ${headVisible ? 'rv-in' : ''}`}
            style={{ transitionDelay: '0.22s' }}
          >
            <p className="text-fog text-lg leading-relaxed max-w-xl">
              {personal.careerObjective}
            </p>
            <p className="text-fog text-base leading-relaxed max-w-xl">
              I specialise in creating production-ready applications that solve real-world problems —
              from intelligent AI-powered systems to scalable e-commerce platforms.
              Every line I write is in service of meaningful, measurable impact.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Full-Stack Dev', 'GenAI Engineer', 'Problem Solver'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-[var(--line)] rounded-full font-mono text-[11px] uppercase tracking-widest text-fog hover:border-glow hover:text-mist transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="border-b border-[var(--line)] px-5 sm:px-8 py-16 max-w-[1400px] mx-auto">
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className={`rv ${statsVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <StatCounter value={value} suffix={suffix} label={label} visible={statsVisible} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Capability pillars ── */}
      <div className="px-5 sm:px-8 py-24 max-w-[1400px] mx-auto">
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)]"
        >
          {PILLARS.map(({ num, title, body }, i) => (
            <div
              key={num}
              className={`group bg-[var(--void)] p-8 hover:bg-[var(--surface)] transition-colors duration-500 rv ${pillarsVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-glow mb-6">{num}</p>
              <h3 className="font-display font-bold text-lg text-mist mb-4 leading-snug group-hover:text-gradient transition-all duration-500">
                {title}
              </h3>
              <p className="text-fog text-sm leading-relaxed">{body}</p>
              <div className="mt-8 w-8 h-px bg-glow/40 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
