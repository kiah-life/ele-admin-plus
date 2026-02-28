import type { PropType, ExtractPropTypes, InjectionKey } from 'vue';
import type { MessageBoxOptions } from '../utils/message-box';
import type {
  TableGlobalConfig,
  MessageGlobalConfig,
  EleLocale
} from './types';

/**
 * 属性
 */
export const configProviderProps = {
  /** 国际化 */
  locale: Object as PropType<EleLocale>,
  /** 表格全局配置 */
  table: Object as PropType<TableGlobalConfig>,
  /** 消息提示全局配置 */
  message: Object as PropType<MessageGlobalConfig>,
  /** 消息弹窗全局配置 */
  messageBox: Object as PropType<Partial<MessageBoxOptions>>,
  /** license */
  license: String,
  /** 高德地图key */
  mapKey: String
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

/**
 * 全局配置键名
 */
export const CONFIG_KEY = Symbol('config') as InjectionKey<ConfigProviderProps>;
