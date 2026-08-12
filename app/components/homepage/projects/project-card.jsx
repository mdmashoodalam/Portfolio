// import * as React from 'react';

// function ProjectCard({ project }) {

//   return (
//     <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
//       <div className="flex flex-row">
//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//         <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//       </div>
//       <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
//         <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
//         </div>
//         <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
//           {project.name}
//         </p>
//       </div>
//       <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//         <code className="font-mono text-xs md:text-sm lg:text-base">
//           <div className="blink">
//             <span className="mr-2 text-pink-500">const</span>
//             <span className="mr-2 text-white">project</span>
//             <span className="mr-2 text-pink-500">=</span>
//             <span className="text-gray-400">{'{'}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//             <span className="text-gray-400">{`'`}</span>
//             <span className="text-amber-300">{project.name}</span>
//             <span className="text-gray-400">{`',`}</span>
//           </div>

//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className=" text-white">tools:</span>
//             <span className="text-gray-400">{` ['`}</span>
//             {
//               project.tools.map((tag, i) => (
//                 <React.Fragment key={i}>
//                   <span className="text-amber-300">{tag}</span>
//                   {
//                     project.tools.length - 1 !== i &&
//                     <span className="text-gray-400">{`', '`}</span>
//                   }
//                 </React.Fragment>
//               ))
//             }
//             <span className="text-gray-400">{"],"}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
//             <span className="text-orange-400">{project.role}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className="text-white">Description:</span>
//             <span className="text-cyan-400">{' ' + project.description}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div><span className="text-gray-400">{`};`}</span></div>
//         </code>
//       </div>
//       {project.demo && (
//         <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 mt-4">
//           <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-center text-blue-400 underline hover:text-blue-300">
//             View Demo
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;


import Image from 'next/image';
import Link from 'next/link';
import {
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    tags = [],
    code,
    demo,
    image,
    status = 'MVP',
  } = project;

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#111722]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* ========================================
          PROJECT IMAGE
      ======================================== */}

      <div
        className="
          relative
          aspect-[16/9]
          w-full
          overflow-hidden
          border-b
          border-white/10
          bg-[#0d131d]
        "
      >
        {image ? (
          <Image
            src={image}
            alt={`${name} project preview`}
            fill
            priority={project.id === 1}
            className="
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.04]
            "
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              33vw
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              text-sm
              text-gray-600
            "
          >
            Project Preview
          </div>
        )}

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#111722]
            via-transparent
            to-transparent
            opacity-70
          "
        />
      </div>

      {/* ========================================
          CONTENT
      ======================================== */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Status */}
        <div className="mb-3">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-cyan-300
            "
          >
            {status}
          </span>
        </div>

        {/* Project Name */}
        <h3
          className="
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            min-h-[84px]
            text-sm
            leading-6
            text-gray-400
          "
        >
          {description}
        </p>

        {/* ========================================
            TECHNOLOGY TAGS
        ======================================== */}

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-gray-300
                transition-colors
                duration-300
                group-hover:border-white/15
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ========================================
            BUTTONS
        ======================================== */}

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3">

            {/* GitHub Button */}
            <Link
              href={code || '#'}
              target={code ? '_blank' : undefined}
              rel={code ? 'noopener noreferrer' : undefined}
              aria-label={`View ${name} source code on GitHub`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2.5
                text-xs
                font-semibold
                text-gray-300
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.08]
                hover:text-white
              "
            >
              <FaGithub className="text-sm" />

              <span>
                GitHub
              </span>
            </Link>

            {/* See Button */}
            <Link
              href={demo || '#'}
              target={demo ? '_blank' : undefined}
              rel={demo ? 'noopener noreferrer' : undefined}
              aria-label={`View ${name} demo`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-gradient-to-r
                from-violet-600
                to-blue-600
                px-4
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-lg
                shadow-violet-600/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-violet-600/30
              "
            >
              <span>
                See
              </span>

              <FaExternalLinkAlt className="text-[9px]" />
            </Link>

          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;