"use strict";
const vue = require("vue");
const index = require("./index");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "icon-button",
  props: {
    size: {},
    type: {},
    hideSkeleton: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          "ele-icon-border-color-base",
          { "ele-icon-bg-primary": _ctx.type === "primary" },
          { "ele-icon-bg-fill": _ctx.type !== "primary" && _ctx.type !== "bordered" }
        ]),
        style: vue.normalizeStyle({
          display: "flex",
          alignItems: "center",
          height: _ctx.size === "sm" ? "22px" : "28px",
          padding: _ctx.size === "sm" ? "0 6px" : "0 10px",
          boxSizing: "border-box",
          borderRadius: "4px",
          borderStyle: _ctx.type === "bordered" ? "solid" : void 0,
          borderWidth: _ctx.type === "bordered" ? "1px" : void 0
        })
      }, [
        !_ctx.hideSkeleton && (_ctx.type === "primary" || _ctx.type === "bordered") ? (vue.openBlock(), vue.createBlock(vue.unref(index.IconSkeleton), {
          key: 0,
          size: _ctx.size === "sm" ? "xs" : "sm",
          class: vue.normalizeClass([
            { "ele-icon-bg-white": _ctx.type === "primary" },
            { "ele-icon-bg-fill-light": _ctx.type !== "primary" }
          ]),
          style: { flex: 1 }
        }, null, 8, ["size", "class"])) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
module.exports = _sfc_main;
