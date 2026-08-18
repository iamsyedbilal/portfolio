"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const principles = [
  ["01", "Understand the data", "Good products start with clear models, constraints and ownership."],
  ["02", "Design for change", "I prefer boundaries and simple abstractions that can evolve without becoming a maze."],
  ["03", "Ship, then sharpen", "Production teaches things a tutorial cannot. Build, observe, fix and improve."],
  ["04", "Keep the interface honest", "The UI should reflect the underlying system instead of hiding its complexity."],
];

export default function WhyMe() {
  return (
    <section id="whyme" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading number="02 /" title="How I think" />
      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
        {principles.map(([number, title, desc], index) => (
          <motion.article key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .08 }} className="group relative bg-[#0b0c11] p-8 md:p-10">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#a78bfa]">{number}</span>
            <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">{desc}</p>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#a78bfa] transition-all duration-500 group-hover:w-full" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
