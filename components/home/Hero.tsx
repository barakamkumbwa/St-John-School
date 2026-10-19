"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { schoolInfo } from "@/lib/site";

const slides = [
  { image: "/images/gallery-banner.jpg", topLine: "Learn with confidence", bottomLine: "Build skills for life" },
  { image: "/images/child1.jpeg", topLine: "Find your strengths", bottomLine: "Shape your future" },
  { image: "/images/about-1.jpeg", topLine: "Learn, lead, and", bottomLine: "thrive together" },
];

const quickLinks = [
  { icon: BookOpen, title: "O-Level", detail: "Form 1–4", href: "/academics#o-level" },
  { icon: GraduationCap, title: "A-Level", detail: "Form 5–6", href: "/academics/a-level#a-level" },
  { icon: Users, title: "School Life", detail: "Learn beyond class", href: "/gallery" },
  { icon: ArrowRight, title: "Admissions", detail: "Join St. John", href: "/admissions/apply" },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [nextPhraseIndex, setNextPhraseIndex] = useState(1);
  const [typedText, setTypedText] = useState("");
  const [typingMode, setTypingMode] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const phrase = `${slides[phraseIndex].topLine}\n${slides[phraseIndex].bottomLine}`;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setTypedText(phrase);
      return;
    }

    let timeout: number | undefined;

    if (typingMode === "typing" && typedText.length === phrase.length) {
      setTypingMode("holding");
    } else if (typingMode === "typing") {
      timeout = window.setTimeout(() => {
        setTypedText((current) => phrase.slice(0, current.length + 1));
      }, 85);
    } else if (typingMode === "holding") {
      timeout = window.setTimeout(() => {
        setActiveSlide(nextPhraseIndex);
        setNextPhraseIndex((nextPhraseIndex + 1) % slides.length);
        setTypingMode("deleting");
      }, 2600);
    } else if (typedText.length > 0) {
      timeout = window.setTimeout(() => {
        setTypedText((current) => current.slice(0, -1));
      }, 45);
    } else {
      setPhraseIndex(nextPhraseIndex);
      setTypingMode("typing");
    }

    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [nextPhraseIndex, phraseIndex, typedText, typingMode]);

  function showSlide(index: number) {
    const nextIndex = (index + slides.length) % slides.length;
    setActiveSlide(nextIndex);
    setNextPhraseIndex((nextIndex + 1) % slides.length);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhraseIndex(nextIndex);
      setTypedText(`${slides[nextIndex].topLine}\n${slides[nextIndex].bottomLine}`);
      setTypingMode("holding");
      return;
    }
    setTypingMode("deleting");
  }

  const currentPhrase = slides[phraseIndex];
  const visibleTopLine = typedText.split("\n")[0] ?? "";
  const visibleBottomLine = typedText.includes("\n") ? typedText.split("\n")[1] ?? "" : "";
  const cursorOnTopLine = !typedText.includes("\n");

  return (
    <section className="bg-cream-50 pb-5 sm:pb-6">
      <div className="relative isolate min-h-[600px] overflow-hidden bg-navy-950 sm:min-h-[650px] lg:min-h-[min(740px,calc(100svh-130px))]">
        {slides.map((item, index) => (
          <div key={item.image} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
            <Image src={item.image} alt="" fill preload={index === 0} sizes="100vw" className="hero-image-motion object-cover object-center" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/65 to-navy-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/15" />

        <Container className="relative z-10 h-full min-h-[600px] sm:min-h-[650px] lg:min-h-[min(740px,calc(100svh-130px))]">
          <div className="flex min-h-[600px] max-w-4xl flex-col justify-center pb-16 pt-12 text-white sm:min-h-[650px] lg:min-h-[min(740px,calc(100svh-130px))] lg:pb-20">
            <p className="hero-enter hero-delay-1 mb-5 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-200 sm:mb-7 sm:text-sm sm:tracking-[0.2em]">
              <span className="hero-pulse h-2 w-2 shrink-0 rounded-full bg-gold-400" />
              {schoolInfo.shortName.toUpperCase()} <span className="text-white/50">·</span> {schoolInfo.address.city.toUpperCase()}
            </p>
            <h1 aria-label={`${currentPhrase.topLine}. ${currentPhrase.bottomLine}.`} className="hero-enter hero-delay-2 grid h-[2.16em] w-fit max-w-full grid-rows-2 font-display text-[clamp(2rem,7vw,2.7rem)] font-semibold leading-[1.08] tracking-[0.01em] sm:text-6xl lg:text-7xl">
              <span aria-hidden="true" className="block whitespace-nowrap text-white">
                {visibleTopLine}
                {cursorOnTopLine && <span className="ml-1 inline-block h-[0.86em] w-[2px] translate-y-[0.08em] animate-pulse bg-gold-300" />}
              </span>
              <span aria-hidden="true" className="block whitespace-nowrap text-gold-300">
                {visibleBottomLine}
                {!cursorOnTopLine && <span className="ml-1 inline-block h-[0.86em] w-[2px] translate-y-[0.08em] animate-pulse bg-gold-300" />}
              </span>
            </h1>
            <p className="hero-enter hero-delay-3 mt-3 max-w-[34rem] text-[15px] leading-7 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
              Strong learning. Good character. Room to grow.
            </p>
            <div className="hero-enter hero-delay-4 mt-7 flex flex-wrap gap-3 sm:mt-8">
              <Button href="/admissions/apply" size="lg" variant="primary" className="group rounded-sm bg-forest-600 text-white shadow-none hover:bg-forest-500">
                Apply for Admission
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/about" size="lg" variant="outline" className="rounded-sm border-white/70 bg-white/5 text-white hover:bg-white hover:text-navy-900">
                Discover St. John
              </Button>
            </div>
          </div>
        </Container>

        <div className="absolute inset-x-4 bottom-20 z-20 flex items-center justify-between sm:inset-x-7 lg:inset-x-10">
          <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-navy-950/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-navy-900 sm:h-12 sm:w-12">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2" aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}>
            {slides.map((item, index) => (
              <button key={item.image} type="button" onClick={() => showSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide ? "true" : undefined} className={`h-1.5 rounded-full transition-all duration-500 ${index === activeSlide ? "w-8 bg-gold-300" : "w-1.5 bg-white/55 hover:bg-white"}`} />
            ))}
          </div>
          <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-navy-950/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-navy-900 sm:h-12 sm:w-12">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Container>
        <nav aria-label="Explore St. John" className="relative z-20 -mt-8 grid grid-cols-2 overflow-hidden rounded-none border border-navy-100 bg-white shadow-[0_22px_60px_-28px_rgba(10,25,56,0.38)] sm:-mt-9 sm:grid-cols-4">
          {quickLinks.map(({ icon: Icon, title, detail, href }, index) => (
            <a
              key={title}
              href={href}
              style={{ animationDelay: `${250 + index * 110}ms` }}
              className={`hero-card-enter group relative flex min-h-[6.5rem] items-center gap-3 px-4 py-4 transition-[background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:-translate-y-1 hover:bg-cream-50 hover:shadow-[0_16px_32px_-18px_rgba(10,25,56,0.3)] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-forest-600 sm:min-h-28 sm:gap-4 sm:px-5 sm:py-6 lg:px-7 ${index === 1 ? "border-l border-navy-100" : ""} ${index === 2 ? "border-t border-navy-100 sm:border-l sm:border-t-0" : ""} ${index === 3 ? "border-l border-t border-navy-100 sm:border-t-0" : ""}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:bg-forest-600 group-hover:text-white sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[-8deg]" strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-5 text-navy-900 sm:text-base">{title}</span>
                <span className="mt-1 block text-xs leading-5 text-navy-500 sm:text-sm">{detail}</span>
              </span>
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}
