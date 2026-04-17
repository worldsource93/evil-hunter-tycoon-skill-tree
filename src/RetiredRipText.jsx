import { useEffect } from "react";

const GHOSTS = ["ghost-a", "ghost-b", "ghost-c"];

const CSS = `
  .retired-rip-scene {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-left: 6px;
    padding: 8px 12px 12px 0;
  }

  .retired-rip-aura {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 0;
    height: 10px;
    background: radial-gradient(
      circle,
      rgba(255, 81, 81, 0.22) 0%,
      rgba(255, 184, 77, 0.12) 38%,
      rgba(0, 0, 0, 0) 76%
    );
    filter: blur(12px);
    animation: retiredRipAuraPulse 2.8s ease-in-out infinite alternate;
    pointer-events: none;
  }

  .retired-rip-ghost-track {
    position: absolute;
    inset: -18px -10px -12px -10px;
    z-index: 0;
    pointer-events: none;
    transform: translateY(50%);
  }

  .retired-rip-ghost {
    position: absolute;
    width: 22px;
    height: 22px;
    animation: retiredRipGhostBob 1.2s ease-in-out infinite;
  }

  .retired-rip-ghost-shell {
    display: block;
    width: 100%;
    height: 100%;
  }

  .retired-rip-ghost-body {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 12px 12px 8px 8px;
    background:
      radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.98), transparent 18%),
      linear-gradient(180deg, #ffffff 0%, #f4fbff 68%, #d8e6f4 100%);
    box-shadow:
      0 0 14px rgba(167, 232, 255, 0.45),
      0 6px 12px rgba(58, 95, 126, 0.12);
    animation: retiredRipGhostTilt 1.8s ease-in-out infinite alternate;
    transform-origin: center bottom;
  }

  .retired-rip-ghost-body::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 9px;
    background:
      radial-gradient(circle at 14% 0%, #eef8ff 0 45%, transparent 47%),
      radial-gradient(circle at 50% 0%, #eef8ff 0 45%, transparent 47%),
      radial-gradient(circle at 86% 0%, #eef8ff 0 45%, transparent 47%);
    filter: drop-shadow(0 1px 0 rgba(184, 223, 255, 0.4));
  }

  .retired-rip-ghost-body::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.55);
    opacity: 0.35;
  }

  .retired-rip-ghost.ghost-a {
    left: 0;
    top: 18px;
    animation:
      retiredRipGhostRoamA 3.6s linear infinite,
      retiredRipGhostBob 1.05s ease-in-out infinite,
      retiredRipGhostDriftA 1.9s ease-in-out infinite alternate;
  }

  .retired-rip-ghost.ghost-a .retired-rip-ghost-body {
    animation: retiredRipGhostTilt 1.5s ease-in-out infinite alternate;
  }

  .retired-rip-ghost.ghost-b {
    left: calc(50% - 10px);
    top: -10px;
    width: 20px;
    height: 20px;
    animation:
      retiredRipGhostRoamB 3.1s linear infinite -0.9s,
      retiredRipGhostBob 0.92s ease-in-out infinite -0.4s,
      retiredRipGhostDriftB 1.5s ease-in-out infinite alternate -0.1s;
  }

  .retired-rip-ghost.ghost-b .retired-rip-ghost-body {
    animation: retiredRipGhostTilt 1.25s ease-in-out infinite alternate -0.2s;
  }

  .retired-rip-ghost.ghost-c {
    left: calc(100% - 24px);
    top: 14px;
    width: 18px;
    height: 18px;
    animation:
      retiredRipGhostRoamC 2.7s linear infinite -1.3s,
      retiredRipGhostBob 0.84s ease-in-out infinite -0.3s,
      retiredRipGhostDriftC 1.34s ease-in-out infinite alternate -0.15s;
  }

  .retired-rip-ghost.ghost-c .retired-rip-ghost-body {
    animation: retiredRipGhostTilt 1.12s ease-in-out infinite alternate -0.1s;
  }

  .retired-rip-ghost-eye {
    position: absolute;
    top: 35%;
    width: 14%;
    height: 23%;
    border-radius: 999px;
    background: #243141;
  }

  .retired-rip-ghost-eye.left {
    left: 29%;
  }

  .retired-rip-ghost-eye.right {
    right: 29%;
  }

  .retired-rip-ghost-mouth {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 7px;
    height: 4px;
    border-bottom: 2px solid #243141;
    border-radius: 0 0 999px 999px;
    transform: translateX(-50%);
  }

  .retired-rip-ghost-blush {
    position: absolute;
    top: 57%;
    width: 18%;
    height: 14%;
    border-radius: 999px;
    background: rgba(255, 162, 183, 0.85);
    filter: blur(0.2px);
  }

  .retired-rip-ghost-blush.left {
    left: 16%;
  }

  .retired-rip-ghost-blush.right {
    right: 16%;
  }

  .retired-rip-card {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 4px 0;
  }

  .retired-rip-badge {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
    padding: 2px 6px;
    border-radius: 999px;
    background: rgba(120, 7, 7, 0.78);
    border: 1px solid rgba(255, 140, 140, 0.42);
    color: #fffdf9;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-indent: 0.12em;
    box-shadow:
      0 0 10px rgba(111, 4, 4, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  .retired-rip-text {
    position: relative;
    z-index: 1;
    font-size: 12px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #000;
  }

  .retired-rip-text::after {
    content: "";
    position: absolute;
    left: -2px;
    right: -1px;
    top: 52%;
    height: 1.5px;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      rgba(255, 87, 87, 0.14),
      rgba(255, 114, 114, 0.88),
      rgba(255, 87, 87, 0.14)
    );
    box-shadow: 0 0 8px rgba(255, 87, 87, 0.34);
    transform: rotate(-5deg);
  }

  .retired-rip-status {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: rgba(255, 245, 227, 0.92);
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
  }

  .retired-rip-status::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: rgba(255, 114, 114, 0.8);
    box-shadow: 0 0 8px rgba(255, 114, 114, 0.35);
  }

  @keyframes retiredRipAuraPulse {
    0% {
      opacity: 0.4;
      transform: scale(0.96);
    }
    100% {
      opacity: 0.82;
      transform: scale(1.08);
    }
  }

  @keyframes retiredRipGhostBob {
    0% {
      margin-top: 0;
    }
    50% {
      margin-top: -4px;
    }
    100% {
      margin-top: 0;
    }
  }

  @keyframes retiredRipGhostTilt {
    0% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }

  @keyframes retiredRipGhostDriftA {
    0% {
      transform: translateX(-1px);
    }
    100% {
      transform: translateX(2px);
    }
  }

  @keyframes retiredRipGhostDriftB {
    0% {
      transform: translateX(1px);
    }
    100% {
      transform: translateX(-2px);
    }
  }

  @keyframes retiredRipGhostDriftC {
    0% {
      transform: translateX(-1px);
    }
    100% {
      transform: translateX(1px);
    }
  }

  @keyframes retiredRipGhostRoamA {
    0% {
      left: 0;
      top: 18px;
    }
    18% {
      left: calc(26% - 8px);
      top: -16px;
    }
    36% {
      left: calc(56% - 10px);
      top: -12px;
    }
    56% {
      left: calc(100% - 28px);
      top: 10px;
    }
    78% {
      left: calc(70% - 18px);
      top: 26px;
    }
    100% {
      left: 0;
      top: 18px;
    }
  }

  @keyframes retiredRipGhostRoamB {
    0% {
      left: calc(50% - 10px);
      top: -10px;
    }
    16% {
      left: calc(100% - 22px);
      top: -2px;
    }
    34% {
      left: calc(100% - 16px);
      top: 22px;
    }
    58% {
      left: calc(42% - 8px);
      top: 28px;
    }
    76% {
      left: 2px;
      top: 8px;
    }
    100% {
      left: calc(50% - 10px);
      top: -10px;
    }
  }

  @keyframes retiredRipGhostRoamC {
    0% {
      left: calc(100% - 24px);
      top: 14px;
    }
    20% {
      left: calc(72% - 14px);
      top: 30px;
    }
    44% {
      left: calc(28% - 8px);
      top: 24px;
    }
    66% {
      left: 0;
      top: 0;
    }
    84% {
      left: calc(62% - 10px);
      top: -18px;
    }
    100% {
      left: calc(100% - 24px);
      top: 14px;
    }
  }
`;

function injectStyles(id, css) {
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}

export default function RetiredRipText({
  text = "리처드벨",
  badge = "RIP",
  status = "접음",
}) {
  useEffect(() => {
    injectStyles("retired-rip-text-styles", CSS);
  }, []);

  return (
    <span className="retired-rip-scene">
      <span className="retired-rip-aura" aria-hidden="true" />
      <span className="retired-rip-ghost-track" aria-hidden="true">
        {GHOSTS.map((ghost) => (
          <span key={ghost} className={`retired-rip-ghost ${ghost}`}>
            <span className="retired-rip-ghost-shell">
              <span className="retired-rip-ghost-body">
                <span className="retired-rip-ghost-eye left" />
                <span className="retired-rip-ghost-eye right" />
                <span className="retired-rip-ghost-blush left" />
                <span className="retired-rip-ghost-blush right" />
                <span className="retired-rip-ghost-mouth" />
              </span>
            </span>
          </span>
        ))}
      </span>
      <span className="retired-rip-card">
        <span className="retired-rip-badge">{badge}</span>
        <span className="retired-rip-text">{text}</span>
        <span className="retired-rip-status">{status}</span>
      </span>
    </span>
  );
}
