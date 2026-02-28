<!-- 显示条件编辑弹窗 -->
<template>
  <ElButton size="small" :style="{ width: '100%' }" @click="openModal">
    {{ title }}
  </ElButton>
  <EleModal
    :width="800"
    :maxable="true"
    position="center"
    :title="title"
    v-model="visible"
    :closeOnClickModal="false"
    :destroyOnClose="true"
    :bodyStyle="{
      height: '520px',
      minHeight: '100%',
      maxHeight: '100%',
      padding: '8px 16px'
    }"
  >
    <div class="ele-pro-form-builder-code-edit-wrapper">
      <div v-if="codeTips" class="ele-pro-form-builder-code-edit-header">
        {{ codeTips }}
      </div>
      <div class="ele-pro-form-builder-code-edit-body">
        <component
          :is="codeEditerComponent || CodeEditer"
          v-model="codeContent"
        />
      </div>
    </div>
    <template #footer>
      <ElButton size="default" @click="handleCancel">取消</ElButton>
      <ElButton type="primary" size="default" @click="handleSave">
        保存
      </ElButton>
    </template>
  </EleModal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElButton } from 'element-plus';
  import type { UserComponent } from '../../ele-app/types';
  import EleModal from '../../ele-modal/index.vue';
  import CodeEditer from './code-editer.vue';

  const props = defineProps<{
    /** 数据 */
    modelValue?: string;
    /** 弹窗标题 */
    title?: string;
    /** 顶部提示内容 */
    codeTips?: string;
    /** 代码编辑器组件 */
    codeEditerComponent?: UserComponent;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', data?: string): void;
  }>();

  /** 弹窗是否打开 */
  const visible = ref(false);

  /** 内容 */
  const codeContent = ref('');

  /** 打开弹窗 */
  const openModal = () => {
    codeContent.value = props.modelValue ?? '';
    visible.value = true;
  };

  /** 关闭弹窗 */
  const handleCancel = () => {
    visible.value = false;
    codeContent.value = '';
  };

  /** 保存编辑 */
  const handleSave = () => {
    const result = codeContent.value;
    handleCancel();
    emit('update:modelValue', result === '' ? void 0 : result);
  };
</script>
