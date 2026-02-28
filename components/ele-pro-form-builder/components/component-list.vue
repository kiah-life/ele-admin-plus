<!-- 组件库列表 -->
<template>
  <div class="ele-pro-form-builder-component-wrapper">
    <div
      v-for="(groupItem, index) in groupData"
      :key="index"
      class="ele-pro-form-builder-component-group"
    >
      <div
        class="ele-pro-form-builder-component-group-label"
        @click="handleLabelClick"
      >
        {{ groupItem.name }}
      </div>
      <VueDraggable
        itemKey="key"
        :sort="false"
        :group="sortableGroup"
        :disabled="!draggable"
        :setData="() => void 0"
        :clone="handleCloneItem"
        :modelValue="groupItem.items"
        class="ele-pro-form-builder-component-list"
      >
        <template #item="{ element }">
          <div
            class="ele-pro-form-builder-component-item"
            @click="handleItemClick(element)"
          >
            <div class="ele-pro-form-builder-component-item-body">
              <div class="ele-pro-form-builder-component-item-cover">
                <component v-if="element.cover" :is="element.cover" />
              </div>
            </div>
            <div class="ele-pro-form-builder-component-item-label">
              {{ element.name }}
            </div>
          </div>
        </template>
      </VueDraggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import VueDraggable from 'vuedraggable';
  import { sortableGroupName } from '../../ele-pro-form/util';
  import type {
    ProFormItemKey,
    ProFormItemProps,
    ProFormItemTypeData
  } from '../../ele-pro-form/types';
  import type {
    ComponentItem,
    ComponentGroup,
    UpdateItemsResult
  } from '../types';
  import { generateBuildFormItem } from './build-core';
  /** 拖拽排序配置 */
  const sortableGroup = { name: sortableGroupName, pull: 'clone', put: false };

  const props = defineProps<{
    /** 全部表单项 */
    formItems?: ProFormItemProps[];
    /** 要添加子级的父级表单项 id */
    parentFormItemId?: ProFormItemKey;
    /** 是否可拖拽 */
    draggable?: boolean;
    /** 组件库数据 */
    componentData?: ComponentGroup[];
    /** 高级表单组件类型数据 */
    itemTypeData?: ProFormItemTypeData[];
  }>();

  const emit = defineEmits<{
    (e: 'updateItems', result: UpdateItemsResult): void;
  }>();

  /** 组件库列表数据 */
  const groupData = computed<ComponentGroup[]>(() => {
    return (props.componentData || []).map((groupItem) => {
      return {
        ...groupItem,
        items: groupItem.items
          .filter((item) => !item.hide)
          .map((d) => ({
            ...d,
            key: `proFormBuilderComponent_${d.type}`
          }))
      };
    });
  });

  /** 拖拽时生成表单项数据 */
  const handleCloneItem = (original: ComponentItem) => {
    const item = generateBuildFormItem(
      original.type,
      props.formItems,
      props.componentData,
      props.itemTypeData
    );
    return item ?? original;
  };

  /** 添加表单项 */
  const handleAddItem = (componentType?: string) => {
    const item = generateBuildFormItem(
      componentType,
      props.formItems,
      props.componentData,
      props.itemTypeData
    );
    const result: UpdateItemsResult = {
      addItems: [{ item, parentItemId: props.parentFormItemId }],
      updateItems: [],
      deleteItemIds: []
    };
    emit('updateItems', result);
  };

  /** 点击添加表单项事件 */
  const handleItemClick = (item: ComponentItem) => {
    handleAddItem(item.type);
  };

  /** 点击分组标题事件 */
  const handleLabelClick = (e: MouseEvent) => {
    const el = (e.currentTarget as any)?.parentElement;
    el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
</script>
