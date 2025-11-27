import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { ArticleBody } from '@/components/ArticleBody';
import { ArticleCard } from '@/components/ArticleCard';
import { DEFAULT_LANGUAGE } from '@/constants/language';
import { getArticleBySlug, getArticles } from '@/lib/news';
import { normalizeLanguage } from '@/utils/language';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  const articles = await getArticles(DEFAULT_LANGUAGE);
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, DEFAULT_LANGUAGE);
  if (!article) {
    return {
      title: 'समाचार उपलब्ध नहीं',
      description: 'यह लेख हटाया जा चुका है या उपलब्ध नहीं है।',
    };
  }

  return {
    title: `${article.title} | LiveHindiस्ट्रीट`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get('origin_lang')?.value);
  const article = await getArticleBySlug(slug, language);

  if (!article) {
    notFound();
  }

  const articles = await getArticles(language);
  const related = articles
    .filter((item) => item.slug !== slug && item.category === article.category)
    .slice(0, 3);

  const sidebarCopy =
    language === 'en'
      ? {
        heading: 'Related stories',
        empty: 'More stories from this section will be added soon.',
      }
      : {
        heading: 'संबंधित खबरें',
        empty: 'इसी श्रेणी की अन्य खबरें जल्द जोड़ी जाएंगी।',
      };

  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 lg:flex-row">
        <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
          <ArticleBody article={article} />
        </div>
        <aside className="w-full space-y-4 lg:w-80">
          <h2 className="text-lg font-semibold text-slate-900">{sidebarCopy.heading}</h2>
          {related.length ? (
            <div className="space-y-4">
              {related.map((item) => (
                <ArticleCard key={item.id} article={item} variant="compact" />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
              {sidebarCopy.empty}
            </p>
          )}
        </aside>
      </div>
    </main>
  );
}

