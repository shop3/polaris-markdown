import React from 'react';
import { AppProvider, CustomProperties, Frame } from '@shopify/polaris';
import { I18nContext, I18nManager, useI18n } from '@shopify/react-i18n';
import translations from '@shopify/polaris/locales/en.json';

import '@shopify/polaris/build/esm/styles.css';
import '../styles/markdown.css';

import { getTheme } from './themes';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
      ],
    },
  },
};

// eslint-disable-next-line react/prop-types
const Provider = ({ theme, children }) => {
  const [i18n] = useI18n({
    id: 'Polaris',
    fallback: translations,
    async translations(locale) {
      return import(
        /* webpackChunkName: "Polaris-i18n", webpackMode: "lazy-once" */ `@shopify/polaris/locales/${locale}.json`
      ).then((dictionary) => dictionary && dictionary.default);
    },
  });

  return (
    <AppProvider i18n={i18n.translations}>
      <CustomProperties {...theme}>
        <Frame>{children}</Frame>
      </CustomProperties>
    </AppProvider>
  );
};

const withProviders = (Story, context) => {
  const locale = context.globals.locale;
  const theme = getTheme(context.globals.theme);

  const i18nManager = new I18nManager({
    locale,
    fallbackLocale: 'en',
    onError(error) {
      // console.error(error);
    },
  });

  return (
    <I18nContext.Provider value={i18nManager}>
      <Provider theme={theme} i18n={translations}>
        <Story {...context} />
      </Provider>
    </I18nContext.Provider>
  );
};

export const decorators = [withProviders];
