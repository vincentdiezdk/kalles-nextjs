import type { Metadata } from "next";
import { SnejbjergPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Snejbjerg | Professionel Rens - Gratis Tilbud",
  description:
    "Professionel fliserens i Snejbjerg og omegn. Grundig rensning med varmt vand og milj\u00f8godkendte produkter. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-snejbjerg/",
  },
};

export default function FliserensSnejbjergPage() {
  return <SnejbjergPageContent />;
}
