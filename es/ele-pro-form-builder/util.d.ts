import { ProFormItemProps } from '../ele-pro-form/types';
import { TemplateFormProps } from './types';

export { defaultComponentData } from './components/component-data';
/**
 * 屏幕尺寸选项
 */
export declare const screenItems: ({
    value: string;
    icon: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    iconStyle?: undefined;
} | {
    value: string;
    icon: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    iconStyle: {
        transform: string;
    };
})[];
/**
 * 表单属性设置的表单项配置
 */
export declare const defaultConfigFormItems: ProFormItemProps[];
/**
 * 表单属性设置的组件预设属性值
 */
export declare const defaultConfigFormPresetProps: TemplateFormProps;
