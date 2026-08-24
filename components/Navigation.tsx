"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#global", label: "Global" },
  { href: "#articles", label: "Articles" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="nav-name" href="#top" aria-label="Joseph Elsayyid, home">
          Joseph Elsayyid
        </a>
        <button
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
