import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const description =
  "要件定義から設計、実装、運用まで。岡山を拠点に、Webとモバイルを一人で作り切るエンジニアです。";

export const metadata: Metadata = {
  metadataBase: new URL("https://arti-lab.jp"),
  title: "Arti | 槇原瑛 — フルスタックエンジニア / PM(岡山)",
  description,
  keywords: [
    "Arti",
    "槇原瑛",
    "Akira Makihara",
    "フリーランスエンジニア",
    "フルスタックエンジニア",
    "PM",
    "岡山",
    "Next.js",
    "Laravel",
    "アプリ開発",
  ],
  authors: [{ name: "Akira Makihara" }],
  creator: "Akira Makihara",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://arti-lab.jp",
    siteName: "Arti",
    title: "Arti | 槇原瑛 — フルスタックエンジニア / PM(岡山)",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arti | 槇原瑛 — フルスタックエンジニア / PM(岡山)",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${montserrat.variable} ${notoSansJP.variable} h-full`}
    >
      <body className="min-h-full">
        <noscript>
          {/* JS 無効時はフェードイン用の初期非表示を解除 */}
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {/* 図面の外周フレーム: 「一枚の図面の中にいる」構造 */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-3 z-30 border border-aitetsu/20 sm:inset-4"
        />
        {children}
      </body>
    </html>
  );
}
