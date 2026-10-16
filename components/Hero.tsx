"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center overflow-hidden px-5 pb-12 pt-28 sm:px-8 md:px-10">
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-64 w-64 rounded-full bg-white/[.035] blur-[100px]" />
      <div className="relative z-10 w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: .55 }}
          className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-zinc-400"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for selected opportunities · Karachi, Pakistan
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: .08, duration: .55 }}
              className="mb-5 text-xs font-medium uppercase tracking-[.22em] text-zinc-400"
            >
              I&apos;m Syed Bilal
            </motion.p>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: .14, duration: .65 }}
              className="max-w-4xl text-[clamp(3.25rem,8vw,7rem)] font-semibold leading-[.94] tracking-[-.07em] text-zinc-50"
            >
              Building thoughtful
              <br />
              <span className="text-zinc-500">digital products.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .32, duration: .55 }}
              className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8"
            >
              Full-stack developer with a frontend foundation, focused on building useful interfaces, reliable APIs, and maintainable backend systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .42, duration: .5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="inline-flex min-h-11 items-center rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-white">
                View selected work <span className="ml-2" aria-hidden="true">↘</span>
              </a>
              <a href="#contact" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/35 hover:bg-white/[.04]">
                Get in touch <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .28, duration: .65 }}
            className="hidden lg:block"
            aria-label="Development focus"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[.025] p-6">
              <p className="text-xs uppercase tracking-[.18em] text-zinc-500">Current focus</p>
              <div className="mt-6 space-y-5">
                {[
                  ["01", "Backend engineering", "APIs, authentication, business logic"],
                  ["02", "Data & persistence", "PostgreSQL, Supabase, schema design"],
                  ["03", "Product development", "From first interface to deployment"],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-4 border-t border-white/10 pt-4">
                    <span className="pt-0.5 font-mono text-xs text-zinc-600">{number}</span>
                    <div>
                      <h2 className="text-sm font-medium text-zinc-100">{title}</h2>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-zinc-400">{skill}</span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .65, duration: .5 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-5"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {links.slice(0, 3).map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 transition hover:text-zinc-100">
                {link.label} ↗
              </a>
            ))}
          </div>
          <a href="#about" className="text-xs text-zinc-500 transition hover:text-zinc-200">Scroll to explore ↓</a>
        </motion.div>
      </div>
    </section>
  );
}