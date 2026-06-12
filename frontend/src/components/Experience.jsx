import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useAnimations';

const Experience = () => {
  const { experience, achievements, personal } = portfolioData;
  const [headRef, headVisible] = useReveal(0.1);

  return (
    <section id="experience" className="relative bg-[var(--surface)] overflow-hidden border-t border-[var(--line)]">
      <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-glow/[0.04] blur-[120px]" />

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-24 pb-16 border-b border-[var(--line)]">
        <div ref={headRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className={`eyebrow mb-6 rv ${headVisible ? 'rv-in' : ''}`}>Career Journey</p>
            <h2
              className={`font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5rem)] uppercase text-mist rv ${headVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              Experience &<br /><span className="text-gradient">Achievements</span>
            </h2>
          </div>
          <p className={`max-w-sm text-fog text-base leading-relaxed rv ${headVisible ? 'rv-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
            A track record of leadership, rapid development, and technical innovation across AI and web engineering.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Timeline — left 8 cols */}
          <div className="lg:col-span-8 space-y-0">
            {experience.map((exp, i) => (
              <ExperienceItem key={exp.id} exp={exp} index={i} total={experience.length} />
            ))}
          </div>

          {/* Sidebar — right 4 cols */}
          <div className="lg:col-span-4 space-y-8">
            {/* Achievements */}
            <AchievementsPanel achievements={achievements} />
            {/* Resume CTA */}
            <ResumeCard resumePdf={personal.resumePdf} />
          </div>

        </div>
      </div>
    </section>
  );
};

function ExperienceItem({ exp, index, total }) {
  const [ref, visible] = useReveal(0.15);
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className={`rv ${visible ? 'rv-in' : ''} relative pl-10 ${!isLast ? 'pb-16' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 bottom-0 w-px bg-[var(--line)]" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 border-glow bg-[var(--void)] shadow-[0_0_12px_rgba(139,123,255,0.5)]" />

      {/* Card */}
      <div className="group border border-[var(--line)] rounded-2xl p-8 bg-[var(--void)] hover:border-glow/40 transition-all duration-500">
        {/* Period pill */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 border border-[var(--line)] rounded-full font-mono text-[11px] uppercase tracking-wider text-fog">
            {exp.period}
          </span>
        </div>

        <div className="mb-4">
          <h3 className="font-display font-bold text-2xl text-mist mb-2 leading-snug">
            {exp.role}
          </h3>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[12px] uppercase tracking-widest text-glow">{exp.org}</span>
            {exp.website && (
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-[11px] text-fog hover:text-mist transition-colors group/link"
              >
                <span>Website</span>
                <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>

        <p className="text-fog text-base leading-relaxed">{exp.details}</p>

        <div className="mt-6 w-8 h-px bg-glow/30 group-hover:w-20 transition-all duration-500" />
      </div>
    </div>
  );
}

function AchievementsPanel({ achievements }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div ref={ref} className={`rv ${visible ? 'rv-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
      <p className="eyebrow mb-6">Achievements</p>
      <div className="space-y-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="group flex items-start gap-4 p-6 border border-[var(--line)] rounded-2xl bg-[var(--void)] hover:border-glow/40 transition-all duration-400"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-glow/10 flex items-center justify-center text-sm">
              🏆
            </div>
            <p className="text-fog text-sm leading-relaxed group-hover:text-mist transition-colors">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumeCard({ resumePdf }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`rv ${visible ? 'rv-in' : ''} relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-glow/20 to-glow2/10 border border-glow/30`}
      style={{ transitionDelay: '0.22s' }}
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-glow/20 blur-3xl pointer-events-none" />
      <p className="font-mono text-[11px] uppercase tracking-widest text-glow mb-4">Full Resume</p>
      <h4 className="font-display font-bold text-xl text-mist mb-3 leading-snug">
        See the complete story
      </h4>
      <p className="text-fog text-sm mb-6 leading-relaxed">
        Detailed breakdown of roles, projects, and impact.
      </p>
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-mist text-[#0a0a0f] font-mono text-[12px] uppercase tracking-widest rounded-full hover:bg-white transition-colors font-bold"
      >
        Download PDF
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default Experience;
