"use strict";
const vue = require("vue");
const elementPlus = require("element-plus");
const icons = require("../../icons");
const _hoisted_1 = { class: "ele-pro-form-builder-item-tool-wrapper" };
const _hoisted_2 = { class: "ele-pro-form-builder-item-handle-content" };
const _hoisted_3 = { class: "ele-pro-form-builder-item-tools" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "builder-wrapper",
  props: {
    item: {},
    activeItemKey: {},
    handle: { type: Boolean }
  },
  emits: ["update:activeItemKey"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleItemBuilderWrapperClick = () => {
      emit("update:activeItemKey", props.item.key);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          "ele-pro-form-builder-item-wrapper",
          { "is-div-type": _ctx.item.type === "div" },
          { "is-active": _ctx.activeItemKey != null && _ctx.activeItemKey === _ctx.item.key }
        ]),
        onClick: vue.withModifiers(handleItemBuilderWrapperClick, ["stop"])
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createElementVNode("div", _hoisted_1, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass([
              "ele-pro-form-builder-item-handle",
              { "is-disabled": !_ctx.handle }
            ])
          }, [
            _ctx.handle ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
              key: 0,
              class: "ele-pro-form-builder-item-handle-icon"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(icons.DragOutlined))
              ]),
              _: 1
            })) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "builderItemHandleContent", {
              item: _ctx.item,
              activeItemKey: _ctx.activeItemKey
            }, () => [
              vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(_ctx.item.type), 1)
            ])
          ], 2),
          vue.createElementVNode("div", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "builderItemTools", {
              item: _ctx.item,
              activeItemKey: _ctx.activeItemKey
            })
          ])
        ])
      ], 2);
    };
  }
});
module.exports = _sfc_main;
