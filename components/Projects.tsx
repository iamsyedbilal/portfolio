"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const work = [
  {
    index: "01",
    title: "ClientFlow",
    type: "Private · SaaS in progress",
    description: "A client-management platform for freelancers and agencies, built around authentication, thoughtful database design, business logic, and a backend designed to grow with the product.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    private: true,
  },
  {
    index: "02",
    title: "RestoMetrics",
    type: "Restaurant analytics",
    description: "A restaurant operations dashboard bringing together authentication, menu and order management, database-backed workflows, and analytics.",
    stack: ["React", "TypeScript", "Supabase", "Recharts"],
    image: "/projects/restrometric-img.png",
    href: "https://resto-metrics.vercel.app",
    github: "https://github.com/iamsyedbilal/restometrics",
  },
  {
    index: "03",
    title: "Bookmark Manager",
    type: "Full-stack application",
    description: "A focused bookmark manager with authentication, search, archive workflows, visit tracking, and persistent user data.",
    stack: ["React", "TypeScript", "Supabase", "React Query"],
    image: "/projects/bookmark-manager.png",
    href: "https://bookmark-manager-tx3d.vercel.app",
    github: "https://github.com/iamsyedbilal/bookmark_manager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-rule section-tight mx-auto max-w-7xl px-5 sm:px-8 md:px-10">
      <SectionHeading number="03 /" title="Selected work" />
      <div className="space-y-5">
        {work.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: .5, delay: index * .06 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.02] transition-colors duration-300 hover:border-white/20 hover:bg-white/[.035]"
          >
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-[230px] overflow-hidden border-b border-white/10 bg-zinc-900 sm:min-h-[290px] lg:border-b-0 lg:border-r">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="engineering-grid absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full max-w-xs rounded-xl border border-white/10 bg-black/30 p-5">
                      <p className="text-xs text-zinc-500">PROJECT / CLIENTFLOW</p>
                      <div className="mt-6 space-y-3 font-mono text-xs text-zinc-400">
                        <p className="border-l border-zinc-600 pl-3">Client workspace</p>
                        <p className="border-l border-zinc-600 pl-3">API & services</p>
                        <p className="border-l border-zinc-600 pl-3">Database</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-[10px] text-white/80 backdrop-blur">
                  {project.index}
                </span>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-9">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-zinc-100 sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-zinc-400">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  {project.private ? (
                    <span className="text-xs text-zinc-500">Private repository · In development</span>
                  ) : (
                    <>
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-white">
                        Visit live site ↗
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 transition hover:text-white">
                        View source ↗
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}