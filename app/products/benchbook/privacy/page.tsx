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
        <Prose label="Benchbook" title="プライバシーポリシー" updated="2026年11月19日">
          <p>
            Benchbook(以下「本アプリ」)は、バスケットボールの試合の記録をつけるためのアプリです。このページでは、本アプリが扱う情報について説明します。
          </p>
          <p>
            本アプリには、1台で使う使い方と、チームで記録を共有する使い方(チームプラン)があります。扱う情報は、この2つで違います。
          </p>

          <h2>1. 1台で使うとき(サインインしないとき)</h2>
          <p>
            <strong>本アプリは、利用者の情報を集めません。</strong>
          </p>
          <ul>
            <li>
              本アプリに入力した内容(チーム名、選手の氏名と背番号、試合の記録)は、お使いの端末の中だけに保存されます。開発者のサーバーや第三者には送られません。
            </li>
            <li>アカウントの登録は要りません。</li>
          </ul>

          <h2>2. チームプランを使うとき(サインインしたとき)</h2>
          <p>チームプランでは、メンバーの間で記録を共有するために、次の情報を開発者のサーバーで預かります。</p>
          <ul>
            <li>
              <strong>アカウントの情報</strong>
              :Apple または Google のアカウントでサインインしたときに受け取る、メールアドレスと名前。本人の確認と、チームのメンバーの一覧に名前を出すために使います。パスワードは受け取りません。
            </li>
            <li>
              <strong>チームの内容</strong>
              :チーム名、名簿(選手の氏名と背番号)、チームに送った試合の記録。同じチームのメンバーだけが見られます。個人の置き場所にある記録は、サーバーに送られません。
            </li>
            <li>
              <strong>契約の情報</strong>
              :チームプランを購入した場合の、契約の種類と期限。支払いは Apple を通じて行われ、クレジットカードなどの支払い情報を開発者が受け取ることはありません。
            </li>
          </ul>
          <p>預かった情報を、広告や、本アプリの提供以外の目的に使うことはありません。第三者に販売することもありません。</p>

          <h2>3. 情報を預ける先</h2>
          <p>チームプランの提供のために、次の事業者のサービスを使います。</p>
          <ul>
            <li>Supabase(データの保存とサインイン。保存先は日本国内のデータセンターです)</li>
            <li>Apple、Google(サインイン)</li>
            <li>Apple、RevenueCat(契約の確認)</li>
          </ul>

          <h2>4. 端末の外に情報が出る、そのほかの場合</h2>
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
          <p>広告は表示しません。利用状況を調べるための解析ツールも入れていません。</p>

          <h2>5. 選手の氏名について</h2>
          <p>
            本アプリには、利用者以外の方(選手など)の氏名を入力できます。チームプランでは、入力した氏名がサーバーに保存され、同じチームのメンバーに共有されます。チームに登録する氏名と、共有する相手の範囲は、チームの中で確認のうえ決めてください。氏名を入れずに、背番号だけで使うこともできます。
          </p>

          <h2>6. 情報の削除</h2>
          <ul>
            <li>試合やチームの名簿は、アプリ内でいつでも削除できます。</li>
            <li>
              アカウントは、アプリの「設定 → チームプラン → アカウントを削除」で削除できます。削除すると、アカウントの情報と、ご自身が運営者のチームの内容がサーバーから消えます。メンバーとして参加していたチームに記録した試合は、そのチームに残ります。
            </li>
            <li>チームは、運営者がアプリ内で削除できます。</li>
            <li>アプリを端末から削除すると、端末内の記録は消えます。サーバーの情報は、上の方法で削除するまで残ります。</li>
            <li>アプリを使えない場合は、下のお問い合わせ先に連絡いただければ、削除に対応します。</li>
          </ul>

          <h2>7. お問い合わせ</h2>
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
