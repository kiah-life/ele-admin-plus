"use strict";
const vue = require("vue");
const core = require("../utils/core");
const hook = require("../utils/hook");
const util = require("../ele-pro-form/util");
const EleSplitPanel = require("../ele-split-panel/index");
const EleTabBar = require("../ele-tab-bar/index");
const ComponentList = require("./components/component-list");
const TemplateList = require("./components/template-list");
const OutlineTree = require("./components/outline-tree");
const BodyHeader = require("./components/body-header");
const BodyForm = require("./components/body-form");
const PropsForm = require("./components/props-form");
const ConfigForm = require("./components/config-form");
const TableToolMenu = require("./components/table-tool-menu");
const ComponentPicker = require("./components/component-picker");
const props = require("./props");
const _hoisted_1 = { class: "ele-pro-form-builder-tab-body" };
const _hoisted_2 = { class: "ele-pro-form-builder-body-wrapper" };
const _hoisted_3 = { class: "ele-pro-form-builder-tab-body" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleProFormBuilder" },
  __name: "index",
  props: props.proFormBuilderProps,
  emits: props.proFormBuilderEmits,
  setup(__props, { emit: __emit }) {
    const defaultHeaderRightTools = [
      "import",
      "export",
      "clear",
      "preview"
    ];
    const props2 = __props;
    const emit = __emit;
    const [mobile] = hook.useMobile((isMobile) => {
      leftSideCollapse.value = isMobile;
      rightSideCollapse.value = isMobile;
    });
    const [mobileDevice] = hook.useMobileDevice();
    const formProps = vue.useModel(props2, "modelValue");
    const leftSideCollapse = vue.ref(mobile.value);
    const rightSideCollapse = vue.ref(mobile.value);
    const leftTabActive = vue.ref("components");
    const rightTabActive = vue.ref("formProps");
    const currentFormItemId = vue.ref();
    const currentScreen = vue.ref("pc");
    const historyDataList = vue.ref([]);
    const redoDataList = vue.ref([]);
    const tableToolMenuRef = vue.ref(null);
    const showAddChildPicker = vue.ref(false);
    const addParentFormItemId = vue.ref();
    const headerRightToolNames = vue.computed(() => {
      if (typeof props2.headerTools === "undefined" || props2.headerTools === true) {
        return defaultHeaderRightTools;
      }
      if (!props2.headerTools) {
        return [];
      }
      return props2.headerTools;
    });
    const setFormPropValue = (field, value) => {
      if (!formProps.value) {
        formProps.value = { items: [] };
      }
      if (!field) {
        Object.assign(formProps.value, value);
      } else {
        util.setValue(formProps.value, field, value);
      }
    };
    const getFormItems = () => {
      var _a;
      return ((_a = formProps.value) == null ? void 0 : _a.items) || [];
    };
    const setFormItems = (items) => {
      if (!formProps.value) {
        formProps.value = Object.assign({}, props2.proFormInitialProps || {}, {
          items: items || []
        });
        return;
      }
      const data = formProps.value;
      if (!data.items && props2.proFormInitialProps) {
        const keys = Object.keys(data).filter(
          (k) => typeof data[k] !== "undefined"
        );
        Object.assign(formProps.value, core.omit(props2.proFormInitialProps, keys), {
          items: items || []
        });
        return;
      }
      formProps.value.items = items || [];
    };
    const storeHistory = () => {
      const undoData = JSON.parse(
        JSON.stringify({
          items: getFormItems()
        })
      );
      historyDataList.value.push(undoData);
      redoDataList.value = [];
    };
    const handleUndo = () => {
      const data = historyDataList.value.pop();
      if (!data) {
        return;
      }
      const redoData = JSON.parse(
        JSON.stringify({
          items: getFormItems()
        })
      );
      redoDataList.value.unshift(redoData);
      setFormItems(data.items);
      currentFormItemId.value = void 0;
    };
    const handleRedo = () => {
      const data = redoDataList.value.shift();
      if (!data) {
        return;
      }
      const undoData = JSON.parse(
        JSON.stringify({
          items: getFormItems()
        })
      );
      historyDataList.value.push(undoData);
      setFormItems(data.items);
      currentFormItemId.value = void 0;
    };
    const handleUpdateFormProp = (field, value) => {
      setFormPropValue(field, value);
    };
    const updateFormItemProp = (formItemId, field, value) => {
      const item = core.findTree(getFormItems(), (item2) => item2.key === formItemId);
      if (item) {
        if (!field) {
          const temp = core.omit(value, ["key", "children"]);
          Object.assign(item, temp);
        } else {
          util.setValue(item, field, value);
        }
      }
    };
    const deleteFormItem = (formItemId) => {
      if (currentFormItemId.value != null && currentFormItemId.value === formItemId) {
        currentFormItemId.value = void 0;
      }
      const formItemsData = getFormItems();
      core.eachTree(formItemsData, (item, index, parent) => {
        if (item.key === formItemId) {
          if (parent) {
            if (parent.children) {
              parent.children.splice(index, 1);
            }
          } else {
            formItemsData.splice(index, 1);
          }
          return false;
        }
      });
    };
    const handleUpdateItems = ({
      addItems,
      updateItems,
      deleteItemIds
    }) => {
      hideTableTool();
      showAddChildPicker.value = false;
      addParentFormItemId.value = void 0;
      if (addItems.length || deleteItemIds.length) {
        storeHistory();
      }
      updateItems.forEach((effect) => {
        updateFormItemProp(effect.itemId, effect.field, effect.value);
      });
      addItems.forEach(({ item, parentItemId, index }) => {
        if (!item) {
          return;
        }
        if (parentItemId == null) {
          if (index != null) {
            const items = getFormItems();
            setFormItems([...items.slice(0, index), item, ...items.slice(index)]);
          } else {
            setFormItems([...getFormItems(), item]);
          }
          return;
        }
        const parent = core.findTree(
          getFormItems(),
          (item2) => item2.key === parentItemId
        );
        if (parent) {
          if (parent.children) {
            if (index != null) {
              parent.children.splice(index, 0, item);
            } else {
              parent.children.push(item);
            }
          } else {
            parent.children = [item];
          }
        }
      });
      deleteItemIds.forEach((formItemId) => {
        deleteFormItem(formItemId);
      });
      if (addItems.length && mobile.value) {
        leftSideCollapse.value = true;
      }
    };
    const handleSortItemChildren = (childIds, formItemId) => {
      const item = core.findTree(getFormItems(), (item2) => item2.key === formItemId);
      if (item && item.children) {
        storeHistory();
        item.children.sort((a, b) => {
          const aIndex = a.key == null ? -1 : childIds.indexOf(a.key);
          const bIndex = b.key == null ? -1 : childIds.indexOf(b.key);
          return aIndex - bIndex;
        });
      }
    };
    const handleUpdateItemChildren = (data, parent) => {
      hideTableTool();
      storeHistory();
      if (!parent) {
        setFormItems(data);
        return;
      }
      core.eachTree(getFormItems(), (item) => {
        if (item.key === parent.key) {
          parent.children = data;
          return false;
        }
      });
    };
    const handleUpdateFormItems = (items) => {
      handleUpdateItemChildren(items);
    };
    const handleClear = () => {
      if (getFormItems().length) {
        storeHistory();
        setFormItems([]);
        currentFormItemId.value = void 0;
      }
    };
    const handleImport = (data) => {
      storeHistory();
      formProps.value = { ...data, items: data.items || [] };
      currentFormItemId.value = void 0;
      if (mobile.value) {
        leftSideCollapse.value = true;
        rightSideCollapse.value = true;
      }
    };
    const handleOpenTableTool = (formItemId, el) => {
      tableToolMenuRef.value && tableToolMenuRef.value.openMenu(formItemId, el);
    };
    const hideTableTool = () => {
      tableToolMenuRef.value && tableToolMenuRef.value.hideMenu();
    };
    const handleOpenComponentPicker = (formItemId) => {
      showAddChildPicker.value = true;
      addParentFormItemId.value = formItemId;
    };
    const handlePreviewFormSubmit = (data) => {
      emit("previewFormSubmit", data);
    };
    vue.watch(currentFormItemId, (formItemId) => {
      if (formItemId != null) {
        if (rightTabActive.value !== "itemProps") {
          rightTabActive.value = "itemProps";
        }
      } else if (!getFormItems().length && rightTabActive.value !== "formProps") {
        rightTabActive.value = "formProps";
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(EleSplitPanel, {
        space: "0px",
        size: "280px",
        allowCollapse: true,
        collapse: leftSideCollapse.value,
        "onUpdate:collapse": _cache[8] || (_cache[8] = ($event) => leftSideCollapse.value = $event),
        class: "ele-pro-form-builder-wrapper"
      }, {
        body: vue.withCtx(() => [
          vue.createVNode(EleSplitPanel, {
            space: "0px",
            size: "220px",
            reverse: true,
            allowCollapse: true,
            collapse: rightSideCollapse.value,
            "onUpdate:collapse": _cache[6] || (_cache[6] = ($event) => rightSideCollapse.value = $event),
            class: "ele-pro-form-builder-main-wrapper"
          }, {
            body: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_2, [
                vue.createVNode(BodyHeader, {
                  currentScreen: currentScreen.value,
                  "onUpdate:currentScreen": _cache[2] || (_cache[2] = ($event) => currentScreen.value = $event),
                  undoDisabled: !historyDataList.value.length,
                  redoDisabled: !redoDataList.value.length,
                  formProps: vue.unref(formProps),
                  headerTools: headerRightToolNames.value,
                  proFormComponent: _ctx.proFormComponent,
                  jsonEditerComponent: _ctx.jsonEditerComponent,
                  itemTypeData: _ctx.itemTypeData,
                  httpRequest: _ctx.httpRequest,
                  onUndo: handleUndo,
                  onRedo: handleRedo,
                  onClear: handleClear,
                  onPreviewFormSubmit: handlePreviewFormSubmit,
                  onImportData: handleImport
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotProps) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["currentScreen", "undoDisabled", "redoDisabled", "formProps", "headerTools", "proFormComponent", "jsonEditerComponent", "itemTypeData", "httpRequest"]),
                vue.createVNode(BodyForm, {
                  formProps: vue.unref(formProps),
                  componentData: _ctx.componentData,
                  currentFormItemId: currentFormItemId.value,
                  "onUpdate:currentFormItemId": _cache[3] || (_cache[3] = ($event) => currentFormItemId.value = $event),
                  currentScreen: currentScreen.value,
                  proFormComponent: _ctx.proFormComponent,
                  itemTypeData: _ctx.itemTypeData,
                  httpRequest: _ctx.httpRequest,
                  onUpdateItems: handleUpdateItems,
                  onOpenTableTool: handleOpenTableTool,
                  onUpdateFormItems: handleUpdateFormItems
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotProps) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["formProps", "componentData", "currentFormItemId", "currentScreen", "proFormComponent", "itemTypeData", "httpRequest"])
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(EleTabBar, {
                modelValue: rightTabActive.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => rightTabActive.value = $event),
                items: [
                  { value: "itemProps", label: "属性设置" },
                  { value: "formProps", label: "表单设置" }
                ]
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("div", _hoisted_3, [
                rightTabActive.value === "itemProps" ? (vue.openBlock(), vue.createBlock(PropsForm, {
                  key: 0,
                  formProps: vue.unref(formProps),
                  currentFormItemId: currentFormItemId.value,
                  "onUpdate:currentFormItemId": _cache[5] || (_cache[5] = ($event) => currentFormItemId.value = $event),
                  configFormPresetProps: _ctx.configFormPresetProps,
                  componentData: _ctx.componentData,
                  proFormComponent: _ctx.proFormComponent,
                  codeEditerComponent: _ctx.codeEditerComponent,
                  jsonEditerComponent: _ctx.jsonEditerComponent,
                  htmlEditerComponent: _ctx.htmlEditerComponent,
                  itemTypeData: _ctx.itemTypeData,
                  httpRequest: _ctx.httpRequest,
                  onUpdateItem: updateFormItemProp,
                  onUpdateItems: handleUpdateItems,
                  onSortItemChildren: handleSortItemChildren,
                  onOpenComponentPicker: handleOpenComponentPicker
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotProps) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["formProps", "currentFormItemId", "configFormPresetProps", "componentData", "proFormComponent", "codeEditerComponent", "jsonEditerComponent", "htmlEditerComponent", "itemTypeData", "httpRequest"])) : (vue.openBlock(), vue.createBlock(ConfigForm, {
                  key: 1,
                  formProps: vue.unref(formProps),
                  configFormItems: _ctx.configFormItems,
                  configFormPresetProps: _ctx.configFormPresetProps,
                  proFormComponent: _ctx.proFormComponent,
                  jsonEditerComponent: _ctx.jsonEditerComponent,
                  itemTypeData: _ctx.itemTypeData,
                  httpRequest: _ctx.httpRequest,
                  onUpdateFormProp: handleUpdateFormProp
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotProps) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["formProps", "configFormItems", "configFormPresetProps", "proFormComponent", "jsonEditerComponent", "itemTypeData", "httpRequest"]))
              ])
            ]),
            _: 3
          }, 8, ["collapse"])
        ]),
        default: vue.withCtx(() => {
          var _a, _b, _c, _d;
          return [
            vue.createVNode(EleTabBar, {
              modelValue: leftTabActive.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => leftTabActive.value = $event),
              items: [
                { value: "components", label: "组件库" },
                { value: "templates", label: "模板库" },
                { value: "outlines", label: "大纲" }
              ]
            }, null, 8, ["modelValue"]),
            vue.createElementVNode("div", _hoisted_1, [
              leftTabActive.value === "outlines" ? (vue.openBlock(), vue.createBlock(OutlineTree, {
                key: 0,
                formItems: (_a = vue.unref(formProps)) == null ? void 0 : _a.items,
                currentFormItemId: currentFormItemId.value,
                "onUpdate:currentFormItemId": _cache[1] || (_cache[1] = ($event) => currentFormItemId.value = $event),
                componentData: _ctx.componentData,
                itemTypeData: _ctx.itemTypeData,
                onUpdateItems: handleUpdateItems,
                onUpdateItemChildren: handleUpdateItemChildren,
                onOpenTableTool: handleOpenTableTool,
                onOpenComponentPicker: handleOpenComponentPicker
              }, null, 8, ["formItems", "currentFormItemId", "componentData", "itemTypeData"])) : leftTabActive.value === "templates" ? (vue.openBlock(), vue.createBlock(TemplateList, {
                key: 1,
                templateData: _ctx.templateData,
                onImportData: handleImport
              }, null, 8, ["templateData"])) : (vue.openBlock(), vue.createBlock(ComponentList, {
                key: 2,
                formItems: (_b = vue.unref(formProps)) == null ? void 0 : _b.items,
                draggable: !vue.unref(mobileDevice) && !vue.unref(mobile),
                componentData: _ctx.componentData,
                itemTypeData: _ctx.itemTypeData,
                onUpdateItems: handleUpdateItems
              }, null, 8, ["formItems", "draggable", "componentData", "itemTypeData"]))
            ]),
            vue.createVNode(TableToolMenu, {
              ref_key: "tableToolMenuRef",
              ref: tableToolMenuRef,
              formItems: (_c = vue.unref(formProps)) == null ? void 0 : _c.items,
              componentData: _ctx.componentData,
              onUpdateItems: handleUpdateItems
            }, null, 8, ["formItems", "componentData"]),
            vue.createVNode(ComponentPicker, {
              modelValue: showAddChildPicker.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => showAddChildPicker.value = $event),
              addParentFormItemId: addParentFormItemId.value,
              formItems: (_d = vue.unref(formProps)) == null ? void 0 : _d.items,
              componentData: _ctx.componentData,
              itemTypeData: _ctx.itemTypeData,
              onUpdateItems: handleUpdateItems
            }, null, 8, ["modelValue", "addParentFormItemId", "formItems", "componentData", "itemTypeData"])
          ];
        }),
        _: 3
      }, 8, ["collapse"]);
    };
  }
});
module.exports = _sfc_main;
