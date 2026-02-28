"use strict";
const vue = require("vue");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "icon-arrow",
  props: {
    size: {},
    direction: {},
    color: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          {
            "ele-icon-border-color-text-light": _ctx.color !== "primary"
          },
          { "ele-icon-border-color-primary": _ctx.color === "primary" }
        ]),
        style: vue.normalizeStyle({
          flexShrink: 0,
          borderStyle: "solid",
          borderWidth: _ctx.size === "sm" ? "3px" : "4px",
          ...{
            right: {
              borderTopColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "transparent"
            },
            left: {
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderBottomColor: "transparent"
            },
            down: {
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "transparent"
            },
            up: {
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent"
            }
          }[_ctx.direction || "right"]
        })
      }, null, 6);
    };
  }
});
module.exports = _sfc_main;
