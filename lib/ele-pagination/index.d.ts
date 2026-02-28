import { ElPaginationInstance } from '../ele-app/el';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    total: import('vue').PropType<import('./types').PaginationTotal>;
    hasNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import('vue').PropType<import('./types').PaginationType>;
        default: string;
    };
    isFixedPopper: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: NumberConstructor;
    pageCount: NumberConstructor;
    pagerCount: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    currentPage: NumberConstructor;
    defaultCurrentPage: NumberConstructor;
    layout: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    pageSizes: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    prevText: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    prevIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    nextText: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    nextIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    small: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    background: BooleanConstructor;
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    appendSizeTo: StringConstructor;
}>, {
    paginationRef: import('vue').Ref<ElPaginationInstance, ElPaginationInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:currentPage": (_currentPage: number) => void;
    "update:pageSize": (_pageSize: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    total: import('vue').PropType<import('./types').PaginationTotal>;
    hasNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import('vue').PropType<import('./types').PaginationType>;
        default: string;
    };
    isFixedPopper: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: NumberConstructor;
    pageCount: NumberConstructor;
    pagerCount: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    currentPage: NumberConstructor;
    defaultCurrentPage: NumberConstructor;
    layout: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    pageSizes: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    prevText: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    prevIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    nextText: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    nextIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    small: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    background: BooleanConstructor;
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    appendSizeTo: StringConstructor;
}>> & Readonly<{
    "onUpdate:currentPage"?: ((_currentPage: number) => any) | undefined;
    "onUpdate:pageSize"?: ((_pageSize: number) => any) | undefined;
}>, {
    type: import('./types').PaginationType;
    popperClass: string;
    teleported: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    disabled: boolean;
    small: boolean;
    pagerCount: number;
    layout: string;
    pageSizes: number[];
    prevText: string;
    prevIcon: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>;
    nextText: string;
    nextIcon: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>;
    background: boolean;
    hideOnSinglePage: boolean;
    hasNext: boolean;
    isFixedPopper: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
