import React, { useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useAnimations';

/* Devicons CDN — colorful, high-quality SVGs for all major tech */
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
/* Simple Icons CDN — crisp brand SVGs for tools not in Devicons */
const SI = 'https://cdn.simpleicons.org';

const skillIconMap = {
  "HTML5":             { icon: `${DI}/html5/html5-original.svg`,             color: "#E34F26" },
  "CSS3":              { icon: `${DI}/css3/css3-original.svg`,               color: "#1572B6" },
  "JavaScript (ES6+)": { icon: `${DI}/javascript/javascript-original.svg`,   color: "#F7DF1E" },
  "React.js":          { icon: `${DI}/react/react-original.svg`,             color: "#61DAFB" },
  "Tailwind CSS":      { icon: `${DI}/tailwindcss/tailwindcss-original.svg`, color: "#06B6D4" },
  "Node.js":           { icon: `${DI}/nodejs/nodejs-original.svg`,           color: "#339933" },
  "Express.js":        { icon: `${SI}/express/ffffff`,                        color: "#FFFFFF", raw: true },
  "FastAPI":           { icon: `${DI}/fastapi/fastapi-original.svg`,         color: "#009688" },
  "MySQL":             { icon: `${DI}/mysql/mysql-original.svg`,             color: "#4479A1" },
  "MongoDB":           { icon: `${DI}/mongodb/mongodb-original.svg`,         color: "#47A248" },
  "PostgreSQL":        { icon: `${DI}/postgresql/postgresql-original.svg`,   color: "#4169E1" },
  "Python":            { icon: `${DI}/python/python-original.svg`,           color: "#3776AB" },
  "LangChain":         { icon: `${SI}/langchain/1C3C3C`,                      color: "#00C58E", raw: true },
  "LangGraph":         { icon: `${SI}/langchain/6366f1`,                      color: "#6366f1", raw: true },
  "Pydantic":          { icon: `${SI}/pydantic`,                              color: "#E92063", raw: true },
  "LangSmith":         { icon: `${SI}/langchain/f97316`,                      color: "#f97316", raw: true },
  "Agentic AI":        { icon: `${SI}/openai/8b7bff`,                         color: "#8b7bff", raw: true },
  "Git":               { icon: `${DI}/git/git-original.svg`,                 color: "#F05032" },
  "Docker":            { icon: `${DI}/docker/docker-original.svg`,           color: "#2496ED" },
  "Linux":             { icon: `${DI}/linux/linux-original.svg`,             color: "#FCC624" },
  "Supabase":          { icon: `${SI}/supabase`,                              color: "#3ECF8E", raw: true },
  "Redis":             { icon: `${DI}/redis/redis-original.svg`,             color: "#DC382D" },
  "Cloudinary":        { icon: `${SI}/cloudinary`,                            color: "#3448C5", raw: true },
  "Nginx":             { icon: `${DI}/nginx/nginx-original.svg`,             color: "#009639" },
  "RESTful APIs":      { icon: null,                                           color: "#8b7bff" },
  "Microservices":     { icon: null,                                           color: "#2dd4ee" },
};

function IconImg({ iconData, skill, size = 'w-5 h-5' }) {
  if (!iconData?.icon) {
    return (
      <div
        className={`${size} rounded-sm flex-shrink-0 flex items-center justify-center text-[10px] font-bold`}
        style={{ background: `${iconData?.color ?? '#8b7bff'}22`, color: iconData?.color ?? '#8b7bff' }}
      >
        {skill.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={iconData.icon}
      alt={skill}
      className={`${size} object-contain flex-shrink-0`}
      style={iconData.raw ? undefined : { filter: `drop-shadow(0 0 4px ${iconData.color}55)` }}
      loading="lazy"
    />
  );
}

function SkillPill({ skill }) {
  const icon = skillIconMap[skill];
  return (
    <div className="group flex items-center gap-3 px-5 py-3 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:border-glow/50 transition-all duration-300 flex-shrink-0 cursor-default">
      <IconImg iconData={icon} skill={skill} size="w-5 h-5" />
      <span className="font-mono text-[12px] tracking-wide text-fog group-hover:text-mist transition-colors whitespace-nowrap">
        {skill}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = 38 }) {
  const cls = reverse ? 'marquee marquee-reverse' : 'marquee';
  const animStyle = { animationDuration: `${speed}s` };
  return (
    <div className={cls}>
      <div className="marquee-track" style={animStyle}>
        {items.map((skill, i) => <SkillPill key={`${skill}-${i}`} skill={skill} />)}
      </div>
      <div className="marquee-track" aria-hidden="true" style={animStyle}>
        {items.map((skill, i) => <SkillPill key={`dup-${skill}-${i}`} skill={skill} />)}
      </div>
    </div>
  );
}

const Skills = () => {
  const { skills } = portfolioData;
  const [headRef, headVisible] = useReveal(0.15);

  const row1 = skills.slice(0, 3).flatMap(g => g.items);
  const row2 = skills.slice(3).flatMap(g => g.items);

  return (
    <section id="skills" className="relative bg-[var(--surface)] overflow-hidden border-t border-[var(--line)]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-glow/[0.04] blur-[140px]" />

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-24 pb-16 border-b border-[var(--line)]">
        <div ref={headRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className={`eyebrow mb-6 rv ${headVisible ? 'rv-in' : ''}`}>Technical Arsenal</p>
            <h2
              className={`font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,6vw,5rem)] uppercase text-mist rv ${headVisible ? 'rv-in' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              Tools &<br /><span className="text-gradient">Technologies</span>
            </h2>
          </div>
          <p
            className={`max-w-sm text-fog text-base leading-relaxed rv ${headVisible ? 'rv-in' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            A comprehensive stack for building full-scale AI-powered products —
            from the pixel to the pipeline.
          </p>
        </div>
      </div>

      {/* Category grid */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 border-b border-[var(--line)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--line)]">
          {skills.map((group, gi) => (
            <div key={gi} className="bg-[var(--surface)] p-6 space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-glow">{group.category}</p>
              <div className="space-y-2">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="group/skill flex items-center gap-2.5 py-1 cursor-default"
                  >
                    <div className="opacity-70 group-hover/skill:opacity-100 transition-opacity flex-shrink-0">
                      <IconImg iconData={skillIconMap[skill]} skill={skill} size="w-4 h-4" />
                    </div>
                    <span className="text-fog text-sm group-hover/skill:text-mist transition-colors font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee rows */}
      <div className="py-12 space-y-4 overflow-hidden">
        <MarqueeRow items={row1} reverse={false} speed={42} />
        <MarqueeRow items={row2} reverse={true} speed={36} />
      </div>
    </section>
  );
};

export default Skills;
