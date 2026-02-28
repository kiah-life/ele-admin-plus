"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const elementPlus = require("element-plus");
const drawerProps = {
  ...elementPlus.drawerProps,
  /** 自定义标题样式 */
  headerStyle: Object,
  /** 标题样式 */
  titleStyle: Object,
  /** 自定义主体样式 */
  bodyStyle: Object,
  /** 自定义底部样式 */
  footerStyle: Object,
  /** 自定义关闭按钮样式 */
  closeBtnStyle: Object,
  /** 是否限制在主体内部 */
  inner: Boolean
};
exports.drawerProps = drawerProps;
