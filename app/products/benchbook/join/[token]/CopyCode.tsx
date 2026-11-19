"use client";

import { useState } from "react";

/** 招待のコードと、コピーのボタン */
export default function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // コピーできない環境では、表示されているコードを手で選んでもらう
    }
  };
  return (
    <p>
      <code className="break-all">{code}</code>
      <br />
      <button
        type="button"
        onClick={copy}
        className="mt-3 inline-flex items-center justify-center rounded-sm border border-aitetsu/30 px-5 py-2.5 text-sm font-medium tracking-wide text-aitetsu"
      >
        {copied ? "コピーしました" : "コードをコピー"}
      </button>
    </p>
  );
}
