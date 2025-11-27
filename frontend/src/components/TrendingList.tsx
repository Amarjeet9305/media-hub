import Link from 'next/link';

import type { Article } from '@/types/article';

type TrendingListProps = {
  articles: Article[];
};

export function TrendingList({ articles }: TrendingListProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">ट्रेंडिंग खबरें</h2>
      <ol className="space-y-4 text-sm text-slate-700">
        {articles.map((article, index) => (
          <li key={article.id} className="flex gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600">
              {index + 1}
            </span>
            <div>
              <Link
                href={`/articles/${article.slug}`}
                className="font-semibold text-slate-900 hover:text-red-600"
              >
                {article.title}
              </Link>
              <p className="text-xs text-slate-500">
                {new Date(article.publishedAt).toLocaleDateString('hi-IN', {
                  weekday: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}


