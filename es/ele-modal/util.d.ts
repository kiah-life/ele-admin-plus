import { Ref } from 'vue';
import { ElDialogInstance } from '../ele-app/el';
import { ModalProps } from './props';

export declare const containerClass = "ele-modal-container";
export declare const wrapperClass = "ele-modal";
export declare const closedClass = "ele-modal-closed";
/**
 * 获取弹窗容器
 * @param inner 是否限制在主体内部
 * @param multiple 是否支持同时打开多个
 * @param appendTo 自定义插入的容器
 * @param modalsEl 限制在主体内部时的容器
 */
export declare function getModalContainer(inner?: boolean, multiple?: boolean, appendTo?: string | HTMLElement, modalsEl?: HTMLElement | null): HTMLElement | string;
/**
 * 弹窗支持移动
 * @param dialogRef 弹窗实例
 * @param props 属性
 * @param isFullscreen 全屏状态
 */
export declare function useModalMove(dialogRef: Ref<ElDialogInstance>, props: ModalProps, isFullscreen: Ref<boolean>): {
    handleHeaderMousedown: (e: MouseEvent) => void;
    handleHeaderTouchstart: (e: TouchEvent) => void;
};
/**
 * 弹窗支持拉伸
 * @param dialogRef 弹窗实例
 * @param props 属性
 * @param isFullscreen 全屏状态
 */
export declare function useModalResize(dialogRef: Ref<ElDialogInstance>, props: ModalProps, isFullscreen: Ref<boolean>): {
    handleResizeMousedown: (e: MouseEvent) => void;
    handleResizeTouchstart: (e: TouchEvent) => void;
};
/**
 * 弹窗事件处理
 * @param dialogRef 弹窗实例
 * @param props 属性
 * @param isFullscreen 全屏状态
 */
export declare function useModalEvent(dialogRef: Ref<ElDialogInstance>, props: ModalProps, isFullscreen: Ref<boolean>): {
    handleHeaderMousedown: (e: MouseEvent) => void;
    handleHeaderTouchstart: (e: TouchEvent) => void;
    handleResizeMousedown: (e: MouseEvent) => void;
    handleResizeTouchstart: (e: TouchEvent) => void;
    bindAutoTopEvent: () => void;
    unbindAutoTopEvent: () => void;
    topModal: (el?: HTMLElement) => void;
    setInitPosition: () => void;
    resetModalStyle: () => void;
};
