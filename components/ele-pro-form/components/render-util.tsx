import type { VNode } from 'vue';
import { defineComponent, h, mergeProps } from 'vue';
import VueDraggable from 'vuedraggable';
import type { FormItemRule } from 'element-plus';
import { ElRow, ElCol, ElFormItem } from 'element-plus';
import { omit } from '../../utils/core';
import { getValue } from '../util';
import type {
  ProFormItemKey,
  ProFormItemProps,
  ProFormItemTypeData,
  ProFormItemRenderSlots,
  ProFormItemPropsFunctionParams
} from '../types';
import type {
  RenderProFormItemProps,
  RenderProFormContentProps,
  RenderSlotProFormParam
} from '../props';
import { childrenRenderProps } from '../props';
import BuilderWrapper from './builder-wrapper.vue';
import { defaultItemTypeData } from './item-type-data';

/**
 * 编辑模式拖拽排序分组名称
 */
export const sortableGroupName = 'ProFormBuilderBodySortGroup';

/**
 * 代码字符串前缀
 */
export const codeStringPrefix = '/*__PRO_FORM__*/';

/**
 * 获取表单项的类型名称
 * @param item 表单项
 */
export function getItemTypeName(item: ProFormItemProps) {
  let itemType = item.type;
  const divTag = item.props?.is;
  // 类型兼容旧版
  if (itemType === 'div' && divTag) {
    if (divTag === 'tr') {
      itemType = 'tableRow';
    } else if (divTag === 'td') {
      itemType = 'tableCell';
    } else if (divTag === 'ele-table' || divTag === 'EleTable') {
      itemType = 'table';
    } else if (divTag === 'el-carousel' || divTag === 'ElCarousel') {
      itemType = 'carousel';
    } else if (divTag === 'el-carousel-item' || divTag === 'ElCarouselItem') {
      itemType = 'carouselItem';
    } else if (divTag === 'el-icon' || divTag === 'ElIcon') {
      itemType = 'icon';
    } else if (divTag === 'ele-admin-layout' || divTag === 'EleAdminLayout') {
      itemType = 'adminLayout';
    } else if (divTag === 'el-alert' || divTag === 'EleAlert') {
      itemType = 'alert';
    }
  }
  return itemType;
}

/**
 * 获取表单项类型数据
 * @param item 表单项
 * @param itemTypeData 组件类型数据
 */
export function getItemTypeData(
  item: ProFormItemProps,
  itemTypeData?: ProFormItemTypeData[]
) {
  const itemType = getItemTypeName(item);
  const typeData = [...(itemTypeData || []), ...defaultItemTypeData].find(
    (d) => d.type === itemType
  );
  return typeData;
}

/**
 * 生成兼容旧版本的组件默认属性
 * @param item 表单项
 */
export function getComponentLegacyProps(item: ProFormItemProps) {
  const result: Record<string, any> = {};
  const itemType = getItemTypeName(item);
  if (itemType) {
    const options = (item as any).options;
    if (options) {
      if (
        [
          'select',
          'multipleSelect',
          'radio',
          'radioButton',
          'checkbox',
          'checkboxButton',
          'cascader',
          'multipleCascader',
          'mention'
        ].includes(itemType)
      ) {
        result.options = options;
      } else if (['treeSelect', 'treeMultipleSelect'].includes(itemType)) {
        result.data = options;
      } else if (['checkCard', 'multipleCheckCard'].includes(itemType)) {
        result.items = options;
      } else if (itemType === 'autocomplete') {
        result.fetchSuggestions = options;
      }
    }
    if (item.label != null) {
      if (['descriptionsItem', 'carouselItem'].includes(itemType)) {
        result.label = item.label;
      } else if (['alert', 'collapseItem', 'descriptions'].includes(itemType)) {
        result.title = item.label;
      } else if (itemType === 'card') {
        result.header = item.label;
      } else if (itemType === 'image') {
        result.alt = item.label;
      }
    }
    if (item.prop != null) {
      if (['collapseItem', 'carouselItem'].includes(itemType)) {
        result.name = item.prop;
      }
    }
  }
  return result;
}

/**
 * 获取验证规则提示文本
 * @param label 表单项标题
 * @param requiredMessage 必填校验信息
 * @param placeholder 组件占位文本
 */
