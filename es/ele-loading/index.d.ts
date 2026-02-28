declare function __VLS_template(): {
    default?(_: {}): any;
    spinner?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    loading: BooleanConstructor;
    text: StringConstructor;
    background: StringConstructor;
    spinner: StringConstructor;
    svgViewBox: StringConstructor;
    type: {
        type: import('vue').PropType<import('./types').LoadingType>;
        default: string;
    };
    blur: BooleanConstructor;
    size: import('vue').PropType<import('./types').LoadingSize>;
    spinnerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    textStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    loading: BooleanConstructor;
    text: StringConstructor;
    background: StringConstructor;
    spinner: StringConstructor;
    svgViewBox: StringConstructor;
    type: {
        type: import('vue').PropType<import('./types').LoadingType>;
        default: string;
    };
    blur: BooleanConstructor;
    size: import('vue').PropType<import('./types').LoadingSize>;
    spinnerStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    textStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
}>> & Readonly<{}>, {
    type: import('./types').LoadingType;
    blur: boolean;
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
