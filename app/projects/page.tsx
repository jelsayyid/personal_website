"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PROJECTS = [
  {
    title: "Automated Composting System",
    description: [
      "Designed and deployed an automated composting monitoring system across Yale's 14 residential dining halls.",
      "Microcontroller firmware managing sensor arrays (temperature, humidity, CO\u2082) feeding into a closed-loop actuator control system. Event-driven architecture that responds to environmental conditions in real time.",
      "The engineering challenge wasn't any single sensor or actuator. It was building a system reliable enough to run unattended across 14 sites, with failure modes that degrade gracefully instead of catastrophically.",
    ],
  },
  {
    title: "Real-Time ResNet18 on Raspberry Pi",
    description: [
      "Pruned and quantized ResNet18 for real-time computer vision inference on a Raspberry Pi, hardware that costs less than a textbook.",
      "Built roofline analysis frameworks to characterize the exact bottleneck (compute-bound vs. memory-bound) at each layer. Optimized power/latency tradeoffs to hit real-time performance within a 5W thermal envelope.",
      "Proved that meaningful computer vision doesn't require a GPU cluster. It requires understanding where your model actually spends its cycles.",
    ],
  },
  {
    title: "GPT-Lite FPGA Optimization",
    description: [
      "Took NanoGPT and mapped it onto FPGA fabric, a fundamentally different compute paradigm than the GPU training pipelines the model was designed for.",
      "Model refactoring, aggressive quantization, custom profiling pipelines. Maintained 99% of baseline accuracy while dramatically reducing the compute and memory footprint.",
      "The result: a language model running on hardware you can hold in your hand, at a fraction of the power budget.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 page-section">
      <div className="max-w-2xl">
        <ScrollReveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-16">
            Projects
          </h1>
        </ScrollReveal>

        {PROJECTS.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div
              className={`py-8 ${
                i < PROJECTS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <h2 className="font-display text-xl text-text-primary mb-3">
                {project.title}
              </h2>
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
  );
}
