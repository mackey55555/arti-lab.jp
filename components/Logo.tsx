import Image from "next/image";

// 元アセットの実寸(アスペクト比の算出に使用)
const MONOGRAM_RATIO = 1038 / 995; // 高さ / 幅
const LOCKUP_RATIO = 572 / 1743; // 高さ / 幅

/** 六角モノグラム単体。Hero・Footer・装飾用。 */
export function Monogram({
  size = 40,
  title = "Arti",
  priority = false,
  className,
}: {
  size?: number;
  title?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/logo-monogram.png"
      alt={title}
      width={size}
      height={Math.round(size * MONOGRAM_RATIO)}
      priority={priority}
      className={className}
    />
  );
}

/** 横並びロゴ(モノグラム + ARTI)。ヘッダー用。height を指定する。 */
export function Lockup({
  height = 30,
  priority = false,
  className,
}: {
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/logo-lockup.png"
      alt="Arti"
      height={height}
      width={Math.round(height / LOCKUP_RATIO)}
      priority={priority}
      className={className}
    />
  );
}
