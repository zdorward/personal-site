export type Project = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  period?: string;
  tech: string[];
  status?: "live" | "wip" | "archived";
  githubUrl?: string;
  prodUrl?: string;
  logo?: string;
};

export type Book = {
  title: string;
  author: string;
  image: string;
  rating?: number; // 1–5
  date?: string;
  description?: string;
  link: string;
};
