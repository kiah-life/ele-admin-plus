import { ElCascaderInstance } from '../ele-app/el';
import { CascaderOption } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    options: import('vue').PropType<CascaderOption[] | import('./types').CascaderOptionFunction>;
    multiple: BooleanConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | (() => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | {
        (): (node: import('element-plus').CascaderNode, keyword: string) => boolean;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | (() => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | {
        (): (node: import('element-plus').CascaderNode, keyword: string) => boolean;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (node: import('element-plus').CascaderNode, keyword: string) => boolean, boolean>;
    separator: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showAllLevels: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    collapseTags: BooleanConstructor;
    maxCollapseTags: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    collapseTagsTooltip: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    debounce: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    beforeFilter: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
        (): (value: string) => boolean | Promise<any>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
        (): (value: string) => boolean | Promise<any>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], import('element-plus').Placement, unknown, string, boolean>;
    fallbackPlacements: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').Placement[]) | (() => import('element-plus').Placement[]) | ((new (...args: any[]) => import('element-plus').Placement[]) | (() => import('element-plus').Placement[]))[], unknown, unknown, string[], boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | number | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue | (import('element-plus/es/components/cascader-panel/src/node').CascaderNodeValue | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue)[]) | (() => import('element-plus/es/components/cascader-panel/src/node').CascaderValue) | ((new (...args: any[]) => string | number | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue | (import('element-plus/es/components/cascader-panel/src/node').CascaderNodeValue | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue)[]) | (() => import('element-plus/es/components/cascader-panel/src/node').CascaderValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    props: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').CascaderProps) | (() => import('element-plus').CascaderProps) | ((new (...args: any[]) => import('element-plus').CascaderProps) | (() => import('element-plus').CascaderProps))[], unknown, unknown, () => import('element-plus').CascaderProps, boolean>;
}>, {
    reloadOptions: () => void;
    cascaderRef: import('vue').Ref<ElCascaderInstance, ElCascaderInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (evt: FocusEvent) => void;
    blur: (evt: FocusEvent) => void;
    clear: () => void;
    "update:modelValue": (_: import('element-plus').CascaderValue) => void;
    change: (_: import('element-plus').CascaderValue) => void;
    visibleChange: (val: boolean) => void;
    expandChange: (val: import('element-plus').CascaderValue) => void;
    removeTag: (val: import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue | import('element-plus/es/components/cascader-panel/src/node').CascaderNodeValue) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    options: import('vue').PropType<CascaderOption[] | import('./types').CascaderOptionFunction>;
    multiple: BooleanConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | (() => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | {
        (): (node: import('element-plus').CascaderNode, keyword: string) => boolean;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | (() => (node: import('element-plus').CascaderNode, keyword: string) => boolean) | {
        (): (node: import('element-plus').CascaderNode, keyword: string) => boolean;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (node: import('element-plus').CascaderNode, keyword: string) => boolean, boolean>;
    separator: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showAllLevels: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    collapseTags: BooleanConstructor;
    maxCollapseTags: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    collapseTagsTooltip: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    debounce: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    beforeFilter: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
        (): (value: string) => boolean | Promise<any>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (value: string) => boolean | Promise<any>) | (() => (value: string) => boolean | Promise<any>) | {
        (): (value: string) => boolean | Promise<any>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], import('element-plus').Placement, unknown, string, boolean>;
    fallbackPlacements: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').Placement[]) | (() => import('element-plus').Placement[]) | ((new (...args: any[]) => import('element-plus').Placement[]) | (() => import('element-plus').Placement[]))[], unknown, unknown, string[], boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | number | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue | (import('element-plus/es/components/cascader-panel/src/node').CascaderNodeValue | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue)[]) | (() => import('element-plus/es/components/cascader-panel/src/node').CascaderValue) | ((new (...args: any[]) => string | number | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue | (import('element-plus/es/components/cascader-panel/src/node').CascaderNodeValue | import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue)[]) | (() => import('element-plus/es/components/cascader-panel/src/node').CascaderValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    props: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').CascaderProps) | (() => import('element-plus').CascaderProps) | ((new (...args: any[]) => import('element-plus').CascaderProps) | (() => import('element-plus').CascaderProps))[], unknown, unknown, () => import('element-plus').CascaderProps, boolean>;
}>> & Readonly<{
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((_: import('element-plus').CascaderValue) => any) | undefined;
    onChange?: ((_: import('element-plus').CascaderValue) => any) | undefined;
    onVisibleChange?: ((val: boolean) => any) | undefined;
    onExpandChange?: ((val: import('element-plus').CascaderValue) => any) | undefined;
    onRemoveTag?: ((val: import('element-plus/es/components/cascader-panel/src/node').CascaderNodePathValue | import('element-plus/es/components/cascader-panel/src/node').CascaderNodeValue) => any) | undefined;
}>, {
    debounce: number;
    placement: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], import('element-plus').Placement, unknown>;
    popperClass: string;
    teleported: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clearable: boolean;
    disabled: boolean;
    separator: string;
    valueOnClear: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown>;
    filterable: boolean;
    filterMethod: (node: import('element-plus').CascaderNode, keyword: string) => boolean;
    showAllLevels: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    collapseTags: boolean;
    maxCollapseTags: number;
    collapseTagsTooltip: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    beforeFilter: (value: string) => boolean | Promise<any>;
    fallbackPlacements: import('element-plus').Placement[];
    tagType: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown>;
    tagEffect: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "dark" | "light" | "plain", unknown>;
    validateEvent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    persistent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    props: import('element-plus').CascaderProps;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
