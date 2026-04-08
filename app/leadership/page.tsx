"use client";

import ScrollReveal from "@/components/ScrollReveal";

const YCC_INITIATIVES = [
  "Clarity AI Platform adoption university-wide",
  "Opened Yale's CAS to student developers",
  "Anthropic partnership for Claude credits in Yale labs",
  "Industry partnership channel between tech companies and student government",
];

const DIPLOMATIC = [
  {
    title: "U.S. State Department NSLI-Y Scholar",
    detail: "Taiwan, 2020–2022. Mandarin immersion.",
  },
  {
    title: "Congress-Bundestag Youth Exchange Scholar",
    detail: "Germany. Innovation policy research.",
  },
  {
    title: "U.S. Youth Ambassador",
    detail:
      "Argentina & Chile. State Department Bureau of Educational and Cultural Affairs.",
  },
  {
    title: "Congressional Advisory Council Leader",
    detail:
      "NJ-7th District. Presented policy recommendations to Rep. Tom Malinowski.",
  },
];

export default function LeadershipPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 page-section">
      <div className="max-w-2xl">
        <ScrollReveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-16">
            Leadership
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display text-xl text-text-primary mb-4">
              YCC Tech Division Chair
            </h2>
            <ul className="space-y-2">
              {YCC_INITIATIVES.map((item, i) => (
                <li
                  key={i}
                  className="font-body text-sm text-text-secondary leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mb-12 pb-12 border-b border-border">
            <h2 className="font-display text-xl text-text-primary mb-2">
              Student Advisory, Yale College
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Resource allocation for Science & Quantitative Reasoning under
              Dean Belperron.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase block mb-8">
              Government & Diplomatic
            </span>
            {DIPLOMATIC.map((exp, i) => (
              <div
                key={i}
                className={`py-6 ${
                  i < DIPLOMATIC.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <h3 className="font-display text-lg text-text-primary mb-1">
                  {exp.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {exp.detail}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
