import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarsePointer || prefersReduced) return;

    setEnabled(true);

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  if (!enabled) return null;

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed z-[9999] h-1.5 w-1.5 rounded-full bg-black dark:bg-white"
        style={{ pointerEvents: 'none' }}
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: 'tween', duration: 0 }}
      />
      <motion.div
        className="fixed z-[9998] h-9 w-9 rounded-full border border-black/70 dark:border-white/70"
        style={{ pointerEvents: 'none' }}
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isPointer ? 1.4 : 1,
          opacity: isPointer ? 1 : 0.55,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.4 }}
      />
    </div>
  );
}
