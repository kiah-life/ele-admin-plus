import { PropType, ExtractPropTypes } from 'vue';
import { BreadcrumbSeparator, BreadcrumbItem } from './types';

/**
 * 属性
 */
export declare const breadcrumbProps: {
    separator: {
        type: PropType<BreadcrumbSeparator>;
        default: string;
    };
    /** 面包屑数据 */
    items: {
        type: PropType<BreadcrumbItem[]>;
        required: boolean;
    };
    separatorIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
