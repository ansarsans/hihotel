"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  AirVent,
  ArrowUpRight,
  Coffee,
  CookingPot,
  DoorClosedLocked,
  Laptop,
  Shirt,
  ShieldCheck,
  ShowerHead,
  Sofa,
  Wifi,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import {
  amenityLabels,
  getLocalizedText,
  type AmenityKey,
  type RoomData,
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
  transfer: ArrowUpRight,
  selfCheckIn: DoorClosedLocked,
} satisfies Record<AmenityKey, ComponentType<{ size?: number }>>;

interface RoomCardProps {
  room: RoomData;
  delay?: number;
}

export function RoomCard({ room, delay = 0 }: RoomCardProps) {
  const { language } = useLanguage();

  return (
    <Reveal direction="up" delay={delay}>
      <article className="group card-tilt sheen-on-hover overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white/86 soft-shadow">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={room.image}
            alt={getLocalizedText(room.name, language)}
            fill
            className="object-cover transition duration-[900ms] group-hover:scale-[1.08]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        <div className="space-y-5 p-6 md:p-7">
          <div>
            <h3 className="text-2xl font-semibold">
              {getLocalizedText(room.name, language)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {getLocalizedText(room.description, language)}
            </p>
          </div>

          <div className="grid gap-2 text-sm text-[var(--color-muted)] sm:grid-cols-2">
            <p>
              <span className="font-medium text-[var(--color-text)]">
                {getLocalizedText(uiCopy.roomCard.roomSize, language)}
              </span>{" "}
              {getLocalizedText(room.size, language)}
            </p>
            <p>
              <span className="font-medium text-[var(--color-text)]">
                {getLocalizedText(uiCopy.roomCard.bedType, language)}
              </span>{" "}
              {getLocalizedText(room.bedType, language)}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-2">
            {room.amenities.map((amenity) => {
              const Icon = amenityIconMap[amenity];

              return (
                <li
                  key={amenity}
                  className="flex items-center gap-2 rounded-full bg-stone-100/80 px-3 py-2 text-xs font-medium text-[var(--color-muted)] transition hover:bg-stone-200/80"
                >
                  <Icon size={14} />
                  <span>{getLocalizedText(amenityLabels[amenity], language)}</span>
                </li>
              );
            })}
          </ul>

          <Link
            href={room.ctaHref}
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-700"
          >
            {getLocalizedText(uiCopy.roomCard.cta, language)}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

