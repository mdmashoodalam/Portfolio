import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const expertise = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "React.js",
  "REST APIs",
  "MySQL",
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-[#16f2b3]/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      {/* =====================================================
          MAIN LUXURY HERO
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/[0.08]
          bg-[#0d131d]
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        "
      >
        {/* Top accent line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16f2b3]/70 to-transparent" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#16f2b3]/5 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-600/5 blur-[100px]" />

        {/* Subtle grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative grid items-center gap-12 px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-14 lg:py-16">

          {/* =================================================
              LEFT — INTRODUCTION
          ================================================== */}

          <div className="order-2 lg:order-1">

            {/* Status */}
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16f2b3] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16f2b3]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500 sm:text-xs">
                Open to Java Full Stack Opportunities
              </span>
            </div>

            {/* Greeting */}
            <p className="mb-4 text-sm font-medium text-gray-500 sm:text-base">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {personalData.name}
            </h1>

            {/* Designation */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="h-px w-8 bg-[#16f2b3]" />

              <h2 className="text-lg font-medium text-gray-300 sm:text-xl md:text-2xl">
                {personalData.designation}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 md:text-lg">
              I build{" "}
              <span className="font-medium text-gray-300">
                secure, scalable REST APIs
              </span>{" "}
              with Spring Boot and clean, responsive interfaces with React —
              turning ideas into production-ready full-stack applications.
            </p>

            {/* =================================================
                EXPERTISE
            ================================================== */}

            <div className="mt-7 flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    font-medium
                    text-gray-500
                    transition-all
                    duration-300
                    hover:border-[#16f2b3]/30
                    hover:bg-[#16f2b3]/5
                    hover:text-[#16f2b3]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <Link
                href="#contact"
                className="
                  group/button
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#16f2b3]
                  px-6
                  py-3.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[#07110f]
                  transition-all
                  duration-300
                  hover:gap-3
                  hover:bg-[#42f7c8]
                  hover:shadow-[0_10px_35px_rgba(22,242,179,0.2)]
                "
              >
                <span>Get in touch</span>
                <FaArrowRight className="text-[10px]" />
              </Link>

              <Link
                href={personalData.resume}
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.07]
                  hover:text-white
                "
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            </div>

            {/* =================================================
                SOCIALS
            ================================================== */}

            <div className="mt-9 flex items-center gap-4">
              <span className="mr-1 text-[9px] uppercase tracking-[0.3em] text-gray-700">
                Connect
              </span>

              <Link
                href={personalData.github}
                target="_blank"
                className="
                  text-gray-600
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#16f2b3]
                "
              >
                <BsGithub size={18} />
              </Link>

              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="
                  text-gray-600
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#16f2b3]
                "
              >
                <BsLinkedin size={18} />
              </Link>

              <Link
                href={personalData.leetcode}
                target="_blank"
                className="
                  text-gray-600
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#16f2b3]
                "
              >
                <SiLeetcode size={18} />
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT — PROFESSIONAL PROFILE
          ================================================== */}

          <div className="order-1 lg:order-2">

            <div className="relative mx-auto max-w-[430px]">

              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#16f2b3]/10 via-transparent to-violet-600/10 blur-2xl" />

              {/* Profile frame */}
              <div
                className="
                  group/profile
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#111722]
                  p-2
                  shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                "
              >

                {/* Image */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    bg-[#151b26]
                  "
                >
                  <Image
                    src="/profile.png"
                    alt={`${personalData.name} - Java Full Stack Developer`}
                    width={700}
                    height={850}
                    priority
                    className="
                      h-[390px]
                      w-full
                      object-cover
                      object-top
                      grayscale-[15%]
                      transition-all
                      duration-700
                      group-hover/profile:scale-[1.025]
                      group-hover/profile:grayscale-0
                      sm:h-[480px]
                    "
                  />

                  {/* Image gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0d131d]
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Bottom profile label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#0d131d]/80
                        p-4
                        backdrop-blur-xl
                      "
                    >
                      <div className="flex items-center justify-between gap-4">

                        <div>
                          <p className="text-[9px] uppercase tracking-[0.3em] text-[#16f2b3]">
                            Java Full Stack Developer
                          </p>

                          <p className="mt-1 text-sm font-medium text-white">
                            Backend • Security • React
                          </p>
                        </div>

                        <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#16f2b3]/20 bg-[#16f2b3]/5 sm:flex">
                          <span className="h-2 w-2 rounded-full bg-[#16f2b3]" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING STATS
              ================================================== */}

              <div
  className="
    relative
    mt-4
    grid
    grid-cols-2
    divide-x
    divide-white/[0.08]
    rounded-2xl
    border
    border-white/[0.08]
    bg-[#111722]/90
    px-4
    py-5
    backdrop-blur-xl
  "
>
  {/* Full Stack Projects */}
  <div className="px-4 text-center">
    <p className="text-xl font-bold text-white sm:text-2xl">
      3+
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-gray-600 sm:text-[9px]">
      Full Stack Projects
    </p>
  </div>

  {/* Technologies */}
  <div className="px-4 text-center">
    <p className="text-xl font-bold text-white sm:text-2xl">
      15+
    </p>

    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-gray-600 sm:text-[9px]">
      Technologies
    </p>
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      </div>
    </section>
  );
}

export default HeroSection;