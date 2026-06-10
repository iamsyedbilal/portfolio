"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-[#a78bfa]/10 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-slate-600 text-sm">
          Designed & Built by <span className="text-[#a78bfa]">Syed Bilal</span>
        </p>

        {/* Center — Logo */}
        <a href="#" className="text-lg font-bold text-[#a78bfa] tracking-tight">
          SB<span className="text-white">.</span>
        </a>

        {/* Right */}
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} — Open to work
        </p>
      </div>
    </motion.footer>
  );
}
