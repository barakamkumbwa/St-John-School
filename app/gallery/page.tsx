import Image from "next/image";
import { ArrowDown, Camera, Images } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/lib/data/gallery";
import { schoolInfo } from "@/lib/site";

export const metadata = {
  title: "Gallery",
  description: "Explore campus, classroom, sports, events, and student life at St. John Secondary School.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="overflow-hidden bg-cream-50 py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-9 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
            <ScrollReveal>
              <p className="section-eyebrow">St. John · Photo gallery</p>
              <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-6xl">A closer look at life here.</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-navy-600 sm:text-lg sm:leading-8">Explore the classrooms, campus, celebrations, and everyday moments that bring our school community together.</p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a href="#photo-collection" className="inline-flex items-center gap-2 bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800">Browse photos <ArrowDown aria-hidden="true" className="h-4 w-4 text-gold-300" /></a>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy-600"><Images aria-hidden="true" className="h-4 w-4 text-gold-700" />{galleryItems.length} moments</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <Image src="/images/gallery-4.jpg" alt="School campus grounds" fill sizes="(max-width: 1024px) 100vw, 50vw" preload className="object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 border border-white/25 bg-navy-950/45 px-4 py-3 text-white backdrop-blur-sm">
                  <span className="flex h-9 w-9 items-center justify-center bg-gold-300 text-navy-900"><Camera aria-hidden="true" className="h-4 w-4" /></span>
                  <span><span className="block text-xs font-semibold">Life at St. John</span><span className="mt-0.5 block text-[10px] text-white/70">Campus · Learning · Community</span></span>
                </div>
              </div>
              <span aria-hidden="true" className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 border-b-2 border-r-2 border-gold-500" />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section id="photo-collection" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center">
            <p className="section-eyebrow">Moments and memories</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">Explore the gallery.</h2>
            <p className="mt-4 text-sm leading-6 text-navy-600">Choose a category to explore, then open a photo to view it larger.</p>
          </ScrollReveal>
          <GalleryGrid />
        </Container>
      </section>

      <section className="bg-cream-50 py-12 sm:py-16">
        <Container>
          <ScrollReveal className="flex flex-col items-center justify-between gap-5 border border-navy-200 bg-white p-6 text-center sm:flex-row sm:text-left sm:p-8">
            <div>
              <p className="section-eyebrow">Keep in touch</p>
              <h2 className="mt-2 font-heading text-xl font-bold text-navy-900 sm:text-2xl">Follow more moments from St. John.</h2>
              <p className="mt-2 text-sm text-navy-600">Find school updates and community photos on our social channels.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={schoolInfo.social.instagram} target="_blank" rel="noreferrer" className="border border-navy-200 px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-gold-400 hover:text-gold-700">Instagram</a>
              <a href={schoolInfo.social.facebook} target="_blank" rel="noreferrer" className="border border-navy-200 px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-gold-400 hover:text-gold-700">Facebook</a>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
