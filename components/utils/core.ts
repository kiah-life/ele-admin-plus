import type { Mutable } from '../ele-app/types';

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
export function toTree<T>(option: ToTreeOption<T>): T[] {
  const data = option.data;
  const idField = option.idField || 'id';
  const parentIdField = option.parentIdField || 'parentId';
  const childrenField = option.childrenField || 'children';
  const parentIdIsNull = option.parentId == null;
  const parentId = parentIdIsNull ? [] : option.parentId;
  const parentIdIsArray = Array.isArray(parentId);
  const addParentIds = option.addParentIds;
  const parentIdsField = option.parentIdsField || 'parentIds';
  const parentIds = option.parentIds ?? [];

  if (data == null) {
    return [];
  }

  if (parentIdIsNull) {
    data.forEach((d) => {
      if (
        !data.some((t) => d[parentIdField] == t[idField]) &&
        !(parentId as unknown[]).includes(d[parentIdField])
      ) {
        (parentId as unknown[]).push(d[parentIdField]);
      }
    });
  }

  const result: T[] = [];
  data.forEach((d) => {
    if (d[idField] == d[parentIdField]) {
      const error = {
        [idField]: d[idField],
        [parentIdField]: d[parentIdField],
        data: d
      };
      console.error('data error:', error);
      throw new Error('data error');
    }
    if (
      parentIdIsArray
        ? parentId.includes(d[parentIdField])
        : d[parentIdField] == parentId
    ) {
      const t = { ...d };
      const children = toTree({
        data,
        idField,
        parentIdField,
        childrenField,
        parentId: d[idField],
        addParentIds,
        parentIdsField,
        parentIds: [...parentIds, d[idField]]
      });
      if (children.length > 0) {
        t[childrenField] = children;
      }
      if (addParentIds) {
        t[parentIdsField] = parentIds;
      }
      result.push(t);
    }
  });
  return result;
}

/**
 * 遍历 children 形式数据
 * @param data 数据
 * @param callback 回调
 * @param childrenField children 字段名
 * @param parent 当前的父级
 */
export function eachTree<T>(
  data?: T[],
  callback?: (item: T, index: number, parent?: T) => void | boolean,
  childrenField = 'children',
  parent?: T
) {
  if (!data) {
    return;
  }
  for (let i = 0; i < data.length; i++) {
    const flag = callback ? callback(data[i], i, parent) : void 0;
    if (flag === false) {
      return false;
    }
    if (data[i][childrenField]?.length) {
      if (
        eachTree(data[i][childrenField], callback, childrenField, data[i]) ===
        false
      ) {
        return false;
      }
    }
  }
}

/**
 * 格式化 children 形式数据
 * @param data 数据
 * @param formatter 格式器
 * @param childrenField children 字段名
 * @param resultChildrenField 返回后的 children 字段名
 * @param parent 当前的父级
 */
export function mapTree<T, K>(
  data: T[] | undefined | null,
  formatter: (item: T, index?: number, parent?: K) => K | void | undefined,
  childrenField = 'children',
  resultChildrenField = 'children',
  parent?: K
): K[] {
  const result: K[] = [];
  if (data && data.length) {
    data.forEach((d, i) => {
      const item = formatter(d, i, parent);
      if (item) {
        if (d[childrenField] != null) {
          item[resultChildrenField] = mapTree(
            d[childrenField],
            formatter,
            childrenField,
            resultChildrenField,
            item
          );
        }
        result.push(item);
      }
    });
  }
  return result;
}

/**
 * 查找树形数据
 * @param data 数据
 * @param predicate 查找条件
 * @param childrenField children 字段名
 */
export function findTree<T>(
  data: T[] | undefined,
  predicate: (value: T, index: number) => unknown,
  childrenField?: string
): T | undefined {
  let temp: T | undefined;
  eachTree(
    data,
    (d, i) => {
      if (predicate(d, i)) {
        temp = d;
        return false;
      }
    },
    childrenField
  );
  return temp;
}

/**
 * 生成 m 到 n 的随机数
 * @param m 最小值(包含)
 * @param n 最大值(不包含)
 */
