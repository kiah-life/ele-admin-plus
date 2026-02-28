import { EleTooltipInstance } from '../ele-app/plus';

declare function __VLS_template(): {
    reference?(_: {}): any;
    body?(_: {}): any;
    title?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    transition: {
        type: StringConstructor;
        default: string;
    };
    bodyClass: StringConstructor;
    bodyStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    titleStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    contentStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    width: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
    title: StringConstructor;
    effect: {
        readonly default: "light";
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    disabled: BooleanConstructor;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    content: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    enterable: {
        readonly default: true;
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    showAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    popperStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
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
}>, {
    tooltipRef: import('vue').Ref<EleTooltipInstance, EleTooltipInstance>;
    hide: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
    "before-enter": () => void;
    "before-leave": () => void;
    "after-enter": () => void;
    "after-leave": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    transition: {
        type: StringConstructor;
        default: string;
    };
    bodyClass: StringConstructor;
    bodyStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    titleStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    contentStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    width: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
    title: StringConstructor;
    effect: {
        readonly default: "light";
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    disabled: BooleanConstructor;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    content: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    enterable: {
        readonly default: true;
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    showAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    popperStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
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
}>> & Readonly<{
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    "onBefore-enter"?: (() => any) | undefined;
    "onBefore-leave"?: (() => any) | undefined;
    "onAfter-enter"?: (() => any) | undefined;
    "onAfter-leave"?: (() => any) | undefined;
}>, {
    width: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    effect: any;
    placement: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown>;
    teleported: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    disabled: boolean;
    offset: number;
    persistent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    visible: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
    trigger: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown>;
    triggerKeys: string[];
    popperOptions: Partial<import('element-plus').Options>;
    tabindex: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
    showArrow: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    transition: string;
    content: string;
    enterable: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showAfter: number;
    hideAfter: number;
    autoClose: number;
    arrowOffset: number;
    virtualTriggering: boolean;
    gpuAcceleration: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
