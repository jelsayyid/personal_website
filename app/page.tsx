"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

const BackgroundCanvas = dynamic(
  () => import("@/components/BackgroundCanvas"),
  { ssr: false }
);

const DOMAINS = [
  {
    label: "Hardware",
    detail: "22nm chips · FPGA · In-memory compute",
    href: "/work",
  },
  {
    label: "Systems",
    detail: "AI accelerators · Edge ML · Data pipelines",
    href: "/work",
  },
  {
    label: "Institutions",
    detail: "Yale governance · Policy · Anthropic partnership",
    href: "/leadership",
  },
  {
    label: "Geographies",
    detail: "Belgium · Hong Kong · Jordan · Taiwan · Germany",
    href: "/leadership",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <BackgroundCanvas />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24 page-section"
      >
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-mono text-xs text-accent tracking-[0.3em] uppercase">
              Engineer &mdash; Builder &mdash; Strategist
            </span>
          </motion.div>

          {/* Name */}
          <div className="mb-8">
            <TextReveal
              text={"Joseph\nElsayyid"}
              as="h1"
              mode="line"
              delay={0.4}
              className="text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] tracking-tight font-display"
            />
          </div>

          {/* Thesis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-xl text-lg md:text-xl text-text-secondary font-body leading-relaxed mb-12"
          >
            I build systems that work &mdash; across chips, institutions, and
            continents. Currently finishing my B.S. in Electrical Engineering &
            Computer Science at Yale.
          </motion.p>

          {/* Current status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-muted tracking-wider"
          >
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              Senior @ Yale EECS
            </span>
            <span className="text-border">|</span>
            <span>Chair, YCC Tech Division</span>
            <span className="text-border">|</span>
            <span>Building with My-Fi</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 right-[var(--page-padding)] flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>

      {/* Domains section */}
      <section className="relative z-10 py-32 md:py-48 page-section">
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-6 mb-4">
            <div className="editorial-divider" />
            <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
              Across domains
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {DOMAINS.map((domain, i) => (
            <ScrollReveal key={domain.label} delay={i * 0.1}>
              <Link href={domain.href}>
                <div className="group bg-bg-primary p-8 md:p-12 hover:bg-bg-secondary transition-colors duration-500">
                  <span className="block font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-4">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                    {domain.label}
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    {domain.detail}
                  </p>
                  <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-mono text-xs text-accent tracking-wider">
                      Explore
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-accent"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pull quote section */}
      <section className="relative z-10 py-32 md:py-48 page-section">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-text-primary">
              &ldquo;I found myself navigating something no engineering course
              prepared me for &mdash; the gap between what&rsquo;s technically
              possible and what institutions are willing to adopt.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="editorial-divider mx-auto mt-10 mb-6" />
            <p className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">
              On building at the intersection of technology and institutions
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative z-10 py-24 border-t border-border page-section">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary">
              See the work.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-4 font-mono text-sm text-accent tracking-wider uppercase hover:gap-6 transition-all duration-500"
            >
              View Experience
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
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
