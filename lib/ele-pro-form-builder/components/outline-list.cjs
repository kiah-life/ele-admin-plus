"use strict";
const vue = require("vue");
const VueDraggable = require("vuedraggable");
const elementPlus = require("element-plus");
const icons = require("../../icons");
const util = require("../../ele-pro-form/util");
const ComponentName = require("./component-name");
const _hoisted_1 = ["title", "onClick"];
const _hoisted_2 = { class: "ele-pro-form-builder-outline-item-content" };
const _hoisted_3 = { class: "ele-pro-form-builder-outline-item-prop" };
const _hoisted_4 = {
  key: 0,
  class: "ele-pro-form-builder-outline-item-label"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return util.isContainerType(item, props.itemTypeData);
    };
    const isTableChildType = (item) => {
      if (!item.type) {
        return false;
      }
      return ["tableRow", "tableCell"].includes(item.type);
    };
    return (_ctx, _cache) => {
      const _component_OutlineList = vue.resolveComponent("OutlineList", true);
      return vue.openBlock(), vue.createBlock(vue.unref(VueDraggable), {
        itemKey: "key",
        modelValue: _ctx.items,
        forceFallback: true,
        setData: () => void 0,
        group: "ProFormBuilderOutlineSortGroup",
        handle: ".ele-pro-form-builder-outline-item-handle",
        class: "ele-pro-form-builder-outline",
        "onUpdate:modelValue": handleUpdateModelValue
      }, {
        item: vue.withCtx(({ element }) => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([
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
            itemIsContainerType(element) ? (vue.openBlock(), vue.createBlock(_component_OutlineList, {
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
            }, null, 8, ["items", "currentFormItemId", "collapseItemIds", "parent", "componentData", "itemTypeData"])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", {
              class: "ele-pro-form-builder-outline-item-body",
              title: (element.prop ?? "") + " " + (element.label ?? ""),
              onClick: ($event) => handleUpdateCurrentFormItemId(element.key)
            }, [
              element.children && element.children.length ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 0,
                class: "ele-pro-form-builder-outline-item-arrow",
                onClick: vue.withModifiers(($event) => handleToggleItemCollapse(element.key), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.ArrowDown))
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              vue.createElementVNode("div", _hoisted_2, [
                vue.createVNode(ComponentName, {
                  itemType: element.type,
                  componentData: _ctx.componentData,
                  class: "ele-pro-form-builder-outline-item-type-tag"
                }, null, 8, ["itemType", "componentData"]),
                vue.createElementVNode("span", _hoisted_3, vue.toDisplayString(element.prop), 1),
                element.label ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, vue.toDisplayString(element.label), 1)) : vue.createCommentVNode("", true)
              ]),
              !isTableChildType(element) ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 1,
                class: "ele-pro-form-builder-outline-item-tool is-danger",
                title: "删除",
                onClick: vue.withModifiers(($event) => handleDeleteItem(element.key), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.DeleteOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              !isTableChildType(element) ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 2,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "复制",
                onClick: vue.withModifiers(($event) => handleCopyItem(element.key), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.CopyOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              element.type === "table" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 3,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "新增行",
                onClick: vue.withModifiers(($event) => handleAddChildren(element, "addTableRow"), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.InsertRowOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              element.type === "table" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 4,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "新增列",
                onClick: vue.withModifiers(($event) => handleAddChildren(element, "addTableCol"), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.InsertColumnOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              element.type === "tableCell" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 5,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "更多",
                onClick: vue.withModifiers((e) => handleOpenTableTool(element, e), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.AppstoreAddOutlined), { style: { "transform": "scale(1.1)" } })
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              itemIsContainerType(element) && element.type !== "table" && element.type !== "tableRow" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
                key: 6,
                class: "ele-pro-form-builder-outline-item-tool",
                title: "添加子级",
                onClick: vue.withModifiers(($event) => handleAddChildren(element), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.PlusSquareDashOutlined))
                ]),
                _: 2
              }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
              vue.createVNode(vue.unref(elementPlus.ElIcon), {
                class: "ele-pro-form-builder-outline-item-handle",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                }, ["stop"]))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(icons.DragOutlined), { style: { "transform": "scale(1.1)" } })
                ]),
                _: 1
              }),
              _cache[1] || (_cache[1] = vue.createElementVNode("div", { class: "ele-pro-form-builder-outline-item-table-tool-trigger" }, null, -1))
            ], 8, _hoisted_1),
            _cache[2] || (_cache[2] = vue.createElementVNode("div", { class: "ele-pro-form-builder-outline-item-border" }, null, -1))
          ], 2)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
module.exports = _sfc_main;
