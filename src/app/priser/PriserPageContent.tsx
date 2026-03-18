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
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

const priceData = [
  { service: "Fliserens", price: "Fra 35 kr./m²", min: "Min. 1.500 kr.", note: "Inkl. algebehandling", href: "/fliserens", popular: true },
  { service: "Tagrens & Tagmaling", price: "Fra 10.997 kr.", min: "", note: "Inkl. algebehandling + tagrender", href: "/tagrens", popular: false },
  { service: "Facaderens", price: "Fra 2.997 kr.", min: "", note: "Tilpasset facademateriale", href: "/facaderens", popular: false },
  { service: "Træterrasse Rens", price: "Fra 40 kr./m²", min: "Min. 2.497 kr.", note: "Imprægnering fra 10 kr./m² (tilvalg)", href: "/traeterrasse-rens", popular: false },
  { service: "Algebehandling", price: "995 kr.", min: "Op til 200 m²", note: "Derefter 5 kr./m²", href: "/algebehandling-af-tag", popular: false },
  { service: "Imprægnering (tilvalg)", price: "Fra 10 kr./m²", min: "", note: "Tilkøb til flise-/terrasse-rens", href: "", popular: false },
];

const priserFaqs = [
  { q: "Hvad koster fliserens pr. m²?", a: "Fliserens starter fra 35 kr. pr. m² for arealer over 50 m². Prisen inkluderer grundig rensning med varmt vand og algebehandling som afslutning. Imprægnering kan tilkøbes fra 10 kr./m² for ekstra beskyttelse mod fugt og alger. For mindre arealer gælder en minimumspris på 1.500 kr." },
  { q: "Er der en minimumspris?", a: "Ja, der er en minimumspris på 1.500 kr. for fliserens og 2.497 kr. for træterrasse rens. Minimumsprisen sikrer, at arbejdet udføres professionelt og med korrekt behandling — uanset arealets størrelse. Ved større arealer beregnes prisen per kvadratmeter." },
  { q: "Hvad koster algebehandling af tag?", a: "Algebehandling af tag koster 995 kr. for arealer op til 200 m². For større tage tillægges 5 kr./m² for det overskydende areal. Behandlingen inkluderer miljøgodkendt Neutralon." },
  { q: "Hvad påvirker prisen på tagrens?", a: "Prisen på tagrens afhænger af tagets størrelse, hældning, tilstand og tagtype. En komplet tagrens med maling starter fra 10.997 kr. og inkluderer algebehandling samt rensning af tagrender." },
  { q: "Får jeg garanti på arbejdet?", a: "Ja, vi tilbyder op til 10 års afskalningsgaranti ved tilkøb af en serviceaftale med årlig algebehandling. Serviceaftalen inkluderer en årlig algebehandling, der holder dine overflader rene og beskyttede. Uden serviceaftale giver vi 2 års garanti på vores arbejde." },
  { q: "Kan jeg spare penge med nabo-rabat?", a: "Ja! Når du og din nabo bestiller sammen, sparer I begge penge. Vi sparer transport- og opsætningstid, og den besparelse giver vi direkte videre til jer som rabat. Jo flere naboer der deltager, jo større bliver besparelsen for alle." },
];

