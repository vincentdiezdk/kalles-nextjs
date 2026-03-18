"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

interface CityCard {
  name: string;
  slug: string;
  distance: string;
}

const cities: CityCard[] = [
  { name: "Herning", slug: "herning", distance: "20 km" },
  { name: "Brande", slug: "brande", distance: "Hovedkvarter" },
  { name: "Give", slug: "give", distance: "25 km" },
  { name: "Billund", slug: "billund", distance: "30 km" },
  { name: "Ikast", slug: "ikast", distance: "25 km" },
  { name: "Hammerum", slug: "hammerum", distance: "18 km" },
  { name: "Snejbjerg", slug: "snejbjerg", distance: "22 km" },
  { name: "Kibæk", slug: "kibaek", distance: "15 km" },
  { name: "Sunds", slug: "sunds", distance: "30 km" },
];

export default function ServiceOmraaderPageContent() {
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
            <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Serviceområder" }]} />
            <p className="text-primary font-semibold text-sm mb-2">
              Professionel udendørs rengøring i hele Midtjylland
            </p>
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Service Områder — Vi dækker hele Midtjylland
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Med base i Brande dækker vi hele Midtjylland med professionel fliserens, tagrens,
              facaderens og algebehandling. Vi kører gerne ud til dig — uanset om du bor i Herning,
              Billund, Ikast eller en af de mange andre byer i vores dækningsområde.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="font-sans font-bold gap-2"
                onClick={scrollToCalculator}
                data-testid="omraader-cta-beregn"
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

      {/* City Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-8 text-center">
            Byer vi dækker
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/fliserens-i-${city.slug}`}
                className="group"
                data-testid={`city-card-${city.slug}`}
              >
                <div className="bg-card border border-border rounded-xl p-6 transition-all hover:border-primary/50 hover:shadow-md group-hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted rounded-full px-2.5 py-1">
                      {city.distance}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-foreground mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professionel fliserens i {city.name} og omegn
                  </p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Se mere
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage description */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Vores dækningsområde
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kalles Algerens har hovedkvarter i Brande og dækker et stort område i Midtjylland.
            Vi kører regelmæssigt til Herning, Ikast, Billund, Give, Hammerum, Snejbjerg, Kibæk,
            Sunds og alle mellemliggende byer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vi tilbyder kørsel uden ekstra beregning inden for vores primære dækningsområde.
            Bor du uden for de listede byer? Kontakt os alligevel — vi finder en løsning. Ved
            større opgaver kører vi gerne længere.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vi tilbyder desuden nabo-rabat: Hvis du og din nabo booker sammen, sparer I begge penge.
            Det er en af mange grunde til, at vores kunder anbefaler os videre.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
            Bor du i Midtjylland? Vi kommer til dig!
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Beregn din pris online eller ring til os for en uforpligtende snak om din opgave.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-sans font-bold text-base"
              onClick={scrollToCalculator}
              data-testid="omraader-cta-bottom"
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
