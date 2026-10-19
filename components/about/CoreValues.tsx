import Image from "next/image";
import { ShieldCheck, BookOpen, HeartHandshake, Lightbulb } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "We pursue high standards in teaching and learning, encouraging every student to reach their potential.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We value honesty, accountability, and strong moral principles in every part of school life.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description: "We nurture compassion and responsibility, inspiring students to contribute to their communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creativity and critical thinking, preparing students for new opportunities.",
  },
];

export function CoreValues() {
  return (
    <section className="relative isolate overflow-hidden bg-[#14213e] py-20 sm:py-24">
      <Image
        src="/images/gallery-1.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-center opacity-25"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#101b34]/95 via-[#14213e]/90 to-[#14213e]/95" />
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">What Guides Us</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
            Four principles shape how we learn, lead, and serve our community.
          </p>
        </ScrollReveal>

        <ScrollReveal shuffle className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {values.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group relative flex min-h-[250px] flex-col border border-navy-100 bg-white p-6 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-gold-100 group-hover:text-gold-800">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <span aria-hidden="true" className="font-display text-sm tracking-[0.16em] text-navy-300">0{index + 1}</span>
              </div>
              <h3 className="mt-7 font-heading text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-navy-600">{description}</p>
              <span aria-hidden="true" className="absolute inset-x-6 bottom-0 h-[3px] origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />
            </article>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
