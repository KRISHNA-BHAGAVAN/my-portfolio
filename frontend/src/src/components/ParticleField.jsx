import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/useAnimations';

/**
 * Depth-projected particle field rendered on a 2D canvas — WebGL look without the
 * dependency or GPU cost. Particles drift toward the camera with twinkle and a
 * lerped mouse parallax. Pauses when offscreen or when the tab is hidden.
 * Reduced motion gets a single static starfield frame.
 */
const ParticleField = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = prefersReducedMotion();
    const COUNT = isCoarse ? 90 : 200;
    const DEPTH = 1000;
    const FL = 420;
    const SPEED = 0.35;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let inView = true;
    const mouse = { x: 0, y: 0, cx: 0, cy: 0 };

    const palette = () => {
      const r = Math.random();
      if (r < 0.08) return '139, 123, 255';
      if (r < 0.16) return '45, 212, 238';
      return '210, 212, 224';
    };

    const particles = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random() * DEPTH,
      tw: Math.random() * Math.PI * 2,
      color: palette(),
    }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (t, animate) => {
      ctx.clearRect(0, 0, width, height);
      mouse.cx += (mouse.x - mouse.cx) * 0.04;
      mouse.cy += (mouse.y - mouse.cy) * 0.04;
      const cx = width / 2;
      const cy = height / 2;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (animate) {
          p.z -= SPEED;
          if (p.z <= 1) {
            p.x = (Math.random() - 0.5) * 2;
            p.y = (Math.random() - 0.5) * 2;
            p.z = DEPTH;
          }
        }
        const scale = FL / (FL + p.z);
        const depth = 1 - p.z / DEPTH;
        const px = cx + (p.x * width * 0.75 + mouse.cx * 70 * depth) * scale;
        const py = cy + (p.y * height * 0.75 + mouse.cy * 70 * depth) * scale;
        const r = Math.max(0.4, 2.3 * scale);
        const twinkle = animate ? 0.55 + 0.45 * Math.sin(p.tw + t * 0.0012) : 0.8;
        const alpha = Math.min(0.9, (0.12 + 0.88 * depth) * twinkle);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t) => {
      if (inView && !document.hidden) render(t, true);
      rafId = requestAnimationFrame(loop);
    };

    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduced) {
      render(0, false);
      return () => window.removeEventListener('resize', resize);
    }

    const io = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
    });
    io.observe(canvas);

    window.addEventListener('mousemove', onMouse, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default ParticleField;
