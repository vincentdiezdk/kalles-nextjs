"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useScrollAnimate } from "@/hooks/use-scroll-animate";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimate({ threshold: 0.3 });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (isVisible) animate();
  }, [isVisible, animate]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}
      {decimals > 0
        ? (count / Math.pow(10, decimals)).toFixed(decimals).replace(".", ",")
        : count.toLocaleString("da-DK")}
      {suffix}
    </span>
  );
}
