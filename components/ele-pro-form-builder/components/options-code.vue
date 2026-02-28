<!-- 数据编辑代码模式 -->
<template>
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
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import type { UserComponent } from '../../ele-app/types';
  import { codeStringPrefix } from '../../ele-pro-form/components/render-util';
  import CodeEditer from './code-editer.vue';

  const props = defineProps<{
    /** 选项数据代码 */
    data?: Array<any> | string;
    /** 顶部提示内容 */
    codeTips?: string;
    /** 默认提示示例代码 */
    codePlaceholder?: string;
    /** 代码编辑器组件 */
    codeEditerComponent?: UserComponent;
  }>();

  /** 代码内容 */
  const codeContent = ref('');

  /** 获取数据结果 */
  const getResult = (): string | undefined => {
    const code = codeContent.value;
    if (code == null || !code) {
      return;
    }
    return `${codeStringPrefix}${code}`;
  };

  /** 解析数据 */
  onMounted(() => {
    if (props.data == null || typeof props.data !== 'string') {
      codeContent.value = props.codePlaceholder ?? '';
      return;
    }
    const data = props.data.trim();
    if (data.startsWith(codeStringPrefix)) {
      codeContent.value = data.slice(codeStringPrefix.length);
      return;
    }
    codeContent.value = (data || props.codePlaceholder) ?? '';
  });

  defineExpose({
    getResult
  });
</script>