export function getRuleMessage(
  label?: string,
  requiredMessage?: string,
  placeholder?: string
) {
  if (typeof requiredMessage === 'string' && requiredMessage) {
    return requiredMessage;
  }
  if (typeof placeholder === 'string' && placeholder) {
    return placeholder;
  }
  return `${label ?? ''}必填`;
}

/**
 * 获取组件引用名称
 * @param item 表单项
 */
export function getComponentRefName(item: ProFormItemProps) {
  const prop = item.prop;
  if (prop == null || prop === '' || String(prop).trim() === '') {
    return `${String(item.key)}Ref`;
  }
  return `${String(prop)}Ref`;
}

/**
 * 执行代码字符串
 * @param code 代码字符串
 * @param model 表单数据
 * @param items 全部表单项
 * @param searchExpand 搜索表单折叠展开状态
 * @param httpRequest 远程数据源请求工具
 * @param getProFormRefs 获取表单组件的组件引用数据的方法
 */
export function getCodeResult(
  code: string,
  form: Record<string, any>,
  items: ProFormItemProps[],
  searchExpand?: boolean,
  httpRequest?: any,
  getProFormRefs?: () => Record<string, any>
) {
  try {
    return new Function(
      'form',
      'items',
      'searchExpand',
      'httpRequest',
      'getProFormRefs',
      `return (${code})`
    )(form, items, searchExpand, httpRequest, getProFormRefs);
  } catch (e) {
    console.error(e);
  }
}

/**
 * 判断表单项是否展示
 * @param item 表单项
 * @param form 表单数据
 * @param items 表单项数据
 * @param searchExpand 搜索表单展开状态
 * @param editable 是否是编辑模式
 */
export function isShowItem(
  item: ProFormItemProps,
  form: Record<string, any>,
  items: ProFormItemProps[],
  searchExpand?: boolean,
  editable?: boolean
) {
  if (editable) {
    return true;
  }
  if (item.prop == null && item.key == null) {
    return false;
  }
  if (item.vIf != null) {
    if (typeof item.vIf === 'function') {
      return item.vIf(form, items, searchExpand);
    }
    if (typeof item.vIf === 'string' && item.vIf.trim().length) {
      return getCodeResult(item.vIf, form, items, searchExpand);
    }
    if (item.vIf === false) {
      return false;
    }
  }
  return true;
}

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
export function translateJsCode(
  code: any,
  form: Record<string, any>,
  items: ProFormItemProps[],
  searchExpand: boolean,
  httpRequest: any,
  getProFormRefs?: () => Record<string, any>,
  getAndCacheCode?: (code: string, codeResult: any) => any
): { result: any; isCode: boolean } {
  if (code != null) {
    if (typeof code === 'string') {
      if (code.startsWith(codeStringPrefix)) {
        const result = getCodeResult(
          code,
          form,
          items,
          searchExpand,
          httpRequest,
          getProFormRefs
        );
        if (getAndCacheCode && typeof result === 'function') {
          return { result: getAndCacheCode(code, result), isCode: true };
        }
        return { result, isCode: true };
      }
      return { result: code, isCode: false };
    } else if (Array.isArray(code)) {
      const arrayResult: any[] = [];
      let arrayIsCode: boolean = false;
      code.forEach((c) => {
        const { result, isCode } = translateJsCode(
          c,
          form,
          items,
          searchExpand,
          httpRequest,
          getProFormRefs,
          getAndCacheCode
        );
        arrayResult.push(result);
        if (isCode) {
          arrayIsCode = true;
        }
      });
      if (arrayIsCode) {
        return { result: arrayResult, isCode: true };
      }
      return { result: code, isCode: false };
    } else if (typeof code === 'object') {
      const objectResult: Record<string, any> = {};
      let objectIsCode: boolean = false;
      Object.keys(code).forEach((k) => {
        const { result, isCode } = translateJsCode(
          code[k],
          form,
          items,
          searchExpand,
          httpRequest,
          getProFormRefs,
          getAndCacheCode
        );
        objectResult[k] = result;
        if (isCode) {
          objectIsCode = true;
        }
      });
      if (objectIsCode) {
        return { result: objectResult, isCode: true };
      }
      return { result: code, isCode: false };
    }
  }
  return { result: code, isCode: false };
}

