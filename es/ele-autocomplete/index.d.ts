import { ElAutocompleteInstance } from '../ele-app/el';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    fetchSuggestions: import('vue').PropType<import('./types').AutocompleteDataItem[] | import('./types').AutocompleteDataFunction>;
    ariaLabel: StringConstructor;
    valueKey: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    debounce: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown, "bottom-start", boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    triggerOnFocus: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    selectWhenUnmatched: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    hideLoading: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    highlightFirstItem: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    fitInputWidth: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    clearable: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    disabled: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    name: StringConstructor;
}>, {
    autocompleteRef: import('vue').Ref<ElAutocompleteInstance, ElAutocompleteInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (evt: FocusEvent) => void;
    blur: (evt: FocusEvent) => void;
    clear: () => void;
    input: (value: string) => void;
    select: (item: Record<string, any>) => void;
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    fetchSuggestions: import('vue').PropType<import('./types').AutocompleteDataItem[] | import('./types').AutocompleteDataFunction>;
    ariaLabel: StringConstructor;
    valueKey: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    debounce: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown, "bottom-start", boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    triggerOnFocus: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    selectWhenUnmatched: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    hideLoading: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    highlightFirstItem: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    fitInputWidth: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    clearable: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    disabled: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    name: StringConstructor;
}>> & Readonly<{
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onSelect?: ((item: Record<string, any>) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    valueKey: string;
    modelValue: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    debounce: number;
    placement: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end", unknown>;
    popperClass: string;
    triggerOnFocus: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    selectWhenUnmatched: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideLoading: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    teleported: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    highlightFirstItem: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    fitInputWidth: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clearable: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    disabled: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
