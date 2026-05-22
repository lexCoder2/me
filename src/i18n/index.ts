import { en } from './en';
import { es } from './es';
import { de } from './de';

export type Locale = 'en' | 'es' | 'de';

export const locales: Locale[] = ['en', 'es', 'de'];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  de: 'DE',
};

const translations: Record<Locale, typeof en> = { en, es: es as typeof en, de: de as typeof en };

export function useTranslations(locale: string | undefined): typeof en {
  const lang = (locale as Locale) ?? defaultLocale;
  return translations[lang] ?? translations[defaultLocale];
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang as Locale)) return lang as Locale;
  return defaultLocale;
}

export function getLocalizedUrl(url: URL, targetLocale: Locale): string {
  const [, currentLang, ...rest] = url.pathname.split('/');
  if (locales.includes(currentLang as Locale)) {
    const path = rest.length > 0 ? '/' + rest.join('/') : '';
    return `/${targetLocale}${path}`;
  }
  return `/${targetLocale}${url.pathname}`;
}
