"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#engineering", label: "Engineering" },
  { href: "#leadership", label: "Leadership" },
  { href: "#global", label: "Global" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="nav-name" href="#top" aria-label="Joseph Elsayyid, home">
          Joseph Elsayyid
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-links"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
        <div className={`nav-links${mobileOpen ? " is-open" : ""}`} id="primary-links">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
