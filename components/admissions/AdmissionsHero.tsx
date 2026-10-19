import { Container } from "@/components/Container";

interface AdmissionsHeroProps {
  label?: string;
  title?: string;
  description?: string;
}

export function AdmissionsHero({
  label = "Admissions",
  title = "Begin your journey with us.",
  description = "Join a community of scholars, athletes, artists, and leaders. Applications for the 2026 academic year are now open for Form 1 and Form 5.",
}: AdmissionsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-cream-50 lg:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[url('/images/admissions-banner.jpeg')] bg-cover bg-center opacity-25" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/55" />
      <Container>
        <div className="relative max-w-3xl animate-fade-up">
          <p className="section-eyebrow text-gold-400">{label}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-cream-200">{description}</p>
        </div>
      </Container>
    </section>
  );
}
