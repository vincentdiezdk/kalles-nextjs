"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/hooks/use-scroll-animate";
import AnimatedCounter from "@/components/animated-counter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Calculator from "@/components/calculator";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import {
  Droplets,
  Home as HomeIcon,
  Building2,
  TreePine,
  Sparkles,
  Phone,
  Star,
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  Users,
  Ruler,
  BadgeCheck,
  Leaf,
} from "lucide-react";

// ─── Hero ──────────────────────────────────────────
function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24" data-testid="hero-section">
      {/* CSS fade-in + slide-up animation */}
      <style>{`
        @keyframes hero-fade-slide {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          animation: hero-fade-slide 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-animate-delay-1 { animation-delay: 0.15s; }
        .hero-animate-delay-2 { animation-delay: 0.3s; }
        .hero-animate-delay-3 { animation-delay: 0.45s; }
      `}</style>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-primary/[0.03]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="hsl(var(--primary))" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="hero-animate font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-5">
              Få algefri fliser, tag og terrasse{" "}
              <span className="text-primary">på under 14 dage</span>
            </h1>

            <p className="hero-animate hero-animate-delay-1 text-base md:text-lg text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              Professionel udendørs rengøring i Herning, Ikast og hele Midtjylland. Skånsomt lavtryk med varmt vand og miljøgodkendte produkter — fra 30 kr./m².
            </p>

            {/* Primary CTA + microcopy */}
            <div className="hero-animate hero-animate-delay-2 flex flex-col sm:flex-row gap-3 mb-3">
              <Button
                size="lg"
                className="font-sans font-bold text-base gap-2 shadow-md hover:shadow-lg transition-shadow h-12 px-8"
                onClick={scrollToCalculator}
                data-testid="hero-cta-beregn"
              >
                Beregn pris på 30 sekunder
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a href="tel:+4525131797">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-bold text-base gap-2 w-full sm:w-auto h-12"
                  data-testid="hero-cta-ring"
                >
                  <Phone className="h-4 w-4" />
                  Ring 25 13 17 97
                </Button>
              </a>
            </div>
            <p className="hero-animate hero-animate-delay-2 text-xs text-muted-foreground mb-6">
              Ingen binding. Du får pris og kan bestille med det samme.
            </p>

            {/* Social proof directly under hero CTA */}
            <div className="hero-animate hero-animate-delay-3">
              <a
                href="https://www.google.com/maps/place/Kalles+Algerens+ApS/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-card border border-border px-4 py-2.5 rounded-xl hover:shadow-md transition-shadow"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-foreground text-sm">5,0</span>
                  <span className="text-xs text-muted-foreground">på Google</span>
                </div>
                <span className="text-xs text-muted-foreground hidden sm:inline">·</span>
                <span className="text-xs font-medium text-foreground hidden sm:inline">500+ tilfredse kunder</span>
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/hero/kasper-hero.webp"
                alt="Kasper fra Kalles Algerens ved firmabilen"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ──────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: CheckCircle, text: "Miljøgodkendte produkter" },
    { icon: Users, text: "500+ tilfredse kunder" },
    { icon: MapPin, text: "Hele Midtjylland" },
    { icon: Shield, text: "Op til 10 års garanti" },
    { icon: Clock, text: "Svar inden 24 timer" },
  ];

  return (
    <section className="bg-primary text-primary-foreground py-4" data-testid="trust-bar">
      <AnimateOnScroll animation="fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-sm font-medium whitespace-nowrap">
                  <Icon className="h-4 w-4 shrink-0 opacity-90" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

// ─── Services ──────────────────────────────────────
function ServicesSection() {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceCards = [
    {
      icon: Droplets,
      title: "Fliserens",
      price: "fra 30 kr./m²",
      desc: "Professionel rens af fliser, sten og belægning med varmt vand og højt tryk.",
      href: "/fliserens",
      image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/fliserens.webp",
    },
    {
      icon: HomeIcon,
      title: "Tagrens & Tagmaling",
      price: "fra 10.997 kr.",
      desc: "Komplet tagrens med algebehandling og mulighed for tagmaling.",
      href: "/tagrens",
      image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/tagrens.webp",
    },
    {
      icon: Building2,
      title: "Facaderens",
      price: "fra 2.997 kr.",
      desc: "Skånsom rens af mursten, puds og beton. Vi tilpasser metoden til din facade.",
      href: "/facaderens",
      image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/facaderens.webp",
    },
    {
      icon: TreePine,
      title: "Træterrasse Rens",
      price: "fra 50 kr./m²",
      desc: "Skånsom rensning af træterrasser med imprægnering som tilvalg.",
      href: "/traeterrasse-rens",
      image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/terrasse.webp",
    },
    {
      icon: Sparkles,
      title: "Algebehandling",
      price: "995 kr.",
      desc: "Fast pris op til 200 m². Miljøgodkendt Neutralon algebehandling.",
      href: "/algebehandling-af-tag",
      image: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/services/algerens.webp",
    },
  ];

  return (
    <section className="py-16 md:py-24" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            Vores services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Alt inden for udendørs rengøring — fra fliser og tag til facade og terrasse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <Link
                  href={card.href}
                  className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md block"
                  data-testid={`service-card-${i}`}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-sans font-bold text-lg text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-2">{card.price}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {card.desc}
                    </p>
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Læs mere <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}

          {/* Nabo-rabat card — action-oriented, links to calculator */}
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div
              className="group bg-card rounded-xl border-2 border-dashed border-primary/30 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer h-full flex flex-col"
              onClick={scrollToCalculator}
              data-testid="service-card-nabo"
            >
              <div className="aspect-[16/10] overflow-hidden bg-primary/5 flex items-center justify-center">
                <div className="text-center px-4">
                  <span className="text-5xl mb-2 block">🏘️</span>
                  <p className="font-sans font-extrabold text-2xl text-primary">Spar op til 10%</p>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-foreground">Nabo-rabat</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                  Bestil sammen med din nabo og spar begge penge. Aktivér naborabat direkte i prisberegneren.
                </p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Beregn pris med naborabat <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// ─── Detailed Service Descriptions (SEO) ──────────────────────────────────────
function ServiceDetailSections() {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/20" data-testid="service-details-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-10 text-center">
          Professionel udendørs rengøring i Midtjylland
        </h2>

        {/* Fliserens */}
        <div className="mb-12" id="fliserens-info">
          <h3 className="font-sans font-bold text-xl text-foreground mb-3 flex items-center gap-2">
            <Droplets className="h-5 w-5 text-primary" />
            Fliserens — fra 30 kr./m²
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>
              Fliserens er vores mest efterspurgte ydelse. Vi renser alle typer belægningssten, betonfliser, klinker og natursten med varmt vand under lavtryk. I modsætning til traditionel højtryksrensning undgår vi at beskadige fuger og overflade. Varmt vand fjerner alger, mos og organisk snavs mere effektivt end koldt vand — og resultatet holder længere.
            </p>
            <p>
              Prisen starter fra 30 kr./m² (minimum 75 m² / 2.250 kr. inkl. moms). Efter rensningen tilbyder vi {" "}
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">algebehandling med Neutralon</Link>{" "}
              og <Link href="/fliserens" className="text-primary hover:underline font-medium">nano-imprægnering</Link>{" "}
              som tilvalg. Vi dækker hele Midtjylland — herunder{" "}
              <Link href="/fliserens-i-herning" className="text-primary hover:underline font-medium">Herning</Link>,{" "}
              <Link href="/fliserens-i-ikast" className="text-primary hover:underline font-medium">Ikast</Link>,{" "}
              <Link href="/fliserens-i-brande" className="text-primary hover:underline font-medium">Brande</Link> og{" "}
              <Link href="/fliserens-i-give" className="text-primary hover:underline font-medium">Give</Link>.
            </p>
            <p>
              Fliserens er godkendt under servicefradraget. Det betyder, at du kan trække arbejdslønnen fra i skat — op til 18.300 kr. pr. person i 2026.{" "}
              <Link href="/servicefradrag" className="text-primary hover:underline font-medium">Læs mere om servicefradrag på fliserens</Link>.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/fliserens">
              <Button variant="outline" size="sm" className="gap-1.5 font-medium">
                Læs mere om fliserens <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-1.5 font-medium text-primary" onClick={scrollToCalculator}>
              Beregn pris <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Tagrens */}
        <div className="mb-12" id="tagrens-info">
          <h3 className="font-sans font-bold text-xl text-foreground mb-3 flex items-center gap-2">
            <HomeIcon className="h-5 w-5 text-primary" />
            Tagrens & Tagmaling — fra 10.997 kr.
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>
              Et tag fuldt af alger og mos er ikke bare grimt — det kan forkorte tagets levetid markant. Vi tilbyder professionel tagrens af betontagsten, teglsten og eternit (ikke asbest). Rensningen fjerner alger, mos, lav og snavs og efterlades med en algebehandling, der forebygger genvækst.
            </p>
            <p>
              Ønsker du et helt nyt udseende, tilbyder vi også{" "}
              <Link href="/tagmaling" className="text-primary hover:underline font-medium">tagmaling</Link>{" "}
              i en bred vifte af farver. Malingen beskytter og forskønner taget i mange år. Med en{" "}
              <Link href="/serviceaftaler" className="text-primary hover:underline font-medium">serviceaftale</Link>{" "}
              tilbyder vi op til 10 års garanti med årlig algebehandling.
            </p>
            <p>
              Tagrens tager typisk 1-2 dage afhængigt af tagets størrelse. Prisen starter fra 10.997 kr. inkl. algebehandling, og vi sender altid et præcist tilbud efter besigtigelse.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tagrens">
              <Button variant="outline" size="sm" className="gap-1.5 font-medium">
                Læs mere om tagrens <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-1.5 font-medium text-primary" onClick={scrollToCalculator}>
              Få tilbud <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Facaderens */}
        <div className="mb-12" id="facaderens-info">
          <h3 className="font-sans font-bold text-xl text-foreground mb-3 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Facaderens — fra 2.997 kr.
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>
              En snavset facade giver et nedslidt indtryk af dit hjem. Alger, grønne belægninger og smuds sætter sig gradvist og kan være svære at fjerne uden det rette udstyr. Vi tilbyder skånsom {" "}
              <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens</Link>{" "}
              tilpasset alle materialer — mursten, puds, beton og træ.
            </p>
            <p>
              Vi bruger en kombination af lavtryksrens og professionelle rengøringsmidler, som er skånsomme mod overfladen men effektive mod alger og snavs. Prisen starter fra 2.997 kr. afhængigt af facade-størrelse og tilstand. Kontakt os for et uforpligtende tilbud.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/facaderens">
              <Button variant="outline" size="sm" className="gap-1.5 font-medium">
                Læs mere om facaderens <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-1.5 font-medium text-primary" onClick={scrollToCalculator}>
              Få tilbud <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Træterrasse */}
        <div className="mb-12" id="terrasse-info">
          <h3 className="font-sans font-bold text-xl text-foreground mb-3 flex items-center gap-2">
            <TreePine className="h-5 w-5 text-primary" />
            Træterrasse Rens — fra 50 kr./m²
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>
              Træterrasser kræver særlig behandling. Alger og mos gør træet glat og uindbydende, og forkert rengøring kan beskadige træets overflade. Hos Kalles Algerens bruger vi skånsomt lavtryk med varmt vand, som fjerner snavs uden at rive træfibrene op.
            </p>
            <p>
              Efter rensningen tilbyder vi imprægnering, der beskytter træet mod fugt, UV-stråling og genvækst af alger. Vi renser alle typer{" "}
              <Link href="/traeterrasse-rens" className="text-primary hover:underline font-medium">træterrasser</Link>{" "}
              — trykimprægneret, hårdttræ og composit. Prisen starter fra 50 kr./m² med minimum 2.500 kr.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/traeterrasse-rens">
              <Button variant="outline" size="sm" className="gap-1.5 font-medium">
                Læs mere om terrasse rens <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-1.5 font-medium text-primary" onClick={scrollToCalculator}>
              Beregn pris <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Algebehandling */}
        <div id="algebehandling-info">
          <h3 className="font-sans font-bold text-xl text-foreground mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Algebehandling — 995 kr. (op til 200 m²)
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>
              Algebehandling er den mest effektive måde at forebygge alge- og mosvækst på tag, fliser og facader. Vi bruger Neutralon, som er miljøgodkendt af Miljøstyrelsen. Produktet virker i op til 5 år og nedbryder gradvist alger, mos og lav uden at skade overfladen.
            </p>
            <p>
              Behandlingen kan bruges selvstændigt eller som tilvalg efter en rensning. Prisen er fast: 995 kr. for op til 200 m². For større arealer beregnes en tillægspris pr. m².{" "}
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">Læs mere om algebehandling</Link>.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/algebehandling-af-tag">
              <Button variant="outline" size="sm" className="gap-1.5 font-medium">
                Læs mere om algebehandling <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-1.5 font-medium text-primary" onClick={scrollToCalculator}>
              Beregn pris <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process Section (3-step timeline) ──────────────────────────────────────
