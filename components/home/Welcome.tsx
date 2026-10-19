import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { schoolInfo } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";

const schoolStats = [
  { value: `${schoolInfo.stats.students}+`, label: "Enrolled Students" },
  { value: `${schoolInfo.stats.teachers}`, label: "Qualified Teachers" },
  { value: `${schoolInfo.stats.years}`, label: "Years of Excellence" },
  { value: `${schoolInfo.stats.passRate}%`, label: "NECTA Pass Rate" },
];

export function Welcome() {
  return (
    <section className="bg-cream-50 pb-14 pt-5 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-8">
      <Container className="max-w-[88rem]">
        <ScrollReveal className="grid gap-8 border-y border-navy-200 py-8 sm:py-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">About St. John</p>
            <h2 className="mt-3 max-w-lg font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              A secondary school in Morogoro, Tanzania.
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest-700">
              <MapPin aria-hidden="true" className="h-4 w-4 text-gold-600" />
              {schoolInfo.address.city}, {schoolInfo.address.country}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className="max-w-4xl text-base leading-7 text-navy-700 sm:text-lg sm:leading-8">
              {schoolInfo.name} is located in Morogoro, Tanzania. The school provides quality O-Level and A-Level education following the Tanzanian national curriculum. We are committed to helping students achieve academic success while developing discipline, confidence, good character, and responsibility. Through dedicated teachers and supportive learning environments, we prepare students for a bright future.
            </p>
            <Button href="/about" variant="secondary" className="group mt-5 rounded-sm">
              Learn more about us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-6 border-b border-navy-200 pb-6 sm:mt-7 sm:pb-7">
          <p className="flex flex-wrap items-baseline gap-x-2 gap-y-2 text-sm leading-6 text-navy-600 sm:gap-x-3 sm:text-base">
            {schoolStats.map(({ value, label }, index) => (
              <span key={label} className="inline-flex items-baseline gap-x-2 sm:gap-x-3">
                {index > 0 && <span aria-hidden="true" className="text-gold-500">·</span>}
                <span><strong className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">{value}</strong> {label}</span>
              </span>
            ))}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
