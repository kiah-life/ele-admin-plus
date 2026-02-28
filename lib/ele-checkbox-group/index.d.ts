import { ElCheckboxGroupInstance } from '../ele-app/el';
import { CheckboxOption } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: import('vue').PropType<import('./types').CheckboxType>;
    options: import('vue').PropType<CheckboxOption[] | import('./types').CheckboxOptionFunction>;
    ariaLabel: StringConstructor;
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').CheckboxGroupValueType) | (() => import('element-plus').CheckboxGroupValueType) | ((new (...args: any[]) => import('element-plus').CheckboxGroupValueType) | (() => import('element-plus').CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fill: StringConstructor;
    textColor: StringConstructor;
    tag: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>, {
    reloadOptions: () => void;
    checkboxGroupRef: import('vue').Ref<ElCheckboxGroupInstance, ElCheckboxGroupInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: import('element-plus').CheckboxGroupValueType) => void;
    change: (val: import('element-plus').CheckboxValueType[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: import('vue').PropType<import('./types').CheckboxType>;
    options: import('vue').PropType<CheckboxOption[] | import('./types').CheckboxOptionFunction>;
    ariaLabel: StringConstructor;
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => import('element-plus').CheckboxGroupValueType) | (() => import('element-plus').CheckboxGroupValueType) | ((new (...args: any[]) => import('element-plus').CheckboxGroupValueType) | (() => import('element-plus').CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fill: StringConstructor;
    textColor: StringConstructor;
    tag: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((val: import('element-plus').CheckboxGroupValueType) => any) | undefined;
    onChange?: ((val: import('element-plus').CheckboxValueType[]) => any) | undefined;
}>, {
    modelValue: import('element-plus').CheckboxGroupValueType;
    disabled: boolean;
    tag: string;
    validateEvent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
