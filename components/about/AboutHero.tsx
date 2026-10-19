import { ArrowDown } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AboutHeroSlideshow } from "@/components/about/AboutHeroSlideshow";
import { schoolInfo } from "@/lib/site";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#14213e] text-white">
      <AboutHeroSlideshow />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#101b34]/95 via-[#14213e]/80 to-[#14213e]/55" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#101b34]/50 to-transparent" />

      <Container className="relative z-10">
        <div className="flex min-h-[410px] flex-col justify-center py-16 sm:min-h-[470px] sm:py-20 lg:min-h-[520px]">
          <ScrollReveal className="max-w-3xl">
            <p className="section-eyebrow text-gold-300">About St. John</p>
            <h1 className="mt-5 max-w-[14ch] font-heading text-4xl font-bold leading-[1.04] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              A legacy of excellence. <span className="text-gold-300">A future of promise.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Discover the story, vision, and people behind a school committed to helping young people thrive.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10 flex max-w-3xl flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/20 pt-5">
            <span className="font-display text-sm tracking-[0.12em] text-white/80">{schoolInfo.location}</span>
            <span className="h-1 w-1 rounded-full bg-gold-300" aria-hidden="true" />
            <span className="font-display text-sm tracking-[0.12em] text-white/80">Established {schoolInfo.foundedYear}</span>
            <a href="#our-history" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-white">
              Explore our story <ArrowDown className="h-4 w-4" />
            </a>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
