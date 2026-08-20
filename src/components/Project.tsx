import { projects } from '../data/homeData';

export function Project() {
  return (
    <section id="projects" className="mt-24 w-full scroll-mt-20">
      <div className="mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Projects
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          A showcase of recent web applications and interactive projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-gray-700 hover:-translate-y-1.5 hover:shadow-md hover:border-primary-border dark:hover:border-blue-500/50 transition-all duration-300 group cursor-pointer flex flex-col"
          >
            {/* Project Header / Placeholder Box */}
            <div className="h-44 bg-slate-50 dark:bg-gray-900/60 border border-slate-100 dark:border-gray-700 rounded-xl mb-5 flex items-center justify-center overflow-hidden relative group-hover:bg-blue-50/40 dark:group-hover:bg-gray-900/90 transition-colors">
              <span className="text-slate-700 dark:text-gray-200 font-semibold tracking-wider text-base group-hover:text-primary dark:group-hover:text-blue-400 transition-colors text-center px-4">
                {project.title}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-5 text-sm leading-relaxed grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-5 mt-auto">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-50 dark:bg-gray-700/80 text-slate-700 dark:text-gray-200 border border-slate-200/80 dark:border-gray-600 text-xs font-semibold rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="flex-1 py-2.5 bg-surface-dark dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 transition-colors shadow-sm cursor-pointer">
                Live Demo
              </button>
              <button className="flex-1 py-2.5 bg-white dark:bg-gray-700 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-gray-600 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors shadow-xs cursor-pointer">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
