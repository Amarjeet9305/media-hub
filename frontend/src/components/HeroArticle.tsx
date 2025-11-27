import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/types/article';

type HeroArticleProps = {
  article: Article;
};

const getImageSrc = (src?: string | null) =>
  src ?? 'https://placehold.co/1200x600?text=Live+News';

export function HeroArticle({ article }: HeroArticleProps) {
  return (
    <section className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl transition-all hover:shadow-red-900/20">
      <div className="relative h-[28rem] w-full sm:h-[32rem]">
        <Image
          src={getImageSrc(article.imageUrl)}
          alt={article.title}
          fill
          className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end gap-5 p-6 sm:p-12">
        {article.breaking && (
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg animate-pulse">
            ब्रेकिंग
          </span>
        )}
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            {article.category}
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="max-w-3xl text-lg text-slate-200 sm:text-xl leading-relaxed">{article.summary}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-red-500" />
            {article.author}
          </span>
          <span>
            {new Date(article.publishedAt).toLocaleString('hi-IN', {
              day: 'numeric',
              month: 'long',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm transition hover:bg-white/20">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={`/articles/${article.slug}`}
          className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-slate-900 transition-transform hover:scale-105 hover:bg-slate-100 active:scale-95"
        >
          पूरी ख़बर पढ़ें
        </Link>
      </div>
    </section>
  );
}


