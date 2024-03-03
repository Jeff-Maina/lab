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
export type {
    MenuProps,
    ProfileItems,
    IndicatorProps
}