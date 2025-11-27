export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LiveHindiस्ट्रीट मीडिया नेटवर्क</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-600">
              गोपनीयता नीति
            </a>
            <a href="#" className="hover:text-red-600">
              विज्ञापन संपर्क
            </a>
            <a href="#" className="hover:text-red-600">
              हमारे बारे में
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


