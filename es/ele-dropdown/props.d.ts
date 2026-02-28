import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';
import { ElIconProps, ElButtonProps, ElDropdownInstance } from '../ele-app/el';
import { default as ProDropdown } from './components/pro-dropdown';
import { DropdownItem } from './types';

declare const normalizeDropdownProps: import('../ele-app/types').Mutable<Omit<{
    readonly trigger: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>) | ((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('element-plus').TooltipTriggerType[]) | (() => import('element-plus/es/utils/typescript').Arrayable<import('element-plus').TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
    readonly triggerKeys: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
    readonly effect: {
        readonly default: "light";
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly type: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger") | (() => import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>) | ((new (...args: any[]) => "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger") | (() => import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement) | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import('element-plus').Placement))[], unknown, unknown, "bottom", boolean>;
    readonly popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => {}, boolean>;
    readonly id: StringConstructor;
    readonly size: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly splitButton: BooleanConstructor;
    readonly hideOnClick: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly loop: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    readonly hideTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 150, boolean>;
    readonly tabindex: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, 0, boolean>;
    readonly maxHeight: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown, "", boolean>;
    readonly popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly role: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "menu", boolean>;
    readonly buttonProps: {
        readonly type: import('vue').PropType<import('element-plus').ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly teleported: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, "size" | "trigger">>;
/**
 * 属性
 */
export declare const dropdownProps: {
    /** 下拉框渐变动画 */
    transition: {
        type: StringConstructor;
        default: string;
    };
    /** 下拉菜单数据 */
    items: PropType<DropdownItem[]>;
    /** 选中的菜单 */
    modelValue: PropType<DropdownItem["command"]>;
    /** 自定义下拉菜单样式 */
    menuStyle: PropType<StyleValue>;
    /** 自定义图标属性 */
    iconProps: PropType<ElIconProps>;
    /** 下拉菜单使用的组件类型 */
    componentType: PropType<"pro">;
    /** 是否阻止下拉菜单的右键事件 */
    preventContextmenu: BooleanConstructor;
    /** 内容按钮属性 */
    splitButtonProps: PropType<ElButtonProps>;
    /** 箭头按钮属性 */
    caretButtonProps: PropType<ElButtonProps>;
    /** 是否触发表单验证 */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    id: StringConstructor;
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
    size: PropType<ElButtonProps["size"]>;
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
    popperStyle: PropType<StyleValue>;
    enterable: {
        readonly default: true;
        readonly type: PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    arrowOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    virtualRef: {
        readonly type: import('vue').PropType<import('element-plus' /** 是否触发表单验证 */).Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    virtualTriggering: BooleanConstructor;
    className: StringConstructor;
    gpuAcceleration: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    arrowBg: StringConstructor;
};
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
/**
 * 事件
 */
export declare const dropdownEmits: {
    /** 内容按钮点击事件 */
    click: (_e: MouseEvent) => boolean;
    /** 菜单项点击事件 */
    command: (_command: DropdownItem["command"]) => boolean;
    /** 下拉框显示状态改变事件 */
    visibleChange: (_visible: boolean) => boolean;
    /** 更新选中值 */
    'update:modelValue': (_value: DropdownItem["command"]) => boolean;
    /** 选中改变的事件 */
    change: (_active: DropdownItem["command"]) => boolean;
    'update:visible': (value: boolean) => boolean;
    'before-enter': () => boolean;
    'before-leave': () => boolean;
    'after-enter': () => boolean;
    'after-leave': () => boolean;
};
/**
 * 属性名
 */
export type ElDropdownPropKeys = Array<keyof typeof normalizeDropdownProps>;
export declare const elDropdownPropKeys: ElDropdownPropKeys;
/**
 * 下拉菜单组件实例
 */
export type ProDropdownInstance = InstanceType<typeof ProDropdown> | null;
export type DropdownInstance = ElDropdownInstance | ProDropdownInstance;
export {};
