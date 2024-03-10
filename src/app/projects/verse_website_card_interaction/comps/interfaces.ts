interface ButtonProps {
    openProjects: () => void;
}
interface ProjectProps {
    areProjectsOpen: boolean;
    closeProjects: () => void;
}

interface ProjectCardProps {
    project: string,
    activeProjectIndex: number,
    updateActiveProjectIndex: (index: number) => void,
    index: number,
}

export type {
    ButtonProps, ProjectProps, ProjectCardProps
}