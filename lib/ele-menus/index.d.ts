import { NavigationFailure } from 'vue-router';
import { MenuItemClicked } from 'element-plus';
import { ElMenuInstance, ElSubMenuInstance } from '../ele-app/el';
import { MenuItem } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>> & Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    mode: import('vue').PropType<import('./types').MenuMode>;
    items: {
        type: import('vue').PropType<MenuItem[]>;
        required: boolean;
    };
    theme: import('vue').PropType<import('./types').MenuTheme>;
    popupTheme: {
        type: import('vue').PropType<import('./types').PopupMenuTheme>;
        default: string;
    };
    colorful: BooleanConstructor;
    popupColorful: {
        type: import('vue').PropType<import('./types').PopupColorful>;
        default: string;
    };
    firstPopperClass: StringConstructor;
    tooltipDisabled: BooleanConstructor;
    ellipsisProps: import('vue').PropType<import('./types').EllipsisProps>;
    textEllipsisTooltip: import('vue').PropType<import('./types').TextEllipsisTooltip>;
    defaultActive: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    defaultOpeneds: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    uniqueOpened: BooleanConstructor;
    router: BooleanConstructor;
    menuTrigger: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
    collapse: BooleanConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    activeTextColor: StringConstructor;
    closeOnClickOutside: BooleanConstructor;
    collapseTransition: import('element-plus/es/utils/index' /** 菜单数据 */).EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    ellipsis: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    popperOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    ellipsisIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    popperEffect: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown, "dark", boolean>;
    popperClass: StringConstructor;
    showTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    hideTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
}>, {
    menuRef: import('vue').Ref<ElMenuInstance, ElMenuInstance>;
    ellipsisRef: import('vue').Ref<ElSubMenuInstance, ElSubMenuInstance>;
    open: (index: string) => void;
    close: (index: string) => void;
    scrollToActive: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure> | undefined) => void;
    close: (index: string, indexPath: string[]) => void;
    open: (index: string, indexPath: string[]) => void;
    itemClick: (_item: MenuItem, _e: MouseEvent) => void;
    itemMouseenter: (_item: MenuItem, _e: MouseEvent) => void;
    itemMouseleave: (_item: MenuItem, _e: MouseEvent) => void;
    parentMouseenter: (_item: MenuItem, _e: MouseEvent) => void;
    parentMouseleave: (_item: MenuItem, _e: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    mode: import('vue').PropType<import('./types').MenuMode>;
    items: {
        type: import('vue').PropType<MenuItem[]>;
        required: boolean;
    };
    theme: import('vue').PropType<import('./types').MenuTheme>;
    popupTheme: {
        type: import('vue').PropType<import('./types').PopupMenuTheme>;
        default: string;
    };
    colorful: BooleanConstructor;
    popupColorful: {
        type: import('vue').PropType<import('./types').PopupColorful>;
        default: string;
    };
    firstPopperClass: StringConstructor;
    tooltipDisabled: BooleanConstructor;
    ellipsisProps: import('vue').PropType<import('./types').EllipsisProps>;
    textEllipsisTooltip: import('vue').PropType<import('./types').TextEllipsisTooltip>;
    defaultActive: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    defaultOpeneds: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    uniqueOpened: BooleanConstructor;
    router: BooleanConstructor;
    menuTrigger: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "click" | "hover", unknown, "hover", boolean>;
    collapse: BooleanConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    activeTextColor: StringConstructor;
    closeOnClickOutside: BooleanConstructor;
    collapseTransition: import('element-plus/es/utils/index' /** 菜单数据 */).EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    ellipsis: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    popperOffset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    ellipsisIcon: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown, () => any, boolean>;
    popperEffect: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown, "dark", boolean>;
    popperClass: StringConstructor;
    showTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    hideTimeout: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
}>> & Readonly<{
    onSelect?: ((index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure> | undefined) => any) | undefined;
    onClose?: ((index: string, indexPath: string[]) => any) | undefined;
    onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
    onItemClick?: ((_item: MenuItem, _e: MouseEvent) => any) | undefined;
    onItemMouseenter?: ((_item: MenuItem, _e: MouseEvent) => any) | undefined;
    onItemMouseleave?: ((_item: MenuItem, _e: MouseEvent) => any) | undefined;
    onParentMouseenter?: ((_item: MenuItem, _e: MouseEvent) => any) | undefined;
    onParentMouseleave?: ((_item: MenuItem, _e: MouseEvent) => any) | undefined;
}>, {
    showTimeout: number;
    hideTimeout: number;
    defaultActive: string;
    defaultOpeneds: string[];
    uniqueOpened: boolean;
    router: boolean;
    menuTrigger: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "hover" | "click", unknown>;
    collapse: boolean;
    closeOnClickOutside: boolean;
    collapseTransition: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    ellipsis: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popperOffset: number;
    ellipsisIcon: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>;
    popperEffect: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string) | (() => import('element-plus').PopperEffect) | ((new (...args: any[]) => string) | (() => import('element-plus').PopperEffect))[], unknown, unknown>;
    popupTheme: import('./types').PopupMenuTheme;
    colorful: boolean;
    popupColorful: import('./types').PopupColorful;
    tooltipDisabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
