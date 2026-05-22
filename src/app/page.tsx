"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Compass,
  MoonStar,
  Sparkles,
  Trees,
  UsersRound,
  Wifi,
} from "lucide-react";
import { CityCard } from "@/components/city-card";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  cityCards,
  getLocalizedText,
  homeAdvantages,
  homeMoodCards,
  withBasePath,
  uiCopy,
} from "@/data/site-data";

const advantageIcons = {
  urban: Compass,
  design: Sparkles,
  calm: Trees,
  speed: Wifi,
};

const moodIcons = {
  focus: BriefcaseBusiness,
  social: UsersRound,
  recharge: MoonStar,
};

export default function HomePage() {
  const { language } = useLanguage();
  const heroChips =
    language === "ru"
      ? ["Городской формат", "Уютные номера"]
      : language === "kz"
        ? ["Qala formaty", "Jaily bolmeler"]
        : ["Urban Stay", "Cozy Rooms"];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src={withBasePath("/cities/almaty-hero.jpg")}
          alt="Городской вид Алматы"
          fill
          priority
          className="hero-image-motion object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(248,224,202,0.28),transparent_44%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-end px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <div className="max-w-3xl text-stone-50">
            <p className="fade-up text-sm tracking-[0.24em] uppercase text-stone-200/90">
              Hi Hotel
            </p>
            <h1 className="fade-up fade-delay-1 mt-5 text-5xl leading-tight font-semibold md:text-7xl">
              {getLocalizedText(uiCopy.home.heroTitle, language)}
            </h1>
            <p className="fade-up fade-delay-2 mt-6 max-w-xl text-base leading-relaxed text-stone-100/90 md:text-lg">
              {getLocalizedText(uiCopy.home.heroDescription, language)}
            </p>
            <div className="fade-up fade-delay-3 mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/almaty#booking"
                className="btn-premium rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                {getLocalizedText(uiCopy.home.heroPrimaryCta, language)}
              </Link>
              <Link
                href="/rooms"
                className="btn-premium rounded-full border border-stone-100/60 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-white/12"
              >
                {getLocalizedText(uiCopy.home.heroSecondaryCta, language)}
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 bottom-10 hidden flex-col gap-2 md:flex">
          <span className="badge-glow float-soft rounded-full border border-white/35 bg-white/14 px-4 py-2 text-xs tracking-[0.12em] uppercase text-stone-100 backdrop-blur">
            {heroChips[0]}
          </span>
          <span className="badge-glow float-soft rounded-full border border-white/35 bg-white/14 px-4 py-2 text-xs tracking-[0.12em] uppercase text-stone-100 backdrop-blur [animation-delay:0.7s]">
            {heroChips[1]}
          </span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.home.cityEyebrow, language)}
          title={getLocalizedText(uiCopy.home.cityTitle, language)}
          description={getLocalizedText(uiCopy.home.cityDescription, language)}
          align="center"
        />

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {cityCards.map((city, index) => (
            <CityCard key={city.slug} city={city} delay={index * 120} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-24 md:grid-cols-[1.2fr_1fr] md:px-10">
        <Reveal direction="right">
          <div className="texture-surface soft-shadow rounded-[2rem] border border-stone-200/70 p-8 md:p-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-muted)]">
              {getLocalizedText(uiCopy.home.aboutEyebrow, language)}
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold md:text-4xl">
              {getLocalizedText(uiCopy.home.aboutTitle, language)}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {getLocalizedText(uiCopy.home.aboutDescription, language)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/gallery"
                className="btn-premium rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold transition hover:border-stone-900 hover:bg-stone-900 hover:text-stone-50"
              >
                {getLocalizedText(uiCopy.home.galleryCta, language)}
              </Link>
              <Link
                href="/contacts"
                className="btn-premium rounded-full border border-transparent bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-700"
              >
                {getLocalizedText(uiCopy.home.contactsCta, language)}
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {homeAdvantages.map((item, index) => {
            const Icon = advantageIcons[item.icon];

            return (
              <Reveal key={item.title.en} delay={index * 110} direction="left">
                <article className="card-tilt glass-surface rounded-3xl border border-stone-200/80 p-6 transition hover:shadow-[0_18px_42px_rgba(35,26,19,0.12)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-stone-50">
                      <Icon size={18} strokeWidth={2.1} />
                    </span>
                    <h3 className="text-lg font-semibold">
                      {getLocalizedText(item.title, language)}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {getLocalizedText(item.description, language)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.home.moodEyebrow, language)}
          title={getLocalizedText(uiCopy.home.moodTitle, language)}
          description={getLocalizedText(uiCopy.home.moodDescription, language)}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeMoodCards.map((card, index) => {
            const Icon = moodIcons[card.icon];

            return (
              <Reveal key={card.title.en} delay={index * 120} direction="up">
                <article className="group card-tilt rounded-[1.8rem] border border-stone-200/80 bg-white/86 p-6 transition hover:shadow-[0_24px_44px_rgba(32,24,18,0.12)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-stone-50">
                      <Icon size={18} />
                    </span>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-stone-700 uppercase">
                      {getLocalizedText(card.metric, language)}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">
                    {getLocalizedText(card.title, language)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {getLocalizedText(card.description, language)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
