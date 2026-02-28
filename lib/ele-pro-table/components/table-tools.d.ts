import { PropType } from 'vue';
import { Columns, DataItem, SpanMethod, SummaryMethod, CellStyle, CellClass, HeaderCellStyle, HeaderCellClass, TreeProps } from '../../ele-data-table/types';
import { TableTool, TableLocale, FetchFunction, ExportConfig, PrintConfig, TableExportParams } from '../types';

declare function __VLS_template(): Partial<Record<string, (_: {
    row: DataItem | undefined;
    column: import('../types').Column;
    $index: number;
}) => any>> & Partial<Record<string, (_: {
    pageIndex: number | undefined;
    fetch: FetchFunction | undefined;
}) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** 工具按钮布局 */
    tools: {
        type: PropType<TableTool[]>;
        required: true;
    };
    /** 表格尺寸 */
    size: StringConstructor;
    /** 表格列数据 */
    columns: PropType<Columns>;
    /** 是否开启列拖拽排序 */
    columnSortable: BooleanConstructor;
    /** 是否开启开关固定列 */
    columnFixed: BooleanConstructor;
    /** 是否最大化 */
    maximized: BooleanConstructor;
    /** 本地缓存的名称 */
    cacheKey: StringConstructor;
    /** 国际化 */
    locale: PropType<Partial<TableLocale>>;
    /** 表格选中数据 */
    selections: PropType<DataItem[]>;
    /** 表格当前页数据 */
    pageData: PropType<DataItem[]>;
    /** 单元格合并行列方法 */
    spanMethod: PropType<SpanMethod>;
    /** 表格是否有表头 */
    tableHeader: BooleanConstructor;
    /** 是否显示合计行 */
    showSummary: BooleanConstructor;
    /** 合计行文本 */
    sumText: StringConstructor;
    /** 合计行自定义方法 */
    summaryMethod: PropType<SummaryMethod>;
    /** 单元格样式 */
    cellStyle: PropType<CellStyle>;
    /** 单元格类名自定义 */
    cellClassName: PropType<CellClass>;
    /** 单元格样式 */
    headerCellStyle: PropType<HeaderCellStyle>;
    /** 单元格类名自定义 */
    headerCellClassName: PropType<HeaderCellClass>;
    /** 序号列起始索引 */
    pageIndex: NumberConstructor;
    /** 树表字段名 */
    treeProps: PropType<TreeProps>;
    /** 表格请求数据方法 */
    fetch: PropType<FetchFunction>;
    /** 导出配置 */
    exportConfig: {
        type: PropType<ExportConfig>;
        required: true;
    };
    /** 打印配置 */
    printConfig: {
        type: PropType<PrintConfig>;
        required: true;
    };
}>, {
    openPrintModal: () => void;
    printData: (params?: TableExportParams) => void;
    openExportModal: () => void;
    exportData: (params?: TableExportParams) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reload: () => void;
    "update:size": (_size: "" | "small" | "default" | "large" | undefined) => void;
    "update:columns": (_columns: Columns, _tableColumns: Columns, _isReset: boolean) => void;
    "update:maximized": (_maximized: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** 工具按钮布局 */
    tools: {
        type: PropType<TableTool[]>;
        required: true;
    };
    /** 表格尺寸 */
    size: StringConstructor;
    /** 表格列数据 */
    columns: PropType<Columns>;
    /** 是否开启列拖拽排序 */
    columnSortable: BooleanConstructor;
    /** 是否开启开关固定列 */
    columnFixed: BooleanConstructor;
    /** 是否最大化 */
    maximized: BooleanConstructor;
    /** 本地缓存的名称 */
    cacheKey: StringConstructor;
    /** 国际化 */
    locale: PropType<Partial<TableLocale>>;
    /** 表格选中数据 */
    selections: PropType<DataItem[]>;
    /** 表格当前页数据 */
    pageData: PropType<DataItem[]>;
    /** 单元格合并行列方法 */
    spanMethod: PropType<SpanMethod>;
    /** 表格是否有表头 */
    tableHeader: BooleanConstructor;
    /** 是否显示合计行 */
    showSummary: BooleanConstructor;
    /** 合计行文本 */
    sumText: StringConstructor;
    /** 合计行自定义方法 */
    summaryMethod: PropType<SummaryMethod>;
    /** 单元格样式 */
    cellStyle: PropType<CellStyle>;
    /** 单元格类名自定义 */
    cellClassName: PropType<CellClass>;
    /** 单元格样式 */
    headerCellStyle: PropType<HeaderCellStyle>;
    /** 单元格类名自定义 */
    headerCellClassName: PropType<HeaderCellClass>;
    /** 序号列起始索引 */
    pageIndex: NumberConstructor;
    /** 树表字段名 */
    treeProps: PropType<TreeProps>;
    /** 表格请求数据方法 */
    fetch: PropType<FetchFunction>;
    /** 导出配置 */
    exportConfig: {
        type: PropType<ExportConfig>;
        required: true;
    };
    /** 打印配置 */
    printConfig: {
        type: PropType<PrintConfig>;
        required: true;
    };
}>> & Readonly<{
    onReload?: (() => any) | undefined;
    "onUpdate:size"?: ((_size: "" | "small" | "default" | "large" | undefined) => any) | undefined;
    "onUpdate:columns"?: ((_columns: Columns, _tableColumns: Columns, _isReset: boolean) => any) | undefined;
    "onUpdate:maximized"?: ((_maximized: boolean) => any) | undefined;
}>, {
    showSummary: boolean;
    maximized: boolean;
    columnSortable: boolean;
    columnFixed: boolean;
    tableHeader: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
