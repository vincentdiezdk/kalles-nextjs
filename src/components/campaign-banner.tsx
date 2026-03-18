"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Users } from "lucide-react";
import Link from "next/link";

// Shared state so header can read banner height
let bannerVisibleCallback: ((v: boolean) => void) | null = null;
export function useCampaignBannerVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    bannerVisibleCallback = setVisible;
    return () => { bannerVisibleCallback = null; };
  }, []);
  return visible;
}

export default function CampaignBanner() {
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => {
    setDismissed(true);
    if (bannerVisibleCallback) bannerVisibleCallback(false);
  }, []);

  // Notify header that banner is visible on mount
  useEffect(() => {
    if (!dismissed && bannerVisibleCallback) {
      bannerVisibleCallback(true);
    }
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[51] bg-green-50 dark:bg-green-950/50 border-b border-green-200/50 dark:border-green-800/30"
      data-testid="campaign-banner"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-10 py-1.5 md:py-2 flex items-center justify-center relative">
        <Link
          href="/nabo-rabat"
          className="text-[11px] md:text-sm text-green-900 dark:text-green-100 text-center leading-tight hover:underline"
        >
          <Users className="inline-block h-3.5 w-3.5 mr-1 -mt-0.5" aria-hidden="true" />
          <span className="font-bold text-green-800 dark:text-green-200">
            Nabo-rabat:
          </span>{" "}
          Spar penge sammen med dine naboer — saml naboerne og få rabat på alle services
        </Link>

        <button
          onClick={dismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors"
          aria-label="Luk banner"
          data-testid="campaign-banner-close"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
