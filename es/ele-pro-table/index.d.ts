import { Ref } from 'vue';
import { EleLoadingProps, EleDataTableProps, EleToolbarProps } from '../ele-app/plus';
import { DataItem, Column, Columns, Sorter, Filter, RowKey } from '../ele-data-table/types';
import { ReloadFunction, DoneParams, TableTool, FetchFunction, TableViewInstance, ExportConfig, PrintConfig, TableExportParams } from './types';
import { TableToolsInstance } from './props';

declare function __VLS_template(): Partial<Record<string, (_: {
    pageIndex: number | undefined;
    fetch: FetchFunction | undefined;
}) => any>> & Partial<Record<string, (_: {
    row: DataItem | undefined;
    column: Column;
    $index: number | undefined;
}) => any>> & Partial<Record<string, (_: any) => any>> & Partial<Record<string, (_: any) => any>> & {
    toolbar?(_: {}): any;
    tools?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    rowKey: {
        type: import('vue').PropType<RowKey>;
        required: boolean;
    };
    loading: BooleanConstructor;
    datasource: {
        type: import('vue').PropType<import('./types').Datasource>;
        required: boolean;
    };
    where: import('vue').PropType<import('./types').Where>;
    request: import('vue').PropType<import('./types').RequestOption>;
    response: import('vue').PropType<import('./types').ResponseOption>;
    parseData: import('vue').PropType<import('./types').ParseData>;
    loadOnCreated: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadOnChanged: {
        type: BooleanConstructor;
        default: boolean;
    };
    selections: import('vue').PropType<DataItem[]>;
    current: import('vue').PropType<DataItem | null>;
    toolbar: {
        type: import('vue').PropType<boolean | EleToolbarProps>;
        default: () => null;
    };
    tools: {
        type: import('vue').PropType<TableTool[] | boolean>;
        default: () => null;
    };
    columnSortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximizedIndex: NumberConstructor;
    maximizedHeight: (StringConstructor | NumberConstructor)[];
    tableStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    footerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    pagination: {
        type: import('vue').PropType<boolean | import('./types').TablePagination>;
        default: () => null;
    };
    loadingProps: import('vue').PropType<EleLoadingProps>;
    cacheKey: StringConstructor;
    virtual: BooleanConstructor;
    rowHeight: NumberConstructor;
    locale: import('vue').PropType<Partial<import('./types').TableLocale>>;
    exportConfig: import('vue').PropType<ExportConfig>;
    printConfig: import('vue').PropType<PrintConfig>;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: (NumberConstructor | StringConstructor)[];
    lazy: BooleanConstructor;
    className: {
        type: StringConstructor;
        default: string;
    };
    emptyText: StringConstructor;
    stripe: {
        type: BooleanConstructor;
        default: null;
    };
    border: {
        type: BooleanConstructor;
        default: null;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
    rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
    rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
    cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
    cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
    headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
    headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
    headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
    headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (NumberConstructor | StringConstructor)[];
    expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
    spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
        default: () => {
            hasChildren: string;
            children: string;
            checkStrictly: boolean;
        };
    };
    load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
    tableLayout: {
        type: import('vue').PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: BooleanConstructor;
    flexible: BooleanConstructor;
    showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
    appendFilterPanelTo: StringConstructor;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    allowDragLastColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    columns: {
        type: import('vue').PropType<Columns>;
        required: boolean;
    };
    sticky: BooleanConstructor;
    headerEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    slotNormalize: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottomLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyProps: {
        type: import('vue').PropType<import('../ele-data-table/types').TableEmptyProps>;
        default: () => null;
    };
    rowClickChecked: import('vue').PropType<import('../ele-data-table/types').RowClickChecked>;
    reserveCurrent: BooleanConstructor;
    selectedRowKeys: import('vue').PropType<import('../ele-data-table/types').DataKey[]>;
}>, {
    tableToolsRef: Ref<TableToolsInstance, TableToolsInstance>;
    tableViewRef: Ref<TableViewInstance, TableViewInstance>;
    tableData: Ref<{
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
        _isMock?: boolean | undefined;
    }[], DataItem[] | {
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
        _isMock?: boolean | undefined;
    }[]>;
    tableProps: import('vue').ComputedRef<EleDataTableProps>;
    reload: ReloadFunction;
    reloadTable: () => void;
    getTableRef: () => TableViewInstance | undefined;
    getData: () => DataItem[];
    setData: (data: DataItem[]) => void;
    goPageByRowKey: (key: unknown) => void;
    fetch: FetchFunction;
    openPrintModal: () => void;
    printData: (params?: TableExportParams) => void;
    openExportModal: () => void;
    exportData: (params?: TableExportParams) => void;
    clearSelection: () => void;
    getSelectionRows: () => DataItem[] | undefined;
    toggleRowSelection: (row: DataItem, selected?: boolean) => void;
    toggleAllSelection: () => void;
    toggleRowExpansion: (row: DataItem, expanded?: boolean) => void;
    setCurrentRow: (row?: DataItem | null) => void;
    clearSort: () => void;
    clearFilter: (columnKeys?: string[]) => void;
    doLayout: () => void;
    sort: (prop: string, order: string) => void;
    scrollTo: (options: number | ScrollToOptions, yCoord?: number) => void;
    setScrollTop: (top?: number) => void;
    setScrollLeft: (left?: number) => void;
    setCurrentRowKey: (key?: import('../ele-data-table/types').DataKey | null) => void;
    getCurrentRow: () => DataItem | undefined;
    setSelectedRows: (rows?: DataItem[]) => void;
    setSelectedRowKeys: (keys?: import('../ele-data-table/types').DataKey[], rows?: DataItem[]) => void;
    toggleRowExpansionAll: (expanded?: boolean) => void;
    updateSelectedAndChecked: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (_selection: DataItem[], _row: DataItem) => void;
    done: (_result: DoneParams<DataItem>, _parent?: DataItem | undefined) => void;
    scroll: (_params: import('element-plus/es/components/table-v2/src/composables/use-scrollbar').ScrollPos) => void;
    "update:currentRowKey": (_currentRowKey?: import('../ele-data-table/types').DataKey | undefined) => void;
    "update:selectedRowKeys": (_selectedRowKeys?: import('../ele-data-table/types').DataKey[] | undefined) => void;
    selectAll: (_selection: DataItem[]) => void;
    selectionChange: (_selection: DataItem[]) => void;
    cellMouseEnter: (_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => void;
    cellMouseLeave: (_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => void;
    cellClick: (_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => void;
    cellDblclick: (_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => void;
    cellContextmenu: (_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => void;
    rowClick: (_row: DataItem, _column: Column, _e: MouseEvent) => void;
    rowContextmenu: (_row: DataItem, _column: Column, _e: MouseEvent) => void;
    rowDblclick: (_row: DataItem, _column: Column, _e: MouseEvent) => void;
    headerClick: (_column: Column, _e: MouseEvent) => void;
    headerContextmenu: (_column: Column, _e: MouseEvent) => void;
    sortChange: (_sorter: Sorter) => void;
    filterChange: (_filter: Filter) => void;
    currentChange: (_current?: DataItem | null | undefined, _old?: DataItem | null | undefined) => void;
    headerDragend: (_width: number, _old: number, _column: Column, _e: MouseEvent) => void;
    expandChange: (_row: DataItem, _expanded: boolean) => void;
    endEeached: (_params: any) => void;
    rowsRendered: (_params: any) => void;
    refresh: () => void;
    "update:selections": (_selections: DataItem[]) => void;
    "update:current": (_current?: DataItem | null | undefined) => void;
    columnsChange: (_columns: Columns, _tableColumns: Columns, _isReset: boolean) => void;
    sizeChange: (_size: "" | "small" | "default" | "large" | undefined) => void;
    maximizedChange: (_maximized: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    rowKey: {
        type: import('vue').PropType<RowKey>;
        required: boolean;
    };
    loading: BooleanConstructor;
    datasource: {
        type: import('vue').PropType<import('./types').Datasource>;
        required: boolean;
    };
    where: import('vue').PropType<import('./types').Where>;
    request: import('vue').PropType<import('./types').RequestOption>;
    response: import('vue').PropType<import('./types').ResponseOption>;
    parseData: import('vue').PropType<import('./types').ParseData>;
    loadOnCreated: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadOnChanged: {
        type: BooleanConstructor;
        default: boolean;
    };
    selections: import('vue').PropType<DataItem[]>;
    current: import('vue').PropType<DataItem | null>;
    toolbar: {
        type: import('vue').PropType<boolean | EleToolbarProps>;
        default: () => null;
    };
    tools: {
        type: import('vue').PropType<TableTool[] | boolean>;
        default: () => null;
    };
    columnSortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximizedIndex: NumberConstructor;
    maximizedHeight: (StringConstructor | NumberConstructor)[];
    tableStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    footerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    pagination: {
        type: import('vue').PropType<boolean | import('./types').TablePagination>;
        default: () => null;
    };
    loadingProps: import('vue').PropType<EleLoadingProps>;
    cacheKey: StringConstructor;
    virtual: BooleanConstructor;
    rowHeight: NumberConstructor;
    locale: import('vue').PropType<Partial<import('./types').TableLocale>>;
    exportConfig: import('vue').PropType<ExportConfig>;
    printConfig: import('vue').PropType<PrintConfig>;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: (NumberConstructor | StringConstructor)[];
    lazy: BooleanConstructor;
    className: {
        type: StringConstructor;
        default: string;
    };
    emptyText: StringConstructor;
    stripe: {
        type: BooleanConstructor;
        default: null;
    };
    border: {
        type: BooleanConstructor;
        default: null;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
    rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
    rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
    cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
    cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
    headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
    headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
    headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
    headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (NumberConstructor | StringConstructor)[];
    expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
    spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
        default: () => {
            hasChildren: string;
            children: string;
            checkStrictly: boolean;
        };
    };
    load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
    tableLayout: {
        type: import('vue').PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: BooleanConstructor;
    flexible: BooleanConstructor;
    showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
    appendFilterPanelTo: StringConstructor;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    allowDragLastColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    columns: {
        type: import('vue').PropType<Columns>;
        required: boolean;
    };
    sticky: BooleanConstructor;
    headerEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    slotNormalize: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottomLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyProps: {
        type: import('vue').PropType<import('../ele-data-table/types').TableEmptyProps>;
        default: () => null;
    };
    rowClickChecked: import('vue').PropType<import('../ele-data-table/types').RowClickChecked>;
    reserveCurrent: BooleanConstructor;
    selectedRowKeys: import('vue').PropType<import('../ele-data-table/types').DataKey[]>;
}>> & Readonly<{
    onSelect?: ((_selection: DataItem[], _row: DataItem) => any) | undefined;
    onDone?: ((_result: DoneParams<DataItem>, _parent?: DataItem | undefined) => any) | undefined;
    onScroll?: ((_params: import('element-plus/es/components/table-v2/src/composables/use-scrollbar').ScrollPos) => any) | undefined;
    "onUpdate:currentRowKey"?: ((_currentRowKey?: import('../ele-data-table/types').DataKey | undefined) => any) | undefined;
    "onUpdate:selectedRowKeys"?: ((_selectedRowKeys?: import('../ele-data-table/types').DataKey[] | undefined) => any) | undefined;
    onSelectAll?: ((_selection: DataItem[]) => any) | undefined;
    onSelectionChange?: ((_selection: DataItem[]) => any) | undefined;
    onCellMouseEnter?: ((_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => any) | undefined;
    onCellMouseLeave?: ((_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => any) | undefined;
    onCellClick?: ((_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => any) | undefined;
    onCellDblclick?: ((_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => any) | undefined;
    onCellContextmenu?: ((_row: DataItem, _column: Column, _cell: HTMLTableCellElement, _e: MouseEvent) => any) | undefined;
    onRowClick?: ((_row: DataItem, _column: Column, _e: MouseEvent) => any) | undefined;
    onRowContextmenu?: ((_row: DataItem, _column: Column, _e: MouseEvent) => any) | undefined;
    onRowDblclick?: ((_row: DataItem, _column: Column, _e: MouseEvent) => any) | undefined;
    onHeaderClick?: ((_column: Column, _e: MouseEvent) => any) | undefined;
    onHeaderContextmenu?: ((_column: Column, _e: MouseEvent) => any) | undefined;
    onSortChange?: ((_sorter: Sorter) => any) | undefined;
    onFilterChange?: ((_filter: Filter) => any) | undefined;
    onCurrentChange?: ((_current?: DataItem | null | undefined, _old?: DataItem | null | undefined) => any) | undefined;
    onHeaderDragend?: ((_width: number, _old: number, _column: Column, _e: MouseEvent) => any) | undefined;
    onExpandChange?: ((_row: DataItem, _expanded: boolean) => any) | undefined;
    onEndEeached?: ((_params: any) => any) | undefined;
    onRowsRendered?: ((_params: any) => any) | undefined;
    onRefresh?: (() => any) | undefined;
    "onUpdate:selections"?: ((_selections: DataItem[]) => any) | undefined;
    "onUpdate:current"?: ((_current?: DataItem | null | undefined) => any) | undefined;
    onColumnsChange?: ((_columns: Columns, _tableColumns: Columns, _isReset: boolean) => any) | undefined;
    onSizeChange?: ((_size: "" | "small" | "default" | "large" | undefined) => any) | undefined;
    onMaximizedChange?: ((_maximized: boolean) => any) | undefined;
}>, {
    loading: boolean;
    fit: boolean;
    lazy: boolean;
    className: string;
    stripe: boolean;
    border: boolean;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
    treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
    tableLayout: "fixed" | "auto";
    scrollbarAlwaysOn: boolean;
    flexible: boolean;
    scrollbarTabindex: string | number;
    allowDragLastColumn: boolean;
    sticky: boolean;
    toolbar: boolean | EleToolbarProps;
    headerEllipsis: boolean;
    slotNormalize: boolean;
    bottomLine: boolean;
    emptyProps: import('../ele-data-table/types').TableEmptyProps;
    reserveCurrent: boolean;
    loadOnCreated: boolean;
    loadOnChanged: boolean;
    tools: boolean | string[];
    columnSortable: boolean;
    columnFixed: boolean;
    pagination: boolean | import('./types').TablePagination;
    virtual: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
