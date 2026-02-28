import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';
import { ElInputProps, ElTagProps } from '../ele-app/el';
import { EleTooltipProps, EleProTableProps } from '../ele-app/plus';
import { DataItem } from '../ele-data-table/types';
import { SelectValue, SingleValue } from '../ele-basic-select/types';

/**
 * 属性
 */
export declare const tableSelectProps: {
    /** 选中值 */
    modelValue: {
        type: PropType<SelectValue>;
        default: () => null;
    };
    /** 是否多选 */
    multiple: BooleanConstructor;
    /** 是否禁用 */
    disabled: BooleanConstructor;
    /** 尺寸 */
    size: PropType<ElInputProps["size"]>;
    /** 是否支持清除 */
    clearable: BooleanConstructor;
    /** 无选中时提示文本 */
    placeholder: StringConstructor;
    /** 数据值的键名 */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /** 显示文本的键名 */
    labelKey: {
        type: StringConstructor;
        default: string;
    };
    /** 初始选中值(已废弃) */
    initValue: PropType<DataItem | DataItem[]>;
    /** 缓存数据 */
    cacheData: PropType<DataItem[]>;
    /** 表格配置 */
    tableProps: {
        type: PropType<EleProTableProps>;
        required: boolean;
    };
    /** 多选标签最大显示数量 */
    maxTagCount: NumberConstructor;
    /** 多选标签最大显示文本长度 */
    maxTagTextLength: NumberConstructor;
    /** 多选标签类型 */
    tagType: {
        type: PropType<ElTagProps["type"]>;
        default: string;
    };
    /** 是否在输入框获得焦点后自动弹出选项菜单 */
    automaticDropdown: BooleanConstructor;
    /** 是否可以筛选 */
    filterable: BooleanConstructor;
    /** 是否将下拉框插入 body */
    teleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 始终渲染下拉框 */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 下拉框位置 */
    placement: {
        type: PropType<EleTooltipProps["placement"]>;
        default: string;
    };
    /** 下拉框渐变动画 */
    transition: {
        type: StringConstructor;
        default: string;
    };
    /** popper.js 参数 */
    popperOptions: PropType<EleTooltipProps["popperOptions"]>;
    /** 下拉框类名 */
    popperClass: StringConstructor;
    /** 下拉框宽度 */
    popperWidth: (StringConstructor | NumberConstructor)[];
    /** 自定义样式 */
    selectStyle: PropType<StyleValue>;
    /** 自定义输入框样式 */
    inputStyle: PropType<StyleValue>;
    /** 自定义多选标签容器样式 */
    selectTagsStyle: PropType<StyleValue>;
    /** 是否开启响应式 */
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
};
export type TableSelectProps = ExtractPropTypes<typeof tableSelectProps>;
/**
 * 事件
 */
export declare const tableSelectEmits: {
    /** 更新选中值 */
    'update:modelValue': (_value: SelectValue) => boolean;
    /** 选中值改变事件 */
    change: (_value: SelectValue) => boolean;
    /** 下拉框展开状态改变事件 */
    visibleChange: (_visible: boolean) => boolean;
    /** 多选标签移除事件 */
    removeTag: (_value: SingleValue) => boolean;
    /** 清空事件 */
    clear: () => boolean;
    /** 获取焦点事件 */
    focus: (_e: FocusEvent) => boolean;
    /** 失去焦点事件 */
    blur: (_e: FocusEvent) => boolean;
    /** 表格行选中事件 */
    select: (_item: DataItem | DataItem[]) => boolean;
    /** 筛选输入框值改变事件 */
    filterChange: (_value: string) => boolean;
};
