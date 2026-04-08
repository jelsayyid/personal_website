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
    ],
  },
  {
    org: "Spintronic Quantum Material Laboratory",
    period: "May – Aug 2025",
    location: "Hong Kong",
    description: [
      "Designed software interfaces for a next-generation MTJ-based in-memory AI accelerator targeting the Zynq 7020 FPGA.",
      "Built end-to-end validation pipelines benchmarking power consumption, latency, and throughput against conventional architectures.",
    ],
  },
  {
    org: "Yale Intelligent Computing Lab",
    period: "Sept 2024 – Sept 2025",
    location: "New Haven",
    description: [
      "End-to-end deployment of transformer models on Raspberry Pi and embedded Linux platforms.",
      "Built profiling frameworks to characterize architectural tradeoffs (latency, memory footprint, power draw, accuracy) for models that need to run at the edge, not in a data center.",
    ],
  },
  {
    org: "Martin Andraud Group, UCLouvain",
    period: "May – Sept 2024",
    location: "Belgium",
    description: [
      "22nm mixed-signal Compute-In-Memory accelerator.",
      "Wrote RISC-V control firmware. Designed calibration routines that improved reliability by 25–45% across operating conditions.",
    ],
  },
  {
    org: "FutureTEC",
    period: "Jul – Aug 2023",
    location: "Amman, Jordan",
    description: [
      "SIEM analysis and incident response in a cross-cultural environment, leveraging Arabic communication skills.",
      "Threat monitoring, log correlation, vulnerability assessment.",
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
