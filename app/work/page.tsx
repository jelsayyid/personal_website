"use client";

import ScrollReveal from "@/components/ScrollReveal";

const EXPERIENCES = [
  {
    org: "Kuan Lab, Yale School of Medicine",
    period: "Jan 2026 – Present",
    location: "New Haven",
    description: [
      "Senior project. Building the post-segmentation data infrastructure for large-scale 3D medical imaging.",
      "Designed modular pipeline architecture: HDF5/Zarr storage, graph construction from segmented volumes, automated validation modules, diagnostic visualization.",
      "The kind of systems work where the data is measured in terabytes and the margin for silent corruption is zero.",
    ],
  },
  {
    org: "Spintronic Quantum Material Laboratory",
    period: "May – Aug 2025",
    location: "Hong Kong",
    description: [
      "Designed software interfaces for a next-generation MTJ-based in-memory AI accelerator targeting the Zynq 7020 FPGA.",
      "Built end-to-end validation pipelines benchmarking power consumption, latency, and throughput against conventional architectures.",
      "The thesis: when you co-design the compute and the memory, you can break assumptions that have constrained AI hardware for a decade.",
    ],
  },
  {
    org: "Yale Intelligent Computing Lab",
    period: "Sept 2024 – Sept 2025",
    location: "New Haven",
    description: [
      "End-to-end deployment of transformer models on Raspberry Pi and embedded Linux platforms.",
      "Built profiling frameworks to characterize architectural tradeoffs (latency, memory footprint, power draw, accuracy) for models that need to run at the edge, not in a data center.",
      "Proved that meaningful inference is possible on hardware that costs less than a textbook.",
    ],
  },
  {
    org: "Martin Andraud Group, UCLouvain",
    period: "May – Sept 2024",
    location: "Belgium",
    description: [
      "22nm mixed-signal Compute-In-Memory accelerator. The kind of chip work where you're thinking about transistor-level behavior and system-level architecture simultaneously.",
      "Wrote RISC-V control firmware. Designed calibration routines that improved reliability by 25–45% across operating conditions.",
      "Learned that the gap between a chip that works in simulation and a chip that works in silicon is where engineering actually happens.",
    ],
  },
  {
    org: "FutureTEC",
    period: "Jul – Aug 2023",
    location: "Amman, Jordan",
    description: [
      "SIEM analysis and incident response in a cross-cultural environment, operating entirely in Arabic.",
      "Threat monitoring, log correlation, vulnerability assessment. The work that happens between an alert firing and a decision being made.",
    ],
  },
];

export default function WorkPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 page-section">
      <div className="max-w-2xl">
        <ScrollReveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-16">
            Work
          </h1>
        </ScrollReveal>

        {EXPERIENCES.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div
              className={`py-8 ${
                i < EXPERIENCES.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                <h2 className="font-display text-xl text-text-primary">
                  {exp.org}
                </h2>
                <span className="font-mono text-xs text-text-muted tracking-wider shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="font-mono text-xs text-text-muted tracking-wider mb-3">
                {exp.location}
              </p>
              {exp.description.map((para, j) => (
                <p
                  key={j}
                  className="font-body text-sm text-text-secondary leading-relaxed mb-2 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
