const proLayoutProps = {
  /** 高度 */
  height: {
    type: [String, Number],
    default: null
  },
  /** 菜单数据 */
  menus: Array,
  /** 页签数据 */
  tabs: Array,
  /** 是否折叠侧栏 */
  collapse: Boolean,
  /** 双侧栏一级是否紧凑风格 */
  compact: Boolean,
  /** 内容区是否最大化 */
  maximized: [Boolean, String],
  /** 是否需要页签栏 */
  tabBar: {
    type: [Boolean, String],
    default: true
  },
  /** 是否需要面包屑导航 */
  breadcrumb: {
    type: [Boolean, Object],
    default: true
  },
  /** 是否需要返回顶部 */
  backTop: {
    type: [Boolean, Object],
    default: true
  },
  /** 布局类型 */
  layout: String,
  /** 侧栏布局类型 */
  sidebarLayout: String,
  /** 顶栏风格 */
  headerStyle: String,
  /** 侧栏风格 */
  sidebarStyle: {
    type: String,
    default: "dark"
  },
  /** 页签风格 */
  tabStyle: {
    type: String,
    default: "simple"
  },
  /** 是否固定顶栏 */
  fixedHeader: {
    type: Boolean,
    default: true
  },
  /** 是否固定侧栏 */
  fixedSidebar: {
    type: Boolean,
    default: true
  },
  /** 是否固定内容区 */
  fixedBody: {
    type: Boolean,
    default: true
  },
  /** 图标是否置于顶栏 */
  logoInHeader: Boolean,
  /** 是否需要固定的主页页签 */
  fixedHome: {
    type: Boolean,
    default: true
  },
  /** 主页路由地址 */
  homePath: String,
  /** 刷新路由地址 */
  redirectPath: {
    type: String,
    default: "/redirect"
  },
  /** 内容区是否撑满 */
  fluid: {
    type: Boolean,
    default: true
  },
  /** 返回键退出内容区最大化 */
  compressOnEsc: Boolean,
  /** 固定主体时切换路由自动滚到顶部 */
  autoScrollTop: {
    type: Boolean,
    default: true
  },
  /** 顶栏菜单触发模式 */
  navTrigger: String,
  /** 双侧栏一级菜单触发模式 */
  boxTrigger: String,
  /** 侧栏菜单触发模式 */
  itemTrigger: String,
  /** hover模式的菜单切换超时 */
  menuHoverTimeout: {
    type: Number,
    default: 600
  },
  /** 菜单点击事件前钩子 */
  beforeClick: Function,
  /** 是否支持内嵌缓存 */
  keepAlive: Boolean,
  /** 内嵌切换动画 */
  transitionName: String,
  /** 内嵌进入动画延迟时间 */
  transitionDelay: {
    type: Number,
    default: 250
  },
  /** 是否开启响应式 */
  responsive: {
    type: Boolean,
    default: true
  },
  /** 国际化语言 */
  locale: String,
  /** 菜单标题国际化方法 */
  i18n: Function,
  /** 是否支持页签右键菜单 */
  tabContextMenu: [Boolean, Object],
  /** 右键菜单 */
  tabContextMenus: [Array, Function],
  /** 是否支持页签拖动排序 */
  tabSortable: Boolean,
  /** 顶栏菜单标题插槽名称 */
  headerTitleSlot: {
    type: String,
    default: "title"
  },
  /** 顶栏菜单图标插槽名称 */
  headerIconSlot: {
    type: String,
    default: "icon"
  },
  /** 侧栏菜单标题插槽名称 */
  sidebarTitleSlot: {
    type: String,
    default: "title"
  },
  /** 侧栏菜单图标插槽名称 */
  sidebarIconSlot: {
    type: String,
    default: "icon"
  },
  /** 双侧栏一级菜单标题插槽名称 */
  sideboxTitleSlot: {
    type: String,
    default: "title"
  },
  /** 双侧栏一级菜单图标插槽名称 */
  sideboxIconSlot: {
    type: String,
    default: "icon"
  },
  /** 顶栏样式 */
  headerCustomStyle: Object,
  /** 侧栏样式 */
  sidebarCustomStyle: Object,
  /** 双侧栏一级样式 */
  sideboxCustomStyle: Object,
  /** 页签栏样式 */
  tabsCustomStyle: Object,
  /** 内容区样式 */
  contentCustomStyle: Object,
  /** logo样式 */
  logoStyle: Object,
  /** logo文字样式 */
  logoTitleStyle: Object,
  /** 顶栏菜单样式 */
  headerMenusStyle: Object,
  /** 侧栏菜单样式 */
  sidebarMenusStyle: Object,
  /** 双侧栏一级菜单样式 */
  sideboxMenusStyle: Object,
  /** 顶栏菜单属性 */
  headerMenuProps: Object,
  /** 侧栏菜单属性 */
  sidebarMenuProps: Object,
  /** 双侧栏一级菜单属性 */
  sideboxMenuProps: Object,
  /** 顶栏菜单是否省略多余的子项 */
  ellipsis: {
    type: Boolean,
    default: true
  },
  /** 顶栏菜单省略项的属性 */
  ellipsisProps: Object,
  /** 顶栏子菜单触发方式 */
  menuTrigger: String,
  /** 侧栏默认展开的菜单 */
  sidebarOpeneds: Array,
  /** 侧栏是否只保持一个子菜单展开 */
  uniqueOpened: {
    type: Boolean,
    default: true
  },
  /** 侧栏菜单是否彩色图标 */
  colorfulIcon: Boolean,
  /** 菜单 tooltip 主题 */
  tooltipEffect: String,
  /** 是否开启菜单文本溢出提示 */
  menuTextEllipsisTooltip: [Boolean, Object],
  /** 内容区最大时不带页签栏 */
  expanded: Boolean,
  /** 面包屑导航分隔符 */
  breadcrumbSeparator: [String, Object, Function],
  /** 返回顶部可见的滚动高度 */
  backTopVisibilityHeight: Number,
  /** 返回顶部的右边距 */
  backTopRight: Number,
  /** 返回顶部的下边距 */
  backTopBottom: Number,
  /** 返回顶部的目标选择器 */
  backTopTarget: String
};
const proLayoutEmits = {
  "update:collapse": (_collapse) => true,
  "update:maximized": (_maximized) => true,
  tabAdd: (_data) => true,
  tabClick: (_option) => true,
  tabRemove: (_option) => true,
  tabContextMenu: (_option) => true,
  tabSortChange: (_data) => true,
  logoClick: (_isHome, _e) => true,
  headMenuOpen: (_index, _indexPath) => true,
  headMenuClose: (_index, _indexPath) => true,
  sideMenuOpen: (_index, _indexPath) => true,
  sideMenuClose: (_index, _indexPath) => true,
  bodySizeChange: (_option) => true
};
const PRO_LAYOUT_KEY = Symbol("proLayout");
export {
  PRO_LAYOUT_KEY,
  proLayoutEmits,
  proLayoutProps
};
