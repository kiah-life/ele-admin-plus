"use strict";
const vue = require("vue");
const icons = require("../icons");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "cover-select",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createVNode(vue.unref(icons.IconInput), { size: "sm" }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { width: "50%" }
            }),
            vue.createVNode(vue.unref(icons.SvgIcon), {
              name: "ArrowUp",
              size: "sm",
              style: { margin: "0 0 0 auto" }
            })
          ]),
          _: 1
        }),
        vue.createVNode(vue.unref(icons.IconPanel), { size: "sm" }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(icons.IconSkeleton), { size: "sm" }),
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { marginTop: "4px" }
            }),
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { marginTop: "4px" }
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
module.exports = _sfc_main;
