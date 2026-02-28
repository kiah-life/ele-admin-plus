declare function __VLS_template(): {
    head?(_: {}): any;
    side?(_: {}): any;
    tabs?(_: {}): any;
    body?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** logo是否位于顶栏 */
    isHeaderLogo: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** logo是否位于顶栏 */
    isHeaderLogo: BooleanConstructor;
}>> & Readonly<{}>, {
    isHeaderLogo: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
