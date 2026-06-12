import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useAnimations';

const Projects = () => {
  const { projects } = portfolioData;
  const [headRef, headVisible] = useReveal(0.1);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative bg-[var(--void)] overflow-hidden border-t border-[var(--line)]">
      <div className="pointer-events-none absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-glow/[0.04] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-glow2/[0.03] blur-[110px]" />

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-24 pb-16 border-b border-[var(--line)]">
        <div ref={headRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className={`eyebrow mb-6 rv ${headVisible ? 'rv-in' : ''}`}>Selected Work</p>
            <h2
              className={`font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5rem)] uppercase text-mist rv ${headVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              Featured<br /><span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className={`max-w-sm text-fog text-base leading-relaxed rv ${headVisible ? 'rv-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
            From AI-powered automation to full-scale university platforms — every project ships with intention.
          </p>
        </div>
      </div>

      {/* Project list */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredId === project.id}
            onHover={() => setHoveredId(project.id)}
            onLeave={() => setHoveredId(null)}
            anyHovered={hoveredId !== null}
          />
        ))}
      </div>

      {/* Bottom padding */}
      <div className="h-16" />
    </section>
  );
};

function ProjectRow({ project, index, isHovered, onHover, onLeave, anyHovered }) {
  const [rowRef, rowVisible] = useReveal(0.1);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={rowRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative border-b border-[var(--line)] rv ${rowVisible ? 'rv-in' : ''} transition-all duration-500`}
      style={{
        transitionDelay: `${index * 0.07}s`,
        opacity: anyHovered && !isHovered ? 0.35 : undefined,
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 py-10">
        {/* Number */}
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog w-10 flex-shrink-0">
          {num}
        </span>

        {/* Image thumbnail — visible on hover (desktop) */}
        <div
          className={`hidden lg:block w-[120px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden border border-[var(--line)] transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Title + tags */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-[clamp(1.2rem,2.5vw,1.75rem)] text-mist leading-tight group-hover:text-gradient transition-all duration-500 mb-3">
            {project.name}
          </h3>
          <p className="text-fog text-sm leading-relaxed max-w-2xl mb-4 line-clamp-2">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-[var(--line)] font-mono text-[10px] uppercase tracking-wider text-fog">
                {tag}
              </span>
            ))}
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-[var(--surface)] font-mono text-[10px] uppercase tracking-wider text-fog/70">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden w-full h-40 rounded-xl overflow-hidden border border-[var(--line)]">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-[var(--line)] rounded-full font-mono text-[11px] uppercase tracking-wider text-fog hover:border-mist hover:text-mist transition-all duration-300 group/btn"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">Code</span>
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-glow rounded-full font-mono text-[11px] uppercase tracking-wider text-[#0a0a0f] hover:bg-mist transition-all duration-300"
            >
              <span>Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
