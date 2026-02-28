import { defineComponent, openBlock, createElementBlock, normalizeStyle, createBlock, unref, createCommentVNode, renderSlot, createVNode } from "vue";
import { IconCheckbox, IconSkeleton } from "./index";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-table-row",
  props: {
    size: {},
    multiple: { type: Boolean },
    checkboxChecked: { type: Boolean },
    skeletonStyle: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "ele-icon-border-color-base",
        style: normalizeStyle({
          display: "flex",
          alignItems: "center",
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          boxSizing: "border-box",
          padding: _ctx.size === "sm" ? "0 8px 0 4px" : "0 12px 0 6px",
          height: _ctx.size === "sm" ? "9px" : "15px"
        })
      }, [
        _ctx.multiple ? (openBlock(), createBlock(unref(IconCheckbox), {
          key: 0,
          size: _ctx.size === "sm" ? "xs" : "sm",
          checked: _ctx.checkboxChecked,
          style: { margin: "0" }
        }, null, 8, ["size", "checked"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(unref(IconSkeleton), {
            size: _ctx.size === "sm" ? "xs" : "sm",
            style: normalizeStyle({
              flex: 1,
              marginLeft: _ctx.size === "sm" ? "4px" : "6px",
              ..._ctx.skeletonStyle || {}
            })
          }, null, 8, ["size", "style"]),
          createVNode(unref(IconSkeleton), {
            size: _ctx.size === "sm" ? "xs" : "sm",
            style: normalizeStyle({
              flex: 1,
              marginLeft: _ctx.size === "sm" ? "8px" : "12px",
              ..._ctx.skeletonStyle || {}
            })
          }, null, 8, ["size", "style"]),
          createVNode(unref(IconSkeleton), {
            size: _ctx.size === "sm" ? "xs" : "sm",
            style: normalizeStyle({
              flex: 1,
              marginLeft: _ctx.size === "sm" ? "8px" : "12px",
              ..._ctx.skeletonStyle || {}
            })
          }, null, 8, ["size", "style"])
        ])
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
