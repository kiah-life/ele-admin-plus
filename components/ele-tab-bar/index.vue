<!-- 标签栏 -->
<template>
  <div :class="['ele-tab-bar', { 'is-plain': type === 'plain' }]">
    <div
      v-for="item in items"
      :key="item.value"
      :style="itemStyle"
      :class="['ele-tab-item', { 'is-active': item.value === modelValue }]"
      @click="handleItemClick(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { TabBarItem } from './types';
  import { tabBarProps, tabBarEmits } from './props';

  defineOptions({ name: 'EleTabBar' });

  const props = defineProps(tabBarProps);

  const emit = defineEmits(tabBarEmits);

  /** 标签项点击事件 */
  const handleItemClick = (item: TabBarItem) => {
    if (props.modelValue !== item.value) {
      emit('update:modelValue', item.value);
    }
  };
</script>
