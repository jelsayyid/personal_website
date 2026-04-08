"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PROJECTS = [
  {
    title: "Automated Composting System",
    description:
      "Sensor-driven composting monitors deployed across Yale's 14 residential dining halls. Embedded C, PCB design, closed-loop actuator control.",
  },
  {
    title: "Real-Time ResNet18 on Raspberry Pi",
    description:
      "Pruned and quantized for real-time computer vision within a 5W thermal envelope. Roofline analysis to find exact bottlenecks at each layer.",
  },
  {
    title: "GPT-Lite FPGA Optimization",
    description:
      "NanoGPT mapped onto FPGA fabric. Maintained 99% baseline accuracy at a fraction of the power budget.",
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
              <h2 className="font-display text-xl text-text-primary mb-2">
                {project.title}
              </h2>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
