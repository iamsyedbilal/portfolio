import { navLinks } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = { open: boolean; setOpen: (val: boolean) => void };

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="absolute left-4 right-4 top-16 rounded-3xl border border-white/10 bg-[#0a0b10]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl px-4 py-4 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"><span>0{index + 1}</span><span>{link.label}</span></a>
              </li>
            ))}
            <li className="pt-2"><a href="/resume.pdf" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-4 text-center text-sm font-semibold text-[#08090d]">View résumé ↗</a></li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
