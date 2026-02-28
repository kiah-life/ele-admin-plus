import { PropType, ExtractPropTypes } from 'vue';
import { menuProps } from 'element-plus';
import { MenuItem, MenuMode, MenuTheme, PopupMenuTheme, PopupColorful, EllipsisProps, TextEllipsisTooltip } from './types';

/**
 * 属性
 */
export declare const menusProps: {
    mode: PropType<MenuMode>;
    /** 菜单数据 */
    items: {
        type: PropType<MenuItem[]>;
        required: boolean;
    };
    /** 主题 */
    theme: PropType<MenuTheme>;
    /** 弹出菜单主题 */
    popupTheme: {
        type: PropType<PopupMenuTheme>;
        default: string;
    };
    /** 彩色菜单图标 */
    colorful: BooleanConstructor;
    /** 弹出菜单是否彩色图标 */
    popupColorful: {
        type: PropType<PopupColorful>;
        default: string;
    };
    /** 一级子菜单类名 */
    firstPopperClass: StringConstructor;
    /** 禁用 tooltip */
    tooltipDisabled: BooleanConstructor;
    /** 省略菜单的属性 */
    ellipsisProps: PropType<EllipsisProps>;
    /** 是否开启菜单文本溢出提示 */
    textEllipsisTooltip: PropType<TextEllipsisTooltip>;
    defaultActive: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    defaultOpeneds: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    uniqueOpened: BooleanConstructor;
    router: BooleanConstructor;
    menuTrigger: import('element-plus/es/utils/index' /** 是否开启菜单文本溢出提示 */).EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
    collapse: BooleanConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    activeTextColor: StringConstructor;
    closeOnClickOutside: BooleanConstructor;
    collapseTransition: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    ellipsis: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    popperOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    ellipsisIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    popperEffect: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown, "dark", boolean>;
    popperClass: StringConstructor;
    showTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    hideTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
};
export type MenusProps = ExtractPropTypes<typeof menusProps>;
export type MenuPropKeys = Array<keyof typeof menuProps>;
/**
 * 菜单组件属性名
 */
export declare const menuPropKeys: MenuPropKeys;
/**
 * 事件
 */
export declare const menusEmits: {
    /** 子菜单项点击事件 */
    itemClick: (_item: MenuItem, _e: MouseEvent) => boolean;
    /** 子菜单项鼠标进入事件 */
    itemMouseenter: (_item: MenuItem, _e: MouseEvent) => boolean;
    /** 子菜单项鼠标离开事件 */
    itemMouseleave: (_item: MenuItem, _e: MouseEvent) => boolean;
    /** 父级菜单项鼠标进入事件 */
    parentMouseenter: (_item: MenuItem, _e: MouseEvent) => boolean;
    /** 父级菜单项鼠标离开事件 */
    parentMouseleave: (_item: MenuItem, _e: MouseEvent) => boolean;
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: import('element-plus').MenuItemClicked, routerResult?: Promise<void | import('vue-router').NavigationFailure>) => boolean;
};
