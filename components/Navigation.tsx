"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#global", label: "Global" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`site-nav${scrolled ? " is-scrolled" : ""}${mobileOpen ? " is-open" : ""}`}
      aria-label="Primary navigation"
    >
      <div className="nav-inner">
        <a className="nav-mark" href="#top" aria-label="Joseph Elsayyid, home">
          JE
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="primary-links"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true" />
        </button>
        <div className={`nav-links${mobileOpen ? " is-open" : ""}`} id="primary-links">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
