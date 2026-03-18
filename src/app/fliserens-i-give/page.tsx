import type { Metadata } from "next";
import { GivePageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Give | Professionel rens af fliser",
  description:
    "Professionel fliserens i Give og omegn. Kalles Algerens bruger varmt vand og milj\u00f8godkendte produkter. Fra 30 kr./m\u00b2. Gratis tilbud.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-give/",
  },
};

export default function FliserensGivePage() {
  return <GivePageContent />;
}
