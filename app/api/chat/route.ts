// app/api/chat/route.ts

import { NextRequest } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

async function readBio(): Promise<string> {
  try {
    const bioPath = path.join(process.cwd(), "lib", "data", "bio.md");
    return (await fs.readFile(bioPath, "utf8")).trim();
  } catch {
    return "";
  }
}

async function readPrivateNotes(): Promise<string> {
  const fromEnv = process.env.PRIVATE_NOTES;
  if (fromEnv && fromEnv.trim()) return fromEnv.trim();

  const notesDir = path.join(process.cwd(), "private", "notes");
  try {
    const files = (await fs.readdir(notesDir)).filter((f) =>
      /\.(md|txt)$/i.test(f)
    );
    const chunks = await Promise.all(
      files.map(
        async (f) =>
          `---\nFILE: ${f}\n${(
            await fs.readFile(path.join(notesDir, f), "utf8")
          ).trim()}`
      )
    );
    return chunks.join("\n\n");
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  }

  const body = (await req.json()) as { messages?: ChatMessage[] };
  const messages = Array.isArray(body.messages) ? body.messages : [];

  const lastUser = [...messages]
    .reverse()
    .find((m) => m.role === "user")?.content;
  if (!lastUser) {
    return Response.json({ error: "No user message" }, { status: 400 });
  }

  const bio = await readBio();
  const privateNotes = await readPrivateNotes();

  const system: ChatMessage = {
    role: "system",
    content: [
      "You are Zack's website assistant. Speak in Zack's voice: clear, direct, human.",
      "Do not invent personal facts.",
      "Give only the answer to the question, with no follow up.",
      bio ? `BIO (public):\n${bio}` : "",
      privateNotes ? `PRIVATE NOTES:\n${privateNotes}` : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
  };

  const openaiRes = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      stream: true,
      input: [system, ...messages.slice(-20)],
      temperature: 0.4,
    }),
  });

  if (!openaiRes.ok) {
    return Response.json({ error: "OpenAI request failed" }, { status: 500 });
  }

  return new Response(openaiRes.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
