import React from 'react';
import { Briefcase, Trophy, Calendar, Globe, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Career <span className="text-teal-600 dark:text-teal-400">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A track record of leadership, rapid development, and technical innovation in AI and Web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-teal-600" />
              Professional Experience
            </h3>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4">
              {experience.map((exp, index) => (
                <div key={exp.id} className="mb-12 ml-8 relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white dark:bg-slate-900 border-4 border-teal-600 rounded-full transition-transform duration-300 group-hover:scale-125 shadow-lg shadow-teal-500/20"></div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 backdrop-blur-sm hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider text-sm">
                          <span>{exp.org}</span>
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-medium hover:underline text-slate-500 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400"
                            >
                              <Globe className="h-3 w-3 mr-1" />
                              Website
                              <ArrowUpRight className="h-3 w-3 ml-0.5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 text-sm font-semibold border border-slate-100 dark:border-slate-700 w-fit">
                        <Calendar className="h-4 w-4 text-teal-600" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                      {exp.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <Trophy className="h-6 w-6 text-teal-600" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/10 dark:to-slate-900 rounded-2xl border border-teal-100/50 dark:border-teal-900/20 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-lg shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                      🏆
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium leading-normal">
                      {achievement}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Call to action for resume */}
              <div className="p-8 bg-teal-600 rounded-3xl text-white overflow-hidden relative group">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-xl font-bold mb-4 relative z-10">Looking for more?</h4>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Detailed breakdown of roles, projects, and impact available in my full resume.
                </p>
                <a 
                  href={portfolioData.personal.resumePdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded-xl hover:bg-slate-100 transition-colors relative z-10 w-full"
                >
                  Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
