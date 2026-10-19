import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";
import { Container } from "@/components/Container";
import { schoolInfo } from "@/lib/site";

const items = [
  { icon: Users, value: `${schoolInfo.stats.students}+`, label: "Enrolled Students" },
  { icon: GraduationCap, value: `${schoolInfo.stats.teachers}`, label: "Qualified Teachers" },
  { icon: Award, value: `${schoolInfo.stats.years}`, label: "Years of Excellence" },
  { icon: TrendingUp, value: `${schoolInfo.stats.passRate}%`, label: "NECTA Pass Rate" },
];

export function Stats() {
  return (
    <section className="relative z-20 bg-cream-50 py-8 sm:py-10">
      <Container>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {items.map(({ icon: Icon, value, label }) => (
            <div key={label} className="group relative flex min-h-[7.5rem] items-center gap-2 overflow-hidden border border-navy-100 bg-white px-2 py-4 shadow-[0_10px_28px_-22px_rgba(10,25,56,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_18px_36px_-24px_rgba(10,25,56,0.48)] sm:min-h-36 sm:gap-5 sm:px-6">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-cream-50 text-forest-700 ring-1 ring-navy-100 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold-300 sm:h-12 sm:w-12">
                <Icon className="h-4 w-4 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-2xl font-semibold leading-none tracking-tight text-navy-900 sm:text-4xl">{value}</span>
                <span className="mt-2 block text-[9px] font-semibold uppercase leading-3 tracking-[0.06em] text-navy-500 sm:text-xs sm:leading-4 sm:tracking-[0.1em]">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