function ProcessSection() {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24" data-testid="process-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            Sådan foregår det
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fra prisberegning til rene fliser — 3 enkle trin.
          </p>
        </div>

        {/* 3-step timeline */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Beregn pris",
                desc: "Brug vores prisberegner og få et vejledende tilbud med det samme. Det tager under 30 sekunder.",
                cta: true,
              },
              {
                num: "2",
                title: "Vi ringer og bekræfter",
                desc: "Du hører fra Kasper inden 24 timer. Vi aftaler en dato og giver dig et endeligt tilbud.",
                cta: false,
              },
              {
                num: "3",
                title: "Vi kommer og renser",
                desc: "Vi møder op med professionelt udstyr og miljøgodkendte produkter. Du nyder resultatet — med op til 10 års garanti.",
                cta: false,
              },
            ].map((step, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground font-extrabold text-xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-md">
                    {step.num}
                  </div>
                  <h3 className="font-sans font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                  {step.cta && (
                    <button
                      onClick={scrollToCalculator}
                      className="mt-3 text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Start beregning <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Before/After Showcase ──────────────────────────────────
function BeforeAfterShowcase() {
  const sliders = [
    {
      before: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-foer.webp",
      after: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-efter.webp",
      label: "Fliserens — indkørsel",
      factBadge: "Holder op til 10 år med algebehandling",
    },
    {
      before: "/images/before-after/terrasse-foer.webp",
      after: "/images/before-after/terrasse-efter.webp",
      label: "Træterrasse — før og efter rens",
      factBadge: "Fra 50 kr./m² inkl. algebehandling",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="before-after-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
              Se forskellen
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Træk for at se resultatet af professionel rens med varmt vand og miljøgodkendte produkter.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sliders.map((s, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
              <BeforeAfterSlider
                before={s.before}
                after={s.after}
                label={s.label}
                factBadge={s.factBadge}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ──────────────────────────────────────
function StatsSection() {
  const stats = [
    { target: 500, suffix: "+", label: "Tilfredse kunder", icon: Users },
    { target: 15000, suffix: "+", label: "m² renset", icon: Ruler },
    { target: 24, suffix: " timer", label: "Svar-garanti", icon: Clock },
    { target: 10, suffix: " år", label: "Garanti", icon: Shield },
  ];

  return (
    <section className="py-16 md:py-20" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimateOnScroll key={i} animation="scale-in" delay={i * 100}>
                <div className="text-center">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-1">
                    {<AnimatedCounter target={s.target} suffix={s.suffix} />}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────
function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "Kasper gjorde et fantastisk stykke arbejde med vores fliser. De ser helt nye ud! Hurtig, venlig og professionel service.",
      name: "Martin H.",
      city: "Herning",
      source: "Google",
    },
    {
      quote:
        "Vi brugte Kalles Algerens til vores tag, og resultatet er imponerende. Alt blev gjort grundigt, og prisen var fair.",
      name: "Lise K.",
      city: "Ikast",
      source: "Google",
    },
    {
      quote:
        "Super tilfreds med rensning af vores terrasse. Kasper var punktlig, grundig og ryddede op efter sig. Kan varmt anbefales!",
      name: "Thomas B.",
      city: "Brande",
      source: "Google",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            Hvad vores kunder siger
          </h2>
          <p className="text-muted-foreground">500+ tilfredse kunder i Midtjylland</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 150}>
              <div
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  &quot;{r.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-foreground">
                    {r.name}
                    <span className="text-muted-foreground font-normal"> — {r.city}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">via {r.source}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/search?q=kalles+algerens+anmeldelser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            Anmeld os på Google <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Service Area ──────────────────────────────────────
function ServiceAreaSection() {
  const cities = [
    { name: "Herning", href: "/fliserens-i-herning" },
    { name: "Ikast", href: "/fliserens-i-ikast" },
    { name: "Brande", href: "/fliserens-i-brande" },
    { name: "Give", href: "/fliserens-i-give" },
    { name: "Billund", href: "/fliserens-i-billund" },
    { name: "Hammerum", href: "/fliserens-i-hammerum" },
    { name: "Snejbjerg", href: "/fliserens-i-snejbjerg" },
    { name: "Kibæk", href: "/fliserens-i-kibaek" },
    { name: "Sunds", href: "/fliserens-i-sunds" },
  ];

  return (
    <section className="py-12 md:py-16" data-testid="service-area-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-sans font-bold text-xl text-foreground mb-1">
                Vi dækker hele Midtjylland
              </h2>
              <p className="text-sm text-muted-foreground">
                Kasper er baseret i Brande og kører ud til alle byer i regionen. Vi tager også opgaver i resten af Danmark mod et lille kørselstillæg.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="inline-flex items-center gap-1 bg-primary/5 text-primary text-sm font-medium px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
              >
                <MapPin className="h-3 w-3" />
                {city.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Bor du uden for listen? <a href="tel:+4525131797" className="text-primary hover:underline font-medium">Ring 25 13 17 97</a> — vi finder en løsning.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────
function FAQSection() {
  const faqs = [
    {
      q: "Hvad koster fliserens?",
      a: "Fliserens starter fra 30 kr./m² med et minimum på 2.250 kr. (75 m²). Prisen inkluderer rens med varmt vand og højt tryk. Tilvalg som nano-imprægnering (fra 750 kr.) og fugesand (fra 750 kr.) lægges oveni. Brug vores prisberegner for et præcist tilbud på under 30 sekunder.",
    },
    {
      q: "Hvordan foregår en fliserens?",
      a: "Vi bruger professionelt udstyr med varmt vand (op til 90°C) under lavtryk kombineret med miljøgodkendte rengøringsmidler. Først fjerner vi løst snavs, derefter renser vi grundigt med roterende dyser, og til sidst skylles overfladen ren. Hele processen er skånsom mod fuger og belægning.",
    },
    {
      q: "Er jeres produkter miljøvenlige?",
      a: "Ja. Vi bruger udelukkende miljøgodkendte produkter — herunder Neutralon til algebehandling, som er godkendt af Miljøstyrelsen. Vores metode med varmt vand og lavtryk er desuden mere skånsom end traditionel højtryksrensning.",
    },
    {
      q: "Hvor lang tid tager en rensning?",
      a: "En typisk fliserens på 80-100 m² tager ca. 3-5 timer. Tagrens tager typisk 1-2 dage afhængigt af tagets størrelse og tilstand. Vi giver dig altid et tidsestimat sammen med dit tilbud.",
    },
    {
      q: "Hvor lang tid holder resultatet?",
      a: "En professionel fliserens holder typisk 3-5 år. Med tilkøb af algebehandling (Neutralon) og nano-imprægnering kan resultatet holde i op til 10 år. En serviceaftale med årlig algebehandling forlænger holdbarheden yderligere.",
    },
    {
      q: "Hvilken kemi bruger I?",
      a: "Vi bruger Neutralon til algebehandling — et miljøgodkendt produkt der forebygger genvækst af alger og mos i op til 5 år. Til rensning bruger vi primært varmt vand og mekanisk rengøring, suppleret med biologisk nedbrydelige rengøringsmidler ved behov.",
    },
    {
      q: "Kan I rense mit tag?",
      a: "Ja! Vi renser betontagsten, teglsten og eternit (ikke asbest). Tagrens inkluderer altid algebehandling med Neutralon. Vi tilbyder også tagmaling, der giver taget nyt udseende og forlænger levetiden. Priser starter fra 10.997 kr.",
    },
    {
      q: "Dækker I mit område?",
      a: "Vi dækker hele Midtjylland — herunder Herning, Ikast, Brande, Give, Billund, Silkeborg, Viborg, Holstebro og omegn. Vi kører også gerne længere mod et lille kørselstillæg. Ring 25 13 17 97 for at høre om vi dækker din adresse.",
    },
    {
      q: "Hvad er nabo-rabatten?",
      a: "Når du og din nabo bestiller sammen, sparer I begge penge — op til 10%. Vi sparer køretid og giver besparelsen videre til jer. Jo flere naboer der deltager, jo større rabat. Aktivér naborabatten direkte i vores prisberegner.",
    },
    {
      q: "Kan jeg få servicefradrag på fliserens?",
      a: "Ja! Fliserens er godkendt under servicefradraget (BoligJobordningen). I 2026 kan du trække op til 18.300 kr. pr. person fra i skat. Vi sender altid en faktura med specificeret arbejdsløn og CVR-nummer — klar til indberetning. Læs mere på vores servicefradrag-side.",
    },
    {
      q: "Hvor lang garanti giver I?",
      a: "Vi tilbyder op til 10 års garanti via vores serviceaftale med årlig algebehandling. Uden serviceaftale giver vi 1 års garanti på udført arbejde. Serviceaftalen sikrer, at dine flader forbliver rene år efter år.",
    },
    {
      q: "Skal jeg være hjemme under rensningen?",
      a: "Nej, det er ikke nødvendigt. Så længe vi har adgang til arealet og vandforsyning, klarer vi resten. Vi sender dig et billede af resultatet, når vi er færdige, og du kan betale digitalt bagefter.",
    },
  ];

  return (
    <section className="py-16 md:py-24" data-testid="faq-section">
      <AnimateOnScroll animation="fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            Ofte stillede spørgsmål
          </h2>
          <p className="text-muted-foreground">
            Alt du skal vide om fliserens, tagrens og udendørs rengøring
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-6"
              data-testid={`faq-item-${i}`}
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
      </AnimateOnScroll>
    </section>
  );
}

// ─── Bottom CTA ──────────────────────────────────
function BottomCTA() {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground" data-testid="bottom-cta">
      <AnimateOnScroll animation="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-4">
          Klar til flotte udendørs flader?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Beregn din pris på under 30 sekunder — helt uforpligtende.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="font-sans font-bold text-base h-12"
            onClick={scrollToCalculator}
            data-testid="bottom-cta-beregn"
          >
            Beregn din pris
          </Button>
          <a href="tel:+4525131797">
            <Button
              size="lg"
              variant="outline"
              className="font-sans font-bold text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto gap-2 h-12"
              data-testid="bottom-cta-ring"
            >
              <Phone className="h-4 w-4" />
              Ring 25 13 17 97
            </Button>
          </a>
        </div>
        <p className="text-xs text-primary-foreground/60 mt-4">Begrænset kapacitet i foråret — book tidligt</p>
      </div>
      </AnimateOnScroll>
    </section>
  );
}

// ─── Home Page Content ──────────────────────────────────
export default function HomePageContent() {
  const faqSchemaItems = [
    { q: "Hvad koster fliserens?", a: "Fliserens starter fra 30 kr./m² med et minimum på 2.250 kr. (75 m²). Prisen inkluderer rens med varmt vand og højt tryk. Tilvalg som nano-imprægnering (fra 750 kr.) og fugesand (fra 750 kr.) lægges oveni." },
    { q: "Hvordan foregår en fliserens?", a: "Vi bruger professionelt udstyr med varmt vand (op til 90°C) under lavtryk kombineret med miljøgodkendte rengøringsmidler. Først fjerner vi løst snavs, derefter renser vi grundigt med roterende dyser, og til sidst skylles overfladen ren." },
    { q: "Er jeres produkter miljøvenlige?", a: "Ja. Vi bruger udelukkende miljøgodkendte produkter — herunder Neutralon til algebehandling, som er godkendt af Miljøstyrelsen." },
    { q: "Hvor lang tid tager en rensning?", a: "En typisk fliserens på 80-100 m² tager ca. 3-5 timer. Tagrens tager typisk 1-2 dage." },
    { q: "Hvor lang tid holder resultatet?", a: "En professionel fliserens holder typisk 3-5 år. Med algebehandling og nano-imprægnering kan resultatet holde i op til 10 år." },
    { q: "Hvilken kemi bruger I?", a: "Vi bruger Neutralon til algebehandling — et miljøgodkendt produkt der forebygger genvækst af alger og mos i op til 5 år." },
    { q: "Kan I rense mit tag?", a: "Ja! Vi renser betontagsten, teglsten og eternit (ikke asbest). Tagrens inkluderer altid algebehandling. Priser starter fra 10.997 kr." },
    { q: "Dækker I mit område?", a: "Vi dækker hele Midtjylland — herunder Herning, Ikast, Brande, Give, Billund, Silkeborg, Viborg, Holstebro og omegn." },
    { q: "Hvad er nabo-rabatten?", a: "Når du og din nabo bestiller sammen, sparer I begge penge — op til 10%. Vi sparer køretid og giver besparelsen videre til jer." },
    { q: "Kan jeg få servicefradrag på fliserens?", a: "Ja! Fliserens er godkendt under servicefradraget. I 2026 kan du trække op til 18.300 kr. pr. person fra i skat." },
    { q: "Hvor lang garanti giver I?", a: "Vi tilbyder op til 10 års garanti via vores serviceaftale med årlig algebehandling." },
    { q: "Skal jeg være hjemme under rensningen?", a: "Nej. Så længe vi har adgang til arealet og vandforsyning, klarer vi resten. Vi sender et billede af resultatet når vi er færdige." },
  ];

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchemaItems.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  }), []);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <BeforeAfterShowcase />
      <ProcessSection />
      <Calculator />
      <ServiceDetailSections />
      <StatsSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <FAQSection />
      <BottomCTA />
    </div>
  );
}
