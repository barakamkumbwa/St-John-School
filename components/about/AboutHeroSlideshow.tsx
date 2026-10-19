"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/gallery-banner.jpg",
  "/images/child1.jpeg",
  "/images/about-1.jpeg",
];

export function AboutHeroSlideshow() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${index === activeImage ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt=""
            fill
            preload={index === 0}
            sizes="100vw"
            className="hero-image-motion object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}
