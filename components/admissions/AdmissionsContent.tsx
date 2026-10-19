import { ArrowDown, ArrowDownRight, CheckCircle2, ClipboardCheck, FileText, GraduationCap, MessageCircle, Send, UserRoundCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { schoolInfo } from "@/lib/site";

const steps = [
  { number: "01", title: "Submit an application", detail: "Apply through the online portal or download and complete the admission form.", icon: Send },
  { number: "02", title: "Share your documents", detail: "Provide the student’s results and supporting documents for the level selected.", icon: FileText },
  { number: "03", title: "Application review", detail: "The admissions team reviews the application and checks the submitted information.", icon: ClipboardCheck },
  { number: "04", title: "Attend an interview", detail: "Shortlisted applicants are contacted with interview or assessment details.", icon: MessageCircle },
  { number: "05", title: "Receive the decision", detail: "Successful applicants receive an admission decision and joining information.", icon: UserRoundCheck },
];

const requirements = [
  {
    level: "O-Level · Form 1",
    intro: "For students joining secondary school after primary education.",
    items: ["Completed Form 1 admission application", "Standard Seven / PSLE results slip", "Copy of birth certificate", "Two recent passport-size photographs", "Transfer documents, if applicable"],
  },
  {
    level: "A-Level · Form 5",
    intro: "For students applying after completing O-Level studies.",
    items: ["Completed Form 5 admission application", "Form Four / CSEE results slip", "Selected A-Level subject combination", "Copy of birth certificate", "Two recent passport-size photographs", "Transfer documents, if applicable"],
  },
];

const downloadGroups = [
  {
    level: "O-Level · Form 1",
    documents: [
      { title: "O-Level Admission Form", href: "/downloads/olevel-admission-form.pdf" },
      { title: "O-Level Joining Instructions", href: "/downloads/olevel-joining-instructions.pdf" },
    ],
  },
  {
    level: "A-Level · Form 5",
    documents: [
      { title: "A-Level Admission Form", href: "/downloads/alevel-admission-form.pdf" },
      { title: "A-Level Joining Instructions", href: "/downloads/alevel-joining-instructions.pdf" },
    ],
  },
];

export function AdmissionsContent() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">How to apply</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">From application to interview.</h2>
            <p className="mt-4 text-base leading-7 text-navy-600">Follow these steps to complete an application and understand what happens next.</p>
          </ScrollReveal>
          <ScrollReveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ number, title, detail, icon: Icon }, index) => (
              <article key={number} className="relative border border-navy-200 bg-cream-50 p-5 sm:p-6">
                {index < steps.length - 1 && <span aria-hidden="true" className="absolute right-[-1rem] top-10 z-10 hidden h-px w-4 bg-gold-400 lg:block" />}
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold tracking-[0.15em] text-gold-700">STEP {number}</span>
                  <span className="flex h-10 w-10 items-center justify-center bg-navy-900 text-gold-300"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-600">{detail}</p>
              </article>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 sm:py-24">
        <Container>
          <ScrollReveal className="max-w-2xl">
            <p className="section-eyebrow">Entry requirements</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">What to prepare.</h2>
            <p className="mt-4 text-base leading-7 text-navy-600">Prepare the documents for the level you are applying to. The school may request additional information during review.</p>
          </ScrollReveal>
          <ScrollReveal stagger className="mt-9 grid gap-5 lg:grid-cols-2">
            {requirements.map((group) => (
              <article key={group.level} className="border border-navy-200 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-4 border-b border-navy-100 pb-5">
                  <span className="flex h-11 w-11 items-center justify-center bg-gold-100 text-navy-900"><GraduationCap aria-hidden="true" className="h-5 w-5" /></span>
                  <div>
                    <p className="section-eyebrow">Requirements</p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-navy-900">{group.level}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-navy-600">{group.intro}</p>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-navy-700">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />{item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Application documents</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">Download and prepare.</h2>
            <p className="mt-4 text-base leading-7 text-navy-600">Get the admission form and joining instructions before you submit your application.</p>
          </ScrollReveal>
          <ScrollReveal stagger className="mx-auto mt-9 grid max-w-5xl gap-5 lg:grid-cols-2">
            {downloadGroups.map((group) => (
              <article key={group.level} className="border border-navy-200 bg-white p-5 sm:p-7">
                <h3 className="border-b border-navy-100 pb-4 font-heading text-xl font-bold text-navy-900">{group.level}</h3>
                <div className="mt-4 space-y-3">
                  {group.documents.map((document) => (
                    <a key={document.href} href={document.href} download className="group flex items-center gap-3 border border-navy-100 bg-cream-50 p-4 transition-colors hover:border-gold-400 hover:bg-white">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy-900 text-gold-300"><FileText aria-hidden="true" className="h-5 w-5" /></span>
                      <span className="flex-1">
                        <span className="block text-sm font-bold text-navy-900">{document.title}</span>
                        <span className="mt-1 block text-xs text-navy-600">Download PDF</span>
                      </span>
                      <ArrowDown aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-700 transition-transform group-hover:translate-y-1" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </ScrollReveal>
          <ScrollReveal className="mt-8 text-center">
            <a href={`mailto:${schoolInfo.contact.admissionsEmail}`} className="inline-flex items-center gap-2 bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-700">
              Contact admissions <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </ScrollReveal>
          <p className="mt-6 text-center text-sm text-navy-600">
            Need help? Call <a href={`tel:${schoolInfo.contact.mobile}`} className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">{schoolInfo.contact.mobile}</a> or email <a href={`mailto:${schoolInfo.contact.admissionsEmail}`} className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">{schoolInfo.contact.admissionsEmail}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
