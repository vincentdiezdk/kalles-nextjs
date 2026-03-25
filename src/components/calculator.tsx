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
} from "lucide-react";

// Lazy-load the area measurement tool (requires Leaflet = browser-only)
const AreaMeasurementTool = lazy(() => import("@/components/area-measurement-tool"));

type ServiceKey = "fliser" | "terrasse" | "algeFliser" | "algeTag" | "facade";

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
  { key: "terrasse", label: "Træterrasse", icon: TreePine, description: "Rens & imprægnering", hasCalculator: true, staticPrice: "" },
  { key: "algeFliser", label: "Algebehandling fliser", icon: Sparkles, description: "Alge & mos — fliser", hasCalculator: true, staticPrice: "" },
  { key: "algeTag", label: "Algebehandling tag", icon: Sparkles, description: "Alge & mos — tag", hasCalculator: true, staticPrice: "" },
  { key: "facade", label: "Facaderens", icon: Building2, description: "Mur, puds & beton", hasCalculator: false, staticPrice: "Minimum 2.997 kr." },
];

// ─── Fliserens pricing ─────────────────────────────────
// 30 kr/m² with minimum 75m² (= 2.250 kr flat for ≤75m²)
const FLISER_BASE = 2250;
const FLISER_THRESHOLD = 75;
const FLISER_PER_M2 = 30;

interface Addon {
  key: string;
  label: string;
  description: string;
  icon: typeof ShieldCheck;
  fixedFee: number;
  perM2: number;
}

