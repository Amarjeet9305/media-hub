import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'संपर्क करें | LiveHindiस्ट्रीट',
    description: 'LiveHindiस्ट्रीट से संपर्क करें। अपने सुझाव, शिकायत या विज्ञापन के लिए हमें लिखें।',
};

export default function ContactPage() {
    return (
        <main className="flex-1 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="mb-10 text-center">
                    <h1 className="mb-4 font-heading text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
                        संपर्क करें
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        हमसे जुड़ने के लिए धन्यवाद। कृपया नीचे दिए गए फॉर्म को भरें या सीधे हमें ईमेल करें।
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 md:p-8">
                        <h2 className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-100">संदेश भेजें</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    नाम
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                    placeholder="आपका नाम"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    ईमेल
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    विषय
                                </label>
                                <select
                                    id="subject"
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                >
                                    <option value="">विषय चुनें</option>
                                    <option value="feedback">सुझाव (Feedback)</option>
                                    <option value="complaint">शिकायत (Complaint)</option>
                                    <option value="advertising">विज्ञापन (Advertising)</option>
                                    <option value="other">अन्य (Other)</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    संदेश
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                    placeholder="अपना संदेश यहाँ लिखें..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-red-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                भेजें
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
                            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">संपर्क जानकारी</h3>
                            <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">ईमेल</p>
                                        <a href="mailto:contact@livehindistreet.com" className="hover:text-red-600 dark:hover:text-red-400">
                                            contact@livehindistreet.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">पता</p>
                                        <p>
                                            LiveHindiस्ट्रीट मीडिया हाउस,
                                            <br />
                                            सेक्टर 62, नोएडा,
                                            <br />
                                            उत्तर प्रदेश - 201301
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-red-50 p-6 text-red-900 dark:bg-red-950/30 dark:text-red-200">
                            <h3 className="mb-2 text-lg font-semibold">विज्ञापन के लिए</h3>
                            <p className="mb-4 text-sm text-red-800 dark:text-red-300">
                                अपने ब्रांड को हमारे लाखों पाठकों तक पहुँचाएँ। विज्ञापन दरों और अवसरों के लिए हमसे संपर्क करें।
                            </p>
                            <a
                                href="mailto:ads@livehindistreet.com"
                                className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            >
                                ads@livehindistreet.com
                                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
