import { Ref } from 'vue';
import { GlobalProvide, UseLocaleResult, LocaleProps } from './types';

/**
 * 获取全局配置
 */
export declare function useReceiver(): GlobalProvide;
/**
 * 获取全局属性
 */
export declare function useGlobalProps<T>(name: string): Ref<T>;
/**
 * 获取国际化
 */
export declare function useLocale<T>(name?: string, props?: LocaleProps<T>): UseLocaleResult<T>;
