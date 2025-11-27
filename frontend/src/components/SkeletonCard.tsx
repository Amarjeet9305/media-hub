export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-40 rounded-t-2xl bg-slate-100" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-20 rounded bg-slate-100" />
        <div className="h-5 w-4/5 rounded bg-slate-100" />
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-2/3 rounded bg-slate-100" />
      </div>
    </div>
  );
}


