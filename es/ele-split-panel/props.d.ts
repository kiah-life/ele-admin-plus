import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';

/**
 * 属性
 */
export declare const splitPanelProps: {
    /** 默认大小 */
    size: StringConstructor;
    /** 最小尺寸 */
    minSize: NumberConstructor;
    /** 最大尺寸 */
    maxSize: NumberConstructor;
    /** 间距 */
    space: StringConstructor;
    /** 自定义边栏样式 */
    customStyle: PropType<StyleValue>;
    /** 自定义边栏容器样式 */
    customWrapStyle: PropType<StyleValue>;
    /** 自定义内容样式 */
    bodyStyle: PropType<StyleValue>;
    /** 是否可折叠 */
    allowCollapse: BooleanConstructor;
    /** 折叠按钮样式 */
    collapseStyle: PropType<StyleValue>;
    /** 是否折叠 */
    collapse: BooleanConstructor;
    /** 是否垂直方向 */
    vertical: BooleanConstructor;
    /** 是否反向布局 */
    reverse: BooleanConstructor;
    /** 是否可拉伸宽度 */
    resizable: BooleanConstructor;
    /** 内部表格弹性布局 */
    flexTable: BooleanConstructor;
    /** 是否开启响应式 */
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
};
export type SplitPanelProps = ExtractPropTypes<typeof splitPanelProps>;
/**
 * 事件
 */
export declare const splitPanelEmits: {
    /** 更新折叠状态 */
    'update:collapse': (_collapse: boolean) => boolean;
};
