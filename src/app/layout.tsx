import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-toggle";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CampaignBanner from "@/components/campaign-banner";
import TrackingPixels from "@/components/tracking-pixels";
import WhatsAppWidget from "@/components/whatsapp-widget";
import ExitPopup from "@/components/exit-popup";
import MobileCTA from "@/components/mobile-cta";
import StickyCalculatorBar from "@/components/sticky-calculator-bar";
import GlobalSchemas from "@/components/seo/global-schemas";

const cabinetGrotesk = localFont({
  src: [
    { path: "./fonts/CabinetGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CabinetGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CabinetGrotesk-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/CabinetGrotesk-Extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaspermh.dk"),
  title: {
    default: "Fliserens, Algerens & Tagrens i Midtjylland | Kalles Algerens",
    template: "%s | Kalles Algerens",
  },
  description: "Professionel udendørs rengøring i Herning, Ikast, Brande og hele Midtjylland. Fliserens, tagrens, facaderens og algebehandling med miljøgodkendte produkter.",
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "Kalles Algerens",
    images: [{
      url: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/og-image-kalles-algerens.png",
      width: 1200,
      height: 630,
      alt: "Kalles Algerens – Professionel udendørs rengøring i Midtjylland",
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kaspermh.dk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" suppressHydrationWarning className={`${cabinetGrotesk.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link
          rel="preload"
          href="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/hero/kasper-hero.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground"
      >
        <ThemeProvider>
          <GlobalSchemas />
          <TrackingPixels />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
          >
            Spring til indhold
          </a>
          <CampaignBanner />
          <Header />
          <main id="main-content" tabIndex={-1} className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
          <ExitPopup />
          <MobileCTA />
          <StickyCalculatorBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
