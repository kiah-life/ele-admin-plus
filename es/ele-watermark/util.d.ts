import { StyleValue } from '../ele-app/types';
import { WatermarkGap, WatermarkFont, MutationOption } from './types';

/**
 * 获取文字样式
 */
export declare function getFont(font?: WatermarkFont): Required<WatermarkFont>;
/**
 * 获取间距
 */
export declare function getGap(gap?: WatermarkGap): number[];
/**
 * 返回设备像素密度
 */
export declare function getPixelRatio(): number;
/**
 * 旋转水印
 */
export declare function rotateWatermark(ctx: CanvasRenderingContext2D, rotateX: number, rotateY: number, rotate: number): void;
/**
 * 样式对象转字符串
 * @param style 样式
 */
export declare function joinStyle(style: StyleValue): string;
/**
 * 水印篡改观测
 */
export declare function useMutation(option: MutationOption): {
    observe: () => void;
    disconnect: () => void;
};
