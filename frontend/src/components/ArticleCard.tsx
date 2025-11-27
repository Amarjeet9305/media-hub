import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/types/article';

type ArticleCardProps = {
  article: Article;
  variant?: 'default' | 'compact';
};

const getImageSrc = (src?: string | null) =>
  src ?? 'https://placehold.co/600x400?text=Live+News';

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const isCompact = variant === 'compact';
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/5"
    >
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={getImageSrc(article.imageUrl)}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={article.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600">
          {article.category}
        </span>
        <h3 className="font-heading text-xl font-bold leading-snug text-slate-900 line-clamp-2 group-hover:text-red-700 transition-colors">
          {article.title}
        </h3>
        {!isCompact && (
          <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">{article.summary}</p>
        )}
        <div className="mt-auto flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          {new Date(article.publishedAt).toLocaleString('hi-IN', {
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </Link>
  );
}


