"use client";

import ScrollReveal from "@/components/ScrollReveal";

const EXPERIENCES = [
  {
    org: "Kuan Lab, Yale School of Medicine",
    period: "Jan 2026 – Present",
    location: "New Haven",
    description:
      "Post-segmentation data infrastructure for large-scale 3D medical imaging. HDF5/Zarr storage, graph construction, automated validation.",
  },
  {
    org: "Spintronic Quantum Material Laboratory",
    period: "May – Aug 2025",
    location: "Hong Kong",
    description:
      "Software interfaces for an MTJ-based in-memory AI accelerator targeting the Zynq 7020 FPGA. End-to-end validation pipelines for power, latency, and throughput.",
  },
  {
    org: "Yale Intelligent Computing Lab",
    period: "Sept 2024 – Sept 2025",
    location: "New Haven",
    description:
      "Deploying transformer models on Raspberry Pi and embedded Linux. Profiling latency, memory, power, and accuracy tradeoffs at the edge.",
  },
  {
    org: "Martin Andraud Group, UCLouvain",
    period: "May – Sept 2024",
    location: "Belgium",
    description:
      "22nm mixed-signal compute-in-memory accelerator. RISC-V firmware and calibration routines that improved reliability by 25–45%.",
  },
  {
    org: "FutureTEC",
    period: "Jul – Aug 2023",
    location: "Amman, Jordan",
    description:
      "SIEM analysis and incident response, operating entirely in Arabic.",
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
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {exp.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
