import type { Metadata } from "next";
import { FliserensPageContent } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Fliserens | Professionel rens af fliser i Herning, Ikast og Brande",
  description:
    "Få professionel fliserens der fjerner alger, flisepest og mos. Vi bruger varmt vand under højt tryk for et skånsomt og langtidsholdbart resultat. Fra 30 kr./m².",
  alternates: { canonical: "https://kaspermh.dk/fliserens/" },
};

export default function FliserensPage() {
  return <FliserensPageContent />;
}
