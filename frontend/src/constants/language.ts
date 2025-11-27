import type { LanguageOption } from '@/types/language';

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { code: 'en', label: 'English', nativeLabel: 'English' },
];

export const DEFAULT_LANGUAGE = LANGUAGE_OPTIONS[0]!.code;



