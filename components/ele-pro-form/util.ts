import {
  get as getValue,
  set as setValue,
  merge as mergeValue
} from 'lodash-es';
import { eachTree } from '../utils/core';
import type { ProFormItemProps, ProFormItemTypeData } from './types';
import { defaultItemTypeData } from './components/item-type-data';
export { sortableGroupName, ChildrenRender } from './components/render-util';
export { setValue, getValue, mergeValue };

/**
 * 判断表单项是否是容器类型
 * @param item 表单项
 * @param itemTypeData 高级表单组件类型数据
 */
export function isContainerType(
  item: ProFormItemProps,
  itemTypeData?: ProFormItemTypeData[]
) {
  const typeData = item.type
    ? [...(itemTypeData || []), ...defaultItemTypeData].find(
        (d) => d.type === item.type
      )
    : void 0;
  return (
    typeData?.isContainer ||
    item.itemType === 'container' ||
    item.itemType === 'view'
  );
}

/**
 * 获取表单数据初始值
 * @param items 表单项数据
 * @param itemTypeData 高级表单组件类型数据
 */
export function getFormInitValue(
  items?: ProFormItemProps[],
  itemTypeData?: ProFormItemTypeData[]
) {
  const init: Record<string, any> = {};
  eachTree(items, (item) => {
    // 获取自定义初始值
    if (item.initValue != null && item.initValue !== '' && item.prop) {
      setValue(init, item.prop, item.initValue);
      return;
    }
    if (item.type && item.prop) {
      // 选项卡默认选中第一个
      if ('tabs' === item.type) {
        const active = item.props?.modelValue ?? item.children?.[0]?.prop;
        setValue(init, item.prop, active);
        return;
      }
      // 折叠面板默认展开第一个
      if ('collapse' === item.type) {
        const active =
          item.props?.modelValue ??
          (item.props?.accordion
            ? (item.children?.[0]?.props?.name ?? item.children?.[0]?.prop)
            : []);
        setValue(init, item.prop, active);
        return;
      }
      // 范围滑块设置最大最小值
      if ('sliderRange' === item.type) {
        setValue(init, item.prop, [
          item.props?.min ?? 0,
          item.props?.max ?? 100
        ]);
        return;
      }
    }
    // 展示类型组件和容器类型组件不设置默认值
    if (isContainerType(item, itemTypeData) || !item.prop) {
      return;
    }
    if (typeof getValue(init, item.prop) === 'undefined') {
      setValue(init, item.prop, void 0);
    }
  });
  return init;
}
