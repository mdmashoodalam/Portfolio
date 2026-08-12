"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[100] w-full bg-transparent">

      {/* Subtle top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#16f2b3]/40 to-transparent" />

      {/* Full width container */}
      <div className="w-full px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="flex h-[72px] items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            {/* Logo */}
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#11152a]/60 transition-all duration-300 group-hover:bg-[#11152a]/90 group-hover:shadow-[0_0_25px_rgba(22,242,179,0.12)]">
              <span className="absolute inset-0 bg-gradient-to-br from-[#16f2b3]/10 to-violet-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative text-sm font-bold text-[#16f2b3]">
                M
              </span>
            </div>

            {/* Name */}
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-[#16f2b3]">
                MD MASHOOD ALAM
              </p>

              <p className="mt-0.5 text-[9px] tracking-[0.25em] text-gray-500">
                JAVA FULL STACK DEVELOPER
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center md:flex">

            <div className="flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 transition-all duration-300 hover:text-white"
                >
                  <span className="relative z-10">
                    {item.name}
                  </span>

                  {/* Subtle hover glow */}
                  <span className="absolute inset-0 -z-0 rounded-full bg-[#16f2b3]/0 transition-all duration-300 group-hover:bg-[#16f2b3]/5" />

                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#16f2b3] shadow-[0_0_8px_rgba(22,242,179,0.7)] transition-all duration-300 group-hover:w-5" />
                </Link>
              ))}
            </div>

            {/* Let's Talk */}
            <Link
              href="/#contact"
              className="group ml-4 flex items-center gap-2 rounded-full border border-[#16f2b3]/30 bg-transparent px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16f2b3] transition-all duration-300 hover:border-[#16f2b3] hover:bg-[#16f2b3] hover:text-[#07110f] hover:shadow-[0_0_20px_rgba(22,242,179,0.18)]"
            >
              Let&apos;s Talk

              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-gray-300 transition-all duration-300 hover:bg-[#16f2b3]/5 hover:text-[#16f2b3] md:hidden"
          >
            {isOpen ? (
              <FiX size={21} />
            ) : (
              <FiMenu size={21} />
            )}
          </button>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[500px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-transparent p-2">

            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-gray-400 transition-all duration-300 hover:bg-[#16f2b3]/5 hover:text-[#16f2b3]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[9px] text-gray-600 transition-colors duration-300 group-hover:text-[#16f2b3]">
                    0{index + 1}
                  </span>

                  {item.name}
                </span>

                <FiArrowUpRight
                  size={14}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </Link>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;