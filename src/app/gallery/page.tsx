"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages, getLocalizedText, uiCopy } from "@/data/site-data";

export default function GalleryPage() {
  const { language } = useLanguage();

  return (
    <>
      <section className="relative h-[48vh] min-h-[320px] overflow-hidden">
        <Image
          src="/cities/astana-riverside-v2.jpg"
          alt="Hi Hotel gallery hero"
          fill
          priority
          className="hero-image-motion object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-12 pt-32 md:px-10">
          <div className="max-w-3xl text-stone-50">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-200">
              {getLocalizedText(uiCopy.galleryPage.heroEyebrow, language)}
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold md:text-6xl">
              {getLocalizedText(uiCopy.galleryPage.heroTitle, language)}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow={getLocalizedText(uiCopy.galleryPage.sectionEyebrow, language)}
          title={getLocalizedText(uiCopy.galleryPage.sectionTitle, language)}
          description={getLocalizedText(uiCopy.galleryPage.sectionDescription, language)}
          align="center"
        />

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal
              key={`${image.src}-${index}`}
              delay={Math.min(index * 60, 360)}
              direction={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}
              className="mb-4 break-inside-avoid"
            >
              <figure className="group card-tilt overflow-hidden rounded-3xl border border-stone-200/80 bg-white">
                <Image
                  src={image.src}
                  alt={getLocalizedText(image.alt, language)}
                  width={image.width}
                  height={image.height}
                  priority={index < 2}
                  className="h-auto w-full object-cover transition duration-[900ms] group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <figcaption className="px-4 py-3 text-xs tracking-wide text-[var(--color-muted)] uppercase">
                  {getLocalizedText(image.alt, language)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

