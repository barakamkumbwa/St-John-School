import { MetadataRoute } from "next";
import { newsPosts } from "@/lib/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stjohnsecondary.ac.tz";

  // Kurasa za kawaida
  const routes = ["", "/about", "/academics", "/admissions/apply", "/admissions/fees", "/news", "/gallery", "/staff", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  // Kurasa za habari
  const newsRoutes = newsPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...newsRoutes];
}
