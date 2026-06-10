import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
};

type MiniProjectCardProps = {
  project: Project;
};

export default function MiniProjectCard({ project }: MiniProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="p-6 border border-[#a78bfa]/15 rounded-xl bg-[#1a1333]/50">
      <h3 className="text-white font-semibold mb-2">{project.title}</h3>

      <p className="text-slate-400 text-sm">{project.description}</p>
    </motion.div>
  );
}
