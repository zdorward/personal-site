"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-zinc-200 bg-zinc-50/80 dark:bg-black/60 dark:border-zinc-800 backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight hover:opacity-80 transition text-zinc-900 dark:text-zinc-50"
          >
            Zack Dorward
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/portfolio"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-medium"
            >
              Portfolio
            </Link>

            <Link
              href="/books"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-medium"
            >
              Books
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
