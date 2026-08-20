import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="sticky top-4 z-50 mx-4 lg:mx-auto max-w-7xl">
      <header className="rounded-2xl border border-slate-200/60 dark:border-gray-700/80 bg-white/60 dark:bg-gray-800/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-800/95">
        <nav className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 dark:bg-blue-600 text-sm font-bold text-white shadow-xs">
              <span>Y</span>
            </span>
            <span className="lg:block hidden text-base font-semibold tracking-tight text-slate-900 dark:text-gray-100">
              Yen Portfolio
            </span>
          </a>

          <div className="flex items-center gap-6 sm:gap-8">
            <ul className="items-center gap-6 sm:gap-8 flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 dark:text-gray-300 transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Dark Mode"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-gray-700/80 border border-slate-200 dark:border-gray-600/80 transition-all duration-200 cursor-pointer"
            >
              {isDark ? (
                <FiSun className="w-4 h-4 text-amber-400" />
              ) : (
                <FiMoon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
