"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-10 max-w-4xl mx-auto text-center">
      <SectionHeading number="05." title="Get In Touch" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4 mb-12">
        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          I&apos;m currently open to freelance projects and new opportunities.
          Have a project in mind? Let&apos;s jump on a quick call and discuss
          how I can help.
        </p>
        <p className="text-slate-500 text-sm">
          Average response time: within 24 hours
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        {/* Primary CTA */}
        <a
          href="https://calendly.com/syedbilal-dev27/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#a78bfa] text-[#0f0a1e] font-semibold rounded-lg hover:bg-[#b69cff] transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
          📅 Schedule a Call
        </a>

        {/* Secondary CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=syedbilal.dev27@gmail.com&su=Project Inquiry&body=Hi Bilal, I'd like to discuss a project with you."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-[#a78bfa] text-[#a78bfa] font-semibold rounded-lg hover:bg-[#a78bfa]/10 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
          ✉️ Send an Email
        </a>
      </motion.div>

      {/* Fiverr / Upwork quick links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <a
          href="https://www.fiverr.com/iamsyedbilal"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-lg border border-[#a78bfa]/20 text-slate-400 text-sm hover:text-[#a78bfa] hover:border-[#a78bfa]/50 transition-all duration-200 inline-flex items-center justify-center gap-2">
          Hire on Fiverr ↗
        </a>

        <a
          href="https://www.upwork.com/freelancers/~0188c7ff53f8a52869"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-lg border border-[#a78bfa]/20 text-slate-400 text-sm hover:text-[#a78bfa] hover:border-[#a78bfa]/50 transition-all duration-200 inline-flex items-center justify-center gap-2">
          Hire on Upwork ↗
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8">
        {socialLinks.map((link) => (
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
