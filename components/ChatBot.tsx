"use client";

import { useMemo, useRef, useState } from "react";

type QAItem = {
  q: string;
  a: string;
};

async function streamAssistantReply(
  question: string,
  onDelta: (delta: string) => void
) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [{ role: "user", content: question }] }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }

  if (!res.body) throw new Error("No response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  // The Responses API streams Server-Sent Events (SSE) as `data: {...}` lines.
  // We parse each event and append deltas from `response.output_text.delta`.
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    // Process complete lines; keep any partial line in `buffer`.
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;

      const data = trimmed.slice("data:".length).trim();
      if (!data || data === "[DONE]") continue;

      try {
        const evt = JSON.parse(data) as { type?: string; delta?: string };
        if (
          evt.type === "response.output_text.delta" &&
          typeof evt.delta === "string"
        ) {
          onDelta(evt.delta);
        }
      } catch {
        // Ignore malformed chunks
      }
    }
  }
}

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [qa, setQa] = useState<QAItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendingRef = useRef(false);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading,
    [input, isLoading]
  );

  async function onSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    // Guard against double-send in the same tick (e.g. Enter + click)
    if (sendingRef.current) return;
    sendingRef.current = true;

    setInput("");
    setIsLoading(true);

    // Replace any previous Q/A with the new one.
    setQa({ q: text, a: "" });

    try {
      await streamAssistantReply(text, (delta) => {
        setQa((prev) => {
          if (!prev) return prev;
          return { ...prev, a: prev.a + delta };
        });
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setQa((prev) => {
        if (!prev) return prev;
        return prev.a.trim() === "" ? { ...prev, a: `Error: ${msg}` } : prev;
      });
    } finally {
      setIsLoading(false);
      sendingRef.current = false;
    }
  }

  return (
    <div className="w-full max-w-xl space-y-4">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Ask me a question (beta)
      </h2>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder="what's your fav colour?"
          className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-50 outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
        />
        <button
          onClick={onSend}
          disabled={!canSend}
          className="rounded-xl px-4 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Ask
        </button>
      </div>

      {qa && (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-50">
            <span className="font-semibold">Q:</span> {qa.q}
          </div>
          <div className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-50">
            <span className="font-semibold">A:</span>{" "}
            {qa.a || (isLoading ? "…" : "")}
          </div>
        </div>
      )}
    </div>
  );
}
