export type Post = {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string[];
};

export const posts: Post[] = [
  {
    title: "My 2026 Goals",
    slug: "my-2026-goals",
    date: "2025-12-08",
    description:
      "A look into the habits, projects, and mindset I'm taking into 2026.",
    content: ["coming soon..."],
  },
];
