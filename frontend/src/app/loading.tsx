import { SkeletonCard } from '@/components/SkeletonCard';

export default function Loading() {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10">
        <div className="h-96 animate-pulse rounded-2xl bg-slate-200" />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-6 w-40 animate-pulse rounded bg-slate-100" />
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-10 animate-pulse rounded bg-slate-100" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}



