"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const VueDraggable = require("vuedraggable");
const elementPlus = require("element-plus");
const core = require("../../utils/core");
const util = require("../util");
const props = require("../props");
const BuilderWrapper = require("./builder-wrapper");
const itemTypeData = require("./item-type-data");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
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
function getItemTypeData(item, itemTypeData$1) {
  const itemType = getItemTypeName(item);
  const typeData = [...itemTypeData$1 || [], ...itemTypeData.defaultItemTypeData].find((d) => d.type === itemType);
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
function renderProFormItem(props2) {
  var _a, _b, _c, _d;
  const slots = props2.slots || {};
  const formData = props2.model || {};
  const typeData = getItemTypeData(props2.item, props2.itemTypeData);
  const typeSlot = ((_a = props2.item) == null ? void 0 : _a.type) ? slots[props2.item.type] : void 0;
  if (!typeSlot && !typeData) {
    return;
  }
  const modelValue = props2.item.prop == null ? void 0 : util.getValue(formData, props2.item.prop);
  const handleUpdateModelValue = (value) => {
    const propName = props2.item.prop;
    if (propName != null && props2.updateItemValue) {
      props2.updateItemValue(propName, value);
    }
  };
  const propsFunctionParams = {
    item: props2.item,
    modelValue,
    updateModelValue: handleUpdateModelValue,
    isShowFormItem: (cItem) => isShowItem(cItem, formData, props2.formItems || [], props2.searchExpand, props2.editable),
    renderChildren: (cItem, cSortDisabled, cContainerSelectable) => renderProFormContent({
      model: formData,
      items: cItem.children,
      rules: props2.rules,
      grid: cItem.grid,
      rowProps: cItem.rowProps,
      parentItem: cItem,
      formItems: props2.formItems,
      searchExpand: props2.searchExpand,
      editable: props2.editable,
      sortDisabled: !!cSortDisabled,
      containerSelectable: !!cContainerSelectable,
      activeItemKey: props2.activeItemKey,
      updateItemValue: props2.updateItemValue,
      updateItemsData: props2.updateItemsData,
      updateActiveItemKey: props2.updateActiveItemKey,
      getAndCacheCode: props2.getAndCacheCode,
      itemTypeData: props2.itemTypeData,
      httpRequest: props2.httpRequest,
      getProFormRefs: props2.getProFormRefs,
      slots
    })
  };
  const slotProFormParams = {
    item: props2.item,
    model: formData,
    rules: props2.rules,
    formItems: props2.formItems,
    searchExpand: props2.searchExpand,
    editable: props2.editable,
    activeItemKey: props2.activeItemKey,
    itemTypeData: props2.itemTypeData,
    httpRequest: props2.httpRequest,
    getProFormRefs: props2.getProFormRefs,
    updateItemValue: props2.updateItemValue,
    updateItemsData: props2.updateItemsData,
    updateActiveItemKey: props2.updateActiveItemKey,
    slots
  };
  const itemSlots = {};
  if (!typeSlot) {
    const itemSlotMap = props2.item.slots || {};
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
      const csd = !(props2.item.containerDraggable ?? !(typeData == null ? void 0 : typeData.sortDisabled));
      const isRenderLabel = (typeData == null ? void 0 : typeData.renderLabelText) && props2.item.label != null && props2.item.label !== "";
      const isRenderChildren = (!typeData || typeData.isContainer) && (!csd && props2.editable || props2.item.children && props2.item.children.length);
      if (isRenderLabel || isRenderChildren) {
        itemSlots.default = () => {
          const nodes = [];
          if (isRenderLabel && props2.item.label != null) {
            nodes.push(props2.item.label);
          }
          if (isRenderChildren) {
            const contentNode = renderProFormContent({
              model: formData,
              items: props2.item.children,
              rules: props2.rules,
              grid: props2.item.grid,
              rowProps: props2.item.rowProps,
              parentItem: props2.item,
              formItems: props2.formItems,
              searchExpand: props2.searchExpand,
              editable: props2.editable,
              sortDisabled: csd,
              containerSelectable: !!(typeData == null ? void 0 : typeData.containerSelectable),
              activeItemKey: props2.activeItemKey,
              updateItemValue: props2.updateItemValue,
              updateItemsData: props2.updateItemsData,
              updateActiveItemKey: props2.updateActiveItemKey,
              getAndCacheCode: props2.getAndCacheCode,
              itemTypeData: props2.itemTypeData,
              httpRequest: props2.httpRequest,
              getProFormRefs: props2.getProFormRefs,
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
  const componentPropsData = translateJsCode(props2.item.props || {}, formData, props2.formItems || [], props2.searchExpand, props2.httpRequest, props2.getProFormRefs, props2.getAndCacheCode).result;
  const componentNode = typeSlot ? typeSlot({
    item: props2.item,
    model: formData,
    modelValue,
    updateValue: handleUpdateModelValue,
    updatePropValue: props2.updateItemValue,
    proForm: slotProFormParams
  }) : vue.h((isDivTag ? (_b = props2.item.props) == null ? void 0 : _b.is : void 0) || componentTag, vue.mergeProps({
    key: props2.key
  }, getComponentLegacyProps(props2.item), ((_c = typeData == null ? void 0 : typeData.defaultProps) == null ? void 0 : _c.call(typeData, propsFunctionParams)) || {}, isDivTag ? core.omit(componentPropsData, ["is"]) : componentPropsData, ((_d = typeData == null ? void 0 : typeData.reservedProps) == null ? void 0 : _d.call(typeData, propsFunctionParams)) || {}, {
    ref: getComponentRefName(props2.item)
  }), itemSlots);
  if ((typeData == null ? void 0 : typeData.isContainer) || props2.item.itemType === "container" || props2.item.itemType === "view") {
    return componentNode;
  }
  const itemPropsData = translateJsCode(props2.item.itemProps || {}, formData, props2.formItems || [], props2.searchExpand, props2.httpRequest, props2.getProFormRefs, props2.getAndCacheCode).result;
  const labelWidth = itemPropsData.labelWidth;
  const formItemLabelWidth = typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth;
  const formItemSlots = {};
  const formItemSlotMap = props2.item.itemSlots || {};
  Object.keys(formItemSlotMap).forEach((name) => {
    if (formItemSlotMap[name] && slots[formItemSlotMap[name]]) {
      formItemSlots[name] = slots[formItemSlotMap[name]];
    }
  });
  formItemSlots.default = () => componentNode;
  const iRule = itemPropsData.rules;
  const iRules = iRule ? Array.isArray(iRule) ? iRule : [iRule] : void 0;
  const fRule = props2.rules && props2.item.prop ? util.getValue(props2.rules, props2.item.prop) : void 0;
  const fRules = fRule ? Array.isArray(fRule) ? fRule : [fRule] : void 0;
  const formItemRules = iRules || fRules || [];
  const trigger = (typeData == null ? void 0 : typeData.requiredTrigger) ?? "change";
  const message = getRuleMessage(props2.item.label, props2.item.requiredMessage, componentPropsData.placeholder);
  if (props2.item.required) {
    formItemRules.unshift({
      required: true,
      message,
      trigger
    });
  }
  return vue.createVNode(elementPlus.ElFormItem, vue.mergeProps({
    "key": props2.key,
    "label": props2.item.label
  }, itemPropsData, {
    "labelWidth": formItemLabelWidth,
    "prop": props2.item.prop,
    "rules": formItemRules
  }), _isSlot(formItemSlots) ? formItemSlots : {
    default: () => [formItemSlots]
  });
}
function renderProFormContent(props2) {
  const nodes = [];
  const slots = props2.slots || {};
  const itemsData = props2.items || [];
  const formData = props2.model || {};
  const ownSlots = ["default", "contentExtra"];
  const getProFormItemNode = (item, editable, sortDisabled) => {
    const itemKey = item.key ?? item.prop;
    const defaultSlot = () => {
      return renderProFormItem({
        key: itemKey,
        item,
        model: formData,
        rules: props2.rules,
        formItems: props2.formItems,
        searchExpand: props2.searchExpand,
        editable: props2.editable,
        activeItemKey: props2.activeItemKey,
        updateItemValue: props2.updateItemValue,
        updateItemsData: props2.updateItemsData,
        updateActiveItemKey: props2.updateActiveItemKey,
        getAndCacheCode: props2.getAndCacheCode,
        itemTypeData: props2.itemTypeData,
        httpRequest: props2.httpRequest,
        getProFormRefs: props2.getProFormRefs,
        slots: core.omit(slots, ownSlots)
      });
    };
    if (!editable) {
      return defaultSlot();
    }
    return vue.createVNode(BuilderWrapper, {
      "key": itemKey,
      "item": item,
      "handle": !sortDisabled,
      "activeItemKey": props2.activeItemKey,
      "onUpdate:activeItemKey": props2.updateActiveItemKey
    }, {
      default: defaultSlot,
      builderItemHandleContent: slots.builderItemHandleContent,
      builderItemTools: slots.builderItemTools
    });
  };
  if (props2.grid) {
    itemsData.forEach((item) => {
      const itemKey = item.key ?? item.prop;
      const gridColProps = props2.grid === true ? {
        span: 12
      } : props2.grid;
      const itemColProps = translateJsCode(item.colProps || {}, formData, props2.formItems || [], props2.searchExpand, props2.httpRequest, props2.getProFormRefs, props2.getAndCacheCode).result;
      if (props2.editable && !props2.sortDisabled) {
        let _slot;
        nodes.push(vue.createVNode(elementPlus.ElCol, vue.mergeProps({
          "key": itemKey
        }, gridColProps, itemColProps), _isSlot(_slot = getProFormItemNode(item, true, true)) ? _slot : {
          default: () => [_slot]
        }));
      } else if (isShowItem(item, formData, props2.formItems || [], props2.searchExpand, props2.editable)) {
        let _slot2;
        nodes.push(vue.createVNode(elementPlus.ElCol, vue.mergeProps({
          "key": itemKey
        }, gridColProps, itemColProps), _isSlot(_slot2 = getProFormItemNode(item)) ? _slot2 : {
          default: () => [_slot2]
        }));
      }
    });
    if (slots.contentExtra) {
      let _slot3;
      nodes.push(vue.createVNode(elementPlus.ElCol, translateJsCode(props2.contentExtraColProps || {}, formData, props2.formItems || [], props2.searchExpand, props2.httpRequest, props2.getProFormRefs, props2.getAndCacheCode).result, _isSlot(_slot3 = slots.contentExtra()) ? _slot3 : {
        default: () => [_slot3]
      }));
    }
    return vue.createVNode(elementPlus.ElRow, translateJsCode(props2.rowProps || {}, formData, props2.formItems || [], props2.searchExpand, props2.httpRequest, props2.getProFormRefs, props2.getAndCacheCode).result, _isSlot(nodes) ? nodes : {
      default: () => [nodes]
    });
  }
  if (props2.editable && !props2.sortDisabled) {
    const footerSlot = () => {
      var _a;
      return vue.createVNode("div", {
        "class": "ele-pro-form-builder-item-tool-wrapper"
      }, [vue.createVNode("div", {
        "class": "ele-pro-form-builder-item-handle is-disabled"
      }, [slots.builderItemHandleContent ? slots.builderItemHandleContent({
        item: props2.parentItem,
        activeItemKey: props2.activeItemKey
      }) : vue.createVNode("div", {
        "class": "ele-pro-form-builder-item-handle-content"
      }, [(_a = props2.parentItem) == null ? void 0 : _a.type])]), vue.createVNode("div", {
        "class": "ele-pro-form-builder-item-tools"
      }, [slots.builderItemTools ? slots.builderItemTools({
        item: props2.parentItem,
        activeItemKey: props2.activeItemKey
      }) : void 0])]);
    };
    const handleUpdateModelValue = (data) => {
      if (props2.updateItemsData) {
        props2.updateItemsData(data, props2.parentItem);
      }
    };
    const handleContainerBuilderWrapperClick = (e) => {
      var _a;
      const parentItemKey = (_a = props2.parentItem) == null ? void 0 : _a.key;
      if (props2.containerSelectable && parentItemKey != null) {
        e.stopPropagation();
        if (props2.updateActiveItemKey) {
          props2.updateActiveItemKey(parentItemKey);
        }
      }
    };
    nodes.push(vue.createVNode(VueDraggable, {
      "itemKey": "key",
      "animation": 150,
      "modelValue": itemsData,
      "setData": () => void 0,
      "group": sortableGroupName,
      "handle": ".ele-pro-form-builder-item-handle",
      "draggable": ".ele-pro-form-builder-item-wrapper",
      "class": ["ele-pro-form-builder-container-wrapper", {
        "is-selectable": props2.containerSelectable
      }, {
        "is-active": props2.containerSelectable && props2.parentItem && props2.parentItem.key != null && props2.activeItemKey != null && props2.activeItemKey === props2.parentItem.key
      }],
      "onUpdate:modelValue": handleUpdateModelValue,
      "onClick": handleContainerBuilderWrapperClick
    }, {
      item: ({
        element
      }) => getProFormItemNode(element, true),
      footer: props2.containerSelectable && props2.parentItem ? footerSlot : void 0
    }));
  } else {
    itemsData.forEach((item) => {
      if (isShowItem(item, formData, props2.formItems || [], props2.searchExpand, props2.editable)) {
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
const ChildrenRender = /* @__PURE__ */ vue.defineComponent({
  name: "ChildrenRender",
  props: props.childrenRenderProps,
  emits: {
    updateItemValue: (_prop, _value) => true,
    updateItemsData: (_items, _parentItem) => true,
    "update:activeItemKey": (_activeKey) => true
  },
  setup(props2, {
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
        ...core.omit(props2, ["item"]),
        items: props2.items ?? ((_a = props2.item) == null ? void 0 : _a.children),
        // 兼容旧版
        updateItemValue: props2.updateItemValue ?? handleUpdateItemValue,
        updateItemsData: props2.updateItemsData ?? handleUpdateItemsData,
        updateActiveItemKey: props2.updateActiveItemKey ?? handleUpdateActiveItemKey,
        slots: props2.slots ?? slots
      });
    };
  }
});
exports.ChildrenRender = ChildrenRender;
exports.codeStringPrefix = codeStringPrefix;
exports.getCodeResult = getCodeResult;
exports.getComponentLegacyProps = getComponentLegacyProps;
exports.getComponentRefName = getComponentRefName;
exports.getItemTypeData = getItemTypeData;
exports.getItemTypeName = getItemTypeName;
exports.getRuleMessage = getRuleMessage;
exports.isShowItem = isShowItem;
exports.renderProFormContent = renderProFormContent;
exports.renderProFormItem = renderProFormItem;
exports.sortableGroupName = sortableGroupName;
exports.translateJsCode = translateJsCode;
