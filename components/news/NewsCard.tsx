import Link from "next/link";
import { CalendarDays, Clock3, ArrowUpRight } from "lucide-react";
import { getNewsImage, type NewsPost } from "@/lib/data/news";

const categoryColors: Record<string, string> = {
  Achievements: "bg-forest-500/10 text-forest-600",
  Admissions: "bg-gold-500/10 text-gold-700",
  Campus: "bg-navy-100 text-navy-800",
  Sports: "bg-gold-500/10 text-gold-700",
  Newsletter: "bg-navy-100 text-navy-800",
};

export function NewsCard({ post }: { post: NewsPost }) {
  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/news/${post.slug}`}
    className="group block overflow-hidden border border-navy-100 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_20px_44px_-30px_rgba(10,25,56,0.6)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${getNewsImage(post.category)}')` }} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/10 to-transparent" />
        <span className="absolute bottom-4 left-5 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white">{post.category}</span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-navy-500">
          <span className={`rounded-sm px-2 py-0.5 font-semibold ${categoryColors[post.category] ?? "text-navy-800"}`}>{post.category}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold-500" />
          <span className="flex items-center gap-1"><Clock3 aria-hidden="true" className="h-3 w-3" /> {post.readTime}</span>
        </div>

        <h3 className="mt-3 font-heading text-lg font-bold text-navy-900 leading-snug group-hover:text-gold-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-navy-600 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4 text-xs text-navy-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {date}
          </span>
          <span className="inline-flex items-center gap-1 text-gold-600 font-semibold group-hover:gap-2 transition-all">
            Read <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
