import { defineComponent, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot, createElementVNode, createBlock, unref, withCtx, createVNode, createCommentVNode, toDisplayString } from "vue";
import { ElIcon } from "element-plus";
import { DragOutlined } from "../../icons";
const _hoisted_1 = { class: "ele-pro-form-builder-item-tool-wrapper" };
const _hoisted_2 = { class: "ele-pro-form-builder-item-handle-content" };
const _hoisted_3 = { class: "ele-pro-form-builder-item-tools" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "ele-pro-form-builder-item-wrapper",
          { "is-div-type": _ctx.item.type === "div" },
          { "is-active": _ctx.activeItemKey != null && _ctx.activeItemKey === _ctx.item.key }
        ]),
        onClick: withModifiers(handleItemBuilderWrapperClick, ["stop"])
      }, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", {
            class: normalizeClass([
              "ele-pro-form-builder-item-handle",
              { "is-disabled": !_ctx.handle }
            ])
          }, [
            _ctx.handle ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: "ele-pro-form-builder-item-handle-icon"
            }, {
              default: withCtx(() => [
                createVNode(unref(DragOutlined))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "builderItemHandleContent", {
              item: _ctx.item,
              activeItemKey: _ctx.activeItemKey
            }, () => [
              createElementVNode("div", _hoisted_2, toDisplayString(_ctx.item.type), 1)
            ])
          ], 2),
          createElementVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "builderItemTools", {
              item: _ctx.item,
              activeItemKey: _ctx.activeItemKey
            })
          ])
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
