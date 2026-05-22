"use client";

import Image from "next/image";
import Link from "next/link";
import { RoomCard } from "@/components/room-card";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getLocalizedText, rooms, uiCopy } from "@/data/site-data";

export default function RoomsPage() {
  const { language } = useLanguage();

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=2200&q=80"
          alt="Hi Hotel rooms hero"
          fill
          priority
          className="hero-image-motion object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-14 pt-32 md:px-10">
          <div className="max-w-3xl text-stone-50">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-200">
              {getLocalizedText(uiCopy.roomsPage.heroEyebrow, language)}
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold md:text-6xl">
              {getLocalizedText(uiCopy.roomsPage.heroTitle, language)}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-100 md:text-base">
              {getLocalizedText(uiCopy.roomsPage.heroDescription, language)}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.roomsPage.showcaseEyebrow, language)}
          title={getLocalizedText(uiCopy.roomsPage.showcaseTitle, language)}
          description={getLocalizedText(uiCopy.roomsPage.showcaseDescription, language)}
        />

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-2">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} delay={index * 90} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10">
        <Reveal direction="up">
          <div className="texture-surface rounded-[2rem] border border-stone-200/80 p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {getLocalizedText(uiCopy.roomsPage.bookingTitle, language)}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {getLocalizedText(uiCopy.roomsPage.bookingDescription, language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/almaty#booking"
                className="btn-premium rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-700"
              >
                {getLocalizedText(uiCopy.roomsPage.almatyCta, language)}
              </Link>
              <Link
                href="/astana#booking"
                className="btn-premium rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                {getLocalizedText(uiCopy.roomsPage.astanaCta, language)}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
