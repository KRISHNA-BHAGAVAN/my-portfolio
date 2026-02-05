import React from 'react';
import { Code2, Database, Bot, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: Bot,
      title: "Generative AI",
      description: "Creating intelligent AI solutions with LangChain and LLMs"
    },
    {
      icon: Database,
      title: "Backend Architecture",
      description: "Designing robust APIs and microservices"
    },
    {
      icon: Globe,
      title: "Web Automation",
      description: "Automating workflows with modern automation tools"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Building Impactful Solutions with Emerging Technologies
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personal.careerObjective}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in creating production-ready applications that solve real-world problems. 
              From building intelligent AI-powered systems to developing scalable e-commerce platforms, 
              I'm passionate about leveraging technology to create meaningful impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                Backend Developer
              </span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
