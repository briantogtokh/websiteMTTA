import React from 'react';
import { Link } from 'wouter';
import LanguageSwitch from './LanguageSwitch';
import { useTranslation } from '../i18n';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="flex items-center justify-between p-4" aria-label="Main navigation">
      <div className="space-x-4">
        <Link href="/">{t('nav.home')}</Link>
        <Link href="/news">{t('nav.news')}</Link>
        <Link href="/events">{t('nav.events')}</Link>
      </div>
      <LanguageSwitch />
    </nav>
  );
}
