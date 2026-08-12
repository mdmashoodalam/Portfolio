// import { projectsData } from '@/utils/data/projects-data';
// import ProjectCard from './project-card';

// const Projects = () => {

//   return (
//     <div id='projects' className="relative z-50 my-12 lg:my-24">
//       <div className="sticky top-10">
//         <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
//         <div className="flex items-center justify-start relative">
//           <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
//             PROJECTS
//           </span>
//           <span className="w-full h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="pt-24">
//         <div className="flex flex-col gap-6">
//           {projectsData.map((project, index) => (
//             <div
//               id={`sticky-card-${index + 1}`}
//               key={project.id} // Use unique `id` from `project` for key
//               className="sticky-card w-full mx-auto max-w-2xl sticky"
//             >
//               <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
//                 <ProjectCard project={project} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-20
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[45%]
          h-72
          w-72
          rounded-full
          bg-violet-600/10
          blur-[120px]
        "
      />

      {/* Section Heading */}
      <div className="relative mb-10 md:mb-12">
        <h2
          className="
            text-3xl
            font-bold
            tracking-tight
            text-white
            sm:text-4xl
            md:text-5xl
          "
        >
          Build &amp; Learn
        </h2>

        <p
          className="
            mt-3
            max-w-2xl
            text-sm
            leading-6
            text-gray-400
            sm:text-base
          "
        >
          Concrete projects designed to solve real problems, with a product
          approach, clear structure and maintainable code.
        </p>
      </div>

      {/* Projects */}
      <div
        className="
          relative
          grid
          grid-cols-1
          gap-5
          sm:gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {/* Bottom Arrow */}
      <div className="relative mt-10 flex justify-center">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#111722]
            text-gray-400
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-white/5
            hover:text-white
          "
        >
          ↓
        </div>
      </div>
    </section>
  );
};

export default Projects;