/**
 * 渲染表单项组件
 * @param props 属性
 */
export function renderProFormItem(
  props: RenderProFormItemProps
): string | VNode | Array<string | VNode> | undefined {
  const slots = props.slots || {};
  const formData = props.model || {};
  const typeData = getItemTypeData(props.item, props.itemTypeData);
  const typeSlot = props.item?.type ? slots[props.item.type] : void 0;
  if (!typeSlot && !typeData) {
    return;
  }

  /** 组件绑定值 */
  const modelValue =
    props.item.prop == null ? void 0 : getValue(formData, props.item.prop);

  /** 更新组件绑定值方法 */
  const handleUpdateModelValue = (value: unknown) => {
    const propName = props.item.prop;
    if (propName != null && props.updateItemValue) {
      props.updateItemValue(propName, value);
    }
  };

  /** 自定义渲染的方法参数 */
  const propsFunctionParams: ProFormItemPropsFunctionParams = {
    item: props.item,
    modelValue,
    updateModelValue: handleUpdateModelValue,
    isShowFormItem: (cItem) =>
      isShowItem(
        cItem,
        formData,
        props.formItems || [],
        props.searchExpand,
        props.editable
      ),
    renderChildren: (cItem, cSortDisabled, cContainerSelectable) =>
      renderProFormContent({
        model: formData,
        items: cItem.children,
        rules: props.rules,
        grid: cItem.grid,
        rowProps: cItem.rowProps,
        parentItem: cItem,
        formItems: props.formItems,
        searchExpand: props.searchExpand,
        editable: props.editable,
        sortDisabled: !!cSortDisabled,
        containerSelectable: !!cContainerSelectable,
        activeItemKey: props.activeItemKey,
        updateItemValue: props.updateItemValue,
        updateItemsData: props.updateItemsData,
        updateActiveItemKey: props.updateActiveItemKey,
        getAndCacheCode: props.getAndCacheCode,
        itemTypeData: props.itemTypeData,
        httpRequest: props.httpRequest,
        getProFormRefs: props.getProFormRefs,
        slots
      })
  };

  /** 自定义插槽的增加参数 */
  const slotProFormParams: RenderSlotProFormParam = {
    item: props.item,
    model: formData,
    rules: props.rules,
    formItems: props.formItems,
    searchExpand: props.searchExpand,
    editable: props.editable,
    activeItemKey: props.activeItemKey,
    itemTypeData: props.itemTypeData,
    httpRequest: props.httpRequest,
    getProFormRefs: props.getProFormRefs,
    updateItemValue: props.updateItemValue,
    updateItemsData: props.updateItemsData,
    updateActiveItemKey: props.updateActiveItemKey,
    slots
  };

  /** 渲染组件时传递插槽 */
  const itemSlots: ProFormItemRenderSlots = {};
  if (!typeSlot) {
    const itemSlotMap = props.item.slots || {};
    Object.keys(itemSlotMap).forEach((name) => {
      if (itemSlotMap[name]) {
        const slotFuntion = slots[itemSlotMap[name]];
        if (slotFuntion) {
          itemSlots[name] = (slotProps) =>
            slotFuntion({ proForm: slotProFormParams, ...(slotProps || {}) });
        }
      }
    });
    if (typeData && typeData.reservedSlots) {
      const itemReservedSlots = typeData.reservedSlots(propsFunctionParams);
      Object.keys(itemReservedSlots).forEach((name) => {
        if (itemReservedSlots[name]) {
          itemSlots[name] = itemReservedSlots[name];
        }
      });
    }

    /** 渲染组件子级 */
    if (!itemSlots.default) {
      const csd = !(props.item.containerDraggable ?? !typeData?.sortDisabled);
      const isRenderLabel =
        typeData?.renderLabelText &&
        props.item.label != null &&
        props.item.label !== '';
      const isRenderChildren =
        (!typeData || typeData.isContainer) &&
        ((!csd && props.editable) ||
          (props.item.children && props.item.children.length));
      if (isRenderLabel || isRenderChildren) {
        itemSlots.default = () => {
          const nodes: Array<string | VNode> = [];
          if (isRenderLabel && props.item.label != null) {
            nodes.push(props.item.label);
          }
          if (isRenderChildren) {
            // 容器组件渲染子级
            const contentNode = renderProFormContent({
              model: formData,
              items: props.item.children,
              rules: props.rules,
              grid: props.item.grid,
              rowProps: props.item.rowProps,
              parentItem: props.item,
              formItems: props.formItems,
              searchExpand: props.searchExpand,
              editable: props.editable,
              sortDisabled: csd,
              containerSelectable: !!typeData?.containerSelectable,
              activeItemKey: props.activeItemKey,
              updateItemValue: props.updateItemValue,
              updateItemsData: props.updateItemsData,
              updateActiveItemKey: props.updateActiveItemKey,
              getAndCacheCode: props.getAndCacheCode,
              itemTypeData: props.itemTypeData,
              httpRequest: props.httpRequest,
              getProFormRefs: props.getProFormRefs,
              slots
            });
            if (contentNode) {
              if (Array.isArray(contentNode)) {
                contentNode.forEach((node) => {
                  nodes.push(node);
                });
              } else {
                nodes.push(contentNode);
              }
            }
          }
          return nodes;
        };
      }
    }
  }

  /** 渲染对应组件 */
  const componentTag = typeData?.component || 'div';
  const isDivTag = componentTag === 'div' || componentTag === 'td';
  const componentPropsData = translateJsCode(
    props.item.props || {},
    formData,
    props.formItems || [],
    props.searchExpand,
    props.httpRequest,
    props.getProFormRefs,
    props.getAndCacheCode
  ).result;
  const componentNode = typeSlot
    ? typeSlot({
        item: props.item,
        model: formData,
        modelValue: modelValue,
        updateValue: handleUpdateModelValue,
        updatePropValue: props.updateItemValue,
        proForm: slotProFormParams
      })
    : h(
        (isDivTag ? props.item.props?.is : void 0) || componentTag,
        mergeProps(
          { key: props.key },
          getComponentLegacyProps(props.item),
          typeData?.defaultProps?.(propsFunctionParams) || {},
          isDivTag ? omit(componentPropsData, ['is']) : componentPropsData,
          typeData?.reservedProps?.(propsFunctionParams) || {},
          { ref: getComponentRefName(props.item) }
        ),
        itemSlots
      );

  /** 渲染展示类型或容器类型组件 */
  if (
    typeData?.isContainer ||
    props.item.itemType === 'container' ||
    props.item.itemType === 'view'
  ) {
    return componentNode;
  }

  /** 渲染表单类型组件 */
  const itemPropsData = translateJsCode(
    props.item.itemProps || {},
    formData,
    props.formItems || [],
    props.searchExpand,
    props.httpRequest,
    props.getProFormRefs,
    props.getAndCacheCode
  ).result;
  const labelWidth = itemPropsData.labelWidth;
  const formItemLabelWidth =
    typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;
  // 传递插槽
  const formItemSlots: ProFormItemRenderSlots = {};
  const formItemSlotMap = props.item.itemSlots || {};
  Object.keys(formItemSlotMap).forEach((name) => {
    if (formItemSlotMap[name] && slots[formItemSlotMap[name]]) {
      formItemSlots[name] = slots[formItemSlotMap[name]];
    }
  });
  formItemSlots.default = () => componentNode;
  // 表单验证规则
  const iRule = itemPropsData.rules;
  const iRules = iRule ? (Array.isArray(iRule) ? iRule : [iRule]) : void 0;
  const fRule =
    props.rules && props.item.prop
      ? getValue(props.rules, props.item.prop)
      : void 0;
  const fRules = fRule ? (Array.isArray(fRule) ? fRule : [fRule]) : void 0;
  const formItemRules: FormItemRule[] = iRules || fRules || [];
  const trigger = typeData?.requiredTrigger ?? 'change';
  const message = getRuleMessage(
    props.item.label,
    props.item.requiredMessage,
    componentPropsData.placeholder
  );
  if (props.item.required) {
    formItemRules.unshift({ required: true, message, trigger });
  }
  return (
    <ElFormItem
      key={props.key}
      label={props.item.label}
      {...itemPropsData}
      labelWidth={formItemLabelWidth}
      prop={props.item.prop}
      rules={formItemRules}
    >
      {formItemSlots}
    </ElFormItem>
  );
}

