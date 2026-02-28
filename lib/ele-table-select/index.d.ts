import { EleBasicSelectInstance, EleProTableInstance } from '../ele-app/plus';
import { SingleValue, SelectedItem } from '../ele-basic-select/types';
import { DataKey } from '../ele-data-table/types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>> & {
    topExtra?(_: {}): any;
    bottomExtra?(_: {}): any;
    maxTagPlaceholder?(_: any): any;
};
declare const __VLS_component: import('vue').DefineComponent<{}, {
    selectRef: import('vue').Ref<EleBasicSelectInstance, EleBasicSelectInstance>;
    tableRef: import('vue').Ref<EleProTableInstance, EleProTableInstance>;
    selectVisible: import('vue').Ref<boolean, boolean>;
    selectedItems: import('vue').Ref<{
        label: string;
        value: SingleValue;
        hide?: boolean | undefined;
        index?: number | undefined;
    }[], SelectedItem[] | {
        label: string;
        value: SingleValue;
        hide?: boolean | undefined;
        index?: number | undefined;
    }[]>;
    selectedLabel: import('vue').ComputedRef<string>;
    currentRowKey: import('vue').ComputedRef<DataKey | undefined>;
    selectedRowKeys: import('vue').ComputedRef<DataKey[] | undefined>;
    updatePopover: () => void;
    updateSelectedItems: (force?: boolean) => void;
    updateVisible: (visible: boolean) => void;
    focusSearchInput: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, any, string, import('vue').PublicProps, any, {} | {
    [x: string]: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
