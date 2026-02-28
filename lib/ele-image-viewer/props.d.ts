import { ExtractPropTypes } from 'vue';

/**
 * 属性
 */
export declare const imageViewerProps: {
    teleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否打开 */
    modelValue: BooleanConstructor;
    /** 自定义类名 */
    customClass: StringConstructor;
    /** 自定义样式 */
    customStyle: ObjectConstructor;
    /** 过渡动画名称 */
    transitionName: {
        type: StringConstructor;
        default: string;
    };
    /** 是否失活后仍然显示 */
    keepAlive: BooleanConstructor;
    urlList: import('element-plus/es/utils/index' /** 自定义类名 */).EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
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
};
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;
/**
 * 事件
 */
export declare const imageViewerEmits: {
    /** 更新打开状态 */
    'update:modelValue': (_value?: boolean) => boolean;
    /** 关闭事件 */
    close: () => boolean;
    /** 切换图像事件 */
    switch: (_index: number) => boolean;
    /** 旋转图像事件 */
    rotate: (_deg: number) => boolean;
};
