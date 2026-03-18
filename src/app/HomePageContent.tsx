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
} from "lucide-react";

// ─── Hero ──────────────────────────────────────────
function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24" data-testid="hero-section">
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
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <CheckCircle className="h-4 w-4" />
              Miljøgodkendt af Miljøstyrelsen
            </div>

            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-6">
              Dine fliser fortjener{" "}
              <span className="text-primary">at se nye ud igen</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Professionel udendørs rengøring med miljøgodkendte produkter og varmt vand under højt tryk.
              Vi dækker hele Midtjylland — fra Herning og Ikast til Brande og omegn.
            </p>

            {/* Micro trust signals in hero */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-primary" /> 500+ tilfredse kunder</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-primary" /> Op til 10 års garanti</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> Svar inden 24 timer</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button
                size="lg"
                className="font-sans font-bold text-base gap-2 shadow-md hover:shadow-lg transition-shadow"
                onClick={scrollToCalculator}
                data-testid="hero-cta-beregn"
              >
                Se din pris på 60 sek.
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a href="tel:+4525131797">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-bold text-base gap-2 w-full sm:w-auto"
                  data-testid="hero-cta-ring"
                >
                  <Phone className="h-4 w-4" />
                  Ring 25 13 17 97
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Ingen binding. Uforpligtende tilbud inden 24 timer.</p>
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
      price: "fra 40 kr./m²",
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
        </div>

        {/* Nabo-rabat banner */}
        <AnimateOnScroll animation="fade-in" className="mt-8">
          <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 bg-primary/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-sans font-bold text-lg text-foreground">
                🏘️ Nabo-rabat — Spar op til 20%
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Bestil sammen med din nabo og spar begge penge. Jo flere naboer, jo større rabat.
              </p>
            </div>
            <Link href="/nabo-rabat">
              <Button className="shrink-0 font-semibold gap-2" data-testid="nabo-rabat-cta">
                Se nabo-rabat <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ─── SEO Intro ──────────────────────────────────────
function SEOIntroSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
          Skånsom og professionel algerens af fliser, tage og terrasser
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Velkommen til Kalles Algerens. Her hjælper jeg dig med at få dine udendørs overflader til at se ud som nye igen. Helt konkret fjerner jeg alger, flisepest, mos og snavs fra fliser, terrasser, tage og facader. Derudover sørger jeg altid for at arbejde skånsomt og effektivt, så du får et holdbart resultat.</p>
          <p>Selv om jeg er lokal i Midtjylland, tilbyder jeg også professionel algerens i hele Danmark. Det betyder, at både private og erhverv kan få renset udendørs overflader hos mig.</p>
          <p>
            Når jeg arbejder lokalt, tilbyder jeg for eksempel professionel{' '}
            <Link href="/fliserens-i-herning" className="text-primary hover:underline font-medium">fliserens i Herning</Link>,{' '}
            <Link href="/fliserens-i-ikast" className="text-primary hover:underline font-medium">fliserens i Ikast</Link>,{' '}
            <Link href="/fliserens-i-brande" className="text-primary hover:underline font-medium">fliserens i Brande</Link>,{' '}
            <Link href="/fliserens-i-give" className="text-primary hover:underline font-medium">fliserens i Give</Link> og omegn.
          </p>
          <p>Derfor bruger jeg kun miljøvenlige løsninger og professionelt udstyr. På den måde sikrer jeg et flot resultat, der holder i lang tid. Samtidig følger jeg altid de retningslinjer, som Miljøstyrelsen anbefaler for brug af rensemidler udendørs.</p>
        </div>
      </div>
    </section>
  );
}

// ─── Service Descriptions ──────────────────────────────────────
function ServiceDescriptionsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-xl text-foreground mb-6">Kalle er ekspert i algerens</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-1">
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline">Algebehandling</Link>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">En algebehandling af taget er nemlig en hurtig og effektiv måde at forlænge tagets levetid på. Desuden forebygger det også fremtidig algevækst.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-1">
              <Link href="/fliserens" className="text-primary hover:underline">Fliserens</Link>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Jeg renser dine fliser med hedt vand, som giver en dybere og mere effektiv rengøring. Det betyder, at resultatet holder længere end traditionel koldvandsrens.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-1">
              <Link href="/tagrens" className="text-primary hover:underline">Tagrens & Tagmaling</Link>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Først udfører jeg en mekanisk rensning af taget. Derefter kombinerer jeg det med professionel maling, der giver dit tag nyt liv og forlænger levetiden.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-1">
              <Link href="/facaderens" className="text-primary hover:underline">Facaderens</Link>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">En facaderens giver dit hus et frisk og velholdt udtryk, fordi den effektivt fjerner alger, snavs og belægninger. Som resultat får du en renere facade og længere levetid.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-1">
              <Link href="/traeterrasse-rens" className="text-primary hover:underline">Træterrasse Rens</Link>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">En professionel rens af træterrassen giver et flottere resultat. Derudover hjælper det også med at forlænge træets levetid.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Text Section ──────────────────────────────────────
function CTATextSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-xl text-foreground mb-4">Få et uforpligtende tilbud</h2>
        <p className="text-muted-foreground leading-relaxed">
          Hos Kalles Algerens er du altid velkommen til at kontakte mig med spørgsmål. Du kan også få et gratis og uforpligtende tilbud. Desuden rådgiver jeg gerne om den bedste løsning, uanset om det drejer sig om{' '}
          <Link href="/fliserens" className="text-primary hover:underline font-medium">fliserens</Link>,{' '}
          <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">algebehandling af tag</Link>,{' '}
          <Link href="/traeterrasse-rens" className="text-primary hover:underline font-medium">træterrasserens</Link>,{' '}
          <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens</Link> eller{' '}
          <Link href="/tagrens" className="text-primary hover:underline font-medium">tagrens/maling</Link>.
          Hvis du ønsker, at dine udendørs overflader igen skal fremstå rene, velholdte og indbydende, så er du velkommen til at tage kontakt allerede i dag. Det er helt uforpligtende.
        </p>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────
function ProcessSection() {
  const steps = [
    { num: "1", title: "Beregn pris", desc: "Brug vores prisberegner og få et vejledende tilbud med det samme.", icon: "📱" },
    { num: "2", title: "Vi aftaler dato", desc: "Vi ringer dig op inden 24 timer og finder en dato der passer.", icon: "📅" },
    { num: "3", title: "Professionel rens", desc: "Vi møder op til tiden med professionelt udstyr og miljøgodkendte produkter.", icon: "🧹" },
    { num: "4", title: "Flot resultat", desc: "Du nyder flotte, rene udendørs flader — med op til 10 års garanti.", icon: "✨" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            Sådan foregår det
          </h2>
          <p className="text-muted-foreground">Fra prisberegning til flot resultat — 4 nemme trin.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 150}>
              <div className="text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {s.num}
                </div>
                <h3 className="font-sans font-bold text-base text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof Banner ──────────────────────────────────────
function SocialProofBanner() {
  return (
    <section className="py-6 bg-yellow-50 border-y border-yellow-200/50" data-testid="social-proof-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <a
            href="https://www.google.com/maps/place/Kalles+Algerens+ApS/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-yellow-200 hover:shadow-md transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-1">
              <span className="font-bold text-foreground text-sm">5,0</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-xs text-muted-foreground">på Google</span>
          </a>
          <p className="text-sm font-medium text-foreground">
            500+ tilfredse kunder i hele Midtjylland — fra Herning til Brande
          </p>
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
                  "{r.quote}"
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

// ─── FAQ ──────────────────────────────────────
function FAQSection() {
  const faqs = [
    { q: "Hvordan foregår en fliserens?", a: "Vi bruger professionelt udstyr med varmt vand under højt tryk (op til 250 bar) kombineret med miljøgodkendte rengøringsmidler. Vi starter med at fjerne løs snavs, derefter renser vi grundigt og afslutter med algebehandling for langvarig beskyttelse." },
    { q: "Er jeres produkter miljøvenlige?", a: "Ja! Vi bruger udelukkende miljøgodkendte produkter — herunder Neutralon, som er godkendt af Miljøstyrelsen. Vores metode er skånsom mod både naturen og dine overflader." },
    { q: "Hvor lang tid tager en rensning?", a: "Det afhænger af areal og tilstand. En typisk fliserens på 80-100 m² tager ca. 3-5 timer. Vi giver dig et tidsestimat sammen med dit tilbud." },
    { q: "Hvad koster det?", a: "Fliserens starter fra 30 kr./m², tagrens fra 10.997 kr., facaderens fra 2.997 kr. og algebehandling fra 995 kr. Brug vores prisberegner for et vejledende tilbud, eller ring for en uforpligtende snak." },
    { q: "Dækker I mit område?", a: "Vi dækker hele Midtjylland — herunder Herning, Ikast, Brande, Silkeborg, Viborg, Holstebro og omegn. Vi kører også gerne til resten af Danmark mod et lille kørselstillæg." },
    { q: "Hvad er nabo-rabat?", a: "Når du og din nabo bestiller sammen, sparer I begge penge. Vi sparer køretid og giver rabatten videre til jer. Jo flere naboer, jo større besparelse." },
    { q: "Hvor lang garanti giver I?", a: "Vi tilbyder op til 10 års garanti via vores serviceaftale med årlig algebehandling. Det sikrer, at dine flader forbliver rene og pæne år efter år." },
    { q: "Kan I rense asbesttag?", a: "Nej, vi renser IKKE asbesttag af sikkerhedsmæssige årsager. Vi anbefaler at kontakte en certificeret asbest-specialist for den type opgaver." },
    { q: "Hvornår kan I komme?", a: "Vi bestræber os på at svare inden 24 timer og finde en dato der passer dig. I højsæsonen (forår/sommer) anbefaler vi at booke i god tid." },
    { q: "Skal jeg være hjemme under rensningen?", a: "Det er ikke nødvendigt. Så længe vi har adgang til arealet og vandforsyning, klarer vi resten. Vi sender dig et billede af resultatet, når vi er færdige." },
  ];

  return (
    <section className="py-16 md:py-24" data-testid="faq-section">
      <AnimateOnScroll animation="fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            Ofte stillede spørgsmål
          </h2>
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
          Få et uforpligtende tilbud i dag. Vi svarer inden 24 timer.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="font-sans font-bold text-base"
            onClick={scrollToCalculator}
            data-testid="bottom-cta-beregn"
          >
            Beregn din pris
          </Button>
          <a href="tel:+4525131797">
            <Button
              size="lg"
              variant="outline"
              className="font-sans font-bold text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto gap-2"
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

// ─── Before/After Showcase ──────────────────────────────────
function BeforeAfterShowcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="before-after-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
              Se forskellen
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Træk for at se resultatet af professionel fliserens med varmt vand og miljøgodkendte produkter.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <BeforeAfterSlider
              before="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-foer.webp"
              after="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/fliserens-efter.webp"
              label="Fliserens — indkørsel"
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <BeforeAfterSlider
              before="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagrens-foer.webp"
              after="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/before-after/tagrens-efter.webp"
              label="Tagrens — betontag"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page Content ──────────────────────────────────
export default function HomePageContent() {
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hvordan foregår en fliserens?", "acceptedAnswer": { "@type": "Answer", "text": "Vi bruger professionelt udstyr med varmt vand under højt tryk (op til 250 bar) kombineret med miljøgodkendte rengøringsmidler. Vi starter med at fjerne løs snavs, derefter renser vi grundigt og afslutter med algebehandling for langvarig beskyttelse." } },
      { "@type": "Question", "name": "Er jeres produkter miljøvenlige?", "acceptedAnswer": { "@type": "Answer", "text": "Ja! Vi bruger udelukkende miljøgodkendte produkter — herunder Neutralon, som er godkendt af Miljøstyrelsen. Vores metode er skånsom mod både naturen og dine overflader." } },
      { "@type": "Question", "name": "Hvor lang tid tager en rensning?", "acceptedAnswer": { "@type": "Answer", "text": "Det afhænger af areal og tilstand. En typisk fliserens på 80-100 m² tager ca. 3-5 timer. Vi giver dig et tidsestimat sammen med dit tilbud." } },
      { "@type": "Question", "name": "Hvad koster det?", "acceptedAnswer": { "@type": "Answer", "text": "Fliserens starter fra 30 kr./m², tagrens fra 10.997 kr., facaderens fra 2.997 kr. og algebehandling fra 995 kr. Brug vores prisberegner for et vejledende tilbud, eller ring for en uforpligtende snak." } },
      { "@type": "Question", "name": "Dækker I mit område?", "acceptedAnswer": { "@type": "Answer", "text": "Vi dækker hele Midtjylland — herunder Herning, Ikast, Brande, Silkeborg, Viborg, Holstebro og omegn. Vi kører også gerne til resten af Danmark mod et lille kørselstillæg." } },
      { "@type": "Question", "name": "Hvad er nabo-rabat?", "acceptedAnswer": { "@type": "Answer", "text": "Når du og din nabo bestiller sammen, sparer I begge penge. Vi sparer køretid og giver rabatten videre til jer. Jo flere naboer, jo større besparelse." } },
      { "@type": "Question", "name": "Hvor lang garanti giver I?", "acceptedAnswer": { "@type": "Answer", "text": "Vi tilbyder op til 10 års garanti via vores serviceaftale med årlig algebehandling. Det sikrer, at dine flader forbliver rene og pæne år efter år." } },
      { "@type": "Question", "name": "Kan I rense asbesttag?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, vi renser IKKE asbesttag af sikkerhedsmæssige årsager. Vi anbefaler at kontakte en certificeret asbest-specialist for den type opgaver." } },
      { "@type": "Question", "name": "Hvornår kan I komme?", "acceptedAnswer": { "@type": "Answer", "text": "Vi bestræber os på at svare inden 24 timer og finde en dato der passer dig. I højsæsonen (forår/sommer) anbefaler vi at booke i god tid." } },
      { "@type": "Question", "name": "Skal jeg være hjemme under rensningen?", "acceptedAnswer": { "@type": "Answer", "text": "Det er ikke nødvendigt. Så længe vi har adgang til arealet og vandforsyning, klarer vi resten. Vi sender dig et billede af resultatet, når vi er færdige." } },
    ],
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
      <SEOIntroSection />
      <ServiceDescriptionsSection />
      <SocialProofBanner />
      <ProcessSection />
      <Calculator />
      <StatsSection />
      <TestimonialsSection />
      <CTATextSection />
      <FAQSection />
      <BottomCTA />
    </div>
  );
}
