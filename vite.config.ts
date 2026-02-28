/**
 * 按需引入方式
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'node:path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { EleAdminResolver } from './components/utils/resolvers';

export default defineConfig({
  resolve: {
    alias: {
      'ele-admin-plus/es': resolve('components'),
      'ele-admin-plus': resolve('components'),
      '@/': resolve('src') + '/',
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    // 组件按需引入
    Components({
      dts: false,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        }),
        EleAdminResolver({
          importStyle: 'sass'
        })
      ]
    })
  ],
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
      'element-plus',
      'element-plus/es',
      'sortablejs',
      'vuedraggable',
      ...[
        'ElAffix',
        'ElAlert',
        'ElAside',
        'ElAutocomplete',
        'ElAvatar',
        'ElBacktop',
        'ElBadge',
        'ElBreadcrumb',
        'ElBreadcrumbItem',
        'ElButton',
        'ElButtonGroup',
        'ElCalendar',
        'ElCard',
        'ElCarousel',
        'ElCarouselItem',
        'ElCascader',
        'ElCascaderPanel',
        'ElCheckbox',
        'ElCheckboxButton',
        'ElCheckboxGroup',
        'ElCol',
        'ElCollapse',
        'ElCollapseItem',
        'ElCollapseTransition',
        'ElColorPicker',
        'ElContainer',
        'ElConfigProvider',
        'ElDatePicker',
        'ElDialog',
        'ElDivider',
        'ElDrawer',
        'ElDropdown',
        'ElDropdownItem',
        'ElDropdownMenu',
        'ElEmpty',
        'ElFooter',
        'ElForm',
        'ElFormItem',
        'ElHeader',
        'ElIcon',
        'ElImage',
        'ElImageViewer',
        'ElInput',
        'ElInputNumber',
        'ElLink',
        'ElMain',
        'ElMenu',
        'ElMenuItem',
        'ElMenuItemGroup',
        'ElOption',
        'ElOptionGroup',
        'ElPageHeader',
        'ElPagination',
        'ElPopconfirm',
        'ElPopper',
        'ElPopover',
        'ElProgress',
        'ElRadio',
        'ElRadioButton',
        'ElRadioGroup',
        'ElRate',
        'ElRow',
        'ElScrollbar',
        'ElSelect',
        'ElSlider',
        'ElStep',
        'ElSteps',
        'ElSubMenu',
        'ElSwitch',
        'ElTabPane',
        'ElTable',
        'ElTableColumn',
        'ElTabs',
        'ElTag',
        'ElText',
        'ElTimePicker',
        'ElTimeSelect',
        'ElTimeline',
        'ElTimelineItem',
        'ElTooltip',
        'ElTransfer',
        'ElTree',
        'ElTreeV2',
        'ElTreeSelect',
        'ElUpload',
        'ElSpace',
        'ElSkeleton',
        'ElSkeletonItem',
        'ElStatistic',
        'ElCheckTag',
        'ElDescriptions',
        'ElDescriptionsItem',
        'ElResult',
        'ElSelectV2',
        'ElWatermark'
      ].map(
        (k) =>
          `element-plus/es/components/${k
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .split(' ')
            .join('-')
            .toLowerCase()
            .substring('el-'.length)}/style/index`
      ),
      'element-plus/es/components/base/style/index',
      'element-plus/es/components/message/style/index',
      'element-plus/es/components/message-box/style/index',
      'element-plus/es/components/notification/style/index',
      'element-plus/es/components/loading/style/index',
      'element-plus/es/components/table-v2/style/index'
    ]
  }
});
