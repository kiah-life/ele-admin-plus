"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const elementPlus = require("element-plus");
const modalProps = {
  ...elementPlus.dialogProps,
  appendToBody: {
    type: Boolean,
    default: true
  },
  draggable: {
    type: Boolean,
    default: true
  },
  /** 是否可以拖出边界 */
  moveOut: [Boolean, Array],
  /** 是否可以拉伸 */
  resizable: [Boolean, String],
  /** 初始位置 */
  position: [String, Object],
  /** 是否在弹窗关闭后重置位置和大小 */
  resetOnClose: {
    type: Boolean,
    default: true
  },
  /** 是否显示最大化切换按钮 */
  maxable: Boolean,
  /** 是否支持打开多个 */
  multiple: Boolean,
  /** 是否限制在主体内部 */
  inner: Boolean,
  /** 最小拉伸宽度 */
  minWidth: {
    type: Number,
    default: 260
  },
  /** 最小拉伸高度 */
  minHeight: {
    type: Number,
    default: 160
  },
  /** 标题栏样式 */
  headerStyle: Object,
  /** 标题样式 */
  titleStyle: Object,
  /** 主体样式 */
  bodyStyle: Object,
  /** 底栏样式 */
  footerStyle: Object,
  /** 自定义关闭按钮样式 */
  closeBtnStyle: Object,
  /** 自定义全屏按钮样式 */
  fullscreenBtnStyle: Object,
  /** 拉伸图标样式 */
  resizeIconStyle: Object,
  /** 是否开启响应式 */
  responsive: {
    type: Boolean,
    default: null
  },
  /** 是否是表单弹窗 */
  form: Boolean
};
const modalEmits = {
  ...elementPlus.dialogEmits,
  /** 更新全屏状态 */
  "update:fullscreen": (_fullscreen) => true
};
const dialogPropKeys = Object.keys(elementPlus.dialogProps);
exports.dialogPropKeys = dialogPropKeys;
exports.modalEmits = modalEmits;
exports.modalProps = modalProps;