/**
 * 渲染表单项
 * @param props 属性
 */
export function renderProFormContent(
  props: RenderProFormContentProps
): string | VNode | Array<VNode | string> | undefined {
  const nodes: Array<VNode | string> = [];
  const slots = props.slots || {};
  const itemsData = props.items || [];
  const formData = props.model || {};
  const ownSlots = ['default', 'contentExtra'];

  /** 获取表单项组件 */
  const getProFormItemNode = (
    item: ProFormItemProps,
    editable?: boolean,
    sortDisabled?: boolean
  ): string | VNode | Array<VNode | string> | undefined => {
    const itemKey = item.key ?? item.prop;
    const defaultSlot = () => {
      return renderProFormItem({
        key: itemKey,
        item,
        model: formData,
        rules: props.rules,
        formItems: props.formItems,
        searchExpand: props.searchExpand,
        editable: props.editable,
        activeItemKey: props.activeItemKey,
        updateItemValue: props.updateItemValue,
        updateItemsData: props.updateItemsData,
        updateActiveItemKey: props.updateActiveItemKey,
        getAndCacheCode: props.getAndCacheCode,
        itemTypeData: props.itemTypeData,
        httpRequest: props.httpRequest,
        getProFormRefs: props.getProFormRefs,
        slots: omit(slots, ownSlots)
      });
    };
    if (!editable) {
      return defaultSlot();
    }
    return (
      <BuilderWrapper
        key={itemKey}
        item={item}
        handle={!sortDisabled}
        activeItemKey={props.activeItemKey}
        onUpdate:activeItemKey={props.updateActiveItemKey}
      >
        {{
          default: defaultSlot,
          builderItemHandleContent: slots.builderItemHandleContent,
          builderItemTools: slots.builderItemTools
        }}
      </BuilderWrapper>
    );
  };

  /** 包裹栅格布局 */
  if (props.grid) {
    itemsData.forEach((item) => {
      const itemKey = item.key ?? item.prop;
      const gridColProps = props.grid === true ? { span: 12 } : props.grid;
      const itemColProps = translateJsCode(
        item.colProps || {},
        formData,
        props.formItems || [],
        props.searchExpand,
        props.httpRequest,
        props.getProFormRefs,
        props.getAndCacheCode
      ).result;
      if (props.editable && !props.sortDisabled) {
        // 编辑模式
        nodes.push(
          <ElCol key={itemKey} {...gridColProps} {...itemColProps}>
            {getProFormItemNode(item, true, true)}
          </ElCol>
        );
      } else if (
        isShowItem(
          item,
          formData,
          props.formItems || [],
          props.searchExpand,
          props.editable
        )
      ) {
        // 正常模式
        nodes.push(
          <ElCol key={itemKey} {...gridColProps} {...itemColProps}>
            {getProFormItemNode(item)}
          </ElCol>
        );
      }
    });
    // 额外内容
    if (slots.contentExtra) {
      nodes.push(
        <ElCol
          {...translateJsCode(
            props.contentExtraColProps || {},
            formData,
            props.formItems || [],
            props.searchExpand,
            props.httpRequest,
            props.getProFormRefs,
            props.getAndCacheCode
          ).result}
        >
          {slots.contentExtra()}
        </ElCol>
      );
    }
    return (
      <ElRow
        {...translateJsCode(
          props.rowProps || {},
          formData,
          props.formItems || [],
          props.searchExpand,
          props.httpRequest,
          props.getProFormRefs,
          props.getAndCacheCode
        ).result}
      >
        {nodes}
      </ElRow>
    );
  }

  /** 不包裹栅格布局 */
  if (props.editable && !props.sortDisabled) {
    // 编辑模式
    const footerSlot = () => (
      <div class="ele-pro-form-builder-item-tool-wrapper">
        <div class="ele-pro-form-builder-item-handle is-disabled">
          {slots.builderItemHandleContent ? (
            slots.builderItemHandleContent({
              item: props.parentItem,
              activeItemKey: props.activeItemKey
            })
          ) : (
            <div class="ele-pro-form-builder-item-handle-content">
              {props.parentItem?.type}
            </div>
          )}
        </div>
        <div class="ele-pro-form-builder-item-tools">
          {slots.builderItemTools
            ? slots.builderItemTools({
                item: props.parentItem,
                activeItemKey: props.activeItemKey
              })
            : void 0}
        </div>
      </div>
    );
    // 更新表单项数据排序方法
    const handleUpdateModelValue = (data: ProFormItemProps[]) => {
      if (props.updateItemsData) {
        props.updateItemsData(data, props.parentItem);
      }
    };
    // 可选择的构建容器点击进行选中方法
    const handleContainerBuilderWrapperClick = (e: MouseEvent) => {
      const parentItemKey = props.parentItem?.key;
      if (props.containerSelectable && parentItemKey != null) {
        e.stopPropagation();
        if (props.updateActiveItemKey) {
          props.updateActiveItemKey(parentItemKey);
        }
      }
    };
    nodes.push(
      <VueDraggable
        itemKey="key"
        animation={150}
        modelValue={itemsData}
        setData={() => void 0}
        group={sortableGroupName}
        handle=".ele-pro-form-builder-item-handle"
        draggable=".ele-pro-form-builder-item-wrapper"
        class={[
          'ele-pro-form-builder-container-wrapper',
          { 'is-selectable': props.containerSelectable },
          {
            'is-active':
              props.containerSelectable &&
              props.parentItem &&
              props.parentItem.key != null &&
              props.activeItemKey != null &&
              props.activeItemKey === props.parentItem.key
          }
        ]}
        onUpdate:modelValue={handleUpdateModelValue}
        onClick={handleContainerBuilderWrapperClick}
      >
        {{
          item: ({ element }) => getProFormItemNode(element, true),
          footer:
            props.containerSelectable && props.parentItem ? footerSlot : void 0
        }}
      </VueDraggable>
    );
  } else {
    // 正常模式
    itemsData.forEach((item) => {
      if (
        isShowItem(
          item,
          formData,
          props.formItems || [],
          props.searchExpand,
          props.editable
        )
      ) {
        const proFormItemNode = getProFormItemNode(item);
        if (proFormItemNode) {
          if (Array.isArray(proFormItemNode)) {
            proFormItemNode.forEach((node) => {
              nodes.push(node);
            });
          } else {
            nodes.push(proFormItemNode);
          }
        }
      }
    });
  }
  // 额外内容
  if (slots.contentExtra) {
    const contentExtraNodes = slots.contentExtra();
    if (contentExtraNodes) {
      if (Array.isArray(contentExtraNodes)) {
        contentExtraNodes.forEach((node) => {
          nodes.push(node);
        });
      } else {
        nodes.push(contentExtraNodes);
      }
    }
  }
  return nodes;
}

