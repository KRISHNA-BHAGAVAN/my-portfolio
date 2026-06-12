import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext({ lenis: { current: null } });

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: !reduced,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
