import { Eye, Target } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { schoolInfo } from "@/lib/site";

const direction = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading secondary school in Tanzania, recognized for academic excellence, strong values, and visionary leaders who positively impact their communities.",
    tone: "navy",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide a holistic education that nurtures intellectual curiosity, moral integrity, and practical skills, empowering every student to reach their potential.",
    tone: "gold",
  },
];

export function HistoryVision() {
  return (
    <section id="our-history" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <ScrollReveal className="max-w-xl">
            <p className="section-eyebrow">Our History</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Rooted in tradition, growing with time.
            </h2>
            <div className="mt-7 flex items-end gap-4 border-t border-navy-200 pt-5">
              <span className="font-display text-5xl font-semibold leading-none tracking-tight text-gold-600 sm:text-6xl">{schoolInfo.foundedYear}</span>
              <span className="max-w-32 pb-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-navy-500">Building futures in Morogoro</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 border-t border-navy-200 pt-5 text-base leading-7 text-navy-600 lg:pt-1">
            <p>
              Founded in {schoolInfo.foundedYear}, {schoolInfo.name} began with a simple but powerful vision: to provide excellent secondary education grounded in discipline, integrity, and service to the community.
            </p>
            <p>
              Over the years, the school has grown to serve students from across Tanzania. We continue to invest in modern facilities, thoughtful teaching, and a holistic approach that prepares students not only for exams, but for life.
            </p>
            <p>
              As we look ahead, we remain committed to creating an environment where every learner is encouraged to think independently, grow in character, and use their knowledge to make a positive contribution to society.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {direction.map(({ icon: Icon, title, description, tone }) => (
            <article key={title} className="group relative overflow-hidden border border-navy-100 bg-white p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_20px_45px_-30px_rgba(10,25,56,0.35)] sm:p-9">
              <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${tone === "gold" ? "bg-gold-500" : "bg-navy-700"}`} />
              <div className="flex items-center gap-4">
                <span className={`flex h-12 w-12 items-center justify-center ${tone === "gold" ? "bg-gold-50 text-gold-700" : "bg-navy-50 text-navy-800"}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="font-heading text-xl font-bold text-navy-900">{title}</h3>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-navy-600 sm:text-base sm:leading-7">{description}</p>
            </article>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
