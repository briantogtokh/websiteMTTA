import React from 'react';
import { renderToString } from 'react-dom/server';
import { strict as assert } from 'assert';
import { Router } from 'wouter';
import Navbar from './Navbar';

const staticLocationHook = (path: string) => () => [path, () => {}];

const html = renderToString(
  <Router hook={staticLocationHook('/') }>
    <Navbar />
  </Router>
);

assert(html.includes('Нүүр'));
console.log('Navbar test passed');
