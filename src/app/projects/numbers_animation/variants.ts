type AnimationVariants = {
    [key: string]: {
        initial: { [key: string]: number };
        animate: { [key: string]: number };
        exit: { [key: string]: number };
    };
};

export const animationVariants: AnimationVariants = {
    Slide: {
        initial: {
            opacity: 0,
            x: 10,
            y: 20,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
        },
        exit: {
            opacity: 0,
            x: 10,
            y: 20,
        },
    },

    Expand: {
        initial: {
            scale: 0,
            x: 10,
        },
        animate: {
            scale: 1,
            x: 0,
        },
        exit: {
            scale: 0,
            x: 10,
        },
    },
    Fade: {
        initial: {
            opacity: 0,
            x: 10,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            x: 10,

            opacity: 0,
        },
    },
};
