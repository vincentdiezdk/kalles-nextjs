"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgePercent,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calculator,
  Receipt,
  FileText,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

/* ─── Constants ─── */
const FRADRAG_2026 = 18300;
const FRADRAG_2025 = 17500;
const SKAT_PCT = 26;

/* ─── Example calculations ─── */
const examples = [
  { label: "75 m² fliserens", arbejdslon: 1350, total: 2250 },
  { label: "130 m² fliserens", arbejdslon: 2340, total: 3900 },
  { label: "200 m² fliserens + nano", arbejdslon: 4200, total: 7000 },
  { label: "Par — 2 × fradrag", arbejdslon: 5400, total: 9000, dobbelt: true },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "Kan jeg få servicefradrag på fliserens?",
    a: "Ja. Fliserensning af terrasser, indkørsler og belægninger er direkte nævnt på SKATs liste over fradragsberettigede serviceydelser under \"Almindeligt havearbejde m.v.\" Du kan trække arbejdslønnen fra i skat — op til 18.300 kr. pr. person i 2026.",
  },
  {
    q: "Hvad er forskellen på servicefradrag og håndværkerfradrag?",
    a: "Servicefradraget dækker serviceydelser som rengøring, havearbejde og fliserens (op til 18.300 kr./person i 2026). Håndværkerfradraget dækker grøn energirenovering som isolering og varmepumper (op til 9.000 kr./person i 2026). Fliserens hører under servicefradraget. De to fradrag kan bruges samtidig.",
  },
  {
    q: "Hvor meget kan jeg spare i skat på fliserens?",
    a: "Skatteværdien af servicefradraget er ca. 26%. Hvis du betaler 3.900 kr. for fliserens (heraf ca. 2.340 kr. i arbejdsløn ex. moms — 75% af prisen er mandetimer), sparer du ca. 608 kr. i skat. Er I to voksne i husstanden, kan I hver især bruge jeres fradrag — det dobbelte besparelse.",
  },
  {
    q: "Kan jeg bruge servicefradraget på mit sommerhus?",
    a: "Ja, servicefradraget gælder både for din helårsbolig og din fritidsbolig. Dog tæller det samlede fradrag for begge boliger under det samme loft på 18.300 kr. pr. person i 2026. Fradraget gælder ikke, hvis fritidsboligen har været udlejet.",
  },
  {
    q: "Hvornår skal jeg indberette servicefradraget?",
    a: "Du kan indberette servicefradraget løbende via TastSelv på skat.dk under felt 461 (Servicefradrag). Arbejde udført i 2026 skal være betalt senest 28. februar 2027 for at give fradrag i 2026. Du skal gemme fakturaen som dokumentation.",
  },
  {
    q: "Kan jeg betale med MobilePay og stadig få fradrag?",
    a: "Ja. SKAT accepterer digital betaling via MobilePay, dankort, netbank og bankoverførsel. Du kan derimod IKKE betale kontant, hvis du vil bruge servicefradraget.",
  },
  {
    q: "Hvad giver IKKE servicefradrag?",
    a: "Tagrens, algebehandling af tag, imprægnering, maling og coatings giver ikke servicefradrag. Disse ydelser betragtes som teknisk vedligehold eller håndværksydelser. Abonnementsordninger giver heller ikke fradrag.",
  },
  {
    q: "Sender Kalles Algerens en faktura, jeg kan bruge til fradrag?",
    a: "Ja. Vi sender altid en faktura med specificeret arbejdsløn, betalingsdato og vores CVR-nummer — præcis som SKAT kræver. Du kan bruge fakturaen direkte til indberetning i TastSelv.",
  },
];

/* ─── Trin-for-trin data ─── */
const steps = [
  {
    icon: Calculator,
    title: "Beregn din pris",
    desc: "Brug vores prisberegner til at se din vejledende pris inkl. moms og dit mulige servicefradrag.",
  },
  {
    icon: ShieldCheck,
    title: "Vi udfører arbejdet",
    desc: "Kalles Algerens udfører fliserensningen professionelt. Du betaler digitalt (dankort, MobilePay, bankoverførsel).",
  },
  {
    icon: Receipt,
    title: "Modtag faktura",
    desc: "Du modtager en faktura med specificeret arbejdsløn, betalingsdato og vores CVR-nummer.",
  },
  {
    icon: FileText,
    title: "Indberet til SKAT",
    desc: "Log ind på skat.dk → TastSelv → Felt 461 (Servicefradrag). Indtast beløb, dato og CVR-nummer.",
  },
];

