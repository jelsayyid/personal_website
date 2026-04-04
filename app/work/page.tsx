"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

interface Experience {
  id: string;
  location: string;
  locationSub: string;
  period: string;
  org: string;
  role: string;
  description: string[];
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: "kuan-lab",
    location: "NEW HAVEN",
    locationSub: "Connecticut, USA",
    period: "Jan 2026 — Present",
    org: "Kuan Lab, Yale School of Medicine",
    role: "Data Systems & Analytics Pipeline",
    description: [
      "Senior project. Building the post-segmentation data infrastructure for large-scale 3D medical imaging.",
      "Designed modular pipeline architecture — HDF5/Zarr storage, graph construction from segmented volumes, automated validation modules, diagnostic visualization.",
      "The kind of systems work where the data is measured in terabytes and the margin for silent corruption is zero.",
    ],
    tags: ["Python", "HDF5", "Zarr", "Graph Theory", "Medical Imaging"],
  },
  {
    id: "spintronics",
    location: "HONG KONG",
    locationSub: "China",
    period: "May — Aug 2025",
    org: "Spintronic Quantum Material Laboratory",
    role: "AI Hardware-Software Research",
    description: [
      "Designed software interfaces for a next-generation MTJ-based in-memory AI accelerator targeting the Zynq 7020 FPGA.",
      "Built end-to-end validation pipelines benchmarking power consumption, latency, and throughput against conventional architectures.",
      "The thesis: when you co-design the compute and the memory, you can break assumptions that have constrained AI hardware for a decade.",
    ],
    tags: ["FPGA", "Zynq 7020", "MTJ", "Verilog", "Python"],
  },
  {
    id: "yicl",
    location: "NEW HAVEN",
    locationSub: "Connecticut, USA",
    period: "Sept 2024 — Sept 2025",
    org: "Yale Intelligent Computing Lab",
    role: "AI Systems Design",
    description: [
      "End-to-end deployment of transformer models on Raspberry Pi and embedded Linux platforms.",
      "Built profiling frameworks to characterize architectural tradeoffs — latency, memory footprint, power draw, accuracy — for models that need to run at the edge, not in a data center.",
      "Proved that meaningful inference is possible on hardware that costs less than a textbook.",
    ],
    tags: ["PyTorch", "Raspberry Pi", "Edge ML", "Profiling", "Linux"],
  },
  {
    id: "uclouvain",
    location: "LOUVAIN-LA-NEUVE",
    locationSub: "Belgium",
    period: "May — Sept 2024",
    org: "Martin Andraud Group, UCLouvain",
    role: "Software-Hardware Co-Design",
    description: [
      "22-nm mixed-signal Compute-In-Memory accelerator. The kind of chip work where you're thinking about transistor-level behavior and system-level architecture simultaneously.",
      "Wrote RISC-V control firmware. Designed calibration routines that improved reliability by 25–45% across operating conditions.",
      "Learned that the gap between a chip that works in simulation and a chip that works in silicon is where engineering actually happens.",
    ],
    tags: ["22nm CMOS", "RISC-V", "CIM", "Mixed-Signal", "C/C++"],
  },
  {
    id: "futuretec",
    location: "AMMAN",
    locationSub: "Jordan",
    period: "Jul — Aug 2023",
    org: "FutureTEC",
    role: "Security Operations",
    description: [
      "SIEM analysis and incident response in a cross-cultural environment, operating entirely in Arabic.",
      "Threat monitoring, log correlation, vulnerability assessment. The work that happens between an alert firing and a decision being made.",
    ],
    tags: ["SIEM", "Incident Response", "Arabic", "Security Ops"],
  },
];

function ExperienceSpread({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const locationY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex flex-col justify-center py-24 md:py-32 ${
        index > 0 ? "border-t border-border" : ""
      }`}
    >
      {/* Giant location text */}
      <motion.div
        style={{ y: locationY }}
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full"
      >
        <span
          className={`block font-display text-[clamp(5rem,18vw,16rem)] leading-none tracking-tight text-text-primary opacity-[0.03] whitespace-nowrap ${
            isEven ? "text-left pl-[var(--page-padding)]" : "text-right pr-[var(--page-padding)]"
          }`}
        >
          {exp.location}
        </span>
      </motion.div>

      <div className="relative z-10 page-section">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 ${
            isEven ? "" : "lg:direction-rtl"
          }`}
        >
          {/* Left column - metadata */}
          <div
            className={`lg:col-span-4 ${
              isEven ? "lg:col-start-1" : "lg:col-start-9"
            }`}
            style={{ direction: "ltr" }}
          >
            <ScrollReveal>
              <div className="sticky top-32">
                <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-6">
                  0{index + 1} / 0{EXPERIENCES.length}
                </span>

                <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-2">
                  {exp.location}
                </h3>
                <p className="font-body text-sm text-text-muted mb-6">
                  {exp.locationSub}
                </p>

                <div className="editorial-divider mb-6" />

                <p className="font-mono text-xs text-text-secondary tracking-wider mb-1">
                  {exp.period}
                </p>
                <p className="font-body text-sm text-text-secondary font-medium">
                  {exp.org}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-mono text-[10px] text-text-muted border border-border rounded-full tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - content */}
          <div
            className={`lg:col-span-7 ${
              isEven ? "lg:col-start-6" : "lg:col-start-1"
            }`}
            style={{ direction: "ltr" }}
          >
            <ScrollReveal delay={0.15}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8 leading-tight">
                {exp.role}
              </h2>
            </ScrollReveal>

            {exp.description.map((para, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                <p
                  className={`text-base md:text-lg leading-relaxed mb-6 ${
                    i === exp.description.length - 1
                      ? "text-text-muted italic font-display text-xl md:text-2xl leading-snug"
                      : "text-text-secondary font-body"
                  }`}
                >
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 page-section">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-8">
            <div className="editorial-divider" />
            <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
              Experience
            </span>
          </div>
        </ScrollReveal>

        <TextReveal
          text={"Where the\nwork happened"}
          as="h1"
          mode="line"
          delay={0.2}
          className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight font-display"
        />

        <ScrollReveal delay={0.5}>
          <p className="mt-8 max-w-2xl text-lg text-text-secondary font-body leading-relaxed">
            Five countries. Three continents. From 22-nanometer transistors in
            Belgium to AI accelerators in Hong Kong to medical data
            infrastructure at Yale. Each role shaped how I think about building
            systems.
          </p>
        </ScrollReveal>
      </section>

      {/* Experience spreads */}
      {EXPERIENCES.map((exp, i) => (
        <ExperienceSpread key={exp.id} exp={exp} index={i} />
      ))}

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 border-t border-border page-section">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ScrollReveal>
            <p className="font-display text-3xl md:text-4xl text-text-primary">
              Engineering is only half the story.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="/leadership"
              className="group inline-flex items-center gap-4 font-mono text-sm text-accent tracking-wider uppercase"
            >
              See Leadership
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
