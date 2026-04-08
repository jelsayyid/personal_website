"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 page-section">
      <div className="max-w-2xl">
        <ScrollReveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-16">
            About
          </h1>
        </ScrollReveal>

        <div className="space-y-6 mb-16">
          <ScrollReveal>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              I&rsquo;m an engineer finishing my B.S. in Electrical Engineering
              & Computer Science at Yale. Over the last four years, my work has
              ranged from 22-nanometer transistors in Belgium to AI accelerators
              in Hong Kong to institutional technology adoption at Yale&rsquo;s
              student government.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Before Yale, I was a U.S. State Department fellow in Taiwan, a
              Congress-Bundestag scholar in Germany, and a youth ambassador in
              Argentina and Chile. I speak English, Mandarin, Arabic, Spanish,
              and French.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              I&rsquo;m applying to Yale SOM&rsquo;s MMS-TM program because the
              systems I want to build next require understanding markets and
              institutions as well as I understand circuits and code.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="border-t border-border pt-8 space-y-6">
            <div>
              <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase block mb-3">
                Education
              </span>
              <p className="font-body text-sm text-text-primary">
                Yale University
              </p>
              <p className="font-body text-sm text-text-secondary">
                B.S. Electrical Engineering & Computer Science, May 2026
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase block mb-3">
                Contact
              </span>
              <div className="space-y-1">
                <a
                  href="mailto:elsayyidj@gmail.com"
                  className="block font-body text-sm text-text-primary hover:text-accent transition-colors duration-300"
                >
                  elsayyidj@gmail.com
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-sm text-text-primary hover:text-accent transition-colors duration-300"
                >
                  Resume (PDF)
                </a>
                <p className="font-body text-sm text-text-secondary">
                  New Haven, CT
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
