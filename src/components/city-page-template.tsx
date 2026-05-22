"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  AirVent,
  Coffee,
  CookingPot,
  DoorClosedLocked,
  Laptop,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Shirt,
  ShowerHead,
  Sofa,
  Sparkles,
  UserRoundCheck,
  Wifi,
} from "lucide-react";
import { BookingPlaceholder } from "@/components/booking-placeholder";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { RoomCard } from "@/components/room-card";
import { SectionHeading } from "@/components/section-heading";
import {
  amenityLabels,
  cityCards,
  getLocalizedText,
  type AmenityKey,
  type CityContent,
  rooms,
  uiCopy,
} from "@/data/site-data";

const amenityIconMap = {
  wifi: Wifi,
  workspace: Laptop,
  locker: DoorClosedLocked,
  shower: ShowerHead,
  air: AirVent,
  kitchen: CookingPot,
  laundry: Shirt,
  coffee: Coffee,
  lounge: Sofa,
  security: ShieldCheck,
  transfer: MapPinned,
  selfCheckIn: UserRoundCheck,
} satisfies Record<AmenityKey, ComponentType<{ size?: number }>>;

interface CityPageTemplateProps {
  city: CityContent;
}

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  const { language } = useLanguage();
  const featuredRooms = rooms.filter((room) =>
    city.featuredRoomIds.includes(room.id),
  );

  const cityName = getLocalizedText(city.name, language);
  const cityTitle = city.slug === "almaty"
    ? getLocalizedText(uiCopy.cityTemplate.contactsTitleAlmaty, language)
    : getLocalizedText(uiCopy.cityTemplate.contactsTitleAstana, language);

  const aboutTitle = city.slug === "almaty"
    ? getLocalizedText(uiCopy.cityTemplate.aboutTitleAlmaty, language)
    : getLocalizedText(uiCopy.cityTemplate.aboutTitleAstana, language);
  const cityMoodTitle =
    language === "ru"
      ? `Атмосфера ${cityName}`
      : language === "kz"
        ? `${cityName} atmosferasy`
        : `${cityName} mood`;

  const cityShortName =
    city.slug === "almaty"
      ? getLocalizedText(cityCards[0].name, language)
      : getLocalizedText(cityCards[1].name, language);

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src={city.heroImage}
          alt={`${cityName} hero section`}
          fill
          priority
          className="hero-image-motion object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,232,214,0.3),transparent_48%)]" />

        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl items-end px-6 pb-16 pt-40 md:px-10 md:pb-20">
          <div className="max-w-3xl text-stone-50">
            <p className="fade-up text-xs tracking-[0.23em] uppercase text-stone-200/90">
              Hi Hotel / {cityShortName}
            </p>
            <h1 className="fade-up fade-delay-1 mt-5 text-4xl leading-tight font-semibold md:text-6xl">
              {cityName}
            </h1>
            <p className="fade-up fade-delay-2 mt-5 max-w-xl text-base leading-relaxed text-stone-100/90 md:text-lg">
              {getLocalizedText(city.tagline, language)}
            </p>
            <div className="fade-up fade-delay-3 mt-9 flex flex-wrap gap-3">
              <Link
                href="#booking"
                className="btn-premium rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
              >
                {getLocalizedText(uiCopy.cityTemplate.startBooking, language)}
              </Link>
              <Link
                href="/rooms"
                className="btn-premium rounded-full border border-stone-100/60 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-white/10"
              >
                {getLocalizedText(uiCopy.cityTemplate.exploreRooms, language)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.25fr_1fr] md:px-10">
        <div>
          <SectionHeading
            eyebrow={getLocalizedText(uiCopy.cityTemplate.aboutEyebrow, language)}
            title={aboutTitle}
            description={getLocalizedText(city.about, language)}
          />
          <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            {getLocalizedText(city.neighborhood, language)}
          </p>
        </div>

        <div className="grid gap-3">
          {city.stats.map((stat, index) => (
            <Reveal key={stat.en} delay={index * 90} direction="left">
              <div className="card-tilt glass-surface rounded-2xl border border-stone-200/80 px-5 py-4 text-sm font-medium md:text-base">
                {getLocalizedText(stat, language)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.cityTemplate.roomsEyebrow, language)}
          title={getLocalizedText(uiCopy.cityTemplate.roomsTitle, language)}
          description={getLocalizedText(uiCopy.cityTemplate.roomsDescription, language)}
        />
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {featuredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} delay={index * 90} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.cityTemplate.galleryEyebrow, language)}
          title={cityMoodTitle}
          description={getLocalizedText(uiCopy.cityTemplate.galleryDescription, language)}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {city.gallery.map((image, index) => (
            <Reveal key={`${city.slug}-${image.src}-${index}`} delay={Math.min(index * 70, 280)} direction="zoom">
              <div className="group card-tilt relative aspect-[4/5] overflow-hidden rounded-3xl border border-stone-200/80">
                <Image
                  src={image.src}
                  alt={getLocalizedText(image.alt, language)}
                  fill
                  className="object-cover transition duration-[900ms] group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/65 via-stone-900/0 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.cityTemplate.amenitiesEyebrow, language)}
          title={getLocalizedText(uiCopy.cityTemplate.amenitiesTitle, language)}
          description={getLocalizedText(uiCopy.cityTemplate.amenitiesDescription, language)}
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {city.amenities.map((amenity, index) => {
            const Icon = amenityIconMap[amenity];

            return (
              <Reveal key={amenity} delay={index * 55} direction="up">
                <div className="card-tilt flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/82 px-4 py-3">
                  <span className="rounded-full bg-stone-100 p-2 text-stone-800">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-[var(--color-muted)]">
                    {getLocalizedText(amenityLabels[amenity], language)}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:px-10">
        <Reveal direction="right">
          <div className="rounded-[2rem] border border-stone-200/80 bg-white/88 p-7 soft-shadow md:p-9">
          <SectionHeading
            eyebrow={getLocalizedText(uiCopy.cityTemplate.contactsEyebrow, language)}
            title={cityTitle}
            description={getLocalizedText(uiCopy.cityTemplate.contactsDescription, language)}
          />

          <div className="mt-7 space-y-4 text-sm text-[var(--color-muted)] md:text-base">
            <p>
              <span className="font-semibold text-[var(--color-text)]">
                {getLocalizedText(uiCopy.cityTemplate.address, language)}
              </span>{" "}
              {getLocalizedText(city.contact.address, language)}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-text)]">
                {getLocalizedText(uiCopy.cityTemplate.phone, language)}
              </span>{" "}
              {city.contact.phone}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-text)]">
                {getLocalizedText(uiCopy.cityTemplate.email, language)}
              </span>{" "}
              {city.contact.email}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={city.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-premium inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-700"
            >
              <MessageCircle size={16} />
              {getLocalizedText(uiCopy.cityTemplate.whatsapp, language)}{" "}
              {city.contact.whatsappLabel}
            </a>
            <a
              href={city.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-premium rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
            >
              {getLocalizedText(uiCopy.cityTemplate.instagram, language)}
            </a>
            <a
              href={city.contact.tiktok}
              target="_blank"
              rel="noreferrer"
              className="btn-premium rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
            >
              {getLocalizedText(uiCopy.cityTemplate.tiktok, language)}
            </a>
          </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <div className="texture-surface flex min-h-[280px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-stone-300/90 p-8 text-center soft-shadow">
            <MapPinned className="text-stone-600" size={30} />
            <h3 className="mt-4 text-xl font-semibold">
              {getLocalizedText(uiCopy.cityTemplate.mapPlaceholder, language)}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              {getLocalizedText(city.mapHint, language)}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-stone-600">
              <Sparkles size={13} />
              {getLocalizedText(uiCopy.cityTemplate.futureMap, language)}
            </span>
          </div>
        </Reveal>
      </section>

      <section id="booking" className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
        <BookingPlaceholder
          cityName={cityName}
          hint={getLocalizedText(city.bookingHint, language)}
        />
      </section>

      <a
        href={city.contact.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="btn-premium pulse-glow fixed right-5 bottom-24 z-30 hidden items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-md transition hover:bg-stone-100 md:flex"
      >
        <MessageCircle size={16} />
        {getLocalizedText(uiCopy.cityTemplate.whatsapp, language)}
      </a>
    </>
  );
}

