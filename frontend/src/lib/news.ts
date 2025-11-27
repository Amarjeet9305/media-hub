import 'server-only';

import { cache } from 'react';

import { getArticlesForLanguage, groupArticles } from '@/data/articles';
import type { Article, ArticleGroup } from '@/types/article';
import type { LanguageCode } from '@/types/language';

const simulateDelay = async () =>
  new Promise((resolve) => {
    setTimeout(resolve, 150);
  });

export const getArticles = cache(async (language?: LanguageCode): Promise<Article[]> => {
  await simulateDelay();
  return getArticlesForLanguage(language);
});

export const getGroupedArticles = cache(async (language?: LanguageCode): Promise<ArticleGroup> => {
  await simulateDelay();
  return groupArticles(language);
});

export const getArticleBySlug = cache(
  async (slug: string, language?: LanguageCode): Promise<Article | null> => {
  await simulateDelay();
    return getArticlesForLanguage(language).find((article) => article.slug === slug) ?? null;
  },
);


