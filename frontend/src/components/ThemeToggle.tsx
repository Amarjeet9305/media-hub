'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="fixed bottom-6 right-6 z-50 rounded-full bg-white p-3 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-xl dark:bg-slate-800 dark:ring-slate-700"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </button>
        );
    }

    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('system');
        } else {
            setTheme('light');
        }
    };

    const getIcon = () => {
        switch (theme) {
            case 'light':
                return <Sun className="h-5 w-5 text-amber-500 transition-transform duration-200" />;
            case 'dark':
                return <Moon className="h-5 w-5 text-blue-400 transition-transform duration-200" />;
            case 'system':
                return <Monitor className="h-5 w-5 text-slate-600 transition-transform duration-200 dark:text-slate-400" />;
            default:
                return <Sun className="h-5 w-5 text-slate-600 transition-transform duration-200" />;
        }
    };

    const getLabel = () => {
        switch (theme) {
            case 'light':
                return 'Light';
            case 'dark':
                return 'Dark';
            case 'system':
                return 'System';
            default:
                return 'Theme';
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
            <span className="hidden rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-md ring-1 ring-slate-200 transition-opacity group-hover:opacity-100 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700 sm:block">
                {getLabel()}
            </span>
            <button
                onClick={cycleTheme}
                className="group rounded-full bg-white p-3 shadow-lg ring-1 ring-slate-200 transition-all hover:scale-110 hover:shadow-xl active:scale-95 dark:bg-slate-800 dark:ring-slate-700"
                aria-label={`Current theme: ${theme}. Click to cycle themes.`}
                title={`Theme: ${getLabel()} (click to change)`}
            >
                {getIcon()}
            </button>
        </div>
    );
}
