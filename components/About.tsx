"use client";

import { motion } from "framer-motion";
import { skills, stats } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const focus = ["API design", "PostgreSQL", "Auth & security", "Architecture", "Performance", "Clean systems"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading number="01 /" title="The engineer" />

      <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .7 }}>
          <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-[-0.025em] text-slate-200 md:text-4xl">I started with interfaces. Now I&apos;m learning to own the layers underneath them.</p>
          <div className="mt-8 max-w-2xl space-y-5 text-sm leading-8 text-slate-500 md:text-base">
            <p>I&apos;m a self-taught developer from Karachi and a Computer Science student who likes turning ideas into working products. Building solo has forced me to understand more than components — data, auth, state, deployments, failures and the decisions that keep a codebase maintainable.</p>
            <p>My current direction is backend engineering: APIs, PostgreSQL, service boundaries, authentication, security and system design. The frontend remains a strength because I want to understand the entire product, not just one layer.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.slice(0, 4).map((stat) => <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><p className="text-2xl font-semibold text-white">{stat.number}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-slate-600">{stat.label}</p></div>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .7, delay: .1 }} className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">Current focus</p>
            <div className="mt-6 grid grid-cols-2 gap-2">{focus.map((item) => <div key={item} className="rounded-xl border border-white/10 px-3 py-3 text-xs text-slate-400">{item}</div>)}</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#a78bfa]/[0.035] p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">The stack</p>
            <div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-slate-500">{skill.trim()}</span>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
