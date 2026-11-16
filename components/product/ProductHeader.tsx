import Link from "next/link";
import { Lockup } from "../Logo";

/** 製品ページ用のヘッダー。ロゴでトップへ戻り、右に製品内のリンクを置く。 */
export default function ProductHeader({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-aitetsu/10 bg-nama/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Arti ホームへ" className="shrink-0 rounded-sm">
          <Lockup height={30} priority />
        </Link>
        <nav aria-label="製品ページ">
          <ul className="flex items-center gap-5 sm:gap-8">
            {links.map((item, i) => (
              // 幅の狭い画面では、ロゴと重ならないよう先頭(製品トップ)を省く
              <li key={item.href} className={i === 0 ? "hidden sm:block" : undefined}>
                <Link
                  href={item.href}
                  className="label text-[0.65rem] text-aitetsu/80 transition-colors hover:text-shu sm:text-[0.7rem]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
