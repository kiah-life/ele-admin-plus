const watermarkProps = {
  /** 宽度 */
  width: Number,
  /** 高度 */
  height: Number,
  /** 旋转角度 */
  rotate: Number,
  /** 层级 */
  zIndex: Number,
  /** 图片源 */
  image: String,
  /** 文字内容 */
  content: [String, Array],
  /** 文字样式 */
  font: Object,
  /** 间距 */
  gap: Array,
  /** 距离左上角的偏移量 */
  offset: Array,
  /** 多行水印的行间距 */
  lineGap: {
    type: Number,
    default: 3
  },
  /** 自定义样式 */
  customStyle: Object,
  /** 是否使用固定定位 */
  fixed: Boolean,
  /** 是否为外层添加定位样式 */
  wrapPosition: {
    type: Boolean,
    default: true
  },
  /** 是否禁用 */
  disabled: Boolean
};
export {
  watermarkProps
};
