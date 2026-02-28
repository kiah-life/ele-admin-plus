import { defineComponent, openBlock, createElementBlock, normalizeClass, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
import { tabBarProps, tabBarEmits } from "./props";
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "EleTabBar" },
  __name: "index",
  props: tabBarProps,
  emits: tabBarEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleItemClick = (item) => {
      if (props.modelValue !== item.value) {
        emit("update:modelValue", item.value);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ele-tab-bar", { "is-plain": _ctx.type === "plain" }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.value,
            style: normalizeStyle(_ctx.itemStyle),
            class: normalizeClass(["ele-tab-item", { "is-active": item.value === _ctx.modelValue }]),
            onClick: ($event) => handleItemClick(item)
          }, toDisplayString(item.label), 15, _hoisted_1);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
