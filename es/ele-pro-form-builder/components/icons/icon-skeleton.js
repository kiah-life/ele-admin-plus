import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-skeleton",
  props: {
    size: {},
    color: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          { "ele-icon-bg-fill-light": _ctx.color !== "primary" },
          { "ele-icon-bg-primary": _ctx.color === "primary" }
        ]),
        style: normalizeStyle({
          flexShrink: 0,
          height: { xl: "18px", lg: "12px", md: "10px", sm: "6px", xs: "4px" }[_ctx.size || "md"],
          borderRadius: _ctx.size === "sm" ? "3px" : _ctx.size === "xs" ? "2px" : "4px"
        })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
