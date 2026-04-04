"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="page-section py-16 md:py-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                Joseph Elsayyid
              </h3>
              <p className="font-mono text-xs text-text-muted tracking-wider uppercase">
                Yale EECS &rsquo;26 &mdash; Engineer, Builder, Strategist
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <a
                href="mailto:elsayyidj@gmail.com"
                className="font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                elsayyidj@gmail.com
              </a>
              <div className="flex gap-6">
                <Link
                  href="/about"
                  className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors duration-300 uppercase tracking-wider"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors duration-300 uppercase tracking-wider"
                >
                  Work
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors duration-300 uppercase tracking-wider"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[10px] text-text-muted tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Joseph Elsayyid
          </p>
          <p className="font-mono text-[10px] text-text-muted tracking-wider">
            Built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
