import { Banknote, CircleHelp, FileText } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";
import { schoolInfo } from "@/lib/site";

export const metadata = {
  title: "School Fee Structure",
  description: "Review the listed O-Level and A-Level fee structures for St. John Secondary School.",
};

const levels = [
  {
    id: "o-level",
    level: "O-Level",
    forms: "Form 1–4",
    tuition: "TZS 1,800,000",
  },
  {
    id: "a-level",
    level: "A-Level",
    forms: "Form 5–6",
    tuition: "TZS 2,200,000",
  },
];

export default function SchoolFeesPage() {
  return (
    <>
      <AdmissionsHero
        label="Admissions · Fee Structure"
        title="School fees."
        description="Annual fee schedules for O-Level and A-Level students. Confirm the current official charges and payment instructions with the school."
      />
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {levels.map((level, index) => (
              <ScrollReveal key={level.id} delay={index * 100}>
                <article id={level.id} className="h-full scroll-mt-28 border border-navy-200 bg-white">
                  <div className="flex items-center gap-3 border-b border-navy-200 bg-navy-900 px-6 py-5 text-white sm:px-8">
                    <span className="flex h-10 w-10 items-center justify-center bg-gold-300 text-navy-900">
                      <Banknote aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">{level.level} · {level.forms}</p>
                      <h3 className="mt-1 font-heading text-lg font-bold">Fee schedule</h3>
                    </div>
                  </div>

                  <dl className="divide-y divide-navy-100 px-6 sm:px-8">
                    <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <dt className="text-sm text-navy-700">Tuition · {level.level}<span className="mt-1 block text-xs text-navy-500">Per year</span></dt>
                      <dd className="text-sm font-semibold text-navy-900">{level.tuition}</dd>
                    </div>
                    <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <dt className="text-sm text-navy-700">Boarding and meals<span className="mt-1 block text-xs text-navy-500">Per year · where applicable</span></dt>
                      <dd className="text-sm font-semibold text-navy-900">TZS 1,200,000</dd>
                    </div>
                    <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <dt className="text-sm text-navy-700">Registration<span className="mt-1 block text-xs text-navy-500">One time</span></dt>
                      <dd className="text-sm font-semibold text-navy-900">TZS 50,000</dd>
                    </div>
                  </dl>
                  <p className="border-t border-navy-100 bg-cream-50 px-6 py-4 text-xs leading-5 text-navy-600 sm:px-8">Amounts are shown as listed on the school website. Confirm the current structure and official payment channel with the school.</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mx-auto mt-7 flex max-w-5xl items-start gap-3 border-l-2 border-gold-500 bg-cream-50 p-5 text-sm leading-6 text-navy-600">
            <CircleHelp aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
            <p>Boarding and meals apply only where selected. Ask the admissions office which charges apply to the student before making payment.</p>
          </ScrollReveal>
          <ScrollReveal className="mx-auto mt-5 flex max-w-5xl items-start gap-3 border border-navy-100 bg-white p-5 text-sm leading-6 text-navy-600">
            <FileText aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" />
            <p>For the official fee structure or payment questions, contact <a className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href={`mailto:${schoolInfo.contact.admissionsEmail}`}>{schoolInfo.contact.admissionsEmail}</a> or call <a className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href={`tel:${schoolInfo.contact.mobile}`}>{schoolInfo.contact.mobile}</a>.</p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
