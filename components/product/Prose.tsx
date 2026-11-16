import type { ReactNode } from "react";

/** 規約・サポートなど、文章だけのページの枠。 */
export default function Prose({
  label,
  title,
  updated,
  children,
}: {
  label: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl px-5 pt-32 pb-24 sm:px-8">
      <p className="label text-xs text-aitetsu/70">{label}</p>
      <h1 className="mt-2 text-2xl font-medium tracking-wide text-aitetsu sm:text-3xl">
        {title}
      </h1>
      <span aria-hidden className="mt-4 block h-[3px] w-12 rounded-full bg-shu" />
      {updated && <p className="mt-6 text-sm text-sumi/70">最終更新日：{updated}</p>}
      <div className="prose-arti mt-8">{children}</div>
    </article>
  );
}
