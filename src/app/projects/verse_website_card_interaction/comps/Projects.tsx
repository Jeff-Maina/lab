"use client";
import { FC } from "react";
import { ProjectProps } from "./interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  ProjectsVariants,
  closeButtonVariants,
  textVariants,
} from "./variants";
import ProjectsList from "./ProjectsList";

const Projects: FC<ProjectProps> = ({ areProjectsOpen, closeProjects }) => {
  return (
    <AnimatePresence mode="wait">
      {areProjectsOpen && (
        <motion.div
          variants={ProjectsVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="fixed z-50 inset-0 w-full h-screen p-4"
        >
          <div className="w-full flex justify-center absolute top-0 p-4">
            <motion.button
              variants={closeButtonVariants}
              initial="initial"
              animate="active"
              exit="inactive"
              onClick={closeProjects}
              className="bg-[#1c1b1e] rounded-full p-3 grid place-items-center"
            >
              <X stroke="#fff" size={26} />
            </motion.button>
          </div>
          <ProjectsList />
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="text-center absolute bottom-0 flex justify-center w-full pointer-events-none p-6"
          >
            <p className="select-none text-sm text-zinc-500">
              Drag a card to move it around, or click to flip it over.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
