import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Umar Dev — Web Developer & Creator 🌐";
  const canvasRef = useRef(null);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Particle animation with canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const numParticles = 80;

    function initParticles() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    // Resize handling
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    handleResize();
    animate();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      {/* Animated Gradient Background */}
      <div className="hero-background"></div>

      {/* Particle Effects */}
      <canvas className="particle-canvas" ref={canvasRef}></canvas>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape square"></div>
        <div className="shape star"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <img
            src="/src/assets/profile.jpg"
            alt="Profile"
            className="profile-img animate-profile"
          />
          <h1 className="hero-text">{text}</h1>
          <p className="hero-subtext">
            Creating beautiful, functional web experiences.
          </p>
          <a href="/projects" className="btn-primary btn-cta">
            See My Work
          </a>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Hero Background - Water-like Motion */
        .hero-background {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(270deg, #2d545e, #585388, #8076a3);
          background-size: 600% 600%;
          animation: gradientFlow 20s ease infinite;
          z-index: 0;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Particle Canvas */
        .particle-canvas {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        /* Floating Shapes */
        .floating-shapes .shape {
          position: absolute;
          opacity: 0.3;
          animation: floatMove 10s ease-in-out infinite;
        }
        .circle { width: 40px; height: 40px; border-radius: 50%; background: #beef00; top: 10%; left: 15%; animation-delay: 0s; }
        .triangle { width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 35px solid #7d3cff; top: 70%; left: 30%; animation-delay: 2s; }
        .square { width: 30px; height: 30px; background: #f2d53c; top: 40%; left: 80%; animation-delay: 4s; }
        .star { width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 20px solid #ff0028; top: 20%; left: 50%; animation-delay: 6s; }

        @keyframes floatMove {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        /* Profile Image Animation */
        .animate-profile {
          opacity: 0;
          animation: fadeInImage 1.5s forwards 0.5s;
        }
        @keyframes fadeInImage {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Hero Text Gradient Underline */
        .hero-text {
          background: linear-gradient(90deg, #beef00, #7d3cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }
        .hero-text::after {
          content: '';
          display: block;
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, #beef00, #7d3cff);
          transition: width 0.5s ease;
        }
        .hero-text:hover::after { width: 100%; }

        /* Subtext Animation */
        .hero-subtext {
          color: #f9c5bd;
          font-size: 1.2rem;
          margin-bottom: 25px;
          opacity: 0;
          animation: fadeInText 1.5s forwards 1.5s;
        }
        @keyframes fadeInText {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Button Hover Animation */
        .btn-cta {
          background: linear-gradient(90deg, #585388, #8076a3);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.4s ease;
        }
        .btn-cta:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          background: linear-gradient(90deg, #7d3cff, #beef00);
        }

        /* Hero Overlay */
        .hero-overlay {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%; height: 100%;
          z-index: 1;
          background: rgba(0,0,0,0.4);
        }

        /* Hero Content */
        .hero-content {
          text-align: center;
          max-width: 700px;
          padding: 20px;
          z-index: 2;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-content { padding: 20px; }
          .hero-text { font-size: 1.6rem; }
          .hero-subtext { font-size: 1rem; }
          .profile-img { width: 120px; height: 120px; }
        }
      `}</style>
    </section>
  );
}
