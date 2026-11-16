import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProductHeader from "@/components/product/ProductHeader";
import Prose from "@/components/product/Prose";
import { BENCHBOOK_LINKS, CONTACT_EMAIL } from "../links";

export const metadata: Metadata = {
  title: "Benchbook サポート | Arti",
  description: "バスケットボールの控えスコアアプリ Benchbook のよくある質問とお問い合わせ先です。",
  alternates: { canonical: "/products/benchbook/support" },
};

const FAQ = [
  {
    q: "記録はどこに保存されますか?",
    a: "お使いのiPhoneの中だけに保存されます。機種変更の前には、「設定 → バックアップ」で記録を書き出し、新しい端末で読み込んでください。",
  },
  {
    q: "間違えて入力した記録を直せますか?",
    a: "入力画面の「取り消す」で直前の記録を消せます。あとから直すときは、照合画面の「修正する」か、試合詳細の「得点・ファウルを直す」を使ってください。",
  },
  {
    q: "公式のスコアシートとして使えますか?",
    a: "使えません。本アプリの記録は控えで、公式記録ではありません。",
  },
  {
    q: "スコアシートや成績をほかの人に送れますか?",
    a: "試合詳細と分析の「共有」から、PDFまたは画像で送れます。",
  },
  {
    q: "電波のない体育館でも使えますか?",
    a: "使えます。記録・集計・スコアシートの作成は、すべて端末の中で行います。",
  },
];

export default function BenchbookSupport() {
  return (
    <>
      <ProductHeader links={BENCHBOOK_LINKS} />
      <main className="relative z-10">
        <Prose label="Benchbook" title="サポート">
          <p>
            Benchbook は、バスケットボールのベンチで控えのスコアをつけるためのiPhoneアプリです。
          </p>

          <h2>よくある質問</h2>
          {FAQ.map((item) => (
            <div key={item.q}>
              <p>
                <strong>{item.q}</strong>
              </p>
              <p>{item.a}</p>
            </div>
          ))}

          <h2>お問い合わせ</h2>
          <p>不具合の報告やご要望は、次の連絡先までお送りください。</p>
          <p>
            Arti
            <br />
            メール:<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </Prose>
      </main>
      <Footer />
    </>
  );
}
