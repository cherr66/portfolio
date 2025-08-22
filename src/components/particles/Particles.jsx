import { useEffect, useRef } from "react";

const Particles = ({
  particleCount = 120,
  colorsDefault = [
    "rgba(255,182,193,0.4)",
    "rgba(173,216,230,0.4)",
    "rgba(221,160,221,0.4)",
  ],
  colorsSummer = [
    "rgba(124, 252, 203, 0.4)",
    "rgba(80, 247, 239, 0.4)",
    "rgba(197, 255, 173, 0.40)",
    "rgba(255, 255, 190, 0.4)",
  ],
  colorSet = "default",
  mouseRadius = 80,
}) => {
  const canvasRef = useRef(null);
  const particlesArrayRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: mouseRadius });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const colors = colorSet === "summer" ? colorsSummer : colorsDefault;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 6 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.01;
        this.speedY = (Math.random() - 0.5) * 0.01;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (mouseRef.current.x && mouseRef.current.y) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRef.current.radius + this.radius) {
            const angle = Math.atan2(dy, dx);
            const pushBack = 2;
            this.x -= Math.cos(angle) * pushBack;
            this.y -= Math.sin(angle) * pushBack;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.draw();
      }
    }

    const initParticles = (count) => {
      particlesArrayRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesArrayRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArrayRef.current.forEach((p) => p.update());
      requestAnimationFrame(animate);
    };

    initParticles(particleCount);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [particleCount, colorsDefault, colorsSummer, colorSet, mouseRadius]);

  return (
    <canvas
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ref={canvasRef}
      style={{ display: "block" }}
      id="particles"
    />
  );
};

export default Particles;
