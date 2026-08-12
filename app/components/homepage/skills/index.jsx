import {
  SiOpenjdk,
  SiSpring,
  SiHibernate,
  SiJsonwebtokens,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiPostman,
  SiNodedotjs,
  SiLinux,
} from "react-icons/si";

import {
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaTools,
  FaCode,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpring },
      { name: "Spring MVC", icon: SiSpring },
      { name: "Hibernate", icon: SiHibernate },
      { name: "REST APIs", icon: FaServer },
      { name: "JDBC", icon: FaDatabase },
    ],
  },

  {
    title: "Security",
    icon: FaShieldAlt,
    skills: [
      { name: "Spring Security", icon: FaShieldAlt },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "OAuth2", icon: FaShieldAlt },
    ],
  },

  {
    title: "Frontend",
    icon: FaCode,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },

  {
    title: "Database",
    icon: FaDatabase,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },

  {
    title: "Cloud (AWS)",
    icon: FaCloud,
    skills: [
      { name: "EC2", icon: SiAmazonaws },
      { name: "S3", icon: SiAmazonaws },
      { name: "Lambda", icon: SiAmazonaws },
      { name: "RDS", icon: SiAmazonaws },
      { name: "IAM", icon: SiAmazonaws },
      { name: "CloudWatch", icon: SiAmazonaws },
    ],
  },

  {
    title: "Tools & DevOps",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Maven", icon: SiApachemaven },
      { name: "Postman", icon: SiPostman },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-50 border-t border-[#25213b] py-6 sm:py-8 lg:py-10"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-8 lg:mb-10">

          {/* Small label */}

          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#16f2b3]" />

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16f2b3]">
              Stack &amp; Skills
            </p>
          </div>

          {/* Full width heading + description */}

          <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr] lg:items-end">

            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              A{" "}
              <span className="bg-gradient-to-r from-[#16f2b3] via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                backend-first
              </span>{" "}
              stack built for secure, scalable systems.
            </h2>

            <div className="lg:border-l lg:border-[#25213b] lg:pl-7">

              <p className="text-sm leading-6 text-gray-400 sm:text-base">
                Java &amp; Spring Boot at the core, React on the front end,
                and AWS to ship and run it — tools I understand deeply enough
                to build, secure, and maintain end-to-end.
              </p>

            </div>

          </div>
        </div>

        {/* =====================================================
            SKILL CARDS
        ====================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="
                  group
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
                  hover:border-violet-500/70
                  hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]
                "
              >

                {/* Top accent */}

                <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60 transition-all duration-500 group-hover:w-3/4 group-hover:via-[#16f2b3]" />

                {/* Category header */}

                <div className="mb-5 flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
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
                    <GroupIcon size={18} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-gray-600">
                      Technology
                    </p>
                  </div>

                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#25213b]
                          bg-[#161b36]
                          px-3
                          py-1.5
                          text-xs
                          text-gray-300
                          transition-all
                          duration-300
                          hover:border-violet-500/60
                          hover:bg-violet-500/5
                          hover:text-[#16f2b3]
                        "
                      >
                        <SkillIcon
                          size={13}
                          className="text-gray-500 transition-colors duration-300"
                        />

                        {skill.name}
                      </span>
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;