"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, GraduationCap } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm the St. John virtual assistant. Ask me anything about admissions, fees, subjects, or campus life.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.slice(1) }),
      });

      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't respond right now. Please try again or contact us at info@stjohnsecondary.ac.tz." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-xl hover:bg-gold-400 hover:scale-105 transition-all"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div role="dialog" aria-label="St. John virtual assistant" className="fixed bottom-24 right-6 z-50 flex max-h-[70vh] w-[calc(100vw-3rem)] flex-col overflow-hidden border border-navy-200 bg-white shadow-[0_24px_70px_-24px_rgba(6,15,34,0.65)] animate-scale-in sm:w-96">
          {/* Header */}
          <div className="relative flex items-center gap-3 border-b border-white/10 bg-navy-950 p-5 text-white">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest-600 via-gold-400 to-navy-700" />
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-400/70 bg-white/5 text-gold-300">
              <GraduationCap aria-hidden="true" className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold tracking-wide">St. John Assistant</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-white/65"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Usually replies instantly</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="grid h-9 w-9 shrink-0 place-items-center border border-white/20 text-white/75 transition-colors hover:border-gold-300 hover:bg-white/10 hover:text-white"><X aria-hidden="true" className="h-4 w-4" /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex min-h-[200px] flex-1 flex-col gap-3 overflow-y-auto bg-cream-50 p-4 sm:p-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "border-l-2 border-gold-400 bg-navy-900 text-white"
                      : "border border-navy-100 border-l-2 border-l-gold-500 bg-white text-navy-800 shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div aria-label="Assistant is typing" className="border border-navy-100 border-l-2 border-l-gold-500 bg-white px-4 py-3 text-navy-900">
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin text-gold-600" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex gap-2 border-t border-navy-200 bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={loading}
              className="min-w-0 flex-1 border border-navy-200 bg-cream-50 px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-500 focus:bg-white focus:ring-1 focus:ring-gold-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold-500 text-navy-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
