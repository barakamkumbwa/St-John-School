import { ArrowDownRight, BookOpen, CalendarDays, Check, CheckCircle2, Clock3, Flag, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const combinations = [
  {
    code: "PCB",
    name: "Physics, Chemistry, Biology",
    careers: "Medicine, Pharmacy, Nursing, Biomedical Science",
  },
  {
    code: "PCM",
    name: "Physics, Chemistry, Mathematics",
    careers: "Engineering, Architecture, Technology",
  },
  {
    code: "HGE",
    name: "History, Geography, Economics",
    careers: "Law, Business, Public Administration, Economics",
  },
  {
    code: "EGM",
    name: "Economics, Geography, Mathematics",
    careers: "Finance, Statistics, Actuarial Science",
  },
];

const sections = [
  { href: "#form-five-six", label: "Form 5–6" },
  { href: "#subject-combinations", label: "Subject combinations" },
  { href: "#a-level-calendar", label: "Academic Calendar" },
];

const terms = [
  {
    number: "01",
    name: "Term One",
    opening: "6 July 2026",
    closing: "13 November 2026",
    exams: [
      { name: "Opening examination", date: "6 July 2026" },
      { name: "Internal term examinations", date: "Dates to be announced" },
    ],
  },
  {
    number: "02",
    name: "Term Two",
    opening: "January 2027 · date to be confirmed",
    closing: "June 2027 · date to be confirmed",
    exams: [
      { name: "Opening examination", date: "January 2027 · date to be confirmed" },
      { name: "Internal term examinations", date: "Dates to be announced" },
      { name: "ACSEE national examinations", date: "May 2027 · NECTA timetable pending" },
    ],
  },
];

export function ALevel() {
  return (
    <section id="a-level" className="scroll-mt-20 bg-cream-50 py-20 sm:py-24">
      <Container>
        <ScrollReveal className="grid gap-8 border-b border-navy-200 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">A-Level · Form 5–6</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl lg:text-5xl">
              Build a pathway for what comes next.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-navy-600 sm:text-lg sm:leading-8">
              A-Level gives students the opportunity to study a selected subject combination and prepare for the Advanced Certificate of Secondary Education Examination (ACSEE).
            </p>
          </div>
          <nav aria-label="A-Level sections" className="flex flex-wrap gap-2 lg:max-w-[400px] lg:justify-end">
            {sections.map(({ href, label }) => (
              <a key={href} href={href} className="inline-flex items-center gap-1.5 border border-navy-200 bg-white px-3 py-2 text-xs font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-navy-900 sm:text-sm">
                {label}<ArrowDownRight aria-hidden="true" className="h-3.5 w-3.5 text-gold-600" />
              </a>
            ))}
          </nav>
        </ScrollReveal>

        <div className="grid gap-12 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:pt-14">
          <ScrollReveal>
            <div id="form-five-six" className="relative scroll-mt-28 overflow-hidden bg-[#14213e] p-7 text-white sm:p-9">
              <div aria-hidden="true" className="absolute -right-10 -top-12 font-display text-[190px] font-semibold leading-none text-white/[0.045]">06</div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-gold-300 text-navy-900"><BookOpen aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></span>
                  <p className="section-eyebrow text-gold-300">Two years of advanced study</p>
                </div>
                <h2 className="mt-7 max-w-sm font-heading text-2xl font-bold leading-tight sm:text-3xl">Choose a path. Build depth.</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                  Form 5 and Form 6 focus on a chosen combination of subjects, building deeper knowledge and preparing learners for further study and future opportunities.
                </p>
                <div className="mt-8 grid grid-cols-2 border-y border-white/20 py-4">
                  {["Form 5", "Form 6"].map((form, index) => (
                    <div key={form} className="border-r border-white/15 last:border-0">
                      <span className="block font-display text-xs tracking-[0.12em] text-gold-300">0{index + 5}</span>
                      <span className="mt-1 block text-sm font-semibold text-white">{form}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-5 text-white/60">The A-Level cycle concludes with the ACSEE national examination.</p>
              </div>
            </div>

          </ScrollReveal>
          <ScrollReveal>
            <div id="subject-combinations" className="flex scroll-mt-28 items-end justify-between gap-4 border-b border-navy-200 pb-4">
              <div>
                <p className="section-eyebrow">A-Level curriculum</p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">Specialize through a subject combination.</h2>
              </div>
              <GraduationCap aria-hidden="true" className="mb-1 hidden h-8 w-8 text-gold-600 sm:block" strokeWidth={1.5} />
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-navy-600">
              Form 5 and Form 6 follow the advanced secondary curriculum through a focused subject combination. Explore the combinations offered and fields they may connect to.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {combinations.map((combination, index) => (
                <article key={combination.code} className="group border border-navy-200 bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_18px_36px_-28px_rgba(10,25,56,0.5)] sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">Combination 0{index + 1}</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-navy-900">{combination.code}</h3>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center bg-navy-50 text-navy-800 transition-colors group-hover:bg-gold-100"><GraduationCap aria-hidden="true" className="h-5 w-5" /></span>
                  </div>
                  <p className="mt-3 text-sm font-medium leading-6 text-navy-700">{combination.name}</p>
                  <div className="mt-5 border-t border-navy-100 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-500">Possible pathways</p>
                    <p className="mt-2 text-xs leading-5 text-navy-600">{combination.careers}</p>
                  </div>
                  <span className="mt-5 flex items-center gap-2 text-xs font-semibold text-navy-700"><Check aria-hidden="true" className="h-4 w-4 text-forest-600" /> Subject combination</span>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </Container>

      <section id="a-level-calendar" className="scroll-mt-20 mt-20 bg-white py-20 sm:mt-24 sm:py-24">
        <Container>
          <ScrollReveal className="grid gap-8 border-b border-navy-200 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Plan the year</p>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl lg:text-5xl">
                A-Level Calendar <span className="text-gold-600">2026/27</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-navy-600 sm:text-lg sm:leading-8">
                Term dates and examination periods for Form 5 and Form 6.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 border border-navy-200 bg-cream-50 px-4 py-3 text-sm font-semibold text-navy-800">
              <CalendarDays aria-hidden="true" className="h-5 w-5 text-gold-600" /> Academic year · 2026/27
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
                        <span className={exam.date.startsWith("Dates") || exam.date.includes("pending") ? "font-medium text-gold-700" : "font-semibold text-navy-900"}>{exam.date}</span>
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
          <ScrollReveal stagger className="mt-6 grid gap-3 sm:grid-cols-2">
            <article className="flex gap-4 border border-navy-100 bg-cream-50/60 p-4">
              <span className="min-w-[4.5rem] font-display text-sm font-semibold tracking-wide text-gold-700">May 2027</span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">ACSEE examinations</span>
                <span className="mt-1 block text-xs leading-5 text-navy-500">NECTA timetable and exact dates to be announced.</span>
              </span>
            </article>
            <article className="flex gap-4 border border-navy-100 bg-cream-50/60 p-4">
              <span className="min-w-[4.5rem] font-display text-sm font-semibold tracking-wide text-gold-700">TBC</span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">School events</span>
                <span className="mt-1 block text-xs leading-5 text-navy-500">Dates will be shared by the school when confirmed.</span>
              </span>
            </article>
          </ScrollReveal>
          <p className="mt-8 border-l-2 border-gold-500 bg-cream-50 px-4 py-3 text-xs leading-5 text-navy-600">
            The Ministry of Education revised the 2026 school closing date to 13 November. January and June 2027 term dates, internal examinations, school events, and the 2027 ACSEE timetable are subject to official confirmation.
          </p>
        </Container>
      </section>
    </section>
  );
}
