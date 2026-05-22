"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import {
  cityCards,
  getLocalizedText,
  primaryNavigation,
  uiCopy,
} from "@/data/site-data";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/hihotel.kz" },
  { label: "TikTok", href: "https://tiktok.com/@hihotel.kz" },
  { label: "WhatsApp", href: "https://wa.me/77770001122" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="mt-24 border-t border-stone-200/75 bg-[#16120f] text-stone-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-10">
        <Reveal direction="up">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-stone-400">
              Hi Hotel
            </p>
            <h3 className="mt-4 max-w-sm text-2xl leading-snug font-semibold text-stone-100">
              {getLocalizedText(uiCopy.footer.subtitle, language)}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              {getLocalizedText(uiCopy.footer.description, language)}
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400">
              {getLocalizedText(uiCopy.footer.navigation, language)}
            </p>
            <ul className="mt-4 space-y-2">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="underline-link text-sm text-stone-300 transition hover:text-white"
                  >
                    {getLocalizedText(item.label, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="up" delay={180}>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400">
              {getLocalizedText(uiCopy.footer.citiesAndSocial, language)}
            </p>
            <ul className="mt-4 space-y-2">
              {cityCards.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={city.href}
                    className="underline-link text-sm text-stone-300 transition hover:text-white"
                  >
                    {getLocalizedText(city.name, language)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium rounded-full border border-stone-700 px-3 py-1.5 text-xs font-medium text-stone-300 transition hover:border-stone-400 hover:text-stone-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-stone-800/90">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-stone-500 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {year} Hi Hotel. {getLocalizedText(uiCopy.footer.rights, language)}
          </p>
          <p>{getLocalizedText(uiCopy.footer.frontendOnly, language)}</p>
        </div>
      </div>
    </footer>
  );
}
