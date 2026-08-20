import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const contactDetails = [
  {
    icon: (
      <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-blue-400" />
    ),
    label: 'Location',
    value: 'Can Tho, Vietnam',
    breakClass: 'break-words',
  },
  {
    icon: (
      <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-blue-400" />
    ),
    label: 'Phone',
    value: '+84 123 456 789',
    breakClass: 'break-all',
  },
  {
    icon: (
      <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-blue-400" />
    ),
    label: 'Email',
    value: 'yentran@example.com',
    breakClass: 'break-all',
  },
];

const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="mt-24 w-full scroll-mt-20 mb-20">
      <div className="mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          Contact Me
        </h2>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-base sm:text-lg">
          I'm currently available for freelance work and full-time
          opportunities. If you have a project that needs some creative touch,
          I'd love to hear about it.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 text-left">
        {/* Cột Trái: Thông tin liên hệ */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 text-slate-800 dark:text-gray-200 rounded-2xl p-8 shadow-sm border border-slate-200/80 dark:border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
              Get In Touch
            </h3>
            <p className="text-slate-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Fill up the form and I will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6 sm:gap-8">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-gray-700 border border-blue-100 dark:border-gray-600 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-slate-800 dark:text-gray-200 min-w-0">
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-gray-500 font-semibold mb-0.5">
                      {item.label}
                    </p>
                    <p
                      className={`text-base sm:text-lg text-slate-800 dark:text-gray-200 font-medium ${item.breakClass}`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 sm:mt-12 lg:mt-14 flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-xl flex items-center justify-center text-slate-600 dark:text-gray-300 hover:bg-slate-900 dark:hover:bg-blue-600 hover:text-white hover:border-slate-900 dark:hover:border-blue-600 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cột Phải: Form Gửi Email */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200/80 dark:border-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Send Me A Message
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-slate-600 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="w-full bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-500/50 focus:border-primary dark:focus:border-blue-500 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-slate-600 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="w-full bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-500/50 focus:border-primary dark:focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-600 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className="w-full bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-500/50 focus:border-primary dark:focus:border-blue-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-slate-600 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Project discussion"
                className="w-full bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-500/50 focus:border-primary dark:focus:border-blue-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-600 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className="w-full bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-500/50 focus:border-primary dark:focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-surface-dark dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-slate-900 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
