import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="mb-3 font-heading text-xl font-bold text-primary">
              LiveHindi<span className="text-slate-900 dark:text-slate-100">स्ट्रीट</span>
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              भारत की सबसे तेज़ और भरोसेमंद हिंदी न्यूज़ वेबसाइट। देश-विदेश, राजनीति, खेल, मनोरंजन और
              टेक्नोलॉजी की ताज़ा खबरें।
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              © {currentYear} LiveHindiस्ट्रीट मीडिया नेटवर्क। सर्वाधिकार सुरक्षित।
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">श्रेणियाँ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#desh" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  देश
                </a>
              </li>
              <li>
                <a href="/#uttar-pradesh" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  उत्तर प्रदेश
                </a>
              </li>
              <li>
                <a href="/#manoranjan" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  मनोरंजन
                </a>
              </li>
              <li>
                <a href="/#khel" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  खेल
                </a>
              </li>
              <li>
                <a href="/#technology" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  टेक्नोलॉजी
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  संपर्क करें
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  गोपनीयता नीति
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  विज्ञापन संपर्क
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500">
                  नियम और शर्तें
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
