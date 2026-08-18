"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { reasons } from "@/lib/data";

export default function WhyMe() {
  return (
    <section id="whyme" className="py-28 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading number="02." title="How I think about engineering" />
      <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-slate-400 text-lg leading-8 mb-14 max-w-2xl">
        I&apos;m still growing as a backend engineer. That&apos;s exactly why I want this portfolio to show the way I approach problems — not pretend I already know everything.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <motion.article key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -5 }} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/[0.04] transition-all">
            <div className="flex items-center justify-between mb-8"><span className="font-mono text-xs text-[#a78bfa]">{reason.icon}</span><span className="text-slate-700 group-hover:text-slate-500 transition-colors">↗</span></div>
            <h3 className="text-white font-semibold text-lg mb-3">{reason.title}</h3>
            <p className="text-slate-500 text-sm leading-6">{reason.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
