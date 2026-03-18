"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
} from "lucide-react";
import {
  getArticleBySlug,
  getRelatedArticles,
  formatDate,
} from "@/lib/blog-data";

// ─── Article Bodies ─────────────────────────────────

function ArticleHvornaarFliserens() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Fliser er en af de mest populære belægninger i danske haver og
        indkørsler. Men med tiden samler der sig alger, mos og snavs, som ikke
        bare ser grimt ud — det kan også gøre dine fliser glatte og farlige.
        Spørgsmålet er: hvornår er det tid til at få dem renset professionelt?
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Tegn på at dine fliser trænger til rens
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Der er flere tydelige tegn, du bør holde øje med. Grønne eller sorte
        belægninger er det mest oplagte. Når du kan se grønt mos, mørke alger
        eller en grålig film på fliserne, er det et klart tegn på, at de har
        brug for opmærksomhed. Men der er også mere subtile tegn.
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Glatte fliser:</strong> Hvis fliserne føles glatte, når de er
          våde, skyldes det typisk alger og belægninger. Det er en
          sikkerhedsrisiko, især for børn og ældre.
        </li>
        <li>
          <strong>Misfarving:</strong> Fliser der engang var lyse, men nu
          fremstår mørke eller ujævnt farvede, har sandsynligvis belægninger i
          porerne.
        </li>
        <li>
          <strong>Flisepest:</strong> Sorte pletter der spreder sig på
          betonfliser er et tegn på flisepest — en biologisk nedbrydning
          forårsaget af alger og svampe.
        </li>
        <li>
          <strong>Ukrudt i fugerne:</strong> Når fugerne er fyldt med mos og
          ukrudt, tyder det på, at hele fladearealet trænger til en grundig
          rensning.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvornår på året er bedst til fliserens?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Det optimale tidspunkt for professionel fliserens er forår eller tidlig
        efterår. Om foråret fjerner du vinterens belægninger og gør terrassen
        klar til sommersæsonen. I efteråret sikrer du, at fliserne er rene og
        behandlede inden vinteren sætter ind.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Hos <strong>Kalles Algerens</strong> arbejder vi dog året rundt. Selv om
        foråret er højsæson, kan vi sagtens rense dine fliser om sommeren eller
        i milde vinterperioder. Det vigtigste er, at temperaturen er over
        frysepunktet, så vand og rensemidler kan arbejde optimalt.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Mange boligejere i{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-ikast"
          className="text-primary hover:underline font-medium"
        >
          Ikast
        </Link>{" "}
        og{" "}
        <Link
          href="/fliserens-i-brande"
          className="text-primary hover:underline font-medium"
        >
          Brande
        </Link>{" "}
        vælger at bestille en fliserens om foråret, så de kan nyde en ren
        terrasse hele sommeren. Vi anbefaler at booke i god tid, da foråret er
        vores travleste periode.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Professionel fliserens vs. gør-det-selv
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Du kan naturligvis leje en højtryksrenser og prøve selv. Men der er
        flere grunde til, at professionel fliserens giver et bedre resultat. For
        det første bruger vi{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          varmt vand under højt tryk
        </Link>
        , som løsner alger og snavs langt mere effektivt end koldt vand. Varmt
        vand trænger ned i flisernes porer og dræber algesporer, som ellers
        ville vokse tilbage inden for få uger.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        For det andet afslutter vi altid med en{" "}
        <Link
          href="/algebehandling-af-tag"
          className="text-primary hover:underline font-medium"
        >
          algebehandling
        </Link>
        , der forebygger ny algevækst i op til flere år. Uden denne behandling
        vil algerne typisk vende tilbage inden for 3-6 måneder efter en
        almindelig højtryksrens.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Endelig er der risikoen for at beskadige fliserne. En højtryksrenser i
        forkerte hænder kan ødelægge fugerne, ridse fliseoverfladen eller slå
        kanter af. Professionelt udstyr kombineret med erfaring sikrer, at dine
        fliser bliver rene uden at tage skade.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad koster det at få renset sine fliser?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos Kalles Algerens starter{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          fliserens fra 35 kr. pr. m²
        </Link>{" "}
        inklusiv algebehandling. Den endelige pris afhænger af arealets
        størrelse, tilstand og adgangsforhold. Vi tilbyder altid et gratis og
        uforpligtende tilbud, så du ved præcis, hvad det koster, inden arbejdet
        begynder.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Vil du spare endnu mere? Så kan du og din nabo bestille sammen og få{" "}
        <Link
          href="/nabo-rabat"
          className="text-primary hover:underline font-medium"
        >
          nabo-rabat
        </Link>
        . Vi sparer køretid, og den besparelse giver vi videre til jer.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Konklusion
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hvis dine fliser har grønne belægninger, føles glatte eller bare ikke
        ser pæne ud længere, er det tid til en professionel rensning. Jo længere
        du venter, jo sværere bliver det at fjerne belægningerne — og jo større
        er risikoen for permanent skade. Forår og efterår er de bedste
        tidspunkter, men vi arbejder året rundt.
      </p>
    </div>
  );
}

function ArticleForskelAlgebehandlingFliserens() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Mange forveksler algebehandling med fliserens — eller tror, det er det
        samme. Men der er en vigtig forskel, som påvirker både resultatet og
        holdbarheden. Her forklarer vi, hvad hvert begreb dækker over, og
        hvornår du skal bruge hvilket.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad er fliserens?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          Fliserens
        </Link>{" "}
        er den fysiske rengøring af dine fliser. Det handler om at fjerne
        synligt snavs, alger, mos og belægninger fra overfladen. Hos Kalles
        Algerens bruger vi varmt vand under højt tryk (op til 250 bar), som
        løsner og skyller alt snavs væk fra flisernes overflade og porer.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Resultatet er umiddelbart synligt: fliserne ser ud som nye, fugerne er
        rene, og hele arealet fremstår friskt og velholdt. Men her stopper mange
        — og det er en fejl. For selv om fliserne ser rene ud, sidder der stadig
        algesporer i porerne, som bare venter på at vokse igen.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad er algebehandling?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link
          href="/algebehandling-af-tag"
          className="text-primary hover:underline font-medium"
        >
          Algebehandling
        </Link>{" "}
        er en kemisk behandling, der dræber algesporer og forebygger ny
        algevækst. Vi bruger miljøgodkendt Neutralon, som er godkendt af
        Miljøstyrelsen og biologisk nedbrydelig. Behandlingen trænger ned i
        materialet og arbejder over tid, så alger og mos ikke vokser tilbage.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Algebehandling alene fjerner ikke det synlige snavs — det forebygger, at
        det kommer tilbage. Derfor giver det mest mening at kombinere de to
        behandlinger: først en grundig fliserens, derefter en algebehandling som
        afslutning.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvornår har du brug for hvad?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Det afhænger af dine flisers tilstand og din situation:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Synligt snavs og belægninger:</strong> Du har brug for en
          fliserens. Hvis fliserne er misfarvede, glatte eller har synlige alger
          og mos, skal de renses fysisk først.
        </li>
        <li>
          <strong>Nyligt rensede fliser:</strong> Hvis fliserne allerede er rene,
          men du vil forhindre alger i at komme tilbage, er en ren
          algebehandling nok.
        </li>
        <li>
          <strong>Langtidsbeskyttelse:</strong> For det bedste resultat anbefaler
          vi altid kombinationen: fliserens + algebehandling. Det er også det,
          der er inkluderet i vores standardpakke.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Kombination giver det bedste resultat
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos Kalles Algerens inkluderer vi altid algebehandling i vores{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          fliserens-pakke
        </Link>
        . Det betyder, at du ikke betaler ekstra for behandlingen — den er en
        del af den samlede service. Prisen starter fra{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          35 kr. pr. m²
        </Link>
        , og du får både den fysiske rensning og den forebyggende behandling.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        For tage og facader er algebehandling ofte tilstrækkelig som selvstændig
        service. Et tag der ikke har synlige belægninger, men som begynder at få
        grønne skær, kan behandles med algebehandling alene for 995 kr. (op til
        200 m²). Det forlænger tagets levetid og forhindrer, at alger og mos
        sætter sig fast.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Serviceaftale for vedvarende beskyttelse
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Vil du helt undgå at tænke over det? Så kan du tegne en serviceaftale
        med årlig algebehandling. Det sikrer, at dine overflader altid er
        beskyttede — og du får op til 10 års afskalningsgaranti. Vi kommer forbi
        en gang om året og behandler fliserne, så de holder sig pæne og rene.
        Det er den nemmeste måde at beskytte din investering på.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Boligejere i{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-ikast"
          className="text-primary hover:underline font-medium"
        >
          Ikast
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-brande"
          className="text-primary hover:underline font-medium"
        >
          Brande
        </Link>{" "}
        og resten af Midtjylland benytter sig i stigende grad af
        serviceaftaler. Det er en smart investering, der sparer dig for dyrere
        rensninger på sigt.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Opsummering
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Fliserens fjerner det synlige snavs. Algebehandling forhindrer, at det
        kommer tilbage. Sammen giver de det bedste og mest holdbare resultat.
        Hos Kalles Algerens er algebehandling altid inkluderet — du behøver ikke
        vælge det ene eller det andet.
      </p>
    </div>
  );
}

function ArticleVedligeholdelseIndkoersel() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Din indkørsel er det første, gæster ser, når de besøger dig. Men det er
        også en af de mest udsatte overflader på din ejendom — den får al
        trafikken, al nedbøren og alle bladene. Her er en komplet guide til,
        hvordan du holder din indkørsel i topform hele året.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Sæsonbaseret vedligeholdelse
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        God vedligeholdelse af din indkørsel starter med at forstå, hvad de
        forskellige årstider gør ved overfladen. Hvert kvartal har sine
        udfordringer — og sine muligheder.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Forår: Tid til hovedrengøring
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Foråret er det bedste tidspunkt at give indkørslen en grundig omgang.
        Vinteren har efterladt salt, grus og fugt, som har skabt perfekte
        betingelser for algevækst. Start med at feje løst snavs og blade væk.
        Derefter anbefaler vi en professionel{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          fliserens med varmt vand
        </Link>
        , der fjerner vinterens belægninger og gør fliserne klar til sommeren.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Sommer: Forebyggelse og nydelse
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Om sommeren handler det primært om at nyde en ren indkørsel og forebygge
        problemer. Hold fugerne fri for ukrudt ved at fjerne det, inden det
        sætter rødder. Overvej{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          imprægnering
        </Link>{" "}
        (fra 10 kr./m²), som reducerer vandoptagelsen og gør det sværere for
        alger at få fodfæste.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Efterår: Forbered vinteren
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Fjern blade og organisk materiale regelmæssigt — det er fødegrundlaget
        for alger og mos. Efteråret er også et godt tidspunkt for en
        algebehandling, hvis du ikke fik det gjort om foråret. Behandlingen har
        tid til at virke henover vinteren, så fliserne er beskyttede, når
        foråret kommer.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Vinter: Skånsom behandling
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Om vinteren bør du undgå at bruge for meget vejsalt direkte på fliserne,
        da det kan nedbryde overfladen over tid. Brug salt med måde, og fej
        overskydende salt væk, når frosten er ovre. Undgå at bruge
        metalskrabere eller skarpe redskaber til at fjerne is — det ridser
        fliserne.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Forebyggelse af algevækst
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Alger trives i fugtige, skyggefulde miljøer. Du kan reducere algevæksten
        ved at sikre god dræning, trimme buske og træer der skygger for
        indkørslen, og holde overfladen ren for organisk materiale. Men selv med
        den bedste forebyggelse vil alger til sidst komme — det er en naturlig
        proces i det danske klima.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Professionel{" "}
        <Link
          href="/algebehandling-af-tag"
          className="text-primary hover:underline font-medium"
        >
          algebehandling
        </Link>{" "}
        er den mest effektive forebyggelse. Den miljøgodkendte behandling
        trænger ned i materialets porer og hæmmer algevækst i op til flere år.
        Det er en investering, der sparer dig for hyppige rensninger.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvornår skal du ringe til en professionel?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Selvom du kan gøre meget selv med en kost og en haveslange, er der
        situationer, hvor professionel hjælp giver det bedste resultat:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          Udbredte alge- og mosbelægninger der ikke forsvinder med almindelig
          rengøring
        </li>
        <li>Flisepest (sorte pletter) der spreder sig</li>
        <li>Glatte fliser der udgør en sikkerhedsrisiko</li>
        <li>Fliser der ikke har været renset i mere end 2-3 år</li>
        <li>Hvis du ønsker imprægnering for langvarig beskyttelse</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Hos <strong>Kalles Algerens</strong> dækker vi hele Midtjylland med base
        i Brande. Uanset om du bor i{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-give"
          className="text-primary hover:underline font-medium"
        >
          Give
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-billund"
          className="text-primary hover:underline font-medium"
        >
          Billund
        </Link>{" "}
        eller omegn — vi kører gerne ud og giver et gratis tilbud.{" "}
        <Link
          href="/kontakt"
          className="text-primary hover:underline font-medium"
        >
          Kontakt os
        </Link>{" "}
        for en uforpligtende snak.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Den korte tjekliste
      </h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          Fej regelmæssigt — blade og snavs er fødegrundlag for alger
        </li>
        <li>Fjern ukrudt fra fugerne, inden det sætter rødder</li>
        <li>Få en professionel rensning mindst hvert 2.-3. år</li>
        <li>
          Overvej algebehandling og imprægnering for langvarig beskyttelse
        </li>
        <li>
          Bestil sammen med naboen og spar med{" "}
          <Link
            href="/nabo-rabat"
            className="text-primary hover:underline font-medium"
          >
            nabo-rabat
          </Link>
        </li>
      </ul>
    </div>
  );
}

function ArticleTegnTagRens() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Dit tag beskytter hele din bolig mod vind og vejr. Men det er også den
        overflade, der er mest udsat for naturens kræfter. Alger, mos og lav
        sætter sig stille og roligt fast — og hvis du ikke gør noget, kan det
        ende med dyre reparationer. Her er fem tegn på, at det er tid til en
        professionel tagrens.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        1. Grønne eller sorte pletter på tagpladerne
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Det mest synlige tegn er misfarvning. Hvis du kan se grønne, sorte eller
        brune pletter på taget, er det alger, mos eller lav. Det starter typisk
        på nordsiden eller i skyggefulde områder, hvor fugt ophober sig. I
        starten er det måske bare et par pletter, men de spreder sig hurtigt,
        hvis de ikke behandles.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Alger og mos holder på fugt, som trænger ind i tagpladerne og
        accelererer nedbrydningen. Over tid kan det føre til porøse tagplader,
        der revner i frost. En professionel{" "}
        <Link
          href="/tagrens"
          className="text-primary hover:underline font-medium"
        >
          tagrens
        </Link>{" "}
        fjerner belægningerne og stopper nedbrydningen, inden det bliver et dyrt
        problem.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        2. Tilstoppede tagrender
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hvis dine tagrender konstant er tilstoppede med mos og snavs, er det et
        tegn på, at taget har betydelige belægninger. Mos og alger løsner sig
        fra taget og samler sig i tagrenden, hvor det blokerer for
        vandafledningen. Resultatet er overløb, som kan føre til fugtskader på
        facaden og fundamentet.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Hos Kalles Algerens inkluderer vores tagrens-pakke altid rensning af
        tagrender. Det sikrer, at hele systemet fungerer korrekt efter
        behandlingen.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        3. Løse eller porøse tagplader
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Når mos har siddet på taget i lang tid, kan rødderne trænge ind i
        tagpladernes overflade og forårsage afskalning. Hvis du kan se, at
        tagpladerne er begyndt at flage eller se ujævne ud, er det et alvorligt
        tegn. Porøse tagplader optager mere vand, som fryser og tør — en cyklus
        der langsomt bryder pladen ned.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        I dette tilfælde er det vigtigt at handle hurtigt. En professionel
        tagrens med efterfølgende{" "}
        <Link
          href="/algebehandling-af-tag"
          className="text-primary hover:underline font-medium"
        >
          algebehandling
        </Link>{" "}
        og eventuelt tagmaling kan forlænge tagets levetid med mange år og spare
        dig for en dyr udskiftning.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        4. Taget ser ældre ud end det er
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Har du et relativt nyt tag, der allerede ser slidt og gammelt ud? Det
        skyldes næsten altid belægninger. Alger og mos ændrer tagets farve og
        giver det et forsømt udseende. Det påvirker ikke bare dit hjem æstetisk
        — det kan også reducere boligens værdi.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        En tagrens med maling kan transformere dit tag fuldstændigt. Hos Kalles
        Algerens tilbyder vi komplet{" "}
        <Link
          href="/tagrens"
          className="text-primary hover:underline font-medium"
        >
          tagrens med tagmaling fra 10.997 kr.
        </Link>
        , som inkluderer mekanisk rensning, algebehandling, rensning af
        tagrender og to lag kvalitets tagmaling. Det giver taget nyt liv og
        beskytter det i mange år frem.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        5. Det er mere end 5 år siden sidste behandling
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Selv om dit tag stadig ser nogenlunde ud, anbefaler eksperter en
        inspektion og eventuel behandling hvert 3.-5. år. I det danske klima med
        megen nedbør og fugt er det uundgåeligt, at alger og mos etablerer sig
        over tid. Regelmæssig vedligeholdelse er langt billigere end en fuld
        tagrenovering.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ifølge{" "}
        <a
          href="https://www.bolius.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Bolius.dk
        </a>{" "}
        bør man inspicere sit tag mindst en gang om året og handle på eventuelle
        problemer, inden de udvikler sig.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad indebærer en professionel tagrens?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos Kalles Algerens følger vi en grundig 4-trins proces:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Mekanisk rensning:</strong> Vi fjerner mos, alger og snavs med
          kontrolleret højtryk, så taget bliver helt rent uden skade.
        </li>
        <li>
          <strong>Inspektion og reparation:</strong> Vi gennemgår taget for
          revner, løse plader og porøse områder. Mindre reparationer udføres med
          det samme.
        </li>
        <li>
          <strong>Tagmaling:</strong> To lag dansk kvalitets tagmaling, der er
          diffusionsåben og beskytter mod UV-stråler, regn og vind.
        </li>
        <li>
          <strong>Kvalitetskontrol:</strong> Vi afslutter med en grundig
          gennemgang og giver dig rådgivning om vedligeholdelse.
        </li>
      </ol>
      <p className="text-muted-foreground leading-relaxed">
        Vi servicerer boligejere i hele Midtjylland — fra{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>{" "}
        og{" "}
        <Link
          href="/fliserens-i-ikast"
          className="text-primary hover:underline font-medium"
        >
          Ikast
        </Link>{" "}
        til{" "}
        <Link
          href="/fliserens-i-brande"
          className="text-primary hover:underline font-medium"
        >
          Brande
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-give"
          className="text-primary hover:underline font-medium"
        >
          Give
        </Link>{" "}
        og{" "}
        <Link
          href="/fliserens-i-billund"
          className="text-primary hover:underline font-medium"
        >
          Billund
        </Link>
        .{" "}
        <Link
          href="/kontakt"
          className="text-primary hover:underline font-medium"
        >
          Kontakt os
        </Link>{" "}
        for et gratis tilbud på tagrens.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Konklusion
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Dit tag er en stor investering, og regelmæssig vedligeholdelse er nøglen
        til at beskytte den. Hvis du kan genkende et eller flere af de fem tegn
        ovenfor, er det tid til at handle. Jo hurtigere du tager fat, jo mere
        sparer du i det lange løb.{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          Se vores priser
        </Link>{" "}
        eller ring til os på 25 13 17 97 for en uforpligtende snak.
      </p>
    </div>
  );
}

function ArticleImpragnering() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Når du har fået dine fliser professionelt renset, står du ofte over for
        et tilvalg: imprægnering. Men er det pengene værd? Hvad gør det
        egentlig? Og hvornår giver det mening? Her giver vi dig det fulde
        overblik, så du kan træffe en informeret beslutning.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad er imprægnering?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Imprægnering er en beskyttende behandling, der påføres fliserne efter
        rensning. Produktet trænger ned i flisens porer og danner en usynlig
        barriere, der reducerer vandoptagelsen markant. Fliserne ser stadig
        naturlige ud — de får ikke en blank eller kunstig overflade. I stedet
        bliver de simpelthen mere modstandsdygtige over for fugt, snavs og
        biologisk vækst.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Tænk på det som en regnjakke til dine fliser. Vand perler af i stedet
        for at trænge ind, og det gør det sværere for alger, mos og skimmel at
        få fodfæste.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Fordele ved imprægnering
      </h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Reduceret vandoptagelse:</strong> Fliser der optager mindre
          vand, er mere modstandsdygtige over for frost og nedbrydning. Det er
          særligt vigtigt i Danmark, hvor vi har mange fryse-tø-cykler om
          vinteren.
        </li>
        <li>
          <strong>Langsommere algevækst:</strong> Når fugt ikke kan trænge ned i
          porerne, har alger og mos sværere ved at etablere sig. Det betyder, at
          fliserne holder sig rene længere.
        </li>
        <li>
          <strong>Nemmere rengøring:</strong> Snavs sidder mindre fast på
          imprægnerede fliser. En almindelig fejning eller regnbyge fjerner
          mere, end det ville på ubehandlede fliser.
        </li>
        <li>
          <strong>Forlænget levetid:</strong> Ved at reducere fugtindtrængning
          beskytter du fliserne mod frostsprængning og flisepest, som er de to
          mest almindelige årsager til at fliser skal udskiftes.
        </li>
        <li>
          <strong>Bevarelse af farve:</strong> Imprægnerede fliser beholder
          deres originale farve længere, fordi UV-stråler og fugt har sværere
          ved at nedbryde pigmenterne.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad koster imprægnering?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos <strong>Kalles Algerens</strong> tilbyder vi imprægnering som tilkøb
        til vores{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          fliserens
        </Link>{" "}
        og{" "}
        <Link
          href="/traeterrasse-rens"
          className="text-primary hover:underline font-medium"
        >
          træterrasse rens
        </Link>
        . Prisen starter fra 10 kr. pr. m², hvilket gør det til en overkommelig
        investering. For en typisk terrasse på 50 m² er det altså kun 500 kr.
        ekstra.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Set i forhold til, at imprægnering kan forlænge tiden mellem
        professionelle rensninger med 1-2 år, er det en investering, der hurtigt
        tjener sig ind. Se alle vores{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          priser
        </Link>{" "}
        for et samlet overblik.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvor længe holder imprægnering?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Holdbarheden afhænger af flere faktorer: flisetypen, belastningsgraden
        og klimaet. Generelt kan du forvente, at en imprægnering holder i 3-5 år
        på en normalt belastet terrasse. En indkørsel med daglig biltrafik vil
        naturligvis slides hurtigere end en terrasse, der primært bruges om
        sommeren.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Betonfliser optager typisk mere imprægnering end natursten, da de er
        mere porøse. Det betyder, at behandlingen ofte holder lidt længere på
        betonfliser. Granit og andre tætte natursten har mindre porositet og
        optager mindre produkt — her kan effekten være kortere.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvornår giver imprægnering mening?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Imprægnering er særligt relevant i disse situationer:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          Nye eller nyligt rensede fliser, hvor du vil beskytte investeringen
        </li>
        <li>
          Skyggefulde terrasser eller indkørsler, hvor fugt er et vedvarende
          problem
        </li>
        <li>
          Områder med megen trafik (indkørsler, gangstier), hvor sliddet er
          større
        </li>
        <li>Lys-farvede fliser, hvor misfarvning er særligt synlig</li>
        <li>Betonfliser, der er særligt sårbare over for flisepest</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Omvendt er imprægnering mindre nødvendig, hvis dine fliser ligger i et
        solrigt, velventileret område med god dræning. Her tørrer fliserne
        hurtigt efter regn, og alger har sværere ved at etablere sig.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Timing er vigtig
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Imprægnering bør altid påføres på rene, tørre fliser. Derfor anbefaler
        vi, at imprægneringen foretages et par dage efter selve rensningen, når
        fliserne er helt tørre. Hos Kalles Algerens koordinerer vi dette, så du
        ikke behøver at tænke over det — vi finder det rette tidspunkt baseret
        på vejret og dine flisers tilstand.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Vores anbefaling
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        For de fleste boligejere i{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-ikast"
          className="text-primary hover:underline font-medium"
        >
          Ikast
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-brande"
          className="text-primary hover:underline font-medium"
        >
          Brande
        </Link>{" "}
        og resten af Midtjylland er imprægnering en god investering. Det danske
        klima med megen nedbør og frost gør fliser særligt udsatte, og
        imprægneringen giver en ekstra beskyttelse, der forlænger tiden mellem
        rensninger.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Er du i tvivl om, hvorvidt imprægnering er det rigtige for dine fliser?{" "}
        <Link
          href="/kontakt"
          className="text-primary hover:underline font-medium"
        >
          Kontakt os
        </Link>{" "}
        for en uforpligtende vurdering. Vi kigger gerne på dine fliser og giver
        en ærlig anbefaling — helt gratis.
      </p>
    </div>
  );
}

function ArticleFlisesandGuide() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Flisesand er noget af det mest oversete materiale i hele haven. Det
        ligger der stille og roligt under dine fliser og gør sit arbejde uden
        at brokke sig. Men vælger du det forkerte sand — eller springer du
        vedligeholdelsen over — kan selv den flotteste terrasse ende med at
        ligne en skatepark for ukrudt. Denne guide giver dig det fulde
        overblik, så du vælger rigtigt første gang og slipper for dyre
        overraskelser.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad er flisesand, og hvad bruges det til?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Flisesand — også kaldet afretningssand eller brolæggersand — er det
        lag sand, der ligger direkte under dine havefliser eller
        belægningssten. Dets vigtigste opgave er at skabe en jævn og stabil
        overflade, så fliserne ligger plant og ikke vipper, når du går på dem.
        Kornstørrelsen er typisk 0–4 mm, og sandet er sorteret frit for
        større sten, så det er nemt at trække af og komprimere.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Mange forveksler flisesand med fugesand, men der er en vigtig forskel.
        Flisesand ligger <strong>under</strong> fliserne som afretningslag,
        mens fugesand fylder <strong>mellem</strong> fliserne i fugerne. Begge
        dele er afgørende for en holdbar belægning, men de har vidt
        forskellige egenskaber og opgaver.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        De forskellige typer sand til belægningsarbejde
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Sand er ikke bare sand. Der er faktisk stor forskel på de typer, du
        kan vælge, og det rigtige valg afhænger af, hvad sandet skal bruges
        til. Her er de tre hovedtyper, du skal kende:
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Afretningssand (flisesand) 0/4 mm
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Dette er det klassiske flisesand med en kornstørrelse på 0–4 mm. Det
        bruges som det øverste lag under fliserne — deraf navnet
        &quot;afretningssand&quot;, fordi det bruges til at afrette (udglatte)
        overfladen inden fliserne lægges. Sandet har et naturligt lerindhold,
        som giver det god stabilitet efter komprimering.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Stabilgrus 0/32 mm
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Stabilgrus er det grovere materiale, der bruges som bærelag under
        afretningssandet. Det er grundlaget for hele belægningen og skal
        komprimeres grundigt med en pladevibrator. Uden et ordentligt lag
        stabilgrus risikerer du, at fliserne sætter sig over tid.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Fugesand 0/2 mm
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Fugesand er det finere sand, der fylder fugerne mellem dine fliser.
        Det findes i flere varianter — fra almindeligt bakkesand til
        ukrudtshæmmende typer som Dansand No Grow, der har en høj pH-værdi
        som ukrudt ikke trives i. Fugesand har en kornstørrelse på 0–2 mm og
        er skarpkantet, så det pakker sig tæt i fugerne.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Opbygningen under dine fliser — lag for lag
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        En holdbar flisebelægning handler ikke kun om fliserne. Det er det,
        der ligger under dem, der afgør, om din terrasse stadig ser pæn ud om
        fem år. Her er den korrekte opbygning fra bund til top:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Udgravning:</strong> Grav 30 cm ned til terrasser og
          gangstier, 40 cm til indkørsler. Bunden skal være jævn og fast.
        </li>
        <li>
          <strong>Bundsikring/stabilgrus:</strong> Læg 15–20 cm stabilgrus
          0/32 mm og komprimér grundigt med en pladevibrator.
        </li>
        <li>
          <strong>Afretningslag (flisesand):</strong> Påfør 3–5 cm flisesand
          0/4 mm. Brug afretningsrør og et retbræt til at trække en helt jævn
          overflade.
        </li>
        <li>
          <strong>Fliser eller belægningssten:</strong> Læg fliserne med et
          par millimeters mellemrum til fugerne. Husk at lægge med fald væk
          fra huset (ca. 1 cm per meter).
        </li>
        <li>
          <strong>Fugning:</strong> Fyld fugerne med fugesand og fej
          overskuddet væk med en blød kost.
        </li>
      </ol>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Tip:</strong> Flisesand komprimeres typisk med omkring 30%.
        Hvis du ønsker et færdigt lag på 3 cm, skal du altså lægge ca. 4–5 cm
        før komprimering.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Sådan påfører du flisesand korrekt
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        God forberedelse er halvdelen af arbejdet. Her er trinene til korrekt
        påføring af flisesand:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Komprimér bærelaget først:</strong> Sørg for, at
          stabilgruset er ordentligt vibreret og jævnt, inden du begynder med
          flisesandet.
        </li>
        <li>
          <strong>Læg afretningsrør ud:</strong> Placér to rør i riller i
          bærelaget med en afstand, der passer til dit retbræt. Rørene sikrer,
          at du trækker sandet af i den rigtige højde.
        </li>
        <li>
          <strong>Fordel flisesandet:</strong> Hæld sandet ud og fordel det
          jævnt med en rive. Sørg for, at der er lidt for meget, så du har
          noget at trække af.
        </li>
        <li>
          <strong>Træk af med retbrættet:</strong> Træk brættet hen over
          afretningsrørene i en rolig, glidende bevægelse. Det overskydende
          sand fjernes, og du får en helt plan overflade.
        </li>
        <li>
          <strong>Fjern rørene forsigtigt:</strong> Træk rørene op og fyld
          rillerne med sand. Glat ud med en lille murske eller spartel.
        </li>
      </ol>
      <p className="text-muted-foreground leading-relaxed">
        Undgå at træde på det afrettede sand. Arbejd baglæns, så du lægger
        fliser på det færdige underlag uden at ødelægge det fine arbejde.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvor meget flisesand skal du bruge?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Det er en klassiker at købe for lidt og stå med en halvfærdig terrasse
        en lørdag eftermiddag. Her er en tommelfingerregel:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Terrasser og gangstier:</strong> Regn med 3–5 cm flisesand.
          Det svarer til ca. 50–80 kg per m².
        </li>
        <li>
          <strong>Indkørsler:</strong> Her anbefales op til 10 cm flisesand
          (før komprimering), da belastningen er større.
        </li>
        <li>
          <strong>En bigbag (1.000 kg):</strong> Rækker typisk til 12–20 m²,
          afhængigt af lagtykkelsen.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Prisen for flisesand i en bigbag ligger typisk på 900–1.200 kr. inkl.
        moms og levering, afhængigt af leverandør og afstand.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Vedligeholdelse af flisesand og fuger
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        En belægning er ikke et &quot;læg og glem&quot;-projekt. Med lidt
        årlig opmærksomhed holder den i mange år uden store reparationer.
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Årligt forårstjek:</strong> Gå belægningen igennem og kig
          efter fuger, der er sunket eller skyllet tomme. Efterfyld med
          fugesand, inden ukrudtet opdager de ledige pladser.
        </li>
        <li>
          <strong>Hold fugerne fyldte:</strong> Tomme fuger er en åben
          invitation til ukrudt og mos. Sørg for, at fugerne altid er fyldt
          helt op til kanten — det stabiliserer også fliserne.
        </li>
        <li>
          <strong>Undgå højtryksrenser på fugerne:</strong> Højtryksrenseren
          skyller fugesandet ud. Hvis du alligevel renser med højtryksspuler,
          skal du efterfylde fugerne bagefter. Alternativt kan du overveje en{" "}
          <Link
            href="/fliserens"
            className="text-primary hover:underline font-medium"
          >
            professionel fliserens
          </Link>
          , der tager højde for fugningen.
        </li>
        <li>
          <strong>Hvornår skal du lægge nyt flisesand?</strong> Hvis fliserne
          begynder at vippe, synke eller forskyde sig, kan afretningslaget
          være skredet. I så fald kan det være nødvendigt at tage fliserne op,
          rette underlaget og lægge nyt flisesand.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        De mest stillede spørgsmål om flisesand
      </h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Kan jeg bruge strandsand i stedet for flisesand?</strong>{" "}
          Nej, strandsand har runde korn, der ikke pakker sig ordentligt. Det
          giver et ustabilt underlag.
        </li>
        <li>
          <strong>Hvor tykt skal laget flisesand være?</strong> Til terrasser
          og gangstier anbefales 3–5 cm (før komprimering). Til indkørsler med
          biltrafik kan det være op til 10 cm.
        </li>
        <li>
          <strong>Skal flisesand komprimeres?</strong> Ja, med en
          pladevibrator efter at fliserne er lagt. Husk en gummimåtte for at
          undgå ridser.
        </li>
        <li>
          <strong>Hvor meget flisesand per m²?</strong> Ca. 50–80 kg ved et
          lag på 3–5 cm. En bigbag på 1.000 kg rækker til 12–20 m².
        </li>
        <li>
          <strong>
            Hvad er forskellen på flisesand og stabilgrus?
          </strong>{" "}
          Stabilgrus (0/32 mm) er det grove bærelag i bunden, mens flisesand
          (0/4 mm) er det fine afretningslag direkte under fliserne.
        </li>
      </ul>

      <p className="text-muted-foreground leading-relaxed">
        Med det rigtige flisesand, korrekt opbygning og lidt årlig
        vedligeholdelse kan din terrasse eller indkørsel holde sig flot i
        mange år. Har du brug for hjælp til vedligeholdelse af din belægning —
        herunder{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          professionel fliserens
        </Link>{" "}
        og ny fugning? Kontakt{" "}
        <Link
          href="/kontakt"
          className="text-primary hover:underline font-medium"
        >
          Kalles Algerens
        </Link>{" "}
        for et uforpligtende tilbud, eller beregn din pris med vores{" "}
        <Link href="/#prisberegner" className="text-primary hover:underline font-medium">
          prisberegner
        </Link>
        .
      </p>
    </div>
  );
}

function ArticleTagrensningGuide() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Et velholdt tag er afgørende for dit hjem. Alger, mos og lav kan
        ødelægge tagsten og forkorte tagets levetid markant. Men hvornår er
        det egentlig tid til at få renset taget — og hvad indebærer en
        professionel tagrensning? Her får du den komplette guide til
        tagrensning i Midtjylland.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Tegn på at dit tag trænger til rensning
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Dit tag udsættes dagligt for vind, regn, sol og frost. Med tiden
        sætter der sig organisk materiale, der langsomt nedbryder tagfladen.
        Her er de tydeligste tegn på, at dit tag har brug for professionel
        opmærksomhed:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Grønne eller sorte belægninger:</strong> Alger og lav på
          tagstenene er det mest synlige tegn. De starter ofte på nordsiden,
          hvor der er mest skygge og fugt.
        </li>
        <li>
          <strong>Mos mellem tagstenene:</strong> Mos kan løfte tagsten og
          skabe utætheder. Hvis du kan se tykke grønne puder af mos, er det
          alvorligt.
        </li>
        <li>
          <strong>Misfarvede områder:</strong> Områder, der er mørkere end
          resten af taget, tyder på algevækst i de tidlige stadier.
        </li>
        <li>
          <strong>Tilstoppede tagrender:</strong> Hvis tagrenden konstant er
          fyldt med organisk materiale, er det et tegn på kraftig alge- og
          mosvækst på taget.
        </li>
        <li>
          <strong>Vandindtrængning:</strong> I alvorlige tilfælde kan mos
          mellem tagsten lede vand ind under taget og forårsage fugtskader.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvor ofte skal taget renses?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Generelt anbefales det at få taget renset hvert 3–5 år. Men det
        afhænger af flere faktorer:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Tagets beliggenhed:</strong> Skygge fra træer og bygninger
          øger fugtigheden og fremmer algevækst. Et nordhus behøver typisk
          rensning oftere end et sydhus.
        </li>
        <li>
          <strong>Tagtype:</strong> Eternittage og betontagsten er mere
          udsatte for alger end glaserede teglsten. Flade tage samler mere
          fugt end stejle tage.
        </li>
        <li>
          <strong>Lokale forhold:</strong> I Midtjylland, hvor vi har et
          fugtigt klima med milde vintre, er algevækst mere udbredt end i
          tørrere egne.
        </li>
        <li>
          <strong>Tidligere behandling:</strong> Et tag der er behandlet med
          algebeskyttelse, holder sig rent længere.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Metoder til tagrensning
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Der findes flere metoder til tagrensning, og den rigtige løsning
        afhænger af tagets tilstand og materiale:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Kemisk algebehandling:</strong> Den mest skånsomme metode.
          Et specialmiddel påføres taget, som dræber alger og mos over 2–6
          måneder. Taget renser sig gradvist selv via regn og vind. Ideel til
          ældre eller skrøbelige tage.
        </li>
        <li>
          <strong>Mekanisk rensning + algebehandling:</strong> Taget renses
          først mekanisk (skånsomme metoder, ikke højtryk) for at fjerne
          løstsiddende mos og belægninger. Derefter påføres algebehandling.
          Giver et hurtigere synligt resultat.
        </li>
        <li>
          <strong>Tagmaling:</strong> Hvis taget er slidt eller misfarvet, kan
          tagmaling give nyt liv. Taget renses og males i den ønskede farve —
          ofte billigere end udskiftning.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Vigtigt:</strong> Højtryksrensning af tagsten anbefales
        generelt <em>ikke</em>. Højtrykket kan beskadige overfladen på
        tagsten og forkorte tagets levetid. Hos{" "}
        <Link
          href="/tagrens"
          className="text-primary hover:underline font-medium"
        >
          Kalles Algerens
        </Link>{" "}
        bruger vi altid skånsomme metoder, der fjerner alger uden at skade
        dit tag.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad koster tagrensning?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Prisen for tagrensning afhænger af tagets størrelse, tilstand og den
        valgte metode. Her er vejledende priser for tagrensning i
        Midtjylland:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Kemisk algebehandling:</strong> Fra 40–60 kr. pr. m²
        </li>
        <li>
          <strong>Mekanisk rensning + algebehandling:</strong> Fra 60–80 kr.
          pr. m²
        </li>
        <li>
          <strong>Tagmaling (inkl. rensning):</strong> Fra 100–200 kr. pr. m²
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        For et typisk parcelhustag på 150 m² ligger prisen altså mellem
        6.000 og 12.000 kr. for algebehandling, afhængigt af opgavens
        omfang. Se alle vores{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          priser
        </Link>
        .
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Konsekvenserne ved at vente for længe
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        At udskyde tagrensningen kan få alvorlige konsekvenser. Mos der
        vokser under tagsten kan løfte dem og skabe åbninger, hvor vand
        trænger ind. Alger nedbryder langsomt tagmaterialet. Tilstoppede
        tagrender kan føre til vandskader på facaden og i kælderen. I værste
        fald kan du ende med at skulle skifte hele taget — en udgift på
        100.000–300.000 kr. — i stedet for en enkel rensning til en brøkdel
        af prisen.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Professionel tagrensning i Herning, Ikast og Brande
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos{" "}
        <Link
          href="/algebehandling-af-tag"
          className="text-primary hover:underline font-medium"
        >
          Kalles Algerens
        </Link>{" "}
        tilbyder vi professionel tagrensning i hele Midtjylland — fra
        Herning og Ikast til Brande, Give og Billund. Vi bruger skånsomme og
        miljøvenlige metoder, der fjerner alger og mos uden at beskadige dine
        tagsten. Alle opgaver starter med en grundig vurdering, så du får den
        rigtige løsning til netop dit tag.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Kontakt os i dag for et uforpligtende tilbud på{" "}
        <Link
          href="/tagrens"
          className="text-primary hover:underline font-medium"
        >
          tagrensning
        </Link>
        , eller brug vores{" "}
        <Link href="/#prisberegner" className="text-primary hover:underline font-medium">
          prisberegner
        </Link>{" "}
        og få et hurtigt estimat. Ring til os på{" "}
        <strong>25 13 17 97</strong> — vi hjælper gerne.
      </p>
    </div>
  );
}

function ArticleAlgerensPrisguide() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Overvejer du at få renset dit tag, dine fliser eller din facade for
        alger? En af de første ting, de fleste vil vide, er hvad det koster.
        Prisen afhænger af flere faktorer, men her får du en komplet
        prisguide, så du ved præcist, hvad du kan forvente — og hvad du skal
        holde øje med, når du indhenter tilbud.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Vejledende priser på algerens i 2026
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Priserne varierer efter overfladetype, tilstand og opgavens omfang.
        Her er de typiske prisintervaller for algerens i Midtjylland:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Tagrensning:</strong> Fra 40–80 kr. pr. m² — afhængigt af
          tagtype, hældning og mængden af algevækst.
        </li>
        <li>
          <strong>Fliserens:</strong> Fra 30–60 kr. pr. m² — inklusive
          højtryksrensning og algebehandling. Se vores{" "}
          <Link
            href="/fliserens"
            className="text-primary hover:underline font-medium"
          >
            fliserens
          </Link>{" "}
          side for detaljer.
        </li>
        <li>
          <strong>Facaderens:</strong> Fra 50–100 kr. pr. m² — facader kræver
          ofte mere skånsom behandling og specialudstyr.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvad påvirker prisen på algerens?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Den endelige pris afhænger af en række faktorer. At forstå disse kan
        hjælpe dig med at vurdere tilbud og undgå overraskelser:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Type af overflade:</strong> Tag, fliser og facade har
          forskellige behandlingskrav. Facader er typisk dyrere pga.
          stilladsbehov og skånsomme metoder.
        </li>
        <li>
          <strong>Tilstand og algevækst:</strong> Let belægning er hurtigere
          at fjerne end mange års ophobet mos og alger. En terrasse der ikke
          er renset i 10 år kræver mere arbejde end én, der er 2 år gammel.
        </li>
        <li>
          <strong>Tilgængelighed:</strong> Let adgang til arbejdsområdet
          holder prisen nede. Svær adgang, smalle passager eller behov for
          stilladser øger prisen.
        </li>
        <li>
          <strong>Arealets størrelse:</strong> Større arealer giver ofte en
          lavere m²-pris, da mobilisering og klargøring er den samme uanset
          størrelse.
        </li>
        <li>
          <strong>Efterbehandling:</strong> Tilvalg af imprægnering eller
          algebeskyttelse forlænger resultatet, men tilføjer 10–25 kr. pr. m²
          ekstra.
        </li>
        <li>
          <strong>Tagets hældning:</strong> Stejle tage kræver mere
          sikkerhedsudstyr og tager længere tid at behandle.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Priseksempler fra Midtjylland
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        For at give dig et mere konkret billede, her er nogle typiske
        eksempler på, hvad algerens koster for reelle opgaver:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Terrasse på 40 m²</strong> (moderat algevækst): ca.
          1.600–2.400 kr.
        </li>
        <li>
          <strong>Indkørsel på 60 m²</strong> (kraftig belægning + fugning):
          ca. 2.400–4.200 kr.
        </li>
        <li>
          <strong>Parcelhustag på 150 m²</strong> (algebehandling): ca.
          6.000–12.000 kr.
        </li>
        <li>
          <strong>Facaderens på 80 m²</strong> (skånsom metode): ca.
          4.000–8.000 kr.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvornår bør du hyre en professionel?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Mange forsøger sig med en højtryksrenser fra byggemarkedet. Det kan
        fungere på mindre arealer med let belægning, men der er gode grunde
        til at vælge en professionel:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          Professionelle bruger det rigtige tryk og de rigtige dyser — for
          højt tryk kan skade fliser, fuger og tagsten.
        </li>
        <li>
          Algebehandling med professionelle midler holder 3–5 gange længere
          end &quot;gør det selv&quot;-produkter fra baugen.
        </li>
        <li>
          Du undgår at beskadige fuger, som kan koste tusinder at reetablere.
        </li>
        <li>
          Tagrensning kræver sikkerhedsudstyr og erfaring — det er ikke en
          opgave for amatører.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Sådan sparer du penge på algerens
      </h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Få renset regelmæssigt:</strong> Hyppigere rensning (hvert
          2–3 år) er billigere per gang, fordi belægningen ikke når at sætte
          sig fast.
        </li>
        <li>
          <strong>Kombinér opgaver:</strong> Få renset fliser, facade og tag
          samtidig — det giver ofte rabat.
        </li>
        <li>
          <strong>Gå sammen med naboerne:</strong> Kalles Algerens tilbyder{" "}
          <Link
            href="/nabo-rabat"
            className="text-primary hover:underline font-medium"
          >
            nabo-rabat
          </Link>{" "}
          — jo flere naboer, der bestiller sammen, desto mere sparer I.
        </li>
        <li>
          <strong>Overvej en serviceaftale:</strong> En{" "}
          <Link
            href="/serviceaftaler"
            className="text-primary hover:underline font-medium"
          >
            serviceaftale
          </Link>{" "}
          sikrer årlig vedligeholdelse til en fast lav pris og forebygger dyre
          behandlinger.
        </li>
        <li>
          <strong>Brug servicefradraget:</strong> Husk at{" "}
          <Link
            href="/servicefradrag"
            className="text-primary hover:underline font-medium"
          >
            servicefradraget
          </Link>{" "}
          giver dig fradrag for arbejdsløn på op til 6.600 kr. årligt.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Få et gratis tilbud
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos Kalles Algerens giver vi altid et uforpligtende tilbud. Vi
        kommer ud og vurderer opgaven, så du får en nøjagtig pris — ingen
        overraskelser. Se alle vores{" "}
        <Link
          href="/priser"
          className="text-primary hover:underline font-medium"
        >
          priser
        </Link>
        , eller brug vores{" "}
        <Link href="/#prisberegner" className="text-primary hover:underline font-medium">
          prisberegner
        </Link>{" "}
        for et hurtigt estimat.{" "}
        <Link
          href="/kontakt"
          className="text-primary hover:underline font-medium"
        >
          Kontakt os
        </Link>{" "}
        i dag — vi dækker hele Midtjylland, fra{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>{" "}
        og{" "}
        <Link
          href="/fliserens-i-ikast"
          className="text-primary hover:underline font-medium"
        >
          Ikast
        </Link>{" "}
        til{" "}
        <Link
          href="/fliserens-i-brande"
          className="text-primary hover:underline font-medium"
        >
          Brande
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-give"
          className="text-primary hover:underline font-medium"
        >
          Give
        </Link>{" "}
        og{" "}
        <Link
          href="/fliserens-i-billund"
          className="text-primary hover:underline font-medium"
        >
          Billund
        </Link>
        .
      </p>
    </div>
  );
}

function ArticleProfessionelFliserens() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground leading-relaxed">
        Beskidte fliser kan ødelægge det samlede indtryk af din have eller
        indkørsel. Alger, mos og snavs sætter sig i porerne og gør fliserne
        glatte, grimme og potentielt farlige. Men hvad er den bedste metode
        til at få dem rene — og hvornår giver det mening at hyre en
        professionel? Her får du den komplette guide til fliserens.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvorfor skal fliser renses?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Fliser udsættes dagligt for vind, vejr og organisk materiale. Over
        tid opbygges belægninger, der ikke bare ser grimme ud — de kan også
        forårsage reelle problemer:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>Sikkerhedsrisiko:</strong> Alger og mos gør fliser ekstremt
          glatte, når de er våde. Det er en hyppig årsag til faldulykker,
          især for børn og ældre.
        </li>
        <li>
          <strong>Nedbrydning af materialet:</strong> Alger og svampe
          trænger ned i flisens porer og nedbryder den langsomt indefra. Det
          fænomen kaldes flisepest og kan ødelægge betonfliser permanent.
        </li>
        <li>
          <strong>Uplejet udseende:</strong> Grønne, sorte eller grå
          belægninger gør haven eller indkørslen uindbydende og kan påvirke
          ejendommens værdi.
        </li>
        <li>
          <strong>Spredning:</strong> Alger og mos spreder sig til andre
          overflader — tag, facade, mure og hegn. Jo længere du venter, desto
          større bliver opgaven.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Metoder til fliserens
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Der findes flere metoder til at rense fliser, og den rigtige løsning
        afhænger af flisetype, tilstand og ønsket resultat:
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Højtryksrensning
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Den mest kendte metode. En højtryksrenser skyder vand ud under højt
        tryk og fjerner snavs, alger og mos fra overfladen. Metoden er
        hurtig og effektiv, men har nogle ulemper: For højt tryk kan beskadige
        fuger og overflade. Højtryk alene fjerner ikke alger i dybden — de
        kommer hurtigt tilbage. Fugesand kan skylles ud, hvilket kræver
        efterfylning.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Kemisk algebehandling
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Her påføres et specialmiddel, der trænger ned i flisens porer og
        dræber alger, mos og svampe helt ned til roden. Midlet arbejder over
        uger og giver et langtidsholdbart resultat. Denne metode er særlig
        effektiv mod flisepest og bruges ofte som efterbehandling efter
        højtryksrensning.
      </p>

      <h3 className="font-sans font-semibold text-lg text-foreground">
        Kombination — den professionelle løsning
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Hos{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          Kalles Algerens
        </Link>{" "}
        bruger vi en kombination af skånsom højtryksrensning og kemisk
        algebehandling. Først renses overfladen mekanisk for at fjerne synlige
        belægninger. Derefter påføres algebehandling, der forebygger genvækst
        i op til 12 måneder. Til sidst kan fliserne imprægneres for ekstra
        beskyttelse. Denne metode giver det bedste og mest holdbare resultat.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        DIY vs. professionel fliserens
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Mange boligejere overvejer at gøre det selv med en lejet
        højtryksrenser. Her er en ærlig sammenligning:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          <strong>DIY:</strong> Billigere i første omgang, men resultatet
          holder typisk 2–4 måneder. Risiko for at beskadige fliser og fuger.
          Kræver tid, udstyr og fysisk arbejde.
        </li>
        <li>
          <strong>Professionel:</strong> Højere engangspris, men resultatet
          holder 1–3 år. Korrekt tryk og dyser sikrer skånsom behandling.
          Algebehandling forhindrer hurtig genvækst. Fuger bevares intakte.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        For en terrasse på 40 m² kan en professionel rensning koste
        1.600–2.400 kr. og holde i op til 2 år. En lejet højtryksrenser
        koster 500–800 kr. per weekend, men skal gentages 2–3 gange årligt
        for at opnå et tilsvarende resultat. Over tid er den professionelle
        løsning altså ofte billigere.
      </p>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Hvornår bør du ringe til en professionel?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Der er situationer, hvor professionel hjælp klart er det rigtige
        valg:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          Kraftig algevækst eller flisepest, der ikke forsvinder med
          højtryksrensning alene.
        </li>
        <li>
          Store arealer (over 30 m²), hvor manuelt arbejde er upraktisk og
          tidskrævende.
        </li>
        <li>
          Følsomme fliser (natursten, klinker), der kræver skånsom
          behandling.
        </li>
        <li>
          Indkørsler og gangarealer, hvor sikkerhed er vigtig — du vil ikke
          have glatte fliser om vinteren.
        </li>
        <li>
          Når du ønsker et langtidsholdbart resultat med algebehandling og
          evt. imprægnering.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Vedligeholdelse efter rensning
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Når fliserne er renset professionelt, kan du forlænge resultatet med
        simpel vedligeholdelse:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
        <li>
          Fej regelmæssigt blade og organisk materiale væk — det er grobund
          for alger.
        </li>
        <li>
          Hold fugerne fyldte med fugesand — tomme fuger inviterer ukrudt og
          mos.
        </li>
        <li>
          Overvej imprægnering, der gør fliserne mere modstandsdygtige mod
          fugt og snavs.
        </li>
        <li>
          En årlig{" "}
          <Link
            href="/serviceaftaler"
            className="text-primary hover:underline font-medium"
          >
            serviceaftale
          </Link>{" "}
          holder dine fliser rene hele året til en fast pris.
        </li>
      </ul>

      <h2 className="font-sans font-bold text-xl text-foreground">
        Professionel fliserens i Herning, Ikast og Brande
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Hos{" "}
        <Link
          href="/fliserens"
          className="text-primary hover:underline font-medium"
        >
          Kalles Algerens
        </Link>{" "}
        tilbyder vi professionel fliserens med skånsomme og miljøvenlige
        metoder i hele Midtjylland. Vi dækker{" "}
        <Link
          href="/fliserens-i-herning"
          className="text-primary hover:underline font-medium"
        >
          Herning
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-ikast"
          className="text-primary hover:underline font-medium"
        >
          Ikast
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-brande"
          className="text-primary hover:underline font-medium"
        >
          Brande
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-give"
          className="text-primary hover:underline font-medium"
        >
          Give
        </Link>
        ,{" "}
        <Link
          href="/fliserens-i-billund"
          className="text-primary hover:underline font-medium"
        >
          Billund
        </Link>{" "}
        og omegn.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Kontakt os i dag for et uforpligtende tilbud, eller brug vores{" "}
        <Link href="/#prisberegner" className="text-primary hover:underline font-medium">
          prisberegner
        </Link>{" "}
        og få et hurtigt estimat på din opgave. Ring{" "}
        <strong>25 13 17 97</strong> — vi hjælper gerne med en ærlig
        vurdering af dine fliser.
      </p>
    </div>
  );
}

