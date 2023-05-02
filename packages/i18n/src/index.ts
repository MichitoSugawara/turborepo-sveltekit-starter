import type { Locale } from './lib/types';
import i18next, { Resource } from 'i18next';
import enZod from 'zod-i18n-map/locales/en/zod.json';
import jaZod from 'zod-i18n-map/locales/ja/zod.json';

export const makeI18n = (config: {
  lng: Locale;
  fallbackLng: Locale;
  resources: {
    [Key in Locale]?: object;
  };
}) => {
  i18next.init({
    lng: config.lng as string,
    fallbackLng: config.fallbackLng as string,
    resources: config.resources as Resource
  });
  return i18next;
};

export const i18n = makeI18n({
  lng: 'ja',
  fallbackLng: 'ja',
  resources: {
    en: { zod: enZod },
    ja: { zod: jaZod }
  }
});
