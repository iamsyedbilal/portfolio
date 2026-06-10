"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import DesktopNavbar from "./DesktopNavbar";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled, showNavbar } = useNavbarScroll();

  const activeSection = useActiveSection(navLinks);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: showNavbar ? 0 : -100,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className={`fixed top-0 left-0 right-0 z-50 h-17.5 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0a1e]/75 backdrop-blur-xl border-b border-[#a78bfa]/15"
          : "bg-transparent"
      }`}>
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{
          scale: 1.05,
        }}
        transition={{ duration: 0.2 }}
        className="text-2xl font-bold tracking-tight text-[#a78bfa]">
        SB<span className="text-white">.</span>
      </motion.a>

      {/* Desktop Navigation */}
      <DesktopNavbar activeSection={activeSection} />
      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative md:hidden w-8 h-8 cursor-pointer"
        aria-label="Toggle Menu">
        <motion.span
          animate={{
            rotate: menuOpen ? 45 : 0,
            y: menuOpen ? 8 : 0,
          }}
          className="cursor-pointer absolute left-0 top-2 w-8 h-0.5 bg-[#a78bfa]"
        />

        <motion.span
          animate={{
            opacity: menuOpen ? 0 : 1,
          }}
          className="absolute left-0 top-4 w-8 h-0.5 bg-[#a78bfa]"
        />

        <motion.span
          animate={{
            rotate: menuOpen ? -45 : 0,
            y: menuOpen ? -8 : 0,
          }}
          className="absolute left-0 top-6 w-8 h-0.5 bg-[#a78bfa]"
        />
      </button>
      <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
    </motion.nav>
  );
}
