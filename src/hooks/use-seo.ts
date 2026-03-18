import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemas?: object[];
}

const BASE_URL = "https://kaspermh.dk";
const DEFAULT_OG_IMAGE =
  "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/og-image-kalles-algerens.png";
const SITE_NAME = "Kalles Algerens - Algerens & Fliserens i Midtjylland";

function setMetaTag(attr: "name" | "property", key: string, content: string): HTMLMetaElement {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

function removeMetaTag(attr: "name" | "property", key: string) {
  document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)?.remove();
}

export function useSEO({ title, description, canonical, ogImage, ogType, schemas }: SEOProps) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;

    // Meta tags
    const metas: Array<[string, string, string]> = [
      ["name", "description", description],
      ["name", "robots", "max-image-preview:large"],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:image", ogImage || DEFAULT_OG_IMAGE],
      ["property", "og:url", canonical || BASE_URL],
      ["property", "og:type", ogType || "website"],
      ["property", "og:locale", "da_DK"],
      ["property", "og:site_name", SITE_NAME],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
      ["name", "twitter:image", ogImage || DEFAULT_OG_IMAGE],
    ];

    const createdMetas: Array<[string, string]> = [];
    for (const [attr, key, content] of metas) {
      const existed = !!document.querySelector(`meta[${attr}="${key}"]`);
      setMetaTag(attr as "name" | "property", key, content);
      if (!existed) createdMetas.push([attr, key]);
    }

    // Canonical link
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalExisted = !!canonicalEl;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical || BASE_URL);

    // JSON-LD schemas
    const scriptEls: HTMLScriptElement[] = [];
    if (schemas && schemas.length > 0) {
      for (const schema of schemas) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        scriptEls.push(script);
      }
    }

    return () => {
      document.title = prev;
      for (const [attr, key] of createdMetas) {
        removeMetaTag(attr as "name" | "property", key);
      }
      if (!canonicalExisted && canonicalEl) {
        canonicalEl.remove();
      }
      for (const script of scriptEls) {
        script.remove();
      }
    };
  }, [title, description, canonical, ogImage, ogType, schemas]);
}
