"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../../icons");
const EleDropdown = require("../../ele-dropdown/index");
const receiver = require("../../ele-config-provider/receiver");
const util = require("../util");
const EleTool = require("../../ele-tool/index");
const ToolColumn = require("./tool-column");
const ToolExport = require("./tool-export");
const ToolPrint = require("./tool-print");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "table-tools",
  props: {
    /** 工具按钮布局 */
    tools: {
      type: Array,
      required: true
    },
    /** 表格尺寸 */
    size: String,
    /** 表格列数据 */
    columns: Array,
    /** 是否开启列拖拽排序 */
    columnSortable: Boolean,
    /** 是否开启开关固定列 */
    columnFixed: Boolean,
    /** 是否最大化 */
    maximized: Boolean,
    /** 本地缓存的名称 */
    cacheKey: String,
    /** 国际化 */
    locale: Object,
    /** 表格选中数据 */
    selections: Array,
    /** 表格当前页数据 */
    pageData: Array,
    /** 单元格合并行列方法 */
    spanMethod: Function,
    /** 表格是否有表头 */
    tableHeader: Boolean,
    /** 是否显示合计行 */
    showSummary: Boolean,
    /** 合计行文本 */
    sumText: String,
    /** 合计行自定义方法 */
    summaryMethod: Function,
    /** 单元格样式 */
    cellStyle: [Object, Function],
    /** 单元格类名自定义 */
    cellClassName: [String, Function],
    /** 单元格样式 */
    headerCellStyle: [Object, Function],
    /** 单元格类名自定义 */
    headerCellClassName: [String, Function],
    /** 序号列起始索引 */
    pageIndex: Number,
    /** 树表字段名 */
    treeProps: Object,
    /** 表格请求数据方法 */
    fetch: Function,
    /** 导出配置 */
    exportConfig: {
      type: Object,
      required: true
    },
    /** 打印配置 */
    printConfig: {
      type: Object,
      required: true
    }
  },
  emits: {
    reload: () => true,
    "update:size": (_size) => true,
    "update:columns": (_columns, _tableColumns, _isReset) => true,
    "update:maximized": (_maximized) => true
  },
  setup(__props, { expose: __expose, emit: __emit }) {
    const ownSlots = ["default", "printTop", "printBottom"];
    const props = __props;
    const emit = __emit;
    const { lang } = receiver.useLocale("table", props);
    const toolExportRef = vue.ref(null);
    const toolPrintRef = vue.ref(null);
    const placement = vue.computed(() => props.maximized ? "bottom" : "top");
    const sizeDropdownItems = vue.computed(() => {
      return [
        {
          title: lang.value.sizeLarge,
          command: "large",
          icon: vue.markRaw(icons.SizeSlackOutlined)
        },
        {
          title: lang.value.sizeDefault,
          command: "default",
          icon: vue.markRaw(icons.SizeMiddleOutlined)
        },
        {
          title: lang.value.sizeSmall,
          command: "small",
          icon: vue.markRaw(icons.SizeCompactOutlined)
        }
      ];
    });
    const reload = () => {
      emit("reload");
    };
    const updateSize = (size) => {
      if (props.cacheKey) {
        localStorage.setItem(util.getSizeCacheKey(props.cacheKey), size);
      }
      emit("update:size", size);
    };
    const updateColumns = (columns, tableColumns, isReset) => {
      emit("update:columns", columns, tableColumns, isReset);
    };
    const toggleMaximized = () => {
      emit("update:maximized", !props.maximized);
    };
    const openExportModal = () => {
      if (toolExportRef.value) {
        toolExportRef.value.openModal();
      }
    };
    const openPrintModal = () => {
      if (toolPrintRef.value) {
        toolPrintRef.value.openModal();
      }
    };
    const printData = (params) => {
      if (toolPrintRef.value) {
        toolPrintRef.value.printData(params);
      }
    };
    const exportData = (params) => {
      if (toolExportRef.value) {
        toolExportRef.value.exportData(params);
      }
    };
    __expose({
      openPrintModal,
      printData,
      openExportModal,
      exportData
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createVNode(ToolExport, {
          ref_key: "toolExportRef",
          ref: toolExportRef,
          locale: vue.unref(lang),
          cacheKey: __props.cacheKey,
          modalProps: __props.exportConfig.modalProps,
          columns: __props.exportConfig.columns || __props.columns,
          selections: __props.selections,
          pageData: __props.pageData,
          datasource: __props.exportConfig.datasource,
          spanMethod: __props.spanMethod,
          tableHeader: __props.exportConfig.showHeader ?? __props.tableHeader,
          showSummary: __props.showSummary,
          sumText: __props.sumText,
          summaryMethod: __props.summaryMethod,
          pageIndex: __props.pageIndex,
          treeProps: __props.treeProps,
          fetch: __props.fetch,
          defaultFileName: __props.exportConfig.fileName,
          defaultDataType: __props.exportConfig.dataType,
          defaultShowFooter: __props.exportConfig.showFooter,
          defaultShowTreeIndex: __props.exportConfig.showTreeIndex,
          beforeExport: __props.exportConfig.beforeExport
        }, null, 8, ["locale", "cacheKey", "modalProps", "columns", "selections", "pageData", "datasource", "spanMethod", "tableHeader", "showSummary", "sumText", "summaryMethod", "pageIndex", "treeProps", "fetch", "defaultFileName", "defaultDataType", "defaultShowFooter", "defaultShowTreeIndex", "beforeExport"]),
        vue.createVNode(ToolPrint, {
          ref_key: "toolPrintRef",
          ref: toolPrintRef,
          locale: vue.unref(lang),
          cacheKey: __props.cacheKey,
          modalProps: __props.printConfig.modalProps,
          printerProps: __props.printConfig.printerProps,
          tableProps: __props.printConfig.tableProps,
          columns: __props.printConfig.columns || __props.columns,
          selections: __props.selections,
          pageData: __props.pageData,
          datasource: __props.printConfig.datasource,
          spanMethod: __props.spanMethod,
          tableHeader: __props.printConfig.showHeader ?? __props.tableHeader,
          showSummary: __props.showSummary,
          sumText: __props.sumText,
          summaryMethod: __props.summaryMethod,
          cellStyle: __props.cellStyle,
          cellClassName: __props.cellClassName,
          headerCellStyle: __props.headerCellStyle,
          headerCellClassName: __props.headerCellClassName,
          pageIndex: __props.pageIndex,
          treeProps: __props.treeProps,
          fetch: __props.fetch,
          defaultDataType: __props.printConfig.dataType,
          defaultShowFooter: __props.printConfig.showFooter,
          defaultShowTreeIndex: __props.printConfig.showTreeIndex,
          beforePrint: __props.printConfig.beforePrint
        }, vue.createSlots({ _: 2 }, [
          vue.renderList(Object.keys(_ctx.$slots), (name) => {
            return {
              name,
              fn: vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1032, ["locale", "cacheKey", "modalProps", "printerProps", "tableProps", "columns", "selections", "pageData", "datasource", "spanMethod", "tableHeader", "showSummary", "sumText", "summaryMethod", "cellStyle", "cellClassName", "headerCellStyle", "headerCellClassName", "pageIndex", "treeProps", "fetch", "defaultDataType", "defaultShowFooter", "defaultShowTreeIndex", "beforePrint"]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.tools, (tool, index) => {
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            tool === "reload" ? (vue.openBlock(), vue.createBlock(EleTool, {
              key: index + "-reload",
              placement: placement.value,
              title: vue.unref(lang).refresh,
              onClick: reload
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(icons.ReloadOutlined))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["placement", "title"])) : tool === "export" ? (vue.openBlock(), vue.createBlock(EleTool, {
              key: index + "-export",
              title: vue.unref(lang).export,
              placement: placement.value,
              clickHideTooltip: true,
              onClick: openExportModal
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElIcon), { style: { "transform": "scale(1.1)", "transform-origin": "bottom" } }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(icons.DownloadOutlined))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["title", "placement"])) : tool === "print" ? (vue.openBlock(), vue.createBlock(EleTool, {
              key: index + "-print",
              title: vue.unref(lang).print,
              placement: placement.value,
              clickHideTooltip: true,
              onClick: openPrintModal
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(icons.PrinterOutlined))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["title", "placement"])) : tool === "size" ? (vue.openBlock(), vue.createBlock(EleTool, {
              key: index + "-size",
              placement: placement.value,
              title: vue.unref(lang).sizes
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(EleDropdown, {
                  trigger: "click",
                  placement: "bottom",
                  validateEvent: false,
                  popperClass: "ele-tool-size-popper",
                  modelValue: __props.size,
                  items: sizeDropdownItems.value,
                  popperOptions: {
                    modifiers: [{ name: "offset", options: { offset: [0, 10] } }]
                  },
                  onCommand: updateSize
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(icons.ColumnHeightOutlined))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "items"])
              ]),
              _: 2
            }, 1032, ["placement", "title"])) : tool === "columns" ? (vue.openBlock(), vue.createBlock(ToolColumn, {
              key: index + "-columns",
              placement: placement.value,
              locale: vue.unref(lang),
              columns: __props.columns,
              sortable: __props.columnSortable,
              allowFixed: __props.columnFixed,
              cacheKey: __props.cacheKey,
              "onUpdate:columns": updateColumns
            }, null, 8, ["placement", "locale", "columns", "sortable", "allowFixed", "cacheKey"])) : tool === "maximized" ? (vue.openBlock(), vue.createBlock(EleTool, {
              key: index + "-maximized",
              placement: placement.value,
              title: vue.unref(lang).maximized,
              clickHideTooltip: true,
              onClick: toggleMaximized
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                  default: vue.withCtx(() => [
                    __props.maximized ? (vue.openBlock(), vue.createBlock(vue.unref(icons.FullscreenExitOutlined), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(icons.FullscreenOutlined), { key: 1 }))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["placement", "title"])) : tool && !ownSlots.includes(tool) && _ctx.$slots[tool] ? vue.renderSlot(_ctx.$slots, tool, {
              key: 6,
              pageIndex: __props.pageIndex,
              fetch: __props.fetch
            }) : vue.createCommentVNode("", true)
          ], 64);
        }), 256))
      ], 64);
    };
  }
});
module.exports = _sfc_main;
