interface ButtonProps {
    openProjects: () => void;
}
interface ProjectProps {
    areProjectsOpen: boolean;
    closeProjects: () => void;
}

export type {
    ButtonProps,ProjectProps
}