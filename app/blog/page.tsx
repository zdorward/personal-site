import Link from "next/link";

import { posts } from "@/lib/data/posts";

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();
    return bDate - aDate;
  });

  return (
    <section className="py-10 md:py-14 space-y-8 max-w-5xl">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Wannabe author
        </p>
      </div>

      <div className="space-y-6">
        {sortedPosts.map((post) => (
          <article
            key={post.title}
            className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 p-4 sm:p-5 shadow-sm transition transform hover:scale-[1.01] hover:shadow-md"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-medium tracking-tight sm:text-xl">
                {post.title}
              </h2>
              {post.date && (
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>

            {post.description && (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {post.description}
              </p>
            )}

            {post.slug && (
              <div className="mt-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline"
                >
                  Read more
                  <span className="ml-1 text-xs" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
