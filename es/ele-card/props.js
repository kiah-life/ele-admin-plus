const cardProps = {
  /** 标题 */
  header: String,
  /** 页脚 */
  footer: String,
  /** 主体样式 */
  bodyStyle: Object,
  /** 主体类名 */
  bodyClass: String,
  /** 阴影 */
  shadow: String,
  /** 边框 */
  bordered: Boolean,
  /** 标题栏样式 */
  headerStyle: Object,
  /** 标题样式 */
  titleStyle: Object,
  /** 页脚样式 */
  footerStyle: Object,
  /** 是否可折叠 */
  collapsable: [Boolean, String],
  /** 是否折叠 */
  collapse: Boolean,
  /** 折叠按钮样式 */
  collapseIconStyle: Object,
  /** 内部表格是否弹性布局 */
  flexTable: Boolean
};
const cardEmits = {
  /** 折叠展开事件 */
  collapseChange: (_collapse) => true
};
export {
  cardEmits,
  cardProps
};
