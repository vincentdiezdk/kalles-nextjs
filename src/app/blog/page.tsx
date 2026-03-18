import type { Metadata } from "next";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog | Vedligeholdelse af Udendørs Flader",
  description:
    "Tips og guides til vedligeholdelse af fliser, tage, facader og terrasser. Lær om fliserens, algebehandling, imprægnering og mere fra Kalles Algerens.",
  alternates: {
    canonical: "https://kaspermh.dk/blog/",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
