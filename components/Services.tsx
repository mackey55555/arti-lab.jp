import Reveal from "./Reveal";
import SectionShell from "./SectionShell";

const SERVICES = [
  {
    no: "01",
    title: "Webシステム開発",
    body: "要件定義から設計・実装・運用まで一貫対応。PHP/Laravel、TypeScript/Next.js、AWS・サーバーレス構成を中心に、業務システムからECまで。",
  },
  {
    no: "02",
    title: "モバイルアプリ開発",
    body: "iOS / Android。React Native・Flutter によるクロスプラットフォーム開発と、ストア申請までの伴走。",
  },
  {
    no: "03",
    title: "PM・上流工程支援",
    body: "要件整理、仕様策定、開発チームのマネジメント。「作る人の目線」で意思決定を支えます。",
  },
  {
    no: "04",
    title: "AI活用開発",
    body: "Claude Code をはじめとする AI エージェントを開発フローに組み込み、品質と速度を両立。AI 時代の開発プロセス設計そのものの支援も。",
  },
];

export default function Services() {
  return (
    <SectionShell
      id="services"
      no="02"
      code="02"
      label="Services"
      title="できること"
      watermark="OFFICINA"
      watermarkSide="right"
      className="pt-16 pb-16 sm:pt-28 sm:pb-20"
    >
      <ul className="border-t border-aitetsu/15">
        {SERVICES.map((s, i) => (
          <Reveal
            as="li"
            key={s.no}
            delay={i * 60}
            className="border-b border-aitetsu/15 py-6 sm:py-7"
          >
            <div className="flex gap-5 sm:gap-7">
              <span className="font-montserrat text-sm font-semibold tracking-wider text-shu">
                {s.no}
              </span>
              <div>
                <h3 className="text-base font-medium text-aitetsu sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-[1.9] text-sumi/85 sm:text-[0.95rem]">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
