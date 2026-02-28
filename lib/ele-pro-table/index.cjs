"use strict";
const vue = require("vue");
const core = require("../utils/core");
const receiver = require("../ele-config-provider/receiver");
const EleLoading = require("../ele-loading/index");
const ElePagination = require("../ele-pagination/index");
const props$1 = require("../ele-data-table/props");
const util = require("../ele-data-table/util");
const EleDataTable = require("../ele-data-table/index");
const EleVirtualTable = require("../ele-virtual-table/index");
const EleToolbar = require("../ele-toolbar/index");
const TableTools = require("./components/table-tools");
const util$1 = require("./util");
const props = require("./props");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleProTable" },
  __name: "index",
  props: props.proTableProps,
  emits: props.proTableEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const ownSlots = ["default", "toolbar", "tools", "footer"];
    const toolsSlotExcludes = [...ownSlots, "empty", "append"];
    const tableSlotExcludes = [...ownSlots, "printTop", "printBottom"];
    const pageSlotExcludes = [...toolsSlotExcludes, "printTop", "printBottom"];
    const props2 = __props;
    const emit = __emit;
    const events = util.useEmits(emit);
    const methods = util.useMethods(() => getTableRef());
    const globalProps = receiver.useGlobalProps("table");
    const virtualTableEvents = {
      onEndEeached: (params) => {
        emit("endEeached", params);
      },
      onScroll: (params) => {
        emit("scroll", params);
      },
      onRowsRendered: (params) => {
        emit("rowsRendered", params);
      }
    };
    const tableState = {
      sorter: props2.defaultSort ?? {},
      filter: util$1.getDefaultFilter(props2.columns),
      where: props2.where ?? {}
    };
    const tableToolsRef = vue.ref(null);
    const tableViewRef = vue.ref(null);
    const tableData = vue.ref([]);
    const tablePage = vue.ref(
      util$1.getTablePage(props2.pagination, globalProps.value.pagination)
    );
    const tableLimit = vue.ref(
      util$1.getTableLimit(props2.pagination, globalProps.value.pagination)
    );
    const tableTotal = vue.ref(0);
    const tableLoading = vue.ref(props2.loading);
    const tableCols = vue.ref([]);
    const tableSize = vue.ref(
      util$1.getTableSize(props2.cacheKey, props2.size, globalProps.value.size)
    );
    const tableMaximized = vue.ref(false);
    const errorText = vue.ref("");
    const cacheData = vue.ref();
    const tableRowKey = vue.shallowRef(util$1.getRowKey(props2.rowKey));
    const tableIndex = vue.computed(() => {
      return ((tablePage.value ?? 1) - 1) * (tableLimit.value ?? 0) + 1;
    });
    const paginationProps = vue.computed(() => {
      return util$1.getPaginationProps(
        tableSize.value,
        props2.pagination,
        globalProps.value.pagination,
        {
          total: tableTotal.value,
          pageSize: tableLimit.value,
          currentPage: tablePage.value,
          hasNext: tableData.value.length >= tableLimit.value
        }
      );
    });
    const tableEmptyProps = vue.computed(() => {
      return util$1.mergeProps(
        props2.emptyProps,
        globalProps.value.emptyProps
      );
    });
    const isFunctionSource = vue.computed(() => {
      return typeof props2.datasource === "function";
    });
    const tableProps = vue.computed(() => {
      const isMaximized = tableMaximized.value && props2.maximizedHeight;
      const options = {
        ...core.pick(props2, props$1.dataTablePropKeys),
        height: isMaximized ? props2.maximizedHeight : props2.height,
        border: props2.border ?? globalProps.value.border ?? false,
        stripe: props2.stripe ?? globalProps.value.stripe ?? false,
        load: tableLoad,
        size: tableSize.value,
        data: tableData.value,
        columns: tableCols.value,
        cacheData: cacheData.value,
        errorText: errorText.value,
        pageIndex: tableIndex.value,
        emptyProps: tableEmptyProps.value,
        rowHeight: props2.virtual ? props2.rowHeight : void 0,
        rowKey: tableRowKey.value,
        style: props2.tableStyle,
        class: "ele-pro-table-view",
        ...events,
        onSelectionChange: handleSelectionChange,
        onSortChange: handleSortChange,
        onFilterChange: handleFilterChange,
        onCurrentChange: handleCurrentChange,
        onHeaderDragend: handleHeaderDragend
      };
      if (props2.virtual) {
        Object.assign(options, virtualTableEvents);
      }
      return options;
    });
    const toolNames = vue.computed(() => {
      const tools = props2.tools ?? globalProps.value.tools ?? true;
      if (tools === true) {
        return ["reload", "size", "columns", "maximized"];
      }
      return tools || [];
    });
    const tableToolbarProps = vue.computed(() => {
      return util$1.mergeProps(
        props2.toolbar,
        globalProps.value.toolbar
      );
    });
    const toolExportConfig = vue.computed(() => {
      const globalExportConfig = globalProps.value.exportConfig || {};
      const userExportConfig = props2.exportConfig || {};
      return {
        ...globalExportConfig,
        ...userExportConfig,
        modalProps: {
          ...globalExportConfig.modalProps || {},
          ...userExportConfig.modalProps || {}
        }
      };
    });
    const toolPrintConfig = vue.computed(() => {
      const globalPrintConfig = globalProps.value.printConfig || {};
      const userPrintConfig = props2.printConfig || {};
      return {
        ...globalPrintConfig,
        ...userPrintConfig,
        modalProps: {
          ...globalPrintConfig.modalProps || {},
          ...userPrintConfig.modalProps || {}
        },
        printerProps: {
          ...globalPrintConfig.printerProps || {},
          ...userPrintConfig.printerProps || {}
        },
        tableProps: {
          ...globalPrintConfig.tableProps || {},
          ...userPrintConfig.tableProps || {}
        }
      };
    });
    const loadingProps = vue.computed(() => {
      const zIndex = props2.maximizedIndex ?? globalProps.value.maximizedIndex;
      return {
        ...props2.loadingProps || {},
        loading: tableLoading.value,
        class: [
          "ele-pro-table",
          { "is-maximized": tableMaximized.value },
          { "is-border": tableProps.value.border }
        ],
        style: tableMaximized.value ? { zIndex } : void 0
      };
    });
    const reload = (option, parent, resolve) => {
      if (option) {
        if (option.page) {
          tablePage.value = option.page;
        }
        if (option.limit) {
          tableLimit.value = option.limit;
        }
        if (option.where) {
          tableState.where = option.where;
        }
        if (option.sorter) {
          tableState.sorter = option.sorter;
        }
        if (option.filter) {
          tableState.filter = option.filter;
        }
      }
      errorText.value = "";
      const sorter = tableState.sorter;
      if (!isFunctionSource.value) {
        const { data, page, total } = util$1.reloadData(
          props2.datasource,
          sorter,
          paginationProps.value ? tablePage.value : void 0,
          tableLimit.value
        );
        cacheData.value = props2.datasource;
        tableData.value = data;
        tablePage.value = page;
        tableTotal.value = total;
        handleDone({ data, page, total, response: props2.datasource });
        return;
      }
      if (!parent) {
        tableLoading.value = true;
      }
      const filter = tableState.filter;
      const orders = util$1.getRequestOrders(
        sorter,
        props2.request,
        globalProps.value.request
      );
      props2.datasource({
        page: tablePage.value,
        limit: tableLimit.value,
        pages: util$1.getRequestPages(
          tablePage.value,
          tableLimit.value,
          props2.request,
          globalProps.value.request
        ),
        where: Object.assign({}, tableState.where),
        orders,
        filters: util$1.getRequestFilters(filter),
        sorter,
        filter,
        parent
      }).then((response) => {
        const parseData = props2.parseData ?? globalProps.value.parseData;
        const result = parseData ? parseData(response) : response;
        const { data, total } = util$1.getResponseResult(
          result,
          props2.response,
          globalProps.value.response,
          props2.lazy,
          props2.treeProps
        );
        requestCallback(data, total, parent, result, resolve);
      }).catch((e) => {
        const errorMsg = e == null ? void 0 : e.message;
        requestCallback(
          errorMsg == null ? errorMsg : String(errorMsg),
          void 0,
          parent,
          e,
          resolve
        );
        resolve && console.error(e);
      });
    };
    const requestCallback = (data, total, parent, response, resolve) => {
      var _a, _b;
      if (data == null || !Array.isArray(data)) {
        if (resolve) {
          if (parent != null) {
            parent[((_a = props2.treeProps) == null ? void 0 : _a.children) || "children"] = [];
          }
          resolve([]);
        } else {
          tableData.value = [];
        }
        tableLoading.value = false;
        if (typeof data === "string" && data) {
          errorText.value = data;
          return;
        }
        errorText.value = "获取数据失败";
        console.error(
          "返回的数据格式与配置的不一致, 返回的数据:",
          response,
          "需要的格式:",
          util$1.getResponseName(globalProps.value.response, props2.response)
        );
        return;
      }
      if (resolve) {
        if (parent != null) {
          parent[((_b = props2.treeProps) == null ? void 0 : _b.children) || "children"] = data;
        }
        resolve(data);
      } else {
        if (util$1.isAutoAmend(props2.pagination, globalProps.value.pagination) && !data.length && total && "*" !== total && tablePage.value && tableLimit.value) {
          const maxPage = Math.ceil(total / tableLimit.value);
          if (maxPage && tablePage.value > maxPage) {
            tablePage.value = maxPage;
            reload();
            return;
          }
        }
        tableData.value = data;
        tableTotal.value = total || data.length;
      }
      tableLoading.value = false;
      const result = {
        data: tableData.value,
        page: tablePage.value,
        total: tableTotal.value,
        response
      };
      handleDone(result, parent);
    };
    const tableLoad = (row, treeNode, resolve) => {
      if (props2.load) {
        props2.load(row, treeNode, resolve);
        return;
      }
      reload(void 0, row, resolve);
    };
    const handleDone = (result, parent) => {
      vue.nextTick(() => {
        if (props2.current != null) {
          methods.setCurrentRowKey(core.getValue(props2.current, tableRowKey.value));
        }
        if (props2.selections != null && props2.selections.length) {
          methods.setSelectedRowKeys(
            util.getRowKeys(props2.selections, tableRowKey.value)
          );
        }
      });
      emit("done", result, parent);
    };
    const handleRefresh = () => {
      if (isFunctionSource.value) {
        reload();
        return;
      }
      emit("refresh");
    };
    const handleSizeChange = (size) => {
      tableSize.value = size;
      emit("sizeChange", size);
    };
    const handleColumnsChange = (columns, tableColumns, isReset) => {
      tableCols.value = columns;
      emit("columnsChange", columns, tableColumns, isReset);
    };
    const handleMaximizedChange = (maximized) => {
      tableMaximized.value = maximized;
      emit("maximizedChange", maximized);
    };
    const handlePageSizeChange = (limit) => {
      if (tableLimit.value !== limit) {
        tableLimit.value = limit;
        if (tableTotal.value !== "*") {
          const maxPage = Math.ceil(tableTotal.value / limit);
          if (maxPage && tablePage.value > maxPage) {
            tablePage.value = maxPage;
          }
        }
        reload();
      }
    };
    const handlePageCurrentChange = (page) => {
      if (tablePage.value !== page) {
        tablePage.value = page;
        reload();
      }
    };
    const handleSortChange = (sorter) => {
      if (props2.loadOnChanged) {
        tableState.sorter = sorter;
        reload();
      }
      events.onSortChange(sorter);
    };
    const handleFilterChange = (filter) => {
      if (props2.loadOnChanged) {
        tableState.filter = filter;
        reload();
      }
      events.onFilterChange(filter);
    };
    const handleHeaderDragend = (newWidth, oldWidth, column, event) => {
      util$1.cacheColWidth(newWidth, column, props2.cacheKey);
      events.onHeaderDragend(newWidth, oldWidth, column, event);
    };
    const handleCurrentChange = (currentRow, oldCurrentRow) => {
      updateCurrent(currentRow);
      events.onCurrentChange(currentRow, oldCurrentRow);
    };
    const handleSelectionChange = (selection) => {
      updateSelections(selection);
      events.onSelectionChange(selection);
    };
    const updateCurrent = (currentRow) => {
      if (currentRow !== props2.current) {
        emit("update:current", currentRow);
      }
    };
    const updateSelections = (selection) => {
      if (util.arrayIsChanged(selection, props2.selections)) {
        emit("update:selections", selection);
      }
    };
    const reloadTable = () => {
      methods.doLayout();
    };
    const getTableRef = () => {
      return tableViewRef.value;
    };
    const getData = () => {
      return tableData.value;
    };
    const setData = (data) => {
      tableData.value = data;
    };
    const goPageByRowKey = (key) => {
      if (!paginationProps.value || tableLimit.value == null || isFunctionSource.value) {
        return;
      }
      const rowKey = tableRowKey.value;
      const data = util$1.sortData(props2.datasource, tableState.sorter);
      const index = data.findIndex((d) => core.getValue(d, rowKey) === key);
      const page = Math.floor(index / tableLimit.value) + 1;
      if (tablePage.value !== page) {
        reload({ page });
      }
    };
    const fetch = (callback) => {
      const { sorter, filter } = tableState;
      const orders = util$1.getRequestOrders(
        sorter,
        props2.request,
        globalProps.value.request
      );
      callback({
        page: tablePage.value,
        limit: tableLimit.value,
        pages: util$1.getRequestPages(
          tablePage.value,
          tableLimit.value,
          props2.request,
          globalProps.value.request
        ),
        where: Object.assign({}, tableState.where),
        orders,
        filters: util$1.getRequestFilters(filter),
        sorter,
        filter
      });
    };
    const openPrintModal = () => {
      if (tableToolsRef.value) {
        tableToolsRef.value.openPrintModal();
      }
    };
    const printData = (params) => {
      if (tableToolsRef.value) {
        tableToolsRef.value.printData(params);
      }
    };
    const openExportModal = () => {
      if (tableToolsRef.value) {
        tableToolsRef.value.openExportModal();
      }
    };
    const exportData = (params) => {
      if (tableToolsRef.value) {
        tableToolsRef.value.exportData(params);
      }
    };
    vue.watch(
      () => props2.columns,
      (columns) => {
        if (columns) {
          tableCols.value = util$1.getInitCacheColumns(
            columns,
            props2.cacheKey,
            props2.columnSortable
          );
        } else if (tableCols.value.length) {
          tableCols.value = [];
        }
      },
      { immediate: true, deep: true }
    );
    vue.watch(
      () => props2.datasource,
      () => {
        reload();
      },
      { deep: true }
    );
    vue.watch(
      () => props2.loading,
      (loading) => {
        tableLoading.value = loading;
      }
    );
    vue.watch(
      () => props2.size,
      (size) => {
        tableSize.value = util$1.getTableSize(void 0, size, globalProps.value.size);
      }
    );
    vue.watch(
      () => props2.current,
      (current) => {
        methods.setCurrentRowKey(core.getValue(current, tableRowKey.value));
      }
    );
    vue.watch(
      () => props2.selections,
      (selections) => {
        methods.setSelectedRowKeys(util.getRowKeys(selections, tableRowKey.value));
      }
    );
    vue.watch(
      () => props2.rowKey,
      () => {
        tableRowKey.value = util$1.getRowKey(props2.rowKey);
      }
    );
    vue.watch(
      globalProps,
      (config) => {
        tableSize.value = util$1.getTableSize(props2.cacheKey, props2.size, config.size);
      },
      { deep: true }
    );
    vue.onMounted(() => {
      if (props2.loadOnCreated) {
        reload();
      }
    });
    __expose({
      ...methods,
      tableToolsRef,
      tableViewRef,
      tableData,
      tableProps,
      reload,
      reloadTable,
      getTableRef,
      getData,
      setData,
      goPageByRowKey,
      fetch,
      openPrintModal,
      printData,
      openExportModal,
      exportData
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleLoading, vue.normalizeProps(vue.guardReactiveProps(loadingProps.value)), {
        default: vue.withCtx(() => [
          tableToolbarProps.value ? (vue.openBlock(), vue.createBlock(EleToolbar, vue.normalizeProps(vue.mergeProps({ key: 0 }, tableToolbarProps.value === true ? {} : tableToolbarProps.value)), {
            tools: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "tools"),
              toolNames.value && toolNames.value.length ? (vue.openBlock(), vue.createBlock(TableTools, {
                key: 0,
                ref_key: "tableToolsRef",
                ref: tableToolsRef,
                tools: toolNames.value,
                size: tableSize.value,
                columns: _ctx.columns,
                columnSortable: _ctx.columnSortable,
                columnFixed: _ctx.columnFixed,
                maximized: tableMaximized.value,
                cacheKey: _ctx.cacheKey,
                locale: _ctx.locale,
                selections: _ctx.selections,
                pageData: tableData.value,
                spanMethod: _ctx.spanMethod,
                tableHeader: _ctx.showHeader,
                showSummary: _ctx.showSummary,
                sumText: _ctx.sumText,
                summaryMethod: _ctx.summaryMethod,
                cellStyle: _ctx.cellStyle,
                cellClassName: _ctx.cellClassName,
                headerCellStyle: _ctx.headerCellStyle,
                headerCellClassName: _ctx.headerCellClassName,
                pageIndex: tableIndex.value,
                treeProps: _ctx.treeProps,
                fetch,
                exportConfig: toolExportConfig.value,
                printConfig: toolPrintConfig.value,
                onReload: handleRefresh,
                "onUpdate:size": handleSizeChange,
                "onUpdate:columns": handleColumnsChange,
                "onUpdate:maximized": handleMaximizedChange
              }, vue.createSlots({ _: 2 }, [
                vue.renderList(Object.keys(_ctx.$slots).filter(
                  (k) => !toolsSlotExcludes.includes(k)
                ), (name) => {
                  return {
                    name,
                    fn: vue.withCtx((slotProps) => [
                      vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                    ])
                  };
                })
              ]), 1032, ["tools", "size", "columns", "columnSortable", "columnFixed", "maximized", "cacheKey", "locale", "selections", "pageData", "spanMethod", "tableHeader", "showSummary", "sumText", "summaryMethod", "cellStyle", "cellClassName", "headerCellStyle", "headerCellClassName", "pageIndex", "treeProps", "exportConfig", "printConfig"])) : vue.createCommentVNode("", true)
            ]),
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "toolbar")
            ]),
            _: 3
          }, 16)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default"),
          _ctx.virtual ? (vue.openBlock(), vue.createBlock(EleVirtualTable, vue.mergeProps({ key: 1 }, tableProps.value, {
            ref_key: "tableViewRef",
            ref: tableViewRef
          }), vue.createSlots({ _: 2 }, [
            vue.renderList(Object.keys(_ctx.$slots).filter(
              (k) => !tableSlotExcludes.includes(k)
            ), (name) => {
              return {
                name,
                fn: vue.withCtx((slotProps) => [
                  vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040)) : (vue.openBlock(), vue.createBlock(vue.unref(EleDataTable), vue.mergeProps({ key: 2 }, tableProps.value, {
            ref_key: "tableViewRef",
            ref: tableViewRef
          }), vue.createSlots({ _: 2 }, [
            vue.renderList(Object.keys(_ctx.$slots).filter(
              (k) => !tableSlotExcludes.includes(k)
            ), (name) => {
              return {
                name,
                fn: vue.withCtx((slotProps) => [
                  vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040)),
          paginationProps.value || _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 3,
            class: "ele-pro-table-footer",
            style: vue.normalizeStyle(_ctx.footerStyle)
          }, [
            vue.renderSlot(_ctx.$slots, "footer"),
            paginationProps.value && paginationProps.value.total ? (vue.openBlock(), vue.createBlock(ElePagination, vue.mergeProps({ key: 0 }, paginationProps.value, {
              "onUpdate:currentPage": handlePageCurrentChange,
              "onUpdate:pageSize": handlePageSizeChange
            }), vue.createSlots({ _: 2 }, [
              vue.renderList(Object.keys(_ctx.$slots).filter(
                (k) => !pageSlotExcludes.includes(k)
              ), (name) => {
                return {
                  name,
                  fn: vue.withCtx((slotProps) => [
                    vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                  ])
                };
              })
            ]), 1040)) : vue.createCommentVNode("", true)
          ], 4)) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 16);
    };
  }
});
module.exports = _sfc_main;
