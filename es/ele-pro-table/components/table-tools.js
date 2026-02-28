import { defineComponent, ref, computed, markRaw, openBlock, createElementBlock, Fragment, createVNode, unref, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps, createBlock, createCommentVNode } from "vue";
import { ElIcon } from "element-plus";
import { SizeSlackOutlined, SizeMiddleOutlined, SizeCompactOutlined, ReloadOutlined, DownloadOutlined, PrinterOutlined, ColumnHeightOutlined, FullscreenExitOutlined, FullscreenOutlined } from "../../icons";
import EleDropdown from "../../ele-dropdown/index";
import { useLocale } from "../../ele-config-provider/receiver";
import { getSizeCacheKey } from "../util";
import EleTool from "../../ele-tool/index";
import ToolColumn from "./tool-column";
import ToolExport from "./tool-export";
import ToolPrint from "./tool-print";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const { lang } = useLocale("table", props);
    const toolExportRef = ref(null);
    const toolPrintRef = ref(null);
    const placement = computed(() => props.maximized ? "bottom" : "top");
    const sizeDropdownItems = computed(() => {
      return [
        {
          title: lang.value.sizeLarge,
          command: "large",
          icon: markRaw(SizeSlackOutlined)
        },
        {
          title: lang.value.sizeDefault,
          command: "default",
          icon: markRaw(SizeMiddleOutlined)
        },
        {
          title: lang.value.sizeSmall,
          command: "small",
          icon: markRaw(SizeCompactOutlined)
        }
      ];
    });
    const reload = () => {
      emit("reload");
    };
    const updateSize = (size) => {
      if (props.cacheKey) {
        localStorage.setItem(getSizeCacheKey(props.cacheKey), size);
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
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(ToolExport, {
          ref_key: "toolExportRef",
          ref: toolExportRef,
          locale: unref(lang),
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
        createVNode(ToolPrint, {
          ref_key: "toolPrintRef",
          ref: toolPrintRef,
          locale: unref(lang),
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
        }, createSlots({ _: 2 }, [
          renderList(Object.keys(_ctx.$slots), (name) => {
            return {
              name,
              fn: withCtx((slotProps) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1032, ["locale", "cacheKey", "modalProps", "printerProps", "tableProps", "columns", "selections", "pageData", "datasource", "spanMethod", "tableHeader", "showSummary", "sumText", "summaryMethod", "cellStyle", "cellClassName", "headerCellStyle", "headerCellClassName", "pageIndex", "treeProps", "fetch", "defaultDataType", "defaultShowFooter", "defaultShowTreeIndex", "beforePrint"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tools, (tool, index) => {
          return openBlock(), createElementBlock(Fragment, null, [
            tool === "reload" ? (openBlock(), createBlock(EleTool, {
              key: index + "-reload",
              placement: placement.value,
              title: unref(lang).refresh,
              onClick: reload
            }, {
              default: withCtx(() => [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(ReloadOutlined))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["placement", "title"])) : tool === "export" ? (openBlock(), createBlock(EleTool, {
              key: index + "-export",
              title: unref(lang).export,
              placement: placement.value,
              clickHideTooltip: true,
              onClick: openExportModal
            }, {
              default: withCtx(() => [
                createVNode(unref(ElIcon), { style: { "transform": "scale(1.1)", "transform-origin": "bottom" } }, {
                  default: withCtx(() => [
                    createVNode(unref(DownloadOutlined))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["title", "placement"])) : tool === "print" ? (openBlock(), createBlock(EleTool, {
              key: index + "-print",
              title: unref(lang).print,
              placement: placement.value,
              clickHideTooltip: true,
              onClick: openPrintModal
            }, {
              default: withCtx(() => [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(PrinterOutlined))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["title", "placement"])) : tool === "size" ? (openBlock(), createBlock(EleTool, {
              key: index + "-size",
              placement: placement.value,
              title: unref(lang).sizes
            }, {
              default: withCtx(() => [
                createVNode(EleDropdown, {
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
                  default: withCtx(() => [
                    createVNode(unref(ElIcon), null, {
                      default: withCtx(() => [
                        createVNode(unref(ColumnHeightOutlined))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "items"])
              ]),
              _: 2
            }, 1032, ["placement", "title"])) : tool === "columns" ? (openBlock(), createBlock(ToolColumn, {
              key: index + "-columns",
              placement: placement.value,
              locale: unref(lang),
              columns: __props.columns,
              sortable: __props.columnSortable,
              allowFixed: __props.columnFixed,
              cacheKey: __props.cacheKey,
              "onUpdate:columns": updateColumns
            }, null, 8, ["placement", "locale", "columns", "sortable", "allowFixed", "cacheKey"])) : tool === "maximized" ? (openBlock(), createBlock(EleTool, {
              key: index + "-maximized",
              placement: placement.value,
              title: unref(lang).maximized,
              clickHideTooltip: true,
              onClick: toggleMaximized
            }, {
              default: withCtx(() => [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    __props.maximized ? (openBlock(), createBlock(unref(FullscreenExitOutlined), { key: 0 })) : (openBlock(), createBlock(unref(FullscreenOutlined), { key: 1 }))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["placement", "title"])) : tool && !ownSlots.includes(tool) && _ctx.$slots[tool] ? renderSlot(_ctx.$slots, tool, {
              key: 6,
              pageIndex: __props.pageIndex,
              fetch: __props.fetch
            }) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
