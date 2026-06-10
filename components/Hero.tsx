"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-start pt-24 px-6 md:px-18 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-[#a78bfa]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full pt-17.5">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#a78bfa] text-sm md:text-base font-mono mb-2 tracking-widest uppercase">
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
          Syed Bilal.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-4 leading-tight">
          I build things for the web.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
          I&apos;m a React and TypeScript developer from{" "}
          <span className="text-[#a78bfa]">Karachi, Pakistan</span>,
          specializing in building production-quality dashboards, SaaS
          applications, and responsive web experiences. Currently open to
          freelance work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3 bg-[#a78bfa] text-[#0f0a1e] font-semibold rounded-lg hover:bg-[#b69cff] transition-all duration-200 text-center">
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3 border border-[#a78bfa] text-[#a78bfa] font-semibold rounded-lg hover:bg-[#a78bfa]/10 text-center transition-all duration-200">
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap gap-6 mt-4">
          {links.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 text-sm hover:text-[#a78bfa] transition-colors duration-200 tracking-wide">
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
