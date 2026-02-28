import { TabPaneName } from 'element-plus';
import { ElTabsInstance } from '../ele-app/el';
import { EleDropdownInstance } from '../ele-app/plus';
import { TabPaneItem, TabSize, TabType } from './types';

declare function __VLS_template(): Partial<Record<NonNullable<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>, (_: {
    item: TabPaneItem;
}) => any>> & {
    "add-icon"?(_: {}): any;
    addIcon?(_: {}): any;
    label?(_: {
        item: TabPaneItem;
        label: string | undefined;
        active: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    items: {
        type: import('vue').PropType<TabPaneItem[]>;
        required: boolean;
    };
    size: import('vue').PropType<TabSize>;
    type: import('vue').PropType<TabType>;
    center: BooleanConstructor;
    contextMenu: import('vue').PropType<boolean | import('../ele-app/plus').EleDropdownProps>;
    contextMenus: import('vue').PropType<import('./types').ContextMenus>;
    sortable: BooleanConstructor;
    mousewheel: BooleanConstructor;
    handleClick: BooleanConstructor;
    flexTable: BooleanConstructor;
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    modelValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    editable: BooleanConstructor;
    tabPosition: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "top" | "bottom" | "left" | "right", unknown, "top", boolean>;
    beforeLeave: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    stretch: BooleanConstructor;
}>, {
    tabRef: import('vue').Ref<ElTabsInstance, ElTabsInstance>;
    ctxMenuDropdownRef: import('vue').Ref<EleDropdownInstance, EleDropdownInstance>;
    hideAllDropdown: () => void;
    updateActiveBar: () => void;
    scrollTabs: (direction: "prev" | "next", done?: () => void) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (name: TabPaneName) => void;
    tabContextMenu: (_opt: import('./types').TabEventOption) => void;
    tabClick: (pane: {
        uid: number;
        slots: import('vue').Slots;
        props: {
            readonly label: string;
            readonly closable: boolean;
            readonly disabled: boolean;
            readonly lazy: boolean;
            readonly name?: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => void;
    tabRemove: (name: TabPaneName) => void;
    tabSortChange: (_data: TabPaneItem[]) => void;
    tabItemClick: (_opt: import('./types').TabEventOption) => void;
    tabContextOpen: (_ref: EleDropdownInstance, _item?: TabPaneItem | null | undefined, _name?: string | number | null | undefined) => void;
    tabChange: (name: TabPaneName) => void;
    edit: (paneName: TabPaneName | undefined, action: "add" | "remove") => void;
    tabAdd: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    items: {
        type: import('vue').PropType<TabPaneItem[]>;
        required: boolean;
    };
    size: import('vue').PropType<TabSize>;
    type: import('vue').PropType<TabType>;
    center: BooleanConstructor;
    contextMenu: import('vue').PropType<boolean | import('../ele-app/plus').EleDropdownProps>;
    contextMenus: import('vue').PropType<import('./types').ContextMenus>;
    sortable: BooleanConstructor;
    mousewheel: BooleanConstructor;
    handleClick: BooleanConstructor;
    flexTable: BooleanConstructor;
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    modelValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    editable: BooleanConstructor;
    tabPosition: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "top" | "bottom" | "left" | "right", unknown, "top", boolean>;
    beforeLeave: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    stretch: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((name: TabPaneName) => any) | undefined;
    onTabContextMenu?: ((_opt: import('./types').TabEventOption) => any) | undefined;
    onTabClick?: ((pane: {
        uid: number;
        slots: import('vue').Slots;
        props: {
            readonly label: string;
            readonly closable: boolean;
            readonly disabled: boolean;
            readonly lazy: boolean;
            readonly name?: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => any) | undefined;
    onTabRemove?: ((name: TabPaneName) => any) | undefined;
    onTabSortChange?: ((_data: TabPaneItem[]) => any) | undefined;
    onTabItemClick?: ((_opt: import('./types').TabEventOption) => any) | undefined;
    onTabContextOpen?: ((_ref: EleDropdownInstance, _item?: TabPaneItem | null | undefined, _name?: string | number | null | undefined) => any) | undefined;
    onTabChange?: ((name: TabPaneName) => any) | undefined;
    onEdit?: ((paneName: TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
    onTabAdd?: (() => any) | undefined;
}>, {
    mousewheel: boolean;
    closable: boolean;
    center: boolean;
    sortable: boolean;
    addable: boolean;
    editable: boolean;
    tabPosition: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "top" | "bottom" | "left" | "right", unknown>;
    beforeLeave: (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript').Awaitable<void | boolean>;
    stretch: boolean;
    handleClick: boolean;
    flexTable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
