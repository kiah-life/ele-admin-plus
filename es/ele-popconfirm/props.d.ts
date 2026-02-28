import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';
import { ElPopconfirmProps, ElIconProps, ElButtonProps } from '../ele-app/el';
import { ElePopoverProps } from '../ele-app/plus';

/**
 * 属性
 */
export declare const popconfirmProps: {
    trigger: {
        type: PropType<ElePopoverProps["trigger"]>;
        default: string;
    };
    /** 确认按钮文字 */
    confirmButtonText: StringConstructor;
    /** 取消按钮文字 */
    cancelButtonText: StringConstructor;
    /** 确认按钮类型 */
    confirmButtonType: {
        type: PropType<ElPopconfirmProps["confirmButtonType"]>;
        default: string;
    };
    /** 取消按钮类型 */
    cancelButtonType: {
        type: PropType<ElPopconfirmProps["cancelButtonType"]>;
        default: string;
    };
    /** 自定义图标 */
    icon: PropType<ElPopconfirmProps["icon"]>;
    /** 图标颜色 */
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    /** 是否隐藏图标 */
    hideIcon: BooleanConstructor;
    /** 是否隐藏确认按钮 */
    hideConfirmButton: BooleanConstructor;
    /** 是否隐藏取消按钮 */
    hideCancelButton: BooleanConstructor;
    /** 图标样式 */
    iconStyle: PropType<StyleValue>;
    /** 图标组件属性 */
    iconProps: PropType<ElIconProps>;
    /** 确认按钮组件属性 */
    confirmButtonProps: PropType<ElButtonProps>;
    /** 取消按钮组件属性 */
    cancelButtonProps: PropType<ElButtonProps>;
    /** 底栏样式 */
    footerStyle: PropType<StyleValue>;
    transition: {
        type: StringConstructor;
        default: string;
    };
    bodyClass: StringConstructor;
    bodyStyle: PropType<StyleValue>;
    titleStyle: PropType<StyleValue>;
    contentStyle: PropType<StyleValue>;
    title: StringConstructor;
    effect: {
        readonly default: "light";
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    disabled: BooleanConstructor;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    width: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    content: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    enterable: {
        readonly default: true;
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    showAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    popperStyle: PropType<StyleValue>;
    popperClass: StringConstructor;
    ariaLabel: StringConstructor;
    bg: StringConstructor;
    appendTo: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: NumberConstructor;
    triggerKeys: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    arrowOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    virtualRef: {
        readonly type: import('vue').PropType<import('element-plus').Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    virtualTriggering: BooleanConstructor;
    className: StringConstructor;
    gpuAcceleration: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    arrowBg: StringConstructor;
};
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>;
/**
 * 事件
 */
export declare const popconfirmEmits: {
    confirm: (_e: MouseEvent) => boolean;
    cancel: (_e: MouseEvent) => boolean;
    'update:visible': (value: boolean) => boolean;
    'before-enter': () => boolean;
    'before-leave': () => boolean;
    'after-enter': () => boolean;
    'after-leave': () => boolean;
};
