"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  svgPattern: "circuit" | "dataflow" | "neural";
}

const PROJECTS: Project[] = [
  {
    id: "composting",
    number: "01",
    title: "Automated Composting System",
    subtitle: "Full-stack hardware-software product design",
    description: [
      "Designed and deployed an automated composting monitoring system across Yale's 14 residential dining halls.",
      "Microcontroller firmware managing sensor arrays — temperature, humidity, CO₂ — feeding into a closed-loop actuator control system. Event-driven architecture that responds to environmental conditions in real time.",
      "The engineering challenge wasn't any single sensor or actuator. It was building a system reliable enough to run unattended across 14 sites, with failure modes that degrade gracefully instead of catastrophically.",
    ],
    tags: [
      "Embedded C",
      "Sensor Fusion",
      "PCB Design",
      "Event-Driven",
      "IoT",
    ],
    svgPattern: "circuit",
  },
  {
    id: "resnet",
    number: "02",
    title: "Real-Time ResNet18 on Raspberry Pi",
    subtitle: "Edge ML inference at the hardware limit",
    description: [
      "Pruned and quantized ResNet18 for real-time computer vision inference on a Raspberry Pi — hardware that costs less than a textbook.",
      "Built roofline analysis frameworks to characterize the exact bottleneck (compute-bound vs. memory-bound) at each layer. Optimized power/latency tradeoffs to hit real-time performance within a 5W thermal envelope.",
      "Proved that meaningful computer vision doesn't require a GPU cluster — it requires understanding where your model actually spends its cycles.",
    ],
    tags: ["PyTorch", "ONNX", "Quantization", "Pruning", "ARM"],
    svgPattern: "neural",
  },
  {
    id: "gpt-fpga",
    number: "03",
    title: "GPT-Lite FPGA Optimization",
    subtitle: "NanoGPT on programmable silicon",
    description: [
      "Took NanoGPT and mapped it onto FPGA fabric — a fundamentally different compute paradigm than the GPU training pipelines the model was designed for.",
      "Model refactoring, aggressive quantization, custom profiling pipelines. Maintained 99% of baseline accuracy while dramatically reducing the compute and memory footprint.",
      "The result: a language model running on hardware you can hold in your hand, at a fraction of the power budget.",
    ],
    tags: ["FPGA", "Verilog", "NanoGPT", "Quantization", "HLS"],
    svgPattern: "dataflow",
  },
];

