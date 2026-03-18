import type { Metadata } from "next";
import NaboRabatPageContent from "./NaboRabatPageContent";

export const metadata: Metadata = {
  title: "Nabo-rabat på fliserens & algebehandling",
  description:
    "Bestil fliserens eller algebehandling sammen med dine naboer og opnå en attraktiv nabo-rabat. Jo flere I er, jo bedre pris.",
  alternates: {
    canonical: "https://kaspermh.dk/nabo-rabat/",
  },
};

export default function NaboRabatPage() {
  return <NaboRabatPageContent />;
}
