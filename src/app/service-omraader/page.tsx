import type { Metadata } from "next";
import ServiceOmraaderPageContent from "./ServiceOmraaderPageContent";

export const metadata: Metadata = {
  title: "Serviceområder | Algerens og fliserens i Midtjylland",
  description:
    "Professionel algerens og fliserens i Herning, Ikast og Brande. Vi renser fliser, facader, træterrasser og tage. Få et gratis tilbud i dag.",
  alternates: {
    canonical: "https://kaspermh.dk/service-area/",
  },
};

export default function ServiceOmraaderPage() {
  return <ServiceOmraaderPageContent />;
}
