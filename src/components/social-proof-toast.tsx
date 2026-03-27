"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, X } from "lucide-react";

interface ProofEvent {
  text: string;
  time: string;
}

// Recent activity messages — realistic events based on Kasper's service area
const recentEvents: ProofEvent[] = [
  { text: "En kunde i Herning har fået tilbud på fliserens", time: "For 12 min. siden" },
  { text: "Fliserens i Ikast — 95 m² fuldført", time: "For 1 time siden" },
  { text: "En kunde i Brande har bestilt algebehandling", time: "For 2 timer siden" },
  { text: "Træterrasse rens i Give — 40 m² fuldført", time: "For 3 timer siden" },
  { text: "En kunde i Herning har brugt prisberegneren", time: "For 25 min. siden" },
  { text: "Facaderens i Snejbjerg — tilbud afsendt", time: "For 4 timer siden" },
  { text: "En kunde i Hammerum har fået tilbud på tagrens", time: "For 5 timer siden" },
  { text: "Fliserens i Billund — 120 m² fuldført", time: "For 6 timer siden" },
  { text: "En kunde i Kibæk har bestilt serviceaftale", time: "For 1 dag siden" },
  { text: "Algebehandling i Sunds — 180 m² fuldført", time: "For 1 dag siden" },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<ProofEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    const event = recentEvents[Math.floor(Math.random() * recentEvents.length)];
    setCurrentEvent(event);
    setVisible(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    // First toast after 15 seconds
    const initialTimer = setTimeout(() => {
      showNext();
    }, 15000);

    // Show a new toast every 30-45 seconds
    const interval = setInterval(() => {
      showNext();
    }, 30000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed, showNext]);

  // Don't show while user is in the calculator (check if prisberegner is in viewport)
  useEffect(() => {
    if (!visible) return;
    const calc = document.getElementById("prisberegner");
    if (calc) {
      const rect = calc.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        setVisible(false);
      }
    }
  }, [visible]);

  if (dismissed || !currentEvent) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-xs transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      data-testid="social-proof-toast"
    >
      <div className="bg-card border border-border rounded-xl shadow-lg p-3.5 pr-8 relative">
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          className="absolute top-2 right-2 p-0.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Luk"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-foreground font-medium leading-snug">
              {currentEvent.text}
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {currentEvent.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
