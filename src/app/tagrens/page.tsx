import type { Metadata } from "next";
import { TagrensPageContent } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Tagrens og tagmaling i Herning og Ikast",
  description:
    "Professionel tagrens og tagmaling med algebehandling. Vi renser betontagsten, tegl og eternit. Op til 10 års garanti med serviceaftale. Fra 10.997 kr.",
  alternates: { canonical: "https://kaspermh.dk/tagrens/" },
};

export default function TagrensPage() {
  return <TagrensPageContent />;
}
