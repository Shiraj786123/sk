'use client';
import React, { useEffect, useRef } from 'react';
import '../styles/aiSeoHero.css';

const AiSeoHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1a0000');
      gradient.addColorStop(0.3, '#2d0a1f');
      gradient.addColorStop(0.7, '#0a1428');
      gradient.addColorStop(1, '#000000');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;
            const hue = ((p1.x + p2.x) / 2 / canvas.width) * 180 + 200;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (distance < 100 && Math.random() > 0.98) {
              const nearbyParticles = particles.filter(p => {
                const d1 = Math.sqrt((p.x - p1.x) ** 2 + (p.y - p1.y) ** 2);
                const d2 = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                return d1 < 100 && d2 < 100 && p !== p1 && p !== p2;
              });

              if (nearbyParticles.length > 0) {
                const p3 = nearbyParticles[0];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y);
                ctx.closePath();
                ctx.fillStyle = `hsla(${hue}, 70%, 50%, ${opacity * 0.3})`;
                ctx.fill();
              }
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="ai-seo-hero">
      <canvas ref={canvasRef} className="network-canvas"></canvas>

      <div className="ai-seo-container">

        {/* 🔥 Rotating Auto-Scrolling Badge */}
        <div className="ai-badge rotating-badge">
          <div className="badge-text-wrapper">
            <div className="badge-text">AI That Researches Like SEO & Writes Like Human</div>
            <div className="badge-text">AI That Researches Like SEO & Writes Like Human</div>
            <div className="badge-text">AI That Researches Like SEO & Writes Like Human</div>

            <div className="badge-text">AI That Researches Like SEO & Writes Like Human</div>
            <div className="badge-text">AI That Researches Like SEO & Writes Like Human</div>
            <div className="badge-text">AI That Researches Like SEO & Writes Like Human</div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="ai-hero-title">
          Grow Organic Traffic<br />
          <span className="white-text">on auto-pilot</span>
        </h1>

        {/* Subtitle */}
        <p className="ai-hero-subtitle">
          Grow your organic traffic and outrank competitors with SEO-optimized<br />
          blog content. Powered by live research and ABC link exchange that<br />
          Google rewards.
        </p>

        <button className="ai-cta-btn">
          Get Started For Free
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <div className="ai-social-proof">
          <p className="proof-text">
            Community of <strong>400+ smart businesses</strong> in <strong>18 countries</strong>
          </p>

          <div className="client-logos">
            <div className="logo-item"><span className="logo-text">SKYPHER</span></div>
            <div className="logo-item"><div className="teamout-logo"><span className="orange-dot"></span><span className="logo-text">TeamOut</span></div></div>
          </div>

          <div className="trustpilot">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span className="rating-text">Trustpilot <strong>4.7/5</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSeoHero;
