import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsCard } from "@/components/news/NewsCard";
import { getNewsImage, newsPosts } from "@/lib/data/news";

export const metadata = {
  title: "News & Events",
  description: "Read the latest stories, achievements, and updates from St. John Secondary School.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const sorted = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [featured, ...moreStories] = sorted;

  return (
    <>
      <section className="bg-cream-50 pb-14 pt-12 sm:pb-20 sm:pt-16">
        <Container>
          <ScrollReveal className="flex flex-col justify-between gap-7 border-b border-navy-200 pb-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-eyebrow">St. John · Newsroom</p>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-6xl">Stories that shape our community.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-navy-600 sm:text-lg">The achievements, people, and moments that make life at St. John.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-navy-600">
              <span className="flex h-11 w-11 items-center justify-center bg-gold-300 text-navy-900"><Newspaper aria-hidden="true" className="h-5 w-5" /></span>
              <span><strong className="block text-navy-900">School journal</strong><span>{sorted.length} stories from our community</span></span>
            </div>
          </ScrollReveal>

          {featured && (
            <ScrollReveal className="mt-8">
              <Link href={`/news/${featured.slug}`} className="group relative flex min-h-[440px] items-end overflow-hidden bg-navy-900 sm:min-h-[500px]">
                <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]" style={{ backgroundImage: `url('${getNewsImage(featured.category)}')` }} />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-navy-900/10" />
                <div className="relative z-10 max-w-3xl p-6 text-white sm:p-10 lg:p-14">
                  <span className="inline-flex items-center gap-2 border border-gold-300/50 bg-navy-950/35 px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Featured story <span className="h-1 w-1 rounded-full bg-gold-300" /> {featured.category}</span>
                  <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">{featured.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">{featured.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/75 sm:text-sm">
                    <span className="inline-flex items-center gap-2"><CalendarDays aria-hidden="true" className="h-4 w-4 text-gold-300" />{formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" className="h-4 w-4 text-gold-300" />{featured.readTime}</span>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-all group-hover:gap-3">Read the story <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
                </div>
              </Link>
            </ScrollReveal>
          )}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="flex flex-col justify-between gap-4 border-b border-navy-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow">The latest</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">More from St. John.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-navy-600">Explore updates from academics, campus life, admissions, sport, and our wider school community.</p>
          </ScrollReveal>

          {moreStories.length > 0 ? (
            <ScrollReveal stagger className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {moreStories.map((post) => <NewsCard key={post.slug} post={post} />)}
            </ScrollReveal>
          ) : (
            <p className="mt-8 text-sm text-navy-600">More stories will be published soon.</p>
          )}
        </Container>
      </section>
    </>
  );
}
