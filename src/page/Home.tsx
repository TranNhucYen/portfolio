import { Navbar } from '../components/Navbar';
import { Terminal } from '../components/Terminal';
import { Project } from '../components/Project';
import { introText } from '../data/homeData';
import jsImg from '../assets/js.png';
import tsImg from '../assets/ts.png';
import reactImg from '../assets/react.svg';
import nextjsImg from '../assets/nextjs.png';
import nestjsImg from '../assets/nestjs.png';
import mongodbImg from '../assets/mongodb.png';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Skills } from '../components/Skills';

const techStack = [jsImg, tsImg, reactImg, nextjsImg, nestjsImg, mongodbImg];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        {/* introduction and terminal */}
        <div className="flex items-stretch">
          <div className="w-1/2 pr-6">
            <h1 className="text-7xl font-bold pb-6 -ml-1 text-slate-900 dark:text-white">
              Hello, I'm Yen
            </h1>
            <p className="text-xl pb-2 font-semibold text-slate-800 dark:text-blue-400">
              I'm a Developer
            </p>
            <p className="text-xl text-justify leading-relaxed text-slate-600 dark:text-gray-300">
              {introText}
            </p>
          </div>
          <div className="w-1/2 ml-6 relative">
            <div className="absolute inset-0">
              <Terminal />
            </div>
          </div>
        </div>
        {/* watch project button and watch contact button */}
        <div className="flex pt-18">
          <div className="w-1/2 px-4 flex gap-6 justify-center items-center">
            <a
              href="#projects"
              className="bg-surface-dark hover:bg-slate-900 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold min-w-[185px] py-4 px-8 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 inline-block text-center cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-slate-300 dark:border-gray-700 text-slate-800 dark:text-gray-200 hover:border-slate-400 dark:hover:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-800/80 font-semibold min-w-[185px] py-4 px-8 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all duration-200 inline-block text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* list tech stack */}
          <div className="w-1/2 ml-6 min-w-0 overflow-hidden relative">
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
