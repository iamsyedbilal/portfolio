"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-10 max-w-4xl mx-auto text-center">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16 justify-center">
        <span className="text-[#a78bfa] font-mono text-sm">04.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Get In Touch
        </h2>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6 mb-12">
        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          I&apos;m currently open to freelance projects and new opportunities.
          Whether you have a project in mind or just want to say hi — my inbox
          is always open.
        </p>

        <p className="text-slate-500 text-sm">
          Average response time: within 24 hours
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <a
          href="mailto:syedbilal.dev27@gmail.com"
          className="px-8 py-4 bg-[#a78bfa] text-[#0f0a1e] font-semibold rounded-lg hover:bg-[#b69cff] transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
          Say Hello ↗
        </a>

        <a
          href="https://www.fiverr.com/iamsyedbilal"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-[#a78bfa] text-[#a78bfa] font-semibold rounded-lg hover:bg-[#a78bfa]/10 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
          Hire on Fiverr ↗
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-8">
        {[
          { label: "GitHub", href: "https://github.com/iamsyedbilal" },
          { label: "Twitter", href: "https://twitter.com/SyedBilal200" },
          { label: "Fiverr", href: "https://www.fiverr.com/iamsyedbilal" },
          {
            label: "Upwork",
            href: "https://www.upwork.com/freelancers/~0188c7ff53f8a52869",
          },
          {
            label: "Frontend Mentor",
            href: "https://www.frontendmentor.io/profile/iamsyedbilal",
          },
          { label: "Email", href: "mailto:syedbilal.dev27@gmail.com" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="text-slate-500 text-sm hover:text-[#a78bfa] transition-colors duration-200 tracking-wide">
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
