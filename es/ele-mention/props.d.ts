import { PropType, ExtractPropTypes } from 'vue';
import { MentionOption, MentionOptionsFunction } from './types';

export { mentionEmits } from 'element-plus';
/**
 * 属性
 */
export declare const mentionProps: {
    /** 数据 */
    options: PropType<MentionOption[] | MentionOptionsFunction>;
    prefix: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, string, boolean>;
    split: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    filterOption: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)) | (() => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)) | ((new (...args: any[]) => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)) | (() => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)))[], unknown, unknown, () => (pattern: string, option: import('element-plus').MentionOption) => boolean, boolean>;
    placement: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom") | ((new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom"))[], unknown, unknown, string, boolean>;
    showArrow: BooleanConstructor;
    offset: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    whole: BooleanConstructor;
    checkIsWhole: {
        readonly type: import('vue').PropType<(pattern: string, prefix: string) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: StringConstructor;
    loading: BooleanConstructor;
    popperClass: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    popperOptions: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>) | ((new (...args: any[]) => Partial<import('element-plus').Options>) | (() => Partial<import('element-plus').Options>))[], unknown, unknown, () => Partial<import('element-plus').Options>, boolean>;
    ariaLabel: StringConstructor;
    id: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    maxlength: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    minlength: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    type: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    resize: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autosize: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => boolean | {
        minRows?: number;
        maxRows?: number;
    }) | (() => import('element-plus').InputAutoSize) | ((new (...args: any[]) => boolean | {
        minRows?: number;
        maxRows?: number;
    }) | (() => import('element-plus').InputAutoSize))[], unknown, unknown, false, boolean>;
    autocomplete: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    formatter: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parser: {
        readonly type: import('vue').PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placeholder: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    form: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly: BooleanConstructor;
    clearable: BooleanConstructor;
    showPassword: BooleanConstructor;
    showWordLimit: BooleanConstructor;
    suffixIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    prefixIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    containerRole: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    tabindex: import('element-plus/es/utils/index').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    validateEvent: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    inputStyle: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | ((new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue))[], unknown, unknown, () => import('element-plus/es/utils/typescript').Mutable<{}>, boolean>;
    autofocus: BooleanConstructor;
    rows: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
};
export type MentionProps = ExtractPropTypes<typeof mentionProps>;
