"use strict";
const vue = require("vue");
const icons = require("../icons");
const _hoisted_1 = { style: {
  display: "grid",
  gap: "8px 6px",
  gridTemplateColumns: "repeat(3, 1fr)"
} };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "cover-row",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(6, (index) => {
          return vue.createElementVNode("div", {
            key: index,
            class: "ele-icon-border-color-base",
            style: {
              height: "18px",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "flex",
              alignItems: "center"
            }
          }, [
            vue.createVNode(vue.unref(icons.IconSkeleton), {
              size: "xs",
              style: { width: "68%", margin: "0 auto" }
            })
          ]);
        }), 64))
      ]);
    };
  }
});
module.exports = _sfc_main;
