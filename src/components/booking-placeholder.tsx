"use client";

import { CalendarDays, Users } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { getLocalizedText, rooms, uiCopy } from "@/data/site-data";

interface BookingPlaceholderProps {
  cityName: string;
  hint: string;
}

export function BookingPlaceholder({ cityName, hint }: BookingPlaceholderProps) {
  const { language } = useLanguage();

  return (
    <Reveal direction="up">
      <div className="card-tilt rounded-[2rem] border border-stone-200/80 bg-white/88 p-6 soft-shadow md:p-9">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-muted)]">
          {getLocalizedText(uiCopy.booking.sectionEyebrow, language)}
        </p>
        <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
          {cityName} {getLocalizedText(uiCopy.booking.titleSuffix, language)}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          {hint}
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-4">
          <label className="space-y-1.5">
            <span className="text-xs font-medium tracking-[0.14em] uppercase text-[var(--color-muted)]">
              {getLocalizedText(uiCopy.booking.checkIn, language)}
            </span>
            <div className="flex items-center gap-2 rounded-xl border border-stone-300/80 bg-white px-3 py-3 transition focus-within:border-[var(--color-accent)] focus-within:shadow-[0_0_0_4px_rgba(158,132,104,0.14)]">
              <CalendarDays size={16} className="text-[var(--color-muted)]" />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </label>

          <label className="space-y-1.5">
            <span className="text-xs font-medium tracking-[0.14em] uppercase text-[var(--color-muted)]">
              {getLocalizedText(uiCopy.booking.checkOut, language)}
            </span>
            <div className="flex items-center gap-2 rounded-xl border border-stone-300/80 bg-white px-3 py-3 transition focus-within:border-[var(--color-accent)] focus-within:shadow-[0_0_0_4px_rgba(158,132,104,0.14)]">
              <CalendarDays size={16} className="text-[var(--color-muted)]" />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </label>

          <label className="space-y-1.5">
            <span className="text-xs font-medium tracking-[0.14em] uppercase text-[var(--color-muted)]">
              {getLocalizedText(uiCopy.booking.guests, language)}
            </span>
            <div className="flex items-center gap-2 rounded-xl border border-stone-300/80 bg-white px-3 py-3 transition focus-within:border-[var(--color-accent)] focus-within:shadow-[0_0_0_4px_rgba(158,132,104,0.14)]">
              <Users size={16} className="text-[var(--color-muted)]" />
              <select className="w-full bg-transparent text-sm outline-none">
                {uiCopy.booking.guestsOptions.map((option) => (
                  <option key={option.en} value={option.en}>
                    {getLocalizedText(option, language)}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className="space-y-1.5">
            <span className="text-xs font-medium tracking-[0.14em] uppercase text-[var(--color-muted)]">
              {getLocalizedText(uiCopy.booking.roomType, language)}
            </span>
            <div className="rounded-xl border border-stone-300/80 bg-white px-3 py-3 transition focus-within:border-[var(--color-accent)] focus-within:shadow-[0_0_0_4px_rgba(158,132,104,0.14)]">
              <select className="w-full bg-transparent text-sm outline-none">
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {getLocalizedText(room.name, language)}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>

        <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="btn-premium rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-700"
          >
            {getLocalizedText(uiCopy.booking.bnovoButton, language)}
          </button>
          <p className="text-xs text-[var(--color-muted)] md:text-sm">
            {getLocalizedText(uiCopy.booking.frontendNote, language)}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
