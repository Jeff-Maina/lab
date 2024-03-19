export const MenuVariants = {
    initial: {
        height: 56,
        width: 56,
        y: 0,
    },
    active: {
        height: 350,
        width: 370,
        y: 80,
        transition: {
            height: {
                duration: 0.5,
                ease: "easeOut",
            },
            width: {
                duration: 0.5,
                ease: "easeOut",
            },

            y: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    },
    inactive: {
        height: 56,
        width: 56,
        y: 0,
        transition: {
            height: {
                duration: 0.5,
            },
            width: {
                duration: 0.5,
            },
            y: {
                duration: 0.5,

            }
        },
    },
};

export const ButtonProps = {
    initial: {
        y: 0,
        rotate: 0,
        backgroundColor: "rgb(228, 228, 231)",
        color: "#000",
    },
    active: {
        y: 60,
        rotate: 135,
        backgroundColor: "rgb(228, 228, 231,0)",
        color: "#fff",
        transition: {
            y: {
                duration: 0.5,
            },
            rotate: {
                duration: 0.5,
            },
            color: {
                duration: 0.5,
            },
            backgroundColor: {
                duration: 0.2
            }
        }

    },
    inactive: {
        y: 0,
        rotate: 0,
        backgroundColor: "rgb(228, 228, 231)",
        color: "#000",
        transition: {
            duration: 0.38,
        }

    }
}

export const MaskVariants = {
    initial: {
        opacity: 0
    },
    active: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    inactive: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}