import { PropType, ExtractPropTypes } from 'vue';
import { StyleValue } from '../ele-app/types';
import { WatermarkGap, WatermarkOffset, WatermarkFont } from './types';

export declare const watermarkProps: {
    /** 宽度 */
    width: NumberConstructor;
    /** 高度 */
    height: NumberConstructor;
    /** 旋转角度 */
    rotate: NumberConstructor;
    /** 层级 */
    zIndex: NumberConstructor;
    /** 图片源 */
    image: StringConstructor;
    /** 文字内容 */
    content: PropType<string | string[]>;
    /** 文字样式 */
    font: PropType<WatermarkFont>;
    /** 间距 */
    gap: PropType<WatermarkGap>;
    /** 距离左上角的偏移量 */
    offset: PropType<WatermarkOffset>;
    /** 多行水印的行间距 */
    lineGap: {
        type: NumberConstructor;
        default: number;
    };
    /** 自定义样式 */
    customStyle: PropType<Exclude<StyleValue, string>>;
    /** 是否使用固定定位 */
    fixed: BooleanConstructor;
    /** 是否为外层添加定位样式 */
    wrapPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否禁用 */
    disabled: BooleanConstructor;
};
export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;
