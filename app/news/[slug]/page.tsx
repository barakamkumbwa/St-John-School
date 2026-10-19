import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/Container";
import { getNewsImage, newsPosts } from "@/lib/data/news";

type Params = { slug: string };

function renderInline(text: string) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index} className="font-semibold text-navy-900">{part.slice(2, -2)}</strong>
      : part,
  );
}

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-navy-900 py-14 text-cream-50 sm:min-h-[560px] sm:py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url('${getNewsImage(post.category)}')` }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-900/75 to-navy-900/15" />
        <Container>
          <div className="max-w-4xl animate-fade-up">
            <Link href="/news" className="mb-7 inline-flex items-center gap-2 text-sm text-gold-300 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back to News
            </Link>
            <span className="inline-block border border-gold-300/50 bg-navy-950/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              {post.category}
            </span>
            <h1 className="mt-5 max-w-4xl font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-cream-200">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-gold-300" /> {date}</span>
              <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-gold-300" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold-300" /> {post.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      <article className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-navy max-w-none space-y-5 text-navy-700 leading-relaxed">
              {post.content.split("\n\n").map((block, i) => {
                const lines = block.split("\n");
                if (lines.every((line) => line.startsWith("- "))) {
                  return <ul key={i} className="list-disc space-y-2 pl-6">{lines.map((line, j) => <li key={j}>{renderInline(line.slice(2))}</li>)}</ul>;
                }
                if (lines.every((line) => /^\d+[.)]/.test(line))) {
                  return <ol key={i} className="list-decimal space-y-2 pl-6">{lines.map((line, j) => <li key={j}>{renderInline(line.replace(/^\d+[.)]\s*/, ""))}</li>)}</ol>;
                }
                if (block.startsWith("**") && block.endsWith("**")) {
                  return <h2 key={i} className="font-heading text-xl font-bold text-navy-900">{block.slice(2, -2).replace(/:$/, "")}</h2>;
                }
                return <p key={i}>{lines.map((line, j) => <span key={j}>{j > 0 && <br />}{renderInline(line)}</span>)}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-navy-100">
              <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to all news
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