export function random(m: number, n: number): number {
  return Math.floor(Math.random() * (m - n) + n);
}

/**
 * 生成随机字符串
 * @param length 长度
 * @param radix 基数
 */
export function uuid(length = 32, radix?: number): string {
  const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += str.charAt(Math.floor(Math.random() * (radix || str.length)));
  }
  return result;
}

/**
 * 数字千分位
 * @param num 数字
 */
export function formatNumber(num?: number | null): string {
  return String(num ?? '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
}

/**
 * 赋值不改变原字段
 * @param target 目标对象
 * @param source 源对象
 * @param excludes 排除的字段
 */
export function assignObject<T extends {}, K extends {}>(
  target: T,
  source: K,
  excludes?: string[]
) {
  Object.keys(target).forEach((key) => {
    if (!excludes?.includes?.(key)) {
      target[key] = source[key];
    }
  });
  return target;
}

/**
 * 判断是否是外链
 * @param url 地址
 */
export function isExternalLink(url?: string | null): boolean {
  return !!(
    url &&
    (url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('//'))
  );
}

/**
 * 查找直接子元素
 * @param parentEl 父元素
 * @param className 类名
 * @param attr 属性
 */
export function queryChild(
  parentEl?: Element,
  className?: string,
  attr?: string[]
): Element | undefined {
  return Array.from(parentEl?.children ?? []).find((el) => {
    if (className && !el.classList.contains(className)) {
      return false;
    }
    if (attr != null && attr[0] != null) {
      if (el.getAttribute(attr[0]) != attr[1]) {
        return false;
      }
    }
    return true;
  });
}

/**
 * 获取节点样式
 * @param el 节点
 */
export function getCurrentStyle(el: Element): CSSStyleDeclaration {
  return el['currentStyle'] || window.getComputedStyle(el, null) || {};
}

/**
 * 判断元素内容是否溢出省略
 * @param el 元素节点
 * @param direction 只判断单个方向是否溢出
 */
export function contentIsEllipsis(
  el: HTMLElement,
  direction?: 'horizontal' | 'vertical'
): boolean {
  if (!el || !el.childNodes.length) {
    return false;
  }
  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);
  const { width, height } = range.getBoundingClientRect();
  const floorW = Math.floor(width);
  const rangeWidth = width - floorW < 0.008 ? floorW : width;
  const floorH = Math.floor(height);
  const rangeHeight = height - floorH < 0.008 ? floorH : height;
  const style = getCurrentStyle(el);
  const top = Number.parseInt(style.paddingTop) || 0;
  const left = Number.parseInt(style.paddingLeft) || 0;
  const right = Number.parseInt(style.paddingRight) || 0;
  const bottom = Number.parseInt(style.paddingBottom) || 0;
  const horizontalPadding = left + right;
  const verticalPadding = top + bottom;
  if (direction === 'horizontal') {
    return (
      rangeWidth + horizontalPadding > el.offsetWidth ||
      el.scrollWidth > el.offsetWidth
    );
  }
  if (direction === 'vertical') {
    return (
      rangeHeight + verticalPadding > el.offsetHeight ||
      el.scrollHeight > el.offsetHeight
    );
  }
  return (
    rangeWidth + horizontalPadding > el.offsetWidth ||
    rangeHeight + verticalPadding > el.offsetHeight ||
    el.scrollWidth > el.offsetWidth
  );
}

/**
 * 检查是否全屏
 */
export function checkFullscreen(): boolean {
  return !!(
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement ||
    (document as any).mozFullScreenElement ||
    (document as any).msFullscreenElement
  );
}

/**
 * 退出全屏
 */
export function exitFullscreen() {
  const func =
    document.exitFullscreen ||
    (document as any).exitFullScreen ||
    (document as any).webkitCancelFullScreen ||
    (document as any).mozCancelFullScreen ||
    (document as any).msExitFullscreen;
  func && func.call(document);
}

/**
 * 全屏
 * @param el HTMLElement
 */
