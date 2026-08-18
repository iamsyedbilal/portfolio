import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";

type DesktopNavbarProp = { activeSection: string };

export default function DesktopNavbar({ activeSection }: DesktopNavbarProp) {
  return (
    <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1.5 backdrop-blur-xl md:flex">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`relative block rounded-full px-4 py-2 text-xs transition-colors ${activeSection === link.href ? "text-white" : "text-slate-500 hover:text-white"}`}
          >
            {activeSection === link.href && <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 rounded-full bg-white/10" />}
            {link.label}
          </a>
        </li>
      ))}
      <li>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="ml-1 flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#08090d] transition hover:-translate-y-0.5">Resume ↗</a>
      </li>
    </ul>
  );
}