export default function ServicefradragPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbNav
        items={[
          { label: "Forside", href: "/" },
          { label: "Servicefradrag", href: "/servicefradrag" },
        ]}
      />

      {/* ─── Hero ─── */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <BadgePercent className="h-4 w-4" />
            Spar op til 26% i skat
          </div>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            Servicefradrag på fliserens i 2026
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Vidste du, at du kan trække arbejdslønnen til fliserens fra i skat?
            I 2026 kan du få servicefradrag på op til{" "}
            <strong className="text-foreground">
              {FRADRAG_2026.toLocaleString("da-DK")} kr. pr. person
            </strong>{" "}
            — det svarer til en skattebesparelse på ca. 4.758 kr. Fliserensning
            er direkte godkendt af SKAT under &quot;Almindeligt havearbejde&quot;.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/priser">
              <Button size="lg" className="gap-2 font-semibold">
                <Calculator className="h-4 w-4" />
                Beregn din pris med fradrag
              </Button>
            </Link>
            <a href="tel:+4525131797">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                Ring 25 13 17 97
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Hvad er servicefradraget? ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Hvad er servicefradraget?
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-muted-foreground">
            <p>
              Servicefradraget — også kendt fra BoligJobordningen — er en
              skatteordning, der giver private boligejere mulighed for at få
              fradrag for arbejdsløn til udvalgte serviceydelser i hjemmet eller
              fritidsboligen. Ordningen blev oprindeligt indført for at reducere
              sort arbejde og er siden blevet udvidet flere gange.
            </p>
            <p>
              I perioden 2025–2027 er servicefradraget hævet markant. I 2026 kan
              du få fradrag for op til{" "}
              <strong className="text-foreground">
                {FRADRAG_2026.toLocaleString("da-DK")} kr. pr. person
              </strong>{" "}
              i husstanden (mod {FRADRAG_2025.toLocaleString("da-DK")} kr. i
              2025). Skatteværdien er ca. {SKAT_PCT}%, hvilket betyder, at du
              får omkring en fjerdedel af arbejdslønnen tilbage via din skat.
            </p>
            <p>
              Servicefradraget gælder for personer over 18 år med almindelig
              skattepligt i Danmark. Er I to voksne i husstanden, kan I hver
              især bruge jeres fradrag — samlet op til{" "}
              <strong className="text-foreground">36.600 kr.</strong> for et par
              i 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Fliserens og servicefradraget ─── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Fliserens er dækket af servicefradraget
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              SKAT godkender fradrag for{" "}
              <strong className="text-foreground">
                &quot;Fliserensning af terrasser, indkørsler m.v.&quot;
              </strong>{" "}
              som en del af kategorien &quot;Almindeligt havearbejde&quot;. Det betyder, at
              når du bestiller professionel fliserens hos Kalles Algerens, kan du
              trække arbejdslønnen fra i din skat.
            </p>
            <p>
              Fradraget gælder for arbejdslønnen — ikke for materialer. Ved
              fliserens udgør arbejdslønnen ca. 75% af prisen, mens de resterende
              25% er materialer. Det gør fliserens til en af de serviceydelser,
              hvor du får mest ud af dit servicefradrag.
            </p>
          </div>

          {/* What qualifies / what doesn't */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-sans font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Giver servicefradrag
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Fliserensning af terrasser og indkørsler",
                  "Rensning af belægningssten og betonfliser",
                  "Algebehandling af fliser (som del af rensningen)",
                  "Rensning af træterrasser",
                  "Rensning af tagrender",
                  "Belægningsarbejde",
                  "Havearbejde, hækklipning og snerydning",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-sans font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Giver IKKE servicefradrag
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Tagrens og algebehandling af tag",
                  "Imprægnering og nano-coating",
                  "Maling og udvendig overfladebehandling",
                  "Facaderens (teknisk vedligehold)",
                  "Abonnementsordninger",
                  "Kontant betaling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Beregningseksempler ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-3">
            Beregning: Så meget kan du spare
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
            Servicefradragets skatteværdi er ca. {SKAT_PCT}% af arbejdslønnen
            (ex. moms). Her er konkrete eksempler baseret på vores priser.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {examples.map((ex) => {
              const fradragBase = Math.min(
                ex.arbejdslon,
                ex.dobbelt ? FRADRAG_2026 * 2 : FRADRAG_2026
              );
              const besparelse = Math.round(fradragBase * (SKAT_PCT / 100));
              const reelPris = ex.total - besparelse;
              return (
                <div
                  key={ex.label}
                  className="bg-card rounded-xl border border-border p-5"
                >
                  <div className="text-sm font-semibold text-foreground mb-3">
                    {ex.label}
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Pris inkl. moms</span>
                      <span className="font-medium text-foreground">
                        {ex.total.toLocaleString("da-DK")} kr.
                      </span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Arbejdsløn ex. moms</span>
                      <span>{ex.arbejdslon.toLocaleString("da-DK")} kr.</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-medium">
                      <span>Din skattebesparelse</span>
                      <span>
                        − {besparelse.toLocaleString("da-DK")} kr.
                      </span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-border flex justify-between">
                      <span className="font-semibold text-foreground">
                        Reel pris efter fradrag
                      </span>
                      <span className="font-bold text-primary text-base">
                        {reelPris.toLocaleString("da-DK")} kr.
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link href="/priser">
              <Button className="gap-2 font-semibold">
                <Calculator className="h-4 w-4" />
                Prøv vores prisberegner
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Satser tabel ─── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Servicefradrag satser 2025–2027
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    År
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">
                    Maks. pr. person
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">
                    Maks. par (2 pers.)
                  </th>
                  <th className="text-right py-3 pl-4 font-semibold text-foreground">
                    Skatteværdi
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: "2025", single: 17500, double: 35000, pct: "~26%" },
                  {
                    year: "2026",
                    single: 18300,
                    double: 36600,
                    pct: "~26%",
                    highlight: true,
                  },
                  { year: "2027", single: 18300, double: 36600, pct: "~26%" },
                ].map((row) => (
                  <tr
                    key={row.year}
                    className={`border-b border-border ${
                      row.highlight
                        ? "bg-primary/5 font-medium"
                        : ""
                    }`}
                  >
                    <td className="py-3 pr-4 text-foreground">{row.year}</td>
                    <td className="py-3 px-4 text-right text-foreground">
                      {row.single.toLocaleString("da-DK")} kr.
                    </td>
                    <td className="py-3 px-4 text-right text-foreground">
                      {row.double.toLocaleString("da-DK")} kr.
                    </td>
                    <td className="py-3 pl-4 text-right text-emerald-700 dark:text-emerald-400">
                      {row.pct}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Kilde:{" "}
            <a
              href="https://skat.dk/borger/fradrag/servicefradrag/servicefradrag"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              skat.dk — Servicefradrag
            </a>
            . Satser kan ændres af Folketinget.
          </p>
        </div>
      </section>

      {/* ─── Trin-for-trin guide ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-3">
            Sådan får du servicefradrag på fliserens
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            En simpel trin-for-trin guide til at udnytte dit fradrag hos Kalles
            Algerens.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-card rounded-xl border border-border p-5 relative"
                >
                  <div className="absolute top-3 right-3 text-xs font-bold text-muted-foreground/40">
                    {i + 1}
                  </div>
                  <Icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-sans font-bold text-sm text-foreground mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="font-sans font-bold text-base text-foreground mb-3">
              Indberetning i TastSelv — trin for trin
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Log ind på{" "}
                <a
                  href="https://skat.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  skat.dk
                </a>{" "}
                med MitID
              </li>
              <li>
                Vælg <strong className="text-foreground">Forskudsopgørelsen</strong> fra
                menuen
              </li>
              <li>
                Gå til{" "}
                <strong className="text-foreground">
                  Håndværkerfradrag og Servicefradrag
                </strong>
              </li>
              <li>
                Vælg{" "}
                <strong className="text-foreground">
                  Felt 461 — Servicefradrag
                </strong>
              </li>
              <li>
                Indtast beløb (arbejdsløn inkl. moms), betalingsdato og Kalles
                Algerens&#39; CVR-nummer
              </li>
              <li>Gem din faktura som dokumentation</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ─── Betingelser ─── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Betingelser for servicefradrag
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm">
            <p>
              For at få servicefradrag på fliserens skal du opfylde følgende
              krav ifølge SKAT:
            </p>
            <ul className="space-y-3">
              {[
                "Du skal have almindelig skattepligt i Danmark og være fyldt 18 år inden udgangen af det år, hvor arbejdet udføres.",
                "Du skal bo i den bolig, hvor arbejdet udføres (helårsbolig eller fritidsbolig).",
                "Arbejdet skal betales digitalt — fx med dankort, MobilePay eller netbank. Kontant betaling giver IKKE fradrag.",
                "Du skal have en faktura med specificeret arbejdsløn, betalingsdato og leverandørens CVR-nummer.",
                "Arbejde udført i 2026 skal være betalt senest 28. februar 2027.",
                "Du kan ikke få fradrag for arbejde, du har modtaget offentligt tilskud til.",
                "Ægtefæller og samlevende kan dele fradraget — uanset hvem der har betalt.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Hvorfor Kalles Algerens ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Derfor vælger 500+ kunder Kalles Algerens
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hos Kalles Algerens sørger vi for, at du får mest muligt ud af dit
              servicefradrag. Vi sender altid en komplet faktura med specificeret
              arbejdsløn, betalingsdato og CVR-nummer — klar til indberetning i
              TastSelv.
            </p>
            <p>
              Kasper er uddannet i professionel udendørs rengøring og bruger
              skånsomt lavtryksudstyr, der renser grundigt uden at beskadige
              dine fliser. Med over 500 tilfredse kunder i hele Midtjylland er
              vi et af de mest anbefalede firmaer i regionen.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: "Faktura klar til SKAT",
                desc: "Du modtager altid en korrekt faktura med specificeret arbejdsløn og CVR-nr.",
              },
              {
                title: "Digital betaling",
                desc: "Vi accepterer MobilePay, dankort og bankoverførsel — alle godkendt af SKAT.",
              },
              {
                title: "Garanti på arbejdet",
                desc: "Vi står ved vores arbejde og tilbyder garanti på alle fliserens-opgaver.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl border border-border p-5"
              >
                <h3 className="font-sans font-bold text-sm text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Ofte stillede spørgsmål om servicefradrag
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-xl px-5"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── SEO text block ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
            Servicefradrag og fliserens — det skal du vide
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Mange boligejere overser, at professionel fliserens giver ret til
              servicefradrag. I 2026 er servicefradraget hævet til 18.300 kr.
              pr. person — en stigning fra 17.500 kr. i 2025 og hele 11.900 kr.
              i 2024. Det er altså blevet endnu mere attraktivt at investere i
              vedligeholdelse af dine udendørs arealer.
            </p>
            <p>
              Fliserensning fjerner alger, mos, snavs og misfarvning fra
              terrasser, indkørsler, gangstier og udendørs belægninger. Når
              fliser ikke vedligeholdes regelmæssigt, kan algevækst gøre
              overfladerne glatte og farlige — især i de fugtige danske
              vintermåneder. Professionel rensning forlænger desuden flisernes
              levetid og øger boligens samlede æstetik og værdi.
            </p>
            <p>
              Hos Kalles Algerens anvender vi skånsomt lavtryksudstyr i
              kombination med professionelle rengøringsmidler. I modsætning til
              højtryksrensning undgår vi at beskadige fuger, belægninger og
              overflader. Vores metode sikrer en grundig, langvarig rensning
              uden risiko for materialet.
            </p>
            <p>
              Det er vigtigt at forstå forskellen mellem servicefradrag og
              håndværkerfradrag. Servicefradraget dækker vedligeholdelse og
              rengøring — herunder fliserens, havearbejde og indendørs
              rengøring. Håndværkerfradraget (det &quot;grønne&quot; fradrag) dækker
              energirenovering som isolering, varmepumper og vinduesudskiftning.
              De to ordninger er separate, og du kan faktisk bruge begge
              samtidig, hvis du får udført begge typer arbejde.
            </p>
            <p>
              For et par kan det samlede servicefradrag i 2026 komme op på
              36.600 kr. — med en skattebesparelse på op til ca. 9.516 kr. Det
              gør professionel vedligeholdelse af boligen markant billigere. Og
              husk: fradraget gælder også for fritidsboliger, så længe de ikke
              har været udlejet.
            </p>
            <p>
              Når du bestiller fliserens hos Kalles Algerens, behøver du ikke
              bekymre dig om papirarbejdet. Vi sender en faktura, der opfylder
              alle SKATs krav — med specificeret arbejdsløn, CVR-nummer og
              betalingsdato. Du skal blot indberette beløbet i TastSelv under
              felt 461, og fradraget bliver automatisk overført til din
              årsopgørelse.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl mb-3">
            Klar til at spare på din fliserens?
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Beregn din pris på under 1 minut — inkl. servicefradrag. Eller ring
            direkte til Kasper for et uforpligtende tilbud.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/priser">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 font-semibold"
              >
                <Calculator className="h-4 w-4" />
                Beregn din pris
              </Button>
            </Link>
            <a href="tel:+4525131797">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                Ring 25 13 17 97
              </Button>
            </a>
          </div>
          <p className="text-xs text-primary-foreground/60 mt-4">
            Kilde:{" "}
            <a
              href="https://skat.dk/borger/fradrag/servicefradrag/servicefradrag"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              skat.dk
            </a>{" "}
            ·{" "}
            <a
              href="https://www.bolius.dk/her-er-servicefradraget-og-haandvaerkerfradraget-for-2025-2027-28556"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Bolius.dk
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
