"use client";

import { useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import {
  Droplets,
  Home,
  Building2,
  TreePine,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Phone,
  CheckCircle2,
  Loader2,
  Ruler,
  ShieldCheck,
  Truck,
  Shovel,
  Receipt,
  BadgePercent,
  Paintbrush,
  Bug,
} from "lucide-react";

// Lazy-load the area measurement tool (requires Leaflet = browser-only)
const AreaMeasurementTool = lazy(() => import("@/components/area-measurement-tool"));

type ServiceKey = "fliser" | "tag" | "facade" | "terrasse" | "alge";

interface ServiceInfo {
  key: ServiceKey;
  label: string;
  icon: typeof Droplets;
  description: string;
  hasCalculator: boolean;
  staticPrice: string;
}

const serviceOptions: ServiceInfo[] = [
  { key: "fliser", label: "Fliserens", icon: Droplets, description: "Fliser, sten & belægning", hasCalculator: true, staticPrice: "" },
  { key: "tag", label: "Tagrens", icon: Home, description: "Tag rens & maling", hasCalculator: true, staticPrice: "Fra 10.997 kr." },
  { key: "facade", label: "Facaderens", icon: Building2, description: "Mur, puds & beton", hasCalculator: false, staticPrice: "Minimum 2.997 kr." },
  { key: "terrasse", label: "Terrasse", icon: TreePine, description: "Træterrasse rens", hasCalculator: false, staticPrice: "Fra 40 kr/m², min. 2.497 kr." },
  { key: "alge", label: "Algebehandling", icon: Sparkles, description: "Alge & mos fjernelse", hasCalculator: false, staticPrice: "995 kr. (op til 200 m²)" },
];

// ─── Pricing logic matching kaspermh.dk ─────────────
// Fliserens: 30 kr/m² with minimum 75m² (= 2.250 kr flat for ≤75m²)
// Above 75m²: 2.250 + (area - 75) × 30 kr/m²
const FLISER_BASE = 2250;        // flat for ≤75m²
const FLISER_THRESHOLD = 75;     // m²
const FLISER_PER_M2 = 30;        // kr/m² above threshold

// Add-ons (each has a fixed fee for ≤75m² and per-m² above)
interface Addon {
  key: string;
  label: string;
  description: string;
  icon: typeof ShieldCheck;
  fixedFee: number;    // kr for ≤75m²
  perM2: number;       // kr/m² above 75m²
}

const addons: Addon[] = [
  {
    key: "nano",
    label: "Nano imprægnering",
    description: "Beskytter mod alger & snavs i op til 5 år",
    icon: ShieldCheck,
    fixedFee: 750,
    perM2: 10,
  },
  {
    key: "fugesandLevering",
    label: "Levering af fugesand",
    description: "Vi leverer og fylder ny fugesand",
    icon: Truck,
    fixedFee: 750,
    perM2: 10,
  },
  {
    key: "fugesandUdfejning",
    label: "Udfejning af fugesand",
    description: "Grundig udfejning af eksisterende fugesand",
    icon: Shovel,
    fixedFee: 375,
    perM2: 5,
  },
];

// ─── Tag-specific configuration ─────────────────────
type TagType = "betontagsten" | "tegl" | "eternit" | "staal" | "andet";

interface TagTypeOption {
  key: TagType;
  label: string;
  description: string;
}

const tagTypeOptions: TagTypeOption[] = [
  { key: "betontagsten", label: "Betontagsten", description: "Mest almindelig tagtype" },
  { key: "tegl", label: "Teglsten", description: "Klassisk rød/sort tegl" },
  { key: "eternit", label: "Eternit / Fibercement", description: "Bølge- eller skiferplade" },
  { key: "staal", label: "Ståltag", description: "Metal- eller ståltag" },
  { key: "andet", label: "Andet / Ved ikke", description: "Vi vurderer ved besigtigelse" },
];

interface TagAddon {
  key: string;
  label: string;
  description: string;
  icon: typeof ShieldCheck;
}

const tagAddons: TagAddon[] = [
  {
    key: "tagAlgebehandling",
    label: "Algebehandling af tag",
    description: "Forebyggende behandling mod alger & mos — fra 995 kr.",
    icon: Bug,
  },
  {
    key: "tagmaling",
    label: "Tagmaling",
    description: "Nyt udseende og ekstra beskyttelse — pris efter aftale",
    icon: Paintbrush,
  },
];

function calculateFliserPrice(
  area: number,
  activeAddons: Record<string, boolean>
): number {
  // Base fliserens price
  let total = area <= FLISER_THRESHOLD
    ? FLISER_BASE
    : FLISER_BASE + (area - FLISER_THRESHOLD) * FLISER_PER_M2;

  // Add-ons
  for (const addon of addons) {
    if (!activeAddons[addon.key]) continue;
    if (area <= FLISER_THRESHOLD) {
      total += addon.fixedFee;
    } else {
      total += addon.fixedFee + (area - FLISER_THRESHOLD) * addon.perM2;
    }
  }

  return total;
}

// Static prices for other services (used for display + lead)
function getStaticEstimate(service: ServiceKey, area: number): number {
  switch (service) {
    case "tag": return 10997;
    case "facade": return Math.max(2997, area * 40);
    case "terrasse": return Math.max(2497, area * 40);
    case "alge": return area <= 200 ? 995 : 995 + (area - 200) * 5;
    default: return 0;
  }
}

interface CalculatorProps {
  /** Pre-select a service and skip step 1 */
  initialService?: ServiceKey;
  /** Custom heading — useful when embedded on a service page */
  heading?: string;
  /** Custom subheading */
  subheading?: string;
}

export { type ServiceKey };

export default function Calculator({ initialService, heading, subheading }: CalculatorProps = {}) {
  const hasInitialService = !!initialService;
  const [step, setStep] = useState(hasInitialService ? (serviceOptions.find(s => s.key === initialService)?.hasCalculator ? 2 : 3) : 1);
  const [service, setService] = useState<ServiceKey | null>(initialService ?? null);
  const [area, setArea] = useState<number>(75);
  const [activeAddons, setActiveAddons] = useState<Record<string, boolean>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postNr, setPostNr] = useState("");
  const [showMeasurementTool, setShowMeasurementTool] = useState(false);
  const [areaFromTool, setAreaFromTool] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Tag-specific state
  const [tagType, setTagType] = useState<TagType | null>(null);
  const [tagArea, setTagArea] = useState<number>(120);
  const [tagAddonsActive, setTagAddonsActive] = useState<Record<string, boolean>>({});

  const isFliser = service === "fliser";
  const isTag = service === "tag";
  const hasCalculator = serviceOptions.find(s => s.key === service)?.hasCalculator ?? false;

  // Live price calculation for fliserens
  const livePrice = isFliser ? calculateFliserPrice(area, activeAddons) : null;

  // Moms (25% dansk moms, included in price)
  const momsAmount = livePrice !== null ? Math.round(livePrice * 0.2) : null; // moms = pris × 25/125
  const priceExMoms = livePrice !== null && momsAmount !== null ? livePrice - momsAmount : null;

  // Servicefradrag 2026: op til 18.300 kr/person, skatteværdi ~26%
  // Fliserens er dækket under "Fliserensning af terrasser, indkørsler m.v."
  const SERVICE_FRADRAG_MAX = 18300;
  const FRADRAG_SKAT_PCTG = 0.26;
  // Arbejdsløn = price ex moms (materialer er minimale ved fliserens)
  const fradragBase = priceExMoms !== null ? Math.min(priceExMoms, SERVICE_FRADRAG_MAX) : null;
  const skattebesparelse = fradragBase !== null ? Math.round(fradragBase * FRADRAG_SKAT_PCTG) : null;
  const effectivePrice = livePrice !== null && skattebesparelse !== null ? livePrice - skattebesparelse : null;

  const canNext = () => {
    if (step === 1) return !!service;
    if (step === 2) {
      if (isFliser) return area > 0;
      if (isTag) return tagArea > 0; // tagType is optional
      return true;
    }
    if (step === 3) return name.trim() !== "" && phone.trim() !== "";
    return false;
  };

  const handleNext = () => {
    if (step === 1 && service && !hasCalculator) {
      // Non-calculator services skip to step 3 (contact)
      setStep(3);
    } else if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (hasInitialService && step === 2) {
      // Can't go back past the pre-selected service
      return;
    }
    if (step === 3 && service && !hasCalculator) {
      if (hasInitialService) return; // Can't go back past pre-selected
      setStep(1); // Skip back over step 2 for non-calculator services
    } else {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!service || !name.trim() || !phone.trim()) return;
    const estimated = isFliser
      ? calculateFliserPrice(area || 75, activeAddons)
      : isTag
      ? getStaticEstimate("tag", tagArea || 120)
      : getStaticEstimate(service, area || 50);
    setPrice(estimated);
    setSubmitting(true);

    // Build condition string based on service
    let condition: string | null = null;
    if (isFliser) {
      condition = Object.entries(activeAddons).filter(([, v]) => v).map(([k]) => k).join(",") || "ingen tilvalg";
    } else if (isTag) {
      const parts: string[] = [];
      if (tagType) parts.push(`tagtype: ${tagTypeOptions.find(t => t.key === tagType)?.label || tagType}`);
      parts.push(`areal: ${tagArea} m\u00B2`);
      const activeTagAddons = Object.entries(tagAddonsActive).filter(([, v]) => v).map(([k]) => tagAddons.find(a => a.key === k)?.label || k);
      if (activeTagAddons.length > 0) parts.push(`tilvalg: ${activeTagAddons.join(", ")}`);
      condition = parts.join(" | ");
    }

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          areaM2: isTag ? tagArea : (area || null),
          condition,
          estimatedPrice: estimated,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          address: [address.trim(), postNr.trim()].filter(Boolean).join(", ") || undefined,
          sourcePage: "calculator",
        }),
      });
    } catch {
      // Continue even if API fails
    }
    setSubmitting(false);
    setSubmitted(true);
    setStep(4);
  };

  const reset = () => {
    if (hasInitialService) {
      const svc = serviceOptions.find(s => s.key === initialService);
      setStep(svc?.hasCalculator ? 2 : 3);
      setService(initialService!);
    } else {
      setStep(1);
      setService(null);
    }
    setArea(75);
    setActiveAddons({});
    setTagType(null);
    setTagArea(120);
    setTagAddonsActive({});
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setPostNr("");
    setShowMeasurementTool(false);
    setAreaFromTool(false);
    setPrice(null);
    setSubmitted(false);
  };

  const toggleAddon = (key: string) => {
    setActiveAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="prisberegner"
      className="py-16 md:py-24 bg-primary/[0.03]"
      data-testid="calculator-section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            {heading || "Beregn din pris"}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {subheading || "Få et vejledende tilbud på under 1 minut. Vi vender tilbage med et endeligt tilbud inden 24 timer."}
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Gratis</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Uforpligtende</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Svar inden 24 timer</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(hasInitialService
            ? (hasCalculator ? [2, 3] : [3])
            : (hasCalculator ? [1, 2, 3] : [1, 3])
          ).map((s, idx, arr) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > s ? "✓" : idx + 1}
              </div>
              {idx < arr.length - 1 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 transition-colors ${
                    step > s ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
          {/* Step 1: Service */}
          {step === 1 && (
            <div className="space-y-4" data-testid="calc-step-1">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                1. Vælg service
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = service === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setService(opt.key)}
                      className={`p-4 rounded-xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                        selected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/30 hover:shadow-sm"
                      }`}
                      data-testid={`calc-service-${opt.key}`}
                    >
                      <Icon
                        className={`h-6 w-6 mb-2 ${
                          selected ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <div className="font-sans font-semibold text-sm text-foreground">
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {opt.description}
                      </div>
                      {!opt.hasCalculator && opt.staticPrice && (
                        <div className="text-xs font-medium text-primary mt-1">
                          {opt.staticPrice}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Show note for non-calculator services */}
              {service && !hasCalculator && (
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg p-3 mt-4">
                  <p className="text-xs text-amber-800 dark:text-amber-300">
                    Pris for {serviceOptions.find(s => s.key === service)?.label} varierer.
                    Udfyld dine oplysninger, og vi sender et præcist tilbud inden 24 timer.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Area + Add-ons (only for fliserens) */}
          {step === 2 && isFliser && (
            <div className="space-y-6" data-testid="calc-step-2">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                {hasInitialService ? "1" : "2"}. Areal & tilvalg
              </h3>

              {/* Area slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-sm font-medium">Fliserens areal</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={30}
                      max={500}
                      value={area}
                      onChange={(e) => {
                        const v = parseInt(e.target.value) || 30;
                        setArea(Math.min(500, Math.max(30, v)));
                        setAreaFromTool(false);
                      }}
                      className="w-20 h-8 text-center text-sm font-semibold"
                      data-testid="calc-area-input"
                    />
                    <span className="text-sm text-muted-foreground font-medium">m²</span>
                  </div>
                </div>
                <Slider
                  value={[area]}
                  onValueChange={([v]) => {
                    setArea(v);
                    setAreaFromTool(false);
                  }}
                  min={30}
                  max={500}
                  step={1}
                  className="w-full"
                  data-testid="calc-area-slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 m²</span>
                  <span>500 m²</span>
                </div>
                {areaFromTool && area > 0 && (
                  <p className="text-xs text-primary font-medium mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Opmålt fra luftfoto
                  </p>
                )}
              </div>

              {/* Measurement tool toggle */}
              {!showMeasurementTool && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMeasurementTool(true)}
                  className="gap-1.5 text-xs"
                  data-testid="calc-open-measurement"
                >
                  <Ruler className="h-3.5 w-3.5" />
                  Opmål på luftfoto
                </Button>
              )}

              {showMeasurementTool && (
                <div className="border border-border rounded-xl p-4 bg-muted/30">
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                      </div>
                    }
                  >
                    <AreaMeasurementTool
                      initialAddress={address}
                      onAreaConfirmed={(m2) => {
                        setArea(Math.min(500, Math.max(30, m2)));
                        setAreaFromTool(true);
                        setShowMeasurementTool(false);
                      }}
                    />
                  </Suspense>
                </div>
              )}

              {/* Add-ons */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Tilvalg</Label>
                <div className="space-y-3">
                  {addons.map((addon) => {
                    const Icon = addon.icon;
                    const active = !!activeAddons[addon.key];
                    const addonPrice = area <= FLISER_THRESHOLD
                      ? addon.fixedFee
                      : addon.fixedFee + (area - FLISER_THRESHOLD) * addon.perM2;
                    return (
                      <div
                        key={addon.key}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          active
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/20"
                        }`}
                        onClick={() => toggleAddon(addon.key)}
                        data-testid={`calc-addon-${addon.key}`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-5 w-5 shrink-0 ${active ? "text-primary" : "text-muted-foreground"}`} />
                          <div>
                            <div className="font-sans font-semibold text-sm text-foreground">
                              {addon.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {addon.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                            + {addonPrice.toLocaleString("da-DK")} kr.
                          </span>
                          <div onClick={(e) => e.stopPropagation()}>
                            <Switch
                              checked={active}
                              onCheckedChange={() => toggleAddon(addon.key)}
                              aria-label={addon.label}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live price display */}
              {livePrice !== null && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Vejledende pris inkl. moms</p>
                  <div className="text-2xl md:text-3xl font-sans font-extrabold text-primary">
                    kr {livePrice.toLocaleString("da-DK")}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {area} m² fliserens{Object.values(activeAddons).some(v => v) ? " inkl. tilvalg" : ""}
                  </p>

                  {/* Moms breakdown */}
                  {momsAmount !== null && priceExMoms !== null && (
                    <div className="mt-3 pt-3 border-t border-primary/10 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                      <Receipt className="h-3 w-3" />
                      <span>Heraf moms: {momsAmount.toLocaleString("da-DK")} kr.</span>
                      <span className="text-muted-foreground/50">|</span>
                      <span>Pris ex. moms: {priceExMoms.toLocaleString("da-DK")} kr.</span>
                    </div>
                  )}

                  {/* Servicefradrag */}
                  {skattebesparelse !== null && skattebesparelse > 0 && effectivePrice !== null && (
                    <div className="mt-3 pt-3 border-t border-primary/10">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        <BadgePercent className="h-3.5 w-3.5" />
                        <span>Servicefradrag: Spar {skattebesparelse.toLocaleString("da-DK")} kr. i skat</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Din reelle pris efter fradrag: <span className="font-semibold text-foreground">kr {effectivePrice.toLocaleString("da-DK")}</span>
                      </p>
                      <p className="text-[10px] text-muted-foreground/70 mt-0.5">
                        <Link href="/servicefradrag" className="underline hover:text-primary transition-colors">
                          Servicefradrag 2026: op til 18.300 kr./person (skatteværdi ~26%) →
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Step 2: Tag details (tagtype, area, add-ons) */}
          {step === 2 && isTag && (
            <div className="space-y-6" data-testid="calc-step-2-tag">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                {hasInitialService ? "1" : "2"}. Tagoplysninger
              </h3>

              {/* Tag type selector */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Tagtype</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {tagTypeOptions.map((opt) => {
                    const selected = tagType === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => setTagType(opt.key)}
                        className={`p-3 rounded-xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                          selected
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/30 hover:shadow-sm"
                        }`}
                        data-testid={`calc-tagtype-${opt.key}`}
                      >
                        <div className="font-sans font-semibold text-sm text-foreground">
                          {opt.label}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">
                          {opt.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Asbestos warning */}
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg p-3">
                <p className="text-xs text-amber-800 dark:text-amber-300">
                  ⚠️ OBS: Vi renser ikke asbest/eternit-tage med asbest. Kontakt os hvis du er i tvivl om dit tag indeholder asbest.
                </p>
              </div>

              {/* Tag area slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-sm font-medium">Tagareal (ca.)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={50}
                      max={500}
                      value={tagArea}
                      onChange={(e) => {
                        const v = parseInt(e.target.value) || 50;
                        setTagArea(Math.min(500, Math.max(50, v)));
                        setAreaFromTool(false);
                      }}
                      className="w-20 h-8 text-center text-sm font-semibold"
                      data-testid="calc-tag-area-input"
                    />
                    <span className="text-sm text-muted-foreground font-medium">m²</span>
                  </div>
                </div>
                <Slider
                  value={[tagArea]}
                  onValueChange={([v]) => {
                    setTagArea(v);
                    setAreaFromTool(false);
                  }}
                  min={50}
                  max={500}
                  step={5}
                  className="w-full"
                  data-testid="calc-tag-area-slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>50 m²</span>
                  <span>500 m²</span>
                </div>
                {areaFromTool && tagArea > 0 && (
                  <p className="text-xs text-primary font-medium mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Opmålt fra luftfoto
                  </p>
                )}
              </div>

              {/* Measurement tool toggle */}
              {!showMeasurementTool && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMeasurementTool(true)}
                  className="gap-1.5 text-xs"
                  data-testid="calc-tag-open-measurement"
                >
                  <Ruler className="h-3.5 w-3.5" />
                  Opmål tag på luftfoto
                </Button>
              )}

              {showMeasurementTool && (
                <div className="border border-border rounded-xl p-4 bg-muted/30">
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                      </div>
                    }
                  >
                    <AreaMeasurementTool
                      initialAddress={address}
                      onAreaConfirmed={(m2) => {
                        setTagArea(Math.min(500, Math.max(50, m2)));
                        setAreaFromTool(true);
                        setShowMeasurementTool(false);
                      }}
                    />
                  </Suspense>
                </div>
              )}

              {/* Tag add-ons */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Ønsker du tilvalg?</Label>
                <div className="space-y-3">
                  {tagAddons.map((addon) => {
                    const Icon = addon.icon;
                    const active = !!tagAddonsActive[addon.key];
                    return (
                      <div
                        key={addon.key}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          active
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/20"
                        }`}
                        onClick={() => setTagAddonsActive(prev => ({ ...prev, [addon.key]: !prev[addon.key] }))}
                        data-testid={`calc-tag-addon-${addon.key}`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-5 w-5 shrink-0 ${active ? "text-primary" : "text-muted-foreground"}`} />
                          <div>
                            <div className="font-sans font-semibold text-sm text-foreground">
                              {addon.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {addon.description}
                            </div>
                          </div>
                        </div>
                        <div onClick={(e) => e.stopPropagation()}>
                          <Switch
                            checked={active}
                            onCheckedChange={() => setTagAddonsActive(prev => ({ ...prev, [addon.key]: !prev[addon.key] }))}
                            aria-label={addon.label}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Price indication */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Vejledende startpris for tagrens</p>
                <div className="text-2xl md:text-3xl font-sans font-extrabold text-primary">
                  Fra 10.997 kr.
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Endelig pris afhænger af {tagArea} m² tag{tagType ? `, ${tagTypeOptions.find(t => t.key === tagType)?.label?.toLowerCase()}` : ""}, tilstand og adgangsforhold.
                  Vi sender et præcist tilbud inden 24 timer.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <div className="space-y-4" data-testid="calc-step-3">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                {hasInitialService
                  ? (hasCalculator ? "2" : "1")
                  : (hasCalculator ? "3" : "2")
                }. Dine oplysninger
              </h3>

              {/* Show selected service + price summary for fliserens */}
              {isFliser && livePrice !== null && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4 flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">
                    Fliserens — {area} m²
                    {Object.values(activeAddons).some(v => v) ? " + tilvalg" : ""}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    kr {livePrice.toLocaleString("da-DK")}
                  </span>
                </div>
              )}

              {/* Show selected service summary for tag */}
              {isTag && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground font-medium">
                      Tagrens — {tagArea} m²{tagType ? ` (${tagTypeOptions.find(t => t.key === tagType)?.label})` : ""}
                      {Object.values(tagAddonsActive).some(v => v)
                        ? " + " + Object.entries(tagAddonsActive).filter(([, v]) => v).map(([k]) => tagAddons.find(a => a.key === k)?.label).join(", ")
                        : ""}
                    </span>
                    <span className="text-sm font-bold text-primary">Fra 10.997 kr.</span>
                  </div>
                </div>
              )}

              {/* Show selected service for non-calculator */}
              {!isFliser && !isTag && service && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                  <span className="text-sm text-foreground font-medium">
                    {serviceOptions.find(s => s.key === service)?.label} — {serviceOptions.find(s => s.key === service)?.staticPrice}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="calc-name" className="text-sm font-medium mb-1.5 block">
                    Navn *
                  </Label>
                  <Input
                    id="calc-name"
                    placeholder="Dit fulde navn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    data-testid="calc-name-input"
                  />
                </div>
                <div>
                  <Label htmlFor="calc-email" className="text-sm font-medium mb-1.5 block">
                    Email *
                  </Label>
                  <Input
                    id="calc-email"
                    type="email"
                    placeholder="Din email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    data-testid="calc-email-input"
                  />
                </div>
                <div>
                  <Label htmlFor="calc-phone" className="text-sm font-medium mb-1.5 block">
                    Telefon *
                  </Label>
                  <Input
                    id="calc-phone"
                    type="tel"
                    placeholder="Dit telefonnummer"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    data-testid="calc-phone-input"
                  />
                </div>
                <div>
                  <Label htmlFor="calc-address" className="text-sm font-medium mb-1.5 block">
                    Adresse *
                  </Label>
                  <Input
                    id="calc-address"
                    placeholder="Din adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="street-address"
                    data-testid="calc-address-input"
                  />
                </div>
                <div>
                  <Label htmlFor="calc-postnr" className="text-sm font-medium mb-1.5 block">
                    Post nr. *
                  </Label>
                  <Input
                    id="calc-postnr"
                    placeholder="F.eks. 7330"
                    value={postNr}
                    onChange={(e) => setPostNr(e.target.value)}
                    autoComplete="postal-code"
                    data-testid="calc-postnr-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && price !== null && (
            <div className="text-center py-4" data-testid="calc-result">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                {isFliser ? "Din vejledende pris" : "Tak for din henvendelse"}
              </h3>
              {isFliser ? (
                <>
                  <div className="text-4xl md:text-5xl font-sans font-extrabold text-primary mb-2">
                    kr {price.toLocaleString("da-DK")}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {area} m² fliserens
                    {Object.entries(activeAddons).filter(([, v]) => v).length > 0 && (
                      <> inkl. {Object.entries(activeAddons).filter(([, v]) => v).map(([k]) =>
                        addons.find(a => a.key === k)?.label
                      ).join(", ")}</>
                    )}
                  </p>
                  {/* Moms + fradrag in result */}
                  {(() => {
                    const resMoms = Math.round(price * 0.2);
                    const resExMoms = price - resMoms;
                    const resFradrag = Math.min(resExMoms, 18300);
                    const resSkat = Math.round(resFradrag * 0.26);
                    return (
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                          <Receipt className="h-3 w-3" />
                          Heraf moms: {resMoms.toLocaleString("da-DK")} kr.
                        </p>
                        <div className="flex items-center justify-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          <BadgePercent className="h-3.5 w-3.5" />
                          <span>Servicefradrag: Spar {resSkat.toLocaleString("da-DK")} kr. i skat</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Reel pris efter fradrag: <span className="font-semibold text-foreground">kr {(price - resSkat).toLocaleString("da-DK")}</span>
                        </p>
                        <Link href="/servicefradrag" className="text-[10px] text-primary underline hover:text-primary/80 transition-colors">
                          Læs mere om servicefradrag →
                        </Link>
                      </div>
                    );
                  })()}
                </>
              ) : isTag ? (
                <>
                  <div className="text-3xl md:text-4xl font-sans font-extrabold text-primary mb-2">
                    Fra {price.toLocaleString("da-DK")} kr.
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Tagrens — {tagArea} m²{tagType ? ` (${tagTypeOptions.find(t => t.key === tagType)?.label})` : ""}
                  </p>
                  {Object.entries(tagAddonsActive).filter(([, v]) => v).length > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Tilvalg: {Object.entries(tagAddonsActive).filter(([, v]) => v).map(([k]) =>
                        tagAddons.find(a => a.key === k)?.label
                      ).join(", ")}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Endelig pris afhænger af tagets tilstand og adgangsforhold.
                  </p>
                </>
              ) : (
                <p className="text-sm text-muted-foreground mb-2">
                  Vi sender dig et præcist tilbud på{" "}
                  {serviceOptions.find(s => s.key === service)?.label?.toLowerCase()} inden 24 timer.
                </p>
              )}
              <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
                Endeligt tilbud inden 24 timer.
              </p>
              {/* Urgency / next step */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 max-w-md mx-auto">
                <p className="text-sm font-semibold text-foreground mb-1">
                  ✅ Tak, {name.split(" ")[0]}! Vi ringer dig op.
                </p>
                <p className="text-xs text-muted-foreground">
                  Du hører fra Kasper inden 24 timer med et endeligt tilbud.
                  Vil du hurtigere svar? Ring direkte.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+4525131797" data-testid="calc-result-phone">
                  <Button className="gap-2 w-full sm:w-auto font-semibold">
                    <Phone className="h-4 w-4" />
                    Ring nu — 25 13 17 97
                  </Button>
                </a>
                <Button onClick={reset} variant="outline" data-testid="calc-result-reset">
                  Beregn ny pris
                </Button>
              </div>
            </div>
          )}

          {/* Navigation */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 && !(hasInitialService && ((hasCalculator && step === 2) || (!hasCalculator && step === 3))) ? (
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="gap-1"
                  data-testid="calc-back"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Tilbage
                </Button>
              ) : (
                <div />
              )}
              <Button
                onClick={handleNext}
                disabled={!canNext() || submitting}
                className="gap-1 font-semibold"
                data-testid="calc-next"
              >
                {submitting
                  ? "Sender..."
                  : step === 3
                  ? (isFliser ? "Se din pris" : "Få tilbud")
                  : "Næste"}
                {!submitting && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
