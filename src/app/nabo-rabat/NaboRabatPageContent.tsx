"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Users, Percent, CalendarCheck, Smile } from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function NaboRabatPageContent() {
  const router = useRouter();

  const scrollToCalculator = () => {
    router.push("/");
    setTimeout(() => {
      document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const steps = [
    { icon: Users, title: "Saml dine naboer", desc: "Tal med dine naboer om at bestille rengøring sammen. Jo flere I er, jo mere sparer I." },
    { icon: Percent, title: "Vi beregner rabatten", desc: "Kontakt os med information om antal naboer og opgaver. Vi sender et samlet tilbud med rabat." },
    { icon: CalendarCheck, title: "Vi finder en dato", desc: "Vi planlægger arbejdet, så alle naboer får renset på samme dag eller henover et par dage." },
    { icon: Smile, title: "Alle sparer penge", desc: "I sparer alle penge, og vi sparer køretid. Win-win for hele nabolaget!" },
  ];

  const benefits = [
    "Besparelse for alle deltagende naboer",
    "Vi sparer køretid og giver rabatten videre",
    "Samme høje kvalitet som altid",
    "Gælder alle vores services",
    "Kan kombineres med serviceaftale",
    "Ingen minimum antal naboer — allerede 2 giver rabat",
  ];

  return (
    <div className="pt-20" data-testid="nabo-rabat-page">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Nabo-rabat" }]} />
            <p className="text-primary font-semibold text-sm mb-2">Spar penge sammen</p>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Nabo-rabat — Spar penge sammen med din nabo
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Når du og din nabo bestiller rengøring sammen, sparer I begge penge.
              Vi sparer køretid, og den besparelse giver vi direkte videre til jer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="font-sans font-bold gap-2"
                onClick={scrollToCalculator}
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

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-10 text-center">
            Sådan fungerer nabo-rabat
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Fordele ved nabo-rabat
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-primary font-bold mt-0.5">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Sådan gør I sammen
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <ol className="list-decimal list-inside space-y-3">
              <li>Tal med én eller flere naboer om at få renset fliser, tag, facade eller terrasse samtidig.</li>
              <li>Bliv enige om, hvilke opgaver I hver især har brug for — I behøver ikke bestille den samme service.</li>
              <li>Kontakt mig og henvis til jeres naboer, så vi kan koordinere arbejdet på samme dag eller over et par dage.</li>
              <li>Få et samlet tilbud med rabat. Vi sparer køretid og opsætningstid, og den besparelse giver vi direkte videre til jer.</li>
            </ol>
            <p>
              I behøver ikke bestille samlet — I skal blot nævne, at I ønsker nabo-rabat, når I kontakter os. Vi sørger for resten. Når flere naboer i samme område bestiller rengøring samtidig, sparer vi køretid og logistik. Den besparelse giver vi direkte videre til jer som rabat. Jo flere naboer der deltager, jo større bliver besparelsen for alle.
            </p>
            <p>
              Nabo-rabat gælder for alle vores services — uanset om det er{" "}
              <Link href="/fliserens" className="text-primary hover:underline font-medium">fliserens</Link>,{" "}
              <Link href="/tagrens" className="text-primary hover:underline font-medium">tagrens og tagmaling</Link>,{" "}
              <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens</Link>,{" "}
              <Link href="/traeterrasse-rens" className="text-primary hover:underline font-medium">træterrasse rens</Link> eller{" "}
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">algebehandling</Link>. I behøver ikke engang at bestille den samme service.
            </p>
            <p>
              Vi dækker hele Midtjylland og kører også til resten af Danmark. Nabo-rabat er tilgængelig overalt, hvor vi arbejder — fra{" "}
              <Link href="/fliserens-i-herning" className="text-primary hover:underline font-medium">Herning</Link> og{" "}
              <Link href="/fliserens-i-ikast" className="text-primary hover:underline font-medium">Ikast</Link> til{" "}
              <Link href="/fliserens-i-brande" className="text-primary hover:underline font-medium">Brande</Link>,{" "}
              <Link href="/fliserens-i-give" className="text-primary hover:underline font-medium">Give</Link> og{" "}
              <Link href="/fliserens-i-billund" className="text-primary hover:underline font-medium">Billund</Link>.
            </p>
          </div>

          <h3 className="font-sans font-bold text-base text-foreground mb-4">
            Services der er inkluderet i nabo-rabat
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <Link href="/fliserens" className="text-primary hover:underline font-medium">Fliserens</Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">Algebehandling</Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <Link href="/tagrens" className="text-primary hover:underline font-medium">Tagrens og tagmaling</Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <Link href="/facaderens" className="text-primary hover:underline font-medium">Facaderens</Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <Link href="/traeterrasse-rens" className="text-primary hover:underline font-medium">Træterrasse rens</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
            Klar til at spare med din nabo?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Ring til os eller brug prisberegneren. Nævn nabo-rabat, og vi giver jer et samlet tilbud.
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
    </div>
  );
}
