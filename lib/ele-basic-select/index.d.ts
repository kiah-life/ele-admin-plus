import { ElInputInstance } from '../ele-app/el';
import { EleTooltipInstance } from '../ele-app/plus';
import { SelectedItem } from './types';

declare function __VLS_template(): {
    prefix?(_: {}): any;
    clearIcon?(_: {}): any;
    suffixIcon?(_: {
        visible: boolean;
    }): any;
    maxTagPlaceholder?(_: {
        omittedValues: SelectedItem[];
        omittedSize: number;
    }): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: import('vue').PropType<import('./types').SelectValue>;
        default: () => null;
    };
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    size: import('vue').PropType<import('../ele-app/el').ElInputProps["size"]>;
    clearable: BooleanConstructor;
    placeholder: StringConstructor;
    selectedLabel: StringConstructor;
    selected: import('vue').PropType<SelectedItem[]>;
    maxTagCount: NumberConstructor;
    maxTagTextLength: NumberConstructor;
    tagType: import('vue').PropType<import('../ele-app/el').ElTagProps["type"]>;
    automaticDropdown: BooleanConstructor;
    filterable: BooleanConstructor;
    visible: BooleanConstructor;
    teleported: BooleanConstructor;
    persistent: BooleanConstructor;
    placement: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["placement"]>;
    transition: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["popperOptions"]>;
    popperClass: StringConstructor;
    popperWidth: (StringConstructor | NumberConstructor)[];
    selectClass: StringConstructor;
    selectStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    inputStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    selectTagsStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
}>, {
    tooltipRef: import('vue').Ref<EleTooltipInstance, EleTooltipInstance>;
    inputRef: import('vue').Ref<ElInputInstance, ElInputInstance>;
    searchRef: import('vue').Ref<ElInputInstance, ElInputInstance>;
    currentTags: import('vue').ComputedRef<SelectedItem[]>;
    omittedTags: import('vue').ComputedRef<SelectedItem[]>;
    omittedSize: import('vue').ComputedRef<number>;
    updatePopper: () => void;
    focusSearchInput: (e?: MouseEvent) => void;
    updateSearchValue: (modelValue: string) => void;
    updateInputValue: (modelValue: string) => void;
    updateVisible: (visible: boolean) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (_e: FocusEvent) => void;
    blur: (_e: FocusEvent) => void;
    clear: () => void;
    "update:visible": (_visible: boolean) => void;
    filterChange: (_value: string) => void;
    removeTag: (_item: SelectedItem) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: import('vue').PropType<import('./types').SelectValue>;
        default: () => null;
    };
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    size: import('vue').PropType<import('../ele-app/el').ElInputProps["size"]>;
    clearable: BooleanConstructor;
    placeholder: StringConstructor;
    selectedLabel: StringConstructor;
    selected: import('vue').PropType<SelectedItem[]>;
    maxTagCount: NumberConstructor;
    maxTagTextLength: NumberConstructor;
    tagType: import('vue').PropType<import('../ele-app/el').ElTagProps["type"]>;
    automaticDropdown: BooleanConstructor;
    filterable: BooleanConstructor;
    visible: BooleanConstructor;
    teleported: BooleanConstructor;
    persistent: BooleanConstructor;
    placement: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["placement"]>;
    transition: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: import('vue').PropType<import('../ele-app/plus').EleTooltipProps["popperOptions"]>;
    popperClass: StringConstructor;
    popperWidth: (StringConstructor | NumberConstructor)[];
    selectClass: StringConstructor;
    selectStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    inputStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    selectTagsStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
}>> & Readonly<{
    onFocus?: ((_e: FocusEvent) => any) | undefined;
    onBlur?: ((_e: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:visible"?: ((_visible: boolean) => any) | undefined;
    onFilterChange?: ((_value: string) => any) | undefined;
    onRemoveTag?: ((_item: SelectedItem) => any) | undefined;
}>, {
    value: import('./types').SelectValue;
    teleported: boolean;
    clearable: boolean;
    disabled: boolean;
    filterable: boolean;
    persistent: boolean;
    visible: boolean;
    transition: string;
    automaticDropdown: boolean;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
