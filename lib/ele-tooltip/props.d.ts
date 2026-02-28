import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';

/**
 * 属性
 */
export declare const tooltipProps: {
    /** 自定义内容样式 */
    bodyStyle: PropType<StyleValue>;
    /** 自定义背景色 */
    bg: StringConstructor;
    /** 自定义箭头颜色 */
    arrowBg: StringConstructor;
    /** 宽度 */
    width: (StringConstructor | NumberConstructor)[];
    /** 是否是气泡卡片 */
    isPopover: BooleanConstructor;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    arrowOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    disabled: BooleanConstructor;
    trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
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
    content: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    rawContent: BooleanConstructor;
    persistent: BooleanConstructor;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    transition: StringConstructor;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    effect: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown, "dark", boolean>;
    enterable: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zIndex: NumberConstructor;
    gpuAcceleration: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, import('element-plus').Placement, unknown, "bottom", boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    showAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    className: StringConstructor;
    popperClass: StringConstructor;
    popperStyle: PropType<StyleValue>;
};
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
/**
 * 事件
 */
export type TooltipEmits = {
    'update:visible': (visible: boolean) => boolean;
    'before-show': (e: Event) => boolean;
    'before-hide': (e: Event) => boolean;
    show: (e: Event) => boolean;
    hide: (e: Event) => boolean;
    open: (e: any) => boolean;
    close: (e: any) => boolean;
};
export declare const tooltipEmits: TooltipEmits;
/**
 * 属性名
 */
export type TooltipPropKeys = Array<keyof typeof tooltipProps>;
export declare const tooltipPropKeys: TooltipPropKeys;
