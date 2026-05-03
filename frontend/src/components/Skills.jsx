import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useStaggeredReveal } from '../hooks/useParallax';
import TextReveal from './TextReveal';

const skillIconMap = {
  "HTML5": { icon: "/skill-icons/html5.svg", color: "#E34F26" },
  "CSS3": { icon: "/skill-icons/css.svg", color: "#1572B6" },
  "JavaScript (ES6+)": { icon: "/skill-icons/javascript.svg", color: "#F7DF1E" },
  "React.js": { icon: "/skill-icons/react.svg", color: "#61DAFB" },
  "Tailwind CSS": { icon: "/skill-icons/tailwindcss.svg", color: "#06B6D4" },
  "Node.js": { icon: "/skill-icons/nodedotjs.svg", color: "#339933" },
  "Express.js": { icon: "/skill-icons/express.svg", color: "#FFFFFF" },
  "FastAPI": { icon: "/skill-icons/fastapi.svg", color: "#009688" },
  "MySQL": { icon: "/skill-icons/mysql.svg", color: "#4479A1" },
  "MongoDB": { icon: "/skill-icons/mongodb.svg", color: "#47A248" },
  "PostgreSQL": { icon: "/skill-icons/postgresql.svg", color: "#4169E1" },
  "Python": { icon: "/skill-icons/python.svg", color: "#3776AB" },
  "LangChain": { icon: "/skill-icons/langchain.svg", color: "#1C3C3C" },
  "LangGraph": { icon: "/skill-icons/langgraph.svg", color: "#1C3C3C" },
  "Pydantic": { icon: "/skill-icons/pydantic.svg", color: "#E92063" },
  "LangSmith": { icon: "/skill-icons/langchain.svg", color: "#1C3C3C" },
  "Agentic AI": { icon: "/skill-icons/modelcontextprotocol.svg", color: "#000000" },
  "Git": { icon: "/skill-icons/git.svg", color: "#F05032" },
  "Docker": { icon: "/skill-icons/docker.svg", color: "#2496ED" },
  "Linux": { icon: "/skill-icons/linux.svg", color: "#FCC624" },
  "Supabase": { icon: "/skill-icons/supabase.svg", color: "#3ECF8E" },
  "Redis": { icon: "/skill-icons/redis.svg", color: "#DC382D" },
  "Cloudinary": { icon: "/skill-icons/cloudinary.svg", color: "#3448C5" },
  "Nginx": { icon: "/skill-icons/nginx.svg", color: "#009639" },
};

const Skills = () => {
  const { skills } = portfolioData;
  const [gridRef, visibleCount] = useStaggeredReveal(skills.length);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0B1120] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <TextReveal
            tag="h2"
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 justify-center"
            delay={0}
            stagger={0.1}
            duration={0.85}
          >
            {"Technical "}
            <span className="text-teal-600 dark:text-teal-400">Toolkit</span>
          </TextReveal>
          <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of my technical expertise and the tools I use to build professional AI-driven solutions.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/5"
              style={{
                opacity: visibleCount > index ? 1 : 0,
                transform: visibleCount > index ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
                transition: 'opacity 0.55s ease, transform 0.55s ease',
              }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill, idx) => {
                  const iconData = skillIconMap[skill];
                  const color = iconData ? iconData.color : '#0d9488';
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/20 border border-transparent transition-all duration-300 hover:scale-105 group/item cursor-default"
                      style={{ '--accent-color': color }}
                    >
                      <div
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm p-2.5 transition-all duration-500 group-hover/item:shadow-lg relative overflow-hidden"
                        style={{ border: `1px solid ${color}40` }}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover/item:opacity-20 transition-opacity duration-500" style={{ backgroundColor: color }} />
                        {iconData ? (
                          <img src={iconData.icon} alt={skill} className="w-full h-full object-contain relative z-10"
                            style={{ filter: skill === "Express.js" && iconData.color === "#FFFFFF" ? 'none' : `drop-shadow(0 0 1px ${color})` }} />
                        ) : (
                          <div className="text-lg font-bold relative z-10" style={{ color }}>{skill.charAt(0)}</div>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
