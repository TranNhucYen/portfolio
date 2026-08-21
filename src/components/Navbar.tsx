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
  const [activeSection, setActiveSection] = useState('#');

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');

      if (saved) {
        return saved === 'dark';
      }

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 150) {
        setActiveSection('#');
        return;
      }

      const sectionIds = ['contact', 'skills', 'projects', 'about'];

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop;

          if (scrollPosition >= top) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-4 z-50 mx-2 sm:mx-4 lg:mx-auto max-w-7xl">
      <header className="relative rounded-2xl border border-slate-200/60 dark:border-gray-700/80 bg-white/60 dark:bg-gray-800/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-800/95">
        <nav className="flex h-16 items-center px-2 sm:px-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="hidden sm:flex shrink-0 items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 dark:bg-blue-600 text-sm font-bold text-white shadow-xs">
              Y
            </span>

            <span className="hidden lg:block text-base font-semibold tracking-tight text-slate-900 dark:text-gray-100">
              Yen Portfolio
            </span>
          </a>

          {/* Navigation */}
          <div className="relative ml-auto flex w-full sm:w-auto items-center">
            <ul className="flex w-full items-center justify-between gap-0 pr-10 sm:w-auto sm:pr-0 sm:gap-5 md:gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.label} className="shrink-0">
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.href)}
                      className={`text-sm whitespace-nowrap transition-colors duration-200 ${
                        isActive
                          ? 'font-semibold text-slate-900 dark:text-blue-400'
                          : 'font-medium text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              aria-label="Toggle Dark Mode"
              className="relative z-10 ml-2 sm:ml-4 md:ml-5 lg:ml-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/80 text-slate-600 transition-all duration-200 hover:text-slate-900 dark:border-gray-600/80 dark:bg-gray-700/80 dark:text-gray-300 dark:hover:text-white cursor-pointer max-sm:absolute max-sm:top-1/2 max-sm:right-1 max-sm:-translate-y-1/2 max-sm:ml-0 max-sm:h-7 max-sm:w-7"
            >
              {isDark ? (
                <FiSun className="h-4 w-4 text-amber-400 max-sm:h-3.5 max-sm:w-3.5" />
              ) : (
                <FiMoon className="h-4 w-4 text-slate-700 max-sm:h-3.5 max-sm:w-3.5" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}