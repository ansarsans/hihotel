"use client";

import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`max-w-3xl ${alignmentClass}`} direction="up">
      {eyebrow ? (
        <p className="text-xs tracking-[0.22em] uppercase text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl leading-tight font-semibold md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
