<template>
  <div
    :class="[
      'ele-pro-form-builder-item-wrapper',
      { 'is-div-type': item.type === 'div' },
      { 'is-active': activeItemKey != null && activeItemKey === item.key }
    ]"
    @click.stop="handleItemBuilderWrapperClick"
  >
    <slot></slot>
    <div class="ele-pro-form-builder-item-tool-wrapper">
      <div
        :class="[
          'ele-pro-form-builder-item-handle',
          { 'is-disabled': !handle }
        ]"
      >
        <ElIcon v-if="handle" class="ele-pro-form-builder-item-handle-icon">
          <DragOutlined />
        </ElIcon>
        <slot
          name="builderItemHandleContent"
          :item="item"
          :activeItemKey="activeItemKey"
        >
          <div class="ele-pro-form-builder-item-handle-content">
            {{ item.type }}
          </div>
        </slot>
      </div>
      <div class="ele-pro-form-builder-item-tools">
        <slot
          name="builderItemTools"
          :item="item"
          :activeItemKey="activeItemKey"
        ></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ElIcon } from 'element-plus';
  import { DragOutlined } from '../../icons';
  import type { ProFormItemProps, ProFormItemKey } from '../types';

  const props = defineProps<{
    /** 表单项 */
    item: ProFormItemProps;
    /** 编辑模式选中的表单项 */
    activeItemKey?: ProFormItemKey;
    /** 是否需要拖拽手柄 */
    handle?: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'update:activeItemKey', activeKey?: ProFormItemKey): void;
  }>();

  /** 表单项构建容器点击事件 */
  const handleItemBuilderWrapperClick = () => {
    emit('update:activeItemKey', props.item.key);
  };
</script>
