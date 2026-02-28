const splitPanelProps = {
  /** 默认大小 */
  size: String,
  /** 最小尺寸 */
  minSize: Number,
  /** 最大尺寸 */
  maxSize: Number,
  /** 间距 */
  space: String,
  /** 自定义边栏样式 */
  customStyle: Object,
  /** 自定义边栏容器样式 */
  customWrapStyle: Object,
  /** 自定义内容样式 */
  bodyStyle: Object,
  /** 是否可折叠 */
  allowCollapse: Boolean,
  /** 折叠按钮样式 */
  collapseStyle: Object,
  /** 是否折叠 */
  collapse: Boolean,
  /** 是否垂直方向 */
  vertical: Boolean,
  /** 是否反向布局 */
  reverse: Boolean,
  /** 是否可拉伸宽度 */
  resizable: Boolean,
  /** 内部表格弹性布局 */
  flexTable: Boolean,
  /** 是否开启响应式 */
  responsive: {
    type: Boolean,
    default: null
  }
};
const splitPanelEmits = {
  /** 更新折叠状态 */
  "update:collapse": (_collapse) => true
};
export {
  splitPanelEmits,
  splitPanelProps
};
