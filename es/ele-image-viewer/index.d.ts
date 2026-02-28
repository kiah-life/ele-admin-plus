import { ElImageViewerInstance } from '../ele-app/el';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    teleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: BooleanConstructor;
    customClass: StringConstructor;
    customStyle: ObjectConstructor;
    transitionName: {
        type: StringConstructor;
        default: string;
    };
    keepAlive: BooleanConstructor;
    urlList: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideOnClickModal: BooleanConstructor;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, {
    imageViewerRef: import('vue').Ref<ElImageViewerInstance, ElImageViewerInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    "update:modelValue": (_value?: boolean | undefined) => void;
    switch: (_index: number) => void;
    rotate: (_deg: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    teleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: BooleanConstructor;
    customClass: StringConstructor;
    customStyle: ObjectConstructor;
    transitionName: {
        type: StringConstructor;
        default: string;
    };
    keepAlive: BooleanConstructor;
    urlList: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideOnClickModal: BooleanConstructor;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((_value?: boolean | undefined) => any) | undefined;
    onSwitch?: ((_index: number) => any) | undefined;
    onRotate?: ((_deg: number) => any) | undefined;
}>, {
    modelValue: boolean;
    teleported: boolean;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideOnClickModal: boolean;
    initialIndex: number;
    infinite: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    zoomRate: number;
    minScale: number;
    maxScale: number;
    urlList: string[];
    transitionName: string;
    keepAlive: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
