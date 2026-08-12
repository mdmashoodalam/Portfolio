import { experiences, certifications } from "@/utils/data/experience";
import {
  BsPersonWorkspace,
  BsAward,
  BsArrowUpRight,
} from "react-icons/bs";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-8 sm:py-10 lg:py-12"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-7 lg:mb-9">

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#16f2b3]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#16f2b3]">
              Career Journey
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">

            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl">
              Experience that shaped my{" "}
              <span className="bg-gradient-to-r from-[#16f2b3] via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                engineering mindset.
              </span>
            </h2>

            <p className="max-w-md text-xs leading-6 text-gray-500 lg:text-right">
              Building real products, collaborating with teams, and turning
              technical knowledge into practical solutions.
            </p>

          </div>
        </div>

        {/* =====================================================
            EXPERIENCE + CERTIFICATION
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">

          {/* =================================================
              LEFT — EXPERIENCE
          ================================================= */}

          <div>

            <div className="mb-4 flex items-center justify-between">

              <div>
                <p className="text-[8px] uppercase tracking-[0.35em] text-gray-600">
                  Professional Experience
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Experience
                </h3>
              </div>

              <span className="text-[8px] uppercase tracking-[0.25em] text-gray-700">
                01 — Career
              </span>

            </div>

            <div className="space-y-3">

              {experiences.map((experience, index) => (
                <article
                  key={experience.id}
                  className="
                    group
                    relative
                    border-b
                    border-white/[0.07]
                    py-5
                    transition-all
                    duration-300
                    first:border-t
                    first:border-white/[0.07]
                    hover:border-[#16f2b3]/20
                  "
                >

                  <div className="grid gap-5 sm:grid-cols-[auto_1fr]">

                    {/* Number / Icon */}
                    <div className="flex items-start gap-3">

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/[0.08]
                          bg-white/[0.02]
                          text-[#16f2b3]
                          transition-all
                          duration-300
                          group-hover:border-[#16f2b3]/30
                          group-hover:bg-[#16f2b3]/5
                        "
                      >
                        <BsPersonWorkspace size={16} />
                      </div>

                      <span className="pt-2 text-[9px] font-semibold tracking-[0.25em] text-gray-700 sm:hidden">
                        0{index + 1}
                      </span>

                    </div>

                    {/* Content */}
                    <div>

                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">

                        <div>
                          <h4 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-[#16f2b3]">
                            {experience.title}
                          </h4>

                          <p className="mt-1 text-xs text-gray-500">
                            {experience.company}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">

                          <span
                            className="
                              rounded-full
                              border
                              border-[#16f2b3]/15
                              bg-[#16f2b3]/5
                              px-2.5
                              py-1
                              text-[8px]  
                              font-semibold
                              uppercase
                              tracking-[0.2em]
                              text-[#16f2b3]
                            "
                          >
                            {experience.duration}
                          </span>

                          <span className="hidden text-[9px] font-semibold tracking-[0.25em] text-gray-700 sm:block">
                            0{index + 1}
                          </span>

                        </div>

                      </div>

                      {/* Points */}
                      <div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">

                        {experience.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex gap-2.5 text-xs leading-5 text-gray-500"
                          >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#16f2b3]/70" />

                            <span>{point}</span>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>

          {/* =================================================
              RIGHT — CERTIFICATIONS
          ================================================== */}

          <div>

            <div className="mb-4 flex items-center justify-between">

              <div>
                <p className="text-[8px] uppercase tracking-[0.35em] text-gray-600">
                  Professional Development
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Certifications
                </h3>
              </div>

              <span className="text-[8px] uppercase tracking-[0.25em] text-gray-700">
                02 — Learning
              </span>

            </div>

            <div className="space-y-3">

              {certifications.map((cert) => (
                <article
                  key={cert.id}
                  className="
                    group
                    relative
                    border-b
                    border-white/[0.07]
                    py-5
                    first:border-t
                    first:border-white/[0.07]
                    transition-all
                    duration-300
                    hover:border-violet-500/20
                  "
                >

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-violet-500/15
                        bg-violet-500/5
                        text-violet-400
                        transition-all
                        duration-300
                        group-hover:border-violet-500/30
                        group-hover:bg-violet-500/10
                      "
                    >
                      <BsAward size={16} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-violet-400">
                            Certification
                          </p>

                          <h4 className="mt-1 text-base font-semibold leading-5 text-white">
                            {cert.title}
                          </h4>

                        </div>

                        <BsArrowUpRight
                          size={14}
                          className="
                            shrink-0
                            text-gray-700
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-violet-400
                          "
                        />

                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        {cert.issuer} · {cert.issued}
                      </p>

                      {/* Summary */}
                      <div className="mt-4 space-y-2">

                        {cert.summary.map((item, index) => (
                          <p
                            key={index}
                            className="text-xs leading-5 text-gray-500"
                          >
                            <span className="mr-2 text-violet-400">
                              ✦
                            </span>

                            {item}
                          </p>
                        ))}

                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">

                        {cert.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-white/[0.06]
                              px-2.5
                              py-1
                              text-[8px]
                              text-gray-600
                              transition-colors
                              duration-300
                              group-hover:text-gray-400
                            "
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>

        {/* =====================================================
            WHY THIS MATTERS
        ====================================================== */}

        <div className="mt-8 border-y border-white/[0.07] py-5">

          <div className="grid items-center gap-5 lg:grid-cols-[0.7fr_1.5fr_auto]">

            {/* Title */}
            <div className="flex items-center gap-3">

              <span className="h-8 w-[2px] bg-[#16f2b3]" />

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#16f2b3]">
                  Why This Matters
                </p>

                <h3 className="mt-1 text-base font-semibold text-white">
                  Strong hands-on experience
                </h3>

              </div>

            </div>

            {/* Description */}
            <p className="max-w-2xl text-xs leading-6 text-gray-500">
              Each internship strengthened my ability to work with real teams,
              launch products, and ship responsive interfaces across desktop
              and mobile.
            </p>

            {/* Philosophy */}
            <div className="lg:border-l lg:border-white/[0.07] lg:pl-6">

              <p className="whitespace-nowrap text-[8px] uppercase tracking-[0.3em] text-gray-700">
                Engineering Mindset
              </p>

              <p className="mt-1.5 whitespace-nowrap text-xs font-medium">
                <span className="text-[#16f2b3]">Learn</span>
                <span className="mx-2 text-gray-700">·</span>
                <span className="text-white">Build</span>
                <span className="mx-2 text-gray-700">·</span>
                <span className="text-violet-400">Ship</span>
                <span className="mx-2 text-gray-700">·</span>
                <span className="text-gray-400">Improve</span>
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;