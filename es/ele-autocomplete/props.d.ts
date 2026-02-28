import { PropType, ExtractPropTypes } from 'vue';
import { AutocompleteDataItem, AutocompleteDataFunction } from './types';

export { autocompleteEmits } from 'element-plus';
/**
 * 属性
 */
export declare const autocompleteProps: {
    /** 建议数据 */
    fetchSuggestions: PropType<AutocompleteDataItem[] | AutocompleteDataFunction>;
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
};
export type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>;
