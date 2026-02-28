import { defineComponent, resolveComponent, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, createCommentVNode, withModifiers, createVNode, toDisplayString, createElementBlock } from "vue";
import VueDraggable from "vuedraggable";
import { ElIcon } from "element-plus";
import { ArrowDown, DeleteOutlined, CopyOutlined, InsertRowOutlined, InsertColumnOutlined, AppstoreAddOutlined, PlusSquareDashOutlined, DragOutlined } from "../../icons";
import { isContainerType } from "../../ele-pro-form/util";
import ComponentName from "./component-name";
const _hoisted_1 = ["title", "onClick"];
const _hoisted_2 = { class: "ele-pro-form-builder-outline-item-content" };
const _hoisted_3 = { class: "ele-pro-form-builder-outline-item-prop" };
const _hoisted_4 = {
  key: 0,
  class: "ele-pro-form-builder-outline-item-label"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "OutlineList" },
  __name: "outline-list",
  props: {
    items: {},
    currentFormItemId: {},
    collapseItemIds: {},
    parent: {},
    componentData: {},
    itemTypeData: {}
  },
  emits: ["update:currentFormItemId", "toggleItemCollapse", "deleteItem", "copyItem", "addChildren", "openTableTool", "updateItemChildren"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleUpdateCurrentFormItemId = (itemId) => {
      emit("update:currentFormItemId", itemId);
    };
    const handleToggleItemCollapse = (formItemId) => {
      emit("toggleItemCollapse", formItemId);
    };
    const handleDeleteItem = (formItemId) => {
      emit("deleteItem", formItemId);
    };
    const handleCopyItem = (formItemId) => {
      emit("copyItem", formItemId);
    };
    const handleAddChildren = (triggerItem, action) => {
      emit("addChildren", triggerItem, action);
    };
    const handleOpenTableTool = (item, e) => {
      emit("openTableTool", item, e);
    };
    const handleUpdateModelValue = (data) => {
      handleUpdateItemChildren(data, props.parent);
    };
    const handleUpdateItemChildren = (children, parent) => {
      emit("updateItemChildren", children, parent);
    };
    const itemIsContainerType = (item) => {
      return isContainerType(item, props.itemTypeData);
    };
    const isTableChildType = (item) => {
      if (!item.type) {
        return false;
      }
      return ["tableRow", "tableCell"].includes(item.type);
    };
    return (_ctx, _cache) => {
      const _component_OutlineList = resolveComponent("OutlineList", true);
      return openBlock(), createBlock(unref(VueDraggable), {
        itemKey: "key",
        modelValue: _ctx.items,
        forceFallback: true,
        setData: () => void 0,
        group: "ProFormBuilderOutlineSortGroup",
        handle: ".ele-pro-form-builder-outline-item-handle",
        class: "ele-pro-form-builder-outline",
        "onUpdate:modelValue": handleUpdateModelValue
      }, {
        item: withCtx(({ element }) => [
          createElementVNode("div", {
            class: normalizeClass([
              "ele-pro-form-builder-outline-item",
              {
                "is-active": element.key != null && _ctx.currentFormItemId != null && _ctx.currentFormItemId === element.key
              },
              {
                "is-collapse": element.key != null && _ctx.collapseItemIds && _ctx.collapseItemIds.includes(element.key)
              },
              { "is-form-item": !itemIsContainerType(element) }
            ])
          }, [
            itemIsContainerType(element) ? (openBlock(), createBlock(_component_OutlineList, {
              key: 0,
              items: element.children || [],
              currentFormItemId: _ctx.currentFormItemId,
              collapseItemIds: _ctx.collapseItemIds,
              parent: element,
              componentData: _ctx.componentData,
              itemTypeData: _ctx.itemTypeData,
              "onUpdate:currentFormItemId": handleUpdateCurrentFormItemId,
              onToggleItemCollapse: handleToggleItemCollapse,
              onDeleteItem: handleDeleteItem,
              onCopyItem: handleCopyItem,
              onAddChildren: handleAddChildren,
              onOpenTableTool: handleOpenTableTool,
              onUpdateItemChildren: handleUpdateItemChildren
            }, null, 8, ["items", "currentFormItemId", "collapseItemIds", "parent", "componentData", "itemTypeData"])) : createCommentVNode("", true),
            createElementVNode("div", {
              class: "ele-pro-form-builder-outline-item-body",
              title: (element.prop ?? "") + " " + (element.label ?? ""),
              onClick: ($event) => handleUpdateCurrentFormItemId(element.key)
            }, [
              element.children && element.children.length ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: "ele-pro-form-builder-outline-item-arrow",
                onClick: withModifiers(($event) => handleToggleItemCollapse(element.key), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(ArrowDown))
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_2, [
                createVNode(ComponentName, {
                  itemType: element.type,
                  componentData: _ctx.componentData,
                  class: "ele-pro-form-builder-outline-item-type-tag"
                }, null, 8, ["itemType", "componentData"]),
                createElementVNode("span", _hoisted_3, toDisplayString(element.prop), 1),
                element.label ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(element.label), 1)) : createCommentVNode("", true)
              ]),
              !isTableChildType(element) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 1,
                class: "ele-pro-form-builder-outline-item-tool is-danger",
                title: "删除",
                onClick: withModifiers(($event) => handleDeleteItem(element.key), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(DeleteOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              !isTableChildType(element) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 2,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "复制",
                onClick: withModifiers(($event) => handleCopyItem(element.key), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(CopyOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              element.type === "table" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 3,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "新增行",
                onClick: withModifiers(($event) => handleAddChildren(element, "addTableRow"), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(InsertRowOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              element.type === "table" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 4,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "新增列",
                onClick: withModifiers(($event) => handleAddChildren(element, "addTableCol"), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(InsertColumnOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              element.type === "tableCell" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 5,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "更多",
                onClick: withModifiers((e) => handleOpenTableTool(element, e), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(AppstoreAddOutlined), { style: { "transform": "scale(1.1)" } })
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              itemIsContainerType(element) && element.type !== "table" && element.type !== "tableRow" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 6,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "添加子级",
                onClick: withModifiers(($event) => handleAddChildren(element), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(PlusSquareDashOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              createVNode(unref(ElIcon), {
                class: "ele-pro-form-builder-outline-item-handle",
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(unref(DragOutlined), { style: { "transform": "scale(1.1)" } })
                ]),
                _: 1
              }),
              _cache[1] || (_cache[1] = createElementVNode("div", { class: "ele-pro-form-builder-outline-item-table-tool-trigger" }, null, -1))
            ], 8, _hoisted_1),
            _cache[2] || (_cache[2] = createElementVNode("div", { class: "ele-pro-form-builder-outline-item-border" }, null, -1))
          ], 2)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};
