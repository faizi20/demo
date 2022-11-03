import i18next from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // debug: true,
    fallbackLng: 'en',
    supportedLngs: [
      'en',
      'fr',
      'ar',
      'it',
      'de',
      'pk',
      'ru',
      'es',
      'pt',
      'in',
      '',
    ],
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: () => {
        return '/locales/{{lng}}/translation.json';
      },
    },
  });

export default i18next;
