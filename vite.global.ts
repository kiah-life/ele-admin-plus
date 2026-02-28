/**
 * 全局引入方式
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      'ele-admin-plus/es': resolve('components'),
      'ele-admin-plus': resolve('components'),
      '@/': resolve('src') + '/',
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      './as-needed': './global-import'
    }
  },
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  },
  optimizeDeps: {
    include: [
      'echarts/core',
      'echarts/charts',
      'echarts/renderers',
      'echarts/components',
      'vue-echarts',
      'echarts-wordcloud',
      'sortablejs',
      'vuedraggable'
    ]
  }
});