const fliserAddons: Addon[] = [
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

function calculateFliserPrice(area: number, activeAddons: Record<string, boolean>): number {
  let total = area <= FLISER_THRESHOLD
    ? FLISER_BASE
    : FLISER_BASE + (area - FLISER_THRESHOLD) * FLISER_PER_M2;

  for (const addon of fliserAddons) {
    if (!activeAddons[addon.key]) continue;
    if (area <= FLISER_THRESHOLD) {
      total += addon.fixedFee;
    } else {
      total += addon.fixedFee + (area - FLISER_THRESHOLD) * addon.perM2;
    }
  }
  return total;
}

// ─── Træterrasse pricing ─────────────────────────────────
// 50 kr/m² with minimum 50m² (= 2.500 kr flat for ≤50m²)
const TERRASSE_BASE = 2500;
const TERRASSE_THRESHOLD = 50;
const TERRASSE_PER_M2 = 50;

const terrasseAddons: Addon[] = [
  {
    key: "impraegnering",
    label: "Imprægnering",
    description: "Beskytter træet mod fugt og alger",
    icon: ShieldCheck,
    fixedFee: 500,   // 10 kr/m² × 50 m² = 500 for ≤50m²
    perM2: 10,
  },
];

function calculateTerrassePrice(area: number, activeAddons: Record<string, boolean>): number {
  let total = area <= TERRASSE_THRESHOLD
    ? TERRASSE_BASE
    : TERRASSE_BASE + (area - TERRASSE_THRESHOLD) * TERRASSE_PER_M2;

  for (const addon of terrasseAddons) {
    if (!activeAddons[addon.key]) continue;
    if (area <= TERRASSE_THRESHOLD) {
      total += addon.fixedFee;
    } else {
      total += addon.fixedFee + (area - TERRASSE_THRESHOLD) * addon.perM2;
    }
  }
  return total;
}

// ─── Algebehandling pricing (same for fliser & tag) ─────
// 995 kr for ≤200m², +5 kr/m² above 200m², max 500m²
const ALGE_BASE = 995;
const ALGE_THRESHOLD = 200;
const ALGE_PER_M2 = 5;

function calculateAlgePrice(area: number): number {
  return area <= ALGE_THRESHOLD
    ? ALGE_BASE
    : ALGE_BASE + (area - ALGE_THRESHOLD) * ALGE_PER_M2;
}

// ─── Service config helper ──────────────────────────────
interface ServiceCalcConfig {
  areaLabel: string;
  measureLabel: string;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  defaultArea: number;
  addons: Addon[];
  threshold: number;
  calculatePrice: (area: number, addons: Record<string, boolean>) => number;
  serviceFradrag: boolean; // fliserens & terrasse qualify, alge & tag don't
  resultLabel: (area: number, addons: Record<string, boolean>) => string;
}

function getServiceConfig(service: ServiceKey): ServiceCalcConfig | null {
  switch (service) {
    case "fliser":
      return {
        areaLabel: "Fliserens areal",
        measureLabel: "Opmål på luftfoto",
        sliderMin: 30,
        sliderMax: 500,
        sliderStep: 1,
        defaultArea: 75,
        addons: fliserAddons,
        threshold: FLISER_THRESHOLD,
        calculatePrice: calculateFliserPrice,
        serviceFradrag: true,
        resultLabel: (area, addons) => {
          const addonNames = Object.entries(addons).filter(([, v]) => v).map(([k]) =>
            fliserAddons.find(a => a.key === k)?.label
          ).filter(Boolean);
          return `${area} m² fliserens${addonNames.length > 0 ? ` inkl. ${addonNames.join(", ")}` : ""}`;
        },
      };
    case "terrasse":
      return {
        areaLabel: "Terrasse areal",
        measureLabel: "Opmål på luftfoto",
        sliderMin: 10,
        sliderMax: 300,
        sliderStep: 1,
        defaultArea: 50,
        addons: terrasseAddons,
        threshold: TERRASSE_THRESHOLD,
        calculatePrice: calculateTerrassePrice,
        serviceFradrag: true,
        resultLabel: (area, addons) => {
          const hasImpraeg = addons["impraegnering"];
          return `${area} m² træterrasse rens${hasImpraeg ? " inkl. imprægnering" : ""}`;
        },
      };
    case "algeFliser":
      return {
        areaLabel: "Flise-areal til algebehandling",
        measureLabel: "Opmål på luftfoto",
        sliderMin: 50,
        sliderMax: 500,
        sliderStep: 5,
        defaultArea: 150,
        addons: [],
        threshold: ALGE_THRESHOLD,
        calculatePrice: (area) => calculateAlgePrice(area),
        serviceFradrag: false,
        resultLabel: (area) => `${area} m² algebehandling — fliser`,
      };
    case "algeTag":
      return {
        areaLabel: "Tag-areal til algebehandling",
        measureLabel: "Opmål tag på luftfoto",
        sliderMin: 50,
        sliderMax: 500,
        sliderStep: 5,
        defaultArea: 150,
        addons: [],
        threshold: ALGE_THRESHOLD,
        calculatePrice: (area) => calculateAlgePrice(area),
        serviceFradrag: false,
        resultLabel: (area) => `${area} m² algebehandling — tag`,
      };
    default:
      return null;
  }
}

// Static prices for non-calculator services
function getStaticEstimate(service: ServiceKey, area: number): number {
  switch (service) {
    case "facade": return Math.max(2997, area * 40);
    default: return 0;
  }
}

interface CalculatorProps {
  initialService?: ServiceKey;
  heading?: string;
  subheading?: string;
}

export { type ServiceKey };

export default function Calculator({ initialService, heading, subheading }: CalculatorProps = {}) {
  const hasInitialService = !!initialService;
  const [step, setStep] = useState(hasInitialService ? (serviceOptions.find(s => s.key === initialService)?.hasCalculator ? 2 : 3) : 1);
  const [service, setService] = useState<ServiceKey | null>(initialService ?? null);

  // Area — initialized per service in handleNext or via default
  const initConfig = initialService ? getServiceConfig(initialService) : null;
  const [area, setArea] = useState<number>(initConfig?.defaultArea ?? 75);

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
  const [gdprConsent, setGdprConsent] = useState(false);

  const hasCalculator = serviceOptions.find(s => s.key === service)?.hasCalculator ?? false;
  const config = service ? getServiceConfig(service) : null;

  // Live price calculation for all calculator services
  const livePrice = config ? config.calculatePrice(area, activeAddons) : null;

  // Moms (25% dansk moms, included in price)
  const momsAmount = livePrice !== null ? Math.round(livePrice * 0.2) : null;
  const priceExMoms = livePrice !== null && momsAmount !== null ? livePrice - momsAmount : null;

  // Servicefradrag 2026
  const SERVICE_FRADRAG_MAX = 18300;
  const FRADRAG_SKAT_PCTG = 0.26;
  const LABOR_SHARE = 0.75;
  const showFradrag = config?.serviceFradrag ?? false;
  const laborCost = showFradrag && priceExMoms !== null ? Math.round(priceExMoms * LABOR_SHARE) : null;
  const fradragBase = laborCost !== null ? Math.min(laborCost, SERVICE_FRADRAG_MAX) : null;
  const skattebesparelse = fradragBase !== null ? Math.round(fradragBase * FRADRAG_SKAT_PCTG) : null;
  const effectivePrice = livePrice !== null && skattebesparelse !== null ? livePrice - skattebesparelse : null;

  const canNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return area > 0;
    if (step === 3) return name.trim() !== "" && phone.trim() !== "" && gdprConsent;
    return false;
  };

  const handleNext = () => {
    if (step === 1) {
      // When selecting a service in step 1, set default area for that service
      const svcConfig = service ? getServiceConfig(service) : null;
      if (svcConfig) {
        setArea(svcConfig.defaultArea);
      }

      if (service && !hasCalculator) {
        setStep(3);
      } else {
        setStep(2);
      }
    } else if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (hasInitialService && step === 2) return;
    if (step === 3 && service && !hasCalculator) {
      if (hasInitialService) return;
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!service || !name.trim() || !phone.trim()) return;

    const estimated = config
      ? config.calculatePrice(area, activeAddons)
      : getStaticEstimate(service, area || 50);
    setPrice(estimated);
    setSubmitting(true);

    // Build condition string
    let condition: string | null = null;
    if (config && config.addons.length > 0) {
      condition = Object.entries(activeAddons).filter(([, v]) => v).map(([k]) => k).join(",") || "ingen tilvalg";
    }

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          areaM2: hasCalculator ? (area || null) : null,
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
      const svcConfig = initialService ? getServiceConfig(initialService) : null;
      setArea(svcConfig?.defaultArea ?? 75);
    } else {
      setStep(1);
      setService(null);
      setArea(75);
    }
    setActiveAddons({});
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setPostNr("");
    setShowMeasurementTool(false);
    setAreaFromTool(false);
    setGdprConsent(false);
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

          {/* Step 2: Area + Add-ons (for all calculator services) */}
          {step === 2 && config && (
            <div className="space-y-6" data-testid="calc-step-2">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                {hasInitialService ? "1" : "2"}. Areal & tilvalg
              </h3>

              {/* Area slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-sm font-medium">{config.areaLabel}</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={config.sliderMin}
                      max={config.sliderMax}
                      value={area}
                      onChange={(e) => {
                        const v = parseInt(e.target.value) || config.sliderMin;
                        setArea(Math.min(config.sliderMax, Math.max(config.sliderMin, v)));
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
                  min={config.sliderMin}
                  max={config.sliderMax}
                  step={config.sliderStep}
                  className="w-full"
                  data-testid="calc-area-slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{config.sliderMin} m²</span>
                  <span>{config.sliderMax} m²</span>
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
                  {config.measureLabel}
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
                        setArea(Math.min(config.sliderMax, Math.max(config.sliderMin, m2)));
                        setAreaFromTool(true);
                        setShowMeasurementTool(false);
                      }}
                    />
                  </Suspense>
                </div>
              )}

              {/* Add-ons (if any) */}
              {config.addons.length > 0 && (
                <div>
                  <Label className="text-sm font-medium mb-3 block">Tilvalg</Label>
                  <div className="space-y-3">
                    {config.addons.map((addon) => {
                      const Icon = addon.icon;
                      const active = !!activeAddons[addon.key];
                      const addonPrice = area <= config.threshold
                        ? addon.fixedFee
                        : addon.fixedFee + (area - config.threshold) * addon.perM2;
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
              )}

              {/* Live price display */}
              {livePrice !== null && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Vejledende pris inkl. moms</p>
                  <div className="text-2xl md:text-3xl font-sans font-extrabold text-primary">
                    kr {livePrice.toLocaleString("da-DK")}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {config.resultLabel(area, activeAddons)}
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

                  {/* Servicefradrag (only for qualifying services) */}
                  {showFradrag && skattebesparelse !== null && skattebesparelse > 0 && effectivePrice !== null && (
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

          {/* Step 3: Contact */}
          {step === 3 && (
            <div className="space-y-4" data-testid="calc-step-3">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                {hasInitialService
                  ? (hasCalculator ? "2" : "1")
                  : (hasCalculator ? "3" : "2")
                }. Dine oplysninger
              </h3>

              {/* Show selected service + price summary for calculator services */}
              {hasCalculator && livePrice !== null && config && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4 flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">
                    {config.resultLabel(area, activeAddons)}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    kr {livePrice.toLocaleString("da-DK")}
                  </span>
                </div>
              )}

              {/* Show selected service for non-calculator */}
              {!hasCalculator && service && (
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

              {/* GDPR samtykke-checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mt-2" data-testid="calc-gdpr-consent">
                <input
                  type="checkbox"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary shrink-0"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Jeg accepterer at Kalles Algerens kontakter mig vedr. mit tilbud.
                  Læs vores{" "}
                  <a href="/privatlivspolitik" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                    privatlivspolitik
                  </a>.
                </span>
              </label>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && price !== null && (
            <div className="text-center py-4" data-testid="calc-result">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                {hasCalculator ? "Din vejledende pris" : "Tak for din henvendelse"}
              </h3>
              {hasCalculator && config ? (
                <>
                  <div className="text-4xl md:text-5xl font-sans font-extrabold text-primary mb-2">
                    kr {price.toLocaleString("da-DK")}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {config.resultLabel(area, activeAddons)}
                  </p>
                  {/* Moms + fradrag in result */}
                  {(() => {
                    const resMoms = Math.round(price * 0.2);
                    const resExMoms = price - resMoms;
                    const showResFradrag = config.serviceFradrag;
                    const resLaborCost = showResFradrag ? Math.round(resExMoms * 0.75) : 0;
                    const resFradrag = Math.min(resLaborCost, 18300);
                    const resSkat = Math.round(resFradrag * 0.26);
                    return (
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                          <Receipt className="h-3 w-3" />
                          Heraf moms: {resMoms.toLocaleString("da-DK")} kr.
                        </p>
                        {showResFradrag && resSkat > 0 && (
                          <>
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
                          </>
                        )}
                      </div>
                    );
                  })()}
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
                  ? (hasCalculator ? "Se din pris" : "Få tilbud")
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
