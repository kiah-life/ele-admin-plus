import { ElRadioGroupInstance } from '../ele-app/el';
import { RadioOption } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: import('vue').PropType<import('./types').RadioType>;
    options: import('vue').PropType<RadioOption[] | import('./types').RadioOptionFunction>;
    ariaLabel: StringConstructor;
    id: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
    fill: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    textColor: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    name: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>, {
    reloadOptions: () => void;
    radioGroupRef: import('vue').Ref<ElRadioGroupInstance, ElRadioGroupInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean | undefined) => void;
    change: (val: string | number | boolean | undefined) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: import('vue').PropType<import('./types').RadioType>;
    options: import('vue').PropType<RadioOption[] | import('./types').RadioOptionFunction>;
    ariaLabel: StringConstructor;
    id: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    modelValue: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
    fill: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    textColor: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    name: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
    onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
}>, {
    modelValue: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    disabled: boolean;
    name: string;
    fill: string;
    validateEvent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    textColor: string;
    id: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
