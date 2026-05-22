"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, PlaneTakeoff } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { cityPages, getLocalizedText, uiCopy } from "@/data/site-data";

export function MobileStickyBooking() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isAstana = pathname.startsWith("/astana");
  const bookingHref = isAstana ? "/astana#booking" : "/almaty#booking";
  const whatsappHref = isAstana
    ? cityPages.astana.contact.whatsappLink
    : cityPages.almaty.contact.whatsappLink;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden">
      <div className="pointer-events-auto float-soft glass-surface mx-auto flex max-w-xl items-center gap-2 rounded-2xl border border-stone-200/90 p-2 shadow-[0_16px_30px_rgba(28,22,16,0.16)]">
        <Link
          href={bookingHref}
          className="btn-premium flex flex-1 items-center justify-center gap-1 rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-stone-50"
        >
          <PlaneTakeoff size={15} />
          {getLocalizedText(uiCopy.mobileBar.book, language)}
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="btn-premium pulse-glow flex items-center justify-center gap-1 rounded-xl border border-stone-300/90 bg-white px-4 py-3 text-sm font-semibold text-stone-800"
        >
          <MessageCircle size={15} />
          {getLocalizedText(uiCopy.mobileBar.whatsapp, language)}
        </a>
      </div>
    </div>
  );
}
