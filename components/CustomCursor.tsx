"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (hidden) setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);

    const animate = () => {
      const lerp = 0.15;
      ringPos.current.x +=
        (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y +=
        (mouse.current.y - ringPos.current.y) * lerp;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${hovering ? 1.5 : 1})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    // Track hoverable elements
    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-hover], input, textarea, select")
      ) {
        setHovering(true);
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-hover], input, textarea, select")
      ) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hidden, hovering]);

  // Don't render on touch devices (SSR safe)
  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: "50%",
          backgroundColor: hovering ? "var(--accent)" : "var(--text-primary)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.3s, background-color 0.3s",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block"
        style={{
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: "50%",
          border: `1px solid ${hovering ? "var(--accent)" : "rgba(232,228,222,0.3)"}`,
          opacity: hidden ? 0 : 1,
          transition:
            "opacity 0.3s, border-color 0.3s, transform 0.1s ease-out",
          willChange: "transform",
        }}
      />
    </>
  );
}
