import type { Metadata } from "next";
import PriserPageContent from "./PriserPageContent";

export const metadata: Metadata = {
  title: "Priser på fliserens, tagrens og algerens",
  description:
    "Se priser på fliserens, tagrens, algebehandling, facaderens og træterrasse rens. Få gennemsigtige fra-priser og gratis tilbud hos Kalles Algerens.",
  alternates: {
    canonical: "https://kaspermh.dk/priser/",
  },
};

export default function PriserPage() {
  return <PriserPageContent />;
}
