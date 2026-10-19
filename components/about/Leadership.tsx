import { Quote } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Leadership() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ScrollReveal threshold={0.4} rootMargin="0px" className="relative border-l-2 border-gold-500 pl-6 sm:pl-8">
            <Quote aria-hidden="true" className="h-8 w-8 text-gold-500" strokeWidth={1.5} />
            <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-navy-900 text-balance sm:text-3xl">
              “We don&apos;t just teach subjects; we build character, ignite curiosity, and nurture future leaders.”
            </p>
            <div className="mt-7 flex items-center gap-4 border-t border-navy-100 pt-5">
              <span className="relative inline-flex h-[100px] w-[100px] shrink-0 items-center justify-center">
                <Image
                  src="/images/mrme.jpeg"
                  alt="Head of School at St. John Secondary School"
                  width={88}
                  height={88}
                  className="relative z-10 h-[88px] w-[88px] rounded-full object-cover object-top ring-2 ring-white"
                />
                <svg aria-hidden="true" viewBox="0 0 100 100" className="leadership-photo-orbit pointer-events-none absolute inset-0 h-full w-full">
                  <circle cx="50" cy="50" r="47" fill="none" stroke="#d9e0f0" strokeWidth="1.5" />
                  <circle className="leadership-photo-orbit-complete" cx="50" cy="50" r="47" fill="none" stroke="#D4A017" strokeWidth="2.5" />
                  <circle
                    className="leadership-photo-orbit-progress"
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="#D4A017"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="76 220"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </span>
              <div>
                <p className="font-heading font-semibold text-navy-900">Head of School</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-navy-500">St. John Secondary School</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" threshold={0.4} rootMargin="0px" className="self-center">
            <p className="section-eyebrow">A message from the school</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 text-balance sm:text-4xl">
              Every learner deserves the chance to thrive.
            </h2>
            <div className="mt-6 space-y-5 border-t border-navy-200 pt-5 text-base leading-7 text-navy-600">
              <p>
                Choosing a school is one of the most important decisions a family can make. At St. John, we value the partnership between students, parents, and teachers in shaping the next generation.
              </p>
              <p>
                Our staff work to create a safe, supportive, and challenging environment where every student is encouraged to learn, grow, and reach their potential.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
