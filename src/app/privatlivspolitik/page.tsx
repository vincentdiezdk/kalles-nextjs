import type { Metadata } from "next";
import PrivatlivspolitikPageContent from "./PrivatlivspolitikPageContent";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description:
    "Læs privatlivspolitikken for Kalles Algerens ApS. Information om indsamling og behandling af personoplysninger.",
  alternates: { canonical: "https://kaspermh.dk/privatlivspolitik/" },
};

export default function PrivatlivspolitikPage() {
  return <PrivatlivspolitikPageContent />;
}
