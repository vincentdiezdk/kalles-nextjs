import type { Metadata } from "next";
import ServiceaftalerPageContent from "./ServiceaftalerPageContent";

export const metadata: Metadata = {
  title: "Serviceaftale algerens og fliserens",
  description:
    "Få en serviceaftale algerens og fliserens hos Kalles Algerens. Årlig behandling med garanti. Hold fliser, tag og terrasser rene i Herning og Ikast.",
  alternates: {
    canonical: "https://kaspermh.dk/services/",
  },
};

export default function ServiceaftalerPage() {
  return <ServiceaftalerPageContent />;
}
