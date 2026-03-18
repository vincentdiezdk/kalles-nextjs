import type { Metadata } from "next";
import { FacaderensPageContent } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Facaderens i Herning og Ikast",
  description:
    "Professionel facaderens tilpasset mursten, puds, beton og træ. Miljøgodkendte produkter og algebehandling inkluderet. Fra 2.997 kr.",
  alternates: { canonical: "https://kaspermh.dk/facaderens/" },
};

export default function FacaderensPage() {
  return <FacaderensPageContent />;
}
