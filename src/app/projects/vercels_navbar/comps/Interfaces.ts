interface LinkProps {
    hoveredLinkIndex: number, hoverLink: (index: number) => void
}
interface Menuprops {
    isAnyLinkHovered: boolean
}

export type {
    LinkProps, Menuprops,
}