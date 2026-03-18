import type { Metadata } from "next";
import { HerningPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Herning | Professionel Rens - Gratis Tilbud",
  description:
    "S\u00f8ger du fliserens i Herning? Kalles Algerens tilbyder professionel rens af fliser, indk\u00f8rsler og terrasser i Herning med varmt vand. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-herning/",
  },
};

export default function FliserensHerningPage() {
  return <HerningPageContent />;
}
