interface LinkProps {
    hoveredLinkIndex: number,
    hoverLink: (index: number) => void,
    updateDirection: (direction: string) => void
}
interface Menuprops {
    isAnyLinkHovered: boolean,
    activeMenu: number,
    animationDirection: string
}

export type {
    LinkProps, Menuprops,
}