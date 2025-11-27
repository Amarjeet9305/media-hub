import Image from 'next/image';

import type { Article } from '@/types/article';

const getImageSrc = (src?: string | null) =>
  src ?? 'https://placehold.co/1200x600?text=Live+News';

type ArticleBodyProps = {
  article: Article;
};

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <article className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          {article.category}
        </p>
        <h1 className="text-3xl font-bold text-slate-900">{article.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>{article.author}</span>
          <span>
            {new Date(article.publishedAt).toLocaleString('hi-IN', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>

      <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={getImageSrc(article.imageUrl)}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
      </div>

      <div className="space-y-4 text-lg leading-relaxed text-slate-800">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}


