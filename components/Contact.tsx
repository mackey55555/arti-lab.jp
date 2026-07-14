import Reveal from "./Reveal";
import SectionShell from "./SectionShell";

const EMAIL = "a.makihara@arti-lab.jp";

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      code="05"
      label="Contact"
      title="お問い合わせ"
      className="pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <Reveal className="max-w-xl">
        <p className="text-[0.95rem] leading-[1.9] text-sumi/90 sm:text-base">
          お仕事のご相談・お見積りは、メールにてお気軽にご連絡ください。
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-shu px-8 py-3.5 text-sm font-medium tracking-wide text-nama shadow-sm transition-colors duration-200 hover:bg-[#a8481b]"
        >
          {EMAIL}
        </a>
      </Reveal>
    </SectionShell>
  );
}
