import Link from 'next/link';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NAV_LINKS } from '@/constants/navigation';
import type { LanguageCode } from '@/types/language';

type Props = {
  language: LanguageCode;
};

export function SiteHeader({ language }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-heading text-3xl font-bold tracking-tighter text-primary">
          LiveHindi<span className="text-slate-900">स्ट्रीट</span>
        </Link>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-end">
          <nav className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className="rounded-full px-4 py-1.5 transition-all hover:bg-red-50 hover:text-primary hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end border-l border-slate-200 pl-4">
            <LanguageSwitcher current={language} />
          </div>
        </div>
      </div>
    </header>
  );
}

