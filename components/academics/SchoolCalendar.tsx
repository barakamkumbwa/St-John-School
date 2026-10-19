import { CalendarDays, CheckCircle2, Clock3, Flag, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const terms = [
  {
    number: "01",
    name: "Term One",
    opening: "13 January 2026",
    closing: "5 June 2026",
    exams: [
      { name: "Opening examination", date: "13 January 2026" },
      { name: "Internal term examinations", date: "Dates to be announced" },
    ],
  },
  {
    number: "02",
    name: "Term Two",
    opening: "6 July 2026",
    closing: "13 November 2026",
    exams: [
      { name: "Opening examination", date: "6 July 2026" },
      { name: "Internal term examinations", date: "Dates to be announced" },
      { name: "FTNA national assessment", date: "12–23 October 2026" },
      { name: "CSEE national examinations", date: "19 October–6 November 2026" },
    ],
  },
];

const events = [
  { date: "10 Jan", name: "Entrance examination", detail: "2026 intake" },
  { date: "20 Jan", name: "Admission results", detail: "2026 intake" },
  { date: "12–23 Aug", name: "FEASSA games", detail: "Regional school sports event · Morogoro" },
];

export function SchoolCalendar() {
  return (
    <section id="school-calendar" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <ScrollReveal className="grid gap-8 border-b border-navy-200 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Plan the year</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl lg:text-5xl">
              School Calendar <span className="text-gold-600">2026</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-navy-600 sm:text-lg sm:leading-8">
              Term dates, examination periods, and key dates for the school community.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 border border-navy-200 bg-cream-50 px-4 py-3 text-sm font-semibold text-navy-800">
            <CalendarDays aria-hidden="true" className="h-5 w-5 text-gold-600" /> Academic year · 2026
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-8 grid gap-5 lg:grid-cols-2">
          {terms.map((term) => (
            <article key={term.number} className="border border-navy-200 bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-navy-100 pb-5">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">Term {term.number}</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-navy-900">{term.name}</h3>
                </div>
                <span className="flex h-11 w-11 items-center justify-center bg-navy-50 text-navy-800"><GraduationCap aria-hidden="true" className="h-5 w-5" /></span>
              </div>

              <dl className="grid grid-cols-2 gap-4 py-5">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy-500"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-forest-600" /> Opens</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy-900">{term.opening}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy-500"><Clock3 aria-hidden="true" className="h-4 w-4 text-gold-600" /> Closes</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy-900">{term.closing}</dd>
                </div>
              </dl>

              <div className="border-t border-navy-100 pt-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-500">Examinations</h4>
                <ul className="mt-3 space-y-3">
                  {term.exams.map((exam) => (
                    <li key={exam.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm">
                      <span className="text-navy-700">{exam.name}</span>
                      <span className={exam.date.startsWith("Dates") ? "font-medium text-gold-700" : "font-semibold text-navy-900"}>{exam.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-gold-50 text-gold-700"><Flag aria-hidden="true" className="h-5 w-5" /></span>
            <div>
              <p className="section-eyebrow">Mark the date</p>
              <h3 className="mt-1 font-heading text-xl font-bold text-navy-900">Important events</h3>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.name} className="flex gap-4 border border-navy-100 bg-cream-50/60 p-4">
              <span className="min-w-[4.5rem] font-display text-sm font-semibold tracking-wide text-gold-700">{event.date}</span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">{event.name}</span>
                <span className="mt-1 block text-xs leading-5 text-navy-500">{event.detail}</span>
              </span>
            </article>
          ))}
        </ScrollReveal>

        <p className="mt-8 border-l-2 border-gold-500 bg-cream-50 px-4 py-3 text-xs leading-5 text-navy-600">
          Internal examination dates and school events are subject to confirmation by the school. National examination dates follow NECTA timetables; term two closing date reflects the Ministry of Education update.
        </p>
      </Container>
    </section>
  );
}
