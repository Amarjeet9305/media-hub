import Link from 'next/link';

export default function ArticleNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4">
      <div className="max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">404</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">लेख नहीं मिला</h1>
        <p className="mt-3 text-sm text-slate-600">
          संभव है कि यह लेख हटाया जा चुका हो या लिंक गलत हो। कृपया होमपेज पर वापस जाएं।
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          ताज़ा खबरें देखें
        </Link>
      </div>
    </main>
  );
}



