import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { schoolInfo } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-7 sm:py-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_50%,rgba(212,160,23,0.18),transparent_55%)]" />
      <Container className="relative z-10">
        <ScrollReveal direction="right">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="max-w-3xl">
              <p className="section-eyebrow text-gold-300">Admissions · 2026</p>
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-white text-balance sm:text-3xl">
                Ready to give your child a brighter future?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Applications are open. Join a community of learners, leaders, and lifelong friends at {schoolInfo.name}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/admissions/apply" variant="primary" className="group rounded-sm px-5 py-3 text-sm shadow-none">
                Start Your Application
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href={`tel:${schoolInfo.contact.mobile}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/40 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-300" />
                <span className="whitespace-nowrap">Call {schoolInfo.contact.mobile}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
