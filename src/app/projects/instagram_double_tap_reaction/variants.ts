import { Variants } from "framer-motion";

export const AnimVariants: Variants = {
    initial: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.1,
        },
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.1,
        },
    },
};

export const HeartAnim: Variants = {
    initial: {
        y: 0,
        scale: 1,
    },
    animate: {
        y: [0, -55, 7, 0],
        scale: [1, 4, 1, 1],
        transition: {
            duration: 0.7,
        },
    },
    exit: {},
};