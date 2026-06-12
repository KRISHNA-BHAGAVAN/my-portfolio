import React, { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useAnimations';

/**
 * Accent cursor: instant dot + lerped trailing ring. Grows over links and turns
 * into a VIEW badge over project visuals. Disabled on touch devices and for
 * reduced-motion users. The native cursor stays visible for accessibility.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion()) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let mode = '';
    let rafId;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const onOver = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      const view = target && target.closest('[data-cursor="view"]');
      const link = target && target.closest('a, button, [role="button"]');
      const next = view ? 'view' : link ? 'link' : '';
      if (next === mode) return;
      mode = next;
      if (ringRef.current) ringRef.current.dataset.mode = mode;
      if (labelRef.current) labelRef.current.style.opacity = mode === 'view' ? '1' : '0';
    };

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} className="cursor-label">VIEW</span>
      </div>
    </div>
  );
};

export default CustomCursor;
