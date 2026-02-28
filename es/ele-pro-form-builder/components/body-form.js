import { defineComponent, ref, reactive, watch, openBlock, createElementBlock, normalizeClass, createBlock, resolveDynamicComponent, mergeProps, createSlots, withCtx, createVNode, renderList, renderSlot, normalizeProps, guardReactiveProps, unref, createCommentVNode } from "vue";
import { ElEmpty } from "element-plus";
import { eachTree } from "../../utils/core";
import { mergeValue, getFormInitValue, setValue } from "../../ele-pro-form/util";
import EleProForm from "../../ele-pro-form/index";
import { generateAddChildData, generateCopyItemData } from "./build-util";
import ComponentName from "./component-name";
import BuilderTools from "./builder-tools";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const proFormRef = ref(null);
    const formData = reactive({});
    const cachebuilderFormData = reactive({});
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
        eachTree((_a = props.formProps) == null ? void 0 : _a.items, (item, cIndex, parent) => {
          var _a2;
          if (item.key === formItem.key) {
            const result = generateAddChildData(
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
          generateCopyItemData(item.key, (_a = props.formProps) == null ? void 0 : _a.items)
        );
      }
    };
    const handleOpenTableTool = (item, e) => {
      if (item.key != null) {
        emit("openTableTool", item.key, e.currentTarget);
      }
    };
    const setBuilderFormDataFieldValue = (field, value) => {
      setValue(formData, field, value);
      setValue(cachebuilderFormData, field, value);
    };
    const handleUpdateFormItems = (items) => {
      emit("updateFormItems", items);
    };
    watch(
      () => props.currentFormItemId,
      (currentFormItemId) => {
        var _a;
        eachTree((_a = props.formProps) == null ? void 0 : _a.items, (item, _cIndex, parent) => {
          if (item.key === currentFormItemId) {
            if (item.type && ["tabPane", "collapseItem"].includes(item.type) && parent && parent.prop) {
              setBuilderFormDataFieldValue(parent.prop, item.prop);
            }
            return false;
          }
        });
      }
    );
    watch(
      () => props.formProps,
      () => {
        var _a;
        Object.keys(formData).forEach((k) => {
          formData[k] = void 0;
        });
        mergeValue(
          formData,
          getFormInitValue((_a = props.formProps) == null ? void 0 : _a.items, props.itemTypeData),
          cachebuilderFormData
        );
      },
      {
        deep: true,
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "ele-pro-form-builder-body",
          { "is-pc": _ctx.currentScreen === "pc" },
          { "is-pad": _ctx.currentScreen === "pad" },
          { "is-phone": _ctx.currentScreen === "phone" }
        ])
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.proFormComponent || EleProForm), mergeProps(_ctx.formProps || {}, {
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
        }), createSlots({
          builderItemHandleContent: withCtx(({ item }) => [
            createVNode(ComponentName, {
              itemType: item.type,
              componentData: _ctx.componentData
            }, null, 8, ["itemType", "componentData"])
          ]),
          builderItemTools: withCtx(({ item }) => [
            createVNode(BuilderTools, {
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
          renderList(Object.keys(_ctx.$slots).filter((k) => !ownSlots.includes(k)), (name) => {
            return {
              name,
              fn: withCtx((slotProps) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps || {})))
              ])
            };
          })
        ]), 1040, ["model", "searchExpand", "activeItemKey", "itemTypeData", "httpRequest"])),
        !_ctx.formProps || !_ctx.formProps.items || !_ctx.formProps.items.length ? (openBlock(), createBlock(unref(ElEmpty), {
          key: 0,
          imageSize: 80,
          description: "拖拽左侧组件到此",
          class: "ele-pro-form-builder-form-empty"
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
