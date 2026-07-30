import Reveal from "./Reveal";
import SectionShell from "./SectionShell";

// 技術 — Tier 1: 主戦場(大きく見せる)
const CORE: { name: string; detail?: string }[] = [
  { name: "TypeScript / Next.js / React" },
  { name: "PHP / Laravel" },
  {
    name: "AWS",
    detail:
      "EC2 / RDS / S3 / CloudFront / Lambda / API Gateway、サーバーレス設計、CloudFormation",
  },
  { name: "AI駆動開発" },
];

// 技術 — Tier 2: 実戦経験あり(普通に見せる)
const PRACTICAL = [
  {
    cat: "モバイル",
    val: "React Native / Flutter / Swift / Kotlin(ストア申請まで)",
  },
  {
    cat: "BaaS / DB",
    val: "Supabase、Prisma、PostgreSQL、microCMS(ヘッドレスCMS構成)",
  },
  {
    cat: "SaaS連携",
    val: "Stripe、LINE(LIFF)、Shopify Plus・SSO連携",
  },
];

// 技術 — Tier 3: 幅の証明(一行で流す)
const BREADTH =
  "Unity(C#)、IoT(Raspberry Pi / BLE)、組込み、Python(ML / AIエージェント)";

// PM — 技術と並列の柱
const PM = [
  "要件定義・仕様策定(上流〜実装の一気通貫)",
  "チームマネジメント: 2〜10名規模、全体最大20名のプロジェクト経験",
  "ベンダーコントロール、コードレビュー、品質管理",
];

const IT_STREAK_APPS = [
  {
    label: "基本情報版",
    url: "https://apps.apple.com/jp/app/it-streak-%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1%E6%8A%80%E8%A1%93%E8%80%85%E8%A9%A6%E9%A8%93/id6758322757",
  },
  {
    label: "Iパス版",
    url: "https://apps.apple.com/jp/app/it-streak-it%E3%83%91%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E5%AF%BE%E7%AD%96/id6760613886",
  },
];

function PillarHeading({ ja, en }: { ja: string; en: string }) {
  return (
    <h3 className="text-base font-medium tracking-wide text-aitetsu">
      {ja}
      <span className="label ml-2 text-[0.6rem] text-aitetsu/50">{en}</span>
    </h3>
  );
}

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      no="03"
      code="03"
      label="Skills"
      title="スキルセット"
      watermark="STRUMENTI"
      watermarkSide="left"
      className="pt-12 pb-20 sm:pt-20 sm:pb-32"
    >
      <div className="grid gap-8 sm:grid-cols-5 sm:gap-10">
        {/* 技術の柱 */}
        <Reveal className="border-t-2 border-shu/70 pt-5 sm:col-span-3">
          <PillarHeading ja="技術" en="Engineering" />

          <div className="mt-5 space-y-4">
            {CORE.map((s) => (
              <div key={s.name}>
                <p className="text-[0.95rem] font-medium text-aitetsu">
                  {s.name}
                </p>
                {s.detail && (
                  <p className="mt-0.5 text-[0.8rem] leading-relaxed text-sumi/75">
                    {s.detail}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2.5 border-t border-aitetsu/15 pt-5">
            {PRACTICAL.map((s) => (
              <p key={s.cat} className="text-[0.85rem] leading-relaxed text-sumi/85">
                <span className="font-medium text-aitetsu">{s.cat}: </span>
                {s.val}
              </p>
            ))}
          </div>

          <p className="mt-5 border-t border-aitetsu/15 pt-4 text-[0.78rem] leading-relaxed text-sumi/65">
            <span className="text-aitetsu/70">ほか — </span>
            {BREADTH}
          </p>
        </Reveal>

        {/* PM の柱 */}
        <Reveal delay={100} className="border-t-2 border-shu/70 pt-5 sm:col-span-2">
          <PillarHeading ja="PM" en="Management" />

          <ul className="mt-5 space-y-2.5">
            {PM.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-[0.85rem] leading-relaxed text-sumi/85"
              >
                <span
                  aria-hidden
                  className="absolute top-[0.72em] left-0 h-px w-2.5 bg-shu"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* 自社プロダクト — IT Streak */}
      <Reveal delay={150} className="mt-12 border-t border-aitetsu/15 pt-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-medium text-aitetsu">IT Streak</h3>
          <span className="label text-[0.6rem] text-shu">Own product</span>
        </div>
        <p className="mt-1.5 text-[0.9rem] leading-[1.85] text-sumi/85 sm:text-[0.95rem]">
          IT資格学習アプリ。App Store で公開中。
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-6 gap-y-2">
          {IT_STREAK_APPS.map((app) => (
            <a
              key={app.label}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-aitetsu underline decoration-shu decoration-2 underline-offset-4 transition-colors hover:text-shu"
            >
              {app.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
