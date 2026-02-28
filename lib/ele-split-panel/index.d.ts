declare function __VLS_template(): {
    default?(_: {}): any;
    body?(_: {
        collapse: boolean;
    }): any;
    collapse?(_: {
        collapse: boolean;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: StringConstructor;
    minSize: NumberConstructor;
    maxSize: NumberConstructor;
    space: StringConstructor;
    customStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    customWrapStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    bodyStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    allowCollapse: BooleanConstructor;
    collapseStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    collapse: BooleanConstructor;
    vertical: BooleanConstructor;
    reverse: BooleanConstructor;
    resizable: BooleanConstructor;
    flexTable: BooleanConstructor;
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
}>, {
    toggleCollapse: (collapse?: boolean) => void;
    resetSize: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:collapse": (_collapse: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    size: StringConstructor;
    minSize: NumberConstructor;
    maxSize: NumberConstructor;
    space: StringConstructor;
    customStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    customWrapStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    bodyStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    allowCollapse: BooleanConstructor;
    collapseStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    collapse: BooleanConstructor;
    vertical: BooleanConstructor;
    reverse: BooleanConstructor;
    resizable: BooleanConstructor;
    flexTable: BooleanConstructor;
    responsive: {
        type: BooleanConstructor;
        default: null;
    };
}>> & Readonly<{
    "onUpdate:collapse"?: ((_collapse: boolean) => any) | undefined;
}>, {
    reverse: boolean;
    vertical: boolean;
    collapse: boolean;
    resizable: boolean;
    responsive: boolean;
    flexTable: boolean;
    allowCollapse: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
