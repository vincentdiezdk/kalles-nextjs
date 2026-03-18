"use client";

import { useState, useEffect } from "react";
import { Calculator, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function StickyCalculatorBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkVisibility = () => {
      // Hide on priser page — calculator is already prominent
      if (pathname === "/priser") {
        setVisible(false);
        return;
      }

      const calc = document.getElementById("prisberegner");
      if (!calc) {
        // No calculator on this page — show bar if scrolled past 300px
        setVisible(window.scrollY > 300);
        return;
      }

      const rect = calc.getBoundingClientRect();
      const calcInView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      setVisible(!calcInView && window.scrollY > 300);
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
      }, 400);
    } else {
      document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[35] hidden md:block transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      data-testid="sticky-calculator-bar"
    >
      <div className="bg-background/80 backdrop-blur-lg border-t border-border/50 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="font-sans font-semibold text-sm text-foreground">
                Beregn din pris — gratis og uforpligtende
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-xs">Svar inden 24 timer</span>
            </div>
          </div>
          <Button
            onClick={scrollToCalculator}
            size="sm"
            className="font-semibold gap-1.5"
            data-testid="sticky-calculator-button"
          >
            Beregn din pris
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
