import { ru } from './ru';
import { en } from './en';
import type { Locale, Translations } from './types';

export const locales: Locale[] = ['ru', 'en'];
export const defaultLocale: Locale = 'ru';

export function getTranslations(locale: Locale = defaultLocale): Translations {
  return locale === 'en' ? en : ru;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'ru' ? 'en' : 'ru';
}

export function getLocalizedPath(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}
