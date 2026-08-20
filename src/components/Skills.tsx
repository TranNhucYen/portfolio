import { FiCode, FiServer, FiSettings } from 'react-icons/fi';

const frontend = [
  'TypeScript',
  'JavaScript (ES6+)',
  'React',
  'Next.js',
  'Redux / Zustand',
  'Tailwind CSS',
  'Mantine UI',
  'HTML5',
  'CSS3',
];

const backend = [
  'Node.js',
  'Express',
  'NestJS',
  'MySQL',
  'PostgreSQL',
  'TypeORM',
  'Drizzle ORM',
  'RESTful APIs',
  'GraphQL',
  'JWT Auth',
];

const tools = [
  'Git / GitHub / GitLab',
  'Docker',
  'Postman',
  'Vite / Webpack',
  'VS Code',
  'Figma',
  'Linux CLI',
  'CI / CD',
];

export function Skills() {
  return (
    <section id="skills" className="mt-24 w-full scroll-mt-20">
      <div className="mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Skills & Tools
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
          Core languages, libraries, frameworks, and engineering tools I work
          with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Front-End */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-slate-200/80 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="w-12 h-12 bg-primary-light dark:bg-gray-700 text-primary dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-primary-border/60 dark:border-gray-600">
              <FiCode className="w-6 h-6" />
            </span>
            Front-End
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {frontend.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-50 dark:bg-gray-700/80 text-slate-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200/80 dark:border-gray-600 hover:bg-primary dark:hover:bg-blue-600 hover:text-white hover:border-primary dark:hover:border-blue-600 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-slate-200/80 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="w-12 h-12 bg-primary-light dark:bg-gray-700 text-primary dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-primary-border/60 dark:border-gray-600">
              <FiServer className="w-6 h-6" />
            </span>
            Back-End
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {backend.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-50 dark:bg-gray-700/80 text-slate-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200/80 dark:border-gray-600 hover:bg-primary dark:hover:bg-blue-600 hover:text-white hover:border-primary dark:hover:border-blue-600 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-slate-200/80 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="w-12 h-12 bg-primary-light dark:bg-gray-700 text-primary dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-primary-border/60 dark:border-gray-600">
              <FiSettings className="w-6 h-6" />
            </span>
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-50 dark:bg-gray-700/80 text-slate-700 dark:text-gray-200 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200/80 dark:border-gray-600 hover:bg-primary dark:hover:bg-blue-600 hover:text-white hover:border-primary dark:hover:border-blue-600 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
