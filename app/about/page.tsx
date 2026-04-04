"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

const LANGUAGES = [
  { name: "English", level: "Native" },
  { name: "Mandarin", level: "OPI Certified" },
  { name: "Arabic", level: "OPI Certified" },
  { name: "Spanish", level: "AP Certified" },
  { name: "French", level: "Intermediate" },
];

const HONORS = [
  { title: "Yale STARS Science Fellowship", year: "2024" },
  { title: "Congressional Commendation", year: "2022" },
  { title: "U.S. State Department Fellow", year: "2020 – 2022" },
];

const ROLES = [
  "Elected Yale Senator",
  "Yale STARS Science Fellow",
  "Chair, YCC Tech Division",
  "Student Advisor, Yale College",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 page-section">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-8">
            <div className="editorial-divider" />
            <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
              About
            </span>
          </div>
        </ScrollReveal>

        <TextReveal
          text={"Joseph\nElsayyid"}
          as="h1"
          mode="line"
          delay={0.2}
          className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight font-display"
        />
      </section>

      {/* Bio section — asymmetric two-column */}
      <section className="page-section pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — main bio */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                I&rsquo;m an engineer who builds across the full stack of
                complexity — from 22-nanometer transistors to university-wide
                technology strategy. Currently finishing my B.S. in Electrical
                Engineering & Computer Science at Yale, where I&rsquo;ve spent
                the last four years doing work that doesn&rsquo;t fit neatly
                into a single discipline.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                I&rsquo;ve designed compute-in-memory chips in Belgium, built AI
                accelerator firmware in Hong Kong, architected medical data
                pipelines at Yale&rsquo;s School of Medicine, and simultaneously
                ran the technology arm of Yale&rsquo;s student government —
                where I brokered an Anthropic partnership, opened Yale&rsquo;s
                authentication system to student developers, and pushed the
                institution to adopt AI tools by making inaction feel riskier
                than action.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                Before Yale, I was a U.S. State Department fellow in Taiwan, a
                Congress-Bundestag scholar in Germany, and a youth ambassador in
                Argentina and Chile. I speak Mandarin, Arabic, Spanish, and
                French. I led a congressional advisory council in New Jersey and
                presented policy recommendations to a sitting member of
                Congress.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-body text-lg md:text-xl text-text-primary leading-relaxed font-display">
                This summer, I join My-Fi as a founding engineer. I&rsquo;m also
                applying to Yale SOM&rsquo;s MMS-TM program — because the
                systems I want to build next require understanding markets and
                institutions as well as I understand circuits and code.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — structured info */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32 space-y-10">
              {/* Education */}
              <ScrollReveal delay={0.15}>
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-4">
                    Education
                  </span>
                  <h3 className="font-display text-xl text-text-primary mb-1">
                    Yale University
                  </h3>
                  <p className="font-body text-sm text-text-secondary mb-1">
                    B.S. Electrical Engineering & Computer Science
                  </p>
                  <p className="font-mono text-xs text-text-muted tracking-wider">
                    May 2026
                  </p>
                </div>
              </ScrollReveal>

              {/* Roles */}
              <ScrollReveal delay={0.2}>
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-4">
                    Roles
                  </span>
                  <ul className="space-y-2">
                    {ROLES.map((role) => (
                      <li
                        key={role}
                        className="font-body text-sm text-text-secondary"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Languages */}
              <ScrollReveal delay={0.25}>
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-4">
                    Languages
                  </span>
                  <div className="space-y-2">
                    {LANGUAGES.map((lang) => (
                      <div
                        key={lang.name}
                        className="flex justify-between items-baseline"
                      >
                        <span className="font-body text-sm text-text-secondary">
                          {lang.name}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted tracking-wider">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Honors */}
              <ScrollReveal delay={0.3}>
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-4">
                    Honors
                  </span>
                  <div className="space-y-3">
                    {HONORS.map((honor) => (
                      <div key={honor.title}>
                        <p className="font-body text-sm text-text-secondary">
                          {honor.title}
                        </p>
                        <p className="font-mono text-[10px] text-text-muted tracking-wider">
                          {honor.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="relative py-24 md:py-32 border-t border-border page-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-6">
                Contact
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-tight mb-6">
                Let&rsquo;s talk.
              </h2>
              <p className="font-body text-base text-text-secondary leading-relaxed max-w-md">
                Whether it&rsquo;s about engineering, institutional strategy, or
                something at the intersection — I&rsquo;m always interested in
                conversations with people building things that matter.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={0.15}>
              <div className="space-y-8">
                <div>
                  <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase block mb-3">
                    Email
                  </span>
                  <a
                    href="mailto:elsayyidj@gmail.com"
                    className="font-body text-lg text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    elsayyidj@gmail.com
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase block mb-3">
                    Resume
                  </span>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 font-body text-lg text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    Download PDF
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    >
                      <path
                        d="M8 2v9M4 8l4 4 4-4M3 14h10"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase block mb-3">
                    Based in
                  </span>
                  <p className="font-body text-lg text-text-primary">
                    New Haven, CT
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
