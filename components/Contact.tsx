"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-32 md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-8 text-center md:p-16"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa]/15 blur-3xl" />
        <p className="relative font-mono text-[10px] uppercase tracking-[0.3em] text-[#a78bfa]">05 / let&apos;s build</p>
        <h2 className="relative mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white md:text-7xl">Have a product worth building?</h2>
        <p className="relative mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400">I&apos;m open to freelance work, collaborations and interesting engineering problems. Tell me what you&apos;re building.</p>

        <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:syedbilal.dev27@gmail.com?subject=Project%20Inquiry" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#08090d] transition hover:-translate-y-1">Start a conversation ↗</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/30">View résumé</a>
        </div>

        <div className="relative mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/10 pt-7">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 transition hover:text-white">{link.label} ↗</a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
