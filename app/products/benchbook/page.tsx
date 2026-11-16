import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import ProductHeader from "@/components/product/ProductHeader";
import { BENCHBOOK_LINKS, CONTACT_EMAIL } from "./links";

const description =
  "バスケットボールのベンチで控えのスコアをつけるiPhoneアプリ。タップするだけで記録でき、試合後すぐにスコアシートを共有できます。";

export const metadata: Metadata = {
  title: "Benchbook — バスケの控えスコアアプリ | Arti",
  description,
  alternates: { canonical: "/products/benchbook" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://arti-lab.jp/products/benchbook",
    siteName: "Arti",
    title: "Benchbook — バスケの控えスコアアプリ",
    description,
    images: [{ url: "/benchbook/ogp.png", width: 1200, height: 630, alt: "Benchbook" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benchbook — バスケの控えスコアアプリ",
    description,
    images: ["/benchbook/ogp.png"],
  },
};

/** App Store の公開後にURLを入れる。空のあいだは「近日公開」と表示する */
const APP_STORE_URL = "";

const FEATURES = [
  {
    title: "選手を選んで、押すだけ",
    body: "背番号をタップして、得点・ファウル・リバウンドなどを記録します。チームファウル、個人ファウル、タイムアウトの残りがひと目でわかり、押し間違いはすぐ取り消せます。",
  },
  {
    title: "Qの終わりにオフィシャルと照合",
    body: "得点・チームファウル・タイムアウトを大きく表示します。食い違いは、選手ごとの表で1件ずつ直せます。",
  },
  {
    title: "試合後すぐ、スコアシートを共有",
    body: "ランニングスコアとボックススコアを自動で作り、PDFまたは画像でLINEやメールに送れます。",
  },
  {
    title: "チームと選手の成績",
    body: "戦績、Q別の得点、シュート成功率、選手ごとの合計と1試合平均。期間をしぼって、シーズンの成績を確認できます。",
  },
  {
    title: "電波がなくても使える",
    body: "記録はすべてiPhoneの中に保存します。体育館で電波が弱くても止まりません。アカウント登録は不要で、広告もありません。",
  },
];

const SHOTS = [
  { src: "/benchbook/shot-home.png", alt: "ホーム画面。進行中の試合と直近の試合" },
  { src: "/benchbook/shot-analysis.png", alt: "チームの分析画面。戦績と得点の推移" },
  { src: "/benchbook/shot-player.png", alt: "選手の成績ページ" },
];

export default function BenchbookPage() {
  return (
    <>
      <ProductHeader links={BENCHBOOK_LINKS} />
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
          <div className="reveal is-visible grid items-center gap-10 md:grid-cols-2">
            <div>
              <Image
                src="/benchbook/icon.png"
                alt="Benchbook のアイコン"
                width={88}
                height={88}
                priority
                className="rounded-[22px] shadow-sm"
              />
              <p className="label mt-8 text-xs text-aitetsu/70">Product</p>
              <h1 className="mt-2 leading-[1.3] font-medium tracking-[0.03em] text-aitetsu [font-size:clamp(2rem,5vw,3rem)]">
                Benchbook
              </h1>
              <p className="mt-3 text-lg text-sumi/90">
                バスケの控えスコアを、iPhone 1台で。
              </p>
              <p className="mt-5 max-w-md text-[0.95rem] leading-[1.9] text-sumi/85">
                {description}
              </p>
              <div className="mt-8">
                {APP_STORE_URL ? (
                  <a
                    href={APP_STORE_URL}
                    className="inline-flex items-center justify-center rounded-sm bg-shu px-8 py-3.5 text-sm font-medium tracking-wide text-nama shadow-sm transition-colors duration-200 hover:bg-[#a8481b]"
                  >
                    App Store で入手
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-sm border border-aitetsu/30 px-8 py-3.5 text-sm font-medium tracking-wide text-aitetsu">
                    App Store で近日公開
                  </span>
                )}
                <p className="mt-3 text-xs text-sumi/70">iPhone 用・無料</p>
              </div>
            </div>
            <Image
              src="/benchbook/shot-live.png"
              alt="試合中の入力画面。両チームの選手と記録のボタンが並ぶ"
              width={1200}
              height={554}
              priority
              className="h-auto w-full rounded-2xl border border-aitetsu/15 shadow-lg"
            />
          </div>
        </section>

        {/* Features */}
        <SectionShell
          id="features"
          code="B1"
          label="Features"
          title="できること"
          className="py-16 sm:py-24"
        >
          <ul className="space-y-10">
            {FEATURES.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 60}>
                <h3 className="text-lg font-medium tracking-wide text-aitetsu">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-[1.9] text-sumi/90">{f.body}</p>
              </Reveal>
            ))}
          </ul>
        </SectionShell>

        {/* Screens */}
        <SectionShell
          id="screens"
          code="B2"
          label="Screens"
          title="画面"
          className="py-16 sm:py-24"
        >
          <Reveal className="grid grid-cols-3 gap-3 sm:gap-5">
            {SHOTS.map((s) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={430}
                height={932}
                className="h-auto w-full rounded-xl border border-aitetsu/15 shadow-md sm:rounded-2xl"
              />
            ))}
          </Reveal>
          <p className="mt-6 text-xs text-sumi/70">
            画面の数値はサンプルです。本アプリの記録は控えで、公式記録ではありません。
          </p>
        </SectionShell>

        {/* Support */}
        <SectionShell
          id="support"
          code="B3"
          label="Support"
          title="サポート"
          className="pt-16 pb-24 sm:pt-24 sm:pb-32"
        >
          <Reveal className="max-w-xl">
            <p className="text-[0.95rem] leading-[1.9] text-sumi/90">
              使い方は
              <Link href="/products/benchbook/support" className="text-shu underline underline-offset-4">
                サポートページ
              </Link>
              、情報の扱いは
              <Link href="/products/benchbook/privacy" className="text-shu underline underline-offset-4">
                プライバシーポリシー
              </Link>
              をご覧ください。不具合の報告やご要望は、メールでお送りください。
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-shu px-8 py-3.5 text-sm font-medium tracking-wide text-nama shadow-sm transition-colors duration-200 hover:bg-[#a8481b]"
            >
              {CONTACT_EMAIL}
            </a>
          </Reveal>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
