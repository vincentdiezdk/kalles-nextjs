"use client";

import { useMemo } from "react";
import { ServicePage } from "@/components/service-page-template";

export default function TagmalingPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tagmaling",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "url": "https://kaspermh.dk/tagmaling/",
  }), []);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvor lang tid holder en tagmaling?", "acceptedAnswer": { "@type": "Answer", "text": "Typisk 8–10 år afhængig af produktvalg og vedligehold. Vi rådgiver om den bedste løsning for dit tag." } },
      { "@type": "Question", "name": "Kan malingen skade taget?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, hvis arbejdet udføres korrekt. Vi bruger skånsomme metoder til rensning og korrekt forbehandling." } },
      { "@type": "Question", "name": "Hvad koster tagmaling?", "acceptedAnswer": { "@type": "Answer", "text": "Prisen afhænger af tagets størrelse, tilstand og valg af maling. Kontakt os for et gratis og uforpligtende tilbud." } },
      { "@type": "Question", "name": "Kan I male i alle farver?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder tagmaling i en bred vifte af farver. Vi hjælper dig med at vælge den rigtige farve til dit hjem." } },
      { "@type": "Question", "name": "Inkluderer I rensning før maling?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, grundig rensning og algebehandling er altid inkluderet i vores tagmaling for at sikre det bedste resultat." } },
    ],
  }), []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePage
        title="Tagmaling – Professionel tagmaling"
        subtitle="Forlæng dit tags levetid og giv huset nyt liv"
        price="Kontakt os for pris"

        heroImage="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagmaling-hero.webp"
        beforeAfter={[
          {
            before: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagmaling-foer.webp",
            after: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagmaling-efter.webp",
            label: "Før og efter tagmaling",
          },
        ]}
        headingBeforeAfter="Se forskellen – Før og efter tagmaling"
        headingBenefits="Fordele ved professionel tagmaling"
        headingProcess="Sådan foregår en tagmaling"
        headingFaq="Ofte stillede spørgsmål om tagmaling"
        headingCta="Klar til at få dit tag malet?"
        description={[
          "Tagmaling er en effektiv måde at forlænge dit tags levetid og give huset et friskt udseende. Hos Kalles Algerens sørger vi for grundig forbehandling, kvalitetsmaling og et resultat, du kan smile over.",
          "Vi starter altid med en grundig rensning af taget, efterfulgt af algebehandling, eventuelle reparationer og til sidst mindst to lag professionel tagmaling med dansk kvalitetsmaling.",
        ]}
        benefits={[
          "Forlænger levetiden på dit tag",
          "Giver huset et pænt og ensartet udtryk",
          "Ofte billigere end udskiftning",
          "Miljøvenlige og holdbare produkter",
          "Grundig forbehandling inkluderet",
          "Professionelt resultat med garanti",
        ]}
        process={[
          "Inspektion: Vi vurderer tagets tilstand og anbefaler den rigtige løsning",
          "Rensning: Fjernelse af mos, alger og snavs med skånsomme metoder",
          "Reparation: Mindre udbedringer og klargøring før maling",
          "Primer og maling: Primer og mindst to lag kvalitetsmaling for holdbarhed",
          "Afslutning: Gennemgang og garantiinformation til dig",
        ]}
        faqs={[
          { q: "Hvor lang tid holder en tagmaling?", a: "Typisk 8–10 år afhængig af produktvalg og vedligehold. Vi rådgiver om den bedste løsning for dit tag." },
          { q: "Kan malingen skade taget?", a: "Nej, hvis arbejdet udføres korrekt. Vi bruger skånsomme metoder til rensning og korrekt forbehandling." },
          { q: "Hvad koster tagmaling?", a: "Prisen afhænger af tagets størrelse, tilstand og valg af maling. Kontakt os for et gratis og uforpligtende tilbud." },
          { q: "Kan I male i alle farver?", a: "Ja, vi tilbyder tagmaling i en bred vifte af farver. Vi hjælper dig med at vælge den rigtige farve til dit hjem." },
          { q: "Inkluderer I rensning før maling?", a: "Ja, grundig rensning og algebehandling er altid inkluderet i vores tagmaling for at sikre det bedste resultat." },
        ]}
        crossLinks={[
          { title: "Tagrens", href: "/tagrens", desc: "Professionel rensning og maling af dit tag." },
          { title: "Algebehandling", href: "/algebehandling-af-tag", desc: "Forebyggende behandling mod alger og mos på tag." },
          { title: "Fliserens", href: "/fliserens", desc: "Professionel rensning af fliser med hedt vand." },
          { title: "Facaderens", href: "/facaderens", desc: "Skånsom rensning af alle facadetyper." },
          { title: "Priser", href: "/priser", desc: "Se alle vores priser og få et uforpligtende tilbud." },
        ]}
        showNaboRabat={true}
      />
    </>
  );
}
