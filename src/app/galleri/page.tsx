import type { Metadata } from "next";
import GalleriPageContent from "./GalleriPageContent";

export const metadata: Metadata = {
  title: "Galleri | Før og efter billeder",
  description:
    "Se før og efter billeder af fliserens, tagrens, facaderens og algebehandling. Professionelle resultater fra Kalles Algerens i Midtjylland.",
  alternates: {
    canonical: "https://kaspermh.dk/galleri/",
  },
};

export default function GalleriPage() {
  return <GalleriPageContent />;
}
