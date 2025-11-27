import type { Metadata } from 'next';

import { cookies } from 'next/headers';

import { ArticleCard } from '@/components/ArticleCard';
import { CategorySection } from '@/components/CategorySection';
import { HeroArticle } from '@/components/HeroArticle';
import { StateCard } from '@/components/StateCard';
import { TrendingList } from '@/components/TrendingList';
import {
  CATEGORY_ANCHOR_CONFIG,
  CURATED_TAG_SECTIONS,
  LIFESTYLE_SECTION,
} from '@/constants/navigation';
import { getGroupedArticles } from '@/lib/news';
import type { Article } from '@/types/article';
import type { LanguageCode } from '@/types/language';
import { normalizeLanguage } from '@/utils/language';

export const revalidate = 300; // ISR-style refreshing every 5 minutes

export const metadata: Metadata = {
  title: 'LiveHindiस्ट्रीट | हिंदी न्यूज फ्रंट पेज',
  description: 'लाइव हिंदुस्तान शैली का फ्रंट पेज: टॉप स्टोरीज़, राज्य, बिज़नेस, स्पोर्ट्स और ट्रेंडिंग खबरें एक ही जगह।',
};

const CATEGORY_ORDER = ['Business', 'Sports', 'Technology', 'Health', 'Entertainment', 'Faith', 'Travel'];
const LIFESTYLE_CATEGORY_SET = new Set(LIFESTYLE_SECTION.categories);

const COPY = {
  hi: {
    loadErrorTitle: 'खबरें लोड नहीं हो पाईं',
    loadErrorDescription: 'कृपया अपना कनेक्शन जांचें या कुछ देर बाद दोबारा कोशिश करें।',
    emptyTitle: 'कोई समाचार उपलब्ध नहीं',
    emptyDescription: 'जैसे ही कुछ नई खबरें आएंगी, उन्हें यहां प्रदर्शित किया जाएगा।',
  },
  en: {
    loadErrorTitle: 'Unable to load stories',
    loadErrorDescription: 'Check your connection or try again in a bit.',
    emptyTitle: 'No stories available',
    emptyDescription: 'Fresh stories will appear here as soon as they arrive.',
  },
} satisfies Record<LanguageCode, Record<string, string>>;

export default async function HomePage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get('origin_lang')?.value);
  const copy = COPY[language];

  let grouped;
  try {
    grouped = await getGroupedArticles(language);
  } catch (error) {
    console.error('Failed to load news content', error);
    return (
      <main className="mx-auto flex max-w-4xl flex-1 items-center px-4 py-16">
        <StateCard
          title={copy.loadErrorTitle}
          description={copy.loadErrorDescription}
          tone="error"
        />
      </main>
    );
  }

  if (!grouped.hero) {
    return (
      <main className="mx-auto flex max-w-4xl flex-1 items-center px-4 py-16">
        <StateCard
          title={copy.emptyTitle}
          description={copy.emptyDescription}
        />
      </main>
    );
  }

  const filteredCategories = CATEGORY_ORDER.filter(
    (category) => grouped.categories[category]?.length && !LIFESTYLE_CATEGORY_SET.has(category),
  );

  const allArticles: Article[] = Object.values(grouped.categories).flatMap((articles) => articles);

  const curatedSections = CURATED_TAG_SECTIONS.map((section) => {
    const articles = allArticles.filter((article) =>
      article.tags.some((tag) => section.tags.includes(tag.toLowerCase())),
    );
    return {
      ...section,
      articles,
    };
  }).filter((section) => section.articles.length);

  const lifestyleArticles = LIFESTYLE_SECTION.categories.flatMap(
    (category) => grouped.categories[category] ?? [],
  );

  const lifestyleSection = lifestyleArticles.length
    ? {
        ...LIFESTYLE_SECTION,
        articles: lifestyleArticles,
      }
    : null;

  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10">
        <section id="desh" className="space-y-8 scroll-mt-24">
          <HeroArticle article={grouped.hero} />

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {grouped.spotlight.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <TrendingList articles={grouped.trending} />
          </div>
        </section>

        <div className="space-y-12">
          {curatedSections.map((section) => (
            <CategorySection
              key={section.id}
              anchorId={section.id}
              title={section.title[language]}
              subtitle={section.subtitle[language]}
              articles={section.articles}
            />
          ))}

          {lifestyleSection ? (
            <CategorySection
              anchorId={lifestyleSection.id}
              title={lifestyleSection.title[language]}
              subtitle={lifestyleSection.subtitle[language]}
              articles={lifestyleSection.articles}
            />
          ) : null}

          {filteredCategories.map((category) => {
            const config = CATEGORY_ANCHOR_CONFIG[category];
            const title = config?.title?.[language] ?? category;
            const subtitle = config?.subtitle?.[language];
            return (
              <CategorySection
                key={category}
                anchorId={config?.anchorId}
                title={title}
                subtitle={subtitle}
                articles={grouped.categories[category]}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
