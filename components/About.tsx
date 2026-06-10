"use client";

import { motion } from "framer-motion";
import { skills, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16">
        <span className="text-[#a78bfa] font-mono text-sm">01.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
        <div className="flex-1 h-px bg-[#a78bfa]/15 ml-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-slate-400 leading-relaxed">
          <p>
            I&apos;m a self-taught React and TypeScript developer from
            <span className="text-[#a78bfa]">Karachi, Pakistan</span>, currently
            pursuing a BS in Computer Science at Virtual University. I started
            web development because I wanted to build real things — not just
            follow tutorials.
          </p>
          <p>
            I&apos;ve built production-ready applications completely solo —
            including <span className="text-white">RestoMetrics</span>, a full
            restaurant analytics SaaS dashboard, and{" "}
            <span className="text-white">Bookmark Manager</span>, a full stack
            app with auth, real-time data, and dark mode — with no tutorials,
            just documentation and problem solving.
          </p>
          <p>
            I care about clean code, good architecture, and shipping things that
            actually work. Currently freelancing on Fiverr and Upwork, and open
            to new projects.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-[#a78bfa]/15 rounded-lg p-4 text-center bg-[#1a1333]/50">
                <p className="text-2xl font-bold text-[#a78bfa]">
                  {stat.number}
                </p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-slate-400 mb-6 text-sm">
            Technologies I work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -2, color: "#a78bfa" }}
                className="px-4 py-2 border border-[#a78bfa]/20 rounded-full text-sm text-slate-400 bg-[#1a1333]/50 hover:border-[#a78bfa]/50 hover:text-[#a78bfa] transition-all duration-200 cursor-default">
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Currently */}
          <div className="mt-10 p-5 border border-[#a78bfa]/15 rounded-xl bg-[#1a1333]/50">
            <p className="text-xs text-[#a78bfa] font-mono uppercase tracking-widest mb-3">
              Currently
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                <a
                  href="https://iamsyedbilal.github.io/frontendMentor/"
                  target="_blank"
                  className="hover:text-[#a78bfa] transition-colors">
                  17+ Frontend Mentor challenges →
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                Building my portfolio with Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                Freelancing on Fiverr and Upwork
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                Open to new projects
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
