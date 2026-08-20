import { FiGlobe, FiServer } from 'react-icons/fi';
import { FaGitAlt } from 'react-icons/fa';

const academicStats = [
  { value: '3.38', label: 'GPA / 4.0' },
  { value: '2022–26', label: 'Academic' },
  { value: '600', label: 'TOEIC' },
];

const focusPillars = [
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: 'Web Development',
    description:
      'Building complete, high-performance web applications by combining responsive, accessible user interfaces with robust backend APIs, database integration, and scalable architecture.',
  },
  {
    icon: <FaGitAlt className="w-6 h-6" />,
    title: 'Git & Team Collaboration',
    description:
      'Collaborating effectively in team environments using Git and GitHub with structured branching strategies, clear commit conventions, pull requests, and smooth merge conflict resolution.',
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: 'DevOps & Deployment',
    description:
      'Containerizing multi-service applications using Docker, configuring CI/CD deployment pipelines, and managing reproducible environments.',
  },
];

export function About() {
  return (
    <section id="about" className="mt-24 w-full scroll-mt-20">
      {/* Section Title */}
      <div className="mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          About Me
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          A snapshot of my education, development focus, and engineering
          workflow.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Side: Profile & Background Card */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-slate-200/80 dark:border-gray-700 flex-1 flex flex-col justify-between">
            <div>
              {/* Header: Monogram */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-gray-700 border border-blue-200/60 dark:border-gray-600 flex items-center justify-center font-bold text-xl text-primary dark:text-blue-400 font-mono mb-6 shadow-xs">
                TY
              </div>

              {/* Identity */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                Trần Nhực Yên
              </h3>
              <p className="text-primary dark:text-blue-400 text-sm font-semibold mb-1 font-mono">
                Computer Science Senior
              </p>
              <p className="text-slate-500 dark:text-gray-400 text-xs mb-6">
                Can Tho University of Technology (CTUT)
              </p>

              {/* Bio Narrative */}
              <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-8 text-justify">
                Driven by a passion for clean software architecture and
                intuitive interfaces, I focus on building performant, modern web
                applications. Currently completing my final year in Computer
                Science with hands-on experience in full-stack TypeScript,
                React, and Node.js ecosystems.
              </p>
            </div>

            {/* Academic Credentials */}
            <div className="pt-6 border-t border-slate-100 dark:border-gray-700 grid grid-cols-3 gap-3 text-center">
              {academicStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200/70 dark:border-gray-700"
                >
                  <p className="text-lg font-bold text-slate-900 dark:text-gray-100 font-mono">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-[11px] font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Focus Pillars */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
          {focusPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-gray-700 shadow-xs hover:shadow-md hover:border-primary-border dark:hover:border-blue-500/50 transition-all duration-300 flex-1 flex flex-col justify-center"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light dark:bg-gray-700 text-primary dark:text-blue-400 flex items-center justify-center shrink-0 border border-primary-border/60 dark:border-gray-600 mt-0.5">
                  {pillar.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-gray-100 mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed text-justify">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
