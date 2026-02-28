import { defineComponent, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, renderSlot } from "vue";
import { ElButton } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tool-button",
  props: {
    buttonProps: {},
    tooltip: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleClick = (e) => {
      emit("click", e);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElButton), mergeProps(_ctx.buttonProps || {}, {
        title: _ctx.tooltip,
        class: "ele-pro-form-builder-tool-button",
        onClick: handleClick
      }), createSlots({ _: 2 }, [
        _ctx.$slots.default ? {
          name: "default",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["title"]);
    };
  }
});
export {
  _sfc_main as default
};
