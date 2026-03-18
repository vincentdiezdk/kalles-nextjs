import type { Metadata } from "next";
import HandelsbetingelserPageContent from "./HandelsbetingelserPageContent";

export const metadata: Metadata = {
  title: "Handelsbetingelser",
  description:
    "Læs handelsbetingelserne for Kalles Algerens ApS. Vilkår for fliserens, algebehandling og andre ydelser i Herning, Ikast og Brande.",
  alternates: { canonical: "https://kaspermh.dk/handelsbetingelser/" },
};

export default function HandelsbetingelserPage() {
  return <HandelsbetingelserPageContent />;
}
