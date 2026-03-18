"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const CAMPAIGN = {
  emoji: "🌿",
  title: "Forårskampagne",
  description: "15% rabat på fliserens",
  endDate: new Date("2026-04-30T23:59:59"),
};

function getTimeLeft(endDate: Date) {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
}

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
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(CAMPAIGN.endDate));

  const dismiss = useCallback(() => {
    setDismissed(true);
    if (bannerVisibleCallback) bannerVisibleCallback(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = getTimeLeft(CAMPAIGN.endDate);
      if (!tl) {
        dismiss();
        clearInterval(interval);
      } else {
        setTimeLeft(tl);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [dismiss]);

  // Notify header that banner is visible on mount
  useEffect(() => {
    if (!dismissed && timeLeft && bannerVisibleCallback) {
      bannerVisibleCallback(true);
    }
  }, [dismissed, timeLeft]);

  if (dismissed || !timeLeft) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[51] bg-green-50 dark:bg-green-950/50 border-b border-green-200/50 dark:border-green-800/30"
      data-testid="campaign-banner"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-10 py-1.5 md:py-2 flex items-center justify-center relative">
        <p className="text-[11px] md:text-sm text-green-900 dark:text-green-100 text-center leading-tight">
          <span aria-hidden="true">{CAMPAIGN.emoji} </span>
          <span className="hidden md:inline">{CAMPAIGN.title}: </span>
          <span className="font-bold text-green-800 dark:text-green-200">
            {CAMPAIGN.description}
          </span>
          <span className="text-green-700 dark:text-green-300 tabular-nums">
            {" "}— {timeLeft.days}d {timeLeft.hours}t {timeLeft.minutes}m
          </span>
        </p>

        <button
          onClick={dismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors"
          aria-label="Luk kampagnebanner"
          data-testid="campaign-banner-close"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
