interface NavProps {
    sections: Array<string>,
    activeSectionIndex: number
    updateActiveSection: (index: number) => void
}

interface SectionProps {
    section: string,
    index: number,
    updateActiveSection: (index: number) => void
}
export type {
    NavProps,
    SectionProps
}