export default function PriserPageContent() {
  const router = useRouter();

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": priserFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  }), []);

  const scrollToCalculator = () => {
    router.push("/");
    setTimeout(() => {
      document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="pt-20" data-testid="priser-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Priser" }]} />
          <div className="text-center mb-12">
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-3">
              Priser på fliserens, tagrens og algebehandling
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Alle priser er vejledende. Brug vores prisberegner for et tilbud tilpasset dit areal og tilstand.
            </p>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Ingen skjulte gebyrer</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Gratis tilbud</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-primary" /> 500+ tilfredse kunder</span>
          </div>

          {/* Price Table */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="price-table">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4">Service</th>
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4">Pris</th>
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4 hidden sm:table-cell">Minimum</th>
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4 hidden md:table-cell">Note</th>
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4 hidden lg:table-cell"></th>
                  </tr>
                </thead>
                <tbody>
                  {priceData.map((row, i) => (
                    <tr key={i} className={`border-t border-border ${row.popular ? 'bg-primary/[0.03]' : ''}`}>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {row.href ? (
                          <Link href={row.href} className="hover:text-primary transition-colors">
                            {row.service}
                            {row.popular && <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Populær</span>}
                          </Link>
                        ) : row.service}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">{row.price}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">{row.min || "—"}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">{row.note}</td>
                      <td className="px-6 py-4 text-sm hidden lg:table-cell">
                        {row.href && (
                          <Link href={row.href} className="text-primary text-xs font-medium hover:underline">
                            Læs mere →
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Intro Text */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hos Kalles Algerens får du gennemsigtige priser på professionel rens og algebehandling i hele Danmark. Fliserens starter fra kun 35 kr. pr. m². Her kan du se mine vejledende priser på{" "}
                <Link href="/fliserens" className="text-primary hover:underline font-medium">fliserens</Link>,{" "}
                <Link href="/tagrens" className="text-primary hover:underline font-medium">tagrens</Link>,{" "}
                <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens</Link> og{" "}
                <Link href="/traeterrasse-rens" className="text-primary hover:underline font-medium">træterrasse rens</Link>.
              </p>
              <p>
                Jeg tror på ærlig prissætning. Derfor får du klare fra-priser, så du ved, hvad du kan forvente, inden du bestiller. Den endelige pris afhænger altid af arealets størrelse, tilstand og adgangsforhold — men du vil aldrig opleve skjulte gebyrer hos os.
              </p>
            </div>
          </div>

          {/* Detailed Pricing Descriptions */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-sans font-bold text-xl text-foreground mb-6">Priser på vores services</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-base text-foreground mb-1">
                  <Link href="/fliserens" className="hover:text-primary transition-colors">Fliserens</Link>
                </h3>
                <p>Fliserens starter fra 35 kr. pr. m² for arealer over 50 m². Minimumspris er 1.500 kr. Prisen inkluderer grundig rensning med varmt vand samt algebehandling som afslutning. Imprægnering kan tilkøbes fra 10 kr./m² for ekstra beskyttelse.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-foreground mb-1">
                  <Link href="/tagrens" className="hover:text-primary transition-colors">Tagrens & Tagmaling</Link>
                </h3>
                <p>En komplet tagrens med maling starter fra 10.997 kr. Prisen inkluderer mekanisk rensning, algebehandling, rensning af tagrender samt to lag kvalitets tagmaling. Prisen afhænger af tagets størrelse, hældning og tilstand.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-foreground mb-1">
                  <Link href="/facaderens" className="hover:text-primary transition-colors">Facaderens</Link>
                </h3>
                <p>Facaderens starter fra 2.997 kr. Prisen tilpasses din facades type, størrelse og tilstand. Vi renser alle facadetyper — mursten, puds, træ og beton — med skånsomme og miljøvenlige metoder.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-foreground mb-1">
                  <Link href="/traeterrasse-rens" className="hover:text-primary transition-colors">Træterrasse Rens</Link>
                </h3>
                <p>Træterrasse rens starter fra 40 kr./m² med en minimumspris på 2.497 kr. Rensningen udføres med tilpasset tryk og varmt vand, så træet ikke tager skade. Imprægnering kan tilkøbes fra 10 kr./m² for at beskytte træet mod fugt og alger.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-foreground mb-1">
                  <Link href="/algebehandling-af-tag" className="hover:text-primary transition-colors">Algebehandling af tag</Link>
                </h3>
                <p>Algebehandling af tag koster 995 kr. for arealer op til 200 m². For større tage tillægges 5 kr./m² for det overskydende areal. Behandlingen udføres med miljøgodkendt Neutralon og forebygger algevækst i flere år.</p>
              </div>
            </div>
          </div>

          {/* Nabo-rabat banner */}
          <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 bg-primary/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-sans font-bold text-lg text-foreground">
                🏘️ Nabo-rabat
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Bestil sammen med din nabo og spar begge penge på jeres rengøring.
              </p>
            </div>
            <Link href="/nabo-rabat">
              <Button variant="outline" className="shrink-0 font-semibold">
                Læs mere
              </Button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="font-sans font-bold text-xl text-foreground mb-6">
              Ofte stillede spørgsmål om priser
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {priserFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`pfaq-${i}`}
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

          {/* Bolius reference */}
          <div className="text-center text-xs text-muted-foreground mb-8">
            <p>
              Læs mere om vedligeholdelse af udendørs overflader hos{" "}
              <a href="https://www.bolius.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Bolius.dk
              </a>
            </p>
          </div>

          {/* Closing SEO paragraph */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Når du sammenligner priser på algerens og fliserens, er det vigtigt at kigge på, hvad der er inkluderet. Hos Kalles Algerens er algebehandling altid inkluderet i prisen på fliserens — det er ikke et tilkøb. Vi bruger varmt vand under højt tryk kombineret med miljøgodkendte produkter, som giver et resultat der holder markant længere end traditionel koldvandsrens. Det betyder, at du i det lange løb sparer penge, fordi du ikke skal have renset så ofte.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Prisen afhænger af areal, tilstand og adgangsforhold.
              Brug prisberegneren for dit personlige tilbud.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="font-sans font-bold gap-2"
                onClick={scrollToCalculator}
                data-testid="priser-cta-beregn"
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
    </div>
  );
}
