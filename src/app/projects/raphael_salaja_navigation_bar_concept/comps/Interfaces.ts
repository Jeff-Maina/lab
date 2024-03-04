interface MaskProps {
    isMaskActive: boolean;
    resetAll: () => void;
}

interface SearchbarProps {
    isSearchBarActive: boolean;
    closeSearchBar: () => void;
}

interface AddMenuProps {
    isAddMenuActive: boolean;
    closeAddMenu: () => void;
}

interface FilterMenuProps {
    isFIlterMenuActive: boolean;
    closeFilterMenu: () => void;
}

export type {
    MaskProps, SearchbarProps, AddMenuProps, FilterMenuProps
}