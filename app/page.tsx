"use client";

import { motion } from "framer-motion";
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

const PROJECTS = [
  {
    title: "Automated Composting System",
    description: [
      "Designed and deployed an automated composting monitoring system across Yale\u2019s 14 residential dining halls.",
      "Microcontroller firmware managing sensor arrays (temperature, humidity, CO\u2082) feeding into a closed-loop actuator control system. Event-driven architecture that responds to environmental conditions in real time.",
    ],
  },
  {
    title: "Real-Time ResNet18 on Raspberry Pi",
    description: [
      "Pruned and quantized ResNet18 for real-time computer vision inference on a Raspberry Pi.",
      "Built roofline analysis frameworks to characterize the exact bottleneck (compute-bound vs. memory-bound) at each layer. Optimized power/latency tradeoffs to hit real-time performance within a 5W thermal envelope.",
    ],
  },
  {
    title: "GPT-Lite FPGA Optimization",
    description: [
      "Took NanoGPT and mapped it onto FPGA fabric, a fundamentally different compute paradigm than the GPU training pipelines the model was designed for.",
      "Model refactoring, aggressive quantization, custom profiling pipelines. Maintained 99% of baseline accuracy while dramatically reducing the compute and memory footprint.",
    ],
  },
];

const YCC_INITIATIVES = [
  "Clarity AI Platform adoption university-wide",
  "Opened Yale\u2019s CAS to student developers",
  "Anthropic partnership for Claude credits in Yale labs",
  "Industry partnership channel between tech companies and student government",
];

const DIPLOMATIC = [
  {
    title: "U.S. State Department NSLI-Y Scholar",
    detail: "Taiwan, 2020\u20132022. Mandarin immersion.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center page-section pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight mb-6">
            Joseph
            <br />
            Elsayyid
          </h1>

          <p className="max-w-md text-base text-text-secondary font-body leading-relaxed mb-10">
            Electrical engineering and computer science at Yale. I work on
            chip design, AI hardware, edge ML, and institutional technology.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-text-muted tracking-wider">
            <a
              href="mailto:elsayyidjoseph@gmail.com"
              className="hover:text-text-secondary transition-colors duration-300"
            >
              elsayyidjoseph@gmail.com
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-secondary transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 md:py-32 page-section">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight mb-16">
              Work
            </h2>
          </ScrollReveal>

          {EXPERIENCES.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className={`py-8 ${
                  i < EXPERIENCES.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                  <h3 className="font-display text-xl text-text-primary">
                    {exp.org}
                  </h3>
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

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 border-t border-border page-section">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight mb-16">
              Projects
            </h2>
          </ScrollReveal>

          {PROJECTS.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className={`py-8 ${
                  i < PROJECTS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <h3 className="font-display text-xl text-text-primary mb-3">
                  {project.title}
                </h3>
                {project.description.map((para, j) => (
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

      {/* Leadership */}
      <section id="leadership" className="py-24 md:py-32 border-t border-border page-section">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight mb-16">
              Leadership
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <h3 className="font-display text-xl text-text-primary mb-4">
                YCC Tech Division Chair
              </h3>
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
              <h3 className="font-display text-xl text-text-primary mb-2">
                Student Advisory, Yale College
              </h3>
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

      {/* About */}
      <section id="about" className="py-24 md:py-32 border-t border-border page-section">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight mb-16">
              About
            </h2>
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
                    href="mailto:elsayyidjoseph@gmail.com"
                    className="block font-body text-sm text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    elsayyidjoseph@gmail.com
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
    </>
  );
}
