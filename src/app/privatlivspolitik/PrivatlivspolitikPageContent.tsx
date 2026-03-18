"use client";

import BreadcrumbNav from "@/components/breadcrumb-nav";

const breadcrumbItems = [
  { label: "Forside", href: "/" },
  { label: "Privatlivspolitik" },
];

export default function PrivatlivspolitikPageContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <BreadcrumbNav items={breadcrumbItems} />

      <h1 className="text-3xl font-bold mb-8">Privatlivspolitik</h1>

      {/* Dataansvarlig */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dataansvarlig</h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Kalles Algerens ApS er dataansvarlig for behandlingen af de
        personoplysninger, vi modtager om dig. Kontaktoplysninger:
      </p>
      <ul className="text-muted-foreground mb-4 leading-relaxed list-none space-y-1">
        <li>Kalles Algerens ApS</li>
        <li>Vibevej 38</li>
        <li>7330 Brande</li>
        <li>CVR: 46154894</li>
        <li>Telefon: 25 13 17 97</li>
        <li>
          E-mail:{" "}
          <a
            href="mailto:info@kaspermh.dk"
            className="text-primary hover:underline"
          >
            info@kaspermh.dk
          </a>
        </li>
      </ul>

      {/* Hvilke oplysninger indsamler vi? */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Hvilke oplysninger indsamler vi?
      </h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Vi indsamler og behandler personoplysninger, når du kontakter os via
        kontaktformular, telefon eller e-mail. Det drejer sig om: navn, adresse,
        telefonnummer, e-mailadresse og eventuelle oplysninger om din ejendom i
        forbindelse med tilbudsgivning.
      </p>

      {/* Formål med behandlingen */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Formål med behandlingen
      </h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Vi bruger dine oplysninger til at besvare henvendelser, udarbejde tilbud,
        udføre aftalte opgaver og til fakturering. Vi behandler kun
        personoplysninger, der er relevante og nødvendige for disse formål.
      </p>

      {/* Cookies og webanalyse */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cookies og webanalyse
      </h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Denne hjemmeside bruger Google Analytics 4 til at analysere brugen af
        sitet. Google Analytics anvender cookies til at indsamle anonymiserede
        data om besøgende. Disse data bruges til at forbedre hjemmesidens
        indhold og brugeroplevelse. Du kan fravælge cookies via din browsers
        indstillinger.
      </p>

      {/* Opbevaring af data */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Opbevaring af data</h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Vi opbevarer dine personoplysninger så længe, det er nødvendigt for at
        opfylde de formål, de er indsamlet til. Oplysninger tilknyttet regnskab
        opbevares i op til 5 år jf. bogføringsloven.
      </p>

      {/* Dine rettigheder */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dine rettigheder</h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Du har ret til at få indsigt i, hvilke oplysninger vi behandler om dig.
        Du kan også anmode om berigtigelse, sletning eller begrænsning af dine
        personoplysninger. Kontakt os på{" "}
        <a
          href="mailto:info@kaspermh.dk"
          className="text-primary hover:underline"
        >
          info@kaspermh.dk
        </a>
        , hvis du ønsker at gøre brug af dine rettigheder.
      </p>

      {/* Klageadgang */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Klageadgang</h2>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Hvis du er utilfreds med vores behandling af dine personoplysninger, kan
        du klage til Datatilsynet. Find kontaktoplysninger på{" "}
        <a
          href="https://www.datatilsynet.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          www.datatilsynet.dk
        </a>
        .
      </p>

      {/* Sidst opdateret */}
      <p className="text-muted-foreground mt-12 text-sm">
        Sidst opdateret: 15. februar 2026
      </p>
    </div>
  );
}
