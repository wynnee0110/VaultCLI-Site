import React, { useEffect, useRef } from 'react';

export const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      speedY: number;
      speedX: number;
      text: string;
      opacity: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const particles: Particle[] = [];

    const createParticle = (initial: boolean = false): Particle => {
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 20, // Start from bottom if not initial
        speedY: Math.random() * 0.8 + 0.2, // Drift upwards
        speedX: (Math.random() - 0.5) * 0.4, // Slight horizontal drift
        text: Math.random() > 0.5 ? '1' : '0',
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 300 + 150,
        size: Math.random() * 14 + 10 // random font size
      };
    };

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push(createParticle(true));
    }

    let animationFrameId: number;

    const render = () => {
      // Create a trailing effect for cooler visuals
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        p.y -= p.speedY; 
        p.x += p.speedX;
        p.life += 1;

        // Fade in and out logic
        if (p.life < 60) {
          p.opacity = p.life / 60; // fade in
        } else if (p.life > p.maxLife - 60) {
          p.opacity = (p.maxLife - p.life) / 60; // fade out
        } else {
          p.opacity = 1;
        }

        // Apply a glowing green color
        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.opacity)})`; // Tailwind green-500 equivalent
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(17, 17, 17, 0.5)';
        ctx.fillText(p.text, p.x, p.y);
        ctx.shadowBlur = 0; // reset shadow

        // Remove dead particles and spawn new ones
        if (p.life >= p.maxLife || p.y < -20) {
          particles[index] = createParticle();
          // Occasionally spawn from the bottom again, or random place
          if (Math.random() > 0.8) {
             particles[index].y = height + 20;
          } else {
             particles[index].y = Math.random() * height;
             particles[index].life = 0; // reset life so it fades in
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none scale-[1.5]"
      style={{ 
        background: "#16171d", 
        filter: 'blur(2px)',
       }}
    />
  );
};
