import React from 'react';
import { useTranslation } from '../i18n';

export default function LanguageSwitch() {
  const { lang, setLang } = useTranslation();
  const next = lang === 'mn' ? 'en' : 'mn';
  return (
    <button
      onClick={() => setLang(next)}
      aria-label="switch language"
      className="px-2 py-1 border rounded"
    >
      {next.toUpperCase()}
    </button>
  );
}
