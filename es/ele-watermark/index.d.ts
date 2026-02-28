import { StyleValue } from '../ele-app/types';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    width: NumberConstructor;
    height: NumberConstructor;
    rotate: NumberConstructor;
    zIndex: NumberConstructor;
    image: StringConstructor;
    content: import('vue').PropType<string | string[]>;
    font: import('vue').PropType<import('./types').WatermarkFont>;
    gap: import('vue').PropType<import('./types').WatermarkGap>;
    offset: import('vue').PropType<import('./types').WatermarkOffset>;
    lineGap: {
        type: NumberConstructor;
        default: number;
    };
    customStyle: import('vue').PropType<Exclude<StyleValue, string>>;
    fixed: BooleanConstructor;
    wrapPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    width: NumberConstructor;
    height: NumberConstructor;
    rotate: NumberConstructor;
    zIndex: NumberConstructor;
    image: StringConstructor;
    content: import('vue').PropType<string | string[]>;
    font: import('vue').PropType<import('./types').WatermarkFont>;
    gap: import('vue').PropType<import('./types').WatermarkGap>;
    offset: import('vue').PropType<import('./types').WatermarkOffset>;
    lineGap: {
        type: NumberConstructor;
        default: number;
    };
    customStyle: import('vue').PropType<Exclude<StyleValue, string>>;
    fixed: BooleanConstructor;
    wrapPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    lineGap: number;
    fixed: boolean;
    wrapPosition: boolean;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
