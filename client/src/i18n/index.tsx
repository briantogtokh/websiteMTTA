import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'mn' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  mn: {
    'nav.home': 'Нүүр',
    'nav.news': 'Мэдээ',
    'nav.events': 'Тэмцээн',
  },
  en: {
    'nav.home': 'Home',
    'nav.news': 'News',
    'nav.events': 'Events',
  },
};

interface I18nContextValue {
  lang: Lang;
  t: (key: string) => string;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'mn',
  t: (k) => k,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLang: () => {},
});

export function I18nProvider({ children, initialLang = 'mn' }: { children: ReactNode; initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = (key: string) => translations[lang][key] ?? key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
