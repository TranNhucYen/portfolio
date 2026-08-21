import {
  About,
  Contact,
  Navbar,
  Project,
  Skills,
  Terminal,
} from '../components';
import { introText } from '../data/homeData';

// Tech stack assets
import jsImg from '../assets/js.png';
import tsImg from '../assets/ts.png';
import reactImg from '../assets/react.svg';
import nextjsImg from '../assets/nextjs.png';
import nestjsImg from '../assets/nestjs.png';
import mongodbImg from '../assets/mongodb.png';

const techStack = [jsImg, tsImg, reactImg, nextjsImg, nestjsImg, mongodbImg];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-18 lg:gap-x-12 items-stretch">
          {/* 1. Introduce */}
          <div className="lg:col-start-1 lg:row-start-1 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold pb-6 -ml-1 text-slate-900 dark:text-white">
              Hello, I'm Yen
            </h1>
            <p className="text-xl pb-2 font-semibold text-slate-800 dark:text-blue-400">
              I'm a Developer
            </p>
            <p className="text-xl text-justify leading-relaxed text-slate-600 dark:text-gray-300">
              {introText}
            </p>
          </div>

          {/* 2. Buttons */}
          <div className="lg:col-start-1 lg:row-start-2 flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-surface-dark hover:bg-slate-900 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold min-w-[185px] py-4 px-8 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 inline-block text-center cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border border-slate-300 dark:border-gray-700 text-slate-800 dark:text-gray-200 hover:border-slate-400 dark:hover:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-800/80 font-semibold min-w-[185px] py-4 px-8 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all duration-200 inline-block text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* 3. list tech stack */}
          <div className="lg:col-start-2 lg:row-start-2 min-w-0 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white dark:from-[#111827] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white dark:from-[#111827] to-transparent z-10 pointer-events-none"></div>
            <div className="flex">
              <div className="flex bg-white dark:bg-[#111827] text-sm animate-scroll">
                {/* lan 1 */}
                <div className="flex gap-6 pr-6">
                  {techStack.map((imgSrc, index) => (
                    <div
                      key={`group1-${index}`}
                      className="w-24 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xs p-2.5 border border-slate-300 dark:border-gray-600 hover:border-primary-border dark:hover:border-blue-500/60 transition-all duration-200"
                    >
                      <img
                        src={imgSrc}
                        alt={`tech-${index}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* lan 2 (lap lai ) */}
                <div className="flex gap-6 pr-6">
                  {techStack.map((imgSrc, index) => (
                    <div
                      key={`group2-${index}`}
                      className="w-24 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xs p-2.5 border border-slate-300 dark:border-gray-600 hover:border-primary-border dark:hover:border-blue-500/60 transition-all duration-200"
                    >
                      <img
                        src={imgSrc}
                        alt={`tech-${index}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Terminal */}
          <div className="lg:col-start-2 lg:row-start-1 relative h-[360px] sm:h-[400px] lg:h-full min-h-[300px]">
            <div className="absolute inset-0">
              <Terminal />
            </div>
          </div>
        </div>

        <About />
        <Project />
        <Skills />
        <Contact />

        <div className="h-[5vh]"></div>
      </main>
    </div>
  );
}
