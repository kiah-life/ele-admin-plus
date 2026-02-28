import { defineComponent, useModel, ref, computed, watch, openBlock, createBlock, withCtx, createVNode, createElementVNode, unref, createSlots, renderList, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import { findTree, omit, eachTree } from "../utils/core";
import { useMobile, useMobileDevice } from "../utils/hook";
import { setValue } from "../ele-pro-form/util";
import EleSplitPanel from "../ele-split-panel/index";
import EleTabBar from "../ele-tab-bar/index";
import ComponentList from "./components/component-list";
import TemplateList from "./components/template-list";
import OutlineTree from "./components/outline-tree";
import BodyHeader from "./components/body-header";
import BodyForm from "./components/body-form";
import PropsForm from "./components/props-form";
import ConfigForm from "./components/config-form";
import TableToolMenu from "./components/table-tool-menu";
import ComponentPicker from "./components/component-picker";
import { proFormBuilderProps, proFormBuilderEmits } from "./props";
const _hoisted_1 = { class: "ele-pro-form-builder-tab-body" };
const _hoisted_2 = { class: "ele-pro-form-builder-body-wrapper" };
const _hoisted_3 = { class: "ele-pro-form-builder-tab-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleProFormBuilder" },
  __name: "index",
  props: proFormBuilderProps,
  emits: proFormBuilderEmits,
  setup(__props, { emit: __emit }) {
    const defaultHeaderRightTools = [
      "import",
      "export",
      "clear",
      "preview"
    ];
    const props = __props;
    const emit = __emit;
    const [mobile] = useMobile((isMobile) => {
      leftSideCollapse.value = isMobile;
      rightSideCollapse.value = isMobile;
    });
    const [mobileDevice] = useMobileDevice();
    const formProps = useModel(props, "modelValue");
    const leftSideCollapse = ref(mobile.value);
    const rightSideCollapse = ref(mobile.value);
    const leftTabActive = ref("components");
    const rightTabActive = ref("formProps");
    const currentFormItemId = ref();
    const currentScreen = ref("pc");
    const historyDataList = ref([]);
    const redoDataList = ref([]);
    const tableToolMenuRef = ref(null);
    const showAddChildPicker = ref(false);
    const addParentFormItemId = ref();
    const headerRightToolNames = computed(() => {
      if (typeof props.headerTools === "undefined" || props.headerTools === true) {
        return defaultHeaderRightTools;
      }
      if (!props.headerTools) {
        return [];
      }
      return props.headerTools;
    });
    const setFormPropValue = (field, value) => {
      if (!formProps.value) {
        formProps.value = { items: [] };
      }
      if (!field) {
        Object.assign(formProps.value, value);
      } else {
        setValue(formProps.value, field, value);
      }
    };
    const getFormItems = () => {
      var _a;
      return ((_a = formProps.value) == null ? void 0 : _a.items) || [];
    };
    const setFormItems = (items) => {
      if (!formProps.value) {
        formProps.value = Object.assign({}, props.proFormInitialProps || {}, {
          items: items || []
        });
        return;
      }
      const data = formProps.value;
      if (!data.items && props.proFormInitialProps) {
        const keys = Object.keys(data).filter(
          (k) => typeof data[k] !== "undefined"
        );
        Object.assign(formProps.value, omit(props.proFormInitialProps, keys), {
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
      const item = findTree(getFormItems(), (item2) => item2.key === formItemId);
      if (item) {
        if (!field) {
          const temp = omit(value, ["key", "children"]);
          Object.assign(item, temp);
        } else {
          setValue(item, field, value);
        }
      }
    };
    const deleteFormItem = (formItemId) => {
      if (currentFormItemId.value != null && currentFormItemId.value === formItemId) {
        currentFormItemId.value = void 0;
      }
      const formItemsData = getFormItems();
      eachTree(formItemsData, (item, index, parent) => {
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
        const parent = findTree(
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
      const item = findTree(getFormItems(), (item2) => item2.key === formItemId);
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
      eachTree(getFormItems(), (item) => {
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
    watch(currentFormItemId, (formItemId) => {
      if (formItemId != null) {
        if (rightTabActive.value !== "itemProps") {
          rightTabActive.value = "itemProps";
        }
      } else if (!getFormItems().length && rightTabActive.value !== "formProps") {
        rightTabActive.value = "formProps";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(EleSplitPanel, {
        space: "0px",
        size: "280px",
        allowCollapse: true,
        collapse: leftSideCollapse.value,
        "onUpdate:collapse": _cache[8] || (_cache[8] = ($event) => leftSideCollapse.value = $event),
        class: "ele-pro-form-builder-wrapper"
      }, {
        body: withCtx(() => [
          createVNode(EleSplitPanel, {
            space: "0px",
            size: "220px",
            reverse: true,
            allowCollapse: true,
            collapse: rightSideCollapse.value,
            "onUpdate:collapse": _cache[6] || (_cache[6] = ($event) => rightSideCollapse.value = $event),
            class: "ele-pro-form-builder-main-wrapper"
          }, {
            body: withCtx(() => [
              createElementVNode("div", _hoisted_2, [
                createVNode(BodyHeader, {
                  currentScreen: currentScreen.value,
                  "onUpdate:currentScreen": _cache[2] || (_cache[2] = ($event) => currentScreen.value = $event),
                  undoDisabled: !historyDataList.value.length,
                  redoDisabled: !redoDataList.value.length,
                  formProps: unref(formProps),
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
                }, createSlots({ _: 2 }, [
                  renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: withCtx((slotProps) => [
                        renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["currentScreen", "undoDisabled", "redoDisabled", "formProps", "headerTools", "proFormComponent", "jsonEditerComponent", "itemTypeData", "httpRequest"]),
                createVNode(BodyForm, {
                  formProps: unref(formProps),
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
                }, createSlots({ _: 2 }, [
                  renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: withCtx((slotProps) => [
                        renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["formProps", "componentData", "currentFormItemId", "currentScreen", "proFormComponent", "itemTypeData", "httpRequest"])
              ])
            ]),
            default: withCtx(() => [
              createVNode(EleTabBar, {
                modelValue: rightTabActive.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => rightTabActive.value = $event),
                items: [
                  { value: "itemProps", label: "属性设置" },
                  { value: "formProps", label: "表单设置" }
                ]
              }, null, 8, ["modelValue"]),
              createElementVNode("div", _hoisted_3, [
                rightTabActive.value === "itemProps" ? (openBlock(), createBlock(PropsForm, {
                  key: 0,
                  formProps: unref(formProps),
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
                }, createSlots({ _: 2 }, [
                  renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: withCtx((slotProps) => [
                        renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["formProps", "currentFormItemId", "configFormPresetProps", "componentData", "proFormComponent", "codeEditerComponent", "jsonEditerComponent", "htmlEditerComponent", "itemTypeData", "httpRequest"])) : (openBlock(), createBlock(ConfigForm, {
                  key: 1,
                  formProps: unref(formProps),
                  configFormItems: _ctx.configFormItems,
                  configFormPresetProps: _ctx.configFormPresetProps,
                  proFormComponent: _ctx.proFormComponent,
                  jsonEditerComponent: _ctx.jsonEditerComponent,
                  itemTypeData: _ctx.itemTypeData,
                  httpRequest: _ctx.httpRequest,
                  onUpdateFormProp: handleUpdateFormProp
                }, createSlots({ _: 2 }, [
                  renderList(Object.keys(_ctx.$slots), (name) => {
                    return {
                      name,
                      fn: withCtx((slotProps) => [
                        renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
                      ])
                    };
                  })
                ]), 1032, ["formProps", "configFormItems", "configFormPresetProps", "proFormComponent", "jsonEditerComponent", "itemTypeData", "httpRequest"]))
              ])
            ]),
            _: 3
          }, 8, ["collapse"])
        ]),
        default: withCtx(() => {
          var _a, _b, _c, _d;
          return [
            createVNode(EleTabBar, {
              modelValue: leftTabActive.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => leftTabActive.value = $event),
              items: [
                { value: "components", label: "组件库" },
                { value: "templates", label: "模板库" },
                { value: "outlines", label: "大纲" }
              ]
            }, null, 8, ["modelValue"]),
            createElementVNode("div", _hoisted_1, [
              leftTabActive.value === "outlines" ? (openBlock(), createBlock(OutlineTree, {
                key: 0,
                formItems: (_a = unref(formProps)) == null ? void 0 : _a.items,
                currentFormItemId: currentFormItemId.value,
                "onUpdate:currentFormItemId": _cache[1] || (_cache[1] = ($event) => currentFormItemId.value = $event),
                componentData: _ctx.componentData,
                itemTypeData: _ctx.itemTypeData,
                onUpdateItems: handleUpdateItems,
                onUpdateItemChildren: handleUpdateItemChildren,
                onOpenTableTool: handleOpenTableTool,
                onOpenComponentPicker: handleOpenComponentPicker
              }, null, 8, ["formItems", "currentFormItemId", "componentData", "itemTypeData"])) : leftTabActive.value === "templates" ? (openBlock(), createBlock(TemplateList, {
                key: 1,
                templateData: _ctx.templateData,
                onImportData: handleImport
              }, null, 8, ["templateData"])) : (openBlock(), createBlock(ComponentList, {
                key: 2,
                formItems: (_b = unref(formProps)) == null ? void 0 : _b.items,
                draggable: !unref(mobileDevice) && !unref(mobile),
                componentData: _ctx.componentData,
                itemTypeData: _ctx.itemTypeData,
                onUpdateItems: handleUpdateItems
              }, null, 8, ["formItems", "draggable", "componentData", "itemTypeData"]))
            ]),
            createVNode(TableToolMenu, {
              ref_key: "tableToolMenuRef",
              ref: tableToolMenuRef,
              formItems: (_c = unref(formProps)) == null ? void 0 : _c.items,
              componentData: _ctx.componentData,
              onUpdateItems: handleUpdateItems
            }, null, 8, ["formItems", "componentData"]),
            createVNode(ComponentPicker, {
              modelValue: showAddChildPicker.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => showAddChildPicker.value = $event),
              addParentFormItemId: addParentFormItemId.value,
              formItems: (_d = unref(formProps)) == null ? void 0 : _d.items,
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
export {
  _sfc_main as default
};
