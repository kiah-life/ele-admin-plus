import { PropType, ExtractPropTypes, InjectionKey } from 'vue';
import { StyleValue } from '../ele-app/types';
import { EleMenusProps, EleBreadcrumbProps, EleDropdownProps, EleBacktopProps } from '../ele-app/plus';
import { ContextMenus } from '../ele-tabs/types';
import { BreadcrumbSeparator as Separator } from '../ele-breadcrumb/types';
import { Layout, SidebarLayout, HeaderStyle, SidebarStyle, TabStyle, TabBar, Maximized } from '../ele-admin-layout/types';
import { MenuItem, TabItem, MenuItemTrigger, MenuI18n, BeforeClick, TabItemEventOption, BodySizeChangeOption, ProLayoutProvide } from './types';

type TextEllipsisTooltip = EleMenusProps['textEllipsisTooltip'];
type ProLayoutKey = InjectionKey<ProLayoutProvide>;
/**
 * 属性
 */
export declare const proLayoutProps: {
    /** 高度 */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    /** 菜单数据 */
    menus: PropType<MenuItem[] | null>;
    /** 页签数据 */
    tabs: PropType<TabItem[] | null>;
    /** 是否折叠侧栏 */
    collapse: BooleanConstructor;
    /** 双侧栏一级是否紧凑风格 */
    compact: BooleanConstructor;
    /** 内容区是否最大化 */
    maximized: PropType<Maximized>;
    /** 是否需要页签栏 */
    tabBar: {
        type: PropType<TabBar>;
        default: boolean;
    };
    /** 是否需要面包屑导航 */
    breadcrumb: {
        type: PropType<boolean | EleBreadcrumbProps>;
        default: boolean;
    };
    /** 是否需要返回顶部 */
    backTop: {
        type: PropType<boolean | EleBacktopProps>;
        default: boolean;
    };
    /** 布局类型 */
    layout: PropType<Layout>;
    /** 侧栏布局类型 */
    sidebarLayout: PropType<SidebarLayout>;
    /** 顶栏风格 */
    headerStyle: PropType<HeaderStyle>;
    /** 侧栏风格 */
    sidebarStyle: {
        type: PropType<SidebarStyle>;
        default: string;
    };
    /** 页签风格 */
    tabStyle: {
        type: PropType<TabStyle>;
        default: string;
    };
    /** 是否固定顶栏 */
    fixedHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否固定侧栏 */
    fixedSidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否固定内容区 */
    fixedBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 图标是否置于顶栏 */
    logoInHeader: BooleanConstructor;
    /** 是否需要固定的主页页签 */
    fixedHome: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 主页路由地址 */
    homePath: StringConstructor;
    /** 刷新路由地址 */
    redirectPath: {
        type: StringConstructor;
        default: string;
    };
    /** 内容区是否撑满 */
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 返回键退出内容区最大化 */
    compressOnEsc: BooleanConstructor;
    /** 固定主体时切换路由自动滚到顶部 */
    autoScrollTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 顶栏菜单触发模式 */
    navTrigger: PropType<MenuItemTrigger>;
    /** 双侧栏一级菜单触发模式 */
    boxTrigger: PropType<MenuItemTrigger>;
    /** 侧栏菜单触发模式 */
    itemTrigger: PropType<MenuItemTrigger>;
    /** hover模式的菜单切换超时 */
    menuHoverTimeout: {
        type: NumberConstructor;
        default: number;
    };
    /** 菜单点击事件前钩子 */
    beforeClick: PropType<BeforeClick>;
    /** 是否支持内嵌缓存 */
    keepAlive: BooleanConstructor;
    /** 内嵌切换动画 */
    transitionName: StringConstructor;
    /** 内嵌进入动画延迟时间 */
    transitionDelay: {
        type: NumberConstructor;
        default: number;
    };
    /** 是否开启响应式 */
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 国际化语言 */
    locale: StringConstructor;
    /** 菜单标题国际化方法 */
    i18n: PropType<MenuI18n>;
    /** 是否支持页签右键菜单 */
    tabContextMenu: PropType<boolean | EleDropdownProps>;
    /** 右键菜单 */
    tabContextMenus: PropType<ContextMenus>;
    /** 是否支持页签拖动排序 */
    tabSortable: BooleanConstructor;
    /** 顶栏菜单标题插槽名称 */
    headerTitleSlot: {
        type: StringConstructor;
        default: string;
    };
    /** 顶栏菜单图标插槽名称 */
    headerIconSlot: {
        type: StringConstructor;
        default: string;
    };
    /** 侧栏菜单标题插槽名称 */
    sidebarTitleSlot: {
        type: StringConstructor;
        default: string;
    };
    /** 侧栏菜单图标插槽名称 */
    sidebarIconSlot: {
        type: StringConstructor;
        default: string;
    };
    /** 双侧栏一级菜单标题插槽名称 */
    sideboxTitleSlot: {
        type: StringConstructor;
        default: string;
    };
    /** 双侧栏一级菜单图标插槽名称 */
    sideboxIconSlot: {
        type: StringConstructor;
        default: string;
    };
    /** 顶栏样式 */
    headerCustomStyle: PropType<StyleValue>;
    /** 侧栏样式 */
    sidebarCustomStyle: PropType<StyleValue>;
    /** 双侧栏一级样式 */
    sideboxCustomStyle: PropType<StyleValue>;
    /** 页签栏样式 */
    tabsCustomStyle: PropType<StyleValue>;
    /** 内容区样式 */
    contentCustomStyle: PropType<StyleValue>;
    /** logo样式 */
    logoStyle: PropType<StyleValue>;
    /** logo文字样式 */
    logoTitleStyle: PropType<StyleValue>;
    /** 顶栏菜单样式 */
    headerMenusStyle: PropType<StyleValue>;
    /** 侧栏菜单样式 */
    sidebarMenusStyle: PropType<StyleValue>;
    /** 双侧栏一级菜单样式 */
    sideboxMenusStyle: PropType<StyleValue>;
    /** 顶栏菜单属性 */
    headerMenuProps: PropType<EleMenusProps>;
    /** 侧栏菜单属性 */
    sidebarMenuProps: PropType<EleMenusProps>;
    /** 双侧栏一级菜单属性 */
    sideboxMenuProps: PropType<EleMenusProps>;
    /** 顶栏菜单是否省略多余的子项 */
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 顶栏菜单省略项的属性 */
    ellipsisProps: PropType<EleMenusProps["ellipsisProps"]>;
    /** 顶栏子菜单触发方式 */
    menuTrigger: PropType<EleMenusProps["menuTrigger"]>;
    /** 侧栏默认展开的菜单 */
    sidebarOpeneds: PropType<string[]>;
    /** 侧栏是否只保持一个子菜单展开 */
    uniqueOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 侧栏菜单是否彩色图标 */
    colorfulIcon: BooleanConstructor;
    /** 菜单 tooltip 主题 */
    tooltipEffect: PropType<EleMenusProps["popperEffect"]>;
    /** 是否开启菜单文本溢出提示 */
    menuTextEllipsisTooltip: PropType<TextEllipsisTooltip>;
    /** 内容区最大时不带页签栏 */
    expanded: BooleanConstructor;
    /** 面包屑导航分隔符 */
    breadcrumbSeparator: PropType<Separator>;
    /** 返回顶部可见的滚动高度 */
    backTopVisibilityHeight: NumberConstructor;
    /** 返回顶部的右边距 */
    backTopRight: NumberConstructor;
    /** 返回顶部的下边距 */
    backTopBottom: NumberConstructor;
    /** 返回顶部的目标选择器 */
    backTopTarget: StringConstructor;
};
export type ProLayoutProps = ExtractPropTypes<typeof proLayoutProps>;
/**
 * 事件
 */
export declare const proLayoutEmits: {
    'update:collapse': (_collapse: boolean) => boolean;
    'update:maximized': (_maximized: boolean) => boolean;
    tabAdd: (_data: TabItem) => boolean;
    tabClick: (_option: TabItemEventOption) => boolean;
    tabRemove: (_option: TabItemEventOption) => boolean;
    tabContextMenu: (_option: TabItemEventOption) => boolean;
    tabSortChange: (_data: TabItem[]) => boolean;
    logoClick: (_isHome: boolean, _e: MouseEvent) => boolean;
    headMenuOpen: (_index: string, _indexPath: string[]) => boolean;
    headMenuClose: (_index: string, _indexPath: string[]) => boolean;
    sideMenuOpen: (_index: string, _indexPath: string[]) => boolean;
    sideMenuClose: (_index: string, _indexPath: string[]) => boolean;
    bodySizeChange: (_option: BodySizeChangeOption) => boolean;
};
/**
 * 共享数据key
 */
export declare const PRO_LAYOUT_KEY: ProLayoutKey;
export {};