/**
 * 表单项数据渲染组件
 */
export const ChildrenRender = defineComponent({
  name: 'ChildrenRender',
  props: childrenRenderProps,
  emits: {
    updateItemValue: (_prop: string, _value: any) => true,
    updateItemsData: (
      _items: ProFormItemProps[],
      _parentItem?: ProFormItemProps
    ) => true,
    'update:activeItemKey': (_activeKey?: ProFormItemKey) => true
  },
  setup(props, { emit, slots }) {
    /** 更新表单数据属性值 */
    const handleUpdateItemValue = (prop: string, value: unknown) => {
      emit('updateItemValue', prop, value);
    };

    /** 更新表单项数据 */
    const handleUpdateItemsData = (
      items: ProFormItemProps[],
      parentItem?: ProFormItemProps
    ) => {
      emit('updateItemsData', items, parentItem);
    };

    /** 更新编辑模式选中的表单项 */
    const handleUpdateActiveItemKey = (activeKey?: ProFormItemKey) => {
      emit('update:activeItemKey', activeKey);
    };

    return () =>
      renderProFormContent({
        ...omit(props, ['item']),
        items: props.items ?? props.item?.children, // 兼容旧版
        updateItemValue: props.updateItemValue ?? handleUpdateItemValue,
        updateItemsData: props.updateItemsData ?? handleUpdateItemsData,
        updateActiveItemKey:
          props.updateActiveItemKey ?? handleUpdateActiveItemKey,
        slots: (props.slots ?? slots) as any
      });
  }
});

export type ChildrenRenderInstance = InstanceType<typeof ChildrenRender> | null;
