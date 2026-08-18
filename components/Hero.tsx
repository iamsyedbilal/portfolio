"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-screen max-w-7xl items-center overflow-hidden px-6 pb-20 pt-32 md:px-10">
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-[#a78bfa]/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[12%] right-[5%] h-72 w-72 rounded-full bg-cyan-300/[0.045] blur-[120px]" />

      <div className="relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
          Available for selected projects · Karachi, Pakistan
        </motion.div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }} className="mb-4 font-mono text-xs tracking-[0.2em] text-[#a78bfa]">I&apos;M SYED BILAL — 2026</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .8 }} className="max-w-5xl text-[clamp(3.7rem,9vw,8.5rem)] font-semibold leading-[.86] tracking-[-0.075em] text-white">
              I build the<br /><span className="text-slate-500">systems behind</span><br />the products.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45, duration: .7 }} className="mt-9 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Backend-focused full-stack developer building APIs, database-backed applications and SaaS products. Strong frontend instincts, increasingly obsessed with what happens behind the screen.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55, duration: .6 }} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08090d] transition hover:-translate-y-1">Explore the work ↓</a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/30">Let&apos;s talk ↗</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .8 }} className="hidden lg:block">
            <div className="engineering-grid rounded-[2rem] border border-white/10 p-5 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#090a0f]/90 p-6 font-mono text-xs text-slate-500">
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4"><span>bilal.config.ts</span><span className="text-emerald-400">● online</span></div>
                <div className="space-y-3 leading-6">
                  <p><span className="text-[#a78bfa]">role</span>: <span className="text-white">"backend-focused developer"</span></p>
                  <p><span className="text-[#a78bfa]">focus</span>: <span className="text-white">["APIs", "Postgres", "architecture"]</span></p>
                  <p><span className="text-[#a78bfa]">build</span>: <span className="text-white">"real products"</span></p>
                  <p><span className="text-[#a78bfa]">ratio</span>: <span className="text-cyan-300">"70 / 30"</span></p>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-[#a78bfa] via-cyan-300/50 to-transparent" />
                <div className="mt-5 grid grid-cols-2 gap-3 text-[10px] uppercase tracking-widest"><span className="rounded-lg border border-white/10 p-3">Node / TS</span><span className="rounded-lg border border-white/10 p-3">PostgreSQL</span><span className="rounded-lg border border-white/10 p-3">Supabase</span><span className="rounded-lg border border-white/10 p-3">Next.js</span></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex gap-5">{links.slice(0, 3).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 transition hover:text-white">{link.label} ↗</a>)}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">01 / 05 — scroll to explore</div>
        </motion.div>
      </div>
    </section>
  );
}
