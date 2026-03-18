"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ExitPopup() {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const showPopup = useCallback(() => {
    if (!dismissed && !shown) {
      setShown(true);
    }
  }, [dismissed, shown]);

  useEffect(() => {
    // Disable popup on calculator/prisberegner page
    const isOnCalculator = () => {
      const path = window.location.pathname;
      return path.includes("prisberegner") || path.includes("beregn") || path.includes("priser");
    };

    // Also disable if calculator section is visible in viewport
    const isCalculatorVisible = () => {
      const el = document.getElementById("prisberegner");
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Desktop: exit intent (cursor leaving viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOnCalculator() && !isCalculatorVisible()) {
        showPopup();
      }
    };

    // Mobile: after 45 seconds (only if not on calculator)
    const timer = setTimeout(() => {
      if (!isOnCalculator() && !isCalculatorVisible()) {
        showPopup();
      }
    }, 45000);

    document.addEventListener("mouseout", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [showPopup]);

  const handleClose = () => {
    setShown(false);
    setDismissed(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/exit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          phone: phone.trim(),
          sourcePage: window.location.pathname || "/",
        }),
      });
      setSubmitted(true);
    } catch {
      // Silently fail
    } finally {
      setSubmitting(false);
    }
  };

  if (!shown) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
      data-testid="exit-popup-overlay"
    >
      <div
        className="bg-background rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        data-testid="exit-popup"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Luk"
          data-testid="exit-popup-close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-sans font-bold text-xl text-foreground mb-2">
              Tak! Vi ringer dig op
            </h3>
            <p className="text-sm text-muted-foreground">
              Du hører fra os inden 24 timer.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">👋</div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                Vent! Få et gratis tilbud
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Efterlad dit nummer, og vi ringer med et uforpligtende tilbud inden 24 timer.
              </p>
              <div className="flex items-center justify-center gap-0.5 mb-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">
                "Kasper er grundig og professionel" — 500+ tilfredse kunder
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Dit navn (valgfrit)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="exit-popup-name"
              />
              <Input
                placeholder="Dit telefonnummer *"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-testid="exit-popup-phone"
              />
              <Button
                type="submit"
                className="w-full font-semibold"
                disabled={submitting}
                data-testid="exit-popup-submit"
              >
                {submitting ? "Sender..." : "Ring mig op"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
