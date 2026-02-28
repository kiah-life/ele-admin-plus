import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';

/**
 * 属性
 */
export declare const popoverProps: {
    transition: {
        type: StringConstructor;
        default: string;
    };
    /** 自定义主体类名 */
    bodyClass: StringConstructor;
    /** 自定义主体样式 */
    bodyStyle: PropType<StyleValue>;
    /** 自定义标题样式 */
    titleStyle: PropType<StyleValue>;
    /** 自定义内容样式 */
    contentStyle: PropType<StyleValue>;
    width: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
    title: StringConstructor;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    disabled: BooleanConstructor;
    trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    content: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    effect: {
        readonly default: "light";
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    enterable: {
        readonly default: true;
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    showAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    popperStyle: PropType<StyleValue>;
    popperClass: StringConstructor;
    className: StringConstructor;
    arrowOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    triggerKeys: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    virtualRef: {
        readonly type: import('vue').PropType<import('element-plus').Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    virtualTriggering: BooleanConstructor;
    ariaLabel: StringConstructor;
    appendTo: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: NumberConstructor;
    gpuAcceleration: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    bg: StringConstructor;
    arrowBg: StringConstructor;
};
export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
/**
 * 事件
 */
export declare const popoverEmits: {
    'update:visible': (value: boolean) => boolean;
    'before-enter': () => boolean;
    'before-leave': () => boolean;
    'after-enter': () => boolean;
    'after-leave': () => boolean;
};
