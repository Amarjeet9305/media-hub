'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { LANGUAGE_OPTIONS } from '@/constants/language';
import { setPreferredLanguage } from '@/server/actions/language';
import type { LanguageCode } from '@/types/language';

type Props = {
  current: LanguageCode;
};

export function LanguageSwitcher({ current }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (code: LanguageCode) => {
    if (code === current) return;
    startTransition(async () => {
      await setPreferredLanguage(code);
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-2">
      {LANGUAGE_OPTIONS.map((option) => {
        const selected = option.code === current;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => handleSelect(option.code)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              selected
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-slate-300 bg-white text-slate-600 hover:border-red-400 hover:text-red-500'
            }`}
            disabled={isPending}
            aria-pressed={selected}
          >
            <span className="sr-only">{option.label}</span>
            {option.nativeLabel}
          </button>
        );
      })}
    </div>
  );
}



