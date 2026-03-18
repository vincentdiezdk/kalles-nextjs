import type { Metadata } from "next";
import HomePageContent from "./HomePageContent";

export const metadata: Metadata = {
  title: "Fliserens, Algerens & Tagrens i Midtjylland | Kalles Algerens",
  description: "Fliserens, algerens og tagrens i Brande, Herning og Ikast samt resten af Danmark. Vi renser fliser, tage og facader med miljøvenlige metoder. Få et tilbud.",
  alternates: { canonical: "https://kaspermh.dk/" },
  openGraph: { type: "website" },
};

export default function Home() {
  return <HomePageContent />;
}