function ProjectSVG({ pattern }: { pattern: "circuit" | "dataflow" | "neural" }) {
  if (pattern === "circuit") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
        {/* Circuit board pattern */}
        <line x1="20" y1="60" x2="80" y2="60" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <line x1="80" y1="60" x2="80" y2="30" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <line x1="80" y1="30" x2="140" y2="30" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <line x1="140" y1="30" x2="140" y2="90" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <line x1="140" y1="90" x2="180" y2="90" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <line x1="50" y1="20" x2="50" y2="100" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        <line x1="110" y1="15" x2="110" y2="105" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        {/* Nodes */}
        <circle cx="20" cy="60" r="3" fill="var(--accent)" opacity="0.6" />
        <circle cx="80" cy="60" r="2" fill="var(--accent)" opacity="0.4" />
        <circle cx="80" cy="30" r="2" fill="var(--accent)" opacity="0.4" />
        <circle cx="140" cy="30" r="2" fill="var(--accent)" opacity="0.4" />
        <circle cx="140" cy="90" r="2" fill="var(--accent)" opacity="0.4" />
        <circle cx="180" cy="90" r="3" fill="var(--accent)" opacity="0.6" />
        {/* Component boxes */}
        <rect x="45" y="50" width="10" height="20" rx="1" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <rect x="105" y="20" width="10" height="20" rx="1" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <rect x="130" y="55" width="20" height="10" rx="1" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
      </svg>
    );
  }
  if (pattern === "dataflow") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
        {/* Data flow pattern */}
        <path d="M20 60 Q60 20 100 60 Q140 100 180 60" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
        <path d="M20 70 Q60 30 100 70 Q140 110 180 70" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        <path d="M20 50 Q60 10 100 50 Q140 90 180 50" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        {/* Processing blocks */}
        <rect x="40" y="35" width="20" height="15" rx="2" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
        <rect x="90" y="52" width="20" height="15" rx="2" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
        <rect x="140" y="42" width="20" height="15" rx="2" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
        {/* Arrows */}
        <polygon points="65,42 70,42 67.5,38" fill="var(--accent)" opacity="0.3" />
        <polygon points="115,59 120,59 117.5,55" fill="var(--accent)" opacity="0.3" />
        <polygon points="165,49 170,49 167.5,45" fill="var(--accent)" opacity="0.3" />
      </svg>
    );
  }
  // neural
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      {/* Neural network layers */}
      {[30, 60, 90, 120, 150].map((x, layerIdx) => {
        const nodeCount = [3, 5, 5, 4, 2][layerIdx];
        const nodes = Array.from({ length: nodeCount }, (_, i) => ({
          y: 60 - ((nodeCount - 1) * 15) / 2 + i * 15,
        }));
        return nodes.map((node, nodeIdx) => (
          <g key={`${layerIdx}-${nodeIdx}`}>
            <circle
              cx={x}
              cy={node.y}
              r="3"
              stroke="var(--accent)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.4"
            />
            {/* Connect to next layer */}
            {layerIdx < 4 &&
              (() => {
                const nextCount = [3, 5, 5, 4, 2][layerIdx + 1];
                const nextNodes = Array.from(
                  { length: nextCount },
                  (_, i) => ({
                    y: 60 - ((nextCount - 1) * 15) / 2 + i * 15,
                  })
                );
                return nextNodes.map((next, ni) => (
                  <line
                    key={ni}
                    x1={x + 3}
                    y1={node.y}
                    x2={x + 30 - 3}
                    y2={next.y}
                    stroke="var(--accent)"
                    strokeWidth="0.2"
                    opacity="0.15"
                  />
                ));
              })()}
          </g>
        ));
      })}
    </svg>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.12}>
      <div
        className={`relative border border-border rounded-sm overflow-hidden transition-colors duration-500 ${
          expanded ? "bg-bg-secondary" : "bg-bg-primary hover:bg-bg-secondary/50"
        }`}
      >
        {/* Header (always visible) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-8 md:p-12"
          data-hover
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* SVG illustration */}
            <div className="lg:w-48 h-28 lg:h-auto lg:flex-shrink-0 opacity-60">
              <ProjectSVG pattern={project.svgPattern} />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-3">
                    Project {project.number}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
                    {project.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expanded ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-border rounded-full mt-2"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-text-secondary"
                  >
                    <path
                      d="M7 2v10M2 7h10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <p className="font-body text-sm text-text-secondary">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono text-[10px] text-text-muted border border-border rounded-full tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 md:px-12 pb-8 md:pb-12 lg:pl-[calc(12rem+2rem+3rem)]">
                <div className="editorial-divider mb-8" />
                {project.description.map((para, i) => (
                  <p
                    key={i}
                    className={`mb-4 leading-relaxed ${
                      i === project.description.length - 1
                        ? "text-text-muted italic font-display text-lg"
                        : "text-text-secondary font-body text-base"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 page-section">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-8">
            <div className="editorial-divider" />
            <span className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase">
              Projects
            </span>
          </div>
        </ScrollReveal>

        <TextReveal
          text={"Things I built\nwith my hands"}
          as="h1"
          mode="line"
          delay={0.2}
          className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight font-display"
        />

        <ScrollReveal delay={0.5}>
          <p className="mt-8 max-w-2xl text-lg text-text-secondary font-body leading-relaxed">
            From microcontrollers monitoring compost in dining halls to language
            models running on FPGAs. Each project is a lesson in what happens
            when you push a system to the edge of what&rsquo;s supposed to be
            possible.
          </p>
        </ScrollReveal>
      </section>

      {/* Project panels */}
      <section className="page-section pb-24 md:pb-32">
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectPanel key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border page-section">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ScrollReveal>
            <p className="font-display text-3xl md:text-4xl text-text-primary">
              The full picture.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="/about"
              className="group inline-flex items-center gap-4 font-mono text-sm text-accent tracking-wider uppercase"
            >
              About Me
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
