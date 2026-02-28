"use strict";
const vue = require("vue");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "icon-radio",
  props: {
    checked: { type: Boolean },
    size: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          "ele-icon-color-secondary",
          { "ele-icon-border-color-primary": _ctx.checked },
          { "ele-icon-border-color-base": !_ctx.checked },
          { "ele-icon-bg-white": _ctx.checked }
        ]),
        style: vue.normalizeStyle({
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
        vue.renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
module.exports = _sfc_main;
