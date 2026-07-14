import { Monogram } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-10">
      {/* 上端の朱の一線(画面幅) */}
      <span aria-hidden className="block h-[2px] w-full bg-shu" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-12 sm:px-8">
        <Monogram size={34} title="Arti モノグラム" />
        <p className="label text-[0.65rem] text-aitetsu/70">
          © 2026 Arti&nbsp;&nbsp;/&nbsp;&nbsp;Akira Makihara
        </p>
      </div>
    </footer>
  );
}
