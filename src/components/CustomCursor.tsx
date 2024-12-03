import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect if the hovered element has a pointer cursor
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: '#34d399',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'tween',
          duration: 0,
        }}
      />

      <motion.div
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          width: '32px',
          height: '32px',
          border: '2px solid #34d399',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
        }}
        animate={{
          x: position.x - 16    , // Offset to center the ring
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1, // Enlarge when hovering over pointer elements
          rotate: 80, // Apply a rotation
        }}
      />
    </>
  );
}
