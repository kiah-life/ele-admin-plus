import { VNode } from 'vue';
import { FormItemRule } from 'element-plus';
import { ProFormItemKey, ProFormItemProps, ProFormItemTypeData, ProFormItemRenderSlots } from '../types';
import { RenderProFormItemProps, RenderProFormContentProps } from '../props';

/**
 * 编辑模式拖拽排序分组名称
 */
export declare const sortableGroupName = "ProFormBuilderBodySortGroup";
/**
 * 代码字符串前缀
 */
export declare const codeStringPrefix = "/*__PRO_FORM__*/";
/**
 * 获取表单项的类型名称
 * @param item 表单项
 */
export declare function getItemTypeName(item: ProFormItemProps): string | undefined;
/**
 * 获取表单项类型数据
 * @param item 表单项
 * @param itemTypeData 组件类型数据
 */
export declare function getItemTypeData(item: ProFormItemProps, itemTypeData?: ProFormItemTypeData[]): ProFormItemTypeData | undefined;
/**
 * 生成兼容旧版本的组件默认属性
 * @param item 表单项
 */
export declare function getComponentLegacyProps(item: ProFormItemProps): Record<string, any>;
/**
 * 获取验证规则提示文本
 * @param label 表单项标题
 * @param requiredMessage 必填校验信息
 * @param placeholder 组件占位文本
 */
export declare function getRuleMessage(label?: string, requiredMessage?: string, placeholder?: string): string;
/**
 * 获取组件引用名称
 * @param item 表单项
 */
export declare function getComponentRefName(item: ProFormItemProps): string;
/**
 * 执行代码字符串
 * @param code 代码字符串
 * @param model 表单数据
 * @param items 全部表单项
 * @param searchExpand 搜索表单折叠展开状态
 * @param httpRequest 远程数据源请求工具
 * @param getProFormRefs 获取表单组件的组件引用数据的方法
 */
export declare function getCodeResult(code: string, form: Record<string, any>, items: ProFormItemProps[], searchExpand?: boolean, httpRequest?: any, getProFormRefs?: () => Record<string, any>): any;
/**
 * 判断表单项是否展示
 * @param item 表单项
 * @param form 表单数据
 * @param items 表单项数据
 * @param searchExpand 搜索表单展开状态
 * @param editable 是否是编辑模式
 */
export declare function isShowItem(item: ProFormItemProps, form: Record<string, any>, items: ProFormItemProps[], searchExpand?: boolean, editable?: boolean): any;
/**
 * 解析代码字符串
 * @param code 值
 * @param model 表单数据
 * @param items 全部表单项
 * @param searchExpand 搜索表单折叠展开状态
 * @param httpRequest 远程数据源请求工具
 * @param getProFormRefs 获取表单组件的组件引用数据的方法
 * @param getAndCacheCode 获取并缓存代码解析结果方法
 */
export declare function translateJsCode(code: any, form: Record<string, any>, items: ProFormItemProps[], searchExpand: boolean, httpRequest: any, getProFormRefs?: () => Record<string, any>, getAndCacheCode?: (code: string, codeResult: any) => any): {
    result: any;
    isCode: boolean;
};
/**
 * 渲染表单项组件
 * @param props 属性
 */
export declare function renderProFormItem(props: RenderProFormItemProps): string | VNode | Array<string | VNode> | undefined;
/**
 * 渲染表单项
 * @param props 属性
 */
export declare function renderProFormContent(props: RenderProFormContentProps): string | VNode | Array<VNode | string> | undefined;
/**
 * 表单项数据渲染组件
 */
export declare const ChildrenRender: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    contentExtraColProps: import('vue').PropType<import('../../ele-app/el').ElColProps>;
    parentItem: import('vue').PropType<ProFormItemProps>;
    formItems: import('vue').PropType<ProFormItemProps[]>;
    searchExpand: BooleanConstructor;
    sortDisabled: BooleanConstructor;
    containerSelectable: BooleanConstructor;
    slots: import('vue').PropType<ProFormItemRenderSlots>;
    getProFormRefs: import('vue').PropType<() => Record<string, any>>;
    getAndCacheCode: import('vue').PropType<(code: string, codeResult: any) => any>;
    updateItemValue: import('vue').PropType<(prop: string, value: any) => void>;
    updateItemsData: import('vue').PropType<(items: ProFormItemProps[], parentItem?: ProFormItemProps) => void>;
    updateActiveItemKey: import('vue').PropType<(activeKey?: ProFormItemKey) => void>;
    item: import('vue').PropType<ProFormItemProps>;
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript').Arrayable<import('element-plus/es/components/form/src/types').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    grid: import('vue').PropType<boolean | import('../../ele-app/el').ElColProps>;
    rowProps: import('vue').PropType<import('../../ele-app/el').ElRowProps>;
    editable: BooleanConstructor;
    items: import('vue').PropType<ProFormItemProps[]>;
    activeItemKey: import('vue').PropType<ProFormItemKey>;
    itemTypeData: import('vue').PropType<ProFormItemTypeData[]>;
    httpRequest: (ObjectConstructor | FunctionConstructor)[];
}>, () => string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> | (string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>)[] | undefined, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    updateItemValue: (_prop: string, _value: any) => true;
    updateItemsData: (_items: ProFormItemProps[], _parentItem?: ProFormItemProps) => true;
    'update:activeItemKey': (_activeKey?: ProFormItemKey) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    contentExtraColProps: import('vue').PropType<import('../../ele-app/el').ElColProps>;
    parentItem: import('vue').PropType<ProFormItemProps>;
    formItems: import('vue').PropType<ProFormItemProps[]>;
    searchExpand: BooleanConstructor;
    sortDisabled: BooleanConstructor;
    containerSelectable: BooleanConstructor;
    slots: import('vue').PropType<ProFormItemRenderSlots>;
    getProFormRefs: import('vue').PropType<() => Record<string, any>>;
    getAndCacheCode: import('vue').PropType<(code: string, codeResult: any) => any>;
    updateItemValue: import('vue').PropType<(prop: string, value: any) => void>;
    updateItemsData: import('vue').PropType<(items: ProFormItemProps[], parentItem?: ProFormItemProps) => void>;
    updateActiveItemKey: import('vue').PropType<(activeKey?: ProFormItemKey) => void>;
    item: import('vue').PropType<ProFormItemProps>;
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript').Arrayable<import('element-plus/es/components/form/src/types').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    grid: import('vue').PropType<boolean | import('../../ele-app/el').ElColProps>;
    rowProps: import('vue').PropType<import('../../ele-app/el').ElRowProps>;
    editable: BooleanConstructor;
    items: import('vue').PropType<ProFormItemProps[]>;
    activeItemKey: import('vue').PropType<ProFormItemKey>;
    itemTypeData: import('vue').PropType<ProFormItemTypeData[]>;
    httpRequest: (ObjectConstructor | FunctionConstructor)[];
}>> & Readonly<{
    onUpdateItemValue?: ((_prop: string, _value: any) => any) | undefined;
    onUpdateItemsData?: ((_items: ProFormItemProps[], _parentItem?: ProFormItemProps | undefined) => any) | undefined;
    "onUpdate:activeItemKey"?: ((_activeKey?: string | number | symbol | undefined) => any) | undefined;
}>, {
    editable: boolean;
    searchExpand: boolean;
    sortDisabled: boolean;
    containerSelectable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export type ChildrenRenderInstance = InstanceType<typeof ChildrenRender> | null;
