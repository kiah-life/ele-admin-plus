import { ElFormInstance } from '../ele-app/el';
import { ProFormItemProps, ProFormItemKey } from './types';

declare function __VLS_template(): Partial<Record<string, (_: any) => any>> & Partial<Record<string, (_: any) => any>> & {
    topExtra?(_: {}): any;
    bottomExtra?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    items: import('vue').PropType<ProFormItemProps[]>;
    grid: import('vue').PropType<boolean | import('../ele-app/el').ElColProps>;
    rowProps: import('vue').PropType<import('../ele-app/el').ElRowProps>;
    footer: BooleanConstructor;
    footerProps: import('vue').PropType<import('../ele-app/el').ElFormItemProps>;
    footerSlots: ObjectConstructor;
    footerColProps: {
        type: import('vue').PropType<import('../ele-app/el').ElColProps>;
        default: () => {
            span: number;
        };
    };
    footerStyle: import('vue').PropType<import('vue').CSSProperties>;
    submitText: {
        type: StringConstructor;
        default: string;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    submitButtonProps: import('vue').PropType<import('../ele-app/el').ElButtonProps>;
    resetButtonProps: import('vue').PropType<import('../ele-app/el').ElButtonProps>;
    showSearchExpand: BooleanConstructor;
    searchExpandButtonProps: import('vue').PropType<import('../ele-app/el').ElLinkProps>;
    searchExpandText: {
        type: StringConstructor;
        default: string;
    };
    searchShrinkText: {
        type: StringConstructor;
        default: string;
    };
    searchExpand: BooleanConstructor;
    preventFormSubmit: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: BooleanConstructor;
    activeItemKey: import('vue').PropType<ProFormItemKey>;
    itemTypeData: import('vue').PropType<import('./types').ProFormItemTypeData[]>;
    httpRequest: (ObjectConstructor | FunctionConstructor)[];
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    labelSuffix: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>, {
    formRef: import('vue').Ref<ElFormInstance, ElFormInstance>;
    validate: (callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult;
    validateField: (props?: import('element-plus/es/utils/typescript').Arrayable<import('element-plus').FormItemProp>, callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult;
    resetFields: (props?: import('element-plus/es/utils/typescript').Arrayable<import('element-plus').FormItemProp>) => void;
    clearValidate: (props? /** 提交 */: import('element-plus/es/utils/typescript').Arrayable<import('element-plus').FormItemProp>) => void;
    scrollToField: (prop: import('element-plus').FormItemProp) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reset: () => void;
    submit: (_model: Record<string, any>) => void;
    validate: (prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => void;
    "update:searchExpand": (_expand: boolean) => void;
    updateValue: (_prop: string, _value: unknown) => void;
    "update:items": (_items: ProFormItemProps[]) => void;
    "update:activeItemKey": (_activeKey: string | number | symbol) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    items: import('vue').PropType<ProFormItemProps[]>;
    grid: import('vue').PropType<boolean | import('../ele-app/el').ElColProps>;
    rowProps: import('vue').PropType<import('../ele-app/el').ElRowProps>;
    footer: BooleanConstructor;
    footerProps: import('vue').PropType<import('../ele-app/el').ElFormItemProps>;
    footerSlots: ObjectConstructor;
    footerColProps: {
        type: import('vue').PropType<import('../ele-app/el').ElColProps>;
        default: () => {
            span: number;
        };
    };
    footerStyle: import('vue').PropType<import('vue').CSSProperties>;
    submitText: {
        type: StringConstructor;
        default: string;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    submitButtonProps: import('vue').PropType<import('../ele-app/el').ElButtonProps>;
    resetButtonProps: import('vue').PropType<import('../ele-app/el').ElButtonProps>;
    showSearchExpand: BooleanConstructor;
    searchExpandButtonProps: import('vue').PropType<import('../ele-app/el').ElLinkProps>;
    searchExpandText: {
        type: StringConstructor;
        default: string;
    };
    searchShrinkText: {
        type: StringConstructor;
        default: string;
    };
    searchExpand: BooleanConstructor;
    preventFormSubmit: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: BooleanConstructor;
    activeItemKey: import('vue').PropType<ProFormItemKey>;
    itemTypeData: import('vue').PropType<import('./types').ProFormItemTypeData[]>;
    httpRequest: (ObjectConstructor | FunctionConstructor)[];
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    labelSuffix: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils/index').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>> & Readonly<{
    onReset?: (() => any) | undefined;
    onSubmit?: ((_model: Record<string, any>) => any) | undefined;
    onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
    "onUpdate:searchExpand"?: ((_expand: boolean) => any) | undefined;
    onUpdateValue?: ((_prop: string, _value: unknown) => any) | undefined;
    "onUpdate:items"?: ((_items: ProFormItemProps[]) => any) | undefined;
    "onUpdate:activeItemKey"?: ((_activeKey: string | number | symbol) => any) | undefined;
}>, {
    disabled: boolean;
    footer: boolean;
    labelPosition: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
    requireAsteriskPosition: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    labelWidth: string | number;
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    editable: boolean;
    resetText: string;
    footerColProps: import('../ele-app/el').ElColProps;
    submitText: string;
    showSearchExpand: boolean;
    searchExpandText: string;
    searchShrinkText: string;
    searchExpand: boolean;
    preventFormSubmit: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
