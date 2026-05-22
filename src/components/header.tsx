"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import {
  cityCards,
  getLocalizedText,
  languageLabels,
  primaryNavigation,
  supportedLanguages,
  type SiteLanguage,
  uiCopy,
} from "@/data/site-data";

const heroRoutes = new Set(["/", "/almaty", "/astana"]);

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  return (
    <HeaderView
      key={pathname}
      pathname={pathname}
      language={language}
      setLanguage={setLanguage}
    />
  );
}

interface HeaderViewProps {
  pathname: string;
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
}

function HeaderView({ pathname, language, setLanguage }: HeaderViewProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookingHref = pathname.startsWith("/astana")
    ? "/astana#booking"
    : "/almaty#booking";

  const heroMode = heroRoutes.has(pathname);
  const transparent = heroMode && !isScrolled && !menuOpen;
  const navTextClass = transparent ? "text-stone-100" : "text-stone-900";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-b border-stone-200/85 bg-[rgba(250,246,239,0.84)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className={`underline-link text-xl font-semibold tracking-[0.18em] uppercase transition ${navTextClass}`}
        >
          Hi Hotel
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`underline-link text-sm font-medium transition ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : `${navTextClass} hover:text-[var(--color-accent)]`
                }`}
              >
                {getLocalizedText(item.label, language)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <details className="group relative">
            <summary
              className={`flex cursor-pointer list-none items-center gap-1 rounded-full border px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition [&::-webkit-details-marker]:hidden ${
                transparent
                  ? "border-white/40 text-stone-100 hover:bg-white/10"
                  : "border-stone-300 bg-white/70 text-stone-800 hover:bg-white"
              }`}
            >
              {getLocalizedText(uiCopy.header.city, language)}
              <ChevronDown size={14} />
            </summary>
            <div className="absolute right-0 z-10 mt-2 hidden min-w-44 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg group-open:block">
              {cityCards.map((city) => (
                <Link
                  key={city.slug}
                  href={city.href}
                  className="block px-4 py-2.5 text-sm text-stone-800 transition hover:bg-stone-100"
                >
                  {getLocalizedText(city.name, language)}
                </Link>
              ))}
            </div>
          </details>

          <div
            className={`flex items-center gap-1 rounded-full border px-1 py-1 ${
              transparent
                ? "border-white/35 bg-white/10"
                : "border-stone-300 bg-white/70"
            }`}
          >
            <span className={transparent ? "text-stone-100" : "text-stone-800"}>
              <Globe size={14} className="ml-2 mr-1" />
            </span>
            {supportedLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-widest transition ${
                  lang === language
                    ? "bg-stone-900 text-stone-50"
                    : transparent
                      ? "text-stone-100 hover:bg-white/10"
                      : "text-stone-700 hover:bg-stone-200/70"
                }`}
              >
                {languageLabels[lang]}
              </button>
            ))}
          </div>

          <Link
            href={bookingHref}
            className={`btn-premium rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              transparent
                ? "bg-white text-stone-900 hover:bg-stone-200"
                : "bg-stone-900 text-stone-50 hover:bg-stone-700"
            }`}
          >
            {getLocalizedText(uiCopy.header.book, language)}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className={`float-soft flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            transparent
              ? "border-white/45 bg-white/10 text-stone-100"
              : "border-stone-300 bg-white/70 text-stone-900"
          }`}
          aria-label={getLocalizedText(uiCopy.header.menuLabel, language)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-transparent transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[430px] border-stone-200/80 bg-[rgba(250,246,239,0.97)]"
            : "max-h-0"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl space-y-5 px-6 py-5">
          <nav className="grid gap-2">
            {primaryNavigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-stone-900 text-stone-50"
                      : "text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {getLocalizedText(item.label, language)}
                </Link>
              );
            })}
          </nav>

          <div className="grid gap-2">
            {cityCards.map((city) => (
              <Link
                key={city.slug}
                href={city.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-stone-300/70 bg-white px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
              >
                {getLocalizedText(city.name, language)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {supportedLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-widest ${
                  lang === language
                    ? "bg-stone-900 text-stone-50"
                    : "bg-white text-stone-700"
                }`}
              >
                {languageLabels[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
