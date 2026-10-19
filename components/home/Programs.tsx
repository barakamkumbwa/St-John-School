import Link from "next/link";
import { BookOpen, FlaskConical, Trophy, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const programs = [
  {
    icon: BookOpen,
    title: "O-Level (Form 1–4)",
    description:
      "A strong foundation across sciences, humanities, languages, and mathematics — preparing students for NECTA and A-Level entry.",
    href: "/academics#o-level",
    accent: "navy",
    number: "01",
    label: "FOUNDATION",
  },
  {
    icon: FlaskConical,
    title: "A-Level (Form 5–6)",
    description:
      "Specialized combinations — PCB, PCM, HGE, EGM, and more — with expert guidance for university admission and career success.",
    href: "/academics/a-level#a-level",
    accent: "forest",
    number: "02",
    label: "SPECIALIZATION",
  },
  {
    icon: Trophy,
    title: "Co-Curricular Life",
    description:
      "Sports, debate, music, science clubs, and leadership programs that shape well-rounded, confident young men and women.",
    href: "/academics#co-curricular",
    accent: "gold",
    number: "03",
    label: "BEYOND CLASS",
  },
];

const accentClasses = {
  navy: {
    icon: "bg-navy-50 text-navy-800",
    line: "bg-navy-500",
    number: "text-navy-500",
  },
  forest: {
    icon: "bg-forest-500/10 text-forest-700",
    line: "bg-forest-500",
    number: "text-forest-600",
  },
  gold: {
    icon: "bg-gold-100 text-gold-800",
    line: "bg-gold-500",
    number: "text-gold-700",
  },
};

export function Programs() {
  return (
    <section className="relative isolate overflow-hidden bg-[#14213e] py-20 sm:py-24">
      <Image
        src="/images/gallery-4.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-center opacity-30"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#101b34]/95 via-[#14213e]/90 to-[#14213e]/95" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,0.16),transparent_52%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Our Programs</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            A pathway for every ambitious learner
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-navy-100/80">
            From Form 1 to Form 6, our curriculum is designed to challenge, inspire, and prepare.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-14">
          {programs.map((p) => {
            const Icon = p.icon;
            const accent = accentClasses[p.accent as keyof typeof accentClasses];
            return (
              <Link
                key={p.title}
                href={p.href}
                className="group relative isolate flex min-h-[330px] flex-col overflow-hidden border border-navy-100 bg-white p-7 shadow-[0_8px_28px_-20px_rgba(10,25,56,0.32)] transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:border-gold-400 hover:shadow-[0_24px_50px_-24px_rgba(10,25,56,0.28)] motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
              >
                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${accent.line}`} />
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 z-0 h-48 w-48 rounded-full bg-navy-50/70 transition-transform duration-700 ease-out group-hover:scale-125" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:rotate-[-6deg] group-hover:scale-105 ${accent.icon}`}>
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <span className={`font-display text-sm font-medium tracking-[0.18em] ${accent.number}`}>{p.number}</span>
                </div>

                <p className="relative z-10 mt-7 text-[10px] font-bold tracking-[0.2em] text-navy-400">{p.label}</p>
                <h3 className="relative z-10 mt-2 font-heading text-xl font-bold text-navy-900 transition-colors duration-300 group-hover:text-forest-700 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-navy-600">
                  {p.description}
                </p>

                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-navy-100 pt-5 text-sm font-semibold text-navy-800">
                  Learn More
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 transition-all duration-300 group-hover:border-navy-800 group-hover:bg-navy-800 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </ScrollReveal>
      </Container>
    </section>
  );
}
