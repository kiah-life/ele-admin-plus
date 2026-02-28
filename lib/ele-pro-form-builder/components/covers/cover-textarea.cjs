"use strict";
const vue = require("vue");
const icons = require("../icons");
const _hoisted_1 = { style: { display: "flex", alignItems: "center", marginTop: "6px" } };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "cover-textarea",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(icons.IconInput), { style: { height: "38px", padding: "6px 6px 0 6px", display: "block" } }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(icons.IconSkeleton), { size: "sm" }),
          vue.createElementVNode("div", _hoisted_1, [
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { width: "50%" }
            }),
            vue.createVNode(vue.unref(icons.IconCursor))
          ])
        ]),
        _: 1
      });
    };
  }
});
module.exports = _sfc_main;
