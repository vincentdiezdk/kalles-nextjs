"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { articles, categories, formatDate } from "@/lib/blog-data";

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredArticles =
    activeCategory === "Alle"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-20" data-testid="blog-page">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm mb-2">
              Viden og tips fra Kalles Algerens
            </p>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Blog | Vedligeholdelse af Udendørs Flader
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Guides, tips og faglig viden om fliserens, tagrens, algebehandling
              og vedligeholdelse af udendørs overflader.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap gap-2"
            data-testid="blog-category-filter"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-testid="blog-grid"
          >
            {filteredArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <article
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:-translate-y-1 transition-all duration-200 hover:shadow-lg cursor-pointer h-full flex flex-col"
                  data-testid={`blog-card-${article.slug}`}
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl opacity-60">
                      {article.category === "Fliserens" && "\uD83E\uDDF1"}
                      {article.category === "Tagrens" && "\uD83C\uDFE0"}
                      {article.category === "Vedligeholdelse" && "\uD83D\uDD27"}
                      {article.category === "Tips" && "\uD83D\uDCA1"}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-sans font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Læs mere
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Ingen artikler i denne kategori endnu.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/[0.04]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-2xl text-foreground mb-4">
            Klar til at få dine overflader renset?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Brug vores prisberegner for et vejledende tilbud — eller ring til os
            for en uforpligtende snak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#prisberegner">
              <Button size="lg" className="font-sans font-bold gap-2">
                Beregn din pris
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+4525131797">
              <Button
                size="lg"
                variant="outline"
                className="font-sans font-bold gap-2 w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Ring 25 13 17 97
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
