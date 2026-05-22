"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultLanguage, supportedLanguages, type SiteLanguage } from "@/data/site-data";

interface LanguageContextValue {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
}

const STORAGE_KEY = "hihotel-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<SiteLanguage>(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    const storedLanguage = localStorage.getItem(STORAGE_KEY);

    if (
      storedLanguage &&
      supportedLanguages.includes(storedLanguage as SiteLanguage)
    ) {
      return storedLanguage as SiteLanguage;
    }

    return defaultLanguage;
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
