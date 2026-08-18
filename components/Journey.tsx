"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading number="04 /" title="The trajectory" />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {journey.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            whileHover={{ y: -5 }}
            className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-[#a78bfa]/30"
          >
            <div className="absolute right-5 top-5 font-mono text-[10px] text-white/20">0{index + 1}</div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#a78bfa]">{item.year}</span>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-500 transition-colors group-hover:text-slate-400">{item.desc}</p>
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#a78bfa] transition-all duration-500 group-hover:w-full" />
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 rounded-3xl border border-[#a78bfa]/20 bg-[#a78bfa]/[0.035] p-8 md:p-10"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">Next chapter</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Frontend was the entry point. Backend is the direction.</h3>
          </div>
          <div className="shrink-0 rounded-2xl border border-white/10 bg-black/20 px-6 py-5 font-mono text-xs text-slate-400">
            <div><span className="text-[#a78bfa]">70%</span> backend</div>
            <div><span className="text-cyan-300">30%</span> frontend</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
