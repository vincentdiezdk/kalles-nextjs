"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, Leaf, Heart, Award } from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function OmPageContent() {
  const router = useRouter();

  const scrollToCalculator = () => {
    router.push("/");
    setTimeout(() => {
      document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const principles = [
    { icon: Heart, title: "Personlig service", desc: "Når du ringer, er det mig du taler med. Jeg står selv for hvert eneste job og garanterer kvaliteten personligt." },
    { icon: Leaf, title: "Miljøbevidst", desc: "Alle vores produkter er miljøgodkendte af Miljøstyrelsen. Vi passer på naturen, mens vi passer på dine flader." },
    { icon: Award, title: "Kvalitet over kvantitet", desc: "Jeg tager kun opgaver jeg kan nå at gøre ordentligt. Hvert job skal leve op til min standard — ellers gør jeg det om." },
  ];

  const usps = [
    "Varmt vand under højt tryk — bedre og dybere rens",
    "Miljøgodkendte produkter (Neutralon, godkendt af Miljøstyrelsen)",
    "Personlig service — du taler altid direkte med Kasper",
    "Op til 10 års garanti med serviceaftale",
    "Hele Midtjylland — vi kører også til resten af Danmark",
    "Nabo-rabat — spar penge sammen med din nabo",
    "Svar inden 24 timer på alle henvendelser",
    "500+ tilfredse kunder i Midtjylland",
  ];

  return (
    <div className="pt-20" data-testid="om-page">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Om os" }]} />
            <p className="text-primary font-semibold text-sm mb-2">Om os</p>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Mød Kasper — "Kalle"
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg shrink-0 mx-auto md:mx-0">
              <img
                src="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/about/kasper-profil.webp"
                alt="Kasper - stifter af Kalles Algerens"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base">
                Hej! Jeg hedder Kasper — men de fleste kalder mig Kalle. Jeg driver Kalles Algerens fra Brande i hjertet af Midtjylland.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Jeg startede Kalles Algerens, fordi jeg så et behov for ordentlig udendørs rengøring i området. For mange bruger en billig højtryksrenser med koldt vand, som kun fjerner det yderste lag snavs. Med professionelt udstyr og varmt vand under tryk kommer vi ned i dybden og fjerner alger og snavs fra bunden — og resultatet holder markant længere.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Hos mig er der ingen call center eller mellemled. Når du ringer, er det mig du taler med. Jeg står selv for hvert eneste job, og jeg garanterer kvaliteten personligt. Hvis du ikke er tilfreds, gør jeg det om — uden diskussion.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Miljøet er vigtigt for mig. Derfor bruger jeg udelukkende produkter der er godkendt af Miljøstyrelsen. Det er dyrere, men det er det rigtige at gøre — for naturen, for dine planter, og for dit grundvand.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
            <p className="text-foreground font-medium italic text-lg">
              "Når du ringer, er det mig du taler med."
            </p>
            <cite className="text-sm text-muted-foreground not-italic mt-2 block">
              — Kasper "Kalle", stifter
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-10 text-center">
            Mine principper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content - Story extended */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Historien bag Kalles Algerens
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Jeg hedder Kasper og er gennem årene blevet kaldt for Kalle. Derfor har jeg startet Kalles Algerens ApS — et firma, der bygger på personlig service, kvalitet og ærlighed.
            </p>
            <p>
              Jeg lægger stor vægt på personlig service og ærlig rådgivning. Når du ringer til Kalles Algerens, er det mig du taler med. Jeg sørger for, at du altid ved, hvad du kan forvente — både i forhold til pris, tidsplan og resultat.
            </p>
            <p>
              Mit mål er enkelt: at levere et flot stykke arbejde, der holder i lang tid. Jeg bruger kun de bedste produkter og det rigtige udstyr til hver opgave. Det er dyrere, men resultatet taler for sig selv.
            </p>
            <p>
              For mig handler det ikke om hurtige løsninger. Derimod går jeg op i at udføre arbejdet rigtigt første gang. Derfor tilbyder jeg også{" "}
              <Link href="/serviceaftaler" className="text-primary hover:underline font-medium">serviceaftaler</Link> med op til 10 års garanti — fordi jeg stoler på kvaliteten af mit arbejde.
            </p>
          </div>
        </div>
      </section>

      {/* Specialization section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Specialiseret algefjernelse og overfladepleje
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              Kalles Algerens er specialiseret i professionel rensning og vedligeholdelse af udendørs overflader. Vi tilbyder:{" "}
              <Link href="/fliserens" className="text-primary hover:underline font-medium">fliserens</Link>,{" "}
              <Link href="/tagrens" className="text-primary hover:underline font-medium">tagrens og tagmaling</Link>,{" "}
              <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens</Link>,{" "}
              <Link href="/traeterrasse-rens" className="text-primary hover:underline font-medium">træterrasse rens</Link> og{" "}
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">algebehandling af tag</Link>.
            </p>
            <p>
              Vi dækker hele Midtjylland med base i Brande og kører også til resten af Danmark. Uanset om du bor i{" "}
              <Link href="/fliserens-i-herning" className="text-primary hover:underline font-medium">Herning</Link>,{" "}
              <Link href="/fliserens-i-ikast" className="text-primary hover:underline font-medium">Ikast</Link>,{" "}
              <Link href="/fliserens-i-give" className="text-primary hover:underline font-medium">Give</Link> eller{" "}
              <Link href="/fliserens-i-billund" className="text-primary hover:underline font-medium">Billund</Link>, er du velkommen til at{" "}
              <Link href="/kontakt" className="text-primary hover:underline font-medium">kontakte os</Link> for et uforpligtende tilbud.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Professionel og grundig rens",
              "Hedt vands rens",
              "Miljøvenlige metoder",
              "Hurtig respons",
              "Overflader der igen står som nye",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Derfor vælger kunderne os
          </h2>
          <ul className="space-y-3">
            {usps.map((usp, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{usp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
            Klar til en snak?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Ring til mig direkte eller beregn din pris online. Jeg svarer inden 24 timer.
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
