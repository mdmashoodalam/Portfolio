import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";

import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

import ContactWithoutCaptcha from "./contact-without-captcha";

function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: personalData.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: personalData.linkedIn,
      icon: BiLogoLinkedin,
    },
    {
      name: "X",
      href: personalData.twitter,
      icon: FaXTwitter,
    },
    {
      name: "Facebook",
      href: personalData.facebook,
      icon: FaFacebook,
    },
  ];

  return (
    <section
      id="contact"
      className="relative z-50 border-t border-[#25213b] py-12 lg:py-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#16f2b3]/5 blur-[100px]" />

      {/* Section heading */}
      <div className="relative mx-auto mb-10 max-w-7xl px-4 lg:mb-12 lg:px-0">
        <div className="flex items-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#16f2b3]" />

          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#16f2b3]">
            Contact
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-[#16f2b3]/50 via-violet-500/30 to-transparent" />
        </div>

        <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Let&apos;s turn ideas into{" "}
              <span className="bg-gradient-to-r from-[#16f2b3] to-violet-500 bg-clip-text text-transparent">
                real products.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Whether you have a project, opportunity, or simply want to
              connect, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="hidden lg:block">
            <span className="rounded-full border border-[#252a47] bg-[#0d1123]/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gray-500">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Main contact layout */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-[1.25fr_0.75fr] lg:px-0">
        {/* Contact form */}
        <ContactWithoutCaptcha />

        {/* Contact information */}
        <div className="flex flex-col">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#29264a] bg-gradient-to-br from-[#11142a] via-[#0d1123] to-[#15112d] p-6 md:p-8">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16f2b3]">
                Contact Details
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Let&apos;s stay connected.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                I&apos;m always open to discussing software development,
                full-stack projects, backend engineering, and new
                opportunities.
              </p>
            </div>

            {/* Contact details */}
            <div className="relative mt-8 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#252a47] bg-[#090d1d]/50 p-4 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#10162a]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#151a31] text-[#16f2b3] transition-all duration-300 group-hover:bg-[#16f2b3] group-hover:text-[#081019]">
                  <MdAlternateEmail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm text-gray-200">
                    {personalData.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalData.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#252a47] bg-[#090d1d]/50 p-4 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#10162a]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#151a31] text-[#16f2b3] transition-all duration-300 group-hover:bg-[#16f2b3] group-hover:text-[#081019]">
                  <IoMdCall size={21} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    {personalData.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-4 rounded-2xl border border-[#252a47] bg-[#090d1d]/50 p-4 transition-all duration-300 hover:border-[#16f2b3]/40 hover:bg-[#10162a]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#151a31] text-[#16f2b3] transition-all duration-300 group-hover:bg-[#16f2b3] group-hover:text-[#081019]">
                  <CiLocationOn size={23} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-7 h-px bg-gradient-to-r from-transparent via-[#303552] to-transparent" />

            {/* Social */}
            <div className="relative">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[#292e4b] bg-[#090d1d] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#16f2b3]/50 hover:bg-[#11182b] hover:text-[#16f2b3] hover:shadow-[0_8px_25px_rgba(22,242,179,0.08)]"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom quote */}
            <div className="relative mt-auto pt-8">
              <div className="rounded-2xl border border-[#252a47] bg-[#090d1d]/50 p-5">
                <p className="text-sm italic leading-6 text-gray-400">
                  &ldquo;Great software starts with a good conversation.&rdquo;
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#16f2b3]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#16f2b3]">
                    Open to connect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;