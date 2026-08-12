import { educations } from "@/utils/data/educations";
import { BsMortarboardFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

function Education() {
  return (
    <section
      id="education"
      className="relative z-50 border-t border-[#25213b] py-8 lg:py-10"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute left-[18%] top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[15%] bottom-0 h-40 w-40 rounded-full bg-[#16f2b3]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-8 lg:mb-10">

          {/* Section Label */}

          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#16f2b3]" />

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16f2b3]">
              Education
            </p>
          </div>

          {/* Heading + Description */}

          <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-end">

            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building the{" "}
              <span className="bg-gradient-to-r from-[#16f2b3] via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                foundation
              </span>{" "}
              behind my engineering journey.
            </h2>

            <p className="border-l border-[#25213b] pl-5 text-sm leading-6 text-gray-400 sm:text-base lg:pl-7">
              Academic foundations in computer science, strengthened through
              practical development, backend engineering, and continuous
              technical learning.
            </p>

          </div>
        </div>

        {/* =====================================================
            EDUCATION CONTENT
        ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.7fr] lg:gap-10">

          {/* =================================================
              LEFT — ACADEMIC JOURNEY
          ================================================== */}

          <div className="relative hidden min-h-[280px] overflow-hidden rounded-2xl border border-[#1f223c] bg-[#0f1328] lg:flex">

            {/* Grid Background */}

            <div className="absolute inset-0 opacity-[0.07]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />
            </div>

            {/* Glow */}

            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            {/* Content */}

            <div className="relative z-10 flex w-full flex-col items-center justify-center p-8 text-center">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/30 bg-[#171b35] text-[#16f2b3] shadow-[0_0_30px_rgba(22,242,179,0.08)]">
                <BsMortarboardFill size={28} />
              </div>

              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Academic Journey
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
                Knowledge, consistency and continuous improvement shaping my
                approach to software engineering.
              </p>

              {/* Decorative Line */}

              <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3]" />

                <span className="h-px w-12 bg-gradient-to-r from-[#16f2b3] to-violet-500" />

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT — EDUCATION CARDS
          ================================================== */}

          <div className="relative">

            {/* Timeline */}

            <div className="absolute bottom-5 left-[20px] top-5 hidden w-px bg-gradient-to-b from-[#16f2b3]/60 via-violet-500/40 to-transparent sm:block" />

            <div className="space-y-4">

              {educations.map((education, index) => (
                <div
                  key={education.id}
                  className="group relative sm:pl-12"
                >

                  {/* Timeline Point */}

                  <div className="absolute left-[14px] top-8 hidden h-3 w-3 rounded-full border-2 border-[#16f2b3] bg-[#0b1020] shadow-[0_0_12px_rgba(22,242,179,0.35)] sm:block" />

                  {/* Education Card */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#1f223c]
                      bg-[#11152c]
                      p-5
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-violet-500/60
                      hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]
                    "
                  >

                    {/* Top Accent */}

                    <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-70 transition-all duration-500 group-hover:w-3/4 group-hover:via-[#16f2b3]" />

                    {/* Decorative Number */}

                    <span className="pointer-events-none absolute right-5 top-3 text-5xl font-bold text-white/[0.025]">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">

                      {/* Duration + Arrow */}

                      <div className="mb-4 flex items-center justify-between gap-4">

                        <span className="rounded-full border border-[#16f2b3]/20 bg-[#16f2b3]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#16f2b3]">
                          {education.duration}
                        </span>

                        <FiArrowUpRight
                          size={18}
                          className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#16f2b3]"
                        />

                      </div>

                      {/* Education Details */}

                      <div className="flex items-start gap-4">

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
                            border-[#2a2e4a]
                            bg-[#171b35]
                            text-violet-400
                            transition-all
                            duration-500
                            group-hover:border-[#16f2b3]/30
                            group-hover:bg-[#16f2b3]/5
                            group-hover:text-[#16f2b3]
                          "
                        >
                          <BsMortarboardFill size={19} />
                        </div>

                        {/* Title + Institution + CGPA */}

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                            {/* Education Information */}

                            <div>

                              <h3 className="text-base font-semibold uppercase leading-6 tracking-wide text-white sm:text-lg">
                                {education.title}
                              </h3>

                              <p className="mt-1 text-sm leading-6 text-gray-400">
                                {education.institution}
                              </p>

                            </div>

                            {/* CGPA Badge */}

                            <div
                              className="
                                flex
                                w-fit
                                shrink-0
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#16f2b3]/20
                                bg-[#16f2b3]/5
                                px-3
                                py-1.5
                              "
                            >

                              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                                CGPA
                              </span>

                              <span className="text-sm font-semibold text-[#16f2b3]">
                                {education.cgpa}
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>

                      {/* Bottom Accent */}

                      <div className="mt-5 flex items-center gap-2">

                        <span className="h-1 w-1 rounded-full bg-[#16f2b3]" />

                        <span className="h-px w-8 bg-[#25213b] transition-all duration-500 group-hover:w-16 group-hover:bg-violet-500/60" />

                        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
                          Academic Achievement
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;