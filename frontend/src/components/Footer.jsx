import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLenis } from '../context/LenisContext';

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

const Footer = () => {
  const { personal } = portfolioData;
  const { lenis } = useLenis();
  const year = new Date().getFullYear();

  const scrollTo = (e, sel) => {
    e.preventDefault();
    const target = document.querySelector(sel);
    if (!target) return;
    if (lenis?.current) lenis.current.scrollTo(target, { duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTop = () => {
    if (lenis?.current) lenis.current.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[var(--void)] border-t border-[var(--line)] overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-glow/40 to-transparent" />

      {/* Big name */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-20 pb-12 border-b border-[var(--line)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="font-display font-bold text-[clamp(2rem,7vw,6rem)] uppercase leading-none tracking-[-0.03em] text-mist/10 select-none">
            Krishna<br />Bhagavan
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-[12px] uppercase tracking-widest text-fog hover:text-glow transition-colors link-underline"
            >
              {personal.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-fog hover:border-mist hover:text-mist transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-fog hover:border-mist hover:text-mist transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-fog hover:border-mist hover:text-mist transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav + bottom bar */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="font-mono text-[11px] uppercase tracking-widest text-fog hover:text-mist transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-fog/50">
              © {year} Krishna Bhagavan Karri
            </p>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-fog hover:border-mist hover:text-mist hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
