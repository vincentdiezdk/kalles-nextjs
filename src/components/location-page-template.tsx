"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import Calculator from "@/components/calculator";

interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationConfig {
  city: string;
  area: string;
  description: string[];
  faqs: LocationFAQ[];
  subAreas?: string[];
  extendedContent?: string[];
}

const benefits = [
  "Varmt vand under h\u00f8jt tryk \u2014 dybere rens, bedre resultat",
  "Milj\u00f8godkendte produkter (Milj\u00f8styrelsen)",
  "L\u00e6ngerevarende resultat end kold h\u00f8jtryksrensning",
  "Sk\u00e5nsomt mod fuger og bel\u00e6gning",
  "Algebehandling inkluderet som afslutning",
  "Nabo-rabat tilg\u00e6ngelig \u2014 spar penge",
];

const process = [
  "Vi inspicerer arealet og vurderer tilstand",
  "L\u00f8s snavs, blade og mos fjernes manuelt",
  "Grundig rensning med varmt vand og milj\u00f8godkendt reng\u00f8ringsmiddel",
  "Algebehandling p\u00e5f\u00f8res for langvarig beskyttelse",
  "Vi rydder op og gennemg\u00e5r resultatet med dig",
];

export function LocationPage({
  city,
  area,
  description,
  faqs,
  subAreas,
  extendedContent,
}: LocationConfig) {
  const router = useRouter();

  const scrollToCalculator = () => {
    router.push("/");
    setTimeout(() => {
      document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Fliserens", href: "/fliserens" }, { label: city }]} />
            <p className="text-primary font-semibold text-sm mb-2">
              Professionel fliserens i {area}
            </p>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Fliserens i {city} &mdash; Professionel fliserens med varmt vand
            </h1>
            <p className="text-2xl font-bold text-primary mb-6">Fra 30 kr./m&sup2;</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="font-sans font-bold gap-2"
                onClick={scrollToCalculator}
                data-testid={`location-cta-beregn-${city.toLowerCase()}`}
              >
                Beregn din pris
                <ArrowRight className="h-4 w-4" />
              </Button>
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
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {description.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-8 text-center">
            Fliserens i {city} &ndash; professionel rens af fliser
          </h2>
          <div className="max-w-xl mx-auto">
            <BeforeAfterSlider
              before="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-indkoersel-foer.webp"
              after="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-indkoersel-efter.webp"
              label={`Fliserens i ${city} \u2014 indk\u00f8rsel`}
            />
          </div>
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-sans font-bold text-xl text-foreground mb-6">
                Fordele ved fliserens i {city}
              </h2>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-sans font-bold text-xl text-foreground mb-6">
                Hvad koster fliserens i {city}?
              </h2>
              <ol className="space-y-4">
                {process.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Ofte stillede sp&oslash;rgsm&aring;l om fliserens i {city}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`lfaq-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
                  <h3 className="font-semibold text-sm">{faq.q}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Extended SEO Content */}
      {extendedContent && extendedContent.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-bold text-xl text-foreground mb-6">
              Professionel fliserens i {city} og omegn
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {extendedContent.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-links */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Se ogs&aring; vores andre services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Fliserens", href: "/fliserens", desc: "Professionel rens af fliser og indk\u00f8rsler med varmt vand" },
              { title: "Tagrens & Tagmaling", href: "/tagrens", desc: "Komplet tagrens med maling og algebehandling" },
              { title: "Facaderens", href: "/facaderens", desc: "Sk\u00e5nsom rens af alle facadetyper" },
              { title: "Tr\u00e6terrasse Rens", href: "/traeterrasse-rens", desc: "Rens og impr\u00e6gnering af tr\u00e6terrasser" },
              { title: "Algebehandling", href: "/algebehandling-af-tag", desc: "Forebyg algev\u00e6kst med milj\u00f8godkendt behandling" },
              { title: "Se priser", href: "/priser", desc: "Gennemsigtige fra-priser p\u00e5 alle services" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="font-sans font-semibold text-sm text-foreground mb-1">{link.title}</h3>
                <p className="text-xs text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-areas coverage */}
      {subAreas && subAreas.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-bold text-xl text-foreground mb-4">
              Vi d&aelig;kker hele {city} og omegn
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Udover {city} k&oslash;rer vi ogs&aring; til f&oslash;lgende n&aelig;rliggende omr&aring;der:
            </p>
            <div className="flex flex-wrap gap-2">
              {subAreas.map((sub, i) => (
                <span key={i} className="text-xs bg-card border border-border rounded-full px-3 py-1 text-muted-foreground">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calculator */}
      <section id="calculator">
        <Calculator />
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
            Klar til professionel fliserens i {city}?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Beregn din pris online eller ring til os for en uforpligtende snak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-sans font-bold text-base"
              onClick={scrollToCalculator}
              data-testid={`location-cta-bottom-${city.toLowerCase()}`}
            >
              Beregn din pris
            </Button>
            <a href="tel:+4525131797">
              <Button
                size="lg"
                variant="outline"
                className="font-sans font-bold text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto gap-2"
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

export default LocationPage;

// ─── City Page Content Components ────────────────────────

export function HerningPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Herning",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Herning" },
    "url": "https://kaspermh.dk/fliserens-i-herning/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Herning?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Herning starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. For mindre arealer g\u00e6lder en minimumspris p\u00e5 1.500 kr. Brug vores prisberegner for et pr\u00e6cist tilbud til din adresse i Herning." } },
      { "@type": "Question", "name": "Hvor hurtigt kan I komme til Herning?", "acceptedAnswer": { "@type": "Answer", "text": "Vi bes\u00f8ger Herning regelm\u00e6ssigt og kan typisk st\u00e5 klar inden for f\u00e5 dage. Ring til os p\u00e5 25 13 17 97 for at h\u00f8re om n\u00e6ste ledige tid i Herning-omr\u00e5det." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Herning?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Hvis du og din nabo i Herning booker sammen, sparer I begge penge. Kontakt os for at h\u00f8re mere om vores nabo-rabat ordning." } },
      { "@type": "Question", "name": "Hvilke services tilbyder I i Herning?", "acceptedAnswer": { "@type": "Answer", "text": "Vi tilbyder fliserens, tagrens og tagmaling, facaderens, tr\u00e6terrasse rens og algebehandling i Herning og omegn. Alle services udf\u00f8res med professionelt udstyr og milj\u00f8godkendte produkter." } },
      { "@type": "Question", "name": "Bruger I milj\u00f8venlige produkter i Herning?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi bruger udelukkende milj\u00f8godkendte produkter, herunder Neutralon, som er godkendt af Milj\u00f8styrelsen. Vi passer p\u00e5 naturen, mens vi passer p\u00e5 dine overflader." } },
      { "@type": "Question", "name": "Kan I ogs\u00e5 rense taget i Herning?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi tilbyder komplet tagrens og tagmaling i Herning fra 10.997 kr. Det inkluderer mekanisk rensning, algebehandling og to lag kvalitets tagmaling." } },
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
      <LocationPage
        city="Herning"
        area="Herning og omegn"
        description={[
          "Bor du i Herning og har brug for professionel fliserens? Kalles Algerens tilbyder grundig rensning af fliser, indk\u00f8rsler og terrasser i Herning og omegn med professionelt udstyr og varmt vand.",
          "Herning er en af de byer, vi bes\u00f8ger oftest. Vi kender omr\u00e5det godt og kan hurtigt st\u00e5 klar til at give dine udend\u00f8rs overflader nyt liv. Vores varme vand under h\u00f8jt tryk fjerner alger, mos og snavs effektivt \u2014 uden at skade dine fliser.",
          "Vi afslutter altid med en milj\u00f8godkendt algebehandling, der beskytter dine fliser mod ny algev\u00e6kst i lang tid. Med en serviceaftale kan du f\u00e5 op til 10 \u00e5rs garanti.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Herning?", a: "Fliserens i Herning starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. For mindre arealer g\u00e6lder en minimumspris p\u00e5 1.500 kr. Brug vores prisberegner for et pr\u00e6cist tilbud til din adresse i Herning." },
          { q: "Hvor hurtigt kan I komme til Herning?", a: "Vi bes\u00f8ger Herning regelm\u00e6ssigt og kan typisk st\u00e5 klar inden for f\u00e5 dage. Ring til os p\u00e5 25 13 17 97 for at h\u00f8re om n\u00e6ste ledige tid i Herning-omr\u00e5det." },
          { q: "Tilbyder I nabo-rabat i Herning?", a: "Ja! Hvis du og din nabo i Herning booker sammen, sparer I begge penge. Kontakt os for at h\u00f8re mere om vores nabo-rabat ordning." },
          { q: "Hvilke services tilbyder I i Herning?", a: "Vi tilbyder fliserens, tagrens og tagmaling, facaderens, tr\u00e6terrasse rens og algebehandling i Herning og omegn. Alle services udf\u00f8res med professionelt udstyr og milj\u00f8godkendte produkter." },
          { q: "Bruger I milj\u00f8venlige produkter i Herning?", a: "Ja, vi bruger udelukkende milj\u00f8godkendte produkter, herunder Neutralon, som er godkendt af Milj\u00f8styrelsen. Vi passer p\u00e5 naturen, mens vi passer p\u00e5 dine overflader." },
          { q: "Kan I ogs\u00e5 rense taget i Herning?", a: "Ja! Vi tilbyder komplet tagrens og tagmaling i Herning fra 10.997 kr. Det inkluderer mekanisk rensning, algebehandling og to lag kvalitets tagmaling." },
        ]}
        subAreas={["Hammerum", "Snejbjerg", "Tj\u00f8rring", "Gjellerup", "Lind", "Sunds", "Aulum", "Vildbjerg"]}
        extendedContent={[
          "Herning er en af Midtjyllands st\u00f8rste byer, og mange husejere i omr\u00e5det har brug for professionel rensning af deres udend\u00f8rs overflader. Alger, mos og flisepest trives i det fugtige danske klima, og Herning-omr\u00e5det er ingen undtagelse.",
          "Med vores professionelle udstyr og varmt vand under h\u00f8jt tryk leverer vi en dybere og mere effektiv rens end traditionel kold h\u00f8jtryksrensning. Resultatet holder markant l\u00e6ngere, og vi afslutter altid med en milj\u00f8godkendt algebehandling.",
          "Vi tilbyder ogs\u00e5 nabo-rabat i Herning \u2014 tal med din nabo og bestil sammen, s\u00e5 sparer I begge penge. Se vores priser eller brug prisberegneren for et tilbud tilpasset din adresse i Herning.",
        ]}
      />
    </>
  );
}

export function BrandePageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Brande",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Brande" },
    "url": "https://kaspermh.dk/fliserens-i-brande/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Brande?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Brande starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Da vi har base i Brande, er der ingen ekstra k\u00f8rselsomkostninger. Brug vores prisberegner for et pr\u00e6cist tilbud." } },
      { "@type": "Question", "name": "Kan I komme hurtigt i Brande?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Da Brande er vores hjemby, kan vi ofte st\u00e5 klar samme dag eller n\u00e6ste dag. Ring til os p\u00e5 25 13 17 97." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Brande?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder nabo-rabat i hele Brande. Tal med din nabo og book sammen \u2014 s\u00e5 sparer I begge penge p\u00e5 fliserens." } },
      { "@type": "Question", "name": "Hvilke services tilbyder I i Brande?", "acceptedAnswer": { "@type": "Answer", "text": "Vi tilbyder fliserens, tagrens og tagmaling, facaderens, tr\u00e6terrasse rens og algebehandling i Brande. Som vores hjemby f\u00e5r du den hurtigste service og mest fleksible planl\u00e6gning." } },
      { "@type": "Question", "name": "Tilbyder I serviceaftaler i Brande?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder serviceaftaler med \u00e5rlig algebehandling og op til 10 \u00e5rs garanti. Det er en popul\u00e6r l\u00f8sning blandt vores kunder i Brande og omegn." } },
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
      <LocationPage
        city="Brande"
        area="Brande og omegn"
        description={[
          "Kalles Algerens har hovedkvarter i Brande, og det er her det hele startede. Bor du i Brande, kan vi tilbyde den hurtigste service og mest fleksible tidsplanl\u00e6gning til professionel fliserens.",
          "Som din lokale specialist i Brande bruger vi varmt vand og milj\u00f8godkendte produkter til at fjerne alger, mos og snavs fra dine fliser, indk\u00f8rsler og terrasser. Resultatet er markant bedre og holder l\u00e6ngere end kold h\u00f8jtryksrensning.",
          "Vi kender Brande og omegn som vores egen baghave. Kontakt os for et uforpligtende tilbud \u2014 vi kan ofte komme forbi samme dag.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Brande?", a: "Fliserens i Brande starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Da vi har base i Brande, er der ingen ekstra k\u00f8rselsomkostninger. Brug vores prisberegner for et pr\u00e6cist tilbud." },
          { q: "Kan I komme hurtigt i Brande?", a: "Ja! Da Brande er vores hjemby, kan vi ofte st\u00e5 klar samme dag eller n\u00e6ste dag. Ring til os p\u00e5 25 13 17 97." },
          { q: "Tilbyder I nabo-rabat i Brande?", a: "Ja, vi tilbyder nabo-rabat i hele Brande. Tal med din nabo og book sammen \u2014 s\u00e5 sparer I begge penge p\u00e5 fliserens." },
          { q: "Hvilke services tilbyder I i Brande?", a: "Vi tilbyder fliserens, tagrens og tagmaling, facaderens, tr\u00e6terrasse rens og algebehandling i Brande. Som vores hjemby f\u00e5r du den hurtigste service og mest fleksible planl\u00e6gning." },
          { q: "Tilbyder I serviceaftaler i Brande?", a: "Ja, vi tilbyder serviceaftaler med \u00e5rlig algebehandling og op til 10 \u00e5rs garanti. Det er en popul\u00e6r l\u00f8sning blandt vores kunder i Brande og omegn." },
        ]}
        subAreas={["Kib\u00e6k", "Skarrild", "Arnborg", "Ejstrupholm", "N\u00f8rre Snede", "Fasterholt"]}
        extendedContent={[
          "Som Kalles Algerens' hjemby er Brande det sted, hvor vi kan tilbyde den allerbedste service. Vi kender byen og dens omegn som vores egen baghave, og vi kan ofte st\u00e5 klar samme dag eller n\u00e6ste dag.",
          "Brande-omr\u00e5det har mange flotte ejendomme med terrasser, indk\u00f8rsler og tage, der har gavn af professionel rensning. Vores metode med varmt vand sikrer, at alger og snavs fjernes fra bunden \u2014 ikke bare fra overfladen.",
          "Kontakt os for et uforpligtende tilbud. Da vi har base i Brande, er der ingen ekstra k\u00f8rselsomkostninger, og vi kan tilbyde de mest konkurrencedygtige priser i omr\u00e5det.",
        ]}
      />
    </>
  );
}

export function GivePageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Give",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Give" },
    "url": "https://kaspermh.dk/fliserens-i-give/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Give?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Give starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Minimumspris er 1.500 kr. Brug vores prisberegner for et tilbud til din adresse i Give." } },
      { "@type": "Question", "name": "K\u00f8rer I ogs\u00e5 til Give?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi k\u00f8rer regelm\u00e6ssigt til Give fra vores base i Brande. Det er kun ca. 25 km, s\u00e5 vi kan nemt og hurtigt st\u00e5 klar i Give-omr\u00e5det." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Give?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Book sammen med din nabo i Give, og I sparer begge penge. Kontakt os for detaljer om vores nabo-rabat." } },
      { "@type": "Question", "name": "Hvad er inkluderet i fliserens i Give?", "acceptedAnswer": { "@type": "Answer", "text": "Prisen inkluderer komplet fliserens med varmt vand samt afsluttende algebehandling med milj\u00f8godkendt Neutralon. Vi rydder selvf\u00f8lgelig op efter os." } },
      { "@type": "Question", "name": "Kan I ogs\u00e5 rense min terrasse i Give?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder b\u00e5de fliserens og tr\u00e6terrasse rens i Give. Kontakt os for et samlet tilbud p\u00e5 begge dele." } },
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
      <LocationPage
        city="Give"
        area="Give og omegn"
        description={[
          "Har du brug for professionel fliserens i Give? Kalles Algerens k\u00f8rer regelm\u00e6ssigt til Give og omegn og tilbyder grundig rensning med varmt vand og milj\u00f8godkendte produkter.",
          "Dine fliser, indk\u00f8rsler og terrasser i Give fortjener professionel behandling. Vores metode med varmt vand under h\u00f8jt tryk fjerner alger, mos og snavs langt mere effektivt end traditionel kold h\u00f8jtryksrensning.",
          "Vi afslutter altid med algebehandling, der holder dine fliser fri for alger i lang tid. Kontakt os for et uforpligtende tilbud til din adresse i Give.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Give?", a: "Fliserens i Give starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Minimumspris er 1.500 kr. Brug vores prisberegner for et tilbud til din adresse i Give." },
          { q: "K\u00f8rer I ogs\u00e5 til Give?", a: "Ja, vi k\u00f8rer regelm\u00e6ssigt til Give fra vores base i Brande. Det er kun ca. 25 km, s\u00e5 vi kan nemt og hurtigt st\u00e5 klar i Give-omr\u00e5det." },
          { q: "Tilbyder I nabo-rabat i Give?", a: "Ja! Book sammen med din nabo i Give, og I sparer begge penge. Kontakt os for detaljer om vores nabo-rabat." },
          { q: "Hvad er inkluderet i fliserens i Give?", a: "Prisen inkluderer komplet fliserens med varmt vand samt afsluttende algebehandling med milj\u00f8godkendt Neutralon. Vi rydder selvf\u00f8lgelig op efter os." },
          { q: "Kan I ogs\u00e5 rense min terrasse i Give?", a: "Ja, vi tilbyder b\u00e5de fliserens og tr\u00e6terrasse rens i Give. Kontakt os for et samlet tilbud p\u00e5 begge dele." },
        ]}
        subAreas={["Gadbjerg", "Thyregod", "Vonge", "\u00d8ster Nykirke", "Farre"]}
        extendedContent={[
          "Give ligger kun ca. 25 km fra vores base i Brande, og vi k\u00f8rer regelm\u00e6ssigt til Give og omegn. Det betyder hurtig service og ingen un\u00f8dige ventetider for husejere i Give-omr\u00e5det.",
          "Mange boliger i Give har store flisearealer, indk\u00f8rsler og terrasser, der med tiden bliver belagt med alger, mos og snavs. Vores professionelle rensning med varmt vand fjerner det hele effektivt og sk\u00e5nsomt.",
          "Vi afslutter altid med en milj\u00f8godkendt algebehandling, der beskytter dine fliser i \u00e5revis. Ring til os for et gratis og uforpligtende tilbud til din adresse i Give.",
        ]}
      />
    </>
  );
}

export function BillundPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Billund",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Billund" },
    "url": "https://kaspermh.dk/fliserens-i-billund/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Billund?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Billund starter fra 30 kr./m\u00b2. For arealer over 50 m\u00b2 beregnes prisen per kvadratmeter. Minimumspris er 1.500 kr. Brug vores prisberegner for et pr\u00e6cist tilbud." } },
      { "@type": "Question", "name": "Hvor tit kommer I til Billund?", "acceptedAnswer": { "@type": "Answer", "text": "Vi bes\u00f8ger Billund-omr\u00e5det regelm\u00e6ssigt. Fra vores base i Brande er der kun ca. 30 km, s\u00e5 vi kan hurtigt st\u00e5 klar. Ring til os for at h\u00f8re om n\u00e6ste ledige tid." } },
      { "@type": "Question", "name": "Tilbyder I serviceaftaler i Billund?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder serviceaftaler med \u00e5rlig algebehandling og op til 10 \u00e5rs garanti. Det er en popul\u00e6r l\u00f8sning blandt vores kunder i Billund." } },
      { "@type": "Question", "name": "Kan I rense min indk\u00f8rsel i Billund?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, indk\u00f8rsler er en af de mest popul\u00e6re opgaver, vi udf\u00f8rer i Billund. Vi fjerner alger, mos og snavs med varmt vand og afslutter med algebehandling." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Billund?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Nabo-rabat er tilg\u00e6ngelig i Billund. Book sammen med din nabo, og I sparer begge penge p\u00e5 fliserens eller andre services." } },
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
      <LocationPage
        city="Billund"
        area="Billund og omegn"
        description={[
          "Professionel fliserens i Billund og omegn \u2014 Kalles Algerens tilbyder grundig rensning af dine udend\u00f8rs overflader med varmt vand og milj\u00f8godkendte produkter.",
          "Billund er kendt for LEGOLAND og sine mange p\u00e6ne villakvarterer. Vi hj\u00e6lper husejere i Billund med at holde deres fliser, indk\u00f8rsler og terrasser i topstand \u00e5ret rundt.",
          "Vores varme vand under h\u00f8jt tryk fjerner alger, mos og snavs effektivt, og vi afslutter altid med en algebehandling for langvarig beskyttelse. Ring til os for et tilbud i Billund.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Billund?", a: "Fliserens i Billund starter fra 30 kr./m\u00b2. For arealer over 50 m\u00b2 beregnes prisen per kvadratmeter. Minimumspris er 1.500 kr. Brug vores prisberegner for et pr\u00e6cist tilbud." },
          { q: "Hvor tit kommer I til Billund?", a: "Vi bes\u00f8ger Billund-omr\u00e5det regelm\u00e6ssigt. Fra vores base i Brande er der kun ca. 30 km, s\u00e5 vi kan hurtigt st\u00e5 klar. Ring til os for at h\u00f8re om n\u00e6ste ledige tid." },
          { q: "Tilbyder I serviceaftaler i Billund?", a: "Ja, vi tilbyder serviceaftaler med \u00e5rlig algebehandling og op til 10 \u00e5rs garanti. Det er en popul\u00e6r l\u00f8sning blandt vores kunder i Billund." },
          { q: "Kan I rense min indk\u00f8rsel i Billund?", a: "Ja, indk\u00f8rsler er en af de mest popul\u00e6re opgaver, vi udf\u00f8rer i Billund. Vi fjerner alger, mos og snavs med varmt vand og afslutter med algebehandling." },
          { q: "Tilbyder I nabo-rabat i Billund?", a: "Ja! Nabo-rabat er tilg\u00e6ngelig i Billund. Book sammen med din nabo, og I sparer begge penge p\u00e5 fliserens eller andre services." },
        ]}
        subAreas={["Grindsted", "Filskov", "Sdr. Omme", "Hejnsvig", "Vorbasse"]}
        extendedContent={[
          "Billund er kendt for LEGOLAND og sine mange p\u00e6ne villakvarterer. Husejere i Billund investerer i deres ejendomme, og professionel fliserens er en vigtig del af vedligeholdelsen.",
          "Vi k\u00f8rer regelm\u00e6ssigt til Billund fra vores base i Brande \u2014 kun ca. 30 km v\u00e6k. Det betyder hurtig service og konkurrencedygtige priser for alle i Billund-omr\u00e5det.",
          "Uanset om det er terrassen, indk\u00f8rslen eller hele flisearealet, der skal renses, leverer vi et professionelt resultat med varmt vand og milj\u00f8godkendte produkter.",
        ]}
      />
    </>
  );
}

export function IkastPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Ikast",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Ikast" },
    "url": "https://kaspermh.dk/fliserens-i-ikast/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Ikast?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Ikast starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Brug vores prisberegner for et pr\u00e6cist tilbud til din adresse i Ikast." } },
      { "@type": "Question", "name": "Kan I komme hurtigt til Ikast?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Ikast ligger t\u00e6t p\u00e5 vores base i Brande (ca. 25 km), og vi bes\u00f8ger omr\u00e5det regelm\u00e6ssigt. Ring til os for n\u00e6ste ledige tid i Ikast." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Ikast?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi tilbyder nabo-rabat i Ikast. Book sammen med din nabo og spar penge begge to." } },
      { "@type": "Question", "name": "Hvilke overflader kan I rense i Ikast?", "acceptedAnswer": { "@type": "Answer", "text": "Vi renser alle typer udend\u00f8rs overflader i Ikast \u2014 fliser, betonsten, natursten, indk\u00f8rsler og terrasser. Vi tilpasser altid tryk og temperatur til den specifikke overflade." } },
      { "@type": "Question", "name": "Tilbyder I serviceaftaler i Ikast?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder serviceaftaler med \u00e5rlig algebehandling og op til 10 \u00e5rs garanti. Mange kunder i Ikast v\u00e6lger denne l\u00f8sning for langvarig beskyttelse." } },
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
      <LocationPage
        city="Ikast"
        area="Ikast og omegn"
        description={[
          "Kalles Algerens tilbyder professionel fliserens i Ikast og omegn. Vi bruger varmt vand under h\u00f8jt tryk og milj\u00f8godkendte produkter til at give dine fliser nyt liv.",
          "Ikast og Ikast-Brande kommune er et af vores kerneomr\u00e5der. Vi kender de lokale forhold og kan r\u00e5dgive om den bedste behandling til netop dine fliser og din indk\u00f8rsel.",
          "Med vores afsluttende algebehandling holder resultatet i Ikast typisk 2-4 \u00e5r. Med en serviceaftale kan du forl\u00e6nge garantien op til hele 10 \u00e5r.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Ikast?", a: "Fliserens i Ikast starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Brug vores prisberegner for et pr\u00e6cist tilbud til din adresse i Ikast." },
          { q: "Kan I komme hurtigt til Ikast?", a: "Ja, Ikast ligger t\u00e6t p\u00e5 vores base i Brande (ca. 25 km), og vi bes\u00f8ger omr\u00e5det regelm\u00e6ssigt. Ring til os for n\u00e6ste ledige tid i Ikast." },
          { q: "Tilbyder I nabo-rabat i Ikast?", a: "Ja! Vi tilbyder nabo-rabat i Ikast. Book sammen med din nabo og spar penge begge to." },
          { q: "Hvilke overflader kan I rense i Ikast?", a: "Vi renser alle typer udend\u00f8rs overflader i Ikast \u2014 fliser, betonsten, natursten, indk\u00f8rsler og terrasser. Vi tilpasser altid tryk og temperatur til den specifikke overflade." },
          { q: "Tilbyder I serviceaftaler i Ikast?", a: "Ja, vi tilbyder serviceaftaler med \u00e5rlig algebehandling og op til 10 \u00e5rs garanti. Mange kunder i Ikast v\u00e6lger denne l\u00f8sning for langvarig beskyttelse." },
        ]}
        subAreas={["Ikast-Brande", "Bording", "Engesvang", "Tulstrup", "Isenvad"]}
        extendedContent={[
          "Ikast er en af de byer vi bes\u00f8ger oftest, og vi kender Ikast-Brande kommune rigtig godt. Mange husejere i Ikast har store flisearealer og indk\u00f8rsler, der med tiden bliver belagt med alger og mos.",
          "Vores professionelle rensning med varmt vand fjerner snavs og alger fra bunden \u2014 ikke bare fra overfladen. Det giver et markant bedre og l\u00e6ngerevarende resultat end traditionel kold h\u00f8jtryksrensning.",
          "Vi tilbyder ogs\u00e5 nabo-rabat i Ikast \u2014 tal med din nabo og bestil sammen, s\u00e5 sparer I begge penge. Ring til os for et uforpligtende tilbud til din adresse i Ikast.",
        ]}
      />
    </>
  );
}

export function HammerumPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Hammerum",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Hammerum" },
    "url": "https://kaspermh.dk/fliserens-i-hammerum/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Hammerum?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Hammerum starter fra 30 kr./m\u00b2. Minimumspris er 1.500 kr. Brug vores online prisberegner for et pr\u00e6cist tilbud til din adresse i Hammerum." } },
      { "@type": "Question", "name": "K\u00f8rer I til Hammerum?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Hammerum er et af de omr\u00e5der vi bes\u00f8ger oftest. Fra Brande er der kun ca. 18 km, og vi k\u00f8rer ofte forbi i forbindelse med opgaver i Herning-omr\u00e5det." } },
      { "@type": "Question", "name": "Hvad er forskellen p\u00e5 jeres metode og almindelig h\u00f8jtryksrensning?", "acceptedAnswer": { "@type": "Answer", "text": "Vi bruger varmt vand (op til 90\u00b0C) under h\u00f8jt tryk, hvilket opl\u00f8ser snavs og alger langt mere effektivt end koldt vand. Det giver et bedre og l\u00e6ngerevarende resultat for husejere i Hammerum." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Hammerum?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi tilbyder nabo-rabat i Hammerum. Tal med din nabo, book sammen, og I sparer begge penge p\u00e5 jeres fliserens." } },
      { "@type": "Question", "name": "Kan I ogs\u00e5 rense terrassen i Hammerum?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder b\u00e5de fliserens og tr\u00e6terrasse rens i Hammerum. Vi tilpasser altid metode og tryk til den specifikke overflade for det bedste resultat." } },
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
      <LocationPage
        city="Hammerum"
        area="Hammerum og omegn"
        description={[
          "Professionel fliserens i Hammerum \u2014 Kalles Algerens tilbyder grundig rensning med varmt vand og milj\u00f8godkendte produkter for husejere i Hammerum og omegn.",
          "Hammerum ligger t\u00e6t p\u00e5 Herning, og vi bes\u00f8ger omr\u00e5det ofte. Dine fliser, indk\u00f8rsler og terrasser f\u00e5r en professionel behandling, der fjerner alger, mos og snavs effektivt.",
          "Vi bruger altid varmt vand, som opl\u00f8ser snavs og alger langt bedre end kold rensning. Resultatet holder markant l\u00e6ngere, og vi afslutter med algebehandling for ekstra beskyttelse.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Hammerum?", a: "Fliserens i Hammerum starter fra 30 kr./m\u00b2. Minimumspris er 1.500 kr. Brug vores online prisberegner for et pr\u00e6cist tilbud til din adresse i Hammerum." },
          { q: "K\u00f8rer I til Hammerum?", a: "Ja, Hammerum er et af de omr\u00e5der vi bes\u00f8ger oftest. Fra Brande er der kun ca. 18 km, og vi k\u00f8rer ofte forbi i forbindelse med opgaver i Herning-omr\u00e5det." },
          { q: "Hvad er forskellen p\u00e5 jeres metode og almindelig h\u00f8jtryksrensning?", a: "Vi bruger varmt vand (op til 90\u00b0C) under h\u00f8jt tryk, hvilket opl\u00f8ser snavs og alger langt mere effektivt end koldt vand. Det giver et bedre og l\u00e6ngerevarende resultat for husejere i Hammerum." },
          { q: "Tilbyder I nabo-rabat i Hammerum?", a: "Ja! Vi tilbyder nabo-rabat i Hammerum. Tal med din nabo, book sammen, og I sparer begge penge p\u00e5 jeres fliserens." },
          { q: "Kan I ogs\u00e5 rense terrassen i Hammerum?", a: "Ja, vi tilbyder b\u00e5de fliserens og tr\u00e6terrasse rens i Hammerum. Vi tilpasser altid metode og tryk til den specifikke overflade for det bedste resultat." },
        ]}
        subAreas={["Herning", "Gjellerup", "Lind", "Birk"]}
        extendedContent={[
          "Hammerum er en del af Herning Kommune og ligger kun ca. 18 km fra vores base i Brande. Vi bes\u00f8ger Hammerum regelm\u00e6ssigt og kan hurtigt st\u00e5 klar til opgaver i omr\u00e5det.",
          "Mange boliger i Hammerum har store terrasser og indk\u00f8rsler, der med tiden bliver belagt med alger og mos. Vores professionelle rensning med varmt vand fjerner snavset fra bunden og giver et resultat, der holder markant l\u00e6ngere.",
          "Vi tilbyder nabo-rabat i Hammerum \u2014 bestil sammen med din nabo og spar begge penge. Kontakt os for et gratis og uforpligtende tilbud til din adresse i Hammerum.",
        ]}
      />
    </>
  );
}

export function SnejbjergPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Snejbjerg",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Snejbjerg" },
    "url": "https://kaspermh.dk/fliserens-i-snejbjerg/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Snejbjerg?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Snejbjerg starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Minimumspris er 1.500 kr. Brug vores prisberegner for et tilbud." } },
      { "@type": "Question", "name": "K\u00f8rer I til Snejbjerg?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi d\u00e6kker Snejbjerg som en del af vores service i Herning-omr\u00e5det. Vi er kun ca. 22 km fra vores base i Brande." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Snejbjerg?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Nabo-rabat er tilg\u00e6ngelig i Snejbjerg. Tal med din nabo, book sammen, og spar begge penge p\u00e5 fliserens." } },
      { "@type": "Question", "name": "Hvad er inkluderet i fliserens i Snejbjerg?", "acceptedAnswer": { "@type": "Answer", "text": "Prisen inkluderer komplet fliserens med varmt vand under h\u00f8jt tryk samt afsluttende algebehandling med milj\u00f8godkendt Neutralon. Vi rydder altid op efter os." } },
      { "@type": "Question", "name": "Kan I ogs\u00e5 rense facaden i Snejbjerg?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder ogs\u00e5 facaderens i Snejbjerg. Vi renser alle facadetyper \u2014 mursten, puds, tr\u00e6 og beton \u2014 med sk\u00e5nsomme metoder tilpasset materialet." } },
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
      <LocationPage
        city="Snejbjerg"
        area="Snejbjerg og omegn"
        description={[
          "Bor du i Snejbjerg og \u00f8nsker professionel fliserens? Kalles Algerens d\u00e6kker Snejbjerg og omegn med grundig rensning af fliser, indk\u00f8rsler og terrasser.",
          "Snejbjerg er en popul\u00e6r boligby n\u00e6r Herning, og vi bes\u00f8ger omr\u00e5det regelm\u00e6ssigt. Vores professionelle udstyr med varmt vand sikrer en dybere og mere sk\u00e5nsom rens end traditionel h\u00f8jtryksrensning.",
          "Vi afslutter altid med en milj\u00f8godkendt algebehandling, der beskytter dine overflader mod ny algev\u00e6kst i lang tid. Kontakt os for et tilbud i Snejbjerg.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Snejbjerg?", a: "Fliserens i Snejbjerg starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Minimumspris er 1.500 kr. Brug vores prisberegner for et tilbud." },
          { q: "K\u00f8rer I til Snejbjerg?", a: "Ja, vi d\u00e6kker Snejbjerg som en del af vores service i Herning-omr\u00e5det. Vi er kun ca. 22 km fra vores base i Brande." },
          { q: "Tilbyder I nabo-rabat i Snejbjerg?", a: "Ja! Nabo-rabat er tilg\u00e6ngelig i Snejbjerg. Tal med din nabo, book sammen, og spar begge penge p\u00e5 fliserens." },
          { q: "Hvad er inkluderet i fliserens i Snejbjerg?", a: "Prisen inkluderer komplet fliserens med varmt vand under h\u00f8jt tryk samt afsluttende algebehandling med milj\u00f8godkendt Neutralon. Vi rydder altid op efter os." },
          { q: "Kan I ogs\u00e5 rense facaden i Snejbjerg?", a: "Ja, vi tilbyder ogs\u00e5 facaderens i Snejbjerg. Vi renser alle facadetyper \u2014 mursten, puds, tr\u00e6 og beton \u2014 med sk\u00e5nsomme metoder tilpasset materialet." },
        ]}
        subAreas={["Herning", "Tj\u00f8rring", "Snejbjerg Syd", "Studsg\u00e5rd"]}
        extendedContent={[
          "Snejbjerg er en af Hernings mest popul\u00e6re forst\u00e6der med mange nyere og \u00e6ldre villaer. De fleste husejere i Snejbjerg har terrasser og indk\u00f8rsler, der kr\u00e6ver regelm\u00e6ssig vedligeholdelse for at holde sig p\u00e6ne.",
          "Vores professionelle fliserens med varmt vand fjerner alger, mos og snavs effektivt og sk\u00e5nsomt. Resultatet holder markant l\u00e6ngere end kold h\u00f8jtryksrensning, og vi afslutter altid med milj\u00f8godkendt algebehandling.",
          "Kontakt os for et gratis tilbud til din adresse i Snejbjerg. Vi tilbyder ogs\u00e5 nabo-rabat \u2014 tal med din nabo og bestil sammen for at spare penge begge to.",
        ]}
      />
    </>
  );
}

export function KibaekPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Kib\u00e6k",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Kib\u00e6k" },
    "url": "https://kaspermh.dk/fliserens-i-kibaek/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Kib\u00e6k?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Kib\u00e6k starter fra 30 kr./m\u00b2. Da Kib\u00e6k ligger t\u00e6t p\u00e5 vores base i Brande (ca. 15 km), kan vi tilbyde hurtig service. Brug vores prisberegner for et pr\u00e6cist tilbud." } },
      { "@type": "Question", "name": "Kan I komme hurtigt i Kib\u00e6k?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Kib\u00e6k er en af de byer t\u00e6ttest p\u00e5 vores base. Vi kan ofte komme inden for f\u00e5 dage \u2014 ring til os p\u00e5 25 13 17 97." } },
      { "@type": "Question", "name": "Hvad er inkluderet i prisen?", "acceptedAnswer": { "@type": "Answer", "text": "Prisen inkluderer komplet fliserens med varmt vand samt afsluttende algebehandling med milj\u00f8godkendt Neutralon. Vi rydder selvf\u00f8lgelig op efter os." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Kib\u00e6k?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi tilbyder nabo-rabat i Kib\u00e6k og omegn. Bestil sammen med din nabo, og I sparer begge penge. Kontakt os for detaljer." } },
      { "@type": "Question", "name": "Kan I ogs\u00e5 rense taget i Kib\u00e6k?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder komplet tagrens og tagmaling i Kib\u00e6k fra 10.997 kr. Det inkluderer rensning, algebehandling og to lag tagmaling." } },
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
      <LocationPage
        city="Kib\u00e6k"
        area="Kib\u00e6k og omegn"
        description={[
          "Kalles Algerens tilbyder professionel fliserens i Kib\u00e6k og omegn. Vi bruger varmt vand under h\u00f8jt tryk for at fjerne alger, mos og snavs fra dine udend\u00f8rs overflader.",
          "Kib\u00e6k ligger t\u00e6t p\u00e5 vores base i Brande, s\u00e5 vi kan hurtigt og fleksibelt st\u00e5 klar til opgaver i Kib\u00e6k-omr\u00e5det. Vores metode er grundigere og mere sk\u00e5nsom end almindelig kold h\u00f8jtryksrensning.",
          "Alle produkter er milj\u00f8godkendte af Milj\u00f8styrelsen, og vi afslutter med algebehandling for langvarig beskyttelse. Ring til os for et tilbud.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Kib\u00e6k?", a: "Fliserens i Kib\u00e6k starter fra 30 kr./m\u00b2. Da Kib\u00e6k ligger t\u00e6t p\u00e5 vores base i Brande (ca. 15 km), kan vi tilbyde hurtig service. Brug vores prisberegner for et pr\u00e6cist tilbud." },
          { q: "Kan I komme hurtigt i Kib\u00e6k?", a: "Ja! Kib\u00e6k er en af de byer t\u00e6ttest p\u00e5 vores base. Vi kan ofte komme inden for f\u00e5 dage \u2014 ring til os p\u00e5 25 13 17 97." },
          { q: "Hvad er inkluderet i prisen?", a: "Prisen inkluderer komplet fliserens med varmt vand samt afsluttende algebehandling med milj\u00f8godkendt Neutralon. Vi rydder selvf\u00f8lgelig op efter os." },
          { q: "Tilbyder I nabo-rabat i Kib\u00e6k?", a: "Ja! Vi tilbyder nabo-rabat i Kib\u00e6k og omegn. Bestil sammen med din nabo, og I sparer begge penge. Kontakt os for detaljer." },
          { q: "Kan I ogs\u00e5 rense taget i Kib\u00e6k?", a: "Ja, vi tilbyder komplet tagrens og tagmaling i Kib\u00e6k fra 10.997 kr. Det inkluderer rensning, algebehandling og to lag tagmaling." },
        ]}
        subAreas={["Brande", "Skarrild", "Sdr. Felding", "Hoven", "Stakroge"]}
        extendedContent={[
          "Kib\u00e6k ligger kun ca. 15 km fra vores base i Brande, hvilket g\u00f8r det til et af de omr\u00e5der vi kan servicere hurtigst. Mange husejere i Kib\u00e6k har terrasser og indk\u00f8rsler, der med tiden f\u00e5r alger og mos.",
          "Vores metode med varmt vand under h\u00f8jt tryk er markant mere effektiv end kold h\u00f8jtryksrensning. Vi fjerner snavs og alger helt fra bunden, og resultatet holder i flere \u00e5r med vores milj\u00f8godkendte algebehandling.",
          "Kontakt os for et uforpligtende tilbud til din adresse i Kib\u00e6k. Vi tilbyder ogs\u00e5 nabo-rabat, s\u00e5 tal med dine naboer og spar penge sammen.",
        ]}
      />
    </>
  );
}

export function SundsPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens i Sunds",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "areaServed": { "@type": "City", "name": "Sunds" },
    "url": "https://kaspermh.dk/fliserens-i-sunds/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens i Sunds?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens i Sunds starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Minimumspris er 1.500 kr. Brug vores online prisberegner for et tilbud til din adresse i Sunds." } },
      { "@type": "Question", "name": "K\u00f8rer I ogs\u00e5 til Sunds?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi d\u00e6kker Sunds som en del af vores serviceomr\u00e5de i Midtjylland. Fra Brande er der ca. 30 km, og vi bes\u00f8ger omr\u00e5det regelm\u00e6ssigt." } },
      { "@type": "Question", "name": "Hvor lang tid holder resultatet i Sunds?", "acceptedAnswer": { "@type": "Answer", "text": "Med vores algebehandling holder resultatet typisk 2-4 \u00e5r. Med en serviceaftale og \u00e5rlig behandling kan du opn\u00e5 op til 10 \u00e5rs garanti p\u00e5 dine fliser i Sunds." } },
      { "@type": "Question", "name": "Tilbyder I nabo-rabat i Sunds?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi tilbyder nabo-rabat i Sunds. Bestil sammen med din nabo, og I sparer begge penge. Jo flere naboer, jo st\u00f8rre besparelse." } },
      { "@type": "Question", "name": "Hvilke produkter bruger I i Sunds?", "acceptedAnswer": { "@type": "Answer", "text": "Vi bruger udelukkende milj\u00f8godkendte produkter, herunder Neutralon godkendt af Milj\u00f8styrelsen. Det er vigtigt for os \u2014 s\u00e6rligt n\u00e6r Sunds S\u00f8 \u2014 at passe p\u00e5 naturen." } },
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
      <LocationPage
        city="Sunds"
        area="Sunds og omegn"
        description={[
          "Professionel fliserens i Sunds og omegn \u2014 Kalles Algerens d\u00e6kker Sunds med grundig rensning af fliser, indk\u00f8rsler og terrasser med varmt vand og milj\u00f8godkendte produkter.",
          "Sunds ligger ved den smukke Sunds S\u00f8, og mange husejere i omr\u00e5det har flotte udend\u00f8rs arealer, der fortjener professionel pleje. Vi fjerner alger, mos og snavs effektivt med varmt vand under h\u00f8jt tryk.",
          "Vi afslutter altid med algebehandling for langvarig beskyttelse. Med en serviceaftale kan du sikre dig op til 10 \u00e5rs garanti p\u00e5 behandlingen.",
        ]}
        faqs={[
          { q: "Hvad koster fliserens i Sunds?", a: "Fliserens i Sunds starter fra 30 kr./m\u00b2 for arealer over 50 m\u00b2. Minimumspris er 1.500 kr. Brug vores online prisberegner for et tilbud til din adresse i Sunds." },
          { q: "K\u00f8rer I ogs\u00e5 til Sunds?", a: "Ja, vi d\u00e6kker Sunds som en del af vores serviceomr\u00e5de i Midtjylland. Fra Brande er der ca. 30 km, og vi bes\u00f8ger omr\u00e5det regelm\u00e6ssigt." },
          { q: "Hvor lang tid holder resultatet i Sunds?", a: "Med vores algebehandling holder resultatet typisk 2-4 \u00e5r. Med en serviceaftale og \u00e5rlig behandling kan du opn\u00e5 op til 10 \u00e5rs garanti p\u00e5 dine fliser i Sunds." },
          { q: "Tilbyder I nabo-rabat i Sunds?", a: "Ja! Vi tilbyder nabo-rabat i Sunds. Bestil sammen med din nabo, og I sparer begge penge. Jo flere naboer, jo st\u00f8rre besparelse." },
          { q: "Hvilke produkter bruger I i Sunds?", a: "Vi bruger udelukkende milj\u00f8godkendte produkter, herunder Neutralon godkendt af Milj\u00f8styrelsen. Det er vigtigt for os \u2014 s\u00e6rligt n\u00e6r Sunds S\u00f8 \u2014 at passe p\u00e5 naturen." },
        ]}
        subAreas={["Ilskov", "Simmelk\u00e6r", "Feldborg", "Haderup"]}
        extendedContent={[
          "Sunds ligger ved den smukke Sunds S\u00f8, og mange husejere i omr\u00e5det investerer i deres ejendommes udend\u00f8rs arealer. Professionel fliserens er en vigtig del af vedligeholdelsen i det fugtige danske klima.",
          "Vi bruger udelukkende milj\u00f8godkendte produkter \u2014 det er s\u00e6rligt vigtigt i et natursk\u00f8nt omr\u00e5de som Sunds. Vores varme vand under h\u00f8jt tryk fjerner alger og snavs effektivt uden at belaste milj\u00f8et.",
          "Kontakt os for et gratis tilbud til din adresse i Sunds. Vi tilbyder nabo-rabat, s\u00e5 tal med din nabo og bestil sammen for at spare penge begge to.",
        ]}
      />
    </>
  );
}
