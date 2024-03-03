type ItemProps = {
    link: string;
    nested_items: {
        user: string;
        class_name: string;
    }[];
};
interface MenuProps {
    nested_items: Array<ItemProps>;
}
interface ProfileItems {
    nested_items: {
        user: string;
        class_name: string;
    }[];
    index: number;
}
interface IndicatorProps {
    layoutId: string;
}

interface MenuLinkProps {
    handleItem: () => void,
    hoverItem: () => void,
    resetIndicator: () => void,
    link: {
        link: string;
        nested_items: any[];
    },
    isLinkHovered: boolean,
    indicatorId: string
}

export type {
    MenuProps,
    ProfileItems,
    IndicatorProps,
    MenuLinkProps
}