import React, { useRef } from 'react';
import { prefersReducedMotion } from '../hooks/useAnimations';

/**
 * Wraps interactive elements with a magnetic pull toward the cursor.
 * Pure transform writes; spring-back handled by the .magnetic CSS transition.
 */
const Magnetic = ({ children, strength = 0.3, className = '' }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic ${className}`}
    >
      {children}
    </div>
  );
};

export default Magnetic;
