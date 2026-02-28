import { PropType, ExtractPropTypes } from 'vue';
import { RadioType, RadioOption, RadioOptionFunction } from './types';

export { radioGroupEmits } from 'element-plus';
/**
 * 属性
 */
export declare const radioGroupProps: {
    /** 风格类型 */
    type: PropType<RadioType>;
    /** 选项数据 */
    options: PropType<RadioOption[] | RadioOptionFunction>;
    ariaLabel: StringConstructor;
    id: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('@vue/runtime-core').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
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
};
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
