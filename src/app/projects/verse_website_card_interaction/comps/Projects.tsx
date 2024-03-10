import { FC } from "react";
import { ProjectProps } from "./interfaces";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Projects: FC<ProjectProps> = ({ areProjectsOpen, closeProjects }) => {
  return (
    <AnimatePresence mode="wait">
      {areProjectsOpen && (
        <div className="fixed z-50 inset-0 w-full h-screen bg-black p-6">
          <div className="w-full flex justify-center">
            <button className="bg-[#1c1b1e] rounded-full size-14 grid place-items-center">
              <X stroke="#fff" />
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
