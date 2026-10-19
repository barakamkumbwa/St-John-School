import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "St. John gave me more than an education — it gave me confidence. The teachers saw potential in me I didn't see in myself.",
    name: "Amina M.",
    role: "Class of 2023 · Now at University of Dar es Salaam",
    initials: "AM",
    bubble: "bg-[#eaf3ff]",
    tail: "left-9 border-t-[#eaf3ff]",
  },
  {
    quote:
      "As a parent, I wanted a school that would shape my son's character, not just his grades. St. John delivered both.",
    name: "Mr. Joseph K.",
    role: "Parent · Form 3 Student",
    initials: "JK",
    bubble: "bg-[#fff1e6]",
    tail: "right-9 border-t-[#fff1e6]",
  },
  {
    quote:
      "The science labs and the debate club changed my life. I left St. John ready for anything.",
    name: "David L.",
    role: "Class of 2021 · Medical Student, Muhimbili",
    initials: "DL",
    bubble: "bg-[#eaf6ee]",
    tail: "left-9 border-t-[#eaf6ee]",
  },
  {
    quote:
      "At St. John, supportive teachers and a welcoming community help students grow in knowledge, confidence, and character.",
    name: "St. John Community",
    role: "Learning and growing together",
    initials: "SJ",
    bubble: "bg-[#f2efff]",
    tail: "right-9 border-t-[#f2efff]",
  },
];

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full fill-none stroke-navy-400" strokeWidth="1">
          <path d="M-80 160C90 40 190 270 360 155S620 35 790 160s280 210 440 60 250-70 310 5" />
          <path d="M-100 195C70 75 205 305 375 190S635 70 805 195s280 210 440 60 250-70 310 5" />
          <path d="M-120 230C50 110 220 340 390 225S650 105 820 230s280 210 440 60 250-70 310 5" />
          <path d="M40 560c140-170 270 90 420-55s260-165 385-20 240 150 360 5 210-125 310-25" />
          <path d="M20 595c140-170 270 90 420-55s260-165 385-20 240 150 360 5 210-125 310-25" />
          <path d="M0 630c140-170 270 90 420-55s260-165 385-20 240 150 360 5 210-125 310-25" />
          <path d="M510 910c-80-130 80-240 225-165s235 20 210-115 100-220 245-150 180-30 250-120" />
          <path d="M545 920c-80-130 80-240 225-165s235 20 210-115 100-220 245-150 180-30 250-120" />
        </svg>
      </div>
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Voices of St. John</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 text-balance sm:text-4xl">
            What our community says
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-navy-600">
            Stories from the students, families, and alumni who make St. John special.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-10 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col px-1 pb-3 sm:px-2">
              <blockquote className={`relative mb-4 flex min-h-[320px] flex-1 flex-col rounded-[2rem] border border-navy-900/5 px-6 pb-7 pt-5 text-navy-900 shadow-[0_12px_32px_-25px_rgba(10,25,56,0.22)] transition-transform duration-300 hover:-translate-y-1 sm:px-7 sm:pb-8 ${t.bubble}`}>
                <span aria-hidden="true" className="block font-serif text-5xl leading-[0.7] text-gold-600">“</span>
                <p className="mt-3 text-[15px] leading-7 sm:text-base">{t.quote}</p>
                <span aria-hidden="true" className={`absolute bottom-[-13px] h-0 w-0 border-l-[14px] border-r-[14px] border-t-[16px] border-l-transparent border-r-transparent ${t.tail}`} />
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-3 px-2 text-navy-900">
                <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-400 bg-white font-display text-sm font-semibold text-forest-700">{t.initials}</span>
                <span>
                  <span className="block font-heading text-sm font-semibold">{t.name}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-navy-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
