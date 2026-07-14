"use client";

import { useEffect, useState } from "react";
import { Lockup } from "./Logo";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-aitetsu/10 bg-nama/80 backdrop-blur-md"
          : "border-transparent bg-nama/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          aria-label="Arti ホームへ"
          className="shrink-0 rounded-sm"
        >
          <Lockup height={30} priority />
        </a>

        <nav aria-label="セクション" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label text-[0.7rem] text-aitetsu/80 transition-colors hover:text-shu"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
