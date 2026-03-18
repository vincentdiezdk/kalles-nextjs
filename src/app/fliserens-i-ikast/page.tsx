import type { Metadata } from "next";
import { IkastPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Ikast | Professionel Rens - Gratis Tilbud",
  description:
    "Professionel fliserens i Ikast og omegn. Kalles Algerens bruger varmt vand under h\u00f8jt tryk for et sk\u00e5nsomt resultat. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-ikast/",
  },
};

export default function FliserensIkastPage() {
  return <IkastPageContent />;
}
