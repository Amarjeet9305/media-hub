import { DEFAULT_LANGUAGE } from '@/constants/language';
import type { LanguageCode } from '@/types/language';

export function normalizeLanguage(cookieValue?: string | null): LanguageCode {
  if (cookieValue === 'en' || cookieValue === 'hi') {
    return cookieValue;
  }
  return DEFAULT_LANGUAGE;
}



