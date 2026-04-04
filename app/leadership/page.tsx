"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import GeographyMap from "@/components/GeographyMap";

const YCC_ITEMS = [
  {
    title: "Clarity AI Platform",
    text: "Led the team that got Yale to adopt the Clarity AI Platform university-wide — a negotiation that required convincing administrators that the risk of not adopting AI tools was greater than the risk of adopting them.",
  },
  {
    title: "Central Authentication Service",
    text: "Opened Yale's CAS to student developers. Before this, building anything that needed Yale authentication was effectively impossible for students. Now it's an API call.",
  },
  {
    title: "Anthropic Partnership",
    text: "Brokered a partnership with Anthropic bringing Claude credits to Yale labs and research groups. Framed it as competitive risk against Harvard — because it was.",
  },
  {
    title: "Industry Partnerships",
    text: "Forged technology partnerships under the YCC name, creating a channel between the tech industry and Yale student government that didn't exist before.",
  },
  {
    title: "Institutional Navigation",
    text: "Learned to navigate incentive structures that no engineering course teaches — keeping administrators invested by making their participation visible, and making inaction feel costlier than action.",
  },
];

const DIPLOMATIC_EXPERIENCES = [
  {
    title: "U.S. State Department NSLI-Y Taiwan Scholar",
    period: "2020 – 2022",
    description:
      "Mandarin language immersion and field research in Taipei. Full-year scholarship from the State Department's National Security Language Initiative for Youth.",
    accent: "Mandarin OPI Certified",
  },
  {
    title: "Congress-Bundestag Youth Exchange Scholar",
    period: "Germany",
    description:
      "Innovation policy and European tech ecosystem research through the German Bundestag exchange program. Lived and studied in Germany, investigating how policy frameworks shape technology adoption.",
    accent: "Bundestag Fellow",
  },
  {
    title: "U.S. Youth Ambassador — Argentina & Chile",
    period: "Bureau of Educational and Cultural Affairs",
    description:
      "Selected by the State Department's Bureau of Educational and Cultural Affairs. Cross-cultural exchange work across South America.",
    accent: "State Dept. Selected",
  },
  {
    title: "Congressional Advisory Council Leader",
    period: "NJ-7th District",
    description:
      "Led 12-member policy advisory team. Presented directly to Representative Tom Malinowski on technology policy, education, and constituent priorities.",
    accent: "Committee Leader",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 page-section">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-8">
            <div className="editorial-divider" />
            <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
              Leadership & Diplomacy
            </span>
          </div>
        </ScrollReveal>

        <TextReveal
          text={"Systems aren't\njust technical"}
          as="h1"
          mode="line"
          delay={0.2}
          className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight font-display"
        />

        <ScrollReveal delay={0.5}>
          <p className="mt-8 max-w-2xl text-lg text-text-secondary font-body leading-relaxed">
            The hardest engineering problem I&rsquo;ve encountered wasn&rsquo;t
            in a lab — it was convincing a 300-year-old institution to adopt
            technology it didn&rsquo;t know it needed. That work taught me that
            building systems that actually get used requires navigating people,
            politics, and incentives as carefully as code.
          </p>
        </ScrollReveal>
      </section>

      {/* Geography map */}
      <section className="relative py-16 md:py-24 page-section">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-12">
            <div className="editorial-divider" />
            <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
              Eight countries · Four continents
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <GeographyMap />
        </ScrollReveal>
      </section>

      {/* YCC Tech Division */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="page-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky header */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="lg:sticky lg:top-32">
                  <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-6">
                    Yale College Council
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-4 leading-tight">
                    Tech Division Chair
                  </h2>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    Running what I&rsquo;d call an influence operation inside a
                    major university — using the formal mechanisms of student
                    government to push institutional technology adoption at a
                    pace administrators weren&rsquo;t prepared for.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Items */}
            <div className="lg:col-span-7 lg:col-start-6">
              {YCC_ITEMS.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div
                    className={`py-8 ${
                      i < YCC_ITEMS.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <h3 className="font-display text-2xl text-text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-base text-text-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative py-24 md:py-32 bg-bg-secondary">
        <div className="page-section max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-text-primary">
              &ldquo;I&rsquo;m AI-pilled and live in the terminal. But the
              biggest lever I&rsquo;ve ever pulled was getting a university to
              change how it thinks about technology.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Government & Diplomatic */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="page-section">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <div className="editorial-divider" />
              <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
                Government & Diplomatic Experience
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {DIPLOMATIC_EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 0.1}>
                <div className="bg-bg-primary p-8 md:p-12 h-full flex flex-col">
                  <span className="inline-block font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-4 border border-accent/30 px-3 py-1 rounded-full self-start">
                    {exp.accent}
                  </span>
                  <h3 className="font-display text-2xl text-text-primary mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs text-text-muted tracking-wider mb-4">
                    {exp.period}
                  </p>
                  <p className="font-body text-sm text-text-secondary leading-relaxed mt-auto">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Advisory */}
      <section className="relative py-16 md:py-24 border-t border-border page-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-4">
                Additional
              </span>
              <h3 className="font-display text-3xl text-text-primary mb-2">
                Student Advisory, Yale College
              </h3>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ScrollReveal delay={0.15}>
              <p className="font-body text-base text-text-secondary leading-relaxed">
                Advising on strategic resource allocation for Science &
                Quantitative Reasoning under Dean Belperron. The work that
                shapes which programs get funded and which don&rsquo;t — where
                institutional priorities become concrete decisions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border page-section">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ScrollReveal>
            <p className="font-display text-3xl md:text-4xl text-text-primary">
              What I&rsquo;ve built with my hands.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="/projects"
              className="group inline-flex items-center gap-4 font-mono text-sm text-accent tracking-wider uppercase"
            >
              See Projects
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                className="text-accent transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
