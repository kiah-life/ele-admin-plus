import { ElTransferInstance } from '../ele-app/el';
import { TransferDataItem } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    data: import('vue').PropType<TransferDataItem[] | import('./types').TransferDataFunction>;
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
}>, {
    reloadOptions: () => void;
    transferRef: import('vue').Ref<ElTransferInstance, ElTransferInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('element-plus').TransferKey[]) => void;
    change: (value: import('element-plus').TransferKey[], direction: import('element-plus').TransferDirection, movedKeys: import('element-plus').TransferKey[]) => void;
    "left-check-change": (value: import('element-plus').TransferKey[], movedKeys?: import('element-plus').TransferKey[] | undefined) => void;
    "right-check-change": (value: import('element-plus').TransferKey[], movedKeys?: import('element-plus').TransferKey[] | undefined) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: import('vue').PropType<TransferDataItem[] | import('./types').TransferDataFunction>;
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
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import('element-plus').TransferKey[]) => any) | undefined;
    onChange?: ((value: import('element-plus').TransferKey[], direction: import('element-plus').TransferDirection, movedKeys: import('element-plus').TransferKey[]) => any) | undefined;
    "onLeft-check-change"?: ((value: import('element-plus').TransferKey[], movedKeys?: import('element-plus').TransferKey[] | undefined) => any) | undefined;
    "onRight-check-change"?: ((value: import('element-plus').TransferKey[], movedKeys?: import('element-plus').TransferKey[] | undefined) => any) | undefined;
}>, {
    modelValue: import('element-plus').TransferKey[];
    filterable: boolean;
    validateEvent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    props: import('element-plus').TransferPropsAlias;
    format: import('element-plus').TransferFormat;
    titles: [string, string];
    buttonTexts: [string, string];
    leftDefaultChecked: import('element-plus').TransferKey[];
    rightDefaultChecked: import('element-plus').TransferKey[];
    targetOrder: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "push" | "unshift" | "original", unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
