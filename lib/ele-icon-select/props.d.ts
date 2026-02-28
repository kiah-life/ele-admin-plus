import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';
import { ElInputProps, ElEmptyProps } from '../ele-app/el';
import { EleTooltipProps } from '../ele-app/plus';
import { IconItem } from './types';

/**
 * 属性
 */
export declare const iconSelectProps: {
    /** 选中值 */
    modelValue: StringConstructor;
    /** 图标数据 */
    data: PropType<string[] | IconItem[]>;
    /** 是否禁用 */
    disabled: BooleanConstructor;
    /** 尺寸 */
    size: PropType<ElInputProps["size"]>;
    /** 是否支持清除 */
    clearable: BooleanConstructor;
    /** 无选中时提示文本 */
    placeholder: StringConstructor;
    /** 是否在输入框获得焦点后自动弹出选项菜单 */
    automaticDropdown: BooleanConstructor;
    /** 是否可以筛选 */
    filterable: PropType<boolean | "popper">;
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
    popperWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** 下拉框高度 */
    popperHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** 自定义样式 */
    selectStyle: PropType<StyleValue>;
    /** 自定义样式 */
    inputStyle: PropType<StyleValue>;
    /** 自定义多选标签容器样式 */
    selectTagsStyle: PropType<StyleValue>;
    /** 顶部选项卡只有一个时隐藏 */
    hideOnSingleTab: BooleanConstructor;
    /** 空组件属性 */
    emptyProps: PropType<ElEmptyProps>;
    /** 是否显示文本提示 */
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 提示属性 */
    tooltipProps: PropType<EleTooltipProps>;
    /** 头部样式 */
    headerStyle: PropType<StyleValue>;
    /** 选项卡样式 */
    tabsStyle: PropType<StyleValue>;
    /** 搜索区样式 */
    searchStyle: PropType<StyleValue>;
    /** 菜单样式 */
    menusStyle: PropType<StyleValue>;
    /** 主体样式 */
    bodyStyle: PropType<StyleValue>;
    /** 网格样式 */
    gridStyle: PropType<StyleValue>;
    /** 图标样式 */
    itemStyle: PropType<StyleValue>;
    /** 搜索框提示文本 */
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    /** 是否开启响应式 */
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
};
export type IconSelectProps = ExtractPropTypes<typeof iconSelectProps>;
/**
 * 事件
 */
export declare const iconSelectEmits: {
    /** 更新展开状态 */
    'update:modelValue': (_value?: string | null) => boolean;
    /** 选中值改变事件 */
    change: (_value?: string | null) => boolean;
    /** 下拉框展开状态改变事件 */
    visibleChange: (_visible: boolean) => boolean;
    /** 清空事件 */
    clear: () => boolean;
    /** 获取焦点事件 */
    focus: (_e: FocusEvent) => boolean;
    /** 失去焦点事件 */
    blur: (_e: FocusEvent) => boolean;
};
