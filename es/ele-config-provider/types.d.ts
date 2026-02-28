import type { ComputedRef } from 'vue';
import type { EleProTableProps } from '../ele-app/plus';
import type { MessageOptions } from '../utils/message';
import type { TableLocale } from '../ele-pro-table/types';
import type { FileListLocale } from '../ele-file-list/types';
import type { CropperLocale } from '../ele-cropper/types';
import type { MapLocale } from '../ele-map-picker/types';
import type { UploadLocale } from '../ele-upload-list/types';
import type { TourLocale } from '../ele-tour/types';
import type { CopyableLocale } from '../ele-copyable/types';

/**
 * 全局配置
 */
export interface GlobalProvide {
  /** 国际化 */
  locale?: EleLocale;
  /** 表格配置 */
  table?: TableGlobalConfig;
  /** 地图密钥 */
  mapKey?: string;
  /** 授权码 */
  license?: string;
}

/**
 * 表格全局配置
 */
export type TableGlobalConfig = Partial<
  Pick<
    EleProTableProps,
    | 'stripe'
    | 'border'
    | 'request'
    | 'response'
    | 'parseData'
    | 'size'
    | 'tools'
    | 'maximizedIndex'
    | 'pagination'
    | 'emptyProps'
    | 'toolbar'
    | 'exportConfig'
    | 'printConfig'
  >
>;

/**
 * 消息提示全局配置
 */
export type MessageGlobalConfig = Partial<
  Pick<
    MessageOptions,
    | 'plain'
    | 'duration'
    | 'showClose'
    | 'center'
    | 'offset'
    | 'appendTo'
    | 'grouping'
    | 'original'
    | 'mask'
    | 'centered'
    | 'inner'
  >
>;

/**
 * 国际化
 */
export interface EleLocale {
  /** 图片裁剪 */
  cropper: CropperLocale;
  /** 文件列表 */
  fileList: FileListLocale;
  /** 地图选择 */
  map: MapLocale;
  /** 高级表格 */
  table: TableLocale;
  /** 漫游式引导 */
  tour: TourLocale;
  /** 文件上传 */
  upload: UploadLocale;
  /** 文本复制 */
  copyable: CopyableLocale;
}

/**
 * 获取国际化方法返回结果
 */
export interface UseLocaleResult<T> {
  /** 语言 */
  lang: ComputedRef<T>;
  /** 全局配置 */
  globalConfig: GlobalProvide;
}

/**
 * 带国际化的组件属性
 */
export interface LocaleProps<T> extends Record<keyof any, any> {
  locale?: Partial<T>;
}
