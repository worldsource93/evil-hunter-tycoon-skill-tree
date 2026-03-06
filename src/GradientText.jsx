import { useEffect, useRef } from "react";

// ─── Inject keyframes + class styles once into <head> ───────────────────────
const CSS = `
  .ultimate-scene {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ultimate-glow-bg {
    position: absolute;
    width: fit-content;
    height: fit-content;
    background: conic-gradient(
      from 0deg,
      #ff0080, #ff4500, #ffcc00, #00ff88, #00cfff, #8a2be2, #ff0080
    );
    filter: blur(80px);
    opacity: 0.35;
    border-radius: 50%;
    animation: ultimateBgPulse 3s ease-in-out infinite alternate,
               ultimateHueRotate 6s linear infinite;
  }

  .ultimate-text {
    font-family: 'Arial Black', 'Arial Bold', sans-serif;
    font-size: 14px;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1;
    position: relative;
    z-index: 2;

    background: linear-gradient(
      90deg,
      #bf5fff 0%,
      #ff6ec7 12%,
      #ff9500 25%,
      #ffe000 37%,
      #aaff00 50%,
      #00ffb3 62%,
      #00cfff 75%,
      #5588ff 87%,
      #bf5fff 100%
    );
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    animation: ultimateGradientShift 3s linear infinite,
               ultimateBreathe 2.5s ease-in-out infinite alternate;
  }

  .ultimate-particles {
    position: absolute;
    inset: -60px;
    pointer-events: none;
    overflow: visible;
    z-index: 1;
  }

  .ultimate-particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    animation: ultimateFloatUp var(--dur) ease-in-out infinite;
    animation-delay: var(--delay);
  }

  /* ── Keyframes ── */
  @keyframes ultimateBgPulse {
    0%   { transform: scaleX(0.85) scaleY(0.7); opacity: 0.25; }
    100% { transform: scaleX(1.1)  scaleY(1.2); opacity: 0.5; }
  }

  @keyframes ultimateHueRotate {
    0%   { filter: blur(80px) hue-rotate(0deg); }
    100% { filter: blur(80px) hue-rotate(360deg); }
  }

  @keyframes ultimateGradientShift {
    0%   { background-position: 0%   50%; }
    100% { background-position: 300% 50%; }
  }

  @keyframes ultimateBreathe {
    0% {
      filter:
        drop-shadow(0 0  6px rgba(180,100,255,0.8))
        drop-shadow(0 0 16px rgba(255,100,180,0.6))
        drop-shadow(0 0 35px rgba(100,200,255,0.5))
        drop-shadow(0 0 60px rgba(255,200,50,0.3));
      transform: scale(0.99);
    }
    100% {
      filter:
        drop-shadow(0 0 12px rgba(255,100,255,1.0))
        drop-shadow(0 0 30px rgba(100,220,255,0.9))
        drop-shadow(0 0 60px rgba(255,200,50,0.7))
        drop-shadow(0 0 100px rgba(200,80,255,0.5));
      transform: scale(1.01);
    }
  }

  @keyframes ultimateFloatUp {
    0%   { opacity: 0;   transform: translateY(0)     scale(0.3); }
    20%  { opacity: 0.9; }
    80%  { opacity: 0.6; }
    100% { opacity: 0;   transform: translateY(-130px) scale(0); }
  }
`;

const COLORS = [
  "#bf5fff",
  "#ff6ec7",
  "#ff9500",
  "#ffe000",
  "#aaff00",
  "#00ffb3",
  "#00cfff",
  "#5588ff",
];

function injectStyles(id, css) {
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function GradientText({
  text = "ULTIMATE",
  particleCount = 28,
}) {
  const particlesRef = useRef(null);

  useEffect(() => {
    injectStyles("ultimate-text-styles", CSS);
  }, []);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < particleCount; i++) {
      const el = document.createElement("div");
      el.className = "ultimate-particle";
      const size = Math.random() * 6 + 2;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
        left: ${10 + Math.random() * 80}%;
        top: ${20 + Math.random() * 60}%;
        --dur: ${(1.8 + Math.random() * 2.4).toFixed(2)}s;
        --delay: ${(Math.random() * 3).toFixed(2)}s;
      `;
      container.appendChild(el);
    }
  }, [particleCount]);

  return (
    <div className="ultimate-scene">
      <div className="ultimate-glow-bg" />
      <h1 className="ultimate-text">{text}</h1>
      <div className="ultimate-particles" ref={particlesRef} />
    </div>
  );
}
