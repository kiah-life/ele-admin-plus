"use strict";
const vue = require("vue");
const icons = require("../icons");
const _hoisted_1 = { style: { display: "flex", alignItems: "center" } };
const _hoisted_2 = { style: { display: "flex", alignItems: "center", marginTop: "4px" } };
const _hoisted_3 = { style: { display: "flex", alignItems: "center", marginTop: "4px" } };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "cover-multiple-cascader",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createVNode(vue.unref(icons.IconInput), { size: "sm" }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { flex: 1, maxWidth: "32px" }
            }),
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { flex: 1, maxWidth: "32px", margin: "0 0 0 6px" }
            }),
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "sm",
              style: { flex: 1, maxWidth: "32px", margin: "0 6px 0 6px" }
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
            vue.createElementVNode("div", _hoisted_1, [
              vue.createVNode(vue.unref(icons.IconCheckbox), {
                size: "xs",
                checked: true
              }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              }),
              vue.createVNode(vue.unref(icons.IconArrow), {
                size: "sm",
                color: "primary",
                style: { margin: "0 1px 0 4px" }
              }),
              vue.createVNode(vue.unref(icons.IconCheckbox), {
                size: "xs",
                checked: true
              }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              }),
              vue.createVNode(vue.unref(icons.IconArrow), {
                size: "sm",
                color: "primary",
                style: { margin: "0 1px 0 4px" }
              }),
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              })
            ]),
            vue.createElementVNode("div", _hoisted_2, [
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              }),
              vue.createVNode(vue.unref(icons.IconArrow), {
                size: "sm",
                style: { margin: "0 1px 0 4px" }
              }),
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              }),
              vue.createVNode(vue.unref(icons.IconArrow), {
                size: "sm",
                style: { margin: "0 1px 0 4px" }
              }),
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              })
            ]),
            vue.createElementVNode("div", _hoisted_3, [
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              }),
              vue.createVNode(vue.unref(icons.IconArrow), {
                size: "sm",
                style: { margin: "0 1px 0 4px" }
              }),
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              }),
              vue.createVNode(vue.unref(icons.IconArrow), {
                size: "sm",
                style: { margin: "0 1px 0 4px" }
              }),
              vue.createVNode(vue.unref(icons.IconCheckbox), { size: "xs" }),
              vue.createVNode(vue.unref(icons.IconSkeleton), {
                size: "sm",
                style: { flex: 1 }
              })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
module.exports = _sfc_main;
