import Image from "next/image";

export default function Home() {
  return (
    <section className="flex min-h-[70vh] items-center py-16 md:py-24">
      <div className="w-full flex flex-col gap-8 md:gap-10">
        <div className="space-y-4">
          <Image
            src="/me.jpg" // update path if needed
            alt="Zack Dorward headshot"
            width={70}
            height={70}
            priority
            className="rounded-full object-cover shadow-md w-32 h-32 md:w-40 md:h-40"
          />
          <p className="mt-8 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lx">
            Hey, welcome to my site, I&apos;m happy you made it :)
          </p>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lx">
            Here you can learn a bit more about my work, interests, and
            accomplishments. Please get in touch if you have an interesting idea
            or opportunity to discuss!
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 transition"
            href="https://github.com/zdorward"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 transition"
            href="https://linkedin.com/in/zack-dorward"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
