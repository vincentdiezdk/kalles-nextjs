"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface BeforeAfterProps {
  before: string;
  after: string;
  label?: string;
}

export function BeforeAfterSlider({ before, after, label }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [showHint, setShowHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasInteracted = useRef(false);
  const hasAnimated = useRef(false);
  const animationFrameRef = useRef<number>(0);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  }, []);

  const handleInteraction = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      setShowHint(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = 0;
      }
    }
  }, []);

  const runEntryAnimation = useCallback(() => {
    if (hasAnimated.current || hasInteracted.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      if (hasInteracted.current) return;
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      let pos: number;
      if (t < 0.4) {
        const p = t / 0.4;
        const eased = 1 - Math.pow(1 - p, 3);
        pos = 30 + (70 - 30) * eased;
      } else {
        const p = (t - 0.4) / 0.6;
        const eased = p < 0.5
          ? 4 * p * p * p
          : 1 - Math.pow(-2 * p + 2, 3) / 2;
        pos = 70 + (50 - 70) * eased;
      }

      setSliderPos(pos);

      if (t < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    setSliderPos(30);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current && !hasInteracted.current) {
          runEntryAnimation();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [runEntryAnimation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const handleUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [handleMove]);

  const onPointerDown = (clientX: number) => {
    isDragging.current = true;
    handleInteraction();
    handleMove(clientX);
  };

  return (
    <div className="space-y-2">
      <style>{`
        @keyframes handle-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }
      `}</style>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none"
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onTouchStart={(e) => { if (e.touches[0]) onPointerDown(e.touches[0].clientX); }}
        data-testid="before-after-slider"
      >
        <img src={after} alt="Efter" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src={before} alt="Før" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${sliderPos}%` }}>
          <div
            className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            style={{
              animation: !hasInteracted.current ? "handle-pulse 2s ease-in-out infinite" : "none",
              transform: hasInteracted.current ? "translate(-50%, -50%)" : undefined,
            }}
            data-testid="slider-handle"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-8 whitespace-nowrap pointer-events-none transition-opacity duration-500"
            style={{ opacity: showHint ? 1 : 0 }}
            data-testid="slider-hint"
          >
            <span className="bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Træk for at sammenligne
            </span>
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-md">FØR</div>
        <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-bold px-2.5 py-1 rounded-md">EFTER</div>
      </div>
      {label && <p className="text-sm text-muted-foreground text-center">{label}</p>}
    </div>
  );
}
