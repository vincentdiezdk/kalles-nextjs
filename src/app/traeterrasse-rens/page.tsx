import type { Metadata } from "next";
import { TerrassePageContent } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Træterrasse rens i Herning og Ikast",
  description:
    "Skånsom rensning af træterrasser med varmt vand og lavt tryk. Imprægnering som tilvalg. Miljøgodkendte produkter. Fra 40 kr./m².",
  alternates: { canonical: "https://kaspermh.dk/traeterrasse-rens/" },
};

export default function TerrassePage() {
  return <TerrassePageContent />;
}
