'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { DEFAULT_LANGUAGE } from '@/constants/language';
import type { LanguageCode } from '@/types/language';

const COOKIE_NAME = 'origin_lang';
const FIVE_MONTHS_IN_SECONDS = 60 * 60 * 24 * 150;

export async function setPreferredLanguage(language: LanguageCode) {
  const nextLanguage = language ?? DEFAULT_LANGUAGE;
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, nextLanguage, {
    maxAge: FIVE_MONTHS_IN_SECONDS,
    sameSite: 'lax',
    path: '/',
  });
  revalidatePath('/', 'layout');
}


