"use client";

import { projects } from "@/lib/data";
import FeaturedProjectCard from "./FeaturedProjectCard";
import MiniProjectCard from "./MiniProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-8 px-6 md:px-10 max-w-6xl mx-auto">
      {/* header stays same */}

      <div className="space-y-24 mb-24">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <MiniProjectCard key={project.title} project={project} />
          ))}
      </div>
    </section>
  );
}
