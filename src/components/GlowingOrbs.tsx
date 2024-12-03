import React, { useEffect, useRef } from 'react';

const GlowingOrbs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let orbs: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createOrbs = () => {
      orbs = [];
      const colors = ['#ff49db', '#0099ff', '#7928ca', '#ff4444'];
      
      for (let i = 0; i < 4; i++) {
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 100 + 50,
          color: colors[i],
          speed: 0.5,
          angle: Math.random() * Math.PI * 2
        });
      }
    };

    const drawOrb = (x: number, y: number, radius: number, color: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color + '33');
      gradient.addColorStop(0.5, color + '11');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      orbs.forEach(orb => {
        orb.angle += orb.speed / 100;
        orb.x = canvas.width/2 + Math.cos(orb.angle) * 200;
        orb.y = canvas.height/2 + Math.sin(orb.angle) * 100;
        
        drawOrb(orb.x, orb.y, orb.radius, orb.color);
      });

      requestAnimationFrame(animate);
    };

    resize();
    createOrbs();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createOrbs();
    });

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.7, position: 'absolute', zIndex: 10 }}
    />
  );
};

export default GlowingOrbs;