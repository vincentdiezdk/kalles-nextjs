/**
 * Tracking & Analytics Pixels
 *
 * Replace placeholder IDs with real values when accounts are created.
 * Rendered once in App via <TrackingPixels />.
 *
 * Meta Pixel: https://www.facebook.com/business/help/952192354843755
 * Google Ads: https://support.google.com/google-ads/answer/6095821
 * GA4: https://support.google.com/analytics/answer/9304153
 * Clarity: https://learn.microsoft.com/en-us/clarity/setup-and-installation
 */

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ── Feature flags & IDs ──────────────────────────────
const META_PIXEL_ENABLED = false;
const META_PIXEL_ID = "PIXEL_ID_HERE";

const GOOGLE_ADS_ENABLED = false;
const GOOGLE_ADS_ID = "AW-CONVERSION_ID_HERE";

const GA4_ENABLED = false;
const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX";

const CLARITY_ENABLED = false;
const CLARITY_PROJECT_ID = "XXXXXXXXXX";

// ── Helpers ──────────────────────────────────────────
function gtagAvailable(): boolean {
  return typeof (window as any).gtag === "function";
}

function fbqAvailable(): boolean {
  return typeof (window as any).fbq === "function";
}

export function useTrackingPixels() {
  const pathname = usePathname();

  // Meta Pixel initialization
  useEffect(() => {
    if (!META_PIXEL_ENABLED || META_PIXEL_ID === "PIXEL_ID_HERE") return;
    if ((window as any).fbq) return;

    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }, []);

  // Google Ads tag initialization
  useEffect(() => {
    if (!GOOGLE_ADS_ENABLED || GOOGLE_ADS_ID === "AW-CONVERSION_ID_HERE") return;
    if ((window as any).gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(script);

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ADS_ID}');
    `;
    document.head.appendChild(configScript);
  }, []);

  // GA4 initialization
  useEffect(() => {
    if (!GA4_ENABLED || GA4_MEASUREMENT_ID === "G-XXXXXXXXXX") return;
    if ((window as any).gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_MEASUREMENT_ID}');
    `;
    document.head.appendChild(configScript);
  }, []);

  // Microsoft Clarity initialization
  useEffect(() => {
    if (!CLARITY_ENABLED || CLARITY_PROJECT_ID === "XXXXXXXXXX") return;
    if ((window as any).clarity) return;

    const script = document.createElement("script");
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script","${CLARITY_PROJECT_ID}");
    `;
    document.head.appendChild(script);
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (fbqAvailable()) {
      (window as any).fbq("track", "PageView");
    }
    if (gtagAvailable()) {
      (window as any).gtag("event", "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname]);
}

// Event tracking helpers for use throughout the app
export const trackEvent = {
  calculatorStart: () => {
    if (fbqAvailable()) (window as any).fbq("track", "InitiateCheckout");
    if (gtagAvailable()) (window as any).gtag("event", "calculator_start");
  },
  calculatorComplete: () => {
    if (fbqAvailable()) (window as any).fbq("track", "Lead");
    if (gtagAvailable()) (window as any).gtag("event", "calculator_complete");
  },
  contactFormSubmit: () => {
    if (fbqAvailable()) (window as any).fbq("track", "Contact");
    if (gtagAvailable()) (window as any).gtag("event", "contact_form_submit");
  },
  phoneClick: () => {
    if (gtagAvailable()) (window as any).gtag("event", "phone_click");
  },
  whatsappClick: () => {
    if (gtagAvailable()) (window as any).gtag("event", "whatsapp_click");
  },
  exitPopupSubmit: () => {
    if (fbqAvailable()) (window as any).fbq("track", "Lead");
    if (gtagAvailable()) (window as any).gtag("event", "exit_popup_submit");
  },
};

/** Render this component once in App to activate pixel tracking */
export default function TrackingPixels() {
  useTrackingPixels();
  return null;
}
