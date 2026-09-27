import { en } from './en';
import { uk } from './uk';

const strings = { en, uk } as const;

export type Locale = keyof typeof strings;
export type StringKey = keyof typeof en;

export function t(locale: Locale | string | undefined, key: StringKey): string {
  const lang = (locale === 'uk' ? 'uk' : 'en') as Locale;
  return strings[lang][key];
}

export function getLocale(currentLocale: string | undefined): Locale {
  return currentLocale === 'uk' ? 'uk' : 'en';
}

export function getAlternateUrl(locale: Locale, currentPath: string): string {
  if (locale === 'uk') {
    // From EN to UK: add /uk/ prefix
    return '/uk' + (currentPath === '/' ? '/' : currentPath);
  }
  // From UK to EN: remove /uk prefix
  return currentPath.replace(/^\/uk/, '') || '/';
}
