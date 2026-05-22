import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/city-page-template";
import { cityPages } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Астана",
  description:
    "Hi Hotel Астана: спокойная городская гостиница в современной части города. Бронирование пока реализовано как frontend UI placeholder.",
};

export default function AstanaPage() {
  return <CityPageTemplate city={cityPages.astana} />;
}
