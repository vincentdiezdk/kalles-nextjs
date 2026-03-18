"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, ArrowRight, CheckCircle, Shield, Leaf, Calendar } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import BreadcrumbNav from "@/components/breadcrumb-nav";

const faqs = [
  {
    q: "Hvad indeholder en serviceaftale?",
    a: "En serviceaftale inkluderer årlig algebehandling med Neutralon på dine udendørs overflader. Vi holder øje med tilstanden og sikrer, at din investering forbliver beskyttet år efter år. Med en serviceaftale forlænges din garanti op til 10 år.",
  },
  {
    q: "Hvornår skal algebehandlingen fornyes?",
    a: "Vi anbefaler årlig algebehandling for optimal beskyttelse. Vi kontakter dig automatisk, når det er tid til din næste behandling, så du ikke behøver at huske det selv.",
  },
  {
    q: "Kan jeg opgradere fra Basic til Premium?",
    a: "Ja, du kan til enhver tid opgradere din serviceaftale fra Basic til Premium. Du betaler blot differencen for den resterende periode.",
  },
  {
    q: "Hvad er Neutralon?",
    a: "Neutralon er et miljøgodkendt algebehandlingsprodukt godkendt af Miljøstyrelsen. Det arbejder over 3-6 måneder og fjerner langsomt alger, mos og lav uden at skade overfladen eller det omgivende miljø.",
  },
  {
    q: "Gælder serviceaftalen for alle overfladetyper?",
    a: "Ja, vores serviceaftaler dækker tag, fliser, facade og terrasse. Prisen er den samme uanset overfladetype.",
  },
  {
    q: "Hvad sker der, hvis jeg opsiger min serviceaftale?",
    a: "Du kan opsige din serviceaftale med 30 dages varsel. Bemærk, at garantiforlængelsen bortfalder ved opsigelse — din garanti vender tilbage til standardperioden.",
  },
];

export default function ServiceaftalerPageContent() {
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
            <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Serviceaftaler" }]} />
            <p className="text-primary font-semibold text-sm mb-2">
              Årlig algebehandling med op til 10 års garanti
            </p>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Serviceaftaler — Vedligehold din investering
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Med en serviceaftale hos Kalles Algerens sikrer du, at dine udendørs overflader
              forbliver rene og beskyttede år efter år. Vi tager os af det hele — du skal bare nyde resultatet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="font-sans font-bold gap-2"
                onClick={scrollToCalculator}
                data-testid="serviceaftale-cta-beregn"
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

      {/* Hvad indeholder en serviceaftale */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Hvad indeholder en serviceaftale?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            En serviceaftale er din sikkerhed for, at dine nyligt rensede overflader forbliver i
            topstand. Vi kommer forbi én gang om året og påfører en professionel algebehandling
            med Neutralon, som forebygger ny alge- og mosvækst.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Med en aktiv serviceaftale forlænges din garanti løbende — op til hele 10 år. Det
            betyder, at du kan være tryg ved, at din investering er beskyttet langt ud i fremtiden.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vi overvåger tilstanden på dine overflader og kontakter dig automatisk, når det er tid
            til næste behandling. Du behøver ikke bekymre dig om noget — vi tager os af det hele.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-8 text-center">
            Fordele ved en serviceaftale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-foreground mb-2">Op til 10 års garanti</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Din garanti forlænges hvert år, så længe du har en aktiv serviceaftale. Op til 10 års total beskyttelse.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-foreground mb-2">Årlig behandling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vi kommer automatisk forbi én gang om året og sikrer, at dine overflader forbliver fri for alger og mos.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-foreground mb-2">Miljøgodkendt</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vi bruger udelukkende Neutralon — miljøgodkendt af Miljøstyrelsen og sikkert for dyr, planter og grundvand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Om Neutralon */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Om Neutralon
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Neutralon er det førende algebehandlingsprodukt i Danmark og er fuldt miljøgodkendt
            af Miljøstyrelsen. Produktet er skånsomt mod både mennesker, dyr, planter og grundvand,
            mens det effektivt bekæmper alger, mos og lav.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Neutralon arbejder over tid — typisk 3-6 måneder — hvor det langsomt og grundigt fjerner
            grønne belægninger fra overfladen. Til forskel fra traditionel højtryksrensning alene,
            forebygger Neutralon aktivt ny vækst og forlænger dermed resultatet markant.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Kombinationen af professionel rensning og årlig Neutralon-behandling er den mest
            effektive metode til at holde dine udendørs overflader fri for alger i mange år.
          </p>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-8 text-center">
            Før & efter — serviceaftale
          </h2>
          <div className="max-w-xl mx-auto">
            <BeforeAfterSlider
              before="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/serviceaftale-foer.webp"
              after="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/serviceaftale-efter.webp"
              label="Resultat af årlig algebehandling med serviceaftale"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-8 text-center">
            Vælg din serviceaftale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Basic */}
            <div className="bg-card border border-border rounded-xl p-8" data-testid="pricing-basic">
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">Basic</h3>
              <p className="text-3xl font-extrabold text-primary mb-1">995 kr.<span className="text-base font-normal text-muted-foreground">/år</span></p>
              <p className="text-sm text-muted-foreground mb-6">Årlig algebehandling</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Årlig Neutralon algebehandling",
                  "Forebygger alger, mos og lav",
                  "Garantiforlængelse op til 10 år",
                  "Automatisk booking — vi kontakter dig",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+4525131797">
                <Button variant="outline" className="w-full font-bold gap-2">
                  <Phone className="h-4 w-4" />
                  Kontakt os
                </Button>
              </a>
            </div>

            {/* Premium */}
            <div className="bg-card border-2 border-primary rounded-xl p-8 relative" data-testid="pricing-premium">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Mest populær
              </div>
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">Premium</h3>
              <p className="text-3xl font-extrabold text-primary mb-1">1.495 kr.<span className="text-base font-normal text-muted-foreground">/år</span></p>
              <p className="text-sm text-muted-foreground mb-6">Behandling + inspektion + prioritet</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Årlig Neutralon algebehandling",
                  "Årlig inspektion af alle overflader",
                  "Prioriteret service — hurtigere responstid",
                  "Garantiforlængelse op til 10 år",
                  "Automatisk booking — vi kontakter dig",
                  "Rabat på ekstra renseopgaver",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+4525131797">
                <Button className="w-full font-bold gap-2">
                  <Phone className="h-4 w-4" />
                  Kontakt os
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Spørgsmål om serviceaftaler
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`safaq-${i}`}
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

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
            Beskyt din investering med en serviceaftale
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Ring til os og hør mere om vores serviceaftaler — eller beregn din rensepris først.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-sans font-bold text-base"
              onClick={scrollToCalculator}
              data-testid="serviceaftale-cta-bottom"
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