export function requestFullscreen(el?: HTMLElement) {
  if (el == null) {
    el = document.documentElement;
  }
  const func =
    el.requestFullscreen ||
    (el as any).requestFullScreen ||
    (el as any).webkitRequestFullScreen ||
    (el as any).mozRequestFullScreen ||
    (el as any).msRequestFullScreen;
  if (!func) {
    throw new Error('您的浏览器不支持全屏模式');
  }
  func.call(el);
}

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
export function bd09ToGcj02(point: Point): Point {
  const x_pi = (3.141592653589793 * 3000.0) / 180.0;
  const x = point.lng - 0.0065;
  const y = point.lat - 0.006;
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
  return {
    lng: z * Math.cos(theta),
    lat: z * Math.sin(theta)
  };
}

/**
 * 高德地图坐标转百度地图坐标
 * @param point 坐标
 */
export function gcj02ToBd09(point: Point): Point {
  const x_pi = (3.141592653589793 * 3000.0) / 180.0;
  const x = point.lng;
  const y = point.lat;
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  return {
    lng: z * Math.cos(theta) + 0.0065,
    lat: z * Math.sin(theta) + 0.006
  };
}

/**
 * 复制字符串
 * @param text 字符串
 */
export async function copyText(text: string) {
  if (typeof navigator?.clipboard?.writeText === 'function') {
    await navigator.clipboard.writeText(text);
    return;
  }
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.top = '-200px';
  el.style.left = '-200px';
  el.style.width = '100px';
  el.style.height = '100px';
  document.body.appendChild(el);
  el.focus();
  el.select();
  if (!document.execCommand('copy')) {
    el.remove();
    return Promise.reject(new Error('浏览器不支持复制'));
  }
  el.remove();
}

/**
 * 根据字段路径获取值
 * @param data 数据
 * @param path 字段路径
 * @param defaultValue 默认值
 */
export function getValue<T, K>(
  data?: K | null,
  path?: string | string[] | ((d: K) => T),
  defaultValue?: T
): T | undefined {
  if (data == null) {
    return defaultValue;
  }
  const pathType = typeof path;
  if (pathType === 'function') {
    return (path as any)(data);
  }
  const fields: string[] =
    (pathType === 'string'
      ? (path as string).match(/[^\[\].]+/g)
      : (path as string[] | undefined)) ?? [];
  let result: any = data;
  for (const key of fields) {
    result = result[key.trim()];
  }
  return (typeof result === 'undefined' ? defaultValue : result) as T;
}

/**
 * 防抖函数
 * @param func 函数
 * @param wait 等待时间
 */
export function debounce<T extends (...args: any) => any>(
  func: T,
  wait: number
) {
  let timer: number | undefined = void 0;
  const debounced: (this: any) => void = function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = void 0;
    }, wait) as unknown as number;
  };
  return debounced;
}

/**
 * 节流函数
 * @param func 函数
 * @param wait 等待时间
 * @param trailing 是否在节流结束后调用
 */
export function throttle<T extends (...args: any) => any>(
  func: T,
  wait: number,
  trailing?: boolean
) {
  let timer: number | undefined = void 0;
  const debounced: (this: any) => void = function (...args) {
    if (!timer) {
      if (!trailing) {
        func.apply(this, args);
      }
      timer = setTimeout(() => {
        if (trailing) {
          func.apply(this, args);
        }
        timer = void 0;
      }, wait) as unknown as number;
    }
  };
  return debounced;
}

/**
 * 忽略对象属性
 * @param obj 来源对象
 * @param fields 忽略的属性
 */
export function omit<T extends {}, K extends keyof T>(
  obj: T | null | undefined,
  fields: K[]
): Mutable<Omit<T, K>> {
  const result = Object.assign({}, obj);
  if (obj) {
    for (const key of fields) {
      delete result[key];
    }
  }
  return result;
}

/**
 * 摘选对象属性
 * @param obj 来源对象
 * @param fields 摘选的属性
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  fields: K[]
): Mutable<Pick<T, K>> {
  const result: Pick<T, K> = {} as Pick<T, K>;
  if (obj) {
    for (const key of fields) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * 首字母大写
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
