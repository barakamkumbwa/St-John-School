"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems } from "@/lib/data/gallery";
import { ScrollReveal } from "@/components/ScrollReveal";

const categories = ["All", "Campus", "Academics", "Sports", "Events", "Graduation"] as const;
type Category = (typeof categories)[number];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredItems = useMemo(
    () => activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  const selectedIndex = filteredItems.findIndex((item) => item.id === selectedId);
  const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

  useEffect(() => {
    if (!selectedItem) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowRight") {
        setSelectedId(filteredItems[(selectedIndex + 1) % filteredItems.length]?.id ?? null);
      }
      if (event.key === "ArrowLeft") {
        setSelectedId(filteredItems[(selectedIndex - 1 + filteredItems.length) % filteredItems.length]?.id ?? null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedItem, selectedIndex, filteredItems]);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setSelectedId(null);
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => selectCategory(category)}
            className={`border px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === category ? "border-navy-900 bg-navy-900 text-white" : "border-navy-200 bg-white text-navy-700 hover:border-gold-400 hover:text-navy-900"}`}
          >
            {category}
            {category === "All" && <span className="ml-2 text-xs opacity-70">{galleryItems.length}</span>}
          </button>
        ))}
      </div>

      <ScrollReveal stagger className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[210px] lg:grid-cols-4">
        {filteredItems.map((item) => {
          const spanClass = item.span === "wide" ? "col-span-2" : item.span === "tall" ? "row-span-2" : "";
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              aria-label={`Open photo: ${item.title}`}
              className={`group relative isolate overflow-hidden bg-gradient-to-br ${item.gradient} ${spanClass} text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="block font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">{item.category}</span>
                <span className="mt-1 block font-heading text-sm font-bold leading-snug text-white sm:text-base">{item.title}</span>
              </span>
              <span aria-hidden="true" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-white/50 bg-navy-950/30 text-white opacity-0 transition-opacity group-hover:opacity-100">+</span>
            </button>
          );
        })}
      </ScrollReveal>

      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${selectedItem.title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 sm:p-8"
          onClick={(event) => { if (event.target === event.currentTarget) setSelectedId(null); }}
        >
          <button type="button" onClick={() => setSelectedId(null)} aria-label="Close photo viewer" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
          {filteredItems.length > 1 && (
            <>
              <button type="button" onClick={() => setSelectedId(filteredItems[(selectedIndex - 1 + filteredItems.length) % filteredItems.length].id)} aria-label="Previous photo" className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8">
                <ChevronLeft aria-hidden="true" className="h-6 w-6" />
              </button>
              <button type="button" onClick={() => setSelectedId(filteredItems[(selectedIndex + 1) % filteredItems.length].id)} aria-label="Next photo" className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8">
                <ChevronRight aria-hidden="true" className="h-6 w-6" />
              </button>
            </>
          )}
          <div className="relative flex h-full max-h-[82vh] w-full max-w-6xl flex-col items-center justify-center">
            <div className="relative min-h-0 w-full flex-1">
              <Image src={selectedItem.image} alt={selectedItem.title} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="pt-4 text-center text-white">
              <p className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">{selectedItem.category}</p>
              <p className="mt-1 font-heading text-lg font-semibold">{selectedItem.title}</p>
              <p className="mt-1 text-xs text-white/60">{selectedIndex + 1} / {filteredItems.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
