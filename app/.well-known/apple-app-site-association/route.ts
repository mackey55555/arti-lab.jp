/**
 * iPhone のユニバーサルリンクの設定。Benchbook の招待リンク（/products/benchbook/join/…）を、
 * アプリが入っている端末ではアプリで直接開く。
 */
const association = {
  applinks: {
    details: [
      {
        appIDs: ["2PH2AQ6R6D.jp.arti-lab.benchbook"],
        components: [{ "/": "/products/benchbook/join/*", comment: "Benchbook team invites" }],
      },
    ],
  },
};

export const dynamic = "force-static";

export function GET() {
  return Response.json(association);
}
