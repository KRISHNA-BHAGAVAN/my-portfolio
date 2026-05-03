import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolioData';
import { useScrollY, useScrollReveal } from '../hooks/useParallax';
import { useLenis } from '../context/LenisContext';
import TextReveal from './TextReveal';

const Hero = () => {
  const { personal } = portfolioData;
  const scrollY = useScrollY();
  const { lenis } = useLenis();
  const [contentRef, contentVisible] = useScrollReveal();

  const handleContactClick = () => {
    const target = document.querySelector('#contact');
    if (target && lenis.current) {
      lenis.current.scrollTo(target, { offset: -64, duration: 1.4 });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute -top-10 -left-20 w-[480px] h-[480px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[560px] h-[560px] bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.25}px)` }}
      />
      <div
        className="absolute top-16 right-1/4 w-56 h-56 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-2xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.55}px)` }}
      />

      <div ref={contentRef} className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div
            className="space-y-6"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateX(0)' : 'translateX(-48px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <div className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
              Available for opportunities
            </div>

            {/* Word-by-word reveal on h1 — handles mixed string + colored span */}
            <TextReveal
              tag="h1"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              delay={0.25}
              stagger={0.1}
              duration={0.85}
            >
              {"Hi, I'm "}
              <span className="text-teal-600 dark:text-teal-400">{personal.name.split(' ')[0]}</span>
            </TextReveal>

            {/* Subtitle word reveal */}
            <TextReveal
              tag="h2"
              className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              delay={0.55}
              stagger={0.06}
              duration={0.75}
            >
              {personal.title}
            </TextReveal>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personal.careerObjective}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleContactClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-6 text-base"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-6 text-base border-2" asChild>
                <a href={personal.resumePdf} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300"
                aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${personal.email}`}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Email"><Mail className="h-5 w-5" /></a>
              <a href={`tel:${personal.phone}`}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Phone"><Phone className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible
                ? `translateX(0) translateY(${scrollY * -0.08}px)`
                : `translateX(48px)`,
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${process.env.PUBLIC_URL}/krishna bhagavan official.jpeg`}
                alt="Krishna Bhagavan Karri"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            <div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl"
              style={{ transform: `translateY(${scrollY * 0.04}px)` }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Available for work</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
