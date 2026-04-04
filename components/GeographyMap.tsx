"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Location {
  name: string;
  x: number;
  y: number;
  label: string;
}

const LOCATIONS: Location[] = [
  { name: "New Haven", x: 27, y: 38, label: "Yale" },
  { name: "Louvain-la-Neuve", x: 49, y: 33, label: "Belgium" },
  { name: "Hong Kong", x: 81, y: 50, label: "Hong Kong" },
  { name: "Amman", x: 57, y: 43, label: "Jordan" },
  { name: "Taipei", x: 83, y: 48, label: "Taiwan" },
  { name: "Berlin", x: 50.5, y: 31, label: "Germany" },
  { name: "Buenos Aires", x: 30, y: 78, label: "Argentina" },
  { name: "Santiago", x: 28, y: 76, label: "Chile" },
];

// Connections between locations (indices)
const CONNECTIONS = [
  [0, 1], // New Haven → Belgium
  [0, 2], // New Haven → Hong Kong
  [0, 3], // New Haven → Jordan
  [0, 4], // New Haven → Taiwan
  [0, 5], // New Haven → Germany
  [0, 6], // New Haven → Argentina
  [6, 7], // Argentina → Chile
];

export default function GeographyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid lines */}
        {[20, 40, 60, 80].map((v) => (
          <g key={v}>
            <line
              x1={v}
              y1="10"
              x2={v}
              y2="90"
              stroke="var(--border)"
              strokeWidth="0.1"
            />
            <line
              x1="10"
              y1={v}
              x2="90"
              y2={v}
              stroke="var(--border)"
              strokeWidth="0.1"
            />
          </g>
        ))}

        {/* Connection lines */}
        {CONNECTIONS.map(([from, to], i) => {
          const f = LOCATIONS[from];
          const t = LOCATIONS[to];
          return (
            <motion.line
              key={`line-${i}`}
              x1={f.x}
              y1={f.y}
              x2={t.x}
              y2={t.y}
              stroke="var(--accent)"
              strokeWidth="0.15"
              strokeDasharray="0.5 0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 0.3 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: 1.2,
                delay: 0.5 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* Location points */}
        {LOCATIONS.map((loc, i) => (
          <g key={loc.name}>
            {/* Pulse ring */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="1.5"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView
                  ? { scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }
                  : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 3,
                delay: 0.8 + i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Dot */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="0.6"
              fill="var(--accent)"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
            {/* Label */}
            <motion.text
              x={loc.x}
              y={loc.y - 2}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="1.4"
              fontFamily="var(--font-mono)"
              letterSpacing="0.1"
              initial={{ opacity: 0, y: 2 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 2 }
              }
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.1,
              }}
            >
              {loc.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
