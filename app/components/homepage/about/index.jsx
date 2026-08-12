import { personalData } from "@/utils/data/personal-data";
import {
  FaArrowRight,
  FaCode,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "Hibernate",
  "React.js",
  "MySQL",
  "PostgreSQL",
  "AWS",
];

const focusAreas = [
  {
    number: "01",
    icon: FaServer,
    title: "Backend Engineering",
    description:
      "Building clean and scalable REST APIs with Spring Boot, JPA/Hibernate and layered architecture.",
  },
  {
    number: "02",
    icon: FaShieldAlt,
    title: "Secure Systems",
    description:
      "Working with authentication, authorization, JWT, OAuth2 and secure data handling.",
  },
  {
    number: "03",
    icon: FaCode,
    title: "Full-Stack Development",
    description:
      "Connecting robust Java backends with responsive React interfaces to deliver complete applications.",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* =====================================================
          LUXURY BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#16f2b3]/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="relative mb-14">
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-10 bg-[#16f2b3]" />

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#16f2b3]">
            About Me
          </p>
        </div>

        <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          I build{" "}
          <span className="bg-gradient-to-r from-[#16f2b3] via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            secure & scalable
          </span>{" "}
          digital experiences.
        </h2>
      </div>

      {/* =====================================================
          MAIN TWO COLUMN LAYOUT
      ====================================================== */}

      <div className="relative grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

        {/* ===================================================
            LEFT — ABOUT ME
        ==================================================== */}

        <div className="flex flex-col justify-between">

          {/* Introduction */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              Who I Am
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Hello, I&apos;m{" "}
              <span className="text-[#16f2b3]">
                {personalData.name}
              </span>
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-400 sm:text-lg">
              <p>
                I&apos;m a{" "}
                <span className="font-medium text-white">
                  Java Full Stack Developer
                </span>{" "}
                focused on building secure, reliable and maintainable
                applications.
              </p>

              <p>
                My primary focus is backend development with{" "}
                <span className="font-medium text-[#16f2b3]">
                  Java, Spring Boot and Spring Security
                </span>
                , while using React.js to create clean and responsive
                interfaces.
              </p>

              <p>
                I enjoy turning real-world problems into practical software
                through clean architecture, thoughtful API design and
                efficient data handling.
              </p>
            </div>
          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <div className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                Core Technologies
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    cursor-default
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-gray-300
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#16f2b3]/40
                    hover:bg-[#16f2b3]/10
                    hover:text-[#16f2b3]
                    hover:shadow-[0_10px_30px_rgba(22,242,179,0.08)]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              MOTIVATIONAL QUOTE
          ================================================== */}

          <div
            className="
              group
              relative
              mt-10
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-[#151a26]
              via-[#111722]
              to-[#15132a]
              p-6
              transition-all
              duration-500
              hover:border-violet-500/30
              hover:shadow-[0_25px_70px_rgba(124,58,237,0.10)]
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-violet-600/15
                blur-[60px]
                transition-all
                duration-500
                group-hover:bg-violet-600/25
              "
            />

            <div className="relative">
              <div className="mb-3 text-4xl font-serif leading-none text-violet-500/50">
                “
              </div>

              <p className="max-w-xl text-base font-medium leading-7 text-gray-200 sm:text-lg">
                Keep building, keep learning, and let every project make you
                a better engineer.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#16f2b3]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
                  My Mindset
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT — LUXURY FOCUS PANEL
        ==================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#0d131d]
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          "
        >
          {/* Outer glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#16f2b3]/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />

          {/* Top gradient line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent opacity-60" />

          <div className="relative p-6 sm:p-8 lg:p-10">

            {/* Panel Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#16f2b3]">
                  Currently Focused On
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Engineering things that are{" "}
                  <span className="text-gray-500">
                    useful, secure &amp; built to last.
                  </span>
                </h3>
              </div>

              {/* Status indicator */}
              <div
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#16f2b3]/20
                  bg-[#16f2b3]/5
                  px-3
                  py-1.5
                  sm:flex
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16f2b3] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16f2b3]" />
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#16f2b3]">
                  Active
                </span>
              </div>
            </div>

            {/* =================================================
                FOCUS ITEMS
            ================================================== */}

            <div className="divide-y divide-white/[0.07]">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group/item
                      relative
                      py-6
                      first:pt-0
                      last:pb-0
                    "
                  >
                    <div className="flex gap-5">

                      {/* Number */}
                      <div className="hidden w-8 shrink-0 pt-1 sm:block">
                        <span className="text-xs font-medium tracking-widest text-gray-700 transition-colors duration-300 group-hover/item:text-[#16f2b3]">
                          {item.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.035]
                          text-gray-500
                          transition-all
                          duration-300
                          group-hover/item:border-[#16f2b3]/30
                          group-hover/item:bg-[#16f2b3]/10
                          group-hover/item:text-[#16f2b3]
                          group-hover/item:shadow-[0_10px_30px_rgba(22,242,179,0.08)]
                        "
                      >
                        <Icon className="text-sm" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h4
                            className="
                              text-base
                              font-semibold
                              text-white
                              transition-colors
                              duration-300
                              group-hover/item:text-[#16f2b3]
                              sm:text-lg
                            "
                          >
                            {item.title}
                          </h4>

                          <FaArrowRight
                            className="
                              shrink-0
                              text-xs
                              text-gray-700
                              transition-all
                              duration-300
                              group-hover/item:translate-x-1
                              group-hover/item:text-[#16f2b3]
                            "
                          />
                        </div>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover/item:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM SIGNATURE
            ================================================== */}

            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600">
                    Engineering Philosophy
                  </p>

                  <p className="mt-2 text-sm font-medium text-gray-300">
                    Simple architecture. Strong security. Real impact.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;