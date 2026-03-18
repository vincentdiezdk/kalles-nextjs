"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import type { BeforeAfterProps } from "@/components/before-after-slider";
import Calculator from "@/components/calculator";
import type { ServiceKey } from "@/components/calculator";

interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  title: string;
  subtitle: string;
  price: string;
  description: string[];
  benefits: string[];
  process: string[];
  faqs: FAQ[];
  warning?: string;
  heroImage?: string;
  beforeAfter?: BeforeAfterProps[];
  extraImages?: { src: string; alt: string }[];
  headingBenefits?: string;
  headingProcess?: string;
  headingFaq?: string;
  headingBeforeAfter?: string;
  headingCta?: string;
  seoContent?: { heading: string; paragraphs: string[] }[];
  crossLinks?: { title: string; href: string; desc: string }[];
  showNaboRabat?: boolean;
  /** Key for the Calculator component — embeds prisberegner with this service pre-selected */
  serviceKey?: ServiceKey;
  calculatorHeading?: string;
  calculatorSubheading?: string;
}

export function ServicePage({
  title,
  subtitle,
  price,
  description,
  benefits,
  process,
  faqs,
  warning,
  heroImage,
  beforeAfter,
  extraImages,
  headingBenefits,
  headingProcess,
  headingFaq,
  headingBeforeAfter,
  headingCta,
  seoContent,
  crossLinks,
  showNaboRabat,
  serviceKey,
  calculatorHeading,
  calculatorSubheading,
}: ServicePageProps) {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 ${heroImage ? 'lg:grid-cols-2 gap-10 items-center' : ''}`}>
            <div className="max-w-3xl">
              <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: title }]} />
              <p className="text-primary font-semibold text-sm mb-2">{subtitle}</p>
              <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-4">
                {title}
              </h1>
              <p className="text-2xl font-bold text-primary mb-4">{price}</p>

              {/* Micro trust signals */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-primary" /> 500+ tilfredse kunder</span>
                <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-primary" /> Op til 10 års garanti</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-primary" /> Svar inden 24 timer</span>
              </div>

              {warning && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg px-4 py-3 text-sm mb-6">
                  ⚠️ {warning}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="font-sans font-bold gap-2"
                  onClick={scrollToCalculator}
                  data-testid="service-cta-beregn"
                >
                  Beregn din pris — gratis
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
              <p className="text-xs text-muted-foreground mt-3">Uforpligtende tilbud. Ingen binding.</p>
            </div>
            {heroImage && (
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            )}
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

      {/* Before/After section */}
      {beforeAfter && beforeAfter.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-bold text-xl text-foreground mb-8 text-center">
              {headingBeforeAfter || "Før & efter"}
            </h2>
            <div className={`grid grid-cols-1 ${beforeAfter.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-8`}>
              {beforeAfter.map((ba, i) => (
                <BeforeAfterSlider key={i} {...ba} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extra images */}
      {extraImages && extraImages.length > 0 && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extraImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits + Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-sans font-bold text-xl text-foreground mb-6">
                {headingBenefits || "Fordele"}
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
                {headingProcess || "Sådan foregår det"}
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

          {/* Mid-page CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="font-sans font-bold gap-2"
                onClick={scrollToCalculator}
              >
                Få dit tilbud nu
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

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-bold text-xl text-foreground mb-6">
              {headingFaq || `Spørgsmål om ${title.toLowerCase()}`}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`sfaq-${i}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* SEO Content Sections */}
      {seoContent && seoContent.length > 0 && seoContent.map((section, i) => (
        <section key={`seo-${i}`} className={`py-12 md:py-16 ${i % 2 === 0 ? 'bg-muted/20' : ''}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-bold text-xl text-foreground mb-4">{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* Cross-links Section */}
      {crossLinks && crossLinks.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-bold text-xl text-foreground mb-6">Se også vores andre services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {crossLinks.map((link, i) => (
                <Link key={i} href={link.href} className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <h3 className="font-sans font-semibold text-sm text-foreground mb-1">{link.title}</h3>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nabo-rabat CTA */}
      {showNaboRabat && (
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 bg-primary/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground">Spar penge med nabo-rabat</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Bestil sammen med din nabo og spar begge penge. Læs mere om vores populære nabo-rabat ordning.
                </p>
              </div>
              <Link href="/nabo-rabat">
                <Button variant="outline" className="shrink-0 font-semibold">
                  Læs om nabo-rabat
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Embedded Calculator */}
      {serviceKey ? (
        <Calculator
          initialService={serviceKey}
          heading={calculatorHeading || `Beregn din pris på ${title.toLowerCase()}`}
          subheading={calculatorSubheading || `Udfyld dine oplysninger og få et vejledende tilbud på ${title.toLowerCase()} inden 24 timer.`}
        />
      ) : (
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
              {headingCta || "Klar til at få det gjort?"}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Beregn din pris eller ring til os for en uforpligtende snak.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="font-sans font-bold text-base"
                onClick={scrollToCalculator}
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
      )}
    </div>
  );
}

export default ServicePage;

// ─── Service Page Content Components ────────────────────────

export function FliserensPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fliserens",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "url": "https://kaspermh.dk/fliserens/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvad koster fliserens per m²?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens starter fra 30 kr./m² for arealer over 50 m². For mindre arealer gælder en minimumspris på 1.500 kr. Brug vores prisberegner for et præcist tilbud." } },
      { "@type": "Question", "name": "Kan varmt vand skade mine fliser?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, varmt vand er faktisk mere skånsomt end kold højtryksrensning, fordi vi kan bruge lavere tryk og stadig opnå et bedre resultat. Vi tilpasser altid tryk og temperatur til materialet." } },
      { "@type": "Question", "name": "Hvor lang tid holder resultatet?", "acceptedAnswer": { "@type": "Answer", "text": "Med vores afsluttende algebehandling holder resultatet typisk 2-4 år, afhængigt af placering og vejrforhold. Med en serviceaftale og årlig algebehandling kan du opnå op til 10 års garanti." } },
      { "@type": "Question", "name": "Hvor lang tid holder en fliserens?", "acceptedAnswer": { "@type": "Answer", "text": "En professionel fliserens med algebehandling holder typisk 2-4 år. Med en serviceaftale og årlig algebehandling kan resultatet holde endnu længere — op til 10 år med garanti." } },
      { "@type": "Question", "name": "Bliver fliserne som nye igen?", "acceptedAnswer": { "@type": "Answer", "text": "I de fleste tilfælde ja. Vores varme vand og professionelle udstyr fjerner alger, mos og snavs så effektivt, at fliserne ofte ser ud som nye. Resultatet afhænger dog af flisernes alder og tilstand." } },
      { "@type": "Question", "name": "Hvad sker der med fugerne?", "acceptedAnswer": { "@type": "Answer", "text": "Vi tilpasser trykket, så fugerne ikke skades. Varmt vand gør det muligt at rense effektivt med lavere tryk, hvilket er mere skånsomt for fugerne end traditionel kold højtryksrensning." } },
      { "@type": "Question", "name": "Hvor lang tid tager en fliserens?", "acceptedAnswer": { "@type": "Answer", "text": "En typisk fliserens tager mellem 2-5 timer afhængigt af arealets størrelse og tilstand. Vi giver dig et tidsestimat sammen med dit tilbud." } },
      { "@type": "Question", "name": "Skal jeg være hjemme?", "acceptedAnswer": { "@type": "Answer", "text": "Det er ikke nødvendigt at være hjemme under selve rensningen, så længe vi har adgang til arealet og en vandslange. Vi aftaler detaljerne inden vi starter." } },
      { "@type": "Question", "name": "Hvornår må fliserne bruges igen?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserne kan bruges umiddelbart efter rensningen. Algebehandlingen skal dog tørre i mindst 2-4 timer, så vi anbefaler at undgå at gå på de behandlede fliser i den periode." } },
      { "@type": "Question", "name": "Kræver det vand eller strøm?", "acceptedAnswer": { "@type": "Answer", "text": "Vi har brug for adgang til en vandslange. Vores udstyr er selvforsynende med strøm, så du behøver ikke bekymre dig om stikkontakter." } },
      { "@type": "Question", "name": "Får jeg en fast pris?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, du får altid en fast pris inden vi starter. Brug vores online prisberegner for et vejledende tilbud, eller ring til os for et præcist tilbud baseret på dit areal." } },
      { "@type": "Question", "name": "Er der en minimumsopgave?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vores minimumspris er 1.500 kr. Det dækker mindre arealer og sikrer, at vi kan levere den samme høje kvalitet uanset opgavens størrelse." } },
      { "@type": "Question", "name": "Rydder du op?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi rydder altid op efter os. Vi fjerner alt affald og sikrer, at dit areal er rent og klar til brug, inden vi forlader stedet." } },
      { "@type": "Question", "name": "Hvornår på året?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens kan udføres året rundt, men den mest populære periode er forår og sommer. Algebehandling er mest effektiv når det er tørt, typisk fra april til oktober." } },
      { "@type": "Question", "name": "Tilbyder du vedligeholdelse?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder serviceaftaler med årlig algebehandling. Med en aktiv serviceaftale forlænges din garanti op til 10 år, og vi kontakter dig automatisk, når det er tid til næste behandling." } },
      { "@type": "Question", "name": "Kan fliser tage skade?", "acceptedAnswer": { "@type": "Answer", "text": "Vores metode med varmt vand og tilpasset tryk er meget skånsom. Vi vurderer altid flisernes tilstand inden vi starter og tilpasser vores metode, så der ikke opstår skader." } },
      { "@type": "Question", "name": "Bruger du højtryk?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi bruger professionelt højtryksudstyr med varmt vand. Varmt vand gør det muligt at bruge lavere tryk end traditionel kold højtryksrensning og stadig opnå et bedre resultat." } },
      { "@type": "Question", "name": "Hvorfor vælge imprægnering?", "acceptedAnswer": { "@type": "Answer", "text": "Imprægnering skaber en beskyttende barriere på flisernes overflade, som gør dem mere modstandsdygtige over for alger, mos og snavs. Det forlænger resultatet markant og gør fremtidig rensning lettere." } },
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
        title="Fliserens"
        subtitle="Professionel fliserens i Midtjylland"
        price="Fra 30 kr./m²"
        serviceKey="fliser"
        heroImage="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/fliserens.webp"
        headingBeforeAfter="Professionel fliserens med hedt vand"
        headingBenefits="Fordele ved professionel rens af fliser"
        headingProcess="Hvad indeholder en rens af fliser?"
        headingFaq="Ofte stillede spørgsmål om fliserens"
        headingCta="Klar til professionel fliserens?"
        beforeAfter={[
          { before: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-indkoersel-foer.webp", after: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-indkoersel-efter.webp", label: "Fliserens — indkørsel" },
          { before: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-foer.webp", after: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-efter.webp", label: "Fliserens — baghave" },
        ]}
        description={[
          "Dine udendørs fliser fortjener at se nye ud igen. Hos Kalles Algerens bruger vi professionelt udstyr med varmt vand under højt tryk for at fjerne alger, mos, snavs og belægninger — uden at skade dine fliser.",
          "Vores metode er grundigere og mere skånsom end almindelig højtryksrenser. Varmt vand opløser snavs og alger langt mere effektivt, hvilket giver et resultat der holder markant længere end kold rensning.",
          "Alle vores produkter er miljøgodkendte af Miljøstyrelsen, og vi afslutter altid med en algebehandling der beskytter dine fliser mod ny algevækst i lang tid.",
        ]}
        benefits={[
          "Varmt vand under højt tryk — dybere rens, bedre resultat",
          "Miljøgodkendte produkter (Miljøstyrelsen)",
          "Længerevarende resultat end kold højtryksrensning",
          "Skånsomt mod fuger og belægning",
          "Algebehandling inkluderet som afslutning",
          "Nabo-rabat tilgængelig — spar penge",
        ]}
        process={[
          "Vi inspicerer arealet og vurderer tilstand",
          "Løs snavs, blade og mos fjernes manuelt",
          "Grundig rensning med varmt vand og miljøgodkendt rengøringsmiddel",
          "Algebehandling påføres for langvarig beskyttelse",
          "Vi rydder op og gennemgår resultatet med dig",
        ]}
        faqs={[
          { q: "Hvad koster fliserens per m²?", a: "Fliserens starter fra 30 kr./m² for arealer over 50 m². For mindre arealer gælder en minimumspris på 1.500 kr. Brug vores prisberegner for et præcist tilbud." },
          { q: "Kan varmt vand skade mine fliser?", a: "Nej, varmt vand er faktisk mere skånsomt end kold højtryksrensning, fordi vi kan bruge lavere tryk og stadig opnå et bedre resultat. Vi tilpasser altid tryk og temperatur til materialet." },
          { q: "Hvor lang tid holder resultatet?", a: "Med vores afsluttende algebehandling holder resultatet typisk 2-4 år, afhængigt af placering og vejrforhold. Med en serviceaftale og årlig algebehandling kan du opnå op til 10 års garanti." },
          { q: "Hvor lang tid holder en fliserens?", a: "En professionel fliserens med algebehandling holder typisk 2-4 år. Med en serviceaftale og årlig algebehandling kan resultatet holde endnu længere — op til 10 år med garanti." },
          { q: "Bliver fliserne som nye igen?", a: "I de fleste tilfælde ja. Vores varme vand og professionelle udstyr fjerner alger, mos og snavs så effektivt, at fliserne ofte ser ud som nye. Resultatet afhænger dog af flisernes alder og tilstand." },
          { q: "Hvad sker der med fugerne?", a: "Vi tilpasser trykket, så fugerne ikke skades. Varmt vand gør det muligt at rense effektivt med lavere tryk, hvilket er mere skånsomt for fugerne end traditionel kold højtryksrensning." },
          { q: "Hvor lang tid tager en fliserens?", a: "En typisk fliserens tager mellem 2-5 timer afhængigt af arealets størrelse og tilstand. Vi giver dig et tidsestimat sammen med dit tilbud." },
          { q: "Skal jeg være hjemme?", a: "Det er ikke nødvendigt at være hjemme under selve rensningen, så længe vi har adgang til arealet og en vandslange. Vi aftaler detaljerne inden vi starter." },
          { q: "Hvornår må fliserne bruges igen?", a: "Fliserne kan bruges umiddelbart efter rensningen. Algebehandlingen skal dog tørre i mindst 2-4 timer, så vi anbefaler at undgå at gå på de behandlede fliser i den periode." },
          { q: "Kræver det vand eller strøm?", a: "Vi har brug for adgang til en vandslange. Vores udstyr er selvforsynende med strøm, så du behøver ikke bekymre dig om stikkontakter." },
          { q: "Får jeg en fast pris?", a: "Ja, du får altid en fast pris inden vi starter. Brug vores online prisberegner for et vejledende tilbud, eller ring til os for et præcist tilbud baseret på dit areal." },
          { q: "Er der en minimumsopgave?", a: "Ja, vores minimumspris er 1.500 kr. Det dækker mindre arealer og sikrer, at vi kan levere den samme høje kvalitet uanset opgavens størrelse." },
          { q: "Rydder du op?", a: "Ja, vi rydder altid op efter os. Vi fjerner alt affald og sikrer, at dit areal er rent og klar til brug, inden vi forlader stedet." },
          { q: "Hvornår på året?", a: "Fliserens kan udføres året rundt, men den mest populære periode er forår og sommer. Algebehandling er mest effektiv når det er tørt, typisk fra april til oktober." },
          { q: "Tilbyder du vedligeholdelse?", a: "Ja, vi tilbyder serviceaftaler med årlig algebehandling. Med en aktiv serviceaftale forlænges din garanti op til 10 år, og vi kontakter dig automatisk, når det er tid til næste behandling." },
          { q: "Kan fliser tage skade?", a: "Vores metode med varmt vand og tilpasset tryk er meget skånsom. Vi vurderer altid flisernes tilstand inden vi starter og tilpasser vores metode, så der ikke opstår skader." },
          { q: "Bruger du højtryk?", a: "Ja, vi bruger professionelt højtryksudstyr med varmt vand. Varmt vand gør det muligt at bruge lavere tryk end traditionel kold højtryksrensning og stadig opnå et bedre resultat." },
          { q: "Hvorfor vælge imprægnering?", a: "Imprægnering skaber en beskyttende barriere på flisernes overflade, som gør dem mere modstandsdygtige over for alger, mos og snavs. Det forlænger resultatet markant og gør fremtidig rensning lettere." },
        ]}
        seoContent={[
          {
            heading: "Hvorfor er fliserens nødvendigt?",
            paragraphs: [
              "Fliser er udsat for fugt, snavs og vejr. Over tid skaber det gode vilkår for alger og flisepest, som nedbryder flisernes overflade, gør fliserne grimme og glatte, og forkorter flisernes levetid.",
              "En grundig rens af fliser fjerner det synlige snavs. Den fjerner også belægninger, der sidder i flisernes porer.",
            ],
          },
          {
            heading: "Professionel fliserens med hedt vand",
            paragraphs: [
              "Ved fliserens med hedt vand løsnes alger, flisepest og snavs effektivt – uden unødig brug af hård kemi. Vi følger de anbefalinger, som Miljøstyrelsen har for rensning af overflader.",
              "Det giver en løsning, der holder længere, en mere skånsom rens af fliser, og et flottere og mere ensartet resultat.",
            ],
          },
          {
            heading: "Hvad indeholder en rens af fliser?",
            paragraphs: [
              "Grundig rens med hedt vand. Algebehandling, der fjerner rester i flisernes porer. Imprægnering, når fliserne er tørre. Beskyttelse mod ny algevækst og reduceret vandoptagelse.",
              "På den måde bliver fliserne stærkere og holder sig pæne længere.",
            ],
          },
        ]}
        crossLinks={[
          { title: "Algebehandling", href: "/algebehandling-af-tag", desc: "Forebyggende behandling mod alger og mos på tag og fliser." },
          { title: "Tagrens & Tagmaling", href: "/tagrens", desc: "Professionel rensning og maling af dit tag." },
          { title: "Facaderens", href: "/facaderens", desc: "Skånsom rensning af alle facadetyper." },
          { title: "Træterrasse Rens", href: "/traeterrasse-rens", desc: "Effektiv rens og imprægnering af træterrasser." },
          { title: "Priser", href: "/priser", desc: "Se alle vores priser og få et uforpligtende tilbud." },
        ]}
        showNaboRabat={true}
      />
    </>
  );
}

export function TagrensPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tagrens & Tagmaling",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "url": "https://kaspermh.dk/tagrens/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kan I rense mit eternittag?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi renser eternittag — men IKKE asbest-eternit. Hvis dit hus er bygget før 1988, anbefaler vi at få testet taget for asbest inden rensning." } },
      { "@type": "Question", "name": "Hvor lang tid tager en tagrens?", "acceptedAnswer": { "@type": "Answer", "text": "En typisk tagrens tager 1-2 dage afhængigt af tagets størrelse og tilstand. Vi giver dig et tidsestimat sammen med dit tilbud." } },
      { "@type": "Question", "name": "Kan I male mit tag i en anden farve?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi tilbyder tagmaling i en bred vifte af farver. Malingen beskytter taget og giver det et helt nyt udseende." } },
      { "@type": "Question", "name": "Hvad koster tagrens og tagmaling?", "acceptedAnswer": { "@type": "Answer", "text": "Tagrens starter fra 10.997 kr. inkl. algebehandling. Tagmaling er et tilvalg, og den samlede pris afhænger af tagets størrelse og tilstand. Kontakt os for et præcist tilbud." } },
      { "@type": "Question", "name": "Hvor lang tid tager det?", "acceptedAnswer": { "@type": "Answer", "text": "En komplet tagrens inkl. algebehandling tager typisk 1-2 dage. Tilkøbes tagmaling, skal der beregnes yderligere 1-2 dage afhængigt af tagets størrelse og vejrforhold." } },
      { "@type": "Question", "name": "Hvor ofte bør man få renset sit tag?", "acceptedAnswer": { "@type": "Answer", "text": "Vi anbefaler tagrens hvert 5-10 år afhængigt af tagets placering og omgivelser. Med en serviceaftale og årlig algebehandling kan du forlænge intervallet og holde taget rent længere." } },
      { "@type": "Question", "name": "Kombinerer I med algebehandling?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle vores tagrensninger inkluderer algebehandling med Neutralon som standard. Det forebygger ny alge- og mosvækst og forlænger resultatet markant." } },
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
        title="Tagrens & Tagmaling"
        subtitle="Professionel tagrens i Midtjylland"
        price="Fra 10.997 kr."
        serviceKey="tag"
        heroImage="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/tagrens.webp"
        headingBeforeAfter="Professionel tagrens & tagmaling"
        headingBenefits="Fordele ved professionel tagrens"
        headingProcess="Hvad koster tagrens?"
        headingFaq="Ofte stillede spørgsmål om tagrens"
        headingCta="Klar til at få dit tag renset?"
        beforeAfter={[
          { before: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagrens-foer.webp", after: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagrens-efter.webp", label: "Tagrens — betontagsten" },
        ]}
        warning="Vi renser IKKE asbest-tag. Kontakt en certificeret specialist for asbest-opgaver."
        description={[
          "Et rent tag er ikke bare pænere — det forlænger også tagets levetid markant. Alger, mos og lav kan trænge ned i tagsten og skabe fugt- og frostskader over tid.",
          "Hos Kalles Algerens tilbyder vi komplet tagrens med professionelt udstyr, efterfulgt af algebehandling og mulighed for tagmaling. Vi arbejder med betontagsten, tegltagsten og eternittag (ikke asbest).",
          "Vores tagmaling beskytter taget mod vejr og vind i mange år og giver dit hjem et helt nyt udseende. Vi tilbyder op til 10 års garanti med en serviceaftale.",
        ]}
        benefits={[
          "Forlænger tagets levetid markant",
          "Op til 10 års garanti med serviceaftale",
          "Algebehandling inkluderet",
          "Mulighed for tagmaling i ønsket farve",
          "Vi arbejder med alle tagtyper (undtagen asbest)",
          "Grundig rengøring af tagrender inkluderet",
        ]}
        process={[
          "Inspektion af tag og vurdering af tilstand",
          "Skånsom rensning med professionelt udstyr",
          "Algebehandling med Neutralon (miljøgodkendt)",
          "Evt. tagmaling i ønsket farve (tilvalg)",
          "Afsluttende inspektion og fotodokumentation",
        ]}
        faqs={[
          { q: "Kan I rense mit eternittag?", a: "Ja, vi renser eternittag — men IKKE asbest-eternit. Hvis dit hus er bygget før 1988, anbefaler vi at få testet taget for asbest inden rensning." },
          { q: "Hvor lang tid tager en tagrens?", a: "En typisk tagrens tager 1-2 dage afhængigt af tagets størrelse og tilstand. Vi giver dig et tidsestimat sammen med dit tilbud." },
          { q: "Kan I male mit tag i en anden farve?", a: "Ja! Vi tilbyder tagmaling i en bred vifte af farver. Malingen beskytter taget og giver det et helt nyt udseende." },
          { q: "Hvad koster tagrens og tagmaling?", a: "Tagrens starter fra 10.997 kr. inkl. algebehandling. Tagmaling er et tilvalg, og den samlede pris afhænger af tagets størrelse og tilstand. Kontakt os for et præcist tilbud." },
          { q: "Hvor lang tid tager det?", a: "En komplet tagrens inkl. algebehandling tager typisk 1-2 dage. Tilkøbes tagmaling, skal der beregnes yderligere 1-2 dage afhængigt af tagets størrelse og vejrforhold." },
          { q: "Hvor ofte bør man få renset sit tag?", a: "Vi anbefaler tagrens hvert 5-10 år afhængigt af tagets placering og omgivelser. Med en serviceaftale og årlig algebehandling kan du forlænge intervallet og holde taget rent længere." },
          { q: "Kombinerer I med algebehandling?", a: "Ja, alle vores tagrensninger inkluderer algebehandling med Neutralon som standard. Det forebygger ny alge- og mosvækst og forlænger resultatet markant." },
        ]}
        seoContent={[
          {
            heading: "Trin 1: Professionel tagrens",
            paragraphs: [
              "Jeg udfører professionel tagrens, hvor mos, alger og snavs fjernes grundigt og skånsomt. Rensningen sker med mekanisk metode og kontrolleret højtryk, så taget bliver helt rent uden at tage skade.",
              "Efterfølgende algebehandler jeg taget, så det er optimalt beskyttet og klar til en holdbar tagmaling.",
            ],
          },
          {
            heading: "Trin 2: Gennemgang og reparation",
            paragraphs: [
              "Når jeg har renset taget, gennemgår jeg det grundigt for revner, løse eller porøse tagplader. Mindre reparationer og nødvendigt fugearbejde udføres, så taget er i korrekt stand inden maling.",
            ],
          },
          {
            heading: "Trin 3: Tagmaling med dansk kvalitet",
            paragraphs: [
              "Jeg påfører to lag dansk kvalitets tagmaling, som er diffusionsåben og beskytter taget mod vind, regn og solens UV-stråler.",
            ],
          },
          {
            heading: "Trin 4: Kvalitetskontrol og garanti",
            paragraphs: [
              "Når arbejdet er færdigt, gennemgår jeg taget for at sikre, at alt lever op til mine kvalitetskrav. Du får samtidig rådgivning om vedligeholdelse.",
              "Der kan tilbydes op til 10 års afskalningsgaranti ved tilkøb af årlig algebehandling.",
            ],
          },
        ]}
        crossLinks={[
          { title: "Algebehandling", href: "/algebehandling-af-tag", desc: "Forebyggende behandling mod alger og mos på tag og fliser." },
          { title: "Fliserens", href: "/fliserens", desc: "Professionel rensning af fliser med hedt vand." },
          { title: "Facaderens", href: "/facaderens", desc: "Skånsom rensning af alle facadetyper." },
          { title: "Træterrasse Rens", href: "/traeterrasse-rens", desc: "Effektiv rens og imprægnering af træterrasser." },
          { title: "Priser", href: "/priser", desc: "Se alle vores priser og få et uforpligtende tilbud." },
        ]}
        showNaboRabat={true}
      />
    </>
  );
}

export function FacaderensPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facaderens",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "url": "https://kaspermh.dk/facaderens/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvilke facadetyper kan I rense?", "acceptedAnswer": { "@type": "Answer", "text": "Vi renser alle typer facader. Det gælder mursten, puds, træ og beton. Vi tilpasser altid metoden til facadens materiale, så du får det bedste resultat uden risiko for skader." } },
      { "@type": "Question", "name": "Hvor lang tid tager en facaderens?", "acceptedAnswer": { "@type": "Answer", "text": "Tiden afhænger af facadens størrelse og tilstand. En typisk facaderens tager mellem 2-6 timer. Vi giver dig altid et tidsestimat sammen med dit tilbud." } },
      { "@type": "Question", "name": "Hvor ofte bør man rense sin facade?", "acceptedAnswer": { "@type": "Answer", "text": "Vi anbefaler en facaderens hvert 3.-5. år, afhængigt af facadens placering og omgivelser. Med en serviceaftale og årlig algebehandling kan du holde facaden ren længere." } },
      { "@type": "Question", "name": "Er facaderens skadeligt for miljøet?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, vi bruger kun miljøvenlige rensemidler, der er godkendt af Miljøstyrelsen. Vores metode er skånsom mod både facaden og naturen." } },
      { "@type": "Question", "name": "Hvad koster det at få renset facaden?", "acceptedAnswer": { "@type": "Answer", "text": "Prisen varierer efter facadens størrelse og tilstand. Facaderens starter fra 2.997 kr. Kontakt os for et gratis og uforpligtende tilbud." } },
      { "@type": "Question", "name": "Kan I også fjerne graffiti fra facaden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi tilbyder også graffitijernelse som en del af vores facaderens-service. Vi bruger specialprodukter, der fjerner graffitien uden at skade facaden." } },
      { "@type": "Question", "name": "Tilbyder I facaderens i hele Midtjylland?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi dækker hele Midtjylland med base i Herning. Vi kører også gerne længere ud for større opgaver. Kontakt os for at høre mere." } },
      { "@type": "Question", "name": "Skal jeg være hjemme under facaderensen?", "acceptedAnswer": { "@type": "Answer", "text": "Det er ikke nødvendigt at være hjemme under facaderensen, så længe vi har adgang til facaden og en vandslange. Vi aftaler altid detaljerne på forhånd." } },
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
        title="Facaderens"
        subtitle="Professionel facaderens i Midtjylland"
        price="Fra 2.997 kr."
        serviceKey="facade"
        heroImage="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/facaderens.webp"
        headingBenefits="Fordele ved professionel facaderens"
        headingProcess="Sådan foregår en facaderens"
        headingFaq="Ofte stillede spørgsmål om facaderens"
        headingCta="Klar til at få din facade renset?"
        extraImages={[
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/facaderens-ba.webp", alt: "Facaderens før og efter" },
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/facaderens-kaspermh.webp", alt: "Professionel facaderens" },
        ]}
        description={[
          "En ren facade giver dit hjem et markant løft og beskytter murværket mod nedbrydning. Alger, mos og snavs binder fugt, som over tid kan skade mursten, puds og fuger.",
          "Vi tilpasser altid vores metode til facadens materiale — om det er mursten, puds, beton eller træ. Varmt vand og skånsomt tryk sikrer effektiv rensning uden at beskadige overfladen.",
          "Alle vores produkter er miljøgodkendte, og vi afslutter med algebehandling for langvarig beskyttelse mod ny algevækst.",
        ]}
        benefits={[
          "Tilpasset metode til hvert facademateriale",
          "Mursten, puds, beton og træ",
          "Miljøgodkendte produkter fra Miljøstyrelsen",
          "Algebehandling for langvarig beskyttelse",
          "Forøger husets værdi og udseende",
          "Nabo-rabat tilgængelig",
        ]}
        process={[
          "Vurdering af facadens materiale og tilstand",
          "Valg af rensemetode tilpasset materialet",
          "Grundig rensning med varmt vand og miljøgodkendt middel",
          "Algebehandling påføres som afslutning",
          "Gennemgang af resultatet med dig",
        ]}
        faqs={[
          { q: "Hvilke facadetyper kan I rense?", a: "Vi renser alle typer facader. Det gælder mursten, puds, træ og beton. Vi tilpasser altid metoden til facadens materiale, så du får det bedste resultat uden risiko for skader." },
          { q: "Hvor lang tid tager en facaderens?", a: "Tiden afhænger af facadens størrelse og tilstand. En typisk facaderens tager mellem 2-6 timer. Vi giver dig altid et tidsestimat sammen med dit tilbud." },
          { q: "Hvor ofte bør man rense sin facade?", a: "Vi anbefaler en facaderens hvert 3.-5. år, afhængigt af facadens placering og omgivelser. Med en serviceaftale og årlig algebehandling kan du holde facaden ren længere." },
          { q: "Er facaderens skadeligt for miljøet?", a: "Nej, vi bruger kun miljøvenlige rensemidler, der er godkendt af Miljøstyrelsen. Vores metode er skånsom mod både facaden og naturen." },
          { q: "Hvad koster det at få renset facaden?", a: "Prisen varierer efter facadens størrelse og tilstand. Facaderens starter fra 2.997 kr. Kontakt os for et gratis og uforpligtende tilbud." },
          { q: "Kan I også fjerne graffiti fra facaden?", a: "Ja, vi tilbyder også graffitijernelse som en del af vores facaderens-service. Vi bruger specialprodukter, der fjerner graffitien uden at skade facaden." },
          { q: "Tilbyder I facaderens i hele Midtjylland?", a: "Ja, vi dækker hele Midtjylland med base i Herning. Vi kører også gerne længere ud for større opgaver. Kontakt os for at høre mere." },
          { q: "Skal jeg være hjemme under facaderensen?", a: "Det er ikke nødvendigt at være hjemme under facaderensen, så længe vi har adgang til facaden og en vandslange. Vi aftaler altid detaljerne på forhånd." },
        ]}
        seoContent={[
          {
            heading: "Hvad indebærer facaderens?",
            paragraphs: [
              "Det er en skånsom metode til at fjerne alger og snavs fra facaden. Helt konkret bruger jeg gode produkter, der passer til din facades type. På den måde bliver facaden ren uden at tage skade.",
              "Derudover bruger jeg kun miljøvenlige midler. Ifølge Miljøstyrelsen bør man altid vælge milde metoder for at passe på naturen.",
            ],
          },
          {
            heading: "Sådan udfører jeg facaderens",
            paragraphs: [
              "Jeg tilpasser altid mit arbejde til din facades type. Her er de fire trin:",
              "1. Jeg gennemgår og vurderer facaden. 2. Facaden forbehandles mod alger og belægninger. 3. Jeg udfører en skånsom rens med professionelt udstyr. 4. Der er mulighed for efterbehandling, som hæmmer ny algevækst.",
            ],
          },
        ]}
        crossLinks={[
          { title: "Fliserens", href: "/fliserens", desc: "Professionel rensning af fliser med hedt vand." },
          { title: "Algebehandling", href: "/algebehandling-af-tag", desc: "Forebyggende behandling mod alger og mos." },
          { title: "Tagrens & Tagmaling", href: "/tagrens", desc: "Professionel rensning og maling af dit tag." },
          { title: "Træterrasse Rens", href: "/traeterrasse-rens", desc: "Effektiv rens og imprægnering af træterrasser." },
          { title: "Priser", href: "/priser", desc: "Se alle vores priser og få et uforpligtende tilbud." },
        ]}
        showNaboRabat={true}
      />
    </>
  );
}

export function TerrassePageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Træterrasse Rens",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "url": "https://kaspermh.dk/traeterrasse-rens/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Skader I træet med højtryksrenser?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, vi bruger lavere tryk til træterrasser end til f.eks. fliser. Varmt vand gør det muligt at rense effektivt med mindre tryk, så træets fibre ikke skades." } },
      { "@type": "Question", "name": "Hvad koster imprægnering?", "acceptedAnswer": { "@type": "Answer", "text": "Imprægnering koster fra 10 kr./m² og anbefales som tilvalg for at beskytte træet mod fugt, alger og UV-stråler." } },
      { "@type": "Question", "name": "Hvor ofte bør man rense sin træterrasse?", "acceptedAnswer": { "@type": "Answer", "text": "Vi anbefaler rensning af træterrassen én gang om året, typisk om foråret. Med en serviceaftale og årlig algebehandling holder terrassen sig flot hele året." } },
      { "@type": "Question", "name": "Kan højtryksrenser skade min træterrasse?", "acceptedAnswer": { "@type": "Answer", "text": "Traditionel kold højtryksrensning med for højt tryk kan skade træets fibre. Vores metode med varmt vand og lavere tryk er langt mere skånsom og giver et bedre resultat uden at skade træet." } },
      { "@type": "Question", "name": "Bør man imprægnere træterrassen efter rens?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi anbefaler imprægnering efter rensning. Det beskytter træet mod fugt, alger og UV-stråler og forlænger terrassens levetid markant. Imprægnering koster fra 10 kr./m²." } },
      { "@type": "Question", "name": "Kan I også rense komposit-terrasser?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi renser også komposit-terrasser. Vi tilpasser tryk og temperatur til materialet for at sikre et optimalt resultat uden at beskadige overfladen." } },
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
        title="Træterrasse Rens"
        subtitle="Professionel terrasse-rens i Midtjylland"
        price="Fra 40 kr./m² (min. 2.497 kr.)"
        serviceKey="terrasse"
        heroImage="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/terrasse.webp"
        headingBeforeAfter="Skånsom og effektiv træterrasse rens"
        headingBenefits="Fordele ved professionel terrasse-rens"
        headingProcess="Hvad koster rens af træterrasse?"
        headingFaq="Ofte stillede spørgsmål om terrasse-rens"
        headingCta="Klar til at få din terrasse renset?"
        extraImages={[
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/terrasse-foer.webp", alt: "Terrasse rens — halvvejs resultat" },
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/terrasse-kaspermh-1.webp", alt: "Træterrasse før rens" },
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/terrasse-kaspermh-2.webp", alt: "Terrasse rens — halvvejs" },
        ]}
        description={[
          "Din træterrasse er udsat for vejr, vind, alger og snavs året rundt. Med professionel rensning fjerner vi det hele og giver dit træ nyt liv — skånsomt og effektivt.",
          "Vi bruger lavere tryk end ved fliserens for at beskytte træets fibre. Varmt vand og miljøgodkendte produkter sikrer en grundig rens uden at skade terrassens overflade.",
          "Som tilvalg tilbyder vi imprægnering, der beskytter træet mod fugt, alger og UV-stråler. Det forlænger terrassens levetid markant og holder den flot i mange år.",
        ]}
        benefits={[
          "Skånsom rensning tilpasset træets fibre",
          "Lavere tryk end traditionel højtryksrensning",
          "Imprægnering som tilvalg (fra 10 kr./m²)",
          "Beskytter mod fugt, alger og UV",
          "Forlænger terrassens levetid",
          "Miljøgodkendte produkter",
        ]}
        process={[
          "Inspektion af terrassens trætype og tilstand",
          "Skånsom rensning med lavt tryk og varmt vand",
          "Miljøgodkendt algebehandling påføres",
          "Evt. imprægnering (tilvalg)",
          "Gennemgang af resultatet",
        ]}
        faqs={[
          { q: "Skader I træet med højtryksrenser?", a: "Nej, vi bruger lavere tryk til træterrasser end til f.eks. fliser. Varmt vand gør det muligt at rense effektivt med mindre tryk, så træets fibre ikke skades." },
          { q: "Hvad koster imprægnering?", a: "Imprægnering koster fra 10 kr./m² og anbefales som tilvalg for at beskytte træet mod fugt, alger og UV-stråler." },
          { q: "Hvor ofte bør man rense sin træterrasse?", a: "Vi anbefaler rensning af træterrassen én gang om året, typisk om foråret. Med en serviceaftale og årlig algebehandling holder terrassen sig flot hele året." },
          { q: "Kan højtryksrenser skade min træterrasse?", a: "Traditionel kold højtryksrensning med for højt tryk kan skade træets fibre. Vores metode med varmt vand og lavere tryk er langt mere skånsom og giver et bedre resultat uden at skade træet." },
          { q: "Bør man imprægnere træterrassen efter rens?", a: "Ja, vi anbefaler imprægnering efter rensning. Det beskytter træet mod fugt, alger og UV-stråler og forlænger terrassens levetid markant. Imprægnering koster fra 10 kr./m²." },
          { q: "Kan I også rense komposit-terrasser?", a: "Ja, vi renser også komposit-terrasser. Vi tilpasser tryk og temperatur til materialet for at sikre et optimalt resultat uden at beskadige overfladen." },
        ]}
        seoContent={[
          {
            heading: "Skånsom og effektiv rens af træterrassen",
            paragraphs: [
              "Jeg tilbyder professionel rensning af træterrasse, hvor alger, snavs, og andre belægninger fjernes grundigt. Rensningen udføres med tilpasset tryk og hed vand, så træets overflade renses effektivt uden at tage skade.",
            ],
          },
          {
            heading: "Imprægnering af træterrasse",
            paragraphs: [
              "Efter rens tilbyder jeg imprægnering af træterrassen, som gør det sværere for vand at trænge ned i træet. Behandlingen reducerer fugtoptag, mindsker algevækst og forlænger træterrassens levetid.",
            ],
          },
          {
            heading: "Serviceaftale med årlig algebehandling",
            paragraphs: [
              "Jeg tilbyder en serviceaftale, hvor jeg én gang om året kommer og giver din træterrasse en professionel algebehandling. Med en fast serviceaftale slipper du for besværet og sikrer, at din træterrasse forbliver flot og velholdt år efter år.",
            ],
          },
        ]}
        crossLinks={[
          { title: "Fliserens", href: "/fliserens", desc: "Professionel rensning af fliser med hedt vand." },
          { title: "Algebehandling", href: "/algebehandling-af-tag", desc: "Forebyggende behandling mod alger og mos." },
          { title: "Tagrens & Tagmaling", href: "/tagrens", desc: "Professionel rensning og maling af dit tag." },
          { title: "Facaderens", href: "/facaderens", desc: "Skånsom rensning af alle facadetyper." },
          { title: "Priser", href: "/priser", desc: "Se alle vores priser og få et uforpligtende tilbud." },
        ]}
        showNaboRabat={true}
      />
    </>
  );
}

export function AlgebehandlingPageContent() {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Algebehandling af Tag",
    "provider": { "@id": "https://kaspermh.dk/#localbusiness" },
    "url": "https://kaspermh.dk/algebehandling-af-tag/",
  }), []);
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvornår ser jeg resultat?", "acceptedAnswer": { "@type": "Answer", "text": "Neutralon virker over tid. Du vil typisk se resultater efter 3-6 måneder, hvor alger og mos gradvist forsvinder. For hurtigere resultat kan vi kombinere med rensning." } },
      { "@type": "Question", "name": "Er Neutralon sikkert for miljøet?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Neutralon er miljøgodkendt af Miljøstyrelsen og er skånsomt mod både naturen, dyr og planter i din have." } },
      { "@type": "Question", "name": "Hvad koster det for arealer over 200 m²?", "acceptedAnswer": { "@type": "Answer", "text": "For arealer over 200 m² tillægges 5 kr./m² udover de første 200 m². Brug vores prisberegner for et præcist tilbud." } },
      { "@type": "Question", "name": "Hvad er algebehandling af tag?", "acceptedAnswer": { "@type": "Answer", "text": "Algebehandling er en forebyggende behandling med Neutralon, der langsomt fjerner og forebygger alger, mos og lav på dit tag. Produktet er miljøgodkendt af Miljøstyrelsen og virker over 3-6 måneder." } },
      { "@type": "Question", "name": "Hvor lang tid holder en algebehandling?", "acceptedAnswer": { "@type": "Answer", "text": "En algebehandling holder typisk 1-3 år afhængigt af tagets placering og omgivelser. Med en serviceaftale og årlig behandling er du altid beskyttet — og din garanti forlænges op til 10 år." } },
      { "@type": "Question", "name": "Er algebehandling skadeligt for naturen?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, vi bruger udelukkende Neutralon, som er miljøgodkendt af Miljøstyrelsen. Produktet er skånsomt mod mennesker, dyr, planter og grundvand." } },
      { "@type": "Question", "name": "Kan man selv lave algebehandling?", "acceptedAnswer": { "@type": "Answer", "text": "Det er muligt at købe algebehandlingsprodukter selv, men professionel påføring sikrer jævn dækning og korrekt dosering. Desuden er arbejde på tage forbundet med risiko — vi har det rette udstyr og sikkerhed." } },
      { "@type": "Question", "name": "Hvad er den bedste tid for algebehandling?", "acceptedAnswer": { "@type": "Answer", "text": "Algebehandling af tag kan udføres året rundt, men den mest effektive periode er typisk forår eller efterår, hvor temperaturen er mild og der er mindre nedbør. Det giver produktet de bedste betingelser for at virke optimalt." } },
      { "@type": "Question", "name": "Hvilke produkter bruger I?", "acceptedAnswer": { "@type": "Answer", "text": "Hos Kalles Algerens bruger vi udelukkende miljøvenlige og biologisk nedbrydelige produkter. Vores primære produkt er Neutralon, som er godkendt af Miljøstyrelsen og er skånsomt mod både mennesker, dyr og natur." } },
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
        title="Algebehandling af Tag"
        subtitle="Miljøgodkendt algebehandling i Midtjylland"
        price="995 kr. (op til 200 m²)"
        serviceKey="alge"
        heroImage="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/algerens.webp"
        headingBeforeAfter="Algebehandling af tag & fliser"
        headingBenefits="Fordele ved algebehandling"
        headingProcess="Pris på algebehandling af tag"
        headingFaq="Ofte stillede spørgsmål om algebehandling af tag"
        headingCta="Klar til algebehandling?"
        extraImages={[
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/alge-kaspermh-1.webp", alt: "Tag med alger og mos — før algebehandling" },
          { src: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/alge-kaspermh-2.webp", alt: "Professionel algebehandling" },
        ]}
        description={[
          "Algebehandling er den mest effektive forebyggende behandling mod alger, mos og lav på dit tag, dine fliser eller din facade. Vi bruger Neutralon — et miljøgodkendt produkt godkendt af Miljøstyrelsen.",
          "Neutralon arbejder over tid og fjerner langsomt alger og mos uden at skade overfladen. Resultatet ses typisk efter 3-6 måneder, hvor grønne belægninger gradvist forsvinder.",
          "Vores faste pris på 995 kr. dækker op til 200 m². For større arealer tillægges 5 kr./m². Algebehandling kan bruges som selvstændig service eller som supplement til vores rensning.",
        ]}
        benefits={[
          "Fast pris 995 kr. op til 200 m²",
          "Neutralon — miljøgodkendt af Miljøstyrelsen",
          "Virker over tid uden at skade overfladen",
          "Forebygger ny alge- og mosvækst",
          "Kan bruges på tag, fliser, facade og terrasse",
          "Kombineres med rensning for bedste resultat",
        ]}
        process={[
          "Arealet opmåles og inspiceres",
          "Neutralon algebehandling påføres jævnt",
          "Produktet virker over 3-6 måneder",
          "Alger og mos forsvinder gradvist",
          "Kan gentages årligt for vedvarende beskyttelse",
        ]}
        faqs={[
          { q: "Hvornår ser jeg resultat?", a: "Neutralon virker over tid. Du vil typisk se resultater efter 3-6 måneder, hvor alger og mos gradvist forsvinder. For hurtigere resultat kan vi kombinere med rensning." },
          { q: "Er Neutralon sikkert for miljøet?", a: "Ja, Neutralon er miljøgodkendt af Miljøstyrelsen og er skånsomt mod både naturen, dyr og planter i din have." },
          { q: "Hvad koster det for arealer over 200 m²?", a: "For arealer over 200 m² tillægges 5 kr./m² udover de første 200 m². Brug vores prisberegner for et præcist tilbud." },
          { q: "Hvad er algebehandling af tag?", a: "Algebehandling er en forebyggende behandling med Neutralon, der langsomt fjerner og forebygger alger, mos og lav på dit tag. Produktet er miljøgodkendt af Miljøstyrelsen og virker over 3-6 måneder." },
          { q: "Hvor lang tid holder en algebehandling?", a: "En algebehandling holder typisk 1-3 år afhængigt af tagets placering og omgivelser. Med en serviceaftale og årlig behandling er du altid beskyttet — og din garanti forlænges op til 10 år." },
          { q: "Er algebehandling skadeligt for naturen?", a: "Nej, vi bruger udelukkende Neutralon, som er miljøgodkendt af Miljøstyrelsen. Produktet er skånsomt mod mennesker, dyr, planter og grundvand." },
          { q: "Kan man selv lave algebehandling?", a: "Det er muligt at købe algebehandlingsprodukter selv, men professionel påføring sikrer jævn dækning og korrekt dosering. Desuden er arbejde på tage forbundet med risiko — vi har det rette udstyr og sikkerhed." },
          { q: "Hvad er den bedste tid for algebehandling?", a: "Algebehandling af tag kan udføres året rundt, men den mest effektive periode er typisk forår eller efterår, hvor temperaturen er mild og der er mindre nedbør. Det giver produktet de bedste betingelser for at virke optimalt." },
          { q: "Hvilke produkter bruger I?", a: "Hos Kalles Algerens bruger vi udelukkende miljøvenlige og biologisk nedbrydelige produkter. Vores primære produkt er Neutralon, som er godkendt af Miljøstyrelsen og er skånsomt mod både mennesker, dyr og natur." },
        ]}
        seoContent={[
          {
            heading: "Algebehandling af tag",
            paragraphs: [
              "Med tiden kan alger, mos og lav sætte sig på taget. Det holder på fugt og øger risikoen for skader. Jeg tilbyder professionel algebehandling af tag. Det forebygger problemer og bevarer tagets udseende og styrke.",
            ],
          },
          {
            heading: "Miljøvenlig algebehandling",
            paragraphs: [
              "Jeg anvender en miljøvenlig algemiddel, der hedder Neutrulan, som er dansk godkendt af Miljøstyrelsen. Det betyder, at behandlingen er effektiv mod alger, mos og lav. Vi tager også hensyn til miljøet.",
            ],
          },
          {
            heading: "Vigtigheden af algebehandling",
            paragraphs: [
              "Algebehandling af tag er en vigtig del af vedligeholdelsen af din bolig. Helt konkret fjerner vi alger, mos og lav fra tagoverfladen. Derefter påfører vi et miljøvenligt middel, der beskytter mod ny vækst.",
              "Derfor holder dit tag sig rent i lang tid efter behandlingen. Desuden kan en ren tagflade øge din boligs værdi. Vi anbefaler algebehandling af tag hvert tredje til femte år. På den måde undgår du dyre reparationer på sigt.",
            ],
          },
        ]}
        crossLinks={[
          { title: "Fliserens", href: "/fliserens", desc: "Professionel rensning af fliser med hedt vand." },
          { title: "Tagrens & Tagmaling", href: "/tagrens", desc: "Professionel rensning og maling af dit tag." },
          { title: "Facaderens", href: "/facaderens", desc: "Skånsom rensning af alle facadetyper." },
          { title: "Træterrasse Rens", href: "/traeterrasse-rens", desc: "Effektiv rens og imprægnering af træterrasser." },
          { title: "Priser", href: "/priser", desc: "Se alle vores priser og få et uforpligtende tilbud." },
        ]}
        showNaboRabat={true}
      />
    </>
  );
}
