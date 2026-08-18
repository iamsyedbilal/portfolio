"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-t border-white/10 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Syed Bilal</p>
        <a href="#" className="text-lg font-semibold tracking-tight text-white">SB<span className="text-[#a78bfa]">.</span></a>
        <p>Built with Next.js · TypeScript · Framer Motion</p>
      </div>
    </motion.footer>
  );
}
