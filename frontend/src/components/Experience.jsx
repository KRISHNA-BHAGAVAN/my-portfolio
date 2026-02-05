import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-teal-600">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2">
                        {exp.org}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg"
                >
                  <span className="text-teal-600 dark:text-teal-400 font-bold mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
