import type { Metadata } from "next";
import { BillundPageContent } from "@/components/location-page-template";

export const metadata: Metadata = {
  title: "Fliserens i Billund | Professionel rens af fliser / terrasse",
  description:
    "Professionel fliserens i Billund og omegn. Varmt vand, milj\u00f8godkendte produkter og algebehandling inkluderet. Fra 30 kr./m\u00b2.",
  alternates: {
    canonical: "https://kaspermh.dk/fliserens-i-billund/",
  },
};

export default function FliserensBillundPage() {
  return <BillundPageContent />;
}
