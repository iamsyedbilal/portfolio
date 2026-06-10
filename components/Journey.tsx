"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="py-8 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16">
        <span className="text-[#a78bfa] font-mono text-sm">03.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          My Journey
        </h2>
        <div className="flex-1 h-px bg-[#a78bfa]/15 ml-4" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1.75 md:left-1/2 top-0 bottom-0 w-px bg-[#a78bfa]/15 -translate-x-1/2" />

        <div className="space-y-12">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex gap-8 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                } pl-10 md:pl-0`}>
                <div className="p-5 border border-[#a78bfa]/15 rounded-xl bg-[#1a1333]/50 hover:border-[#a78bfa]/30 transition-all duration-300">
                  <span className="text-[#a78bfa] font-mono text-xs uppercase tracking-widest">
                    {item.year}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-[#a78bfa] border-2 border-[#0f0a1e] -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(167,139,250,0.5)]" />

              {/* Empty space for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
