import { motion } from "framer-motion";

type Props = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-16">
      <span className="text-[#a78bfa] font-mono text-sm">{number}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-[#a78bfa]/15 ml-4" />
    </motion.div>
  );
}
