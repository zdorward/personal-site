import { notFound } from "next/navigation";
import { posts } from "@/lib/data/posts";
import Link from "next/link";

type Params = {
  slug: string;
};

type BlogPostPageProps = {
  params: Promise<Params>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-10 md:py-14 space-y-8 max-w-5xl">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
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
      </header>

      <div className="space-y-4 prose prose-zinc dark:prose-invert text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900/40 rounded-xl p-6">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Link
        href="/blog"
        className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 underline"
      >
        ← Back
      </Link>
    </article>
  );
}
