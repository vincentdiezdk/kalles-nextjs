import type { Metadata } from "next";
import TagmalingPageContent from "./TagmalingPageContent";

export const metadata: Metadata = {
  title: "Tagmaling – Professionel tagmaling i Midtjylland",
  description:
    "Professionel tagmaling i Herning, Ikast og Brande. Forlæng tagets levetid med kvalitetsmaling. Grundig forbehandling og holdbart resultat. Få et gratis tilbud.",
  alternates: { canonical: "https://kaspermh.dk/tagmaling/" },
};

export default function TagmalingPage() {
  return <TagmalingPageContent />;
}
