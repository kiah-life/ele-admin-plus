import { defineComponent, ref, shallowRef, computed, watch, onMounted, openBlock, createBlock, normalizeProps, guardReactiveProps, withCtx, mergeProps as mergeProps$1, renderSlot, createSlots, renderList, createCommentVNode, unref, createElementBlock, normalizeStyle, nextTick } from "vue";
import { pick, getValue } from "../utils/core";
import { useGlobalProps } from "../ele-config-provider/receiver";
import EleLoading from "../ele-loading/index";
import ElePagination from "../ele-pagination/index";
import { dataTablePropKeys } from "../ele-data-table/props";
import { useEmits, useMethods, arrayIsChanged, getRowKeys } from "../ele-data-table/util";
import EleDataTable from "../ele-data-table/index";
import EleVirtualTable from "../ele-virtual-table/index";
import EleToolbar from "../ele-toolbar/index";
import TableTools from "./components/table-tools";
import { getDefaultFilter, getTablePage, getTableLimit, getTableSize, getRowKey, getPaginationProps, mergeProps, cacheColWidth, getInitCacheColumns, reloadData, getRequestOrders, getRequestPages, getRequestFilters, getResponseResult, getResponseName, isAutoAmend, sortData } from "./util";
import { proTableProps, proTableEmits } from "./props";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleProTable" },
  __name: "index",
  props: proTableProps,
  emits: proTableEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const ownSlots = ["default", "toolbar", "tools", "footer"];
    const toolsSlotExcludes = [...ownSlots, "empty", "append"];
    const tableSlotExcludes = [...ownSlots, "printTop", "printBottom"];
    const pageSlotExcludes = [...toolsSlotExcludes, "printTop", "printBottom"];
    const props = __props;
    const emit = __emit;
    const events = useEmits(emit);
    const methods = useMethods(() => getTableRef());
    const globalProps = useGlobalProps("table");
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
      sorter: props.defaultSort ?? {},
      filter: getDefaultFilter(props.columns),
      where: props.where ?? {}
    };
    const tableToolsRef = ref(null);
    const tableViewRef = ref(null);
    const tableData = ref([]);
    const tablePage = ref(
      getTablePage(props.pagination, globalProps.value.pagination)
    );
    const tableLimit = ref(
      getTableLimit(props.pagination, globalProps.value.pagination)
    );
    const tableTotal = ref(0);
    const tableLoading = ref(props.loading);
    const tableCols = ref([]);
    const tableSize = ref(
      getTableSize(props.cacheKey, props.size, globalProps.value.size)
    );
    const tableMaximized = ref(false);
    const errorText = ref("");
    const cacheData = ref();
    const tableRowKey = shallowRef(getRowKey(props.rowKey));
    const tableIndex = computed(() => {
      return ((tablePage.value ?? 1) - 1) * (tableLimit.value ?? 0) + 1;
    });
    const paginationProps = computed(() => {
      return getPaginationProps(
        tableSize.value,
        props.pagination,
        globalProps.value.pagination,
        {
          total: tableTotal.value,
          pageSize: tableLimit.value,
          currentPage: tablePage.value,
          hasNext: tableData.value.length >= tableLimit.value
        }
      );
    });
    const tableEmptyProps = computed(() => {
      return mergeProps(
        props.emptyProps,
        globalProps.value.emptyProps
      );
    });
    const isFunctionSource = computed(() => {
      return typeof props.datasource === "function";
    });
    const tableProps = computed(() => {
      const isMaximized = tableMaximized.value && props.maximizedHeight;
      const options = {
        ...pick(props, dataTablePropKeys),
        height: isMaximized ? props.maximizedHeight : props.height,
        border: props.border ?? globalProps.value.border ?? false,
        stripe: props.stripe ?? globalProps.value.stripe ?? false,
        load: tableLoad,
        size: tableSize.value,
        data: tableData.value,
        columns: tableCols.value,
        cacheData: cacheData.value,
        errorText: errorText.value,
        pageIndex: tableIndex.value,
        emptyProps: tableEmptyProps.value,
        rowHeight: props.virtual ? props.rowHeight : void 0,
        rowKey: tableRowKey.value,
        style: props.tableStyle,
        class: "ele-pro-table-view",
        ...events,
        onSelectionChange: handleSelectionChange,
        onSortChange: handleSortChange,
        onFilterChange: handleFilterChange,
        onCurrentChange: handleCurrentChange,
        onHeaderDragend: handleHeaderDragend
      };
      if (props.virtual) {
        Object.assign(options, virtualTableEvents);
      }
      return options;
    });
    const toolNames = computed(() => {
      const tools = props.tools ?? globalProps.value.tools ?? true;
      if (tools === true) {
        return ["reload", "size", "columns", "maximized"];
      }
      return tools || [];
    });
    const tableToolbarProps = computed(() => {
      return mergeProps(
        props.toolbar,
        globalProps.value.toolbar
      );
    });
    const toolExportConfig = computed(() => {
      const globalExportConfig = globalProps.value.exportConfig || {};
      const userExportConfig = props.exportConfig || {};
      return {
        ...globalExportConfig,
        ...userExportConfig,
        modalProps: {
          ...globalExportConfig.modalProps || {},
          ...userExportConfig.modalProps || {}
        }
      };
    });
    const toolPrintConfig = computed(() => {
      const globalPrintConfig = globalProps.value.printConfig || {};
      const userPrintConfig = props.printConfig || {};
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
    const loadingProps = computed(() => {
      const zIndex = props.maximizedIndex ?? globalProps.value.maximizedIndex;
      return {
        ...props.loadingProps || {},
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
        const { data, page, total } = reloadData(
          props.datasource,
          sorter,
          paginationProps.value ? tablePage.value : void 0,
          tableLimit.value
        );
        cacheData.value = props.datasource;
        tableData.value = data;
        tablePage.value = page;
        tableTotal.value = total;
        handleDone({ data, page, total, response: props.datasource });
        return;
      }
      if (!parent) {
        tableLoading.value = true;
      }
      const filter = tableState.filter;
      const orders = getRequestOrders(
        sorter,
        props.request,
        globalProps.value.request
      );
      props.datasource({
        page: tablePage.value,
        limit: tableLimit.value,
        pages: getRequestPages(
          tablePage.value,
          tableLimit.value,
          props.request,
          globalProps.value.request
        ),
        where: Object.assign({}, tableState.where),
        orders,
        filters: getRequestFilters(filter),
        sorter,
        filter,
        parent
      }).then((response) => {
        const parseData = props.parseData ?? globalProps.value.parseData;
        const result = parseData ? parseData(response) : response;
        const { data, total } = getResponseResult(
          result,
          props.response,
          globalProps.value.response,
          props.lazy,
          props.treeProps
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
            parent[((_a = props.treeProps) == null ? void 0 : _a.children) || "children"] = [];
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
          getResponseName(globalProps.value.response, props.response)
        );
        return;
      }
      if (resolve) {
        if (parent != null) {
          parent[((_b = props.treeProps) == null ? void 0 : _b.children) || "children"] = data;
        }
        resolve(data);
      } else {
        if (isAutoAmend(props.pagination, globalProps.value.pagination) && !data.length && total && "*" !== total && tablePage.value && tableLimit.value) {
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
      if (props.load) {
        props.load(row, treeNode, resolve);
        return;
      }
      reload(void 0, row, resolve);
    };
    const handleDone = (result, parent) => {
      nextTick(() => {
        if (props.current != null) {
          methods.setCurrentRowKey(getValue(props.current, tableRowKey.value));
        }
        if (props.selections != null && props.selections.length) {
          methods.setSelectedRowKeys(
            getRowKeys(props.selections, tableRowKey.value)
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
      if (props.loadOnChanged) {
        tableState.sorter = sorter;
        reload();
      }
      events.onSortChange(sorter);
    };
    const handleFilterChange = (filter) => {
      if (props.loadOnChanged) {
        tableState.filter = filter;
        reload();
      }
      events.onFilterChange(filter);
    };
    const handleHeaderDragend = (newWidth, oldWidth, column, event) => {
      cacheColWidth(newWidth, column, props.cacheKey);
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
      if (currentRow !== props.current) {
        emit("update:current", currentRow);
      }
    };
    const updateSelections = (selection) => {
      if (arrayIsChanged(selection, props.selections)) {
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
      const data = sortData(props.datasource, tableState.sorter);
      const index = data.findIndex((d) => getValue(d, rowKey) === key);
      const page = Math.floor(index / tableLimit.value) + 1;
      if (tablePage.value !== page) {
        reload({ page });
      }
    };
    const fetch = (callback) => {
      const { sorter, filter } = tableState;
      const orders = getRequestOrders(
        sorter,
        props.request,
        globalProps.value.request
      );
      callback({
        page: tablePage.value,
        limit: tableLimit.value,
        pages: getRequestPages(
          tablePage.value,
          tableLimit.value,
          props.request,
          globalProps.value.request
        ),
        where: Object.assign({}, tableState.where),
        orders,
        filters: getRequestFilters(filter),
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
    watch(
      () => props.columns,
      (columns) => {
        if (columns) {
          tableCols.value = getInitCacheColumns(
            columns,
            props.cacheKey,
            props.columnSortable
          );
        } else if (tableCols.value.length) {
          tableCols.value = [];
        }
      },
      { immediate: true, deep: true }
    );
    watch(
      () => props.datasource,
      () => {
        reload();
      },
      { deep: true }
    );
    watch(
      () => props.loading,
      (loading) => {
        tableLoading.value = loading;
      }
    );
    watch(
      () => props.size,
      (size) => {
        tableSize.value = getTableSize(void 0, size, globalProps.value.size);
      }
    );
    watch(
      () => props.current,
      (current) => {
        methods.setCurrentRowKey(getValue(current, tableRowKey.value));
      }
    );
    watch(
      () => props.selections,
      (selections) => {
        methods.setSelectedRowKeys(getRowKeys(selections, tableRowKey.value));
      }
    );
    watch(
      () => props.rowKey,
      () => {
        tableRowKey.value = getRowKey(props.rowKey);
      }
    );
    watch(
      globalProps,
      (config) => {
        tableSize.value = getTableSize(props.cacheKey, props.size, config.size);
      },
      { deep: true }
    );
    onMounted(() => {
      if (props.loadOnCreated) {
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
      return openBlock(), createBlock(EleLoading, normalizeProps(guardReactiveProps(loadingProps.value)), {
        default: withCtx(() => [
          tableToolbarProps.value ? (openBlock(), createBlock(EleToolbar, normalizeProps(mergeProps$1({ key: 0 }, tableToolbarProps.value === true ? {} : tableToolbarProps.value)), {
            tools: withCtx(() => [
              renderSlot(_ctx.$slots, "tools"),
              toolNames.value && toolNames.value.length ? (openBlock(), createBlock(TableTools, {
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
              }, createSlots({ _: 2 }, [
                renderList(Object.keys(_ctx.$slots).filter(
                  (k) => !toolsSlotExcludes.includes(k)
                ), (name) => {
                  return {
                    name,
                    fn: withCtx((slotProps) => [
                      renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                    ])
                  };
                })
              ]), 1032, ["tools", "size", "columns", "columnSortable", "columnFixed", "maximized", "cacheKey", "locale", "selections", "pageData", "spanMethod", "tableHeader", "showSummary", "sumText", "summaryMethod", "cellStyle", "cellClassName", "headerCellStyle", "headerCellClassName", "pageIndex", "treeProps", "exportConfig", "printConfig"])) : createCommentVNode("", true)
            ]),
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "toolbar")
            ]),
            _: 3
          }, 16)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default"),
          _ctx.virtual ? (openBlock(), createBlock(EleVirtualTable, mergeProps$1({ key: 1 }, tableProps.value, {
            ref_key: "tableViewRef",
            ref: tableViewRef
          }), createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots).filter(
              (k) => !tableSlotExcludes.includes(k)
            ), (name) => {
              return {
                name,
                fn: withCtx((slotProps) => [
                  renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040)) : (openBlock(), createBlock(unref(EleDataTable), mergeProps$1({ key: 2 }, tableProps.value, {
            ref_key: "tableViewRef",
            ref: tableViewRef
          }), createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots).filter(
              (k) => !tableSlotExcludes.includes(k)
            ), (name) => {
              return {
                name,
                fn: withCtx((slotProps) => [
                  renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                ])
              };
            })
          ]), 1040)),
          paginationProps.value || _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: "ele-pro-table-footer",
            style: normalizeStyle(_ctx.footerStyle)
          }, [
            renderSlot(_ctx.$slots, "footer"),
            paginationProps.value && paginationProps.value.total ? (openBlock(), createBlock(ElePagination, mergeProps$1({ key: 0 }, paginationProps.value, {
              "onUpdate:currentPage": handlePageCurrentChange,
              "onUpdate:pageSize": handlePageSizeChange
            }), createSlots({ _: 2 }, [
              renderList(Object.keys(_ctx.$slots).filter(
                (k) => !pageSlotExcludes.includes(k)
              ), (name) => {
                return {
                  name,
                  fn: withCtx((slotProps) => [
                    renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                  ])
                };
              })
            ]), 1040)) : createCommentVNode("", true)
          ], 4)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
