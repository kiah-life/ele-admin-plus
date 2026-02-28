"use strict";
const vue = require("vue");
const icons = require("../icons");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "cover-edit-tag",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(icons.IconInput), { size: "sm" }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(icons.IconSkeleton), {
            size: "sm",
            style: { flex: 1, maxWidth: "20px" }
          }),
          vue.createVNode(vue.unref(icons.IconSkeleton), {
            size: "sm",
            style: { flex: 1, maxWidth: "20px", margin: "0 0 0 6px" }
          }),
          vue.createVNode(vue.unref(icons.IconSkeleton), {
            size: "sm",
            style: { flex: 1, maxWidth: "20px", margin: "0 0 0 6px" }
          }),
          vue.createVNode(vue.unref(icons.IconCursor), { style: { margin: "0 0 0 6px" } })
        ]),
        _: 1
      });
    };
  }
});
module.exports = _sfc_main;
