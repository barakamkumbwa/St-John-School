import { ArrowDownRight, BookOpen, Check, GraduationCap, HeartHandshake } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";

const subjects = [
  { group: "Languages & communication", items: ["Kiswahili", "English", "French"] },
  { group: "Science & mathematics", items: ["Mathematics", "Physics", "Chemistry", "Biology"] },
  { group: "Humanities", items: ["Geography", "History", "Civics"] },
  { group: "Business & technology", items: ["Book Keeping", "Commerce", "Computer Studies"] },
];

const sections = [
  { href: "#form-one-four", label: "Form 1–4" },
  { href: "#subjects-curriculum", label: "Subjects & curriculum" },
  { href: "#learning-support", label: "Learning support" },
];

export function OLevel() {
  return (
    <section id="o-level" className="scroll-mt-20 bg-cream-50 py-20 sm:py-24">
      <Container>
        <ScrollReveal className="grid gap-8 border-b border-navy-200 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">O-Level · Form 1–4</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl lg:text-5xl">
              A strong foundation for every next step.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-navy-600 sm:text-lg sm:leading-8">
              A broad secondary education helps learners build knowledge across languages, sciences, humanities, mathematics, and practical subjects.
            </p>
          </div>
          <nav aria-label="O-Level sections" className="flex flex-wrap gap-2 lg:max-w-[400px] lg:justify-end">
            {sections.map(({ href, label }) => (
              <a key={href} href={href} className="inline-flex items-center gap-1.5 border border-navy-200 bg-white px-3 py-2 text-xs font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-navy-900 sm:text-sm">
                {label}<ArrowDownRight aria-hidden="true" className="h-3.5 w-3.5 text-gold-600" />
              </a>
            ))}
          </nav>
        </ScrollReveal>

        <div className="grid gap-12 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:pt-14">
          <ScrollReveal>
            <div id="form-one-four" className="scroll-mt-28 relative overflow-hidden bg-[#14213e] p-7 text-white sm:p-9">
              <div aria-hidden="true" className="absolute -right-10 -top-12 font-display text-[190px] font-semibold leading-none text-white/[0.045]">04</div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-gold-300 text-navy-900"><BookOpen className="h-5 w-5" strokeWidth={1.8} /></span>
                  <p className="section-eyebrow text-gold-300">Four years of growth</p>
                </div>
                <h3 className="mt-7 max-w-sm font-heading text-2xl font-bold leading-tight sm:text-3xl">Learning that builds year by year.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                  From Form 1 through Form 4, students study a balanced range of subjects and develop the knowledge and study habits needed for their next stage.
                </p>
                <div className="mt-8 grid grid-cols-4 border-y border-white/20 py-4">
                  {["Form 1", "Form 2", "Form 3", "Form 4"].map((form, index) => (
                    <div key={form} className="border-r border-white/15 last:border-0">
                      <span className="block font-display text-xs tracking-[0.12em] text-gold-300">0{index + 1}</span>
                      <span className="mt-1 block text-xs font-semibold text-white sm:text-sm">{form}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-5 text-white/60">The O-Level cycle concludes with the Certificate of Secondary Education Examination (CSEE).</p>
              </div>
            </div>

            <div id="learning-support" className="scroll-mt-28 border-b border-navy-200 py-7">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold-50 text-gold-700"><HeartHandshake className="h-5 w-5" strokeWidth={1.8} /></span>
                <div>
                  <p className="section-eyebrow">Learning support</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-navy-900">Guidance along the way.</h3>
                  <p className="mt-3 text-sm leading-6 text-navy-600">
                    Teachers guide learners through classroom teaching, practice, and feedback, helping them strengthen understanding and keep progressing.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div id="subjects-curriculum" className="scroll-mt-28 flex items-end justify-between gap-4 border-b border-navy-200 pb-4">
              <div>
                <p className="section-eyebrow">Subjects & curriculum</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">A balanced subject base.</h3>
              </div>
              <GraduationCap aria-hidden="true" className="mb-1 hidden h-8 w-8 text-gold-600 sm:block" strokeWidth={1.5} />
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-navy-600">
              Learners engage with a range of subjects across key areas of the secondary curriculum.
            </p>
            <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
              {subjects.map(({ group, items }) => (
                <div key={group} className="border-t border-navy-200 py-5">
                  <h4 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-navy-500">{group}</h4>
                  <ul className="mt-3 space-y-2.5">
                    {items.map((subject) => (
                      <li key={subject} className="flex items-center gap-2.5 text-sm text-navy-800">
                        <span className="flex h-5 w-5 items-center justify-center bg-navy-50 text-navy-700"><Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.2} /></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
