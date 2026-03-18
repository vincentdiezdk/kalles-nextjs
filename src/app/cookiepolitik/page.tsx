import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookiepolitik | Kalles Algerens",
  description:
    "Læs om hvordan Kalles Algerens bruger cookies på vores hjemmeside.",
};

export default function CookiepolitikPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-8">
          Cookiepolitik
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p className="text-foreground font-medium">
            Sidst opdateret: 18. marts 2026
          </p>

          <section>
            <h2 className="font-sans font-bold text-lg text-foreground mt-8 mb-3">
              Hvad er cookies?
            </h2>
            <p>
              Cookies er små tekstfiler, der gemmes på din enhed (computer,
              tablet eller telefon), når du besøger en hjemmeside. De bruges til
              at huske dine præferencer og forbedre din brugeroplevelse.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-lg text-foreground mt-8 mb-3">
              Hvilke cookies bruger vi?
            </h2>

            <h3 className="font-sans font-semibold text-base text-foreground mt-4 mb-2">
              Nødvendige cookies
            </h3>
            <p>
              Disse cookies er nødvendige for, at hjemmesiden kan fungere
              korrekt. De kan ikke deaktiveres. De sættes typisk som reaktion på
              handlinger, du foretager, f.eks. udfyldning af formularer eller
              indstilling af præferencer.
            </p>

            <h3 className="font-sans font-semibold text-base text-foreground mt-4 mb-2">
              Analysecookies (Google Analytics 4)
            </h3>
            <p>
              Vi bruger Google Analytics 4 til at forstå, hvordan besøgende
              bruger vores hjemmeside. Disse cookies indsamler anonymiserede
              data om sidevisninger, tid på siden og lignende. IP-adresser
              anonymiseres, og data deles ikke med tredjeparter ud over Google.
            </p>

            <h3 className="font-sans font-semibold text-base text-foreground mt-4 mb-2">
              Markedsføringscookies (Meta Pixel)
            </h3>
            <p>
              Vi bruger Meta Pixel til at måle effektiviteten af vores
              annoncering på Facebook og Instagram. Denne cookie registrerer,
              om du har udført en handling på vores side (f.eks. udfyldt
              prisberegneren), så vi kan vise dig relevante annoncer.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-lg text-foreground mt-8 mb-3">
              Hvordan administrerer du cookies?
            </h2>
            <p>
              Du kan til enhver tid slette eller blokere cookies via din
              browsers indstillinger. Bemærk, at det kan påvirke
              hjemmesidens funktionalitet.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>Chrome:</strong> Indstillinger → Privatliv og sikkerhed
                → Cookies
              </li>
              <li>
                <strong>Firefox:</strong> Indstillinger → Privatliv &
                Sikkerhed → Cookies
              </li>
              <li>
                <strong>Safari:</strong> Indstillinger → Privatliv → Cookies
              </li>
              <li>
                <strong>Edge:</strong> Indstillinger → Cookies og
                webstedstilladelser
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-lg text-foreground mt-8 mb-3">
              Dine rettigheder
            </h2>
            <p>
              I henhold til GDPR har du ret til at få indsigt i, rette eller
              slette de personoplysninger, vi behandler om dig. Du kan også
              trække dit samtykke tilbage til enhver tid.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-lg text-foreground mt-8 mb-3">
              Kontakt
            </h2>
            <p>
              Har du spørgsmål til vores brug af cookies, er du velkommen til at
              kontakte os:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>
                <strong>Kalles Algerens ApS</strong>
              </li>
              <li>CVR: 44314757</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:kontakt@kaspermh.dk"
                  className="text-primary hover:underline"
                >
                  kontakt@kaspermh.dk
                </a>
              </li>
              <li>Telefon: 25 13 17 97</li>
            </ul>
          </section>

          <p className="mt-8 text-xs">
            Læs også vores{" "}
            <Link
              href="/privatlivspolitik"
              className="text-primary hover:underline"
            >
              privatlivspolitik
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
