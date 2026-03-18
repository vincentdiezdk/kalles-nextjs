"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Pencil, CheckCircle2, MapPin, AlertTriangle, Ruler } from "lucide-react";

// Leaflet + Geoman imports (client-side only)
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

// ─── Types ──────────────────────────────────────────
interface AddressSuggestion {
  tekst: string;
  forslagstekst: string;
  data: {
    x: number; // longitude
    y: number; // latitude
    vejnavn: string;
    husnr: string;
    postnr: string;
    postnrnavn: string;
  };
}

interface AreaMeasurementToolProps {
  onAreaConfirmed: (m2: number) => void;
  initialAddress?: string;
}

// ─── Constants ──────────────────────────────────────
const BRAND_GREEN = "#2d6a4f";
const TOKEN = typeof window !== "undefined"
  ? (window as unknown as Record<string, unknown>).__DATAFORSYNINGEN_TOKEN__ as string ||
    process.env.NEXT_PUBLIC_DATAFORSYNINGEN_TOKEN as string ||
    ""
  : "";
const DEBOUNCE_MS = 300;
const DENMARK_CENTER: [number, number] = [55.95, 9.13]; // Approx Brande
const INITIAL_ZOOM = 7;
const ADDRESS_ZOOM = 20;

// ─── Helper: geodesic area from Leaflet polygon ────
function computeGeodesicArea(layer: L.Polygon): number {
  const latlngs = layer.getLatLngs()[0] as L.LatLng[];
  if (!latlngs || latlngs.length < 3) return 0;
  // Spherical excess method (Leaflet.GeometryUtil equivalent)
  const d2r = Math.PI / 180;
  let area = 0;
  for (let i = 0; i < latlngs.length; i++) {
    const j = (i + 1) % latlngs.length;
    const xi = latlngs[i].lng * d2r;
    const yi = latlngs[i].lat * d2r;
    const xj = latlngs[j].lng * d2r;
    const yj = latlngs[j].lat * d2r;
    area += (xj - xi) * (2 + Math.sin(yi) + Math.sin(yj));
  }
  area = Math.abs(area * 6378137 * 6378137 / 2);
  return area;
}

