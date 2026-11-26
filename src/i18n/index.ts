import es, { type Translations } from './es';
import en from './en';

const translations: Record<string, Translations> = { es, en };

export function t(locale: string | undefined): Translations {
  return translations[locale ?? 'es'] ?? es;
}

export type { Translations };
