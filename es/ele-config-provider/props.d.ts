import { PropType, ExtractPropTypes, InjectionKey } from 'vue';
import { MessageBoxOptions } from '../utils/message-box';
import { TableGlobalConfig, MessageGlobalConfig, EleLocale } from './types';

/**
 * 属性
 */
export declare const configProviderProps: {
    /** 国际化 */
    locale: PropType<EleLocale>;
    /** 表格全局配置 */
    table: PropType<TableGlobalConfig>;
    /** 消息提示全局配置 */
    message: PropType<MessageGlobalConfig>;
    /** 消息弹窗全局配置 */
    messageBox: PropType<Partial<MessageBoxOptions>>;
    /** license */
    license: StringConstructor;
    /** 高德地图key */
    mapKey: StringConstructor;
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
/**
 * 全局配置键名
 */
export declare const CONFIG_KEY: InjectionKey<ConfigProviderProps>;
