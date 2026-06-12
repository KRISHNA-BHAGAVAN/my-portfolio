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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

export const useStaggeredReveal = (count, options = {}) => {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const step = () => {
            if (i <= count) {
              setVisibleCount(i);
              i++;
              timer = setTimeout(step, 80);
            }
          };
          step();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [count]);

  return [ref, visibleCount];
};
