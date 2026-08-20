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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.href)}
                      className={`text-sm transition-colors duration-200 ${
                        isActive
                          ? 'text-slate-900 dark:text-blue-400 font-semibold'
                          : 'text-slate-500 dark:text-gray-400 font-medium hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
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
