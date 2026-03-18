"use client";

import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function HandelsbetingelserPageContent() {
  return (
    <div className="pt-20" data-testid="handelsbetingelser-page">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <BreadcrumbNav
          items={[
            { label: "Forside", href: "/" },
            { label: "Handelsbetingelser" },
          ]}
        />

        <h1 className="text-3xl font-bold mb-2">Handelsbetingelser</h1>
        <p className="text-muted-foreground mb-8">
          Kalles Algerens ApS &middot; CVR: 46154894
        </p>

        <div className="text-muted-foreground mb-8 leading-relaxed">
          <p className="mb-1">Vibevej 38, 7330 Brande</p>
          <p className="mb-1">Telefon: 25 13 17 97</p>
          <p className="mb-1">
            E-mail:{" "}
            <a
              href="mailto:kontakt@kaspermh.dk"
              className="underline hover:text-primary transition-colors"
            >
              kontakt@kaspermh.dk
            </a>
          </p>
          <p>
            Hjemmeside:{" "}
            <a
              href="https://kaspermh.dk"
              className="underline hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              kaspermh.dk
            </a>
          </p>
        </div>

        {/* 1. Generelt */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Generelt</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Disse handelsbetingelser gælder for alle aftaler indgået med Kalles
          Algerens ApS vedrørende fliserens. Ved accept af tilbud accepterer
          kunden samtidig disse handelsbetingelser.
        </p>

        {/* 2. Forberedelse før udførelse */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Forberedelse før udførelse
        </h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Adgangs- og parkeringsforhold
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Der skal være parkeringsmulighed tæt på ejendommen – maksimalt 50
          meter fra det fjerneste behandlingsområde samt fra vandtilslutningen.
          Hvis dette ikke er muligt, skal det oplyses inden arbejdets start.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Fri adgang til arbejdsområdet
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Der skal være fri og uhindret adgang til det område, der skal
          behandles.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Adgang til vand</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Der skal være adgang til en fungerende udendørs vandhane med
          tilstrækkeligt vandtryk. Eventuelle forhold omkring lavt vandtryk skal
          oplyses inden arbejdets påbegyndelse.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Fjernelse af genstande
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Alle løse genstande såsom havemøbler, krukker, grill, biler, legetøj
          m.m. skal være fjernet minimum 5 meter fra arbejdsområdet inden
          opstart.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Ukrudt og beplantning
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Større ukrudt, græskanter, buske, blomster og øvrig beplantning langs
          arbejdsområdet skal være fjernet eller forsvarligt afdækket, så
          arbejdet kan udføres uhindret og uden risiko for skade.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Manglende klargøring
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Såfremt ovenstående ikke er opfyldt ved ankomst, forbeholder vi os
          retten til at opkræve ekstra betaling for nødvendig klargøring eller
          udsætte opgaven.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Indendørs vandtilslutning og ansvar
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Ved brug af indendørs vandtilslutning sker dette udelukkende på
          kundens ansvar. Kalles Algerens ApS kan ikke holdes ansvarlig for
          eventuelle vandskader, eller følgeskader, der måtte opstå i
          forbindelse med tilslutning eller brug af kundens installationer.
          Kunden er ansvarlig for, at alle koblinger og installationer er tætte
          og forsvarlige før, under og efter arbejdets udførelse. Såfremt
          slanger føres gennem boligen, er kunden ansvarlig for korrekt
          afdækning af gulve, vægge og inventar.
        </p>

        {/* 3. Afbestilling eller udsættelse af aftale */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Afbestilling eller udsættelse af aftale
        </h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">3.1 Meddelelse</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Ønsker kunden at afbestille eller udsætte en indgået aftale, skal
          dette ske skriftligt via e-mail til:{" "}
          <a
            href="mailto:kontakt@kaspermh.dk"
            className="underline hover:text-primary transition-colors"
          >
            kontakt@kaspermh.dk
          </a>
          . Afbestilling eller udsættelse er først gældende, når den er
          skriftligt bekræftet af Kalles Algerens ApS.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          3.2 Afbestilling gebyrer
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>
            Indenfor 14 dage efter aftaleindgåelse (fortrydelsesret): 0 kr.
          </li>
          <li>Senest 20 dage før: 1.000 kr. inkl. moms</li>
          <li>3–19 dage før: 1.500 kr. inkl. moms</li>
          <li>1–2 dage før: 2.000 kr. inkl. moms</li>
          <li>På dagen: 100% af den aftalte pris</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          3.3 Udsættelse gebyrer
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>Senest 14 dage før: 0 kr.</li>
          <li>7–13 dage før: 500 kr.</li>
          <li>1–6 dage før: 750 kr.</li>
          <li>På dagen: 1.500 kr.</li>
        </ul>

        {/* 4. Ansvarsbegrænsning ved rensning og højtryksarbejde */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Ansvarsbegrænsning ved rensning og højtryksarbejde
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kalles Algerens ApS kan ikke holdes ansvarlig for følgende forhold,
          der kan opstå i forbindelse med rensning og højtryksarbejde:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>
            Bevægelse eller sætning i belægninger, fliser eller andre overflader
            som følge af rensning med højtryk.
          </li>
          <li>
            Vandindtrængning i bygninger, kældre eller andre konstruktioner, der
            skyldes utætheder eller manglende fugning.
          </li>
          <li>
            Skader på elektriske installationer, lamper, stikkontakter eller
            lignende, der er placeret i eller nær arbejdsområdet.
          </li>
          <li>
            Behov for efterfølgende rengøring af facader, vinduer, døre eller
            andre tilstødende overflader som følge af sprøjt og afløb fra
            rensningen.
          </li>
          <li>
            Afløbs- og kloakproblemer, herunder tilstopning, der opstår som
            følge af løsnet materiale under rensningen.
          </li>
          <li>
            Kalkaflejringer eller farveforskel, der bliver synlige efter
            fjernelse af belægninger (alger, mos, lav m.v.).
          </li>
          <li>
            Porøse eller beskadigede fliser/sten, der går i stykker under
            rensning med højtryk, når skaderne skyldes forudgående slid, frost
            eller dårlig kvalitet.
          </li>
        </ul>

        {/* 5. Særlige forhold ved rensning af belægninger */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Særlige forhold ved rensning af belægninger
        </h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Sorte lav</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Sorte lav (fx skorpelav) er en organisme, der vokser langsomt og
          binder sig dybt i overfladen. Det kan sjældent fjernes fuldstændigt
          ved første behandling. I mange tilfælde kræver det gentagne
          behandlinger over tid. Resultatet afhænger af overfladens type og
          lavets omfang.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Græs/mos/ukrudt i fuger
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Rensning fjerner synligt græs, mos og ukrudt fra fuger, men rødder
          kan sidde dybt og vokse tilbage. Fuld fjernelse af rodnet kan kræve
          opfølgende behandling eller manuel lugning.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Kørespor og trykmærker
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Misfarvninger forårsaget af dæk, tunge køretøjer eller langvarig
          belastning kan være permanente og kan ikke altid fjernes ved rensning.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Olie- og fedtpletter
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Olie- og fedtpletter, der har trængt dybt ind i overfladen, kan
          sjældent fjernes fuldstændigt med højtryksrensning alene. I nogle
          tilfælde kan specialbehandling reducere synligheden, men fuld
          fjernelse kan ikke garanteres.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Rustmisfarvninger</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Rustpletter, der stammer fra metal, gødning eller andre
          jernholdige kilder, kan være permanente og kan ikke altid fjernes
          ved rensning.
        </p>

        {/* 6. Force majeure */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Force majeure
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kalles Algerens ApS er ikke ansvarlig for forsinkelse eller manglende
          opfyldelse af aftalen, såfremt dette skyldes omstændigheder uden for
          virksomhedens kontrol, herunder men ikke begrænset til
          naturkatastrofer, ekstreme vejrforhold, brand, strejke, lockout,
          pandemi, myndighedspåbud eller andre force majeure-lignende
          hændelser.
        </p>

        {/* 7. Reklamation */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Reklamation</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Eventuelle reklamationer skal fremsættes skriftligt inden 5
          hverdage efter arbejdets udførelse. Reklamationen skal indeholde en
          beskrivelse af det påståede problem samt fotodokumentation.
          Reklamation sendes til:{" "}
          <a
            href="mailto:kontakt@kaspermh.dk"
            className="underline hover:text-primary transition-colors"
          >
            kontakt@kaspermh.dk
          </a>
          .
        </p>

        {/* 8. Ansvar og forsikring */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Ansvar og forsikring
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kalles Algerens ApS er ansvarlig i henhold til dansk rets almindelige
          regler. Virksomheden er dækket af en erhvervsansvarsforsikring, der
          dækker skader forvoldt i forbindelse med udførelsen af arbejdet.
        </p>

        {/* 9. Garantier */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Garantier</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Anti-flisepest garanti
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kalles Algerens ApS tilbyder en anti-flisepest garanti på udførte
          algebehandlinger. Garantien dækker mod genkomst af alger og mos i
          den aftalte garantiperiode, forudsat at aftalen om eventuel
          serviceaftale overholdes. Garantien dækker ikke skader forårsaget af
          force majeure, ændrede omgivelser (fx ny beplantning, byggeri eller
          ændret afvandingsforhold) eller manglende vedligeholdelse.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Tryghedsgaranti</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Er kunden ikke tilfreds med resultatet, tilbyder vi at komme tilbage
          og udbedre det påpegede inden for rimelig tid. Tryghedsgarantien
          forudsætter, at kunden har reklameret rettidigt (jf. punkt 7) og at
          forholdet er omfattet af den udførte ydelse.
        </p>

        {/* 10. Serviceaftale */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Serviceaftale
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kunden kan indgå en årlig serviceaftale med Kalles Algerens ApS.
          Serviceaftalen sikrer løbende vedligeholdelse af de behandlede
          overflader og er en forudsætning for at opretholde eventuelle
          garantier. Serviceaftalen fornyes automatisk hvert år, medmindre den
          opsiges skriftligt senest 30 dage før fornyelsesdatoen.
        </p>

        {/* 11. Betaling og betalingsforpligtelse */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          11. Betaling og betalingsforpligtelse
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Betaling forfalder 4 dage efter fakturadatoen, medmindre andet er
          skriftligt aftalt. Ved forsinket betaling pålægges renter i henhold
          til renteloven fra forfaldsdagen. Der opkræves et rykkergebyr på 100
          kr. inkl. moms pr. rykkerskrivelse. Ved fortsat manglende betaling
          forbeholder Kalles Algerens ApS sig retten til at overdrage fordringen
          til inkasso.
        </p>

        {/* 12. Billeder og markedsføring */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          12. Billeder og markedsføring
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kalles Algerens ApS forbeholder sig retten til at fotografere udførte
          opgaver og anvende billeder i markedsføringsøjemed, herunder på
          hjemmeside, sociale medier og trykt materiale. Billederne vil ikke
          indeholde personlige oplysninger, medmindre der er indhentet
          udtrykkelig samtykke fra kunden.
        </p>

        {/* 13. Areal og prisjustering */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          13. Areal og prisjustering
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Det oplyste areal i tilbuddet er estimeret på baggrund af kundens
          oplysninger eller en visuel vurdering. Afviger det faktiske areal
          med mere end 5% fra det estimerede, forbeholder Kalles Algerens ApS
          sig retten til at justere prisen tilsvarende. Kunden vil blive
          informeret herom hurtigst muligt.
        </p>

        {/* 14. Lovvalg og værneting */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          14. Lovvalg og værneting
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Enhver tvist mellem kunden og Kalles Algerens ApS afgøres efter dansk
          ret. Værneting er Retten i Herning, medmindre andet følger af
          ufravigelige procesregler.
        </p>

        {/* 15. Persondata */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">15. Persondata</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Kalles Algerens ApS behandler personoplysninger i overensstemmelse med
          gældende databeskyttelseslovgivning (GDPR). Vi indsamler og behandler
          kun de oplysninger, der er nødvendige for at opfylde aftalen med
          kunden. Persondata opbevares sikkert og videregives ikke til
          tredjepart, medmindre det er nødvendigt for at opfylde aftalen eller
          lovkrav. Kunden har ret til at få indsigt i, rette eller slette sine
          personoplysninger ved henvendelse til{" "}
          <a
            href="mailto:kontakt@kaspermh.dk"
            className="underline hover:text-primary transition-colors"
          >
            kontakt@kaspermh.dk
          </a>
          .
        </p>

        {/* 16. Ejendomsforbehold */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          16. Ejendomsforbehold
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Eventuelt udleveret materiale, udstyr eller produkter forbliver Kalles
          Algerens ApS&apos; ejendom, indtil fuld betaling er modtaget.
        </p>

        {/* 17. Misligholdelse ved manglende adgang */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          17. Misligholdelse ved manglende adgang
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Såfremt kunden ikke sikrer adgang til ejendommen på det aftalte
          tidspunkt, og arbejdet ikke kan påbegyndes, betragtes dette som en
          afbestilling på dagen (jf. punkt 3.2), og kunden faktureres 100% af
          den aftalte pris.
        </p>

        {/* 18. Fortrydelsesret */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          18. Fortrydelsesret
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I henhold til forbrugeraftaleloven har forbrugere 14 dages
          fortrydelsesret fra aftalens indgåelse. Fortrydelsesretten bortfalder,
          hvis arbejdet er påbegyndt med kundens udtrykkelige samtykke inden
          fortrydelsesfristens udløb. Ønsker kunden at fortryde, skal dette
          meddeles skriftligt til{" "}
          <a
            href="mailto:kontakt@kaspermh.dk"
            className="underline hover:text-primary transition-colors"
          >
            kontakt@kaspermh.dk
          </a>{" "}
          inden fristens udløb.
        </p>

        {/* 19. Arbejdet anses som godkendt */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          19. Arbejdet anses som godkendt
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Arbejdet anses som godkendt af kunden, såfremt der ikke er fremsat
          skriftlig reklamation inden 5 hverdage efter arbejdets færdiggørelse
          (jf. punkt 7). Efter denne frist kan der ikke reklameres over synlige
          fejl eller mangler.
        </p>

        {/* 20. Ændring af aftale og tillægsarbejde */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          20. Ændring af aftale og tillægsarbejde
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Ønsker kunden ændringer i den aftalte opgave eller tillægsarbejde,
          skal dette aftales skriftligt inden arbejdets påbegyndelse.
          Tillægsarbejde faktureres separat og er ikke omfattet af den
          oprindelige aftale, medmindre andet er skriftligt aftalt.
        </p>

        {/* Sidst opdateret */}
        <hr className="mt-12 mb-6 border-border" />
        <p className="text-sm text-muted-foreground">
          Sidst opdateret: 24. februar 2026
        </p>
      </div>
    </div>
  );
}
