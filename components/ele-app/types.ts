import type { CSSProperties, Component, SetupContext } from 'vue';

/**
 * 只读属性改为可读
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * 样式值
 */
export type StyleValue = Partial<CSSProperties>;

/**
 * 样式多个值
 */
export type StyleValues = StyleValue | Array<StyleValue>;

/**
 * 类名值
 */
export type ClassValue = string | Record<string, boolean | undefined>;

/**
 * 类名多个值
 */
export type ClassValues = ClassValue | Array<ClassValue>;

/**
 * 组件属性
 */
export type ComponentProps<T> = Mutable<Partial<T>> & {
  /** 类名 */
  class?: ClassValues;
  /** 样式 */
  style?: StyleValues;
};

/**
 * 组件名或组件
 */
export type UserComponent = string | Component;

/**
 * 组件事件触发器
 */
export type Emitter<T> = SetupContext<T>['emit'];
