interface ScrollSpyProps {
    top: number,
    activeSectionsIndices: number[],
}

interface SectionProps {
    section: string,
    index: number,
    updateActiveSectionIndices: (index: number) => void;
    removeIndex: (index: number) => void;
}

export type {
    ScrollSpyProps, SectionProps
}