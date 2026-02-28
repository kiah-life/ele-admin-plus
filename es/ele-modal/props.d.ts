import { PropType, ExtractPropTypes } from 'vue';
import { dialogProps } from 'element-plus';
import { StyleValue } from '../ele-app/types';
import { Resizable, MoveOut, Position } from './types';

/**
 * 属性
 */
export declare const modalProps: {
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否可以拖出边界 */
    moveOut: PropType<MoveOut>;
    /** 是否可以拉伸 */
    resizable: PropType<Resizable>;
    /** 初始位置 */
    position: PropType<Position>;
    /** 是否在弹窗关闭后重置位置和大小 */
    resetOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否显示最大化切换按钮 */
    maxable: BooleanConstructor;
    /** 是否支持打开多个 */
    multiple: BooleanConstructor;
    /** 是否限制在主体内部 */
    inner: BooleanConstructor;
    /** 最小拉伸宽度 */
    minWidth: {
        type: NumberConstructor;
        default: number;
    };
    /** 最小拉伸高度 */
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    /** 标题栏样式 */
    headerStyle: PropType<StyleValue>;
    /** 标题样式 */
    titleStyle: PropType<StyleValue>;
    /** 主体样式 */
    bodyStyle: PropType<StyleValue>;
    /** 底栏样式 */
    footerStyle: PropType<StyleValue>;
    /** 自定义关闭按钮样式 */
    closeBtnStyle: PropType<StyleValue>;
    /** 自定义全屏按钮样式 */
    fullscreenBtnStyle: PropType<StyleValue>;
    /** 拉伸图标样式 */
    resizeIconStyle: PropType<StyleValue>;
    /** 是否开启响应式 */
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
    /** 是否是表单弹窗 */
    form: BooleanConstructor;
    appendTo: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    destroyOnClose: BooleanConstructor;
    closeOnClickModal: import('element-plus/es/utils/index' /** 最小拉伸高度 */).EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue' /** 更新全屏状态 */).PropType<string>;
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
    headerAriaLevel: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: BooleanConstructor;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
};
export type ModalProps = ExtractPropTypes<typeof modalProps>;
/**
 * 事件
 */
export declare const modalEmits: {
    /** 更新全屏状态 */
    'update:fullscreen': (_fullscreen: boolean) => boolean;
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
};
export type DialogPropKeys = Array<keyof typeof dialogProps>;
/**
 * 弹窗组件属性名
 */
export declare const dialogPropKeys: DialogPropKeys;
