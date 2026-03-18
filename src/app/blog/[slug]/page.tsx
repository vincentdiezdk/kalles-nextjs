import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/blog-data";
import BlogPostContent from "./BlogPostContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel ikke fundet",
      description: "Artiklen blev ikke fundet.",
    };
  }

  return {
    title: `${article.title} | Blog`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://kaspermh.dk/blog/${article.slug}/`,
    },
    other: {
      "article:published_time": article.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <BlogPostContent slug={slug} />;
}
