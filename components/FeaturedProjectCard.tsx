import Image from "next/image";
import { motion } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  featured: boolean;
  image?: string;
};

export default function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, onMouseMove, reset } = useTiltEffect();
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isReversed ? "md:[&>*:first-child]:order-2" : ""
      }`}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={reset}
        className="relative group rounded-xl overflow-hidden border border-[#a78bfa]/20 bg-[#1a1333] aspect-video transition-transform duration-200 will-change-transform 
        ">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-6xl font-bold text-[#a78bfa]/10">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        )}

        <a href={project.live} target="_blank" className="absolute inset-0" />
      </div>

      <div className={isReversed ? "md:text-right" : ""}>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

        <p className="text-slate-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-[#a78bfa]">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.github}>GitHub ↗</a>
          <a href={project.live}>Live ↗</a>
        </div>
      </div>
    </motion.div>
  );
}
