import type { Metadata } from "next";
import ServicefradragPageContent from "./ServicefradragPageContent";

const faqs = [
  {
    q: "Kan jeg få servicefradrag på fliserens?",
    a: "Ja. Fliserensning af terrasser, indkørsler og belægninger er direkte nævnt på SKATs liste over fradragsberettigede serviceydelser under \"Almindeligt havearbejde m.v.\" Du kan trække arbejdslønnen fra i skat — op til 18.300 kr. pr. person i 2026.",
  },
  {
    q: "Hvad er forskellen på servicefradrag og håndværkerfradrag?",
    a: "Servicefradraget dækker serviceydelser som rengøring, havearbejde og fliserens (op til 18.300 kr./person i 2026). Håndværkerfradraget dækker grøn energirenovering som isolering og varmepumper (op til 9.000 kr./person i 2026). Fliserens hører under servicefradraget. De to fradrag kan bruges samtidig.",
  },
  {
    q: "Hvor meget kan jeg spare i skat på fliserens?",
    a: "Skatteværdien af servicefradraget er ca. 26%. Hvis du betaler 3.900 kr. for fliserens (heraf 3.120 kr. i arbejdsløn ex. moms), sparer du ca. 811 kr. i skat. Er I to voksne i husstanden, kan I hver især bruge jeres fradrag — det dobbelte besparelse.",
  },
  {
    q: "Kan jeg bruge servicefradraget på mit sommerhus?",
    a: "Ja, servicefradraget gælder både for din helårsbolig og din fritidsbolig. Dog tæller det samlede fradrag for begge boliger under det samme loft på 18.300 kr. pr. person i 2026. Fradraget gælder ikke, hvis fritidsboligen har været udlejet.",
  },
  {
    q: "Hvornår skal jeg indberette servicefradraget?",
    a: "Du kan indberette servicefradraget løbende via TastSelv på skat.dk under felt 461 (Servicefradrag). Arbejde udført i 2026 skal være betalt senest 28. februar 2027 for at give fradrag i 2026. Du skal gemme fakturaen som dokumentation.",
  },
  {
    q: "Kan jeg betale med MobilePay og stadig få fradrag?",
    a: "Ja. SKAT accepterer digital betaling via MobilePay, dankort, netbank og bankoverførsel. Du kan derimod IKKE betale kontant, hvis du vil bruge servicefradraget.",
  },
  {
    q: "Hvad giver IKKE servicefradrag?",
    a: "Tagrens, algebehandling af tag, imprægnering, maling og coatings giver ikke servicefradrag. Disse ydelser betragtes som teknisk vedligehold eller håndværksydelser. Abonnementsordninger giver heller ikke fradrag.",
  },
  {
    q: "Sender Kalles Algerens en faktura, jeg kan bruge til fradrag?",
    a: "Ja. Vi sender altid en faktura med specificeret arbejdsløn, betalingsdato og vores CVR-nummer — præcis som SKAT kræver. Du kan bruge fakturaen direkte til indberetning i TastSelv.",
  },
];

export const metadata: Metadata = {
  title: "Servicefradrag på Fliserens 2026 — Spar op til 26% i Skat",
  description:
    "Få servicefradrag på fliserens i 2026. Op til 18.300 kr. pr. person — spar ~26% af arbejdslønnen i skat. Se beregningseksempler, trin-for-trin guide og bestil her.",
  alternates: {
    canonical: "https://kaspermh.dk/servicefradrag",
  },
  openGraph: {
    type: "article",
  },
};

export default function ServicefradragPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Servicefradrag på Fliserens 2026 — Spar op til 26% i Skat",
            description:
              "Komplet guide til servicefradrag på fliserens. Se satser, beregningseksempler og trin-for-trin indberetning.",
            author: {
              "@type": "Organization",
              name: "Kalles Algerens",
              url: "https://kaspermh.dk",
            },
            publisher: {
              "@type": "Organization",
              name: "Kalles Algerens",
            },
            datePublished: "2026-03-18",
            dateModified: "2026-03-18",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <ServicefradragPageContent />
    </>
  );
}
