import { PropType, ExtractPropTypes } from 'vue';
import { PaginationType, PaginationTotal } from './types';

/**
 * 属性
 */
export declare const paginationProps: {
    /** 总条目数 */
    total: PropType<PaginationTotal>;
    /** 是否还有下一页 */
    hasNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 风格 */
    type: {
        type: PropType<PaginationType>;
        default: string;
    };
    /** 每页数量选择下拉是否使用固定定位 */
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
};
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
/**
 * 事件
 */
export declare const paginationEmits: {
    /** 更新页码 */
    'update:currentPage': (_currentPage: number) => boolean;
    /** 更新每页数量 */
    'update:pageSize': (_pageSize: number) => boolean;
};
