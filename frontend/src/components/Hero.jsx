import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import ParticleField from './ParticleField';
import Magnetic from './Magnetic';
import { portfolioData } from '../data/portfolioData';
import { useLenis } from '../context/LenisContext';

const Hero = () => {
  const { personal } = portfolioData;
  const { lenis } = useLenis();

  const scrollTo = (e, sel) => {
    e.preventDefault();
    const target = document.querySelector(sel);
    if (!target) return;
    if (lenis.current) lenis.current.scrollTo(target, { duration: 1.5 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { href: personal.github, label: 'GitHub', Icon: Github, external: true },
    { href: personal.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
    { href: `mailto:${personal.email}`, label: 'Email', Icon: Mail, external: false },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <ParticleField className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.55)_75%,#050507_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-glow/[0.07] blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] w-full mx-auto px-5 sm:px-8 pt-24 pb-16">
        <p
          className="hero-fade font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-fog flex items-center gap-3 mb-8"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Open to opportunities — 2026
        </p>

        <h1 className="font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,11vw,9.5rem)] uppercase text-mist">
          <span className="hero-line">
            <span className="hero-line-inner" style={{ animationDelay: '1.05s' }}>Krishna</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner text-gradient" style={{ animationDelay: '1.18s' }}>Bhagavan</span>
          </span>
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <p
            className="hero-fade font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-fog leading-loose"
            style={{ animationDelay: '1.6s' }}
          >
            Full-Stack Engineer
            <br />
            Generative &amp; Agentic AI Systems
          </p>
          <div
            className="hero-fade flex flex-col gap-4 md:items-end"
            style={{ animationDelay: '1.7s' }}
          >
            <p className="text-fog text-base sm:text-lg leading-snug md:text-right max-w-xs">
              Building intelligent products —<br />
              from API to interface.
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {['Full-Stack', 'Generative AI', 'Agentic Systems'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-[var(--line)] font-mono text-[10px] uppercase tracking-widest text-fog/80 hover:border-glow/50 hover:text-glow transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-fade flex flex-wrap items-center gap-4 mt-12" style={{ animationDelay: '1.85s' }}>
          <Magnetic>
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, '#projects')}
              className="inline-flex items-center gap-2 bg-mist text-void font-medium px-7 py-4 rounded-full hover:bg-glow transition-colors duration-300"
            >
              View selected work <ArrowDown className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`${process.env.PUBLIC_URL}${personal.resumePdf}`}
              download
              className="inline-flex items-center gap-2 border border-line text-mist px-7 py-4 rounded-full hover:border-glow hover:text-glow transition-colors duration-300"
            >
              Résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>
          <div className="flex items-center gap-2 sm:ml-4">
            {socials.map(({ href, label, Icon, external }) => (
              <Magnetic key={label} strength={0.4}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-line text-fog hover:text-glow hover:border-glow transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-fade relative z-10 pb-10 flex justify-center" style={{ animationDelay: '2.1s' }}>
        <div className="flex flex-col items-center gap-3 text-fog">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="scroll-beam" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
