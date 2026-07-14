import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Watermark from "./Watermark";

/** 図面の寸法線風ディバイダ: 両端の縦線 + 中央の朱ラベル(§0X)。 */
function DimensionRule({ code }: { code: string }) {
  return (
    <div aria-hidden className="mb-12 flex items-center gap-3 sm:mb-16">
      <span className="h-2.5 w-px bg-aitetsu/30" />
      <span className="h-px flex-1 bg-aitetsu/20" />
      <span className="label text-[0.6rem] leading-none text-shu">§{code}</span>
      <span className="h-px flex-1 bg-aitetsu/20" />
      <span className="h-2.5 w-px bg-aitetsu/30" />
    </div>
  );
}

/**
 * 非対称2カラムのセクション枠。
 * 左1/3: 表題欄(スクロールで sticky)= 巨大番号 + 欧文ラベル + 和文見出し + 朱の一線。
 * 右2/3: 本文。背後に巨大ウォーターマーク。モバイルは縦積み。
 */
export default function SectionShell({
  id,
  no,
  label,
  title,
  code,
  watermark,
  watermarkSide = "right",
  className,
  children,
}: {
  id: string;
  no?: string;
  label: string;
  title: string;
  code: string;
  watermark?: string;
  watermarkSide?: "left" | "right";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative ${className ?? ""}`}>
      {watermark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <Watermark text={watermark} side={watermarkSide} />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <DimensionRule code={code} />

        <div className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-20">
          <Reveal as="header" className="md:sticky md:top-24 md:self-start">
            {no && (
              <span className="block font-montserrat text-[3.5rem] leading-none font-semibold text-shu tabular-nums sm:text-[4.5rem]">
                {no}
              </span>
            )}
            <p className="label mt-4 text-xs text-aitetsu/70">{label}</p>
            <h2 className="mt-2 text-xl font-medium tracking-wide text-aitetsu sm:text-2xl">
              {title}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-[3px] w-12 rounded-full bg-shu"
            />
          </Reveal>

          <div className="min-w-0 md:col-span-2">{children}</div>
        </div>
      </div>
    </section>
  );
}
