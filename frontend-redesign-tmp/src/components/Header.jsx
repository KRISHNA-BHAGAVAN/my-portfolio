import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLenis } from '../context/LenisContext';
import { portfolioData } from '../data/portfolioData';

const NAV = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Work', href: '#projects', index: '02' },
  { label: 'Stack', href: '#skills', index: '03' },
  { label: 'Journey', href: '#experience', index: '04' },
  { label: 'Contact', href: '#contact', index: '06' },
];

const Header = () => {
  const { personal } = portfolioData;
  const { lenis } = useLenis();
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Hide on scroll down, reveal on scroll up — direct class writes, no re-renders.
  useEffect(() => {
    let lastY = window.scrollY;
    let rafId;
    const tick = () => {
      const y = window.scrollY;
      const el = headerRef.current;
      if (el) {
        if (y > 120 && y > lastY + 2) el.classList.add('header-hidden');
        else if (y < lastY - 2 || y <= 120) el.classList.remove('header-hidden');
        el.classList.toggle('header-solid', y > 48);
      }
      lastY = y;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis.current) lenis.current.scrollTo(target, { offset: 0, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header ref={headerRef} className="site-header fixed top-0 inset-x-0 z-[70]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
          <a
            href="#hero"
            onClick={(e) => go(e, '#hero')}
            className="font-mono text-sm tracking-[0.2em] text-mist"
            aria-label="Back to top"
          >
            KB<span className="text-glow">©</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog hover:text-mist transition-colors"
              >
                <span className="text-glow mr-1.5">{item.index}</span>
                <span className="link-underline">{item.label}</span>
              </a>
            ))}
            <a
              href={`${process.env.PUBLIC_URL}${personal.resumePdf}`}
              download
              className="font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 border border-line rounded-full text-mist hover:border-glow hover:text-glow transition-colors"
            >
              Résumé
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-mist"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu fixed inset-0 z-[60] bg-void/95 backdrop-blur-xl md:hidden ${open ? 'mobile-menu-open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="h-full flex flex-col justify-center px-8 gap-2" aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className="mobile-link font-display text-5xl font-semibold text-mist py-2"
              style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : '0s' }}
            >
              <span className="font-mono text-sm text-glow align-top mr-3">{item.index}</span>
              {item.label}
            </a>
          ))}
          <a
            href={`${process.env.PUBLIC_URL}${personal.resumePdf}`}
            download
            className="mobile-link font-mono text-sm uppercase tracking-[0.2em] text-fog mt-8"
            style={{ transitionDelay: open ? '0.45s' : '0s' }}
          >
            Download Résumé ↓
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
