import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProductHeader from "@/components/product/ProductHeader";
import Prose from "@/components/product/Prose";
import { BENCHBOOK_LINKS, CONTACT_EMAIL } from "../links";

export const metadata: Metadata = {
  title: "Benchbook プライバシーポリシー | Arti",
  description: "バスケットボールの控えスコアアプリ Benchbook のプライバシーポリシーです。",
  alternates: { canonical: "/products/benchbook/privacy" },
};

export default function BenchbookPrivacy() {
  return (
    <>
      <ProductHeader links={BENCHBOOK_LINKS} />
      <main className="relative z-10">
        <Prose label="Benchbook" title="プライバシーポリシー" updated="2026年11月16日">
          <p>
            Benchbook(以下「本アプリ」)は、バスケットボールの試合の記録をつけるためのアプリです。このページでは、本アプリが扱う情報について説明します。
          </p>

          <h2>1. 本アプリが集める情報</h2>
          <p>
            <strong>本アプリは、利用者の情報を集めません。</strong>
          </p>
          <ul>
            <li>
              本アプリに入力した内容(チーム名、選手の氏名と背番号、試合の記録)は、お使いの端末の中だけに保存されます。開発者のサーバーや第三者には送られません。
            </li>
            <li>アカウントの登録はありません。</li>
            <li>広告は表示しません。利用状況を調べるための解析ツールも入れていません。</li>
          </ul>

          <h2>2. 端末の外に情報が出るとき</h2>
          <p>次の場合に限り、情報が端末の外に出ます。いずれも、利用者ご自身の操作によるものです。</p>
          <ul>
            <li>
              <strong>共有</strong>
              :スコアシートや成績をPDF・画像で共有したとき、またはバックアップを書き出したとき。送り先は利用者が選びます。
            </li>
            <li>
              <strong>アプリの更新確認</strong>
              :本アプリは、新しい版があるかを配信サーバー(Expo Application Services)に問い合わせます。このとき送られるのはアプリの版の情報で、入力した記録は含まれません。
            </li>
          </ul>

          <h2>3. 選手の氏名について</h2>
          <p>
            本アプリには、利用者以外の方(選手など)の氏名を入力できます。入力した氏名は端末の中だけに保存されますが、共有したファイルには氏名が含まれます。共有する相手と範囲は、利用者の責任で決めてください。
          </p>

          <h2>4. 情報の削除</h2>
          <ul>
            <li>試合やチームは、アプリ内でいつでも削除できます。</li>
            <li>アプリを端末から削除すると、端末内の記録もすべて消えます。</li>
          </ul>

          <h2>5. 今後の変更</h2>
          <p>
            今後、複数の人で記録を共有する機能(チームプラン)を追加する予定です。その際は、アカウント情報や記録をサーバーで預かることになるため、このページを更新し、アプリ内でもお知らせします。
          </p>

          <h2>6. お問い合わせ</h2>
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
