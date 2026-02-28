import { TabBarItem } from './types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: StringConstructor;
    items: import('vue').PropType<TabBarItem[]>;
    itemStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    type: import('vue').PropType<import('./types').TabBarType>;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (_value?: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: StringConstructor;
    items: import('vue').PropType<TabBarItem[]>;
    itemStyle: import('vue').PropType<import('../ele-app/types').StyleValue>;
    type: import('vue').PropType<import('./types').TabBarType>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((_value?: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
