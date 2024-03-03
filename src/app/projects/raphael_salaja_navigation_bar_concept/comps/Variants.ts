export const MaskVariants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 0.2,
            },
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            opacity: {
                duration: 0.2,
            },
        },
    },
};

export const SearchBarVariants = {
    initial: {
        width: 112,
        zIndex: 10,
        height: "100%"
    },
    active: {
        width: 350,
        zIndex: 30,
        height: "120%",
        transition: {
            width: {
                duration: 0.2,
            },
            height: {
                duration: 0.1,
            },
        },
    },
    inactive: {
        width: 112,
        zIndex: 10,
        height: "100%",
        transition: {
            width: {
                duration: 0.3,
            },
            hieght: {
                duration: 0.1,
            },
        },
    },
};

export const opacityVariants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            duration: 0.2,
            delay: 0.16,
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            duration: 0,
        },
    },
};
export const AddMenuVariants = {
    initial: {
        x: "0%",
        height: 56,
        width: 56,
        zIndex: 10
    },
    active: {
        x: "18.8%",
        zIndex: 40,
        height: 300,
        width: 350,
        transition: {
            x: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.2,
            },
            width: {
                duration: 0.2,
            },
            height: {
                duration: 0.2,
            },
        },
    },
    inactive: {
        x: "0%",
        zIndex: 10,
        height: 56,
        width: 56,
        transition: {
            x: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.2,
            },
            width: {
                duration: 0.2,
            },
            height: {
                duration: 0.2,
            },
        },
    },
};