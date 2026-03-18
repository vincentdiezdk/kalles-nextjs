import type { Metadata } from "next";
import OmPageContent from "./OmPageContent";

export const metadata: Metadata = {
  title: "Om os | Lokal algerens i Herning og Ikast",
  description:
    "Mød Kalle bag Kalles Algerens – professionel algerens og fliserens i Herning, Ikast og Brande. Kvalitet, ærlighed og personlig service.",
  alternates: {
    canonical: "https://kaspermh.dk/om/",
  },
};

export default function OmPage() {
  return <OmPageContent />;
}
