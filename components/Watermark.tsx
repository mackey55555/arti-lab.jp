"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 巨大な欧文ウォーターマーク。藍鉄 4% 不透明度、画面端で見切れる。
 * スクロールに対し 0.9倍程度の視差(parallax)で動く。
 * prefers-reduced-motion 時は視差を無効化(静止)。
 */
export default function Watermark({
  text,
  side = "right",
}: {
  text: string;
  side?: "left" | "right";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [py, setPy] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      // 画面中央からの距離に比例させ、スクロールより遅く動かす(≒0.9倍)
      setPy((window.innerHeight / 2 - center) * 0.09);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const bleed = side === "right" ? "14%" : "-14%";

  return (
    <span
      ref={ref}
      aria-hidden
      className={`absolute top-1/2 font-montserrat font-semibold whitespace-nowrap text-aitetsu uppercase select-none ${
        side === "right" ? "right-0" : "left-0"
      }`}
      style={{
        fontSize: "clamp(4rem, 15vw, 15rem)",
        lineHeight: 1,
        opacity: 0.04,
        letterSpacing: "-0.03em",
        transform: `translate(${bleed}, calc(-50% + ${py}px))`,
      }}
    >
      {text}
    </span>
  );
}
