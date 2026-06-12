import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useStaggeredReveal } from '../hooks/useParallax';
import TextReveal from './TextReveal';

const Education = () => {
  const { education } = portfolioData;
  const [cardsRef, visibleCount] = useStaggeredReveal(education.length);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-72 h-72 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal
            tag="h2"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
            delay={0}
            stagger={0.12}
            duration={0.85}
          >
            Education
          </TextReveal>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: visibleCount > index ? 1 : 0,
                transform: visibleCount > index ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 0.55s ease, transform 0.55s ease',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
