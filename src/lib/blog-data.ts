// ─── Types ──────────────────────────────────────────
export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  metaDescription: string;
  bodyComponentName: string;
}

// ─── Articles Data ──────────────────────────────────
export const articles: BlogArticle[] = [
  {
    slug: "hvornaar-skal-man-rense-sine-fliser",
    title: "Hvornår skal man rense sine fliser?",
    excerpt:
      "Lær at genkende tegnene på, at dine fliser trænger til rens — og find ud af, hvornår på året det er bedst at gøre det.",
    category: "Fliserens",
    date: "2026-03-10",
    readTime: "4 min",
    metaDescription:
      "Hvornår skal fliser renses? Lær tegnene på alger, flisepest og belægninger. Professionel fliserens fra 35 kr/m² hos Kalles Algerens i Midtjylland.",
    bodyComponentName: "ArticleHvornaarFliserens",
  },
  {
    slug: "forskellen-paa-algebehandling-og-fliserens",
    title: "Forskellen på algebehandling og fliserens",
    excerpt:
      "Mange forveksler de to — men der er en vigtig forskel. Vi forklarer, hvornår du har brug for hvad, og hvorfor kombinationen giver det bedste resultat.",
    category: "Vedligeholdelse",
    date: "2026-02-24",
    readTime: "5 min",
    metaDescription:
      "Hvad er forskellen på algebehandling og fliserens? Lær hvornår du har brug for hvad, og hvorfor kombination giver bedst resultat. Kalles Algerens forklarer.",
    bodyComponentName: "ArticleForskelAlgebehandlingFliserens",
  },
  {
    slug: "saadan-vedligeholder-du-din-indkoersel",
    title: "Sådan vedligeholder du din indkørsel",
    excerpt:
      "En komplet guide til sæsonbaseret vedligeholdelse af din indkørsel — fra forebyggelse af alger til professionel rensning.",
    category: "Tips",
    date: "2026-02-10",
    readTime: "6 min",
    metaDescription:
      "Guide til vedligeholdelse af indkørsel. Sæsonbaserede tips, forebyggelse af alger og hvornår du bør ringe til en professionel. Kalles Algerens.",
    bodyComponentName: "ArticleVedligeholdelseIndkoersel",
  },
  {
    slug: "5-tegn-paa-at-dit-tag-traenger-til-rens",
    title: "5 tegn på at dit tag trænger til rens",
    excerpt:
      "Alger, mos og tilstoppede tagrender? Her er fem tegn på, at dit tag har brug for professionel opmærksomhed — og hvad det koster at vente.",
    category: "Tagrens",
    date: "2026-01-20",
    readTime: "4 min",
    metaDescription:
      "5 tegn på at dit tag trænger til rens: mos, sorte pletter, tilstoppede tagrender og mere. Professionel tagrens fra Kalles Algerens i Midtjylland.",
    bodyComponentName: "ArticleTegnTagRens",
  },
  {
    slug: "impraegnering-af-fliser-er-det-det-vaerd",
    title: "Imprægnering af fliser — er det det værd?",
    excerpt:
      "Imprægnering koster fra 10 kr/m² — men er det pengene værd? Vi gennemgår fordele, holdbarhed og hvornår det giver mening.",
    category: "Fliserens",
    date: "2026-01-05",
    readTime: "5 min",
    metaDescription:
      "Er imprægnering af fliser det værd? Fordele, pris (fra 10 kr/m²), holdbarhed og hvornår det giver mening. Kalles Algerens giver dig det fulde overblik.",
    bodyComponentName: "ArticleImpragnering",
  },
  {
    slug: "flisesand-guide-til-valg-og-vedligeholdelse",
    title: "Flisesand: Guide til valg, påføring og vedligeholdelse",
    excerpt:
      "Alt du skal vide om flisesand — fra valg af den rigtige type til korrekt påføring og vedligeholdelse af fuger. Undgå de klassiske fejl.",
    category: "Tips",
    date: "2026-02-18",
    readTime: "8 min",
    metaDescription:
      "Komplet guide til flisesand: valg af type, korrekt påføring, vedligeholdelse og de mest stillede spørgsmål. Kalles Algerens i Midtjylland.",
    bodyComponentName: "ArticleFlisesandGuide",
  },
  {
    slug: "hvornaar-skal-taget-renses-guide-til-tagrensning",
    title: "Hvornår skal taget renses? Guide til tagrensning i Midtjylland",
    excerpt:
      "Lær at genkende tegnene på, at dit tag trænger til rens. Vi gennemgår metoder, hyppighed og hvad det koster at få taget professionelt renset.",
    category: "Tagrens",
    date: "2026-02-15",
    readTime: "7 min",
    metaDescription:
      "Hvornår skal taget renses? Guide til tagrensning med tegn, metoder, hyppighed og priser. Professionel tagrens i Herning, Ikast og Brande.",
    bodyComponentName: "ArticleTagrensningGuide",
  },
  {
    slug: "hvad-koster-algerens-prisguide",
    title: "Hvad koster algerens? Prisguide til algerens i Midtjylland",
    excerpt:
      "Overvejer du algerens? Her er en komplet prisguide med vejledende priser for tag, fliser og facade — og hvad der påvirker den endelige pris.",
    category: "Vedligeholdelse",
    date: "2026-02-15",
    readTime: "6 min",
    metaDescription:
      "Hvad koster algerens? Prisguide med vejledende priser: tag 40-80 kr/m², fliser 30-60 kr/m², facade 50-100 kr/m². Gratis tilbud fra Kalles Algerens.",
    bodyComponentName: "ArticleAlgerensPrisguide",
  },
  {
    slug: "saadan-faar-du-rene-fliser-guide",
    title: "Sådan får du rene fliser: Guide til professionel fliserens",
    excerpt:
      "Beskidte fliser ødelægger helhedsindtrykket af din have. Her er den komplette guide til metoder, DIY vs. professionel rensning og vedligeholdelse.",
    category: "Fliserens",
    date: "2026-02-15",
    readTime: "7 min",
    metaDescription:
      "Guide til professionel fliserens: metoder, DIY vs. professionel, vedligeholdelse og hvornår du bør ringe til en professionel. Kalles Algerens.",
    bodyComponentName: "ArticleProfessionelFliserens",
  },
];

export const categories = ["Alle", "Fliserens", "Tagrens", "Vedligeholdelse", "Tips"];

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): BlogArticle[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}
