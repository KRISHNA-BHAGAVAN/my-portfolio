import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveals an element once it enters the viewport.
 * Returns [ref, visible]. Pure transform/opacity friendly — pair with .rv classes.
 */
export function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/**
 * Scroll-scrub driver. Attaches to an element and calls `callback(progress, rect, vh)`
 * every animation frame while mounted. Progress goes 0 → 1 as the element travels
 * through the viewport. Uses direct DOM writes — never causes React re-renders.
 */
export function useScrub(callback) {
  const ref = useRef(null);
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let rafId;
    const tick = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height + vh;
      const raw = (vh - rect.top) / (total || 1);
      const progress = Math.max(0, Math.min(1, raw));
      cbRef.current(progress, rect, vh);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return ref;
}

/**
 * Eased count-up for stat numbers, triggered by a reveal flag.
 */
export function useCounter(target, visible, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    let rafId;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.round(target * eased));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, visible, duration]);

  return value;
}
