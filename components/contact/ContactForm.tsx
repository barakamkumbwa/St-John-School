"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact", parentName: data.name }),
      });

      if (!res.ok) throw new Error("Failed to send. Please try again.");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[28rem] flex-col items-center justify-center border-l-4 border-forest-600 bg-white p-8 text-center sm:p-12">
        <CheckCircle2 aria-hidden="true" className="mb-5 h-12 w-12 text-forest-600" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">Message received</p>
        <h3 className="mt-3 font-heading text-3xl font-semibold text-navy-900">Thank you for getting in touch.</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-navy-600">We&apos;ll get back to you within one business day.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 border-b border-gold-500 pb-1 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="h-full border-y border-r border-navy-100 bg-white p-7 sm:p-10 lg:p-12">
      <div className="mb-8 border-b border-navy-100 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">Write to us</p>
        <h2 className="mt-2 font-heading text-2xl font-semibold text-navy-950">Send a message.</h2>
        <p className="mt-2 text-sm leading-6 text-navy-600">We usually respond within one business day.</p>
      </div>
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600">Your name <span className="text-gold-700">*</span></label>
          <input id="contact-name" required type="text" name="name" autoComplete="name" placeholder="Enter your full name" className="w-full border-0 border-b border-navy-200 bg-transparent px-0 py-3 text-base text-navy-900 placeholder:text-sm placeholder:text-navy-300 outline-none transition-colors focus:border-gold-500 focus:ring-0" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600">Email address <span className="text-gold-700">*</span></label>
          <input id="contact-email" required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="w-full border-0 border-b border-navy-200 bg-transparent px-0 py-3 text-base text-navy-900 placeholder:text-sm placeholder:text-navy-300 outline-none transition-colors focus:border-gold-500 focus:ring-0" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600">Phone number</label>
          <input id="contact-phone" type="tel" name="phone" autoComplete="tel" placeholder="+255" className="w-full border-0 border-b border-navy-200 bg-transparent px-0 py-3 text-base text-navy-900 placeholder:text-sm placeholder:text-navy-300 outline-none transition-colors focus:border-gold-500 focus:ring-0" />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600">Subject <span className="text-gold-700">*</span></label>
          <input id="contact-subject" required type="text" name="subject" placeholder="e.g. Admissions inquiry" className="w-full border-0 border-b border-navy-200 bg-transparent px-0 py-3 text-base text-navy-900 placeholder:text-sm placeholder:text-navy-300 outline-none transition-colors focus:border-gold-500 focus:ring-0" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600">Message <span className="text-gold-700">*</span></label>
          <textarea id="contact-message" required name="message" rows={4} placeholder="Tell us how we can help..." className="w-full resize-y border-0 border-b border-navy-200 bg-transparent px-0 py-3 text-base leading-6 text-navy-900 placeholder:text-sm placeholder:text-navy-300 outline-none transition-colors focus:border-gold-500 focus:ring-0" />
        </div>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-5 flex items-start gap-2 border-l-2 border-red-600 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
          <p>{errorMsg}</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="mt-6 inline-flex min-h-14 w-full items-center justify-between gap-4 bg-gold-500 px-5 py-4 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-56">
        {status === "loading" ? (
          <><span className="inline-flex items-center gap-2"><Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" /> Sending...</span><ArrowRight aria-hidden="true" className="h-4 w-4" /></>
        ) : (
          <><span>Send message</span><ArrowRight aria-hidden="true" className="h-4 w-4" /></>
        )}
      </button>
    </form>
  );
}
