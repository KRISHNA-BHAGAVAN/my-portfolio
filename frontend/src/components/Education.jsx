import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.years}
                  </p>
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
