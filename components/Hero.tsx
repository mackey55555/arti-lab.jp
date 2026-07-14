import { Monogram } from "./Logo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col items-center justify-center px-5 pt-24 pb-12 text-center"
    >
      {/* 名前表記: Hero 右端に縦書き(デスクトップ) */}
      <p
        aria-hidden
        className="label absolute top-1/2 right-6 hidden -translate-y-1/2 text-[0.7rem] text-aitetsu/60 md:block"
        style={{ writingMode: "vertical-rl", letterSpacing: "0.35em" }}
      >
        槇原 瑛 &nbsp;/&nbsp; Akira Makihara
      </p>

      <div className="reveal is-visible flex flex-col items-center">
        <Monogram
          size={160}
          priority
          className="h-auto w-[128px] sm:w-[156px]"
          title="Arti モノグラム"
        />

        <h1 className="mt-10 leading-[1.35] font-medium tracking-[0.04em] text-aitetsu [font-size:clamp(2rem,5vw,3.2rem)]">
          つくるを、一貫して。
        </h1>

        <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-sumi/85 sm:text-base">
          要件定義から設計、実装、運用まで。岡山を拠点に、
          <wbr />
          Webとモバイルを一人で作り切るエンジニアです。
        </p>

        {/* 名前表記 + 朱の一線(モバイル) */}
        <div className="mt-8 flex flex-col items-center gap-3 md:hidden">
          <span aria-hidden className="block h-[2px] w-10 rounded-full bg-shu" />
          <p className="label text-[0.7rem] text-aitetsu/70">
            槇原 瑛&nbsp;&nbsp;/&nbsp;&nbsp;Akira Makihara
          </p>
        </div>

        <a
          href="#contact"
          className="mt-11 inline-flex items-center justify-center rounded-sm bg-shu px-8 py-3.5 text-sm font-medium tracking-wide text-nama shadow-sm transition-colors duration-200 hover:bg-[#a8481b]"
        >
          お問い合わせ
        </a>
      </div>
    </section>
  );
}
