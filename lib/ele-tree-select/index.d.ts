import { ElTreeV2Instance } from '../ele-app/el';
import { EleBasicSelectInstance } from '../ele-app/plus';
import { SelectValue, SingleValue, SelectedItem } from '../ele-basic-select/types';

declare function __VLS_template(): {
    default?(_: any): any;
    maxTagPlaceholder?(_: {
        omittedValues: SelectedItem[];
        omittedSize: number;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: import('vue').PropType<SelectValue>;
        default: () => null;
    };
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    size: import('vue').PropType<import('../ele-app/el').ElInputProps["size"]>;
    clearable: BooleanConstructor;
    placeholder: StringConstructor;
    cacheData: import('vue').PropType<import('./types').TreeData>;
    treeProps: {
        type: import('vue').PropType<import('./types').TreeProps>;
        required: boolean;
    };
    showCheckedStrategy: import('vue').PropType<import('./types').ShowCheckedStrategy>;
    checkedValueStrategy: BooleanConstructor;
    maxTagCount: NumberConstructor;
    maxTagTextLength: NumberConstructor;
    tagType: {
        type: import('vue').PropType<import('../ele-app/el').ElTagProps["type"]>;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    filterable: BooleanConstructor;
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
    popperWidth: (StringConstructor | NumberConstructor)[];
    selectStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    inputStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    selectTagsStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
}>, {
    reloadOptions: () => void;
    selectRef: import('vue').Ref<EleBasicSelectInstance, EleBasicSelectInstance>;
    treeRef: import('vue').Ref<ElTreeV2Instance, ElTreeV2Instance>;
    selectedItems: import('vue').Ref<{
        label: string;
        value: SingleValue;
        hide?: boolean | undefined;
        index?: number | undefined;
    }[], SelectedItem[] | {
        label: string;
        value: SingleValue;
        hide?: boolean | undefined;
        index?: number | undefined;
    }[]>;
    selectedLabel: import('vue').ComputedRef<string>;
    updatePopover: () => void;
    updateVisible: (visible: boolean) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (_e: FocusEvent) => void;
    change: (_value: SelectValue) => void;
    focus: (_e: FocusEvent) => void;
    clear: () => void;
    "update:modelValue": (_value: SelectValue) => void;
    visibleChange: (_visible: boolean) => void;
    removeTag: (_value: SingleValue) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: import('vue').PropType<SelectValue>;
        default: () => null;
    };
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    size: import('vue').PropType<import('../ele-app/el').ElInputProps["size"]>;
    clearable: BooleanConstructor;
    placeholder: StringConstructor;
    cacheData: import('vue').PropType<import('./types').TreeData>;
    treeProps: {
        type: import('vue').PropType<import('./types').TreeProps>;
        required: boolean;
    };
    showCheckedStrategy: import('vue').PropType<import('./types').ShowCheckedStrategy>;
    checkedValueStrategy: BooleanConstructor;
    maxTagCount: NumberConstructor;
    maxTagTextLength: NumberConstructor;
    tagType: {
        type: import('vue').PropType<import('../ele-app/el').ElTagProps["type"]>;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    filterable: BooleanConstructor;
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
    popperWidth: (StringConstructor | NumberConstructor)[];
    selectStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    inputStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    selectTagsStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
}>> & Readonly<{
    onBlur?: ((_e: FocusEvent) => any) | undefined;
    onChange?: ((_value: SelectValue) => any) | undefined;
    onFocus?: ((_e: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((_value: SelectValue) => any) | undefined;
    onVisibleChange?: ((_visible: boolean) => any) | undefined;
    onRemoveTag?: ((_value: SingleValue) => any) | undefined;
}>, {
    modelValue: SelectValue;
    placement: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, import('element-plus').Placement, unknown> | undefined;
    teleported: boolean;
    clearable: boolean;
    disabled: boolean;
    filterable: boolean;
    tagType: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown> | undefined;
    persistent: boolean;
    transition: string;
    automaticDropdown: boolean;
    multiple: boolean;
    checkedValueStrategy: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
