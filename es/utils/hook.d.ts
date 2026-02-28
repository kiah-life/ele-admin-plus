import { Ref, EmitsOptions, ObjectEmitsOptions, EmitsToProps } from 'vue';

/**
 * 重置组件表单验证
 */
export declare function useFormItemRest(): void;
/**
 * useTimer 返回结果
 */
export type UseTimerResult = [
    (callback?: () => void, timeout?: number) => void,
    () => void,
    Ref<boolean>
];
/**
 * 定时器
 * @param ms 等待时间
 * @param cb 执行方法
 */
export declare function useTimer(ms?: number | (() => number), cb?: () => void): UseTimerResult;
/**
 * useMediaQuery 返回结果
 */
export type UseMediaQueryResult = [MediaQueryList, () => void, () => void];
/**
 * 媒体查询
 * @param query 媒体查询字符串
 * @param onChange 改变回调
 */
export declare function useMediaQuery(query: string, onChange?: () => void): UseMediaQueryResult;
/**
 * useMobile 返回结果
 */
export type UseMobileResult = [Ref<boolean>, () => void, () => void];
/**
 * 获取是否是移动端小屏幕
 * @param onChange 值改变回调
 */
export declare function useMobile(onChange?: (isMobile: boolean) => void): UseMobileResult;
/**
 * useMobileDevice 返回结果
 */
export type UseMobileDeviceResult = [Ref<boolean>, () => void, () => void];
/**
 * 获取是否是移动端触摸设备
 * @param onChange 值改变回调
 */
export declare function useMobileDevice(onChange?: (isMobile: boolean) => void): UseMobileDeviceResult;
/**
 * 窗口事件监听
 * @param event 事件
 * @param listener 回调
 */
export declare function useWindowListener(event: string | EventListenerOrEventListenerObject, listener?: EventListenerOrEventListenerObject): void;
/**
 * 折叠展开动画
 */
export declare function useCollapseAnim(): {
    handleBeforeEnter: (el: HTMLElement) => void;
    handleEnter: (el: HTMLElement) => void;
    handleAfterEnter: (el: HTMLElement) => void;
    handleBeforeLeave: (el: HTMLElement) => void;
    handleLeave: (el: HTMLElement) => void;
    handleAfterLeave: (el: HTMLElement) => void;
};
/**
 * 鼠标滚轮事件回调方法参数
 */
export interface UseMousewheelCallbackParam {
    /** 事件对象 */
    e: MouseEvent;
    /** 方向 */
    direction: 'up' | 'down';
}
/**
 * 鼠标滚轮事件
 * @param cb 回调
 */
export declare function useMousewheel(cb?: (p: UseMousewheelCallbackParam) => void): {
    handleMousewheel: (e: MouseEvent) => void;
    handleFirefoxMousewheel: (e: MouseEvent) => void;
    bindMousewheel: (el: HTMLElement) => void;
    unbindMousewheel: (el: HTMLElement) => void;
};
/**
 * 触摸事件回调参数
 */
export interface UseTouchEventCallbackParam<T> {
    /** 事件对象 */
    e: T;
    /** 开始横向位置 */
    startX: number | null;
    /** 开始纵向位置 */
    startY: number | null;
    /** 横向移动距离 */
    distanceX?: number | null;
    /** 纵向移动距离 */
    distanceY?: number | null;
}
/**
 * 触摸事件参数
 */
export interface UseTouchEventOption<T> {
    /** 触摸开始的回调 */
    start?: (param: UseTouchEventCallbackParam<T>) => void;
    /** 触摸移动的回调 */
    move?: (param: UseTouchEventCallbackParam<T>) => void;
    /** 触摸结束的回调 */
    end?: (param: UseTouchEventCallbackParam<T>) => void;
    /** touchmove 事件参数 */
    touchmoveOptions?: any;
}
/**
 * 触摸事件
 * @param option 参数
 */
export declare function useTouchEvent(option?: UseTouchEventOption<TouchEvent>): {
    handleTouchStart: (e: TouchEvent) => void;
    handleTouchMove: (e: TouchEvent) => void;
    handleTouchEnd: (e: TouchEvent) => void;
    bindTouchEvent: (el: HTMLElement) => void;
    unbindTouchEvent: (el: HTMLElement) => void;
};
/**
 * 移动事件对象
 */
export type MoveEvent = MouseEvent | TouchEvent;
/**
 * 鼠标移动事件或触摸移动事件
 * @param option 参数
 */
export declare function useMoveEvent(option?: UseTouchEventOption<MoveEvent>): {
    handleMousedown: (e: MouseEvent) => void;
    handleTouchstart: (e: TouchEvent) => void;
};
/**
 * 组件事件对应的方法类型
 */
export type EmitMethods<T extends EmitsOptions> = T extends string[] ? {
    [K in T[number]]: (...args: any[]) => void;
} : T extends ObjectEmitsOptions ? {
    [K in string & keyof T]: (...args: T[K] extends (...args: infer P) => any ? P : T[K] extends null ? any[] : never) => void;
} : {};
/**
 * 二次封装组件事件处理 hook
 */
export declare function useComponentEvents<T extends EmitsOptions>(events: T, emit: any): {
    emitMethods: EmitMethods<T>;
    emitProps: Required<EmitsToProps<T>>;
};
/**
 * 高级选项数据 hook
 */
export declare function useProOptions<T>(props: Record<string, any>, name?: string): {
    optionData: Ref<T[], T[]>;
    reloadOptions: () => void;
};
