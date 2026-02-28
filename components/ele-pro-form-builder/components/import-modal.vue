<!-- 导入导出弹窗 -->
<template>
  <EleModal
    :width="800"
    :maxable="true"
    position="center"
    title="表单配置JSON"
    :modelValue="modelValue"
    :closeOnClickModal="false"
    :destroyOnClose="true"
    :bodyStyle="{
      height: '520px',
      minHeight: '100%',
      maxHeight: '100%',
      padding: isImport ? '8px 16px 8px 16px' : '8px 16px 12px 16px'
    }"
    @update:modelValue="handleUpdateModelValue"
  >
    <component :is="jsonEditerComponent || CodeEditer" v-model="jsonContent" />
    <template v-if="isImport" #footer>
      <ElButton size="default" @click="handleCloseModal">取消</ElButton>
      <ElButton type="primary" size="default" @click="handleImport">
        导入
      </ElButton>
    </template>
  </EleModal>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { ElButton } from 'element-plus';
  import { mapTree } from '../../utils/core';
  import type { UserComponent } from '../../ele-app/types';
  import EleModal from '../../ele-modal/index.vue';
  import {
    getItemTypeName,
    getComponentLegacyProps
  } from '../../ele-pro-form/components/render-util';
  import type { ProFormItemProps } from '../../ele-pro-form/types';
  import type { TemplateFormConfig } from '../types';
  import { itemsGenerateNewKey } from './build-util';
  import CodeEditer from './code-editer.vue';

  const props = defineProps<{
    /** 弹窗是否打开 */
    modelValue?: boolean;
    /** 表单配置数据 */
    config?: TemplateFormConfig;
    /** 是否是导入 */
    isImport?: boolean;
    /** JSON 编辑器组件 */
    jsonEditerComponent?: UserComponent;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', visible?: boolean): void;
    (e: 'importData', data: TemplateFormConfig): void;
  }>();

  /** JSON 内容 */
  const jsonContent = ref('');

  /** 更新弹窗打开状态 */
  const handleUpdateModelValue = (visible?: boolean) => {
    emit('update:modelValue', visible);
  };

  /** 导入 */
  const handleImportData = (data: TemplateFormConfig) => {
    emit('importData', data);
  };

  /** 关闭弹窗 */
  const handleCloseModal = () => {
    handleUpdateModelValue(false);
  };

  /** 兼容旧版本的配置 */
  const checkLegacyItems = (items?: ProFormItemProps[]) => {
    return mapTree(items, (item) => {
      const legacyProps = getComponentLegacyProps(item);
      return {
        ...item,
        type: getItemTypeName(item),
        props: { ...legacyProps, ...(item.props || {}) },
        options: void 0
      };
    });
  };

  /** 导入按钮点击事件 */
  const handleImport = () => {
    if (!jsonContent.value) {
      return;
    }
    handleCloseModal();
    try {
      const result: TemplateFormConfig = JSON.parse(jsonContent.value);
      // 兼容单个导入
      if (result && Array.isArray(result)) {
        const config = JSON.parse(JSON.stringify(props.config));
        itemsGenerateNewKey(result as any, config.items, false);
        result.forEach((item) => {
          config.items.push(item);
        });
        config.items = checkLegacyItems(config.items);
        handleImportData(config);
        return;
      }
      if (
        result &&
        typeof result === 'object' &&
        (result as any).prop &&
        result.items == null
      ) {
        const config = JSON.parse(JSON.stringify(props.config));
        itemsGenerateNewKey(result as any, config.items, false);
        config.items.push(result);
        config.items = checkLegacyItems(config.items);
        handleImportData(config);
        return;
      }
      if (result) {
        itemsGenerateNewKey(result.items, [], false);
        result.items = checkLegacyItems(result.items);
        handleImportData(result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  /** 监听弹窗打开 */
  watch(
    () => props.modelValue,
    (visible) => {
      if (visible && !props.isImport) {
        jsonContent.value = JSON.stringify(props.config || {}, void 0, 2);
      } else {
        jsonContent.value = '';
      }
    }
  );
</script>
