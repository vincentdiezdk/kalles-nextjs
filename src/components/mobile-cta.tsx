"use client";

import { useState, useEffect } from "react";
import { Calculator, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileCTA() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = () => {
      const calc = document.getElementById("prisberegner");
      if (!calc) {
        setVisible(true);
        return;
      }
      const rect = calc.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(!inView);
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    return () => window.removeEventListener("scroll", checkVisibility);
  }, [pathname]);

  const scrollToCalculator = () => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.1)]"
      data-testid="mobile-cta"
    >
      <div className="flex">
        <button
          onClick={scrollToCalculator}
          className="flex-1 bg-primary text-primary-foreground py-3.5 px-4 flex items-center justify-center gap-2 font-sans font-semibold text-sm"
          data-testid="mobile-cta-button"
        >
          <Calculator className="h-4 w-4" />
          Beregn din pris
        </button>
        <a
          href="tel:+4525131797"
          className="bg-primary-foreground text-primary py-3.5 px-5 flex items-center justify-center gap-2 font-sans font-semibold text-sm border-l border-primary/20"
          data-testid="mobile-cta-phone"
        >
          <Phone className="h-4 w-4" />
          Ring op
        </a>
      </div>
    </div>
  );
}
