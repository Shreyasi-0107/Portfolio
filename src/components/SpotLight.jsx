// SpotLight.jsx
// ─────────────────────────────────────────────────────────────────
// This component is now a thin wrapper — the actual spotlight effect
// is driven entirely by CSS variables (--m-x, --m-y, --radius,
// --scroll-y) that MyCursor.jsx writes every frame via rAF.
//
// The old React-state approach (mousePos, isLarge) created a second
// conflicting system that caused:
//   • Cursor lag while scrolling   (clientY + scrollY on non-fixed el)
//   • Wrong hover text             (two independent clip-path layers)
//
// Now SpotLight is just a semantic passthrough — the real work is in
// index.css (.mask-content) and MyCursor.jsx.
// ─────────────────────────────────────────────────────────────────

export default function Spotlight({ children }) {
  // No state, no effects — MyCursor owns all cursor logic.
  return <>{children}</>;
}