import { PropType, ExtractPropTypes } from 'vue';
import { CascaderOption, CascaderOptionFunction } from './types';

export { cascaderEmits } from 'element-plus';
/**
 * 属性
 */
export declare const cascaderProps: {
    /** 选项数据 */
    options: PropType<CascaderOption[] | CascaderOptionFunction>;
    /** 是否多选 */
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
};
export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
