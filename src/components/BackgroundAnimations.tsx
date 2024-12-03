import React, { useEffect, useRef } from "react";

const BackgroundAnimations = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    class Spark {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      growing: boolean;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3; // Reduced speed
        this.speedY = (Math.random() - 0.5) * 0.3; // Reduced speed
        this.color = Math.random() > 0.5 ? "#fff" : "#60A5FA";
        this.alpha = Math.random() * 0.5 + 0.5;
        this.growing = Math.random() > 0.5;
      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Pulsing size effect
        if (this.growing) {
          this.size += 0.01; // Reduced pulsing speed
          if (this.size > 3) this.growing = false;
        } else {
          this.size -= 0.01;
          if (this.size < 1) this.growing = true;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = this.alpha;

        // Main spark
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create sparks
    const sparks: Spark[] = [];
    const sparkCount = 20; // Reduced number of sparks
    for (let i = 0; i < sparkCount; i++) {
      sparks.push(new Spark(canvas));
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparks.forEach((spark) => {
        spark.update(canvas);
        spark.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ top: 0, left: 0, position: "absolute", zIndex: 10 }} />;
};

export default BackgroundAnimations;
