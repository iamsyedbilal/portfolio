"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const work = [
  {
    index: "01",
    title: "ClientFlow",
    type: "Private · SaaS in progress",
    description:
      "My main product build: a client-management platform for freelancers and agencies. The focus is on clean domain boundaries, authentication, database design, business logic and a backend that can grow with the product.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    private: true,
  },
  {
    index: "02",
    title: "RestoMetrics",
    type: "Restaurant analytics SaaS",
    description:
      "A production SaaS dashboard for restaurant operations, combining authentication, database-backed workflows, menu and order management, storage and analytics.",
    stack: ["React", "TypeScript", "Supabase", "Recharts"],
    image: "/projects/restrometric-img.png",
    href: "https://resto-metrics.vercel.app",
    github: "https://github.com/iamsyedbilal/restometrics",
  },
  {
    index: "03",
    title: "Bookmark Manager",
    type: "Full-stack application",
    description:
      "A focused full-stack app with authentication, CRUD workflows, archive state, visit tracking, search, filtering and persistent user data.",
    stack: ["React", "TypeScript", "Supabase", "React Query"],
    image: "/projects/bookmark-manager.png",
    href: "https://bookmark-manager-tx3d.vercel.app",
    github: "https://github.com/iamsyedbilal/bookmark_manager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading number="03 /" title="Selected work" />

      <div className="space-y-10">
        {work.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[330px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-90"
                  />
                ) : (
                  <div className="absolute inset-0 engineering-grid">
                    <div className="absolute inset-10 rounded-3xl border border-[#a78bfa]/20 bg-[#a78bfa]/5 p-6 backdrop-blur-sm">
                      <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        <span>system / clientflow</span><span>private</span>
                      </div>
                      <div className="space-y-3 font-mono text-xs text-slate-400">
                        <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#a78bfa]" /> Client</div>
                        <div className="ml-5 h-5 border-l border-dashed border-[#a78bfa]/30" />
                        <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-300" /> API / Services</div>
                        <div className="ml-5 h-5 border-l border-dashed border-cyan-300/30" />
                        <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-300" /> PostgreSQL</div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-transparent to-transparent" />
                <span className="absolute left-7 top-7 rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">{project.index}</span>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">{project.type}</p>
                  <h3 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{project.title}</h3>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">{project.description}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-5">
                  {project.private ? (
                    <span className="font-mono text-xs text-slate-500">Code is private — product is in active development.</span>
                  ) : (
                    <>
                      <a href={project.href} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#0f0a1e] transition hover:-translate-y-0.5">Live ↗</a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-slate-400 transition hover:text-white">Source ↗</a>
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
