"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
  mode?: "word" | "line";
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  as: Tag = "h2",
  once = true,
  mode = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  if (mode === "line") {
    const lines = text.split("\n");
    return (
      <Tag className={className} ref={ref as React.Ref<HTMLHeadingElement>}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : { y: "110%" }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={
                isInView
                  ? { y: "0%", opacity: 1 }
                  : { y: "110%", opacity: 0 }
              }
              transition={{
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
