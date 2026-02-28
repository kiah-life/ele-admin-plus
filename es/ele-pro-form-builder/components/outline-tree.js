import { defineComponent, ref, watch, openBlock, createElementBlock, createBlock, createCommentVNode, unref } from "vue";
import { ElEmpty } from "element-plus";
import { findTree } from "../../utils/core";
import { fixedChildTypes } from "./build-core";
import { generateCopyItemData, generateAddChildData } from "./build-util";
import OutlineList from "./outline-list";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "outline-tree",
  props: {
    formItems: {},
    currentFormItemId: {},
    componentData: {},
    itemTypeData: {}
  },
  emits: ["update:currentFormItemId", "updateItems", "updateItemChildren", "openTableTool", "openComponentPicker"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const outlineWrapperRef = ref(null);
    const collapseItemIds = ref([]);
    const handleUpdateCurrentFormItemId = (itemId) => {
      emit("update:currentFormItemId", itemId);
    };
    const handleUpdateItems = (result) => {
      emit("updateItems", result);
    };
    const handleDeleteItem = (formItemId) => {
      handleUpdateItems({
        deleteItemIds: [formItemId],
        addItems: [],
        updateItems: []
      });
    };
    const handleCopyItem = (formItemId) => {
      handleUpdateItems(generateCopyItemData(formItemId, props.formItems));
    };
    const handleAddChildren = (triggerItem, action) => {
      if (triggerItem.type && fixedChildTypes.some((d) => d.type === triggerItem.type)) {
        const result = generateAddChildData(
          triggerItem,
          void 0,
          void 0,
          action,
          props.formItems,
          void 0,
          props.componentData
        );
        handleUpdateItems(result);
      } else {
        emit("openComponentPicker", triggerItem.key);
      }
    };
    const handleOpenTableTool = (item, e) => {
      var _a, _b;
      const el = e.currentTarget;
      const triggerEl = (_b = (_a = el == null ? void 0 : el.parentElement) == null ? void 0 : _a.querySelector) == null ? void 0 : _b.call(
        _a,
        ".ele-pro-form-builder-outline-item-table-tool-trigger"
      );
      emit("openTableTool", item.key, triggerEl);
    };
    const handleUpdateItemChildren = (children, parent) => {
      emit("updateItemChildren", children, parent);
    };
    const handleToggleItemCollapse = (formItemId) => {
      const index = collapseItemIds.value.indexOf(formItemId);
      if (index !== -1) {
        collapseItemIds.value.splice(index, 1);
      } else {
        collapseItemIds.value.push(formItemId);
      }
    };
    watch(
      () => props.formItems,
      (items) => {
        for (let i = collapseItemIds.value.length - 1; i >= 0; i--) {
          if (!findTree(items, (item) => collapseItemIds.value[i] === item.key)) {
            collapseItemIds.value.splice(i, 1);
          }
        }
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "outlineWrapperRef",
        ref: outlineWrapperRef,
        class: "ele-pro-form-builder-outline-wrapper"
      }, [
        _ctx.formItems ? (openBlock(), createBlock(OutlineList, {
          key: 0,
          items: _ctx.formItems,
          currentFormItemId: _ctx.currentFormItemId,
          collapseItemIds: collapseItemIds.value,
          componentData: _ctx.componentData,
          itemTypeData: _ctx.itemTypeData,
          "onUpdate:currentFormItemId": handleUpdateCurrentFormItemId,
          onToggleItemCollapse: handleToggleItemCollapse,
          onDeleteItem: handleDeleteItem,
          onCopyItem: handleCopyItem,
          onAddChildren: handleAddChildren,
          onOpenTableTool: handleOpenTableTool,
          onUpdateItemChildren: handleUpdateItemChildren
        }, null, 8, ["items", "currentFormItemId", "collapseItemIds", "componentData", "itemTypeData"])) : createCommentVNode("", true),
        !_ctx.formItems || !_ctx.formItems.length ? (openBlock(), createBlock(unref(ElEmpty), {
          key: 1,
          imageSize: 58,
          class: "ele-pro-form-builder-form-empty"
        })) : createCommentVNode("", true)
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