// ─── Component ──────────────────────────────────────
export default function AreaMeasurementTool({
  onAreaConfirmed,
  initialAddress = "",
}: AreaMeasurementToolProps) {
  // State
  const [address, setAddress] = useState(initialAddress);
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isGeocoding, setIsGeocoding] = useState(false);
  const [geocodeError, setGeocodeError] = useState<string | null>(null);
  const [apiUnavailable, setApiUnavailable] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [addressSelected, setAddressSelected] = useState(false);
  const [calculatedArea, setCalculatedArea] = useState<number | null>(null);
  const [hasPolygon, setHasPolygon] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [manualArea, setManualArea] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);

  // Refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const polygonLayerRef = useRef<L.Polygon | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  // ─── Initialize map ────────────────────────────────
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: DENMARK_CENTER,
      zoom: INITIAL_ZOOM,
      zoomControl: false,
      attributionControl: true,
    });

    // SDFE Ortofoto WMS layer — token must be in URL for Dataforsyningen
    const wmsBase = TOKEN
      ? `https://api.dataforsyningen.dk/orto_foraar_DAF?token=${TOKEN}`
      : `https://api.dataforsyningen.dk/orto_foraar_DAF`;
    L.tileLayer.wms(wmsBase, {
      layers: "orto_foraar_12_5",
      format: "image/jpeg",
      transparent: false,
      attribution: "© Styrelsen for Dataforsyning og Infrastruktur",
      maxZoom: 21,
    }).addTo(map);

    // Fallback OSM layer underneath — visible when token is missing
    const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
      opacity: TOKEN ? 0 : 1,
    });
    // Add OSM first so WMS is on top when both work
    if (!TOKEN) osmLayer.addTo(map);

    // Setup Geoman draw controls
    map.pm.addControls({
      position: "topleft",
      drawMarker: false,
      drawCircle: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawRectangle: false,
      drawText: false,
      cutPolygon: false,
      rotateMode: false,
      dragMode: false,
      editMode: false,
      removalMode: false,
      drawPolygon: false, // We enable draw programmatically
    });

    // Hide all PM controls — we use our own UI
    map.pm.removeControls();

    // Event: polygon created
    map.on("pm:create", (e: L.LeafletEvent & { layer: L.Layer }) => {
      // Remove any previous polygon
      if (polygonLayerRef.current) {
        map.removeLayer(polygonLayerRef.current);
      }

      const polygon = e.layer as L.Polygon;
      polygonLayerRef.current = polygon;

      // Style the polygon
      polygon.setStyle({
        color: BRAND_GREEN,
        weight: 2,
        fillColor: BRAND_GREEN,
        fillOpacity: 0.3,
      });

      // Calculate area
      const area = Math.round(computeGeodesicArea(polygon));
      setCalculatedArea(area);
      setHasPolygon(true);

      // Enable editing on the polygon
      polygon.pm.enable({
        allowSelfIntersection: false,
      });

      // Update area on edit
      polygon.on("pm:edit", () => {
        const newArea = Math.round(computeGeodesicArea(polygon));
        setCalculatedArea(newArea);
      });

      // Disable draw mode after creating
      map.pm.disableDraw();
    });

    // Event: polygon removed
    map.on("pm:remove", () => {
      polygonLayerRef.current = null;
      setCalculatedArea(null);
      setHasPolygon(false);
    });

    mapRef.current = map;
    setMapReady(true);

    // ResizeObserver for map.invalidateSize()
    const container = mapContainerRef.current;
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // ─── Address autocomplete ─────────────────────────
  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const params = new URLSearchParams({
        q: query,
        type: "adresse",
      });
      if (TOKEN) params.set("token", TOKEN);

      const response = await fetch(
        `https://api.dataforsyningen.dk/autocomplete?${params.toString()}`
      );

      if (!response.ok) {
        if (response.status >= 500) {
          setApiUnavailable(true);
        }
        return;
      }

      const data: AddressSuggestion[] = await response.json();
      setSuggestions(data.slice(0, 6));
      setShowSuggestions(data.length > 0);
      setGeocodeError(null);
    } catch {
      setApiUnavailable(true);
    }
  }, []);

  const handleAddressInput = (value: string) => {
    setAddress(value);
    setGeocodeError(null);
    setAddressSelected(false);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      fetchSuggestions(value);
    }, DEBOUNCE_MS);
  };

  const handleSelectAddress = (suggestion: AddressSuggestion) => {
    setAddress(suggestion.forslagstekst);
    setSuggestions([]);
    setShowSuggestions(false);
    setIsGeocoding(true);

    const lat = suggestion.data.y;
    const lng = suggestion.data.x;

    if (!lat || !lng) {
      setGeocodeError("Adressen blev ikke fundet — prøv igen");
      setIsGeocoding(false);
      return;
    }

    if (mapRef.current) {
      mapRef.current.setView([lat, lng], ADDRESS_ZOOM, {
        animate: true,
        duration: 1,
      });

      // Add a subtle marker for the address
      const marker = L.circleMarker([lat, lng], {
        radius: 6,
        color: BRAND_GREEN,
        fillColor: "#fff",
        fillOpacity: 1,
        weight: 2,
      }).addTo(mapRef.current);

      marker.bindTooltip(suggestion.forslagstekst, {
        permanent: false,
        direction: "top",
        offset: [0, -10],
      });

      // Remove previous polygon if exists
      if (polygonLayerRef.current) {
        mapRef.current.removeLayer(polygonLayerRef.current);
        polygonLayerRef.current = null;
        setCalculatedArea(null);
        setHasPolygon(false);
      }

      // Enable polygon draw mode after a short delay (let map tiles load)
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.pm.enableDraw("Polygon", {
            snappable: true,
            snapDistance: 15,
            pathOptions: {
              color: BRAND_GREEN,
              weight: 2,
              fillColor: BRAND_GREEN,
              fillOpacity: 0.3,
            },
          });
        }
      }, 800);
    }

    setAddressSelected(true);
    setIsGeocoding(false);
  };

  // ─── Redraw polygon ────────────────────────────────
  const handleRedraw = () => {
    if (mapRef.current && polygonLayerRef.current) {
      mapRef.current.removeLayer(polygonLayerRef.current);
      polygonLayerRef.current = null;
    }
    setCalculatedArea(null);
    setHasPolygon(false);

    // Re-enable draw mode
    if (mapRef.current) {
      mapRef.current.pm.enableDraw("Polygon", {
        snappable: true,
        snapDistance: 15,
        pathOptions: {
          color: BRAND_GREEN,
          weight: 2,
          fillColor: BRAND_GREEN,
          fillOpacity: 0.3,
        },
      });
    }
  };

  // ─── Confirm area ─────────────────────────────────
  const handleConfirm = () => {
    const areaToUse = apiUnavailable ? manualArea : (calculatedArea || 0);
    if (areaToUse <= 0) return;

    setConfirmed(true);
    onAreaConfirmed(areaToUse);

    // Scroll to calculator
    setTimeout(() => {
      const calcSection = document.getElementById("prisberegner");
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  // ─── Close suggestions on outside click ───────────
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ─── API unavailable: manual fallback ─────────────
  if (apiUnavailable) {
    return (
      <div className="bg-card rounded-xl border border-border p-5 md:p-6" data-testid="area-tool-fallback">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">
              Automatisk opmåling er midlertidigt utilgængelig
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Indtast m² manuelt herunder
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Input
            type="number"
            min={1}
            placeholder="Antal m²"
            value={manualArea || ""}
            onChange={(e) => setManualArea(parseInt(e.target.value) || 0)}
            className="max-w-[160px]"
            data-testid="area-tool-manual-input"
          />
          <Button
            onClick={handleConfirm}
            disabled={manualArea <= 0 || confirmed}
            className="font-semibold gap-2"
            style={{ backgroundColor: BRAND_GREEN }}
            data-testid="area-tool-manual-confirm"
          >
            <CheckCircle2 className="h-4 w-4" />
            Brug {manualArea > 0 ? `${manualArea} m²` : "areal"}
          </Button>
        </div>
        {confirmed && (
          <p className="text-sm text-primary font-medium mt-3 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            Areal på {manualArea} m² er overført til prisberegneren ✓
          </p>
        )}
      </div>
    );
  }

  // ─── Render ────────────────────────────────────────
  return (
    <div className="space-y-4" data-testid="area-measurement-tool">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <Ruler className="h-5 w-5 text-primary" />
        <h3 className="font-sans font-bold text-base text-foreground">
          Opmål dit areal på luftfoto
        </h3>
      </div>
      <p className="text-xs text-muted-foreground -mt-2">
        Tegn dit areal direkte på kortet og få en præcis m²-beregning
      </p>

      {/* Step 1: Address search */}
      <div className="relative" ref={suggestionsRef}>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Skriv din adresse..."
            value={address}
            onChange={(e) => handleAddressInput(e.target.value)}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            className="pl-9 pr-9"
            data-testid="area-tool-address-input"
          />
          {isGeocoding && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
          )}
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-[9999] w-full mt-1 bg-white dark:bg-zinc-900 border border-border rounded-lg shadow-xl overflow-hidden">
            {suggestions.map((s, i) => (
              <button
                key={`${s.tekst}-${i}`}
                onClick={() => handleSelectAddress(s)}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b last:border-b-0 border-border flex items-center gap-2"
                data-testid={`area-tool-suggestion-${i}`}
              >
                <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="text-foreground">{s.forslagstekst}</span>
              </button>
            ))}
          </div>
        )}

        {/* Geocode error */}
        {geocodeError && (
          <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
            <AlertTriangle className="h-3.5 w-3.5" />
            {geocodeError}
          </p>
        )}
      </div>

      {/* Step 2: Map container */}
      <div className="relative rounded-xl overflow-hidden shadow-md border border-border">
        {/* Map */}
        <div
          ref={mapContainerRef}
          className="w-full h-[320px] md:h-[420px] bg-muted"
          style={{ zIndex: 0 }}
          data-testid="area-tool-map"
        />

        {/* Skeleton loader when map not ready */}
        {!mapReady && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}

        {/* Draw instruction overlay */}
        {addressSelected && !hasPolygon && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1000] bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-border">
            <p className="text-xs text-muted-foreground italic text-center">
              {isTouch
                ? "Tryk rundt om dit areal — tryk på første punkt for at afslutte"
                : "Klik rundt om dit areal — dobbeltklik for at afslutte"
              }
            </p>
          </div>
        )}

        {/* Not-yet-searched overlay */}
        {!addressSelected && mapReady && (
          <div className="absolute inset-0 z-[999] bg-background/70 flex items-center justify-center pointer-events-none">
            <div className="text-center px-6">
              <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2 opacity-50" />
              <p className="text-sm text-muted-foreground font-medium">
                Søg din adresse ovenfor for at starte
              </p>
              {!TOKEN && (
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
                  Luftfoto kræver Dataforsyningen-token
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Step 4: Area display + actions */}
      {addressSelected && (
        <div className="space-y-3">
          {/* Area calculation display */}
          {calculatedArea !== null && calculatedArea > 0 && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📐</span>
                <span className="font-sans font-bold text-foreground">
                  Beregnet areal: {calculatedArea} m²
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-8">
                (Præcision: ±2 m² ved normal zoom)
              </p>
            </div>
          )}

          {/* Drawing in progress indicator */}
          {!hasPolygon && (
            <p className="text-xs text-muted-foreground italic flex items-center gap-1.5">
              <Loader2 className="h-3 w-3 animate-spin" />
              Tegn dit areal på kortet...
            </p>
          )}

          {/* Action buttons */}
          {hasPolygon && calculatedArea !== null && calculatedArea > 0 && !confirmed && (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={handleRedraw}
                className="gap-2 min-h-[44px]"
                data-testid="area-tool-redraw"
              >
                <Pencil className="h-4 w-4" />
                Tegn om
              </Button>
              <Button
                onClick={handleConfirm}
                className="gap-2 font-semibold min-h-[44px] flex-1 sm:flex-none"
                style={{ backgroundColor: BRAND_GREEN, color: "#fff" }}
                data-testid="area-tool-confirm"
              >
                <CheckCircle2 className="h-4 w-4" />
                Brug {calculatedArea} m² i prisberegner
              </Button>
            </div>
          )}

          {/* Confirmed message */}
          {confirmed && (
            <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3">
              <p className="text-sm font-medium flex items-center gap-1.5" style={{ color: BRAND_GREEN }}>
                <CheckCircle2 className="h-4 w-4" />
                Areal på {calculatedArea || manualArea} m² er overført til prisberegneren ✓
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
