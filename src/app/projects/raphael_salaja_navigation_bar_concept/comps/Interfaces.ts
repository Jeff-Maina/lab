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


export type {
    MaskProps, SearchbarProps,AddMenuProps
}