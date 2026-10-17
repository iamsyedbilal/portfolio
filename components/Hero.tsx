"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const focusItems = [
  ["01", "Frontend", "Clear, responsive interfaces"],
  ["02", "Backend", "Reliable APIs and business logic"],
  ["03", "Data", "Thoughtful schemas and persistence"],
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-center px-5 pb-10 pt-28 sm:px-8 md:px-10 lg:pt-32"
    >
      <div className="pointer-events-none absolute left-[8%] top-[24%] -z-10 h-72 w-72 rounded-full bg-violet-400/[0.06] blur-[110px]" />

      <div className="w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400 sm:mb-12"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Available for selected opportunities</span>
          <span className="hidden text-zinc-700 sm:inline">/</span>
          <span className="text-zinc-500">Karachi, Pakistan</span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)] lg:gap-20">
          <div className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.06, duration: 0.5 }}
              className="mb-5 text-sm font-medium text-zinc-300"
            >
              Hi, I&apos;m Syed Bilal — a full-stack developer.
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12, duration: 0.58 }}
              className="max-w-3xl text-[clamp(3.1rem,6.4vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-zinc-50"
            >
              I build digital
              <br className="hidden sm:block" /> products that work
              <span className="text-violet-300"> beautifully.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
            >
              I turn ideas into thoughtful web experiences — combining clean
              interfaces, dependable APIs, and data-driven systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore my work <span className="ml-2" aria-hidden="true">↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition duration-200 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Let&apos;s talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48, duration: 0.45 }}
              className="mt-9 flex flex-wrap gap-x-5 gap-y-2"
            >
              {links.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-500 transition hover:text-zinc-200"
                >
                  {link.label} ↗
                </a>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            aria-label="Development approach"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-300/[0.07] blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                    What I bring
                  </p>
                  <span className="font-mono text-xs text-zinc-600">01 — 03</span>
                </div>

                <div className="divide-y divide-white/10">
                  {focusItems.map(([number, title, description]) => (
                    <div key={number} className="flex gap-4 py-5">
                      <span className="pt-1 font-mono text-xs text-violet-300/80">{number}</span>
                      <div>
                        <h2 className="text-base font-medium text-zinc-100">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-zinc-600 lg:text-left">
              Curious by nature. Intentional in every build.
            </p>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62, duration: 0.45 }}
          className="mt-12 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-14"
        >
          <span className="text-xs text-zinc-600">Design-minded · Engineering-focused</span>
          <a href="#about" className="text-xs text-zinc-500 transition hover:text-zinc-200">
            Scroll to explore ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}