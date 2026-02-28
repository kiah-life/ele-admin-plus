import { ElDrawerInstance } from '../ele-app/el';

declare function __VLS_template(): {
    header?(_: {}): any;
    closeBtn?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    headerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    titleStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    bodyStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    footerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    closeBtnStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    inner: BooleanConstructor;
    direction: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    size: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    appendToBody: BooleanConstructor;
    appendTo: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    destroyOnClose: BooleanConstructor;
    closeOnClickModal: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    draggable: BooleanConstructor;
    overflow: BooleanConstructor;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>, {
    drawerRef: import('vue').Ref<ElDrawerInstance, ElDrawerInstance>;
    handleClose: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    open: () => void;
    "update:modelValue": (value: boolean) => void;
    closed: () => void;
    opened: () => void;
    openAutoFocus: () => void;
    closeAutoFocus: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    headerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    titleStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    bodyStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    footerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    closeBtnStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    inner: BooleanConstructor;
    direction: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    size: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    appendToBody: BooleanConstructor;
    appendTo: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    destroyOnClose: BooleanConstructor;
    closeOnClickModal: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    draggable: BooleanConstructor;
    overflow: BooleanConstructor;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClosed?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
    onOpenAutoFocus?: (() => any) | undefined;
    onCloseAutoFocus?: (() => any) | undefined;
}>, {
    title: string;
    center: boolean;
    modelValue: boolean;
    size: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    appendToBody: boolean;
    appendTo: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
    destroyOnClose: boolean;
    closeOnClickModal: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    lockScroll: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modal: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    trapFocus: boolean;
    headerAriaLevel: string;
    alignCenter: boolean;
    draggable: boolean;
    overflow: boolean;
    fullscreen: boolean;
    showClose: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    ariaLevel: string;
    direction: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    withHeader: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modalFade: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    inner: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
