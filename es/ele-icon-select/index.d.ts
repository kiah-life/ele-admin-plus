import { StyleValue } from '../ele-app/types';
import { EleBasicSelectInstance } from '../ele-app/plus';
import { IconItem } from './types';

declare function __VLS_template(): {
    icon?(_: {
        icon: string;
        prefix: boolean;
    }): any;
    tabLeftExtra?(_: {}): any;
    tabRightExtra?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: StringConstructor;
    data: import('vue').PropType<string[] | IconItem[]>;
    disabled: BooleanConstructor;
    size: import('vue').PropType<import('../ele-app/el').ElInputProps["size"]>;
    clearable: BooleanConstructor;
    placeholder: StringConstructor;
    automaticDropdown: BooleanConstructor;
    filterable: import('vue').PropType<boolean | "popper">;
    teleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["placement"]>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["popperOptions"]>;
    popperClass: StringConstructor;
    popperWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    popperHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    selectStyle: import('vue').PropType<StyleValue>;
    inputStyle: import('vue').PropType<StyleValue>;
    selectTagsStyle: import('vue').PropType<StyleValue>;
    hideOnSingleTab: BooleanConstructor;
    emptyProps: import('vue').PropType<import('../ele-app/el').ElEmptyProps>;
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipProps: import('vue').PropType<import('../ele-app/plus').EleTooltipProps>;
    headerStyle: import('vue').PropType<StyleValue>;
    tabsStyle: import('vue').PropType<StyleValue>;
    searchStyle: import('vue').PropType<StyleValue>;
    menusStyle: import('vue').PropType<StyleValue>;
    bodyStyle: import('vue').PropType<StyleValue>;
    gridStyle: import('vue').PropType<StyleValue>;
    itemStyle: import('vue').PropType<StyleValue>;
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
}>, {
    selectRef: import('vue').Ref<EleBasicSelectInstance, EleBasicSelectInstance>;
    updatePopover: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (_e: FocusEvent) => void;
    change: (_value?: string | null | undefined) => void;
    focus: (_e: FocusEvent) => void;
    clear: () => void;
    "update:modelValue": (_value?: string | null | undefined) => void;
    visibleChange: (_visible: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: StringConstructor;
    data: import('vue').PropType<string[] | IconItem[]>;
    disabled: BooleanConstructor;
    size: import('vue').PropType<import('../ele-app/el').ElInputProps["size"]>;
    clearable: BooleanConstructor;
    placeholder: StringConstructor;
    automaticDropdown: BooleanConstructor;
    filterable: import('vue').PropType<boolean | "popper">;
    teleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["placement"]>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["popperOptions"]>;
    popperClass: StringConstructor;
    popperWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    popperHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    selectStyle: import('vue').PropType<StyleValue>;
    inputStyle: import('vue').PropType<StyleValue>;
    selectTagsStyle: import('vue').PropType<StyleValue>;
    hideOnSingleTab: BooleanConstructor;
    emptyProps: import('vue').PropType<import('../ele-app/el').ElEmptyProps>;
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipProps: import('vue').PropType<import('../ele-app/plus').EleTooltipProps>;
    headerStyle: import('vue').PropType<StyleValue>;
    tabsStyle: import('vue').PropType<StyleValue>;
    searchStyle: import('vue').PropType<StyleValue>;
    menusStyle: import('vue').PropType<StyleValue>;
    bodyStyle: import('vue').PropType<StyleValue>;
    gridStyle: import('vue').PropType<StyleValue>;
    itemStyle: import('vue').PropType<StyleValue>;
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
}>> & Readonly<{
    onBlur?: ((_e: FocusEvent) => any) | undefined;
    onChange?: ((_value?: string | null | undefined) => any) | undefined;
    onFocus?: ((_e: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((_value?: string | null | undefined) => any) | undefined;
    onVisibleChange?: ((_visible: boolean) => any) | undefined;
}>, {
    placement: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, import('element-plus').Placement, unknown> | undefined;
    teleported: boolean;
    clearable: boolean;
    disabled: boolean;
    persistent: boolean;
    tooltip: boolean;
    transition: string;
    automaticDropdown: boolean;
    filterPlaceholder: string;
    responsive: boolean;
    popperWidth: string | number;
    popperHeight: string | number;
    hideOnSingleTab: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
