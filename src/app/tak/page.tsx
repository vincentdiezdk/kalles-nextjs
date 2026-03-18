import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tak for din henvendelse | Kalles Algerens",
  description:
    "Vi har modtaget din forespørgsel. Kasper vender tilbage inden 24 timer med et tilbud.",
  robots: { index: false, follow: false },
};

export default function TakPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-lg text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />

        <h1 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-4">
          Tak for din henvendelse!
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Vi har modtaget din forespørgsel og Kasper vender tilbage inden{" "}
          <span className="font-semibold text-foreground">24 timer</span> med et
          præcist tilbud. Tjek eventuelt din spam-mappe, hvis du ikke hører fra
          os.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-foreground mb-1">
            Har du brug for hurtigere svar?
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            Ring direkte til Kasper, så finder vi en løsning med det samme.
          </p>
          <a href="tel:+4525131797">
            <Button className="gap-2 font-semibold">
              <Phone className="h-4 w-4" />
              Ring 25 13 17 97
            </Button>
          </a>
        </div>

        <Link
          href="/"
          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
        >
          Tilbage til forsiden <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  );
}
