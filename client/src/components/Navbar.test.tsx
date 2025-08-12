import React from 'react';
import { renderToString } from 'react-dom/server';
import { strict as assert } from 'assert';
import { I18nProvider } from '../i18n';
import Navbar from './Navbar';
import { Router } from 'wouter';

const staticLocationHook = (path: string) => () => [path, () => {}];

const htmlMn = renderToString(
  <I18nProvider initialLang="mn">
    <Router hook={staticLocationHook('/') }>
      <Navbar />
    </Router>
  </I18nProvider>
);
assert(htmlMn.includes('Нүүр'));

const htmlEn = renderToString(
  <I18nProvider initialLang="en">
    <Router hook={staticLocationHook('/') }>
      <Navbar />
    </Router>
  </I18nProvider>
);
assert(htmlEn.includes('Home'));

console.log('Navbar test passed');
