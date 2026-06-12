import React, { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useAnimations';

/**
 * Cinematic entry: eased 000 → 100 counter, then the curtain lifts into the hero.
 * Total ~1.9s. Skipped entirely for reduced-motion users.
 */
const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPhase('gone');
      return undefined;
    }
    let rafId;
    const start = performance.now();
    const DURATION = 1050;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setPhase('exit');
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (phase !== 'exit') return undefined;
    const t = setTimeout(() => setPhase('gone'), 900);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div className={`preloader ${phase === 'exit' ? 'preloader-exit' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-name">Krishna Bhagavan — Portfolio ©2026</span>
        <span className="preloader-count">{String(progress).padStart(3, '0')}</span>
      </div>
    </div>
  );
};

export default Preloader;
