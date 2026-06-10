import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";

type DesktopNavbarProp = { activeSection: string };

export default function DesktopNavbar({ activeSection }: DesktopNavbarProp) {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`relative text-sm transition-colors duration-300 ${
              activeSection === link.href
                ? "text-[#a78bfa]"
                : "text-slate-400 hover:text-[#a78bfa]"
            }`}>
            {link.label}

            {activeSection === link.href && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#a78bfa] rounded-full"
              />
            )}
          </a>
        </li>
      ))}

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          flex items-center gap-2
          bg-[#a78bfa]
          text-[#0f0a1e]
          px-4 py-2
          rounded-lg
          text-sm font-medium
          hover:bg-[#b69cff]
          transition-colors
        ">
        Resume
        <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
          ↗
        </motion.span>
      </motion.a>
    </ul>
  );
}
