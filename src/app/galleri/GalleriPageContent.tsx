"use client";

import { useState } from "react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

const categories = [
  { key: "alle", label: "Alle" },
  { key: "fliser", label: "Fliser" },
  { key: "terrasse", label: "Terrasse" },
  { key: "tag", label: "Tag" },
];

const galleryItems = [
  // Existing good images (deduplicated — removed duplicates + requested removals)
  { category: "fliser", label: "Fliserens — indkørsel før", image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-indkoersel-foer.webp" },
  { category: "fliser", label: "Fliserens — indkørsel efter", image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-indkoersel-efter.webp" },
  { category: "fliser", label: "Fliserens — baghave før", image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-foer.webp" },
  { category: "fliser", label: "Fliserens — baghave efter", image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-efter.webp" },
  { category: "tag", label: "Tagrens — efter", image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagrens-efter.webp" },
  { category: "tag", label: "Tagmaling — efter", image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagmaling-efter.webp" },
  { category: "fliser", label: "Serviceaftale — før", image: "/images/before-after/flise-2-foer.webp" },
  { category: "fliser", label: "Serviceaftale — efter", image: "/images/before-after/flise-2-efter.webp" },
  { category: "terrasse", label: "Træterrasse — før", image: "/images/before-after/terrasse-foer.webp" },
  { category: "terrasse", label: "Træterrasse — efter", image: "/images/before-after/terrasse-efter.webp" },

  // New images from Google Drive
  { category: "fliser", label: "Fliserens — nærbillede", image: "/images/galleri/galleri-1.webp" },
  { category: "terrasse", label: "Træterrasse rens", image: "/images/galleri/galleri-2.webp" },
  { category: "terrasse", label: "Terrasse — efter rens", image: "/images/galleri/galleri-3.webp" },
  { category: "fliser", label: "Fliserens — have", image: "/images/galleri/galleri-4.webp" },
  { category: "fliser", label: "Fliserens — hexagonfliser", image: "/images/galleri/galleri-5.webp" },
  { category: "fliser", label: "Fliserens — terrasse før/efter", image: "/images/galleri/galleri-6.webp" },
  { category: "terrasse", label: "Træterrasse — resultat", image: "/images/galleri/galleri-7.webp" },
  { category: "fliser", label: "Fliserens — gårdhave", image: "/images/galleri/galleri-8.webp" },
  { category: "fliser", label: "Fliserens — granitfliser", image: "/images/galleri/galleri-9.webp" },
  { category: "fliser", label: "Fliserens — røde sten", image: "/images/galleri/galleri-10.webp" },
  { category: "terrasse", label: "Terrasse — solnedgang", image: "/images/galleri/galleri-11.webp" },
  { category: "fliser", label: "Fliserens — sti ved solnedgang", image: "/images/galleri/galleri-12.webp" },
  { category: "terrasse", label: "Træterrasse — før/efter", image: "/images/galleri/galleri-13.webp" },
  { category: "fliser", label: "Fliserens — gårdhave vinter", image: "/images/galleri/galleri-14.webp" },
  { category: "fliser", label: "Fliserens — smal passage", image: "/images/galleri/galleri-15.webp" },
  { category: "fliser", label: "Fliserens — hjørne", image: "/images/galleri/galleri-16.webp" },
  { category: "fliser", label: "Fliserens — før/efter", image: "/images/galleri/galleri-17.webp" },
  { category: "fliser", label: "Fliserens — brosten", image: "/images/galleri/galleri-18.webp" },
];

export default function GalleriPageContent() {
  const [activeCategory, setActiveCategory] = useState("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "alle"
      ? galleryItems
      : galleryItems.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20" data-testid="galleri-page">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Galleri" }]} />
          <div className="text-center mb-10">
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-3">
              Galleri
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Se eksempler på vores arbejde — før og efter professionel rengøring.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                data-testid={`gallery-filter-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <div
                key={`${item.category}-${item.label}-${i}`}
                className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer"
                data-testid={`gallery-card-${i}`}
                onClick={() => setLightboxIndex(galleryItems.indexOf(item))}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-light z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Luk"
          >
            ✕
          </button>
          {lightboxIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              aria-label="Forrige"
            >
              ‹
            </button>
          )}
          {lightboxIndex < galleryItems.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              aria-label="Næste"
            >
              ›
            </button>
          )}
          <div className="max-w-4xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIndex].image}
              alt={galleryItems[lightboxIndex].label}
              loading="lazy"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-sm text-center mt-3">
              {galleryItems[lightboxIndex].label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
