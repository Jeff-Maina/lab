export const ProjectsVariants = {
    initial: {
        opacity: 0,
        y: 0,
    },
    active: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0
        }
    },
    inactive: {
        opacity: 0,
        y: -20,
        transition: {
            delay: 0.2,
            duration: 0.2
        }
    }
}

export const closeButtonVariants = {
    initial: {
        y: "-150%"
    },
    active: {
        y: "0%",
        transition: {
            y: {
                duration: 0.3,
                delay: 0.7,
            }
        }
    },
    inacitve: {
        y: "0%",
    }
}

export const textVariants = {
    initial: {
        y: "150%"
    },
    active: {
        y: "0%",
        transition: {
            y: {
                duration: 0.3,
                delay: 0.7,
            }
        }
    },
    inacitve: {
        y: "0%",
    }
}


