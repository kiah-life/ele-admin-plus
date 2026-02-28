import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, unref, createCommentVNode } from "vue";
import { IconSkeleton } from "./index";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-card",
  props: {
    size: {},
    checked: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          { "ele-icon-border-color-primary5": _ctx.checked },
          { "ele-icon-border-color-base": !_ctx.checked }
        ]),
        style: normalizeStyle({
          padding: _ctx.size === "sm" ? "8px" : "10px",
          borderRadius: "4px",
          borderStyle: "solid",
          borderWidth: "1px",
          position: "relative"
        })
      }, [
        createVNode(unref(IconSkeleton), {
          size: _ctx.size === "sm" ? "xs" : "sm"
        }, null, 8, ["size"]),
        _ctx.checked ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "ele-icon-border-color-primary",
          style: normalizeStyle({
            borderRadius: "2px",
            borderStyle: "solid",
            borderWidth: "4px",
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
            position: "absolute",
            right: _ctx.size === "sm" ? "2px" : "4px",
            top: _ctx.size === "sm" ? "2px" : "4px"
          })
        }, null, 4)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
