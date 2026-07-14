# arti-lab.jp

個人事業「Arti」(フリーランスエンジニア 槇原瑛)の公式サイト。
名刺の QR コードの飛び先・商談前に閲覧される営業資産。1ページ完結の LP。

Next.js (App Router) + TypeScript + Tailwind CSS v4 / Vercel デプロイ。全て静的。

## 開発

```bash
npm run dev     # 開発サーバ (http://localhost:3000)
npm run build   # 本番ビルド
npm run start   # 本番サーバ
```

## 構成

```
app/
  layout.tsx           メタデータ・OGP・フォント (Montserrat / Noto Sans JP)
  page.tsx             セクションの組み立て
  globals.css          デザイントークン(生成り/藍鉄/朱/墨)・reveal・ノイズ
  icon.svg             favicon(モノグラム)
  apple-icon.tsx       apple touch icon(next/og で生成)
  opengraph-image.tsx  OGP 1200×630(生成り地 + 横並びロゴ + 朱の一線)
  sitemap.ts / robots.ts
components/
  Header / Hero / About / Services / Skills / Community / Contact / Footer
  Logo.tsx             public/ の実ロゴPNGを next/image で表示
  SectionShell.tsx     非対称2カラム枠(sticky表題欄 + 巨大番号 + 寸法線ディバイダ)
  Watermark.tsx        巨大欧文ウォーターマーク(視差 / reduced-motion 尊重)
  Reveal.tsx           IntersectionObserver フェードイン(reduced-motion 尊重)
public/
  logo-lockup.png      横並びロゴ(ヘッダー)
  logo-monogram.png    六角モノグラム(Hero/Footer/アイコン)
```

## デザイン

- カラーは名刺と共通(生成り #F5F3EC / 藍鉄 #545472 / 朱 #C35823 / 墨 #26241F)
- 「朱の一線」を全体のモチーフに。各見出し下・Hero・フッター上端に一本
- 生成り地で固定(ダークモード非対応)

## デプロイ (Vercel)

1. GitHub リポジトリ作成 → Vercel にインポート
2. ドメイン設定に `arti-lab.jp` / `www.arti-lab.jp` を追加
3. DNS にレコード追加:
   - apex: A レコード → Vercel 指定 IP
   - www: CNAME → `cname.vercel-dns.com`
   - **既存の MX / TXT(SPF・DKIM・DMARC・site-verification)は絶対に削除しない**(Google Workspace のメールが止まる)
4. www → apex のリダイレクトを Vercel 側で設定
