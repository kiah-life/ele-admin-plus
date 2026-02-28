import { MultipleValue, SelectedItem } from '../ele-basic-select/types';
import { TreeData } from './types';

/**
 * 获取平铺后的数据值和数据
 * @param data 数据
 * @param valueKey 数据值字段名
 * @param childrenKey 子级字段名
 */
export declare function getKeysAndList(data: TreeData | undefined, valueKey: string, childrenKey: string): [MultipleValue, TreeData];
/**
 * 获取普通结构的多选选中标签
 * @param data 树数据
 * @param checkedKeys 多选选中值
 * @param valueKey 值键名
 * @param labelKey 名称键名
 * @param childrenKey 子级数据键名
 * @param cacheData 缓存的数据
 * @param checkedData 树选中的数据
 */
export declare function getNormalSelectedItems(data: TreeData | undefined, checkedKeys: MultipleValue | null | undefined, valueKey: string, labelKey: string, childrenKey: string, cacheData?: TreeData, checkedData?: TreeData): SelectedItem[];
/**
 * 获取树结构的多选选中标签
 * @param data 树数据
 * @param checkedKeys 多选选中值
 * @param valueKey 值键名
 * @param labelKey 名称键名
 * @param childrenKey 子级数据键名
 * @param showParent 只显示父级(否则只显示子级)
 */
export declare function getTreeSelectedItems(data: TreeData | undefined, checkedKeys: MultipleValue | null | undefined, valueKey: string, labelKey: string, childrenKey: string, showParent: boolean, hide?: boolean): SelectedItem[];
/**
 * 检查并补充多选选中标签
 * @param selected 标签数据
 * @param checkedKeys 多选选中值
 * @param valueKey 值键名
 * @param labelKey 名称键名
 * @param cacheData 缓存的数据
 */
export declare function checkSelectedItems(selected: SelectedItem[], checkedKeys: MultipleValue | null | undefined, valueKey: string, labelKey: string, cacheData?: TreeData): SelectedItem[];
/**
 * 判断是否全选
 * @param data 数据
 * @param checkedKeys 选中值
 * @param valueKey 值键名
 * @param childrenKey 子级数据键名
 * @param disabledKey 禁用键名
 */
export declare function isCheckAll(data: TreeData | null | undefined, checkedKeys: MultipleValue | null | undefined, valueKey: string, childrenKey: string, disabledKey: string): any;
/**
 * 获取选中值
 * @param keys 全部选中节点值
 * @param selected 选中的标签数据
 * @param checkedValueStrategy 多选值绑定策略
 */
export declare function getModelValue(keys: MultipleValue, selected: SelectedItem[], checkedValueStrategy?: boolean): MultipleValue;
