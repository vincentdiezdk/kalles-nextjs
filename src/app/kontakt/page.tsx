import type { Metadata } from "next";
import KontaktPageContent from "./KontaktPageContent";

export const metadata: Metadata = {
  title: "Kontakt os | Algerens i Herning og Ikast",
  description:
    "Kontakt Kalles Algerens for professionel algerens og fliserens i Herning, Ikast og Brande. Ring 25 13 17 97 eller skriv for gratis tilbud.",
  alternates: {
    canonical: "https://kaspermh.dk/kontakt/",
  },
};

export default function KontaktPage() {
  return <KontaktPageContent />;
}
