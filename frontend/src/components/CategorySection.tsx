import { ArticleCard } from '@/components/ArticleCard';
import type { Article } from '@/types/article';

type CategorySectionProps = {
  title: string;
  articles: Article[];
  anchorId?: string;
  subtitle?: string;
};

export function CategorySection({ title, articles, anchorId, subtitle }: CategorySectionProps) {
  if (!articles.length) {
    return null;
  }

  return (
    <section id={anchorId} className="space-y-4 scroll-mt-24">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
        </div>
        <span className="text-sm text-slate-500">{articles.length} खबरें</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} variant="compact" />
        ))}
      </div>
    </section>
  );
}

