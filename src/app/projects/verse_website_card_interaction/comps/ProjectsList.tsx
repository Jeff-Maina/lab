import { FC, useState } from "react";
import {
  CraftProjectCard,
  LabProjectCard,
  NotesProjectCard,
  ThingsProjectCard,
  ThoughtsProjectCard,
} from "./ProjectCard";

const ProjectsList: FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(1000);
  const updateActiveProjectIndex = (index: number) =>
    setActiveProjectIndex(index);
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <CraftProjectCard
        updateActiveProjectIndex={updateActiveProjectIndex}
        index={0}
        project="Craft"
        activeProjectIndex={activeProjectIndex}
      />
      <LabProjectCard
        updateActiveProjectIndex={updateActiveProjectIndex}
        index={1}
        project="Lab"
        activeProjectIndex={activeProjectIndex}
      />
      <ThingsProjectCard
        updateActiveProjectIndex={updateActiveProjectIndex}
        index={2}
        project="Things"
        activeProjectIndex={activeProjectIndex}
      />
      <ThoughtsProjectCard
        updateActiveProjectIndex={updateActiveProjectIndex}
        index={3}
        project="Thoughts"
        activeProjectIndex={activeProjectIndex}
      />
      <NotesProjectCard
        updateActiveProjectIndex={updateActiveProjectIndex}
        index={4}
        project="Notes"
        activeProjectIndex={activeProjectIndex}
      />
    </div>
  );
};

export default ProjectsList;
