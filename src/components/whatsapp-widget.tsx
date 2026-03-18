"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const PAGE_MESSAGES: Record<string, string> = {
  "/": "Hej Kasper! Jeg vil gerne have et tilbud på algerens.",
  "/fliserens": "Hej Kasper! Jeg vil gerne have et tilbud på fliserens.",
  "/tagrens": "Hej Kasper! Jeg vil gerne have et tilbud på tagrens.",
  "/facaderens": "Hej Kasper! Jeg vil gerne have et tilbud på facaderens.",
  "/traeterrasse-rens": "Hej Kasper! Jeg vil gerne have et tilbud på terrasse-rens.",
  "/algebehandling-af-tag": "Hej Kasper! Jeg vil gerne have et tilbud på algebehandling.",
  "/priser": "Hej Kasper! Jeg har set jeres priser og vil gerne have et tilbud.",
  "/nabo-rabat": "Hej Kasper! Jeg er interesseret i nabo-rabat. Kan du fortælle mere?",
  "/kontakt": "Hej Kasper! Jeg vil gerne kontakte jer angående en opgave.",
  "/serviceaftaler": "Hej Kasper! Jeg er interesseret i en serviceaftale.",
};

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();

  const getMessage = () => {
    const msg = PAGE_MESSAGES[pathname] || PAGE_MESSAGES["/"];
    return encodeURIComponent(msg);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 md:bottom-6 mb-14 md:mb-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="whatsapp-widget"
    >
      {hovered && (
        <div className="bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-right-2 duration-200 whitespace-nowrap">
          Chat med Kasper
        </div>
      )}
      <a
        href={`https://wa.me/4525131797?text=${getMessage()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat med os på WhatsApp"
        data-testid="whatsapp-button"
      >
        <MessageCircle className="h-7 w-7 text-white" fill="white" />
        {/* Pulsing green dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-background">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        </span>
      </a>
    </div>
  );
}
