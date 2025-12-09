import Link from "next/link";

import { projects } from "@/lib/data/projects";

export default function PortfolioPage() {
  return (
    <section className="py-10 md:py-14 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
          A selection of things I&apos;ve built or am actively working on. Click
          into a project to see more detail, decisions, and what I&apos;d do
          differently next time.
        </p>
      </header>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="space-y-1.5">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-950 dark:group-hover:text-white">
                  {project.title}
                </h2>
                {project.period && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    {project.period}
                  </p>
                )}
              </div>

              {project.status && (
                <span
                  className={
                    "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium border " +
                    (project.status === "live"
                      ? "border-emerald-200/70 text-emerald-700 bg-emerald-50/80 dark:border-emerald-900/60 dark:bg-emerald-900/30 dark:text-emerald-200"
                      : project.status === "wip"
                      ? "border-amber-200/70 text-amber-700 bg-amber-50/80 dark:border-amber-900/60 dark:bg-amber-900/30 dark:text-amber-200"
                      : "border-zinc-300 text-zinc-600 bg-zinc-100/80 dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-400")
                  }
                >
                  {project.status === "live"
                    ? "Live"
                    : project.status === "wip"
                    ? "In progress"
                    : "Archived"}
                </span>
              )}
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 text-[11px] text-zinc-700 dark:text-zinc-300 bg-zinc-50/60 dark:bg-zinc-900/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span>View details</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
