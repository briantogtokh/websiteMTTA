import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './app/AppRouter';
import { I18nProvider } from './i18n';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </I18nProvider>
  </React.StrictMode>
);
