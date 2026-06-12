import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useAnimations';

const GRADE_LABELS = ['B.Tech AIML', 'Intermediate', 'Secondary'];

const Education = () => {
  const { education } = portfolioData;
  const [headRef, headVisible] = useReveal(0.1);

  return (
    <section id="education" className="relative bg-[var(--void)] overflow-hidden border-t border-[var(--line)]">
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-glow2/[0.04] blur-[120px]" />

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-24 pb-16 border-b border-[var(--line)]">
        <div ref={headRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className={`eyebrow mb-6 rv ${headVisible ? 'rv-in' : ''}`}>Academic Foundation</p>
            <h2
              className={`font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5rem)] uppercase text-mist rv ${headVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              Education &<br /><span className="text-gradient">Credentials</span>
            </h2>
          </div>
          <p
            className={`max-w-sm text-fog text-base leading-relaxed rv ${headVisible ? 'rv-in' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            A consistent track record of academic excellence, culminating in an AI/ML specialisation.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20">
        <div className="space-y-px bg-[var(--line)] rounded-2xl overflow-hidden">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} label={GRADE_LABELS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

function EducationCard({ edu, index, label }) {
  const [ref, visible] = useReveal(0.12);

  const scoreMatch = edu.degree.match(/[\d.]+%?/g);
  const score = scoreMatch ? scoreMatch[scoreMatch.length - 1] : null;
  const degreeTitle = edu.degree.replace(/\|.*$/, '').trim();

  return (
    <div
      ref={ref}
      className={`group relative bg-[var(--void)] hover:bg-[var(--surface)] transition-colors duration-500 rv ${visible ? 'rv-in' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 px-8 py-10">
        {/* Index */}
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog/50 flex-shrink-0 w-8">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Label */}
        <div className="flex-shrink-0 sm:w-36">
          <span className="px-3 py-1.5 border border-[var(--line)] rounded-full font-mono text-[10px] uppercase tracking-wider text-glow">
            {label}
          </span>
        </div>

        {/* Degree + Institution */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-xl text-mist group-hover:text-gradient transition-all duration-500 mb-1.5 leading-snug">
            {degreeTitle}
          </h3>
          <p className="text-fog text-sm">{edu.school}</p>
        </div>

        {/* Year */}
        <div className="flex-shrink-0 text-right space-y-1">
          <p className="font-mono text-[11px] uppercase tracking-widest text-fog">{edu.years}</p>
          {score && (
            <p className="font-display font-bold text-2xl text-mist">{score}</p>
          )}
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-glow to-glow2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </div>
  );
}

export default Education;
