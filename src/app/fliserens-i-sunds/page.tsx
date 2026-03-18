import type { Metadata } from "next";
import { SundsPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Sunds | Professionel rens af fliser og terrasser",
  description:
    "Professionel fliserens i Sunds og omegn. Grundig rensning med varmt vand, algebehandling inkluderet. Fra 30 kr./m\u00b2. Gratis tilbud.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-sunds/",
  },
};

export default function FliserensSundsPage() {
  return <SundsPageContent />;
}
