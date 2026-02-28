"use strict";
const vue = require("vue");
const VueDraggable = require("vuedraggable");
const elementPlus = require("element-plus");
const icons = require("../../icons");
const ComponentName = require("./component-name");
const _hoisted_1 = { class: "ele-pro-form-builder-children-edit-item" };
const _hoisted_2 = {
  key: 0,
  class: "ele-pro-form-builder-children-edit-item-body"
};
const _hoisted_3 = {
  key: 1,
  class: "ele-pro-form-builder-children-edit-item-body"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "ele-pro-form-builder-children-edit-item-text" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "children-edit",
  props: {
    addBtnText: {},
    formItem: {},
    componentData: {}
  },
  emits: ["update:currentFormItemId", "updateChildLabel", "sortChildren", "deleteChildren", "addChildren"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleUpdateLabel = (value, item, field) => {
      emit("updateChildLabel", value, item, field);
    };
    const handleUpdateChildren = (children) => {
      emit("sortChildren", children);
    };
    const handleDelete = (item) => {
      emit("deleteChildren", item);
    };
    const handleClick = (item) => {
      emit("update:currentFormItemId", item.key);
    };
    const handleAdd = () => {
      emit("addChildren", props.formItem);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        _ctx.formItem.children ? (vue.openBlock(), vue.createBlock(vue.unref(VueDraggable), {
          key: 0,
          itemKey: "key",
          animation: 150,
          setData: () => void 0,
          modelValue: _ctx.formItem.children,
          handle: ".ele-pro-form-builder-children-edit-item-handle",
          class: "ele-pro-form-builder-children-edit-list",
          "onUpdate:modelValue": handleUpdateChildren
        }, {
          item: vue.withCtx(({ element }) => {
            var _a, _b;
            return [
              vue.createElementVNode("div", _hoisted_1, [
                vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "ele-pro-form-builder-children-edit-item-handle" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(icons.DragOutlined))
                  ]),
                  _: 1
                }),
                _ctx.formItem.type && _ctx.formItem.type === "tabs" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
                  vue.createVNode(vue.unref(elementPlus.ElInput), {
                    size: "small",
                    modelValue: (_a = element.props) == null ? void 0 : _a.label,
                    "onUpdate:modelValue": (value) => handleUpdateLabel(value, element, "props.label")
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : _ctx.formItem.type && _ctx.formItem.type === "collapse" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                  vue.createVNode(vue.unref(elementPlus.ElInput), {
                    size: "small",
                    modelValue: (_b = element.props) == null ? void 0 : _b.title,
                    "onUpdate:modelValue": (value) => handleUpdateLabel(value, element, "props.title")
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : (vue.openBlock(), vue.createElementBlock("div", {
                  key: 2,
                  class: "ele-pro-form-builder-children-edit-item-body is-clickable",
                  onClick: vue.withModifiers(($event) => handleClick(element), ["stop"])
                }, [
                  vue.createVNode(ComponentName, {
                    itemType: element.type,
                    componentData: _ctx.componentData,
                    class: "ele-pro-form-builder-outline-item-type-tag"
                  }, null, 8, ["itemType", "componentData"]),
                  vue.createElementVNode("div", _hoisted_5, vue.toDisplayString(element.label || element.prop), 1)
                ], 8, _hoisted_4)),
                vue.createVNode(vue.unref(elementPlus.ElIcon), {
                  class: "ele-pro-form-builder-children-edit-item-del-btn",
                  title: "删除",
                  onClick: vue.withModifiers(($event) => handleDelete(element), ["stop"])
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(icons.DeleteOutlined))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ];
          }),
          _: 1
        }, 8, ["modelValue"])) : vue.createCommentVNode("", true),
        vue.createVNode(vue.unref(elementPlus.ElButton), {
          size: "small",
          icon: vue.unref(icons.PlusOutlined),
          style: { width: "100%" },
          onClick: handleAdd
        }, vue.createSlots({ _: 2 }, [
          _ctx.addBtnText ? {
            name: "default",
            fn: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.addBtnText), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["icon"])
      ], 64);
    };
  }
});
module.exports = _sfc_main;
