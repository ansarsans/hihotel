import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/city-page-template";
import { cityPages } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Алматы",
  description:
    "Hi Hotel Алматы: обычная городская гостиница с аккуратными номерами и базовыми удобствами. Бронирование пока в виде frontend UI.",
};

export default function AlmatyPage() {
  return <CityPageTemplate city={cityPages.almaty} />;
}
