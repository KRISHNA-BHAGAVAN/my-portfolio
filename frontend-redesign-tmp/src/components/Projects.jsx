import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { portfolioData } from '../data/portfolioData';
import { useStaggeredReveal, useScrollY } from '../hooks/useParallax';
import TextReveal from './TextReveal';

const Projects = () => {
  const { projects } = portfolioData;
  const scrollY = useScrollY();
  const [gridRef, visibleCount] = useStaggeredReveal(projects.length);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0B0F1A] relative overflow-hidden">
      <div
        className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />
      <div
        className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.06}px)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            tag="h2"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 justify-center"
            delay={0}
            stagger={0.1}
            duration={0.85}
          >
            {"Featured "}
            <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </TextReveal>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A collection of innovative solutions ranging from AI-powered automation to large-scale infrastructure systems.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative flex flex-col h-full overflow-hidden border-0 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ring-1 ring-slate-200 dark:ring-slate-800"
              style={{
                opacity: visibleCount > index ? 1 : 0,
                transform: visibleCount > index ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all hover:scale-110" title="View Source">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer"
                      className="p-3 bg-teal-500 hover:bg-teal-400 rounded-full text-white transition-all hover:scale-110 shadow-lg shadow-teal-500/20" title="Live Website">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.slice(0, 1).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-teal-600/90 backdrop-blur-md rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-grow leading-relaxed">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant="secondary"
                      className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-0">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] text-slate-500 dark:text-slate-500 font-medium self-center">+{project.tech.length - 4} more</span>
                  )}
                </div>
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline group/btn">
                    View Project Detail
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
