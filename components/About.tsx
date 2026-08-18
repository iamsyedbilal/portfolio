"use client";

import { motion } from "framer-motion";
import { skills, stats } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const focus = ["APIs", "PostgreSQL", "Authentication", "Architecture", "Security", "Performance"];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading number="01." title="The engineer behind the code" />

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 text-slate-400 leading-8 text-lg">
          <p>I started with the frontend because I wanted to see ideas become real interfaces. Now I&apos;m going deeper — learning how the <span className="text-white">systems behind those interfaces</span> are designed, secured, and scaled.</p>
          <p>My goal is not to abandon frontend. It&apos;s to become the developer who can follow a product from <span className="text-[#c4b5fd]">database → API → business logic → UI → deployment</span> and understand why each layer exists.</p>
          <p>That&apos;s why projects like <span className="text-white">RestoMetrics</span> and <span className="text-white">ClientFlow</span> matter to me: they force me to solve real problems instead of just completing tutorials.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-bold text-white">{stat.number}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a78bfa] mb-4">01 / engineering focus</p>
            <div className="grid grid-cols-2 gap-3">
              {focus.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-slate-300 hover:border-[#a78bfa]/30 hover:text-white transition-colors">{item}</div>)}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#a78bfa] mb-4">02 / current toolkit</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.025 }} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400">{skill}</motion.span>)}
            </div>
          </div>

          <div className="rounded-2xl border border-[#a78bfa]/20 bg-[#a78bfa]/5 p-5">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#c4b5fd] mb-2">Current mission</p>
            <p className="text-slate-300 text-sm leading-6">Go deeper into backend engineering, database design, security, testing, Docker, deployment, and system design — while building real software.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