// ─── Body component map ─────────────────────────────
const bodyComponents: Record<string, React.ComponentType> = {
  ArticleHvornaarFliserens,
  ArticleForskelAlgebehandlingFliserens,
  ArticleVedligeholdelseIndkoersel,
  ArticleTegnTagRens,
  ArticleImpragnering,
  ArticleFlisesandGuide,
  ArticleTagrensningGuide,
  ArticleAlgerensPrisguide,
  ArticleProfessionelFliserens,
};

// ─── Blog Post Content ──────────────────────────────
interface BlogPostContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  const articleSchema = useMemo(() => {
    if (!article) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.date,
      author: {
        "@type": "Person",
        name: "Kasper (Kalle)",
      },
      publisher: {
        "@type": "Organization",
        name: "Kalles Algerens",
        url: "https://kaspermh.dk",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://kaspermh.dk/blog/${article.slug}/`,
      },
    };
  }, [article]);

  if (!article) {
    return (
      <div className="pt-20">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="font-sans font-extrabold text-3xl text-foreground mb-4">
              Artikel ikke fundet
            </h1>
            <p className="text-muted-foreground mb-6">
              Den artikel, du leder efter, findes ikke eller er blevet flyttet.
            </p>
            <Link href="/blog">
              <Button className="font-sans font-bold">
                Tilbage til blog
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const Body = bodyComponents[article.bodyComponentName];

  return (
    <div className="pt-20" data-testid="blog-article-page">
      {/* JSON-LD Schema */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
            data-testid="blog-breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Forside
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <h1
              className="font-sans font-extrabold text-2xl md:text-4xl text-foreground mt-4 mb-4"
              data-testid="blog-article-title"
            >
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime} læsetid
              </span>
            </div>
          </header>

          {/* Body */}
          <div data-testid="blog-article-body">
            {Body ? <Body /> : null}
          </div>

          {/* Article CTA */}
          <div className="mt-12 p-8 bg-primary/[0.04] rounded-2xl border border-primary/20 text-center">
            <h2 className="font-sans font-bold text-xl text-foreground mb-3">
              Har du brug for professionel hjælp?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Brug vores prisberegner for et vejledende tilbud — eller ring til
              os for en uforpligtende snak.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#prisberegner">
                <Button size="lg" className="font-sans font-bold gap-2">
                  Beregn din pris
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-bold gap-2 w-full sm:w-auto"
                >
                  Kontakt os
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 md:py-20 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-8">
            Læs også
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-testid="blog-related-articles"
          >
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <div className="group bg-card rounded-xl border border-border p-6 hover:-translate-y-1 transition-all duration-200 hover:shadow-lg cursor-pointer h-full flex flex-col">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full self-start mb-3">
                    {related.category}
                  </span>
                  <h3 className="font-sans font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {related.excerpt}
                  </p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Læs mere
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
