export const MenuVariants = {
    initial: {
        opacity: 0,
        scale: 0.9
    }, active: {
        opacity: 1,
        scale: 1,
        transition: {
            opacity: {
                duration: 0.2
            },
            scale: {
                duration: 0.2
            }
        }
    }, inactive: {
        opacity: 0,
        scale: 0.9,
        transition: {
            opacity: {
                duration: 0.2
            },
            scale: {
                duration: 0.2
            }
        }
    }
}