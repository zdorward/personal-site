import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { projects } from "@/lib/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <article className="py-10 md:py-14 space-y-8 max-w-3xl">
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.title} icon`}
              width={150}
              height={150}
              className="rounded-md object-cover"
            />
          )}
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h1>
        </div>
        {project.period && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {project.period}
          </p>
        )}
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50/60 dark:bg-zinc-900/60"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.prodUrl || project.githubUrl) && (
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {project.prodUrl && (
            <a
              href={project.prodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4"
            >
              View Live Project ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:underline underline-offset-4"
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none leading-relaxed">
        {project.body?.map((paragraph, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>
            {paragraph}
          </p>
        ))}
      </div>

      <div>
        <Link
          href="/portfolio"
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 underline-offset-4 hover:underline"
        >
          ← Back to projects
        </Link>
      </div>
    </article>
  );
}
