import { PropType } from 'vue';
import { EleTooltipInstance } from '../../ele-app/plus';
import { DropdownItem } from '../types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>> & Partial<Record<string, (_: any) => any>> & {
    default?(_: {
        active: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        selected: DropdownItem | null | undefined;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** 当前选中菜单项 */
    selected: PropType<DropdownItem | null>;
    transition: {
        type: StringConstructor;
        default: string;
    };
    items: PropType<DropdownItem[]>;
    modelValue: PropType<DropdownItem["command"]>;
    menuStyle: PropType<import('../../ele-app/types').StyleValue>;
    iconProps: PropType<import('../../ele-app/el').ElIconProps>;
    componentType: PropType<"pro">;
    preventContextmenu: BooleanConstructor;
    splitButtonProps: PropType<import('../../ele-app/el').ElButtonProps>;
    caretButtonProps: PropType<import('../../ele-app/el').ElButtonProps>;
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: StringConstructor;
    type: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger") | (() => import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>) | ((new (...args: any[]) => "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger") | (() => import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        readonly default: "light";
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    disabled: BooleanConstructor;
    triggerKeys: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    splitButton: BooleanConstructor;
    hideOnClick: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    loop: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    showTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    hideTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    maxHeight: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, "", boolean>;
    role: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "menu", boolean>;
    buttonProps: {
        readonly type: import('vue').PropType<import('element-plus').ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: PropType<import('../../ele-app/el').ElButtonProps["size"]>;
    ariaLabel: StringConstructor;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    bg: StringConstructor;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    appendTo: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: NumberConstructor;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    popperStyle: PropType<import('../../ele-app/types').StyleValue>;
    enterable: {
        readonly default: true;
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
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
    hidePopper: () => void;
    updatePopper: () => void;
    handleOpen: () => void;
    handleClose: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (_active: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined) => void;
    click: (_e: MouseEvent) => void;
    command: (_command: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined) => void;
    "update:modelValue": (_value: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined) => void;
    "update:visible": (value: boolean) => void;
    visibleChange: (_visible: boolean) => void;
    "before-enter": () => void;
    "before-leave": () => void;
    "after-enter": () => void;
    "after-leave": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** 当前选中菜单项 */
    selected: PropType<DropdownItem | null>;
    transition: {
        type: StringConstructor;
        default: string;
    };
    items: PropType<DropdownItem[]>;
    modelValue: PropType<DropdownItem["command"]>;
    menuStyle: PropType<import('../../ele-app/types').StyleValue>;
    iconProps: PropType<import('../../ele-app/el').ElIconProps>;
    componentType: PropType<"pro">;
    preventContextmenu: BooleanConstructor;
    splitButtonProps: PropType<import('../../ele-app/el').ElButtonProps>;
    caretButtonProps: PropType<import('../../ele-app/el').ElButtonProps>;
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: StringConstructor;
    type: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger") | (() => import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>) | ((new (...args: any[]) => "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger") | (() => import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        readonly default: "light";
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    disabled: BooleanConstructor;
    triggerKeys: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    splitButton: BooleanConstructor;
    hideOnClick: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    loop: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    showTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    hideTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    maxHeight: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, "", boolean>;
    role: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "menu", boolean>;
    buttonProps: {
        readonly type: import('vue').PropType<import('element-plus').ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: PropType<import('../../ele-app/el').ElButtonProps["size"]>;
    ariaLabel: StringConstructor;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
    bg: StringConstructor;
    persistent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    appendTo: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: NumberConstructor;
    visible: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
    trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    showArrow: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    popperStyle: PropType<import('../../ele-app/types').StyleValue>;
    enterable: {
        readonly default: true;
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
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
    onChange?: ((_active: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined) => any) | undefined;
    onClick?: ((_e: MouseEvent) => any) | undefined;
    onCommand?: ((_command: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((_value: import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown> | undefined) => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onVisibleChange?: ((_visible: boolean) => any) | undefined;
    "onBefore-enter"?: (() => any) | undefined;
    "onBefore-leave"?: (() => any) | undefined;
    "onAfter-enter"?: (() => any) | undefined;
    "onAfter-leave"?: (() => any) | undefined;
}>, {
    effect: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>;
    placement: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown>;
    popperClass: string;
    teleported: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    disabled: boolean;
    offset: number;
    validateEvent: boolean;
    persistent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    visible: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
    trigger: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown>;
    triggerKeys: string[];
    popperOptions: Partial<import('element-plus').Options>;
    splitButton: boolean;
    hideOnClick: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    loop: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showTimeout: number;
    hideTimeout: number;
    tabindex: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
    maxHeight: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>;
    role: string;
    showArrow: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    transition: string;
    enterable: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    arrowOffset: number;
    virtualTriggering: boolean;
    gpuAcceleration: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    preventContextmenu: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
