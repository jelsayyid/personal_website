"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="h-full flex items-center justify-between page-section">
          <Link
            href="/"
            className="relative z-50 font-display text-xl tracking-tight text-text-primary hover:text-accent transition-colors duration-300"
          >
            J.E.
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 py-1 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 4 : 0,
                width: mobileOpen ? 24 : 24,
              }}
              className="block h-px bg-text-primary origin-center"
              style={{ width: 24 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -4 : 0,
                width: mobileOpen ? 24 : 16,
              }}
              className="block h-px bg-text-primary origin-center"
              style={{ width: 16 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col justify-center items-start h-full page-section">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-display text-5xl mb-6 transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-text-primary hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 font-mono text-xs text-text-muted tracking-wider"
              >
                elsayyidj@gmail.com
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
