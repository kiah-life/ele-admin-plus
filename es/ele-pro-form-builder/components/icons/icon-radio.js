import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-radio",
  props: {
    checked: { type: Boolean },
    size: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "ele-icon-color-secondary",
          { "ele-icon-border-color-primary": _ctx.checked },
          { "ele-icon-border-color-base": !_ctx.checked },
          { "ele-icon-bg-white": _ctx.checked }
        ]),
        style: normalizeStyle({
          width: { xxl: "22px", xl: "18px", lg: "14px", md: "12px", sm: "8px" }[_ctx.size || "md"],
          height: { xxl: "22px", xl: "18px", lg: "14px", md: "12px", sm: "8px" }[_ctx.size || "md"],
          lineHeight: {
            xxl: "22px",
            xl: "18px",
            lg: "14px",
            md: "12px",
            sm: "8px"
          }[_ctx.size || "md"],
          borderRadius: "50%",
          textAlign: "center",
          borderStyle: "solid",
          borderWidth: _ctx.checked ? _ctx.size === "sm" ? "3px" : "4px" : "1px",
          fontSize: "12px",
          boxSizing: "border-box",
          marginRight: _ctx.size === "lg" || _ctx.size === "xl" ? "8px" : _ctx.size === "sm" ? "4px" : "6px"
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
