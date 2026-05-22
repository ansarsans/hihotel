"use client";

import { MapPinned, MessageCircle, PhoneCall } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cityPages, getLocalizedText, uiCopy } from "@/data/site-data";

const cities = [cityPages.almaty, cityPages.astana];

export default function ContactsPage() {
  const { language } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-32 pb-16 md:px-10">
      <SectionHeading
        eyebrow={getLocalizedText(uiCopy.contactsPage.sectionEyebrow, language)}
        title={getLocalizedText(uiCopy.contactsPage.sectionTitle, language)}
        description={getLocalizedText(uiCopy.contactsPage.sectionDescription, language)}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {cities.map((city, index) => (
          <Reveal key={city.slug} delay={index * 120} direction={index % 2 === 0 ? "right" : "left"}>
            <article className="card-tilt rounded-[2rem] border border-stone-200/80 bg-white/88 p-7 soft-shadow md:p-9">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">
                  {getLocalizedText(city.name, language)}
                </h2>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-stone-700">
                  {city.slug === "almaty"
                    ? getLocalizedText(uiCopy.contactsPage.slugAlmaty, language)
                    : getLocalizedText(uiCopy.contactsPage.slugAstana, language)}
                </span>
              </div>

              <div className="mt-7 space-y-4 text-sm text-[var(--color-muted)] md:text-base">
                <p className="flex items-start gap-2">
                  <MapPinned size={18} className="mt-0.5 text-stone-700" />
                  <span>{getLocalizedText(city.contact.address, language)}</span>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCall size={18} className="text-stone-700" />
                  <span>{city.contact.phone}</span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={city.contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-stone-700"
                >
                  <MessageCircle size={16} />
                  {getLocalizedText(uiCopy.contactsPage.whatsapp, language)}{" "}
                  {city.contact.whatsappLabel}
                </a>
                <a
                  href={city.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
                >
                  {getLocalizedText(uiCopy.contactsPage.instagram, language)}
                </a>
                <a
                  href={city.contact.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
                >
                  {getLocalizedText(uiCopy.contactsPage.tiktok, language)}
                </a>
              </div>

              <div className="texture-surface mt-7 rounded-2xl border border-dashed border-stone-300 p-7 text-center">
                <MapPinned className="mx-auto text-stone-600" size={26} />
                <p className="mt-3 text-sm font-medium text-stone-700">
                  {getLocalizedText(uiCopy.contactsPage.mapPlaceholder, language)}
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  {getLocalizedText(city.mapHint, language)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up">
        <div className="texture-surface mt-10 rounded-[2rem] border border-stone-200/80 p-7 md:p-9">
          <h3 className="text-2xl font-semibold">
            {getLocalizedText(uiCopy.contactsPage.generalInquiryTitle, language)}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            {getLocalizedText(uiCopy.contactsPage.generalInquiryDescription, language)}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
