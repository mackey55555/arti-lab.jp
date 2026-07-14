import Reveal from "./Reveal";
import SectionShell from "./SectionShell";

const STATS = [
  { value: "9", unit: "年", label: "エンジニア歴" },
  { value: "40", unit: "+", label: "プロジェクト" },
  { value: "岡山", unit: "", label: "拠点" },
];

export default function About() {
  return (
    <SectionShell
      id="about"
      no="01"
      code="01"
      label="About"
      title="ARTI という屋号のこと"
      watermark="ARTIGIANO"
      watermarkSide="left"
      className="pt-24 pb-20 sm:pt-40 sm:pb-28"
    >
      <Reveal
        as="div"
        className="max-w-2xl space-y-6 text-[0.95rem] leading-[1.95] text-sumi/90 sm:text-base"
      >
        <p>
          Arti は、イタリア語で職人を意味する Artigiano(アルティジャーノ)から取りました。
        </p>
        <p>
          エンジニアはサラリーマンではなく、職人だと考えています。要件を聴き、構造を設計し、コードを磨き、動くものを納める。ひとつひとつの仕事に名前を刻む覚悟でつくる——それが
          Arti の仕事の流儀です。
        </p>
        <p>
          ロゴの六角形は、中世の職人たちが集ったギルドの紋章から。最後の一画とベースラインに引いた朱は、仕事に判を捺す「落款」の色です。
        </p>
      </Reveal>

      <Reveal
        as="dl"
        delay={120}
        className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-aitetsu/15 pt-8"
      >
        {STATS.map((s) => (
          <div key={s.label}>
            <dd className="font-montserrat text-2xl font-medium text-aitetsu sm:text-3xl">
              {s.value}
              <span className="text-shu">{s.unit}</span>
            </dd>
            <dt className="mt-1 text-xs text-aitetsu/70">{s.label}</dt>
          </div>
        ))}
      </Reveal>
    </SectionShell>
  );
}
