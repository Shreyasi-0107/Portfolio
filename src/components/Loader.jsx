import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function RobotSVG({ size = 80, color = "#f97316", animated = true }) {
  return (
    <>
      {animated && (
        <style>{`
          @keyframes ant-bob    { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(8deg)} 75%{transform:rotate(-8deg)} }
          @keyframes eye-blink  { 0%,88%,100%{transform:scaleY(1)} 92%,96%{transform:scaleY(0.08)} }
          @keyframes eye-shift  { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-4px)} 40%{transform:translateX(0)} 60%{transform:translateX(4px)} 80%{transform:translateX(0)} }
          @keyframes eye-glow   { 0%,100%{opacity:.25} 50%{opacity:.65} }
          @keyframes body-float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-4px)} }
          .rob-ant   { transform-origin:50% 100%; animation: ant-bob 2s ease-in-out infinite; }
          .rob-eyes  { animation: eye-shift 2.8s ease-in-out infinite; }
          .rob-el    { animation: eye-blink 3.5s ease-in-out infinite; transform-origin:50% 50%; }
          .rob-er    { animation: eye-blink 3.5s ease-in-out infinite .15s; transform-origin:50% 50%; }
          .rob-glow  { animation: eye-glow 2s ease-in-out infinite; }
          .rob-body  { animation: body-float 2.4s ease-in-out infinite; }
        `}</style>
      )}
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <g className={animated ? "rob-body" : ""}>
          <g className={animated ? "rob-ant" : ""}>
            <circle cx="50" cy="5" r="4" fill={color} />
            <rect x="48.5" y="8" width="3" height="14" rx="1.5" fill={color} />
          </g>
          <circle cx="50" cy="62" r="35" fill="none" stroke={color} strokeWidth="3" />
          <ellipse cx="50" cy="63" rx="26" ry="20" fill="black" opacity="0.78" />
          <g className={animated ? "rob-eyes" : ""}>
            <g className={animated ? "rob-el" : ""}>
              <ellipse cx="38" cy="62" rx="7" ry="8" fill={color} />
              <ellipse cx="40" cy="59" rx="2.2" ry="2.2" fill="white" opacity=".5" />
              <ellipse cx="38" cy="62" rx="7" ry="8" fill={color} className={animated ? "rob-glow" : ""} opacity=".2" style={{ filter: "blur(3px)" }} />
            </g>
            <g className={animated ? "rob-er" : ""}>
              <ellipse cx="62" cy="62" rx="7" ry="8" fill={color} />
              <ellipse cx="64" cy="59" rx="2.2" ry="2.2" fill="white" opacity=".5" />
              <ellipse cx="62" cy="62" rx="7" ry="8" fill={color} className={animated ? "rob-glow" : ""} opacity=".2" style={{ filter: "blur(3px)" }} />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

// ── Particle background canvas ──────────────────────────────────
function LoaderParticles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: -9999, y: -9999 };
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }
      update() {
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const f = (120 - dist) / 120 * 0.3;
          this.vx += (dx / dist) * f; this.vy += (dy / dist) * f;
        }
        this.vx *= 0.997; this.vy *= 0.997;
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 1.2) { this.vx = this.vx / spd * 1.2; this.vy = this.vy / spd * 1.2; }
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    resize();
    const count = window.innerWidth < 768 ? 40 : 80;
    const particles = Array.from({ length: count }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(249,115,22,0.18)";
      ctx.lineWidth = 0.8;
      particles.forEach((p, i) => {
        p.update();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 160) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(animate);
    };

    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.7 }}
    />
  );
}

const RADIUS = 88;
const CIRC   = 2 * Math.PI * RADIUS;

export default function Loader({ finishLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cur = 0;
    const tick = () => {
      cur = Math.min(100, cur + Math.max(0.5, (100 - cur) * 0.042));
      setProgress(Math.floor(cur));
      if (cur < 100) {
        setTimeout(tick, 22);
      } else {
        // Auto-transition to Hero after a brief pause
        setTimeout(finishLoading, 500);
      }
    };
    setTimeout(tick, 300);
  }, []);

  const strokeDash = CIRC - (progress / 100) * CIRC;
  const dotAngle   = (progress / 100) * 2 * Math.PI - Math.PI / 2;
  const dotX       = 110 + RADIUS * Math.cos(dotAngle);
  const dotY       = 110 + RADIUS * Math.sin(dotAngle);

  return (
    <motion.div
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* ── Animated particle background ── */}
      <LoaderParticles />

      {/* Corner labels */}
      <span className="absolute top-8 left-8 text-[9px] font-mono uppercase tracking-[0.3em]"
        style={{ color: "#c7bfb2", opacity: 0.15, zIndex: 2 }}>
        Portfolio — 2025
      </span>
      <span className="absolute bottom-8 right-8 text-[9px] font-mono uppercase tracking-[0.3em]"
        style={{ color: "#c7bfb2", opacity: 0.15, zIndex: 2 }}>
        Shreyasi Saha
      </span>

      {/* ── Bot + Ring ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: 16, zIndex: 1 }}>
        <span style={{
          fontSize: 11, fontFamily: "monospace", letterSpacing: "0.3em",
          color: "#c7bfb2", opacity: 0.35, textTransform: "uppercase"
        }}>
          {progress}%
        </span>

        <div style={{
          position: "relative", width: 220, height: 220,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          {/* Progress ring */}
          <svg width="220" height="220" viewBox="0 0 220 220"
            style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-90deg)" }}>
            <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="2" />
            <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="#f97316" strokeWidth="2"
              strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={strokeDash}
              style={{ transition: "stroke-dashoffset 0.15s linear" }} />
            <circle cx={dotX} cy={dotY} r="4" fill="#f97316" opacity="0.9" />
          </svg>

          {/* Outer dashed spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ position: "absolute", width: 200, height: 200 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="96" fill="none"
                stroke="rgba(249,115,22,0.12)" strokeWidth="1" strokeDasharray="3 14" />
            </svg>
          </motion.div>

          {/* Glow pulse */}
          <motion.div
            animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            style={{
              position: "absolute", width: 110, height: 110, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(249,115,22,.3) 0%,transparent 70%)"
            }}
          />

          {/* Robot */}
          <RobotSVG size={82} color="#f97316" animated={true} />
        </div>
      </div>
    </motion.div>
  );
}