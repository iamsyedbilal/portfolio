import { navLinks } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
              absolute
              top-17.5
              left-0
              right-0
              bg-[#0f0a1e]/95
              backdrop-blur-xl
              border-b
              border-[#a78bfa]/15
              md:hidden
            ">
          <ul className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-slate-300 hover:text-[#a78bfa] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-block
                    border
                    border-[#a78bfa]
                    text-[#a78bfa]
                    px-4
                    py-2
                    rounded-md
                  ">
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
