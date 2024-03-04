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
        width: 96,
        zIndex: 10,
        height: "100%"
    },
    active: {
        width: 350,
        zIndex: 30,
        height: "120%",
        transition: {
            width: {
                duration: 0.25,
            },
            height: {
                duration: 0.1,
            },
        },
    },
    inactive: {
        width: 96,
        zIndex: 10,
        height: "100%",
        transition: {
            width: {
                duration: 0.3,
            },
            height: {
                duration: 0.25,
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
            duration: 0.25,
            delay: 0.17,
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            duration: 0.02,
        },
    },
};
export const AddMenuVariants = {
    initial: {
        x: "0%",
        height: 48,
        width: 48,
        zIndex: 10
    },
    active: {
        x: "17%",
        zIndex: 40,
        height: 300,
        width: 350,

        transition: {
            x: {
                duration: 0.25,
            },
            opacity: {
                duration: 0.25,
            },
            width: {
                duration: 0.25,
            },
            height: {
                duration: 0.25,
            },
        },
    },
    inactive: {
        x: "0%",
        zIndex: 10,
        height: 48,
        width: 48,
        transition: {
            x: {
                duration: 0.25,
            },
            opacity: {
                duration: 0.25,
            },
            width: {
                duration: 0.25,
            },
            height: {
                duration: 0.25,
            },
        },
    },
};

export const FilterMenuVariants = {
    initial: {
        height: 48,
        width: 128,
        zIndex: 10,
    },
    active: {
        height: 360,
        width: 320,
        zIndex: 50,
        transition: {
            height: {
                duration: 0.25
            },
            width: {
                duration: 0.25
            }
        }
    },
    inactive: {
        height: 48,
        width: 128,
        zIndex: 10,
        transition: {
            height: {
                duration: 0.25
            },
            width: {
                duration: 0.25
            }
        }
    }

}