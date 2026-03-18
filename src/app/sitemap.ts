import { MetadataRoute } from "next";
import { articles } from "@/lib/blog-data";

const BASE_URL = "https://kaspermh.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/priser", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/fliserens", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/tagrens", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/tagmaling", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/facaderens", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/traeterrasse-rens", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/algebehandling-af-tag", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/serviceaftaler", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/servicefradrag", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/om", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/kontakt", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/galleri", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/nabo-rabat", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/service-omraader", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/handelsbetingelser", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/privatlivspolitik", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // City pages
  const cityPages = [
    "/fliserens-i-herning",
    "/fliserens-i-brande",
    "/fliserens-i-give",
    "/fliserens-i-billund",
    "/fliserens-i-ikast",
    "/fliserens-i-hammerum",
    "/fliserens-i-snejbjerg",
    "/fliserens-i-kibaek",
    "/fliserens-i-sunds",
  ].map((url) => ({
    url,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Blog articles (auto-generated from blog-data)
  const blogArticles = articles.map((article) => ({
    url: `/blog/${article.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...cityPages, ...blogArticles].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
