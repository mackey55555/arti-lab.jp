import Reveal from "./Reveal";
import SectionShell from "./SectionShell";

const GILDA_INSTAGRAM_URL = "https://www.instagram.com/gilda.okayama/";

const ITEMS = [
  {
    name: "TechGuild",
    body: "岡山のエンジニアコミュニティを主宰しています(約70名)。学びと交流の場を、ギルドのように。",
    href: "https://techguild.jp",
    cta: "techguild.jp",
  },
  {
    name: "gilda",
    body: "岡山でバーを共同経営しています。gilda はイタリア語で「ギルド」。技術の話も、そうでない話も。",
    href: GILDA_INSTAGRAM_URL,
    cta: "Instagram",
  },
];

export default function Community() {
  return (
    <SectionShell
      id="community"
      no="04"
      code="04"
      label="Community & Bar"
      title="コミュニティとバー"
      watermark="GILDA"
      watermarkSide="right"
      className="pt-16 pb-20 sm:pt-28 sm:pb-28"
    >
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.name}
            delay={i * 80}
            className="flex flex-col border-t-2 border-shu/70 pt-5"
          >
            <h3 className="font-montserrat text-lg font-medium tracking-wide text-aitetsu">
              {item.name}
            </h3>
            <p className="mt-3 grow text-[0.9rem] leading-[1.9] text-sumi/85 sm:text-[0.95rem]">
              {item.body}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 self-start text-sm text-aitetsu underline decoration-shu decoration-2 underline-offset-4 transition-colors hover:text-shu"
            >
              {item.cta}
              <span aria-hidden>↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
