"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-[#25213b] bg-[#090c18] text-white">

      {/* Top glow */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">

        {/* Main row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#303651] bg-[#11152a] text-[#16f2b3] transition-all duration-300 group-hover:border-[#16f2b3]/60">
                <span className="font-bold">M</span>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Md Mashood Alam
                </p>
                <p className="text-[10px] tracking-[0.2em] text-gray-500">
                  JAVA FULL STACK DEVELOPER
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-gray-400 transition-colors duration-300 hover:text-[#16f2b3]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social + top */}
          <div className="flex items-center justify-center gap-2">

            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#292e48] bg-[#101428] text-gray-400 transition-all duration-300 hover:border-[#16f2b3]/60 hover:text-[#16f2b3]"
            >
              <FaGithub size={14} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/md-mashood-alam-b23914280/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#292e48] bg-[#101428] text-gray-400 transition-all duration-300 hover:border-[#16f2b3]/60 hover:text-[#16f2b3]"
            >
              <FaLinkedinIn size={14} />
            </Link>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group ml-1 flex h-8 items-center gap-2 rounded-lg border border-[#292e48] bg-[#101428] px-3 text-[11px] text-gray-400 transition-all duration-300 hover:border-[#16f2b3]/60 hover:text-[#16f2b3]"
            >
              Top
              <FaArrowUp
                size={10}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>

          </div>
        </div>

        {/* Small divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#25213b] to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">

          <p className="text-[11px] text-gray-500">
            © {currentYear}{" "}
            <span className="text-gray-300">
              Md Mashood Alam
            </span>
            . All rights reserved.
          </p>

          <p className="text-[10px] tracking-wide text-gray-600">
            Designed & Built with passion.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;