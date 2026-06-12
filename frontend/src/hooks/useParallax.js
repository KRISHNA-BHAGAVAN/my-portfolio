import { useState, useEffect, useRef } from 'react';
import { useLenis } from '../context/LenisContext';

export const useScrollY = () => {
  const ctx = useLenis();
  return ctx ? ctx.scrollY : 0;
};

export const useParallax = (speed = 0.3) => {
  const scrollY = useScrollY();
  return scrollY * speed;
};

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let fallback;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px 50px 0px', ...options }
    );

    if (ref.current) observer.observe(ref.current);

    // Fallback: if observer never fires (e.g. inside an iframe), show content anyway
    fallback = setTimeout(() => {
      setIsVisible(true);
      observer.disconnect();
    }, 600);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
};

export const useStaggeredReveal = (count, options = {}) => {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timer;
    let fallback;

    const runStagger = () => {
      let i = 0;
      const step = () => {
        if (i <= count) {
          setVisibleCount(i);
          i++;
          timer = setTimeout(step, 80);
        }
      };
      step();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          runStagger();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px 50px 0px', ...options }
    );

    if (ref.current) observer.observe(ref.current);

    // Fallback: if observer never fires (e.g. inside an iframe), show content anyway
    fallback = setTimeout(() => {
      observer.disconnect();
      runStagger();
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, [count]);

  return [ref, visibleCount];
};
