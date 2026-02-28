import { Mutable } from '../ele-app/types';

/**
 * toTree 方法参数
 */
export interface ToTreeOption<T> {
    /** 数据 */
    data?: T[] | null;
    /** id 字段名称 */
    idField?: string | null;
    /** parentId 字段名称 */
    parentIdField?: string | null;
    /** 生成的 children 字段名称 */
    childrenField?: string | null;
    /** 最顶级的 parentId 值 */
    parentId?: number | string | (number | string)[] | null;
    /** 是否添加包含所有父级 id 的字段 */
    addParentIds?: boolean | null;
    /** 包含所有父级 id 字段的名称 */
    parentIdsField?: string | null;
    /** 所有父级的 id */
    parentIds?: (number | string)[] | null;
}
/**
 * parentId 形式数据转 children 形式
 * @param option ToTreeOption
 */
export declare function toTree<T>(option: ToTreeOption<T>): T[];
/**
 * 遍历 children 形式数据
 * @param data 数据
 * @param callback 回调
 * @param childrenField children 字段名
 * @param parent 当前的父级
 */
export declare function eachTree<T>(data?: T[], callback?: (item: T, index: number, parent?: T) => void | boolean, childrenField?: string, parent?: T): false | undefined;
/**
 * 格式化 children 形式数据
 * @param data 数据
 * @param formatter 格式器
 * @param childrenField children 字段名
 * @param resultChildrenField 返回后的 children 字段名
 * @param parent 当前的父级
 */
export declare function mapTree<T, K>(data: T[] | undefined | null, formatter: (item: T, index?: number, parent?: K) => K | void | undefined, childrenField?: string, resultChildrenField?: string, parent?: K): K[];
/**
 * 查找树形数据
 * @param data 数据
 * @param predicate 查找条件
 * @param childrenField children 字段名
 */
export declare function findTree<T>(data: T[] | undefined, predicate: (value: T, index: number) => unknown, childrenField?: string): T | undefined;
/**
 * 生成 m 到 n 的随机数
 * @param m 最小值(包含)
 * @param n 最大值(不包含)
 */
export declare function random(m: number, n: number): number;
/**
 * 生成随机字符串
 * @param length 长度
 * @param radix 基数
 */
export declare function uuid(length?: number, radix?: number): string;
/**
 * 数字千分位
 * @param num 数字
 */
export declare function formatNumber(num?: number | null): string;
/**
 * 赋值不改变原字段
 * @param target 目标对象
 * @param source 源对象
 * @param excludes 排除的字段
 */
export declare function assignObject<T extends {}, K extends {}>(target: T, source: K, excludes?: string[]): T;
/**
 * 判断是否是外链
 * @param url 地址
 */
export declare function isExternalLink(url?: string | null): boolean;
/**
 * 查找直接子元素
 * @param parentEl 父元素
 * @param className 类名
 * @param attr 属性
 */
export declare function queryChild(parentEl?: Element, className?: string, attr?: string[]): Element | undefined;
/**
 * 获取节点样式
 * @param el 节点
 */
export declare function getCurrentStyle(el: Element): CSSStyleDeclaration;
/**
 * 判断元素内容是否溢出省略
 * @param el 元素节点
 * @param direction 只判断单个方向是否溢出
 */
export declare function contentIsEllipsis(el: HTMLElement, direction?: 'horizontal' | 'vertical'): boolean;
/**
 * 检查是否全屏
 */
export declare function checkFullscreen(): boolean;
/**
 * 退出全屏
 */
export declare function exitFullscreen(): void;
/**
 * 全屏
 * @param el HTMLElement
 */
export declare function requestFullscreen(el?: HTMLElement): void;
/**
 * 经纬度坐标
 */
export interface Point {
    /** 经度 */
    lng: number;
    /** 纬度 */
    lat: number;
}
/**
 * 百度地图坐标转高德地图坐标
 * @param point 坐标
 */
export declare function bd09ToGcj02(point: Point): Point;
/**
 * 高德地图坐标转百度地图坐标
 * @param point 坐标
 */
export declare function gcj02ToBd09(point: Point): Point;
/**
 * 复制字符串
 * @param text 字符串
 */
export declare function copyText(text: string): Promise<undefined>;
/**
 * 根据字段路径获取值
 * @param data 数据
 * @param path 字段路径
 * @param defaultValue 默认值
 */
export declare function getValue<T, K>(data?: K | null, path?: string | string[] | ((d: K) => T), defaultValue?: T): T | undefined;
/**
 * 防抖函数
 * @param func 函数
 * @param wait 等待时间
 */
export declare function debounce<T extends (...args: any) => any>(func: T, wait: number): (this: any) => void;
/**
 * 节流函数
 * @param func 函数
 * @param wait 等待时间
 * @param trailing 是否在节流结束后调用
 */
export declare function throttle<T extends (...args: any) => any>(func: T, wait: number, trailing?: boolean): (this: any) => void;
/**
 * 忽略对象属性
 * @param obj 来源对象
 * @param fields 忽略的属性
 */
export declare function omit<T extends {}, K extends keyof T>(obj: T | null | undefined, fields: K[]): Mutable<Omit<T, K>>;
/**
 * 摘选对象属性
 * @param obj 来源对象
 * @param fields 摘选的属性
 */
export declare function pick<T extends object, K extends keyof T>(obj: T, fields: K[]): Mutable<Pick<T, K>>;
/**
 * 首字母大写
 */
export declare function capitalize(str: string): string;
