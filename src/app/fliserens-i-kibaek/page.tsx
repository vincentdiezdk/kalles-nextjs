import type { Metadata } from "next";
import { KibaekPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens Kib\u00e6k | Professionel rens af terrasse og fliser",
  description:
    "Professionel fliserens i Kib\u00e6k og omegn. T\u00e6t p\u00e5 vores base i Brande \u2014 hurtig service. Varmt vand og algebehandling inkluderet. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-kibaek/",
  },
};

export default function FliserensKibaekPage() {
  return <KibaekPageContent />;
}
