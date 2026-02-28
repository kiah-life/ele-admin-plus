import { PropType, ExtractPropTypes } from 'vue';
import { TransferDataItem, TransferDataFunction } from './types';

export { transferEmits } from 'element-plus';
/**
 * 属性
 */
export declare const transferProps: {
    /** 数据 */
    data: PropType<TransferDataItem[] | TransferDataFunction>;
    titles: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    buttonTexts: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => [string, string]) | (() => [string, string]) | ((new (...args: any[]) => [string, string]) | (() => [string, string]))[], unknown, unknown, () => never[], boolean>;
    filterPlaceholder: StringConstructor;
    filterMethod: {
        readonly type: import('vue').PropType<(query: string, item: import('element-plus').TransferDataItem) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    leftDefaultChecked: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').TransferKey[]) | (() => import('element-plus').TransferKey[]) | ((new (...args: any[]) => import('element-plus').TransferKey[]) | (() => import('element-plus').TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    rightDefaultChecked: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').TransferKey[]) | (() => import('element-plus').TransferKey[]) | ((new (...args: any[]) => import('element-plus').TransferKey[]) | (() => import('element-plus').TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    renderContent: {
        readonly type: import('vue').PropType<import('element-plus').renderContent>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').TransferKey[]) | (() => import('element-plus').TransferKey[]) | ((new (...args: any[]) => import('element-plus').TransferKey[]) | (() => import('element-plus').TransferKey[]))[], unknown, unknown, () => never[], boolean>;
    format: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').TransferFormat) | (() => import('element-plus').TransferFormat) | ((new (...args: any[]) => import('element-plus').TransferFormat) | (() => import('element-plus').TransferFormat))[], unknown, unknown, () => {}, boolean>;
    filterable: BooleanConstructor;
    props: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').TransferPropsAlias) | (() => import('element-plus').TransferPropsAlias) | ((new (...args: any[]) => import('element-plus').TransferPropsAlias) | (() => import('element-plus').TransferPropsAlias))[], unknown, unknown, () => import('element-plus/es/utils/typescript').Mutable<{
        readonly label: "label";
        readonly key: "key";
        readonly disabled: "disabled";
    }>, boolean>;
    targetOrder: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "push" | "unshift" | "original", unknown, "original", boolean>;
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export type TransferProps = ExtractPropTypes<typeof transferProps>;
