"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import CodeBlock from "@/components/CodeBlock";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_35%,rgba(167,139,250,0.14),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_30%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 rounded-full border border-[#a78bfa]/20 bg-[#a78bfa]/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-[#c4b5fd] mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Building toward backend engineering
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="text-slate-500 font-mono text-sm mb-3">
            // hello, I&apos;m
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }} className="text-6xl md:text-8xl font-black tracking-[-0.05em] text-white leading-[0.95]">
            Syed Bilal<span className="text-[#a78bfa]">.</span>
          </motion.h1>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} className="mt-6 text-3xl md:text-5xl font-bold leading-tight text-slate-300 max-w-3xl">
            I build the <span className="text-white">systems behind the products.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="mt-7 text-lg leading-8 text-slate-400 max-w-2xl">
            Backend-focused full-stack developer from <span className="text-[#c4b5fd]">Karachi, Pakistan</span>. I&apos;m going deeper into APIs, PostgreSQL, authentication, architecture, security, and production systems while keeping a strong frontend foundation.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-9 flex flex-wrap gap-4">
            <motion.a href="#projects" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0f0a1e] transition-all hover:bg-[#ddd6fe]">Explore my work ↓</motion.a>
            <motion.a href="#journey" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 transition-all hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/10">See the journey →</motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.55 }} className="mt-8 flex flex-wrap gap-5 text-xs font-mono text-slate-500">
            {links.slice(0, 3).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#c4b5fd] transition-colors">{social.label} ↗</a>
            ))}
          </motion.div>
        </div>

        <CodeBlock />
      </div>
    </section>
  );
}
