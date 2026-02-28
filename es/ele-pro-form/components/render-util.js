import { h, mergeProps, createVNode, defineComponent, isVNode } from "vue";
import VueDraggable from "vuedraggable";
import { ElFormItem, ElCol, ElRow } from "element-plus";
import { omit } from "../../utils/core";
import { getValue } from "../util";
import { childrenRenderProps } from "../props";
import BuilderWrapper from "./builder-wrapper";
import { defaultItemTypeData } from "./item-type-data";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const sortableGroupName = "ProFormBuilderBodySortGroup";
const codeStringPrefix = "/*__PRO_FORM__*/";
function getItemTypeName(item) {
  var _a;
  let itemType = item.type;
  const divTag = (_a = item.props) == null ? void 0 : _a.is;
  if (itemType === "div" && divTag) {
    if (divTag === "tr") {
      itemType = "tableRow";
    } else if (divTag === "td") {
      itemType = "tableCell";
    } else if (divTag === "ele-table" || divTag === "EleTable") {
      itemType = "table";
    } else if (divTag === "el-carousel" || divTag === "ElCarousel") {
      itemType = "carousel";
    } else if (divTag === "el-carousel-item" || divTag === "ElCarouselItem") {
      itemType = "carouselItem";
    } else if (divTag === "el-icon" || divTag === "ElIcon") {
      itemType = "icon";
    } else if (divTag === "ele-admin-layout" || divTag === "EleAdminLayout") {
      itemType = "adminLayout";
    } else if (divTag === "el-alert" || divTag === "EleAlert") {
      itemType = "alert";
    }
  }
  return itemType;
}
function getItemTypeData(item, itemTypeData) {
  const itemType = getItemTypeName(item);
  const typeData = [...itemTypeData || [], ...defaultItemTypeData].find((d) => d.type === itemType);
  return typeData;
}
function getComponentLegacyProps(item) {
  const result = {};
  const itemType = getItemTypeName(item);
  if (itemType) {
    const options = item.options;
    if (options) {
      if (["select", "multipleSelect", "radio", "radioButton", "checkbox", "checkboxButton", "cascader", "multipleCascader", "mention"].includes(itemType)) {
        result.options = options;
      } else if (["treeSelect", "treeMultipleSelect"].includes(itemType)) {
        result.data = options;
      } else if (["checkCard", "multipleCheckCard"].includes(itemType)) {
        result.items = options;
      } else if (itemType === "autocomplete") {
        result.fetchSuggestions = options;
      }
    }
    if (item.label != null) {
      if (["descriptionsItem", "carouselItem"].includes(itemType)) {
        result.label = item.label;
      } else if (["alert", "collapseItem", "descriptions"].includes(itemType)) {
        result.title = item.label;
      } else if (itemType === "card") {
        result.header = item.label;
      } else if (itemType === "image") {
        result.alt = item.label;
      }
    }
    if (item.prop != null) {
      if (["collapseItem", "carouselItem"].includes(itemType)) {
        result.name = item.prop;
      }
    }
  }
  return result;
}
function getRuleMessage(label, requiredMessage, placeholder) {
  if (typeof requiredMessage === "string" && requiredMessage) {
    return requiredMessage;
  }
  if (typeof placeholder === "string" && placeholder) {
    return placeholder;
  }
  return `${label ?? ""}必填`;
}
function getComponentRefName(item) {
  const prop = item.prop;
  if (prop == null || prop === "" || String(prop).trim() === "") {
    return `${String(item.key)}Ref`;
  }
  return `${String(prop)}Ref`;
}
function getCodeResult(code, form, items, searchExpand, httpRequest, getProFormRefs) {
  try {
    return new Function("form", "items", "searchExpand", "httpRequest", "getProFormRefs", `return (${code})`)(form, items, searchExpand, httpRequest, getProFormRefs);
  } catch (e) {
    console.error(e);
  }
}
function isShowItem(item, form, items, searchExpand, editable) {
  if (editable) {
    return true;
  }
  if (item.prop == null && item.key == null) {
    return false;
  }
  if (item.vIf != null) {
    if (typeof item.vIf === "function") {
      return item.vIf(form, items, searchExpand);
    }
    if (typeof item.vIf === "string" && item.vIf.trim().length) {
      return getCodeResult(item.vIf, form, items, searchExpand);
    }
    if (item.vIf === false) {
      return false;
    }
  }
  return true;
}
function translateJsCode(code, form, items, searchExpand, httpRequest, getProFormRefs, getAndCacheCode) {
  if (code != null) {
    if (typeof code === "string") {
      if (code.startsWith(codeStringPrefix)) {
        const result = getCodeResult(code, form, items, searchExpand, httpRequest, getProFormRefs);
        if (getAndCacheCode && typeof result === "function") {
          return {
            result: getAndCacheCode(code, result),
            isCode: true
          };
        }
        return {
          result,
          isCode: true
        };
      }
      return {
        result: code,
        isCode: false
      };
    } else if (Array.isArray(code)) {
      const arrayResult = [];
      let arrayIsCode = false;
      code.forEach((c) => {
        const {
          result,
          isCode
        } = translateJsCode(c, form, items, searchExpand, httpRequest, getProFormRefs, getAndCacheCode);
        arrayResult.push(result);
        if (isCode) {
          arrayIsCode = true;
        }
      });
      if (arrayIsCode) {
        return {
          result: arrayResult,
          isCode: true
        };
      }
      return {
        result: code,
        isCode: false
      };
    } else if (typeof code === "object") {
      const objectResult = {};
      let objectIsCode = false;
      Object.keys(code).forEach((k) => {
        const {
          result,
          isCode
        } = translateJsCode(code[k], form, items, searchExpand, httpRequest, getProFormRefs, getAndCacheCode);
        objectResult[k] = result;
        if (isCode) {
          objectIsCode = true;
        }
      });
      if (objectIsCode) {
        return {
          result: objectResult,
          isCode: true
        };
      }
      return {
        result: code,
        isCode: false
      };
    }
  }
  return {
    result: code,
    isCode: false
  };
}
function renderProFormItem(props) {
  var _a, _b, _c, _d;
  const slots = props.slots || {};
  const formData = props.model || {};
  const typeData = getItemTypeData(props.item, props.itemTypeData);
  const typeSlot = ((_a = props.item) == null ? void 0 : _a.type) ? slots[props.item.type] : void 0;
  if (!typeSlot && !typeData) {
    return;
  }
  const modelValue = props.item.prop == null ? void 0 : getValue(formData, props.item.prop);
  const handleUpdateModelValue = (value) => {
    const propName = props.item.prop;
    if (propName != null && props.updateItemValue) {
      props.updateItemValue(propName, value);
    }
  };
  const propsFunctionParams = {
    item: props.item,
    modelValue,
    updateModelValue: handleUpdateModelValue,
    isShowFormItem: (cItem) => isShowItem(cItem, formData, props.formItems || [], props.searchExpand, props.editable),
    renderChildren: (cItem, cSortDisabled, cContainerSelectable) => renderProFormContent({
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
  const slotProFormParams = {
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
  const itemSlots = {};
  if (!typeSlot) {
    const itemSlotMap = props.item.slots || {};
    Object.keys(itemSlotMap).forEach((name) => {
      if (itemSlotMap[name]) {
        const slotFuntion = slots[itemSlotMap[name]];
        if (slotFuntion) {
          itemSlots[name] = (slotProps) => slotFuntion({
            proForm: slotProFormParams,
            ...slotProps || {}
          });
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
    if (!itemSlots.default) {
      const csd = !(props.item.containerDraggable ?? !(typeData == null ? void 0 : typeData.sortDisabled));
      const isRenderLabel = (typeData == null ? void 0 : typeData.renderLabelText) && props.item.label != null && props.item.label !== "";
      const isRenderChildren = (!typeData || typeData.isContainer) && (!csd && props.editable || props.item.children && props.item.children.length);
      if (isRenderLabel || isRenderChildren) {
        itemSlots.default = () => {
          const nodes = [];
          if (isRenderLabel && props.item.label != null) {
            nodes.push(props.item.label);
          }
          if (isRenderChildren) {
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
              containerSelectable: !!(typeData == null ? void 0 : typeData.containerSelectable),
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
  const componentTag = (typeData == null ? void 0 : typeData.component) || "div";
  const isDivTag = componentTag === "div" || componentTag === "td";
  const componentPropsData = translateJsCode(props.item.props || {}, formData, props.formItems || [], props.searchExpand, props.httpRequest, props.getProFormRefs, props.getAndCacheCode).result;
  const componentNode = typeSlot ? typeSlot({
    item: props.item,
    model: formData,
    modelValue,
    updateValue: handleUpdateModelValue,
    updatePropValue: props.updateItemValue,
    proForm: slotProFormParams
  }) : h((isDivTag ? (_b = props.item.props) == null ? void 0 : _b.is : void 0) || componentTag, mergeProps({
    key: props.key
  }, getComponentLegacyProps(props.item), ((_c = typeData == null ? void 0 : typeData.defaultProps) == null ? void 0 : _c.call(typeData, propsFunctionParams)) || {}, isDivTag ? omit(componentPropsData, ["is"]) : componentPropsData, ((_d = typeData == null ? void 0 : typeData.reservedProps) == null ? void 0 : _d.call(typeData, propsFunctionParams)) || {}, {
    ref: getComponentRefName(props.item)
  }), itemSlots);
  if ((typeData == null ? void 0 : typeData.isContainer) || props.item.itemType === "container" || props.item.itemType === "view") {
    return componentNode;
  }
  const itemPropsData = translateJsCode(props.item.itemProps || {}, formData, props.formItems || [], props.searchExpand, props.httpRequest, props.getProFormRefs, props.getAndCacheCode).result;
  const labelWidth = itemPropsData.labelWidth;
  const formItemLabelWidth = typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth;
  const formItemSlots = {};
  const formItemSlotMap = props.item.itemSlots || {};
  Object.keys(formItemSlotMap).forEach((name) => {
    if (formItemSlotMap[name] && slots[formItemSlotMap[name]]) {
      formItemSlots[name] = slots[formItemSlotMap[name]];
    }
  });
  formItemSlots.default = () => componentNode;
  const iRule = itemPropsData.rules;
  const iRules = iRule ? Array.isArray(iRule) ? iRule : [iRule] : void 0;
  const fRule = props.rules && props.item.prop ? getValue(props.rules, props.item.prop) : void 0;
  const fRules = fRule ? Array.isArray(fRule) ? fRule : [fRule] : void 0;
  const formItemRules = iRules || fRules || [];
  const trigger = (typeData == null ? void 0 : typeData.requiredTrigger) ?? "change";
  const message = getRuleMessage(props.item.label, props.item.requiredMessage, componentPropsData.placeholder);
  if (props.item.required) {
    formItemRules.unshift({
      required: true,
      message,
      trigger
    });
  }
  return createVNode(ElFormItem, mergeProps({
    "key": props.key,
    "label": props.item.label
  }, itemPropsData, {
    "labelWidth": formItemLabelWidth,
    "prop": props.item.prop,
    "rules": formItemRules
  }), _isSlot(formItemSlots) ? formItemSlots : {
    default: () => [formItemSlots]
  });
}
function renderProFormContent(props) {
  const nodes = [];
  const slots = props.slots || {};
  const itemsData = props.items || [];
  const formData = props.model || {};
  const ownSlots = ["default", "contentExtra"];
  const getProFormItemNode = (item, editable, sortDisabled) => {
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
    return createVNode(BuilderWrapper, {
      "key": itemKey,
      "item": item,
      "handle": !sortDisabled,
      "activeItemKey": props.activeItemKey,
      "onUpdate:activeItemKey": props.updateActiveItemKey
    }, {
      default: defaultSlot,
      builderItemHandleContent: slots.builderItemHandleContent,
      builderItemTools: slots.builderItemTools
    });
  };
  if (props.grid) {
    itemsData.forEach((item) => {
      const itemKey = item.key ?? item.prop;
      const gridColProps = props.grid === true ? {
        span: 12
      } : props.grid;
      const itemColProps = translateJsCode(item.colProps || {}, formData, props.formItems || [], props.searchExpand, props.httpRequest, props.getProFormRefs, props.getAndCacheCode).result;
      if (props.editable && !props.sortDisabled) {
        let _slot;
        nodes.push(createVNode(ElCol, mergeProps({
          "key": itemKey
        }, gridColProps, itemColProps), _isSlot(_slot = getProFormItemNode(item, true, true)) ? _slot : {
          default: () => [_slot]
        }));
      } else if (isShowItem(item, formData, props.formItems || [], props.searchExpand, props.editable)) {
        let _slot2;
        nodes.push(createVNode(ElCol, mergeProps({
          "key": itemKey
        }, gridColProps, itemColProps), _isSlot(_slot2 = getProFormItemNode(item)) ? _slot2 : {
          default: () => [_slot2]
        }));
      }
    });
    if (slots.contentExtra) {
      let _slot3;
      nodes.push(createVNode(ElCol, translateJsCode(props.contentExtraColProps || {}, formData, props.formItems || [], props.searchExpand, props.httpRequest, props.getProFormRefs, props.getAndCacheCode).result, _isSlot(_slot3 = slots.contentExtra()) ? _slot3 : {
        default: () => [_slot3]
      }));
    }
    return createVNode(ElRow, translateJsCode(props.rowProps || {}, formData, props.formItems || [], props.searchExpand, props.httpRequest, props.getProFormRefs, props.getAndCacheCode).result, _isSlot(nodes) ? nodes : {
      default: () => [nodes]
    });
  }
  if (props.editable && !props.sortDisabled) {
    const footerSlot = () => {
      var _a;
      return createVNode("div", {
        "class": "ele-pro-form-builder-item-tool-wrapper"
      }, [createVNode("div", {
        "class": "ele-pro-form-builder-item-handle is-disabled"
      }, [slots.builderItemHandleContent ? slots.builderItemHandleContent({
        item: props.parentItem,
        activeItemKey: props.activeItemKey
      }) : createVNode("div", {
        "class": "ele-pro-form-builder-item-handle-content"
      }, [(_a = props.parentItem) == null ? void 0 : _a.type])]), createVNode("div", {
        "class": "ele-pro-form-builder-item-tools"
      }, [slots.builderItemTools ? slots.builderItemTools({
        item: props.parentItem,
        activeItemKey: props.activeItemKey
      }) : void 0])]);
    };
    const handleUpdateModelValue = (data) => {
      if (props.updateItemsData) {
        props.updateItemsData(data, props.parentItem);
      }
    };
    const handleContainerBuilderWrapperClick = (e) => {
      var _a;
      const parentItemKey = (_a = props.parentItem) == null ? void 0 : _a.key;
      if (props.containerSelectable && parentItemKey != null) {
        e.stopPropagation();
        if (props.updateActiveItemKey) {
          props.updateActiveItemKey(parentItemKey);
        }
      }
    };
    nodes.push(createVNode(VueDraggable, {
      "itemKey": "key",
      "animation": 150,
      "modelValue": itemsData,
      "setData": () => void 0,
      "group": sortableGroupName,
      "handle": ".ele-pro-form-builder-item-handle",
      "draggable": ".ele-pro-form-builder-item-wrapper",
      "class": ["ele-pro-form-builder-container-wrapper", {
        "is-selectable": props.containerSelectable
      }, {
        "is-active": props.containerSelectable && props.parentItem && props.parentItem.key != null && props.activeItemKey != null && props.activeItemKey === props.parentItem.key
      }],
      "onUpdate:modelValue": handleUpdateModelValue,
      "onClick": handleContainerBuilderWrapperClick
    }, {
      item: ({
        element
      }) => getProFormItemNode(element, true),
      footer: props.containerSelectable && props.parentItem ? footerSlot : void 0
    }));
  } else {
    itemsData.forEach((item) => {
      if (isShowItem(item, formData, props.formItems || [], props.searchExpand, props.editable)) {
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
const ChildrenRender = /* @__PURE__ */ defineComponent({
  name: "ChildrenRender",
  props: childrenRenderProps,
  emits: {
    updateItemValue: (_prop, _value) => true,
    updateItemsData: (_items, _parentItem) => true,
    "update:activeItemKey": (_activeKey) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const handleUpdateItemValue = (prop, value) => {
      emit("updateItemValue", prop, value);
    };
    const handleUpdateItemsData = (items, parentItem) => {
      emit("updateItemsData", items, parentItem);
    };
    const handleUpdateActiveItemKey = (activeKey) => {
      emit("update:activeItemKey", activeKey);
    };
    return () => {
      var _a;
      return renderProFormContent({
        ...omit(props, ["item"]),
        items: props.items ?? ((_a = props.item) == null ? void 0 : _a.children),
        // 兼容旧版
        updateItemValue: props.updateItemValue ?? handleUpdateItemValue,
        updateItemsData: props.updateItemsData ?? handleUpdateItemsData,
        updateActiveItemKey: props.updateActiveItemKey ?? handleUpdateActiveItemKey,
        slots: props.slots ?? slots
      });
    };
  }
});
export {
  ChildrenRender,
  codeStringPrefix,
  getCodeResult,
  getComponentLegacyProps,
  getComponentRefName,
  getItemTypeData,
  getItemTypeName,
  getRuleMessage,
  isShowItem,
  renderProFormContent,
  renderProFormItem,
  sortableGroupName,
  translateJsCode
};
