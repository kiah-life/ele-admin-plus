const tabBarProps = {
  /** 标签选中 */
  modelValue: String,
  /** 标签数据 */
  items: Array,
  /** 标签项样式 */
  itemStyle: Object,
  /** 风格类型 */
  type: String
};
const tabBarEmits = {
  /** 更新标签选中 */
  "update:modelValue": (_value) => true
};
export {
  tabBarEmits,
  tabBarProps
};
