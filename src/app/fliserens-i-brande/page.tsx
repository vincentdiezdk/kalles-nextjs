import type { Metadata } from "next";
import { BrandePageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Brande | Professionel Rens - Gratis Tilbud",
  description:
    "Professionel fliserens i Brande fra Kalles Algerens. Vi har base i Brande og tilbyder hurtig service med varmt vand. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-brande/",
  },
};

export default function FliserensBrandePage() {
  return <BrandePageContent />;
}
