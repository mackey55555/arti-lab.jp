import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProductHeader from "@/components/product/ProductHeader";
import Prose from "@/components/product/Prose";
import { BENCHBOOK_LINKS } from "../../links";
import CopyCode from "./CopyCode";

export const metadata: Metadata = {
  title: "Benchbook チームへの招待 | Arti",
  description: "Benchbook のチームへの招待です。",
  // 招待のコードがアドレスに入るので、検索に出さない
  robots: { index: false, follow: false },
};

const APP_STORE_URL = "https://apps.apple.com/jp/app/id6835338670";

/**
 * チームへの招待リンクの受け口。アプリが入っている iPhone では、このアドレスを開くとアプリが直接開く
 * （ユニバーサルリンク）。アプリがないとき・ほかの端末で開いたときに、このページが出る。
 */
export default async function BenchbookJoin({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  // 招待のコードは英数字36文字。それ以外は出さない
  const valid = /^[0-9a-f]{36}$/i.test(token);

  return (
    <>
      <ProductHeader links={BENCHBOOK_LINKS} />
      <main className="relative z-10">
        <Prose label="Benchbook" title="チームへの招待">
          {valid ? (
            <>
              <p>Benchbook のチームへの招待が届いています。次の順で参加できます。</p>
              <h2>1. アプリを入れる</h2>
              <p>
                <a href={APP_STORE_URL}>App Store で Benchbook を入手</a>
                （iPhone 用・無料）
              </p>
              <h2>2. アプリで招待を開く</h2>
              <p>
                <a href={`benchbook://join/${token}`}>Benchbook で開く</a>
              </p>
              <p>
                開けないときは、アプリの「設定 → チームプラン」でサインインしてから、「招待で入る」に次のコードを貼ってください。
              </p>
              <CopyCode code={token.toLowerCase()} />
              <p>招待は、送られてから14日間有効です。</p>
            </>
          ) : (
            <p>この招待のリンクは正しくありません。送ってくれた人に、もう一度送ってもらってください。</p>
          )}
        </Prose>
      </main>
      <Footer />
    </>
  );
}
