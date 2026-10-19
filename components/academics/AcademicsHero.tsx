import { Container } from "@/components/Container";
import { AboutHeroSlideshow } from "@/components/about/AboutHeroSlideshow";

interface AcademicsHeroProps {
  label?: string;
  title?: string;
  description?: string;
}

export function AcademicsHero({
  label = "Academics",
  title = "Rigorous academics. Real-world readiness.",
  description = "Our curriculum blends the best of the Tanzanian national syllabus with modern teaching methods, preparing students for NECTA examinations and beyond.",
}: AcademicsHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#14213e] text-white">
      <AboutHeroSlideshow />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#101b34]/95 via-[#14213e]/80 to-[#14213e]/55" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#101b34]/50 to-transparent" />
      <Container className="relative z-10">
        <div className="flex min-h-[410px] flex-col justify-center py-16 sm:min-h-[470px] sm:py-20 lg:min-h-[520px]">
          <div className="max-w-3xl animate-fade-up">
            <p className="section-eyebrow text-gold-400">{label}</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg text-cream-200 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
