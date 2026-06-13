"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { reasons } from "@/lib/data";

export default function WhyMe() {
  return (
    <section id="whyme" className="py-10 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Section Label */}
      <SectionHeading number="02." title="Why Work With Me" />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate-400 text-lg mb-16 max-w-2xl">
        I don&apos;t just write code — I build solutions. Here&apos;s what you
        get when you work with me.
      </motion.p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 border border-[#a78bfa]/15 rounded-xl bg-[#1a1333]/50 hover:border-[#a78bfa]/40 transition-all duration-300">
            <div className="text-3xl mb-4">{reason.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {reason.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 p-8 border border-[#a78bfa]/20 rounded-2xl bg-[#1a1333]/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white font-bold text-xl mb-2">
            Ready to build something great?
          </h3>
          <p className="text-slate-400 text-sm">
            I&apos;m currently available for freelance projects. Let&apos;s
            discuss your idea.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#a78bfa] text-[#0f0a1e] font-semibold rounded-lg hover:bg-[#b69cff] transition-all duration-200 whitespace-nowrap">
            Hire Me
          </a>
          <a
            href="https://www.fiverr.com/iamsyedbilal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#a78bfa] text-[#a78bfa] font-semibold rounded-lg hover:bg-[#a78bfa]/10 transition-all duration-200 whitespace-nowrap">
            Fiverr ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
