"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  shuffle?: boolean;
  direction?: "up" | "right";
  threshold?: number;
  rootMargin?: string;
}

export function ScrollReveal({ children, className = "", stagger = false, shuffle = false, direction = "up", threshold = 0.12, rootMargin = "0px 0px -40px 0px" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    document.documentElement.classList.add("motion-ready");
    let transitionTimer: number | undefined;
    const clearTransitionTimer = () => {
      window.clearTimeout(transitionTimer);
      transitionTimer = undefined;
    };

    if (shuffle) element.classList.add("is-shuffling");

    if (!("IntersectionObserver" in window)) {
      element.classList.remove("is-shuffling");
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (shuffle) {
          clearTransitionTimer();
          if (entry.isIntersecting) {
            if (!element.classList.contains("is-visible")) {
              transitionTimer = window.setTimeout(() => {
                element.classList.remove("is-shuffling");
                element.classList.add("is-visible");
              }, 550);
            }
          } else if (element.classList.contains("is-visible")) {
            transitionTimer = window.setTimeout(() => {
              element.classList.add("is-shuffling");
              element.classList.remove("is-visible");
            }, 1300);
          }
        } else if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      clearTransitionTimer();
    };
  }, [shuffle, threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal${direction === "right" ? " scroll-reveal-from-right" : ""}${stagger ? " scroll-reveal-stagger" : ""}${shuffle ? " scroll-shuffle-cards is-shuffling" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
