/**
 * MyCursor — Spotlight / Color-Reveal Effect
 * ─────────────────────────────────────────────────────────────────
 * Drives the CSS variable system that powers .mask-content in index.css
 *
 * Variables written every frame via rAF:
 *   --m-x      → cursor X (viewport coords, direct = no lag)
 *   --m-y      → cursor Y (viewport coords, direct = no lag)
 *   --radius   → spotlight radius (lerped for smooth grow/shrink)
 *   --scroll-y → page scroll offset (read every frame, stays in sync with Lenis)
 *
 * Behaviour:
 *   • Default radius   : 25px  (tiny dot)
 *   • On h1/h2/h3/h4  : 140px (large reveal circle)
 *   • Add .no-grow     : prevents expansion on that element
 *   • Add .hover-target: forces expansion on any custom element
 * ─────────────────────────────────────────────────────────────────
 */

import { useEffect } from "react";

export default function MyCursor() {
  useEffect(() => {
    const root = document.documentElement;

    // Initial values
    root.style.setProperty("--m-x",      `${window.innerWidth  / 2}px`);
    root.style.setProperty("--m-y",      `${window.innerHeight / 2}px`);
    root.style.setProperty("--radius",   "25px");
    root.style.setProperty("--scroll-y", `${window.scrollY}px`);

    let targetRadius  = 25;
    let currentRadius = 25;
    let rafId;

    const lerp = (a, b, t) => a + (b - a) * t;

    // Single rAF loop — radius lerp + scroll sync every frame
    const loop = () => {
      currentRadius = lerp(currentRadius, targetRadius, 0.12);
      root.style.setProperty("--radius", `${currentRadius.toFixed(1)}px`);
      root.style.setProperty(
        "--scroll-y",
        `${window.scrollY || document.documentElement.scrollTop}px`
      );
      rafId = requestAnimationFrame(loop);
    };

    // Position: direct, zero lag — lerping this desyncs the mask
    const handleMove = (e) => {
      root.style.setProperty("--m-x", `${e.clientX}px`);
      root.style.setProperty("--m-y", `${e.clientY}px`);
    };

    // Only headings grow the spotlight — add .hover-target to opt-in others
    const handleHover = (e) => {
      const isTarget = e.target.closest("h1, h2, h3, h4, .hover-target");
      const isNoGrow = e.target.closest(".no-grow");
      targetRadius = (isTarget && !isNoGrow) ? 140 : 25;
    };

    window.addEventListener("mousemove", handleMove,  { passive: true });
    window.addEventListener("mouseover", handleHover, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}