"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
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
            href="mailto:elsayyidj@gmail.com"
            className="hover:text-text-secondary transition-colors duration-300"
          >
            elsayyidj@gmail.com
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
  );
}
