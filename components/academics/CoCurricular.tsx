import { Container } from "@/components/Container";
import { Trophy, Music, Mic2, Users, Palette, Sprout } from "lucide-react";
import { AboutHeroSlideshow } from "@/components/about/AboutHeroSlideshow";

const activities = [
  { icon: Trophy, name: "Sports", desc: "Football, basketball, netball, volleyball, athletics" },
  { icon: Music, name: "Music & Drama", desc: "School choir, drama club, annual performances" },
  { icon: Mic2, name: "Debate & Public Speaking", desc: "Debate society, model UN, national competitions" },
  { icon: Users, name: "Leadership", desc: "Student council, prefects, peer mentoring" },
  { icon: Palette, name: "Creative Arts", desc: "Art club, photography, school magazine" },
  { icon: Sprout, name: "Environment Club", desc: "Tree planting, recycling, sustainability projects" },
];

export function CoCurricular() {
  return (
    <section id="co-curricular" className="relative isolate scroll-mt-20 overflow-hidden bg-[#14213e] py-20 text-white sm:py-24">
      <AboutHeroSlideshow />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#101b34]/90 via-[#14213e]/75 to-[#14213e]/65" />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-eyebrow justify-center text-gold-400">Beyond the Classroom</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-cream-50 text-balance">
            Co-Curricular Life
          </h2>
          <p className="mt-4 text-cream-200">
            At St. John, we believe character is built outside the classroom as much as inside it.
            Our students thrive in a vibrant co-curricular program.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <div key={act.name} className="rounded-2xl border border-white/15 bg-navy-900/65 p-6 backdrop-blur-sm transition-colors hover:border-gold-400/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-cream-50">{act.name}</h3>
                <p className="text-sm text-cream-300 mt-2 leading-relaxed">{act.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
