import { get as getValue, set as setValue, merge as mergeValue } from 'lodash-es';
import { ProFormItemProps, ProFormItemTypeData } from './types';

export { sortableGroupName, ChildrenRender } from './components/render-util';
export { setValue, getValue, mergeValue };
/**
 * 判断表单项是否是容器类型
 * @param item 表单项
 * @param itemTypeData 高级表单组件类型数据
 */
export declare function isContainerType(item: ProFormItemProps, itemTypeData?: ProFormItemTypeData[]): boolean;
/**
 * 获取表单数据初始值
 * @param items 表单项数据
 * @param itemTypeData 高级表单组件类型数据
 */
export declare function getFormInitValue(items?: ProFormItemProps[], itemTypeData?: ProFormItemTypeData[]): Record<string, any>;
