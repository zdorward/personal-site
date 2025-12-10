import Image from "next/image";
import Link from "next/link";

import { books } from "@/lib/data/books";

export default function BooksPage() {
  const sortedBooks = [...books].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;

    // If both have dates, sort newest → oldest
    if (dateA && dateB) return dateB - dateA;

    // If one is missing a date, push it to the bottom
    if (!a.date && b.date) return 1;
    if (a.date && !b.date) return -1;

    return 0;
  });

  return (
    <section className="py-10 md:py-14 space-y-8 max-w-5xl">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Books
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          I used to read a lot as a kid. Mostly Harry Potter and other fiction,
          but I&apos;ve made the concious decision to learn more from people who
          have had success in one way or another.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {sortedBooks.map((book) => (
          <Link
            key={book.title}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 p-4 shadow-sm transition transform hover:scale-[1.01] hover:shadow-lg block"
          >
            <div className="relative h-100 mb-3">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-1">
              {book.title}
            </h2>

            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < (book.rating || 0) ? "" : "text-zinc-400"}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {book.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
