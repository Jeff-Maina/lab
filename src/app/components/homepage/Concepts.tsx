"use client";

import { ProjectsList } from "@/app/data/Appdata";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { FC, useEffect, useRef, useState } from "react";

const FinishedProjects = ProjectsList.filter(
  (project) => !project.draft && !project.archived && project.type === "c"
);

interface SectionProps {
  updateActiveSection: (value: number) => void;
}

const Concepts: FC<SectionProps> = ({ updateActiveSection }) => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number>(1000);
  const hoverProject = (index: number) => setHoveredProjectIndex(index);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      updateActiveSection(1);
    }
  }, [isInView]);

  return (
    <section ref={ref} id="concepts">
      <h1 className="font-bold tracking-tight text-xl p-3 md:px-6">Concepts</h1>

      <ul className="flex flex-col w-full group/concepts">
        {FinishedProjects.map((project, index) => {
          const isHovered = index === hoveredProjectIndex;
          return (
            <Link href={project.pageLink} key={index}>
              <li
                onMouseEnter={() => hoverProject(index)}
                onClick={() => hoverProject(index)}
                className={` p-3 md:px-6   rounded-[0.7rem] cursor-pointer relative`}
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
                    layoutId="c_indicator"
                    transition={{
                      duration: 0.2,
                    }}
                    className={`absolute bg-zinc-100 inset-0 w-full h-full rounded-xl opacity-0 group-hover/concepts:opacity-100 transition-opacity duration-300 flex items-center text-xs text-zinc-600`}
                  ></motion.div>
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Concepts;
