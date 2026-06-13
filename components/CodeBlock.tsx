"use client";

import { motion } from "framer-motion";

export default function CodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="hidden lg:block w-full max-w-md">
      <div className="rounded-xl border border-[#a78bfa]/20 bg-[#1a1035] overflow-hidden">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#a78bfa]/10 bg-[#160d30]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-slate-500 font-mono">
            bilal.ts
          </span>
        </div>

        {/* Code */}
        <div className="p-5 font-mono text-sm leading-7">
          <div>
            <span className="text-[#c792ea]">const </span>
            <span className="text-[#82aaff]">bilal </span>
            <span className="text-white">= {"{"}</span>
          </div>

          {[
            {
              key: "role",
              value: '"React & TypeScript Dev"',
              color: "text-[#c3e88d]",
            },
            {
              key: "location",
              value: '"Karachi, Pakistan"',
              color: "text-[#c3e88d]",
            },
            {
              key: "skills",
              value: '["React", "TypeScript", "Next.js"]',
              color: "text-[#c3e88d]",
            },
            { key: "available", value: "true", color: "text-[#f78c6c]" },
          ].map((line, i) => (
            <motion.div
              key={line.key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.15 }}
              className="pl-6">
              <span className="text-[#a78bfa]">{line.key}</span>
              <span className="text-white">: </span>
              <span className={line.color}>{line.value}</span>
              <span className="text-slate-500">,</span>
            </motion.div>
          ))}

          <div className="text-white">{"}"}</div>
        </div>
      </div>
    </motion.div>
  );
}
