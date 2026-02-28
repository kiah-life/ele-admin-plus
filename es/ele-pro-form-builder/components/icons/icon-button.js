import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, unref, createCommentVNode } from "vue";
import { IconSkeleton } from "./index";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-button",
  props: {
    size: {},
    type: {},
    hideSkeleton: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "ele-icon-border-color-base",
          { "ele-icon-bg-primary": _ctx.type === "primary" },
          { "ele-icon-bg-fill": _ctx.type !== "primary" && _ctx.type !== "bordered" }
        ]),
        style: normalizeStyle({
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
        !_ctx.hideSkeleton && (_ctx.type === "primary" || _ctx.type === "bordered") ? (openBlock(), createBlock(unref(IconSkeleton), {
          key: 0,
          size: _ctx.size === "sm" ? "xs" : "sm",
          class: normalizeClass([
            { "ele-icon-bg-white": _ctx.type === "primary" },
            { "ele-icon-bg-fill-light": _ctx.type !== "primary" }
          ]),
          style: { flex: 1 }
        }, null, 8, ["size", "class"])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
