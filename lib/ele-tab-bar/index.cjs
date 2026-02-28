"use strict";
const vue = require("vue");
const props = require("./props");
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "EleTabBar" },
  __name: "index",
  props: props.tabBarProps,
  emits: props.tabBarEmits,
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const handleItemClick = (item) => {
      if (props2.modelValue !== item.value) {
        emit("update:modelValue", item.value);
      }
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["ele-tab-bar", { "is-plain": _ctx.type === "plain" }])
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.items, (item) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key: item.value,
            style: vue.normalizeStyle(_ctx.itemStyle),
            class: vue.normalizeClass(["ele-tab-item", { "is-active": item.value === _ctx.modelValue }]),
            onClick: ($event) => handleItemClick(item)
          }, vue.toDisplayString(item.label), 15, _hoisted_1);
        }), 128))
      ], 2);
    };
  }
});
module.exports = _sfc_main;
