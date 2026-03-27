"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Droplets,
  Home as HomeIcon,
  Paintbrush,
  TreePine,
  Bug,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCampaignBannerVisible } from "@/components/campaign-banner";

const LOGO_URL = "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/logo-kalles-algerens.png";

function KalleLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`${className} rounded-lg bg-primary flex items-center justify-center overflow-hidden p-1`}>
      <img
        src={LOGO_URL}
        alt="Kalles Algerens logo"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
}

const services = [
  {
    label: "Fliserens",
    href: "/fliserens",
    description: "Professionel rens af fliser og belægning",
    icon: Droplets,
  },
  {
    label: "Tagrens & Tagmaling",
    href: "/tagrens",
    description: "Rens og maling af alle tagtyper",
    icon: HomeIcon,
  },
  {
    label: "Facaderens",
    href: "/facaderens",
    description: "Skånsom rengøring af facader",
    icon: Paintbrush,
  },
  {
    label: "Træterrasse Rens",
    href: "/traeterrasse-rens",
    description: "Nænsom rens af træterrasser",
    icon: TreePine,
  },
  {
    label: "Algebehandling af Tag",
    href: "/algebehandling-af-tag",
    description: "Effektiv fjernelse af alger og mos",
    icon: Bug,
  },
  {
    label: "Serviceaftaler",
    href: "/serviceaftaler",
    description: "Løbende vedligeholdelse med rabat",
    icon: ShieldCheck,
  },
];

const navLinks = [
  { label: "Priser", href: "/priser" },
  { label: "Områder", href: "/service-omraader" },
  { label: "Om os", href: "/om" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Galleri", href: "/galleri" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const campaignVisible = useCampaignBannerVisible();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Close mega-menu on click outside
  useEffect(() => {
    if (!megaOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [megaOpen]);

  const scrollToCalculator = useCallback(() => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("prisberegner")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, router]);

  // Check if current location is a service page
  const isServicePage = services.some((s) => pathname === s.href);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${campaignVisible ? 'top-[30px] md:top-[34px]' : 'top-0'} ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-md border-b border-border/50"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" data-testid="logo-link">
            <KalleLogo className="h-9 w-9 md:h-10 md:w-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base leading-tight text-foreground">
                Kalles Algerens
              </span>
              <span className="font-sans text-[10px] text-muted-foreground leading-tight hidden sm:block">
                Alger og skidt? Så er Kalle dit hit
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" data-testid="desktop-nav">
            {/* Services mega-menu trigger */}
            <button
              ref={triggerRef}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                megaOpen || isServicePage
                  ? "text-primary bg-primary/8"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
              data-testid="services-mega-trigger"
              onClick={() => setMegaOpen(!megaOpen)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/8"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                }`}
                data-testid={`nav-link-${link.href.slice(1)}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a
              href="tel:+4525131797"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="phone-link-header"
            >
              <Phone className="h-4 w-4" />
              25 13 17 97
            </a>
            <Button
              size="sm"
              className="hidden sm:inline-flex font-semibold"
              onClick={scrollToCalculator}
              data-testid="cta-beregn-header"
            >
              Beregn din pris
            </Button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="mobile-menu-toggle"
              aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega-Menu Panel */}
      <div
        ref={megaRef}
        className={`hidden lg:block absolute left-0 right-0 top-full transition-all duration-250 ease-out overflow-hidden ${
          megaOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        data-testid="mega-menu-panel"
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = pathname === service.href;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`group flex items-start gap-3.5 p-3.5 rounded-lg transition-all duration-150 ${
                      isActive
                        ? "bg-primary/10 ring-1 ring-primary/20"
                        : "hover:bg-accent/60"
                    }`}
                    data-testid={`mega-link-${service.href.slice(1)}`}
                  >
                    <div
                      className={`flex-shrink-0 p-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div
                        className={`text-sm font-semibold leading-tight transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {service.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Quick CTA row at bottom of mega-menu */}
            <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Ikke sikker på hvilken service du har brug for?{" "}
                <Link href="/kontakt" className="text-primary hover:underline font-medium">
                  Kontakt os
                </Link>{" "}
                — vi hjælper gerne.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                onClick={scrollToCalculator}
              >
                Prisberegner →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="pb-2 border-b border-border mb-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Services
              </p>
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      pathname === s.href
                        ? "text-primary bg-primary/8"
                        : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {s.label}
                  </Link>
                );
              })}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/8"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Udseende</span>
                <ThemeToggle />
              </div>
              <a
                href="tel:+4525131797"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                Ring 25 13 17 97
              </a>
              <Button className="w-full font-semibold" onClick={scrollToCalculator}>
                Beregn din pris
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
