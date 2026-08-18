"use client";

import { motion } from "framer-motion";

const lines = [
  { key: "role", value: '"Backend-focused Full-Stack Dev"', color: "text-[#c3e88d]" },
  { key: "focus", value: '["APIs", "PostgreSQL", "Auth"]', color: "text-[#c3e88d]" },
  { key: "building", value: '"ClientFlow"', color: "text-[#c3e88d]" },
  { key: "location", value: '"Karachi, Pakistan"', color: "text-[#c3e88d]" },
  { key: "status", value: '"learning → building → shipping"', color: "text-[#f78c6c]" },
];

export default function CodeBlock() {
  return (
    <motion.div initial={{ opacity: 0, y: 24, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="hidden lg:block w-full max-w-lg">
      <div className="rounded-2xl border border-white/10 bg-[#11101c]/90 shadow-2xl shadow-[#a78bfa]/10 overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-red-400/80" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" /></div>
          <span className="text-[11px] text-slate-600 font-mono">engineer.ts</span>
        </div>
        <div className="p-6 font-mono text-sm leading-8">
          <div><span className="text-[#c792ea]">const </span><span className="text-[#82aaff]">bilal</span><span className="text-white"> = {'{'}</span></div>
          {lines.map((line, i) => (
            <motion.div key={line.key} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: 0.7 + i * 0.1 }} className="pl-6">
              <span className="text-[#a78bfa]">{line.key}</span><span className="text-white">: </span><span className={line.color}>{line.value}</span><span className="text-slate-600">,</span>
            </motion.div>
          ))}
          <div className="text-white">{'}}'}</div>
          <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-500">
            <span className="text-emerald-400">●</span> available for meaningful projects
          </div>
        </div>
      </div>
    </motion.div>
  );
}
