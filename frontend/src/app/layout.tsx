import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter, Noto_Sans_Devanagari, Outfit } from 'next/font/google';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { normalizeLanguage } from '@/utils/language';

import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const notoHindi = Noto_Sans_Devanagari({
  weight: ['400', '500', '700'],
  subsets: ['devanagari', 'latin'],
  variable: '--font-hindi',
});

export const metadata: Metadata = {
  title: {
    default: 'LiveHindiस्ट्रीट',
    template: '%s | LiveHindiस्ट्रीट',
  },
  description:
    'LiveHindiस्ट्रीट पर पढ़ें ताज़ा हिंदी खबरें: राजनीति, खेल, बिज़नेस, टेक्नोलॉजी और मनोरंजन की अपडेट।',
  metadataBase: new URL('https://livehindustreet.local'),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get('origin_lang')?.value);

  return (
    <html lang={language} suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${notoHindi.variable} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <SiteHeader language={language} />
            {children}
            <SiteFooter />
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
