"use client";

import { ProjectsList } from "@/app/data/Appdata";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";

const FinishedProjects = ProjectsList.filter((project) => !project.draft);

const Projects: FC = () => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number>(1000);
  const hoverProject = (index: number) => setHoveredProjectIndex(index);

  return (
    <section>
      <ul className="flex flex-col w-full group/projects">
        {FinishedProjects.map((project, index) => {
          const isHovered = index === hoveredProjectIndex;
          return (
            <Link href={project.pageLink} key={index}>
              <li
                onMouseEnter={() => hoverProject(index)}
                onClick={() => hoverProject(index)}
                className={` p-3 md:px-6  rounded-[0.7rem] cursor-pointer relative`}
              >
                <div className="flex flex-col-reverse w-full gap-2 md:gap-4 md:flex-row md:items-center relative z-10">
                  <p className="min-w-fit">{project.project}.</p>
                  <hr className="hidden md:block flex-grow-1 w-full" />
                  <small className="text-zinc-500 min-w-fit">
                    {project.dateCreated}
                  </small>
                </div>

                {isHovered && (
                  <motion.div
                    layoutId="indicator"
                    transition={{
                      duration: 0.2,
                    }}
                    className={`absolute bg-zinc-100 inset-0 w-full h-full rounded-xl opacity-0 group-hover/projects:opacity-100 transition-opacity duration-300 flex items-center text-xs text-zinc-600`}
                  >
                    {/* <span className="hidden md:block">0{index + 1}</span> */}
                  </motion.div>
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
