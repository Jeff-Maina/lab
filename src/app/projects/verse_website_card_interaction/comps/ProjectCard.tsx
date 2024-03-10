import { FC } from "react";
import { ProjectCardProps } from "./interfaces";

const ProjectsList = ["Craft", "Lab", "Things", "Thoughts", "Notes"];

export const CraftProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <div
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-white rounded-[0.7rem] shadow-2xl shadow-[#3a3a3a]/50 absolute -translate-x-[100%] translate-y-10 rotate-[3deg]"
    >
      {/* <p>{project}</p> */}
    </div>
  );
};

export const LabProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <div
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-white rounded-[0.7rem] shadow-2xl shadow-[#3a3a3a]/50 absolute -translate-x-[50%] translate-y-1 rotate-[3deg]"
    >
      {/* <p>{project}</p> */}
    </div>
  );
};

export const ThingsProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <div
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-white rounded-[0.7rem] shadow-2xl shadow-[#3a3a3a]/50 absolute -translate-x-[0%] -translate-y-6 -rotate-[3deg]"
    >
      {/* <p>{project}</p> */}
    </div>
  );
};

export const ThoughtsProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <div
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-white rounded-[0.7rem] shadow-2xl shadow-[#3a3a3a]/50 absolute translate-x-[50%] translate-y-4 -rotate-[3deg]"
    >
      {/* <p>{project}</p> */}
    </div>
  );
};

export const NotesProjectCard: FC<ProjectCardProps> = ({
  index,
  updateActiveProjectIndex,
  activeProjectIndex,
  project,
}) => {
  return (
    <div
      style={{
        zIndex: index * 10,
      }}
      className="w-72 h-96 bg-white rounded-[0.7rem] shadow-2xl shadow-[#3a3a3a]/50 absolute translate-x-[100%] -rotate-[3deg] translate-y-8"
    >
      {/* <p>{project}</p> */}
    </div>
  );
};
