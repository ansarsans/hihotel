import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language-provider";
import { MobileStickyBooking } from "@/components/mobile-sticky-booking";
import { uiCopy } from "@/data/site-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hihotel.local"),
  title: {
    default: uiCopy.metadata.title.ru,
    template: "%s | Hi Hotel",
  },
  description: uiCopy.metadata.description.ru,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-24 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyBooking />
        </LanguageProvider>
      </body>
    </html>
  );
}
