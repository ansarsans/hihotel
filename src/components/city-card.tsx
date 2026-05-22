"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { getLocalizedText, type CityCardData } from "@/data/site-data";

interface CityCardProps {
  city: CityCardData;
  delay?: number;
}

export function CityCard({ city, delay = 0 }: CityCardProps) {
  const { language } = useLanguage();
  const cityName = getLocalizedText(city.name, language);
  const citySubtitle = getLocalizedText(city.subtitle, language);

  return (
    <Reveal direction="zoom" delay={delay}>
      <Link
        href={city.href}
        className="group card-tilt sheen-on-hover relative block h-[460px] overflow-hidden rounded-[2rem] border border-stone-200/70 soft-shadow"
      >
        <Image
          src={city.image}
          alt={`Hi Hotel ${cityName}`}
          fill
          className="object-cover transition duration-[900ms] group-hover:scale-[1.08]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18120d]/86 via-[#18120d]/28 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,226,193,0.28),transparent_40%)] opacity-80 transition duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-7 text-stone-50 md:p-9">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-3xl font-semibold md:text-4xl">{cityName}</h3>
            <span className="badge-glow flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/10 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-stone-900">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-200">
            {citySubtitle}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

