import { PropType, ExtractPropTypes } from 'vue';
import { CheckboxType, CheckboxOption, CheckboxOptionFunction } from './types';

export { checkboxGroupEmits } from 'element-plus';
/**
 * 属性
 */
export declare const checkboxGroupProps: {
    /** 风格类型 */
    type: PropType<CheckboxType>;
    /** 选项数据 */
    options: PropType<CheckboxOption[] | CheckboxOptionFunction>;
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
};
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
