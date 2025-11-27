import { SkeletonCard } from '@/components/SkeletonCard';

export default function ArticleLoading() {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 lg:flex-row">
        <div className="flex-1 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <div className="h-6 w-32 animate-pulse rounded bg-slate-100" />
          <div className="h-10 w-3/4 animate-pulse rounded bg-slate-100" />
          <div className="h-80 animate-pulse rounded-2xl bg-slate-200" />
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-4 animate-pulse rounded bg-slate-100" />
          ))}
        </div>
        <div className="w-full space-y-4 lg:w-80">
          {Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}



