import { motion } from "framer-motion";

type Props = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 flex items-end gap-5 border-b border-white/10 pb-5">
      <span className="font-mono text-xs tracking-[0.28em] text-[#a78bfa]">{number}</span>
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      <span className="mb-2 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600 md:block">selected work</span>
    </motion.div>
  );
}
