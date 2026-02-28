"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const core = require("../../utils/core");
const util = require("../../ele-pro-form/util");
const EleProForm = require("../../ele-pro-form/index");
const buildUtil = require("./build-util");
const ComponentName = require("./component-name");
const BuilderTools = require("./builder-tools");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "body-form",
  props: {
    formProps: {},
    currentFormItemId: {},
    currentScreen: {},
    componentData: {},
    proFormComponent: {},
    itemTypeData: {},
    httpRequest: {}
  },
  emits: ["update:currentFormItemId", "updateItems", "openTableTool", "updateFormItems"],
  setup(__props, { emit: __emit }) {
    const ownSlots = ["builderItemHandleContent", "builderItemTools"];
    const props = __props;
    const emit = __emit;
    const proFormRef = vue.ref(null);
    const formData = vue.reactive({});
    const cachebuilderFormData = vue.reactive({});
    const handleUpdateItems = (result) => {
      emit("updateItems", result);
    };
    const handleUpdateCurrentFormItemId = (formItemId) => {
      emit("update:currentFormItemId", formItemId);
    };
    const handleDeleteItem = (item) => {
      if (item.key != null) {
        handleUpdateItems({
          deleteItemIds: [item.key],
          addItems: [],
          updateItems: []
        });
      }
    };
    const handleAddChildrenItem = (formItem, action) => {
      var _a;
      if (formItem.key != null) {
        core.eachTree((_a = props.formProps) == null ? void 0 : _a.items, (item, cIndex, parent) => {
          var _a2;
          if (item.key === formItem.key) {
            const result = buildUtil.generateAddChildData(
              item,
              parent,
              cIndex,
              action,
              (_a2 = props.formProps) == null ? void 0 : _a2.items,
              void 0,
              props.componentData
            );
            handleUpdateItems(result);
            return false;
          }
        });
      }
    };
    const handleCopyItem = (item) => {
      var _a;
      if (item.key != null) {
        handleUpdateItems(
          buildUtil.generateCopyItemData(item.key, (_a = props.formProps) == null ? void 0 : _a.items)
        );
      }
    };
    const handleOpenTableTool = (item, e) => {
      if (item.key != null) {
        emit("openTableTool", item.key, e.currentTarget);
      }
    };
    const setBuilderFormDataFieldValue = (field, value) => {
      util.setValue(formData, field, value);
      util.setValue(cachebuilderFormData, field, value);
    };
    const handleUpdateFormItems = (items) => {
      emit("updateFormItems", items);
    };
    vue.watch(
      () => props.currentFormItemId,
      (currentFormItemId) => {
        var _a;
        core.eachTree((_a = props.formProps) == null ? void 0 : _a.items, (item, _cIndex, parent) => {
          if (item.key === currentFormItemId) {
            if (item.type && ["tabPane", "collapseItem"].includes(item.type) && parent && parent.prop) {
              setBuilderFormDataFieldValue(parent.prop, item.prop);
            }
            return false;
          }
        });
      }
    );
    vue.watch(
      () => props.formProps,
      () => {
        var _a;
        Object.keys(formData).forEach((k) => {
          formData[k] = void 0;
        });
        util.mergeValue(
          formData,
          util.getFormInitValue((_a = props.formProps) == null ? void 0 : _a.items, props.itemTypeData),
          cachebuilderFormData
        );
      },
      {
        deep: true,
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          "ele-pro-form-builder-body",
          { "is-pc": _ctx.currentScreen === "pc" },
          { "is-pad": _ctx.currentScreen === "pad" },
          { "is-phone": _ctx.currentScreen === "phone" }
        ])
      }, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.proFormComponent || EleProForm), vue.mergeProps(_ctx.formProps || {}, {
          ref_key: "proFormRef",
          ref: proFormRef,
          model: formData,
          searchExpand: formData.searchExpand,
          "onUpdate:searchExpand": _cache[0] || (_cache[0] = ($event) => formData.searchExpand = $event),
          activeItemKey: _ctx.currentFormItemId,
          editable: true,
          footer: false,
          validateOnRuleChange: false,
          scrollToError: false,
          showMessage: false,
          itemTypeData: _ctx.itemTypeData,
          httpRequest: _ctx.httpRequest,
          class: "ele-pro-form-builder-body-form",
          onUpdateValue: setBuilderFormDataFieldValue,
          "onUpdate:items": handleUpdateFormItems,
          "onUpdate:activeItemKey": handleUpdateCurrentFormItemId
        }), vue.createSlots({
          builderItemHandleContent: vue.withCtx(({ item }) => [
            vue.createVNode(ComponentName, {
              itemType: item.type,
              componentData: _ctx.componentData
            }, null, 8, ["itemType", "componentData"])
          ]),
          builderItemTools: vue.withCtx(({ item }) => [
            vue.createVNode(BuilderTools, {
              itemType: item.type,
              onDelete: ($event) => handleDeleteItem(item),
              onCopy: ($event) => handleCopyItem(item),
              onAdd: ($event) => handleAddChildrenItem(item),
              onAddTableRow: ($event) => handleAddChildrenItem(item, "addTableRow"),
              onAddTableCol: ($event) => handleAddChildrenItem(item, "addTableCol"),
              onOpenTableTool: (e) => handleOpenTableTool(item, e)
            }, null, 8, ["itemType", "onDelete", "onCopy", "onAdd", "onAddTableRow", "onAddTableCol", "onOpenTableTool"])
          ]),
          _: 2
        }, [
          vue.renderList(Object.keys(_ctx.$slots).filter((k) => !ownSlots.includes(k)), (name) => {
            return {
              name,
              fn: vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1040, ["model", "searchExpand", "activeItemKey", "itemTypeData", "httpRequest"])),
        !_ctx.formProps || !_ctx.formProps.items || !_ctx.formProps.items.length ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElEmpty), {
          key: 0,
          imageSize: 80,
          description: "拖拽左侧组件到此",
          class: "ele-pro-form-builder-form-empty"
        })) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
