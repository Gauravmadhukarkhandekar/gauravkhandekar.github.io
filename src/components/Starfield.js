import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.prevZ = this.z;
        this.speed = Math.random() * 0.02 + 0.005;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.prevZ = this.z;
        this.z -= this.speed;
        this.twinklePhase += this.twinkleSpeed;

        // Reset star when it goes off screen
        if (this.z <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.z = 1000;
          this.prevZ = this.z;
        }
      }

      draw() {
        // Calculate screen position
        const x = (this.x - canvas.width / 2) * (200 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (200 / this.z) + canvas.height / 2;
        const prevX = (this.x - canvas.width / 2) * (200 / this.prevZ) + canvas.width / 2;
        const prevY = (this.y - canvas.height / 2) * (200 / this.prevZ) + canvas.height / 2;

        // Calculate size and opacity based on distance
        const size = this.size * (200 / this.z);
        const opacity = this.opacity * (1 - this.z / 1000) * (0.5 + 0.5 * Math.sin(this.twinklePhase));

        // Only draw if star is visible on screen
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height && size > 0.1) {
          // Draw star trail only if there's significant movement
          const distance = Math.sqrt((x - prevX) ** 2 + (y - prevY) ** 2);
          if (distance > 1) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }

          // Draw star with reduced shadow blur to prevent flickering
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = Math.min(size * 1.5, 3);
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // Reset shadow for other elements
          ctx.shadowBlur = 0;
        }
      }
    }

    // Create stars
    const stars = [];
    const numStars = Math.floor((canvas.width * canvas.height) / 12000);
    
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with transparent background to avoid flickering
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default Starfield;
