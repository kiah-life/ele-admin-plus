import { ElMentionInstance } from '../ele-app/el';
import { MentionOption } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    options: import('vue').PropType<MentionOption[] | import('./types').MentionOptionsFunction>;
    prefix: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, string, boolean>;
    split: import('element-plus/es/utils/index' /** 组件引用 */).EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
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
}>, {
    reloadOptions: () => void;
    mentionRef: import('vue').Ref<ElMentionInstance, ElMentionInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (evt: FocusEvent) => void;
    blur: (evt: FocusEvent) => void;
    select: (option: import('element-plus').MentionOption, prefix: string) => void;
    "update:modelValue": (value: string) => void;
    search: (pattern: string, prefix: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    options: import('vue').PropType<MentionOption[] | import('./types').MentionOptionsFunction>;
    prefix: import('element-plus/es/utils/index').EpPropFinalized<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown, string, boolean>;
    split: import('element-plus/es/utils/index' /** 组件引用 */).EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
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
}>> & Readonly<{
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onSelect?: ((option: import('element-plus').MentionOption, prefix: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onSearch?: ((pattern: string, prefix: string) => any) | undefined;
}>, {
    type: string;
    placement: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom") | ((new (...args: any[]) => "top" | "bottom") | (() => "top" | "bottom"))[], unknown, unknown>;
    popperClass: string;
    clearable: boolean;
    disabled: boolean;
    loading: boolean;
    offset: number;
    autofocus: boolean;
    validateEvent: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popperOptions: Partial<import('element-plus').Options>;
    id: string;
    tabindex: import('element-plus/es/utils/index').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    autosize: import('element-plus').InputAutoSize;
    autocomplete: string;
    readonly: boolean;
    showPassword: boolean;
    showWordLimit: boolean;
    containerRole: string;
    inputStyle: import('vue').StyleValue;
    rows: number;
    prefix: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>;
    split: string;
    filterOption: import('element-plus/es/utils/index').EpPropMergeType<(new (...args: any[]) => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)) | (() => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)) | ((new (...args: any[]) => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)) | (() => false | ((pattern: string, option: import('element-plus').MentionOption) => boolean)))[], unknown, unknown>;
    showArrow: boolean;
    whole: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
