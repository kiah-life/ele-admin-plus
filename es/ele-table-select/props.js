const tableSelectProps = {
  /** 选中值 */
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: () => {
      return null;
    }
  },
  /** 是否多选 */
  multiple: Boolean,
  /** 是否禁用 */
  disabled: Boolean,
  /** 尺寸 */
  size: String,
  /** 是否支持清除 */
  clearable: Boolean,
  /** 无选中时提示文本 */
  placeholder: String,
  /** 数据值的键名 */
  valueKey: {
    type: String,
    default: "value"
  },
  /** 显示文本的键名 */
  labelKey: {
    type: String,
    default: "label"
  },
  /** 初始选中值(已废弃) */
  initValue: [Object, Array],
  /** 缓存数据 */
  cacheData: Array,
  /** 表格配置 */
  tableProps: {
    type: Object,
    required: true
  },
  /** 多选标签最大显示数量 */
  maxTagCount: Number,
  /** 多选标签最大显示文本长度 */
  maxTagTextLength: Number,
  /** 多选标签类型 */
  tagType: {
    type: String,
    default: "info"
  },
  /** 是否在输入框获得焦点后自动弹出选项菜单 */
  automaticDropdown: Boolean,
  /** 是否可以筛选 */
  filterable: Boolean,
  /** 是否将下拉框插入 body */
  teleported: {
    type: Boolean,
    default: true
  },
  /** 始终渲染下拉框 */
  persistent: {
    type: Boolean,
    default: true
  },
  /** 下拉框位置 */
  placement: {
    type: String,
    default: "bottom-start"
  },
  /** 下拉框渐变动画 */
  transition: {
    type: String,
    default: "el-zoom-in-top"
  },
  /** popper.js 参数 */
  popperOptions: Object,
  /** 下拉框类名 */
  popperClass: String,
  /** 下拉框宽度 */
  popperWidth: [Number, String],
  /** 自定义样式 */
  selectStyle: Object,
  /** 自定义输入框样式 */
  inputStyle: Object,
  /** 自定义多选标签容器样式 */
  selectTagsStyle: Object,
  /** 是否开启响应式 */
  responsive: {
    type: Boolean,
    default: null
  }
};
const tableSelectEmits = {
  /** 更新选中值 */
  "update:modelValue": (_value) => true,
  /** 选中值改变事件 */
  change: (_value) => true,
  /** 下拉框展开状态改变事件 */
  visibleChange: (_visible) => true,
  /** 多选标签移除事件 */
  removeTag: (_value) => true,
  /** 清空事件 */
  clear: () => true,
  /** 获取焦点事件 */
  focus: (_e) => true,
  /** 失去焦点事件 */
  blur: (_e) => true,
  /** 表格行选中事件 */
  select: (_item) => true,
  /** 筛选输入框值改变事件 */
  filterChange: (_value) => true
};
export {
  tableSelectEmits,
  tableSelectProps
};
