import type { Metadata } from "next";
import { AlgebehandlingPageContent } from "@/components/service-page-template";

export const metadata: Metadata = {
  title:
    "Algebehandling af tag - Effektiv algebehandling",
  description:
    "Miljøgodkendt algebehandling med Neutralon. Forebygger alger, mos og lav på tag, fliser og facade. Fast pris 995 kr. op til 200 m².",
  alternates: { canonical: "https://kaspermh.dk/algebehandling-af-tag/" },
};

export default function AlgebehandlingPage() {
  return <AlgebehandlingPageContent />;
}
