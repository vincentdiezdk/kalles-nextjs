import type { Metadata } from "next";
import { HammerumPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens Hammerum | Rens af terrasse og indk\u00f8rsel",
  description:
    "Professionel fliserens i Hammerum og omegn. Varmt vand under h\u00f8jt tryk for bedre resultat. Algebehandling inkluderet. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-hammerum/",
  },
};

export default function FliserensHammerumPage() {
  return <HammerumPageContent />;
}
