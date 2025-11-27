import type { ReactNode } from 'react';

type StateCardProps = {
  title: string;
  description: string;
  action?: ReactNode;
  tone?: 'info' | 'error';
};

export function StateCard({ title, description, action, tone = 'info' }: StateCardProps) {
  const borderClass = tone === 'error' ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-slate-50';
  const textClass = tone === 'error' ? 'text-red-700' : 'text-slate-600';

  return (
    <div className={`rounded-2xl border ${borderClass} p-8 text-center`}>
      <h3 className={`text-xl font-semibold ${tone === 'error' ? 'text-red-800' : 'text-slate-900'}`}>
        {title}
      </h3>
      <p className={`mt-2 text-sm ${textClass}`}>{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

